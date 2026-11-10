import type { Day } from './availability'

/**
 * Times to paste into an email reply. Earliest open time first, one morning and one afternoon option per day,
 * so the guest sees a spread. Each time has a one-click link that opens the booking page on that exact slot.
 * Public on purpose: it shows nothing the booking page does not already show.
 */
export function pick(days: Day[], count: number, timeZone: string): string[] {
  const out: string[] = []
  for (const d of days) {
    if (out.length >= count) break
    const hour = (iso: string) => Number(new Date(iso).toLocaleString('en-US', { timeZone, hour: 'numeric', hourCycle: 'h23' }))
    const am = d.slots.find((s) => hour(s) < 12)
    const pm = d.slots.find((s) => hour(s) >= 12)
    for (const s of [am, pm]) if (s && out.length < count) out.push(s)
    if (!am && !pm && d.slots[0]) out.push(d.slots[0])
  }
  return out
}
