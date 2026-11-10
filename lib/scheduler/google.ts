// Google Calendar through Brad's own OAuth grant (agentic client, scope "calendar").
// Reads free/busy across every Google calendar he can see, and writes bookings to his THOR calendar.

type Token = { value: string; expires: number }
let cached: Token | null = null

const API = 'https://www.googleapis.com/calendar/v3'

async function accessToken(): Promise<string> {
  if (cached && cached.expires > Date.now() + 60_000) return cached.value
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_SCHEDULER_CLIENT_ID || '',
      client_secret: process.env.GOOGLE_SCHEDULER_CLIENT_SECRET || '',
      refresh_token: process.env.GOOGLE_SCHEDULER_REFRESH_TOKEN || '',
      grant_type: 'refresh_token',
    }),
    cache: 'no-store',
  })
  const d = await res.json()
  if (!res.ok || !d.access_token) throw new Error(`google token: ${res.status} ${d.error || ''}`)
  cached = { value: d.access_token, expires: Date.now() + d.expires_in * 1000 }
  return cached.value
}

async function call(path: string, init: RequestInit = {}): Promise<any> {
  const res = await fetch(API + path, {
    ...init,
    headers: { Authorization: `Bearer ${await accessToken()}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
    cache: 'no-store',
  })
  if (res.status === 204) return null
  const d = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`google ${init.method || 'GET'} ${path.split('?')[0]}: ${res.status} ${d.error?.message || ''}`)
  return d
}

/** Calendars that block time. Env SCHEDULER_GOOGLE_CALENDARS, space- or comma-separated. */
export function busyCalendars(): string[] {
  return (process.env.SCHEDULER_GOOGLE_CALENDARS || 'primary').split(/[\s,]+/).filter(Boolean)
}

export type Interval = { start: number; end: number; source: string }

export async function googleBusy(lo: Date, hi: Date): Promise<Interval[]> {
  const ids = busyCalendars()
  const d = await call('/freeBusy', {
    method: 'POST',
    body: JSON.stringify({ timeMin: lo.toISOString(), timeMax: hi.toISOString(), items: ids.map((id) => ({ id })) }),
  })
  const out: Interval[] = []
  for (const [id, cal] of Object.entries<any>(d.calendars || {})) {
    // A calendar that errors must not read as "free". Fail closed.
    if (cal.errors?.length) throw new Error(`freeBusy error on a calendar: ${cal.errors[0].reason}`)
    for (const b of cal.busy || []) out.push({ start: Date.parse(b.start), end: Date.parse(b.end), source: `google:${id.slice(0, 6)}` })
  }
  return out
}

/** Events with titles, for the travel rules. Expands recurring events. Pages up to 2,500 x 4. */
export async function listEvents(calendarId: string, lo: Date, hi: Date): Promise<any[]> {
  const out: any[] = []
  let token = ''
  for (let i = 0; i < 4; i++) {
    const q = new URLSearchParams({
      timeMin: lo.toISOString(), timeMax: hi.toISOString(), singleEvents: 'true', orderBy: 'startTime', maxResults: '2500',
      fields: 'nextPageToken,items(id,status,summary,start,end,location,eventType,transparency)',
    })
    if (token) q.set('pageToken', token)
    const d = await call(`/calendars/${encodeURIComponent(calendarId)}/events?${q}`)
    out.push(...(d.items || []))
    token = d.nextPageToken || ''
    if (!token) break
  }
  return out
}

/** Calendars whose event titles feed the travel rules. Env SCHEDULER_TRAVEL_CALENDARS. */
export function travelCalendars(): string[] {
  return (process.env.SCHEDULER_TRAVEL_CALENDARS || 'primary').split(/[\s,]+/).filter(Boolean)
}

export type NewEvent = {
  id: string
  summary: string
  description: string
  location: string
  start: Date
  end: Date
  timeZone: string
  guest: { email: string; name: string }
  meta: Record<string, string>
}

export async function createEvent(e: NewEvent): Promise<{ id: string; htmlLink: string }> {
  return call('/calendars/primary/events?sendUpdates=all', {
    method: 'POST',
    body: JSON.stringify({
      id: e.id,
      summary: e.summary,
      description: e.description,
      location: e.location,
      start: { dateTime: e.start.toISOString(), timeZone: e.timeZone },
      end: { dateTime: e.end.toISOString(), timeZone: e.timeZone },
      attendees: [{ email: e.guest.email, displayName: e.guest.name }],
      guestsCanModify: false,
      extendedProperties: { private: { thorScheduler: '1', ...e.meta } },
    }),
  })
}

/** Google accepts a client-chosen event id in base32hex (a-v, 0-9). Choosing it first lets the invite carry its own manage link. */
export function newEventId(): string {
  const alphabet = '0123456789abcdefghijklmnopqrstuv'
  const bytes = crypto.getRandomValues(new Uint8Array(26))
  return 'thor' + Array.from(bytes, (b) => alphabet[b % 32]).join('')
}

export async function getEvent(id: string): Promise<any | null> {
  try {
    return await call(`/calendars/primary/events/${encodeURIComponent(id)}`)
  } catch {
    return null
  }
}

export async function moveEvent(id: string, start: Date, end: Date, timeZone: string, description: string) {
  return call(`/calendars/primary/events/${encodeURIComponent(id)}?sendUpdates=all`, {
    method: 'PATCH',
    body: JSON.stringify({
      start: { dateTime: start.toISOString(), timeZone },
      end: { dateTime: end.toISOString(), timeZone },
      description,
    }),
  })
}

export async function cancelEvent(id: string) {
  return call(`/calendars/primary/events/${encodeURIComponent(id)}?sendUpdates=all`, { method: 'DELETE' })
}
