import { NextResponse } from 'next/server'
import { DEFAULT_TYPE, MEETING_TYPES, SCHEDULE, SITE_URL } from '@/lib/scheduler/config'
import { availabilityWithChecks, type Day } from '@/lib/scheduler/availability'
import { pick } from '@/lib/scheduler/suggest'
import { addDays, localDate, weekday } from '@/lib/scheduler/time'

export const dynamic = 'force-dynamic'

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)
const DAY_NAMES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const YMD = /^\d{4}-\d{2}-\d{2}$/
const HM = /^\d{1,2}:\d{2}$/

/**
 * A block of open times to paste into an email reply, or for Jane to read.
 *
 * Query (all optional, all Eastern):
 *   type    demo | meeting | podcast
 *   count   1-10 times (default 5)
 *   from,to YYYY-MM-DD date range, e.g. "the week of Dec 7" = from=2026-12-07&to=2026-12-11
 *   days    weekdays, e.g. tue,wed
 *   after,before  HH:MM window, e.g. after=12:00 for "afternoons"
 *   want    a time the guest proposed (ISO with offset); repeat for each one
 *
 * `text` is plain and short. `html` is the same block with each time as a one-click booking link.
 * When the filters leave no open time, the answer falls back to the nearest open times from `from` on.
 */
export async function GET(request: Request) {
  const q = new URL(request.url).searchParams
  const type = MEETING_TYPES[q.get('type') || DEFAULT_TYPE]
  if (!type) return NextResponse.json({ error: 'Unknown meeting type' }, { status: 404 })
  const count = Math.min(Math.max(Number(q.get('count')) || 5, 1), 10)
  const from = YMD.test(q.get('from') || '') ? q.get('from')! : ''
  const to = YMD.test(q.get('to') || '') ? q.get('to')! : ''
  const days = (q.get('days') || '').toLowerCase().split(/[\s,]+/).filter(Boolean)
    .map((d) => (/^\d$/.test(d) ? Number(d) : DAY_NAMES.indexOf(d.slice(0, 3)))).filter((d) => d >= 0)
  const after = HM.test(q.get('after') || '') ? q.get('after')!.padStart(5, '0') : ''
  const before = HM.test(q.get('before') || '') ? q.get('before')!.padStart(5, '0') : ''
  const wanted = q.getAll('want').map((w) => Date.parse(w)).filter((t) => !isNaN(t)).slice(0, 10)
  const tz = SCHEDULE.timeZone

  try {
    const all = await availabilityWithChecks(type, wanted)
    const page = `${SITE_URL}/meet/${type.slug}`
    const fmtDay = (iso: string) => new Date(iso).toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', month: 'short', day: 'numeric' })
    const fmtTime = (iso: string) => new Date(iso).toLocaleTimeString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' })
    const clock = (iso: string) => new Date(iso).toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
    const link = (iso: string) => `${page}?t=${new Date(iso).toISOString().replace('.000Z', 'Z')}`
    const shortDate = (ymd: string) => new Date(ymd + 'T12:00:00Z').toLocaleDateString('en-US', { timeZone: 'UTC', weekday: 'long', month: 'short', day: 'numeric' })

    // When the guest's own times do not work, offer times near what they asked for, not tomorrow.
    const near = !from && wanted.length ? localDate(new Date(Math.min(...wanted)), tz) : ''
    const start = from || near
    const filtered: Day[] = all.days
      .filter((d) => (!start || d.date >= start) && (!to || d.date <= to) && (!days.length || days.includes(weekday(d.date))))
      .map((d) => ({ ...d, slots: d.slots.filter((s) => (!after || clock(s) >= after) && (!before || clock(s) < before)) }))
    let picked = pick(filtered, count, tz)
    const fallback = picked.length === 0 && (!!from || !!to || days.length > 0 || !!after || !!before)
    if (fallback) picked = pick(all.days.filter((d) => !start || d.date >= start), count, tz)

    const range = from && to
      ? weekday(from) === 1 && to <= addDays(from, 6) ? `the week of ${shortDate(from)}` : `between ${shortDate(from)} and ${shortDate(to)}`
      : from ? `from ${shortDate(from)} on` : to ? `before ${shortDate(to)}` : ''
    const yes = all.proposed.filter((p) => p.open)
    const no = all.proposed.filter((p) => !p.open)

    const groups: { day: string; times: string[] }[] = []
    for (const iso of picked) {
      const day = fmtDay(iso)
      const g = groups.find((x) => x.day === day)
      if (g) g.times.push(iso)
      else groups.push({ day, times: [iso] })
    }
    const at = (iso: string) => `${fmtDay(iso)} at ${fmtTime(iso)}`

    let lead: string
    let showList = true
    if (yes.length) {
      lead = yes.length === 1 ? `${at(yes[0].start)} works for me.` : `These work for me: ${yes.map((p) => at(p.start)).join(', ')}.`
      showList = false
    } else if (no.length) {
      lead = `${no.length === 1 ? 'That time does' : 'Those times do'} not work on my end. Here are a few that do (Eastern):`
    } else if (fallback) {
      lead = `I do not have an open time ${range || 'in that window'}. Here are the closest times that work for me (Eastern):`
    } else {
      lead = `Here are a few times${range ? ` ${range}` : ''} that work for me (Eastern):`
    }
    const outro = showList ? 'If none of those work, pick any open time here:' : 'You can confirm it here, and the invite goes out right away:'
    const confirmLink = yes.length === 1 ? link(yes[0].start) : page

    const text = [lead, '', ...(showList ? [...groups.map((g) => `${g.day}: ${g.times.map(fmtTime).join(' or ')}`), ''] : []), outro, confirmLink].join('\n')
    const html = [
      `<p>${esc(lead)}</p>`,
      showList ? `<ul>${groups.map((g) => `<li><b>${esc(g.day)}:</b> ${g.times.map((t) => `<a href="${esc(link(t))}">${esc(fmtTime(t))}</a>`).join(' or ')}</li>`).join('')}</ul>` : '',
      `<p>${esc(outro)} <a href="${esc(confirmLink)}">${esc(showList ? page.replace(/^https?:\/\//, '') : at(yes[0].start))}</a></p>`,
    ].join('')

    return NextResponse.json(
      {
        type: type.slug,
        minutes: type.minutes,
        range: range || null,
        fallback,
        proposed: all.proposed.map((p) => ({ ...p, label: at(p.start), link: p.open ? link(p.start) : null })),
        slots: picked.map((s) => ({ start: s, day: fmtDay(s), time: fmtTime(s), link: link(s) })),
        page,
        text,
        html,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (e) {
    console.error('meet/suggest failed', e)
    return NextResponse.json({ error: 'Availability is unavailable right now.' }, { status: 503 })
  }
}
