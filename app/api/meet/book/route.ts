import { NextResponse } from 'next/server'
import { MEETING_TYPES, SCHEDULE, locationLabel, locationUrl } from '@/lib/scheduler/config'
import { isOpen } from '@/lib/scheduler/availability'
import { createEvent, newEventId } from '@/lib/scheduler/google'
import { description, emailGuest, notifyBrad, whenLabel } from '@/lib/scheduler/booking'
import { manageUrl } from '@/lib/scheduler/sign'
import { rateLimit } from '@/lib/rate-limit'
import { verifyTurnstile } from '@/lib/turnstile'
import { spamReason } from '@/lib/lead-spam'

export const dynamic = 'force-dynamic'

const EMAIL = /^[^\s@<>()",;]+@[^\s@<>()",;]+\.[a-z]{2,}$/i
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max) : '')

// Every booking makes Google send an invite from Brad's own address. An unguarded route would be an
// invite-spam relay on broth@thoranalytics.com, so this route carries all four lead-route guards.
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (!rateLimit(ip, 'meet-book', 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }
  const body = await request.json().catch(() => ({}))
  const type = MEETING_TYPES[clean(body.type, 40)]
  const name = clean(body.name, 100)
  const email = clean(body.email, 200).toLowerCase()
  const firm = clean(body.firm, 120)
  const etf = clean(body.etf, 60).toUpperCase()
  const notes = typeof body.notes === 'string' ? body.notes.trim().slice(0, 1000) : ''
  const start = new Date(clean(body.start, 40))

  if (!type) return NextResponse.json({ error: 'Unknown meeting type' }, { status: 400 })
  if (!name || !EMAIL.test(email) || isNaN(start.getTime())) {
    return NextResponse.json({ error: 'Please enter your name, a valid email and a time.' }, { status: 400 })
  }
  if (type.askEtf && !etf) return NextResponse.json({ error: 'Please enter the ETF we will discuss.' }, { status: 400 })

  if (process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    if (!body.turnstileToken || !(await verifyTurnstile(body.turnstileToken))) {
      return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 403 })
    }
  }

  // A flagged request books nothing and still reads as success, so a bot learns nothing.
  const fake = { ok: true, when: whenLabel(start), location: locationLabel(type.location) }
  if (body.honeypot) return NextResponse.json(fake)
  if (!rateLimit(email, 'meet-book-email', 3, 24 * 60 * 60 * 1000)) return NextResponse.json(fake)
  const spam = spamReason({ name, firm, email })
  if (spam) {
    console.warn('meet/book flagged:', spam)
    return NextResponse.json(fake)
  }

  try {
    if (!(await isOpen(type, start.toISOString()))) {
      return NextResponse.json({ error: 'That time was just taken. Please pick another.' }, { status: 409 })
    }
    const details = { name, email, firm, etf, notes }
    const id = newEventId()
    const manage = manageUrl(id)
    const summary = type.title(details)
    const desc = description(type, details, manage)
    const end = new Date(start.getTime() + type.minutes * 60_000)
    await createEvent({
      id,
      summary,
      description: desc,
      location: locationUrl(type.location),
      start,
      end,
      timeZone: SCHEDULE.timeZone,
      guest: { email, name },
      meta: { type: type.slug, guestEmail: email, guestName: name },
    })
    await emailGuest({ kind: 'booked', id, type, guest: { name, email }, summary, description: desc, start, end, manage, sequence: 0 })
    await notifyBrad(
      `New booking: ${type.title(details)}`,
      [whenLabel(start), `${name} <${email}>`, firm && `Firm: ${firm}`, etf && `ETF: ${etf}`, notes && `Notes: ${notes}`].filter(Boolean) as string[],
      email,
    )
    return NextResponse.json({ ok: true, when: whenLabel(start), location: locationLabel(type.location), manage })
  } catch (e) {
    console.error('meet/book failed', e)
    return NextResponse.json({ error: 'Booking failed. Please email welcome@thoranalytics.com.' }, { status: 500 })
  }
}
