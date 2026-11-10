'use client'

import { useEffect, useState } from 'react'
import Booker from '@/components/meet/Booker'
import type { PublicType } from '@/lib/scheduler/config'

type Booking = { type: string; typeName: string; title: string; when: string }

export default function Manage({ types }: { types: Record<string, PublicType> }) {
  const [ids, setIds] = useState<{ id: string; sig: string } | null>(null)
  const [booking, setBooking] = useState<Booking | null>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'moving' | 'cancelled' | 'moved' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const v = { id: q.get('id') || '', sig: q.get('sig') || '' }
    setIds(v)
    fetch(`/api/meet/manage?id=${encodeURIComponent(v.id)}&sig=${encodeURIComponent(v.sig)}`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json()
        if (!r.ok) throw new Error(d.error)
        setBooking(d); setState('ready')
      })
      .catch((e) => { setMessage(e.message || 'This booking was not found.'); setState('error') })
  }, [])

  async function cancel() {
    if (!ids || !confirm('Cancel this booking?')) return
    const r = await fetch('/api/meet/manage', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'cancel', ...ids }) })
    const d = await r.json()
    if (!r.ok) { setMessage(d.error); return }
    setState('cancelled')
  }

  const card = 'max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center'
  if (state === 'loading') return <div className={card}><p className="text-gray-500">Loading your booking...</p></div>
  if (state === 'error') return <div className={card}><p className="text-gray-700">{message}</p></div>
  if (state === 'cancelled') return (
    <div className={card}>
      <h2 className="text-2xl font-bold text-navy-800 mb-2">Booking cancelled</h2>
      <p className="text-gray-600 mb-6">Google sends a cancellation to your calendar.</p>
      <a href="/meet" className="text-gold-600 font-medium hover:text-gold-500">Book a new time &rarr;</a>
    </div>
  )
  if (state === 'moved') return (
    <div className={card}>
      <h2 className="text-2xl font-bold text-navy-800 mb-2">Booking moved</h2>
      <p className="text-gray-700 font-medium">{message}</p>
      <p className="text-gray-600 text-sm mt-4">Google sends the updated invite to your calendar.</p>
    </div>
  )
  if (state === 'moving' && booking && ids) {
    const t = types[booking.type]
    return (
      <div className="max-w-5xl mx-auto">
        <button onClick={() => setState('ready')} className="text-sm text-gold-600 hover:text-gold-500 mb-4">&larr; Back</button>
        <Booker type={t} reschedule={{ ...ids, onDone: (when) => { setMessage(when); setState('moved'); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} />
      </div>
    )
  }
  return (
    <div className={card}>
      <p className="text-sm font-medium text-gold-600 mb-2">{booking?.typeName}</p>
      <h2 className="text-2xl font-bold text-navy-800 mb-2">{booking?.title}</h2>
      <p className="text-gray-700 font-medium mb-8">{booking?.when}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={() => setState('moving')} className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold rounded-lg">Reschedule</button>
        <button onClick={cancel} className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg">Cancel booking</button>
      </div>
      {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </div>
  )
}
