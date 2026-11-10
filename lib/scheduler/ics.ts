// Outlook calendars (UX, McDowell) through their published ICS links.
// Env SCHEDULER_ICS_URLS: whitespace-separated "Label|https://..." entries. The links are secrets.
// Outlook refreshes a published calendar on its own timer, so a brand-new Outlook meeting can take a while to block time here.
import ICAL from 'ical.js'
import type { Interval } from './google'

const MAX_OCCURRENCES = 20_000

function feeds(): { label: string; url: string }[] {
  return (process.env.SCHEDULER_ICS_URLS || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((entry) => {
      const i = entry.indexOf('|')
      return i > 0 ? { label: entry.slice(0, i), url: entry.slice(i + 1) } : { label: 'ics', url: entry }
    })
    .map((f) => ({ ...f, url: f.url.replace(/^webcal:\/\//, 'https://') }))
}

function blocksTime(c: any): boolean {
  const status = String(c.getFirstPropertyValue('status') || '').toUpperCase()
  if (status === 'CANCELLED') return false
  const title = String(c.getFirstPropertyValue('summary') || '').toLowerCase()
  if (title.startsWith('canceled:') || title.startsWith('cancelled:')) return false
  const busy = String(c.getFirstPropertyValue('x-microsoft-cdo-busystatus') || '').toUpperCase()
  if (busy === 'FREE') return false
  if (String(c.getFirstPropertyValue('transp') || '').toUpperCase() === 'TRANSPARENT') return false
  return true
}

function isAllDayBusy(c: any): boolean {
  // Outlook marks most all-day items (birthdays, holidays, reminders) as Free. Only an explicit Busy or OOF blocks the day.
  const busy = String(c.getFirstPropertyValue('x-microsoft-cdo-busystatus') || '').toUpperCase()
  return busy === 'BUSY' || busy === 'OOF'
}

export function parseBusy(text: string, lo: Date, hi: Date, label: string): Interval[] {
  const root = new ICAL.Component(ICAL.parse(text))
  for (const tz of root.getAllSubcomponents('vtimezone')) ICAL.TimezoneService.register(tz)

  const byUid = new Map<string, { master?: any; exceptions: any[] }>()
  for (const v of root.getAllSubcomponents('vevent')) {
    const uid = String(v.getFirstPropertyValue('uid') || Math.random())
    const g = byUid.get(uid) || { exceptions: [] }
    if (v.hasProperty('recurrence-id')) g.exceptions.push(v)
    else g.master = v
    byUid.set(uid, g)
  }

  const loMs = lo.getTime()
  const hiMs = hi.getTime()
  const out: Interval[] = []
  const push = (c: any, start: any, end: any) => {
    const allDay = start.isDate
    if (allDay ? !isAllDayBusy(c) : !blocksTime(c)) return
    const s = start.toJSDate().getTime()
    const e = end ? end.toJSDate().getTime() : s + 60 * 60_000
    if (e > loMs && s < hiMs) out.push({ start: s, end: e, source: `ics:${label}` })
  }

  byUid.forEach((g) => {
    if (!g.master) {
      // Orphan overrides (the series lives outside the feed window): use each one as a single event.
      for (const x of g.exceptions) {
        const ev = new ICAL.Event(x)
        push(x, ev.startDate, ev.endDate)
      }
      return
    }
    const ev = new ICAL.Event(g.master)
    for (const x of g.exceptions) ev.relateException(x)
    if (!ev.isRecurring()) {
      push(g.master, ev.startDate, ev.endDate)
      return
    }
    const it = ev.iterator()
    let next: any
    let n = 0
    while ((next = it.next()) && n++ < MAX_OCCURRENCES) {
      if (next.toJSDate().getTime() >= hiMs) break
      const occ = ev.getOccurrenceDetails(next)
      push(occ.item.component, occ.startDate, occ.endDate)
    }
  })
  return out
}

export async function icsBusy(lo: Date, hi: Date, fresh = false): Promise<Interval[]> {
  const all = await Promise.all(
    feeds().map(async (f) => {
      const res = await fetch(f.url, fresh ? { cache: 'no-store' } : { next: { revalidate: 300 } })
      if (!res.ok) throw new Error(`ics ${f.label}: ${res.status}`)
      return parseBusy(await res.text(), lo, hi, f.label)
    }),
  )
  return all.flat()
}
