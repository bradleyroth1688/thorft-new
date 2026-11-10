import { NextResponse } from 'next/server'
import { DEFAULT_TYPE, MEETING_TYPES, SCHEDULE, SITE_URL } from '@/lib/scheduler/config'
import { availability } from '@/lib/scheduler/availability'
import { pick } from '@/lib/scheduler/suggest'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams
  const type = MEETING_TYPES[q.get('type') || DEFAULT_TYPE]
  if (!type) return NextResponse.json({ error: 'Unknown meeting type' }, { status: 404 })
  const count = Math.min(Math.max(Number(q.get('count')) || 5, 1), 10)
  const tz = SCHEDULE.timeZone
  try {
    const slots = pick(await availability(type), count, tz).map((iso) => ({
      start: iso,
      label: new Date(iso).toLocaleString('en-US', { timeZone: tz, weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' ET',
      link: `${SITE_URL}/meet/${type.slug}?t=${encodeURIComponent(iso)}`,
    }))
    const page = `${SITE_URL}/meet/${type.slug}`
    const text = [
      `Here are a few open times for a ${type.minutes}-minute ${type.slug === 'podcast' ? 'recording' : 'call'}:`,
      '',
      ...slots.map((s) => `- ${s.label}: ${s.link}`),
      '',
      `Or pick any time that works for you: ${page}`,
    ].join('\n')
    return NextResponse.json({ type: type.slug, slots, page, text }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (e) {
    console.error('meet/suggest failed', e)
    return NextResponse.json({ error: 'Availability is unavailable right now.' }, { status: 503 })
  }
}
