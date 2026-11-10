'use client'

import { useCallback, useEffect, useState } from 'react'
import type { PublicType } from '@/lib/scheduler/config'

// Brad's tool for email replies: pick a meeting type, click Copy, paste into the reply.
// Copy puts rich text on the clipboard (each time is a booking link) with a plain-text fallback.
export default function Suggest({ types }: { types: PublicType[] }) {
  const [type, setType] = useState(types[0]?.slug || 'demo')
  const [count, setCount] = useState(5)
  const [block, setBlock] = useState<{ text: string; html: string } | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const load = useCallback(async () => {
    setBlock(null); setError(''); setCopied('')
    const r = await fetch(`/api/meet/suggest?type=${type}&count=${count}`, { cache: 'no-store' })
    const d = await r.json()
    if (!r.ok) setError(d.error || 'Could not load times.')
    else setBlock({ text: d.text, html: d.html })
  }, [type, count])
  useEffect(() => { load() }, [load])

  async function copy(kind: 'rich' | 'plain') {
    if (!block) return
    try {
      if (kind === 'rich' && typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([new ClipboardItem({
          'text/html': new Blob([block.html], { type: 'text/html' }),
          'text/plain': new Blob([block.text], { type: 'text/plain' }),
        })])
      } else {
        await navigator.clipboard.writeText(block.text)
      }
      setCopied(kind)
    } catch {
      setError('Copy failed. Select the text below and copy it by hand.')
    }
  }

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
      <select id="sg-count" value={count} onChange={(e) => setCount(Number(e.target.value))} className="border border-gray-300 rounded-lg px-2 py-1 text-sm mb-5">
        {[3, 4, 5, 6, 8].map((n) => <option key={n}>{n}</option>)}
      </select>
      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
      <div className="border border-gray-200 rounded-lg p-5 bg-gray-50 text-[15px] text-gray-800 leading-relaxed min-h-[180px]
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-3 [&_a]:text-navy-600 [&_a]:underline [&_p]:my-0"
        dangerouslySetInnerHTML={{ __html: block ? block.html : error ? '' : '<p>Loading...</p>' }} />
      <div className="flex flex-wrap gap-3 mt-5">
        <button disabled={!block} onClick={() => copy('rich')}
          className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold rounded-lg disabled:opacity-60">
          {copied === 'rich' ? 'Copied' : 'Copy for email'}
        </button>
        <button disabled={!block} onClick={() => copy('plain')}
          className="px-6 py-3 border border-gray-300 text-navy-800 hover:bg-gray-50 font-semibold rounded-lg disabled:opacity-60">
          {copied === 'plain' ? 'Copied' : 'Copy as plain text'}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">"Copy for email" makes each time a booking link in Gmail or Outlook. Plain text has one link at the end.</p>
    </div>
  )
}
