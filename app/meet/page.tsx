import type { Metadata } from 'next'
import Link from 'next/link'
import { MEETING_TYPES, locationLabel } from '@/lib/scheduler/config'

export const metadata: Metadata = {
  title: 'Book a Meeting with Brad Roth',
  description: 'Book a THOR Funds demo, a meeting with Brad Roth, or a Behind the Ticker podcast recording.',
  alternates: { canonical: 'https://thorft.com/meet' },
}

export default function MeetPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {Object.values(MEETING_TYPES).map((t) => (
        <Link key={t.slug} href={`/meet/${t.slug}`}
          className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:border-gold-400 hover:shadow-md transition-all">
          <p className="text-sm font-medium text-gold-600 mb-2">{t.minutes} minutes &middot; {locationLabel(t.location)}</p>
          <h2 className="text-xl font-bold text-navy-800 mb-3">{t.name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.blurb}</p>
          <span className="text-navy-800 font-semibold group-hover:text-gold-600 transition-colors">Pick a time &rarr;</span>
        </Link>
      ))}
    </div>
  )
}
