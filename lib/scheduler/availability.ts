import { SCHEDULE, type MeetingType } from './config'
import { googleBusy, type Interval } from './google'
import { icsBusy } from './ics'
import { travelBusy } from './travel'
import { addDays, hhmm, localDate, weekday, zonedToUtc } from './time'

export type Day = { date: string; slots: string[] }

function merge(xs: Interval[]): Interval[] {
  const s = [...xs].sort((a, b) => a.start - b.start)
  const out: Interval[] = []
  for (const x of s) {
    const last = out[out.length - 1]
    if (last && x.start <= last.end) last.end = Math.max(last.end, x.end)
    else out.push({ ...x })
  }
  return out
}

type Computed = { days: Day[]; fits: (startMs: number) => boolean }

async function compute(type: MeetingType, opts: { fresh?: boolean; ignoreEventWindow?: [number, number] } = {}): Promise<Computed> {
  const tz = SCHEDULE.timeZone
  const now = new Date()
  const today = localDate(now, tz)
  const lo = zonedToUtc(...(today.split('-').map(Number) as [number, number, number]), 0, 0, tz)
  const hi = new Date(lo.getTime() + (SCHEDULE.horizonDays + 1) * 86_400_000)

  const [g, i, tr] = await Promise.all([googleBusy(lo, hi), icsBusy(lo, hi, opts.fresh), travelBusy(lo, hi)])
  let raw = [...g, ...i, ...tr]
  // When a guest reschedules, their own booking must not block the new time.
  const skip = opts.ignoreEventWindow
  if (skip) raw = raw.filter((b) => !(b.start >= skip[0] && b.end <= skip[1] && b.source.startsWith('google')))
  const busy = merge(raw)

  const dur = type.minutes * 60_000
  const buf = SCHEDULE.bufferMinutes * 60_000
  const earliest = now.getTime() + SCHEDULE.minNoticeHours * 3_600_000
  const [sh, sm] = hhmm(type.hours?.start || SCHEDULE.start)
  const [eh, em] = hhmm(type.hours?.end || SCHEDULE.end)
  const window = (date: string) => {
    const [y, m, d] = date.split('-').map(Number)
    return [zonedToUtc(y, m, d, sh, sm, tz).getTime(), zonedToUtc(y, m, d, eh, em, tz).getTime()]
  }

  /** True when a meeting of this type can start at `t`: a working day, inside the hours, enough notice, and clear of every busy block plus buffer. Any minute, not only the 30-minute grid. */
  const fits = (t: number) => {
    const date = localDate(new Date(t), tz)
    if (!SCHEDULE.weekdays.includes(weekday(date)) || t < earliest || t > hi.getTime()) return false
    const [open, close] = window(date)
    if (t < open || t + dur > close) return false
    return !busy.some((x) => x.start < t + dur + buf && x.end > t - buf)
  }

  const days: Day[] = []
  for (let k = 0; k <= SCHEDULE.horizonDays; k++) {
    const date = addDays(today, k)
    if (!SCHEDULE.weekdays.includes(weekday(date))) continue
    const [open, close] = window(date)
    const slots: string[] = []
    for (let t = open; t + dur <= close; t += SCHEDULE.stepMinutes * 60_000) if (fits(t)) slots.push(new Date(t).toISOString())
    days.push({ date, slots })
  }
  return { days, fits }
}

/** Every bookable start time for a meeting type, grouped by New York date. Fails closed: a calendar error throws. */
export async function availability(type: MeetingType, opts: { fresh?: boolean; ignoreEventWindow?: [number, number] } = {}): Promise<Day[]> {
  return (await compute(type, opts)).days
}

/** Open slots plus an answer for each time the guest proposed (any minute, e.g. 2:15 PM). */
export async function availabilityWithChecks(type: MeetingType, proposed: number[]): Promise<{ days: Day[]; proposed: { start: string; open: boolean }[] }> {
  const c = await compute(type)
  return { days: c.days, proposed: proposed.map((t) => ({ start: new Date(t).toISOString(), open: c.fits(t) })) }
}

/** Re-checked against fresh feeds right before a booking. Accepts any minute, so a time a guest proposed by email can be booked too. */
export async function isOpen(type: MeetingType, startIso: string, opts: { ignoreEventWindow?: [number, number] } = {}): Promise<boolean> {
  const c = await compute(type, { fresh: true, ...opts })
  return c.fits(new Date(startIso).getTime())
}
