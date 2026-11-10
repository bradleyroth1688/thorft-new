// "Out of town or in the air." Google freeBusy cannot see this: trips and hotel stays are all-day
// events marked Free, and a flight blocks only its own hours. These rules read the event titles instead.
//
//   1. Every flight blocks 2 hours before departure to 1 hour after landing.
//   2. A trip blocks everything from the first flight away from home to the landing of the flight home.
//   3. A hotel or rental stay ("Stay at ...", from Gmail) blocks its days.
//   4. An all-day item that names a trip blocks its days: "NAPLES, FL", "Columbia, MD Soccer Tourney", OOO, PTO, vacation.
// A reminder such as "Hannah B-Day" or "KIDS WINTER BREAK" does not block.
import { SCHEDULE } from './config'
import { listEvents, travelCalendars, type Interval } from './google'
import { zonedToUtc } from './time'

const HOME = /\b(pittsburgh|pit)\b/i
const FLIGHT = /^flight to (.+?)(\s*\(([A-Z0-9]{2}\s?\d{1,4})\))?\s*$/i
const STAY = /^stay at\b/i
const AWAY_WORDS = /\b(trip|travel(ing)?|vacation|out of town|out of (the )?office|ooo|pto|tourney|tournament)\b/i
const CITY_STATE = /\b[A-Za-z .'-]{3,}, ?(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])\b/

const BEFORE = 2 * 3_600_000
const AFTER = 1 * 3_600_000

function dayStart(ymd: string): number {
  const [y, m, d] = ymd.split('-').map(Number)
  return zonedToUtc(y, m, d, 0, 0, SCHEDULE.timeZone).getTime()
}

type Flight = { start: number; end: number; home: boolean }

export function travelFrom(events: any[]): Interval[] {
  const out: Interval[] = []
  const seen = new Set<string>()
  const flights: Flight[] = []

  for (const e of events) {
    if (e.status === 'cancelled') continue
    const title = String(e.summary || '').trim()
    const key = `${title.toLowerCase()}|${e.start?.dateTime || e.start?.date}`
    if (seen.has(key)) continue // the same flight lands on both the THOR and the Personal calendar
    seen.add(key)

    const f = title.match(FLIGHT)
    if (f && e.start?.dateTime && e.end?.dateTime) {
      const start = Date.parse(e.start.dateTime)
      const end = Date.parse(e.end.dateTime)
      flights.push({ start, end, home: HOME.test(f[1]) })
      out.push({ start: start - BEFORE, end: end + AFTER, source: 'travel:flight' })
      continue
    }

    if (e.eventType === 'outOfOffice' && e.start?.dateTime) {
      out.push({ start: Date.parse(e.start.dateTime), end: Date.parse(e.end.dateTime), source: 'travel:ooo' })
      continue
    }

    if (e.start?.date && e.end?.date && (STAY.test(title) || AWAY_WORDS.test(title) || CITY_STATE.test(title))) {
      out.push({ start: dayStart(e.start.date), end: dayStart(e.end.date), source: STAY.test(title) ? 'travel:stay' : 'travel:away' })
    }
  }

  flights.sort((a, b) => a.start - b.start)
  let leftAt: number | null = null
  for (const f of flights) {
    if (!f.home && leftAt === null) leftAt = f.start - BEFORE
    else if (f.home && leftAt !== null) {
      out.push({ start: leftAt, end: f.end + AFTER, source: 'travel:trip' })
      leftAt = null
    }
  }
  return out
}

export async function travelBusy(lo: Date, hi: Date): Promise<Interval[]> {
  // Look back three weeks, so a trip that began before today still blocks until the flight home.
  const from = new Date(lo.getTime() - 21 * 86_400_000)
  const lists = await Promise.all(travelCalendars().map((id) => listEvents(id, from, hi)))
  return travelFrom(lists.flat()).filter((x) => x.end > lo.getTime() && x.start < hi.getTime())
}
