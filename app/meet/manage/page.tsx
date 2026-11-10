import type { Metadata } from 'next'
import Manage from './Manage'
import { MEETING_TYPES, publicType } from '@/lib/scheduler/config'

export const metadata: Metadata = { title: 'Manage Your Booking', robots: { index: false, follow: false } }

export default function ManagePage() {
  const types = Object.fromEntries(Object.values(MEETING_TYPES).map((t) => [t.slug, publicType(t)]))
  return <Manage types={types} />
}
