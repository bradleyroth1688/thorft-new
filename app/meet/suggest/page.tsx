import type { Metadata } from 'next'
import Suggest from './Suggest'
import { MEETING_TYPES, publicType } from '@/lib/scheduler/config'

export const metadata: Metadata = { title: 'Suggest Times', robots: { index: false, follow: false } }

export default function SuggestPage() {
  return <Suggest types={Object.values(MEETING_TYPES).map(publicType)} />
}
