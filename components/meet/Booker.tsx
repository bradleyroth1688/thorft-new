'use client'

import Script from 'next/script'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { PublicType } from '@/lib/scheduler/config'

type Day = { date: string; slots: string[] }
type Props = {
  type: PublicType
  siteKey?: string
  /** When set, the picker moves an existing booking instead of making a new one. */
  reschedule?: { id: string; sig: string; onDone: (when: string) => void }
}

const ZONES = [
  'America/New_York', 'America/Chicago', 'America/Denver', 'America/Phoenix', 'America/Los_Angeles',
  'America/Anchorage', 'Pacific/Honolulu', 'Europe/London', 'Europe/Paris', 'Asia/Dubai', 'Asia/Singapore',
  'Asia/Tokyo', 'Australia/Sydney',
]

const ymd = (iso: string, tz: string) => new Date(iso).toLocaleDateString('en-CA', { timeZone: tz })
const timeOf = (iso: string, tz: string) => new Date(iso).toLocaleTimeString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' })
const longDate = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric' })
const zoneName = (tz: string) => tz.split('/').pop()!.replace(/_/g, ' ')

export default function Booker({ type, siteKey, reschedule }: Props) {
  const [tz, setTz] = useState('America/New_York')
  const [days, setDays] = useState<Day[] | null>(null)
  const [loadError, setLoadError] = useState('')
  const [month, setMonth] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [slot, setSlot] = useState<string>('')
  const [step, setStep] = useState<'pick' | 'form' | 'done'>('pick')
  const [form, setForm] = useState({ name: '', email: '', firm: '', etf: '', notes: '' })
  const [honeypot, setHoneypot] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ when: string; location: string } | null>(null)
  const turnstileRef = useRef('')

  useEffect(() => {
    try {
      const guess = Intl.DateTimeFormat().resolvedOptions().timeZone
      if (guess) setTz(guess)
    } catch {}
  }, [])

  const onTurnstile = useCallback((token: string) => { turnstileRef.current = token }, [])
  useEffect(() => { (window as any).onTurnstileMeet = onTurnstile }, [onTurnstile])

  const load = useCallback(async () => {
    setLoadError('')
    try {
      const r = await fetch(`/api/meet/slots?type=${type.slug}`, { cache: 'no-store' })
      const d = await r.json()
      if (!r.ok) throw new Error(d.error || 'Could not load times.')
      setDays(d.days)
    } catch (e: any) {
      setLoadError(e.message || 'Could not load times.')
    }
  }, [type.slug])
  useEffect(() => { load() }, [load])

  // Regroup the New York days by the guest's own calendar date.
  const byDate = useMemo(() => {
    const m = new Map<string, string[]>()
    for (const d of days || []) for (const s of d.slots) {
      const k = ymd(s, tz)
      m.set(k, [...(m.get(k) || []), s])
    }
    return m
  }, [days, tz])

  const firstOpen = useMemo(() => Array.from(byDate.keys()).sort()[0] || '', [byDate])

  useEffect(() => {
    if (!days) return
    const pre = new URLSearchParams(window.location.search).get('t')
    const preIso = pre ? new Date(pre).toISOString() : ''
    const all = days.flatMap((d) => d.slots)
    if (preIso && all.includes(preIso) && !reschedule) {
      const d = ymd(preIso, tz)
      setMonth(d.slice(0, 7)); setDate(d); setSlot(preIso); setStep('form')
      return
    }
    if (!date && firstOpen) { setDate(firstOpen); setMonth(firstOpen.slice(0, 7)) }
    if (!month && !firstOpen && days[0]) setMonth(days[0].date.slice(0, 7))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, firstOpen])

  const months = useMemo(() => {
    const s = new Set<string>()
    for (const d of days || []) s.add(d.date.slice(0, 7))
    byDate.forEach((_, k) => s.add(k.slice(0, 7)))
    return Array.from(s).sort()
  }, [days, byDate])

  const grid = useMemo(() => {
    if (!month) return []
    const [y, m] = month.split('-').map(Number)
    const first = new Date(Date.UTC(y, m - 1, 1))
    const lead = first.getUTCDay()
    const count = new Date(Date.UTC(y, m, 0)).getUTCDate()
    const cells: (string | null)[] = Array(lead).fill(null)
    for (let d = 1; d <= count; d++) cells.push(`${month}-${String(d).padStart(2, '0')}`)
    return cells
  }, [month])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true); setError('')
    try {
      const r = reschedule
        ? await fetch('/api/meet/manage', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'reschedule', id: reschedule.id, sig: reschedule.sig, start: slot }) })
        : await fetch('/api/meet/book', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, type: type.slug, start: slot, honeypot, turnstileToken: turnstileRef.current }) })
      const d = await r.json()
      if (!r.ok) {
        setError(d.error || 'That did not work.')
        if (r.status === 409) { setSlot(''); setStep('pick'); load() }
        if ((window as any).turnstile) (window as any).turnstile.reset()
        return
      }
      if (reschedule) { reschedule.onDone(d.when); return }
      setResult({ when: d.when, location: d.location }); setStep('done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  if (step === 'done' && result) {
    return (
      <div className="max-w-xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold-400/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-gold-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-navy-800 mb-2">You are booked</h2>
        <p className="text-gray-700 mb-1">{type.name}</p>
        <p className="text-gray-700 font-medium mb-6">{result.when}</p>
        <p className="text-gray-600 text-sm">
          A calendar invite with the {result.location} link is on its way to {form.email}. The invite also has a link to reschedule or cancel.
        </p>
      </div>
    )
  }

  const times = byDate.get(date) || []
  const mi = months.indexOf(month)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/60">
          <p className="text-sm font-medium text-gold-600 mb-2">{reschedule ? 'Reschedule' : 'Book a time'}</p>
          <h2 className="text-2xl font-bold text-navy-800 mb-4">{type.name}</h2>
          <ul className="space-y-2 text-gray-700 text-sm mb-6">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-navy-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              {type.minutes} minutes
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-navy-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
              {type.location}
            </li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{type.blurb}</p>
          <label className="block text-xs font-medium text-gray-500 mb-1" htmlFor="meet-tz">Time zone</label>
          <select id="meet-tz" value={tz} onChange={(e) => setTz(e.target.value)}
            className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-400">
            {(ZONES.includes(tz) ? ZONES : [tz, ...ZONES]).map((z) => <option key={z} value={z}>{zoneName(z)}</option>)}
          </select>
        </aside>

        <div className="p-6 lg:p-8">
          {loadError && (
            <div className="text-center py-16">
              <p className="text-gray-700 mb-4">{loadError}</p>
              <button onClick={load} className="text-gold-600 font-medium hover:text-gold-500">Try again</button>
            </div>
          )}
          {!loadError && !days && <div className="py-24 text-center text-gray-500">Loading open times...</div>}

          {!loadError && days && step === 'pick' && (
            <div className="grid md:grid-cols-[1fr_220px] gap-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <button aria-label="Previous month" disabled={mi <= 0} onClick={() => setMonth(months[mi - 1])}
                    className="p-2 rounded-lg text-navy-700 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent">&larr;</button>
                  <h3 className="font-semibold text-navy-800">
                    {month && new Date(month + '-15T12:00:00Z').toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', year: 'numeric' })}
                  </h3>
                  <button aria-label="Next month" disabled={mi < 0 || mi >= months.length - 1} onClick={() => setMonth(months[mi + 1])}
                    className="p-2 rounded-lg text-navy-700 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent">&rarr;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {grid.map((d, i) => {
                    if (!d) return <div key={i} />
                    const open = (byDate.get(d) || []).length > 0
                    const sel = d === date
                    return (
                      <button key={d} disabled={!open} onClick={() => { setDate(d); setError('') }}
                        className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                          sel ? 'bg-navy-800 text-white' : open ? 'bg-gold-400/10 text-navy-800 hover:bg-gold-400/25' : 'text-gray-300 cursor-default'}`}>
                        {Number(d.slice(8))}
                      </button>
                    )
                  })}
                </div>
                {byDate.size === 0 && <p className="mt-6 text-sm text-gray-600">No open times in the next 30 days. Please email welcome@thoranalytics.com.</p>}
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-4">{date ? longDate(date) : 'Pick a day'}</h3>
                <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                  {times.map((s) => (
                    <button key={s} onClick={() => { setSlot(s); setStep('form'); setError('') }}
                      className="w-full py-2.5 rounded-lg border border-navy-200 text-navy-800 font-medium hover:border-gold-400 hover:bg-gold-400/10 transition-colors">
                      {timeOf(s, tz)}
                    </button>
                  ))}
                </div>
                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              </div>
            </div>
          )}

          {!loadError && days && step === 'form' && slot && (
            <form onSubmit={submit} className="max-w-lg">
              <button type="button" onClick={() => setStep('pick')} className="text-sm text-gold-600 hover:text-gold-500 mb-4">&larr; Change time</button>
              <p className="text-navy-800 font-semibold text-lg mb-6">
                {longDate(ymd(slot, tz))}, {timeOf(slot, tz)} <span className="text-gray-500 font-normal text-sm">({zoneName(tz)} time)</span>
              </p>
              {!reschedule && (
                <div className="space-y-4">
                  <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} autoComplete="name" />
                  <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} autoComplete="email" />
                  <Field label="Firm" value={form.firm} onChange={(v) => setForm({ ...form, firm: v })} autoComplete="organization" />
                  {type.askEtf && <Field label="ETF we will discuss (ticker)" required value={form.etf} onChange={(v) => setForm({ ...form, etf: v })} />}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="meet-notes">Anything we should know?</label>
                    <textarea id="meet-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400" />
                  </div>
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)} className="absolute -left-[9999px]" aria-hidden="true" />
                  {siteKey && (
                    <>
                      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
                      <div className="cf-turnstile" data-sitekey={siteKey} data-callback="onTurnstileMeet" data-theme="light" data-size="flexible" />
                    </>
                  )}
                </div>
              )}
              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={busy}
                className="mt-6 w-full sm:w-auto px-8 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold rounded-lg transition-colors disabled:opacity-60">
                {busy ? 'Working...' : reschedule ? 'Move my booking' : 'Confirm booking'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text', required, autoComplete }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; autoComplete?: string
}) {
  const id = 'meet-' + label.toLowerCase().replace(/[^a-z]+/g, '-')
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={id}>{label}{required && <span className="text-gold-600"> *</span>}</label>
      <input id={id} type={type} required={required} value={value} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400" />
    </div>
  )
}
