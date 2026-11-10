import { NextResponse } from 'next/server'
import { DEFAULT_TYPE, MEETING_TYPES, SCHEDULE, SITE_URL } from '@/lib/scheduler/config'
import { availability } from '@/lib/scheduler/availability'
import { pick } from '@/lib/scheduler/suggest'

export const dynamic = 'force-dynamic'

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

/**
 * A block of open times to paste into an email reply.
 * `text` is plain and short: times grouped by day, one booking link at the end.
 * `html` is the same block with each time as a one-click booking link, for pasting into Gmail or Outlook.
 */
export async function GET(request: Request) {
  const q = new URL(request.url).searchParams
  const type = MEETING_TYPES[q.get('type') || DEFAULT_TYPE]
  if (!type) return NextResponse.json({ error: 'Unknown meeting type' }, { status: 404 })
  const count = Math.min(Math.max(Number(q.get('count')) || 5, 1), 10)
  const tz = SCHEDULE.timeZone
  try {
    const picked = pick(await availability(type), count, tz)
    const page = `${SITE_URL}/meet/${type.slug}`
    const dayOf = (iso: string) => new Date(iso).toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', month: 'short', day: 'numeric' })
    const timeOf = (iso: string) => new Date(iso).toLocaleTimeString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' })
    const link = (iso: string) => `${page}?t=${new Date(iso).toISOString().replace('.000Z', 'Z')}`

    const groups: { day: string; times: string[] }[] = []
    for (const iso of picked) {
      const day = dayOf(iso)
      const g = groups.find((x) => x.day === day)
      if (g) g.times.push(iso)
      else groups.push({ day, times: [iso] })
    }
    const intro = `Here are a few times that work for me (Eastern):`
    const outro = `If none of those work, pick any open time here:`
    const text = [
      intro,
      '',
      ...groups.map((g) => `${g.day}: ${g.times.map(timeOf).join(' or ')}`),
      '',
      outro,
      page,
    ].join('\n')
    const html = [
      `<p>${esc(intro)}</p>`,
      `<ul>${groups.map((g) => `<li><b>${esc(g.day)}:</b> ${g.times.map((t) => `<a href="${esc(link(t))}">${esc(timeOf(t))}</a>`).join(' or ')}</li>`).join('')}</ul>`,
      `<p>${esc(outro)} <a href="${esc(page)}">${esc(page.replace(/^https?:\/\//, ''))}</a></p>`,
    ].join('')
    return NextResponse.json(
      { type: type.slug, slots: picked.map((s) => ({ start: s, day: dayOf(s), time: timeOf(s), link: link(s) })), page, text, html },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (e) {
    console.error('meet/suggest failed', e)
    return NextResponse.json({ error: 'Availability is unavailable right now.' }, { status: 503 })
  }
}
