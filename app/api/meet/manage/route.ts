import { NextResponse } from 'next/server'
import { MEETING_TYPES, SCHEDULE } from '@/lib/scheduler/config'
import { isOpen } from '@/lib/scheduler/availability'
import { cancelEvent, getEvent, moveEvent } from '@/lib/scheduler/google'
import { emailGuest, notifyBrad, whenLabel } from '@/lib/scheduler/booking'
import { manageUrl, verify } from '@/lib/scheduler/sign'
import { rateLimit } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

/** Load a booking. Only events this scheduler created, behind a valid signature, are visible. */
async function load(id: string, sig: string) {
  if (!verify(id, sig)) return null
  const ev = await getEvent(id)
  const meta = ev?.extendedProperties?.private
  if (!ev || meta?.thorScheduler !== '1' || ev.status === 'cancelled') return null
  const type = MEETING_TYPES[meta.type]
  if (!type) return null
  return { ev, meta, type }
}

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams
  const b = await load(q.get('id') || '', q.get('sig') || '')
  if (!b) return NextResponse.json({ error: 'This booking was not found or is already cancelled.' }, { status: 404 })
  return NextResponse.json({
    type: b.type.slug,
    typeName: b.type.name,
    title: b.ev.summary,
    start: b.ev.start.dateTime,
    when: whenLabel(new Date(b.ev.start.dateTime)),
  })
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (!rateLimit(ip, 'meet-manage', 10, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }
  const body = await request.json().catch(() => ({}))
  const b = await load(String(body.id || ''), String(body.sig || ''))
  if (!b) return NextResponse.json({ error: 'This booking was not found or is already cancelled.' }, { status: 404 })
  const guest = `${b.meta.guestName} <${b.meta.guestEmail}>`

  try {
    if (body.action === 'cancel') {
      await cancelEvent(b.ev.id)
      await notifyBrad(`Cancelled: ${b.ev.summary}`, [whenLabel(new Date(b.ev.start.dateTime)), guest], b.meta.guestEmail)
      return NextResponse.json({ ok: true })
    }
    if (body.action === 'reschedule') {
      const start = new Date(String(body.start || ''))
      if (isNaN(start.getTime())) return NextResponse.json({ error: 'Pick a new time.' }, { status: 400 })
      const window: [number, number] = [Date.parse(b.ev.start.dateTime), Date.parse(b.ev.end.dateTime)]
      if (!(await isOpen(b.type, start.toISOString(), { ignoreEventWindow: window }))) {
        return NextResponse.json({ error: 'That time was just taken. Please pick another.' }, { status: 409 })
      }
      const end = new Date(start.getTime() + b.type.minutes * 60_000)
      const prior = String(b.ev.description || '')
      const desc = prior.includes('/meet/manage') ? prior : `${prior}\n\nReschedule or cancel: ${manageUrl(b.ev.id)}`
      const moved = await moveEvent(b.ev.id, start, end, SCHEDULE.timeZone, desc)
      await emailGuest({
        kind: 'moved', id: b.ev.id, type: b.type, guest: { name: b.meta.guestName, email: b.meta.guestEmail },
        summary: b.ev.summary, description: desc, start, end, manage: manageUrl(b.ev.id), sequence: Number(moved?.sequence) || 1,
      })
      await notifyBrad(
        `Rescheduled: ${b.ev.summary}`,
        [`Was: ${whenLabel(new Date(b.ev.start.dateTime))}`, `Now: ${whenLabel(start)}`, guest],
        b.meta.guestEmail,
      )
      return NextResponse.json({ ok: true, when: whenLabel(start) })
    }
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (e) {
    console.error('meet/manage failed', e)
    return NextResponse.json({ error: 'That did not work. Please email welcome@thoranalytics.com.' }, { status: 500 })
  }
}
