import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MEETING_TYPES, publicType } from '@/lib/scheduler/config'
import Booker from '@/components/meet/Booker'

export function generateStaticParams() {
  return Object.keys(MEETING_TYPES).map((type) => ({ type }))
}

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = MEETING_TYPES[params.type]
  if (!t) return {}
  return {
    title: `${t.name} — Book a Time`,
    description: t.blurb,
    alternates: { canonical: `https://thorft.com/meet/${t.slug}` },
  }
}

export default function MeetTypePage({ params }: { params: { type: string } }) {
  const t = MEETING_TYPES[params.type]
  if (!t) notFound()
  return (
    <div className="max-w-5xl mx-auto">
      <Booker type={publicType(t)} siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
    </div>
  )
}
