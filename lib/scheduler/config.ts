// thorft.com/meet — Brad's own scheduler (replaces Acuity).
// Hours, meeting types and wording live here. Secrets (calendar IDs, feed links, meeting links) live in env vars:
// this repo is public.

export const SCHEDULE = {
  timeZone: 'America/New_York',
  weekdays: [1, 2, 3, 4, 5], // Mon-Fri. Brad's rule: weekdays 8 to 4 only, never weekends or evenings.
  start: '08:00',
  end: '16:00',
  stepMinutes: 30,
  minNoticeHours: 4,
  horizonDays: 60, // "The week of" requests reach weeks ahead.
  bufferMinutes: 15, // Free time kept before and after every busy block, so meetings never run back to back.
}

export type LocationKind = 'zoom' | 'riverside'

export type BookingDetails = { name: string; email: string; firm?: string; etf?: string; notes?: string; source?: string }

export type MeetingType = {
  slug: string
  name: string
  minutes: number
  location: LocationKind
  blurb: string
  askEtf?: boolean
  /** Overrides SCHEDULE start/end for this type. */
  hours?: { start: string; end: string }
  title: (b: BookingDetails) => string
}

export const MEETING_TYPES: Record<string, MeetingType> = {
  // thorft.com/call lands here. Every published CTA promises "fifteen minutes" (canon/CTA_STANDARD.md).
  intro: {
    slug: 'intro',
    name: 'Intro Call with Brad Roth',
    minutes: 15,
    location: 'zoom',
    blurb: 'Fifteen minutes with Brad Roth, founder and CIO of THOR: the mechanism, the index history, and where it fits.',
    title: (b) => `Intro Call // ${b.name}${b.firm ? ` // ${b.firm}` : ''}`,
  },
  demo: {
    slug: 'demo',
    name: 'THOR Funds Demo',
    minutes: 30,
    location: 'zoom',
    blurb: 'A 30-minute walkthrough of the THOR ETFs and model portfolios on Zoom.',
    title: (b) => `THOR Funds Demo // ${b.name}${b.firm ? ` // ${b.firm}` : ''}`,
  },
  meeting: {
    slug: 'meeting',
    name: 'Meeting with Brad Roth',
    minutes: 60,
    location: 'zoom',
    blurb: 'A one-hour meeting with Brad Roth, Founder and CIO of THOR, on Zoom.',
    title: (b) => `Meeting // ${b.name}${b.firm ? ` // ${b.firm}` : ''}`,
  },
  podcast: {
    slug: 'podcast',
    name: 'Behind the Ticker Podcast',
    minutes: 30,
    location: 'riverside',
    askEtf: true,
    hours: { start: '10:00', end: '14:00' }, // Brad records only while the house is empty.
    blurb: 'A 30-minute Behind the Ticker recording in the Riverside studio.',
    title: (b) => `Behind the Ticker // ${b.name} // ${b.etf || 'ETF TBD'}`,
  },
}

export const DEFAULT_TYPE = 'demo'

export function locationUrl(kind: LocationKind): string {
  return (kind === 'zoom' ? process.env.SCHEDULER_ZOOM_URL : process.env.SCHEDULER_RIVERSIDE_URL) || ''
}

export function locationLabel(kind: LocationKind): string {
  return kind === 'zoom' ? 'Zoom' : 'Riverside'
}

export const SITE_URL = process.env.SCHEDULER_SITE_URL || 'https://thorft.com'

/** The parts of a meeting type a browser may see. */
export type PublicType = { slug: string; name: string; minutes: number; location: string; blurb: string; askEtf: boolean }

export function publicType(t: MeetingType): PublicType {
  return { slug: t.slug, name: t.name, minutes: t.minutes, location: locationLabel(t.location), blurb: t.blurb, askEtf: !!t.askEtf }
}
