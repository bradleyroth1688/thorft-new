// Wall-clock math in a named time zone without a date library.

function parts(date: Date, timeZone: string) {
  const p = new Intl.DateTimeFormat('en-US', {
    timeZone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  }).formatToParts(date)
  const g = (t: string) => Number(p.find((x) => x.type === t)!.value)
  return { y: g('year'), m: g('month'), d: g('day'), h: g('hour'), min: g('minute'), s: g('second') }
}

function offsetMs(date: Date, timeZone: string): number {
  const q = parts(date, timeZone)
  return Date.UTC(q.y, q.m - 1, q.d, q.h, q.min, q.s) - Math.floor(date.getTime() / 1000) * 1000
}

/** The UTC instant for a wall-clock time in `timeZone`. */
export function zonedToUtc(y: number, m: number, d: number, h: number, min: number, timeZone: string): Date {
  const guess = Date.UTC(y, m - 1, d, h, min)
  const off = offsetMs(new Date(guess), timeZone)
  let t = guess - off
  const off2 = offsetMs(new Date(t), timeZone)
  if (off2 !== off) t = guess - off2
  return new Date(t)
}

/** 'YYYY-MM-DD' for an instant, in `timeZone`. */
export function localDate(date: Date, timeZone: string): string {
  const q = parts(date, timeZone)
  return `${q.y}-${String(q.m).padStart(2, '0')}-${String(q.d).padStart(2, '0')}`
}

export function addDays(ymd: string, n: number): string {
  const [y, m, d] = ymd.split('-').map(Number)
  const t = new Date(Date.UTC(y, m - 1, d + n))
  return t.toISOString().slice(0, 10)
}

export function weekday(ymd: string): number {
  const [y, m, d] = ymd.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay()
}

export function hhmm(s: string): [number, number] {
  const [h, m] = s.split(':').map(Number)
  return [h, m]
}
