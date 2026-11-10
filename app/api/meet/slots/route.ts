import { NextResponse } from 'next/server'
import { DEFAULT_TYPE, MEETING_TYPES, SCHEDULE } from '@/lib/scheduler/config'
import { availability } from '@/lib/scheduler/availability'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get('type') || DEFAULT_TYPE
  const type = MEETING_TYPES[slug]
  if (!type) return NextResponse.json({ error: 'Unknown meeting type' }, { status: 404 })
  try {
    const days = await availability(type)
    return NextResponse.json(
      { type: type.slug, minutes: type.minutes, timeZone: SCHEDULE.timeZone, days },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (e) {
    console.error('meet/slots failed', e)
    return NextResponse.json({ error: 'Availability is unavailable right now. Please email welcome@thoranalytics.com.' }, { status: 503 })
  }
}
