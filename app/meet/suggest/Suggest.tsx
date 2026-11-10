'use client'

import { useCallback, useEffect, useState } from 'react'
import type { PublicType } from '@/lib/scheduler/config'

// Brad's tool for email replies: pick a meeting type, copy the block, paste it into the reply.
export default function Suggest({ types }: { types: PublicType[] }) {
  const [type, setType] = useState(types[0]?.slug || 'demo')
  const [count, setCount] = useState(5)
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    setText(''); setError(''); setCopied(false)
    const r = await fetch(`/api/meet/suggest?type=${type}&count=${count}`, { cache: 'no-store' })
    const d = await r.json()
    if (!r.ok) setError(d.error || 'Could not load times.')
    else setText(d.text)
  }, [type, count])
  useEffect(() => { load() }, [load])

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-navy-800 mb-6">Suggest times for an email</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {types.map((t) => (
          <button key={t.slug} onClick={() => setType(t.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${type === t.slug ? 'bg-navy-800 text-white border-navy-800' : 'border-gray-300 text-navy-800 hover:border-gold-400'}`}>
            {t.name} ({t.minutes} min)
          </button>
        ))}
      </div>
      <label className="text-sm text-gray-600 mr-2" htmlFor="sg-count">How many times</label>
      <select id="sg-count" value={count} onChange={(e) => setCount(Number(e.target.value))} className="border border-gray-300 rounded-lg px-2 py-1 text-sm mb-4">
        {[3, 4, 5, 6, 8].map((n) => <option key={n}>{n}</option>)}
      </select>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <textarea readOnly value={text || (error ? '' : 'Loading...')} rows={11}
        className="w-full font-mono text-sm border border-gray-300 rounded-lg p-3 bg-gray-50 text-navy-800" />
      <button disabled={!text} onClick={async () => { await navigator.clipboard.writeText(text); setCopied(true) }}
        className="mt-4 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold rounded-lg disabled:opacity-60">
        {copied ? 'Copied' : 'Copy to clipboard'}
      </button>
    </div>
  )
}
