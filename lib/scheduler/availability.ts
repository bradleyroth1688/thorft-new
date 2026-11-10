import { SCHEDULE, type MeetingType } from './config'
import { googleBusy, type Interval } from './google'
import { icsBusy } from './ics'
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

/** Every bookable start time for a meeting type, grouped by New York date. Fails closed: a calendar error throws. */
export async function availability(type: MeetingType, opts: { fresh?: boolean; ignoreEventWindow?: [number, number] } = {}): Promise<Day[]> {
  const tz = SCHEDULE.timeZone
  const now = new Date()
  const today = localDate(now, tz)
  const lo = zonedToUtc(...(today.split('-').map(Number) as [number, number, number]), 0, 0, tz)
  const hi = new Date(lo.getTime() + (SCHEDULE.horizonDays + 1) * 86_400_000)

  const [g, i] = await Promise.all([googleBusy(lo, hi), icsBusy(lo, hi, opts.fresh)])
  let raw = [...g, ...i]
  // When a guest reschedules, their own booking must not block the new time.
  const skip = opts.ignoreEventWindow
  if (skip) raw = raw.filter((b) => !(b.start >= skip[0] && b.end <= skip[1] && b.source.startsWith('google')))
  const busy = merge(raw)

  const dur = type.minutes * 60_000
  const buf = SCHEDULE.bufferMinutes * 60_000
  const earliest = now.getTime() + SCHEDULE.minNoticeHours * 3_600_000
  const [sh, sm] = hhmm(type.hours?.start || SCHEDULE.start)
  const [eh, em] = hhmm(type.hours?.end || SCHEDULE.end)

  const days: Day[] = []
  for (let k = 0; k <= SCHEDULE.horizonDays; k++) {
    const date = addDays(today, k)
    if (!SCHEDULE.weekdays.includes(weekday(date))) continue
    const [y, m, d] = date.split('-').map(Number)
    const open = zonedToUtc(y, m, d, sh, sm, tz).getTime()
    const close = zonedToUtc(y, m, d, eh, em, tz).getTime()
    const slots: string[] = []
    for (let t = open; t + dur <= close; t += SCHEDULE.stepMinutes * 60_000) {
      if (t < earliest) continue
      const a = t - buf
      const b = t + dur + buf
      if (busy.some((x) => x.start < b && x.end > a)) continue
      slots.push(new Date(t).toISOString())
    }
    days.push({ date, slots })
  }
  return days
}

export async function isOpen(type: MeetingType, startIso: string, opts: { ignoreEventWindow?: [number, number] } = {}): Promise<boolean> {
  const days = await availability(type, { fresh: true, ...opts })
  return days.some((d) => d.slots.includes(new Date(startIso).toISOString()))
}
