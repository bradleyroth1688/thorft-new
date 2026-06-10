// Date-label helpers for model performance pages. All labels derive from the
// monthlyReturns arrays in data/<model>-performance.ts (which are generated
// from the CSVs in data/performance/ by ~/clawd/scripts/
// update-model-performance.mjs), so monthly data refreshes require zero page
// edits.

export interface MonthlyReturnLike {
  date: string; // YYYY-MM-DD (calendar month end)
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-04-30" -> "April 2026" */
export function monthYearLabel(date: string): string {
  const [y, m] = date.split("-");
  return `${MONTH_NAMES[Number(m) - 1]} ${y}`;
}

/** "2026-04-30" -> "April 30, 2026" */
export function fullDateLabel(date: string): string {
  const [y, m, d] = date.split("-");
  return `${MONTH_NAMES[Number(m) - 1]} ${Number(d)}, ${y}`;
}

/** First month in the series, e.g. "February 2005". */
export function inceptionLabel(data: MonthlyReturnLike[]): string {
  return monthYearLabel(data[0].date);
}

/** Last month-end in the series as a full date, e.g. "April 30, 2026". */
export function asOfLabel(data: MonthlyReturnLike[]): string {
  return fullDateLabel(data[data.length - 1].date);
}

/** "February 2005 through April 30, 2026" (growth-of-$10k captions). */
export function coverageLabel(data: MonthlyReturnLike[]): string {
  return `${inceptionLabel(data)} through ${asOfLabel(data)}`;
}

/** "February 2005 – April 2026" (risk-statistics captions). */
export function monthRangeLabel(data: MonthlyReturnLike[]): string {
  return `${inceptionLabel(data)} – ${monthYearLabel(data[data.length - 1].date)}`;
}
