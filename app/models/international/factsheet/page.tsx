import type { Metadata } from "next";
import Link from "next/link";
import {
  standardPeriods,
  calendarYears,
  growthOf10K,
  riskStats,
  monthlyReturns,
} from "@/data/international-performance";
import { PrintButton } from "./PrintButton";
import PerformanceChart from "./PerformanceChart";

export const metadata: Metadata = {
  title: "THOR International Model Portfolio Factsheet",
  description:
    "Hypothetical performance factsheet for the THOR International model portfolio. International equity strategy using top 10 countries by market cap with proprietary risk management.",
  alternates: { canonical: "https://thorft.com/models/international/factsheet/" },
};

// ─── Formatting helpers ───

function fmt(value: number, decimals = 2): string {
  return value.toFixed(decimals);
}

function fmtReturn(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function returnColor(value: number): string {
  if (value > 0) return "text-emerald-600";
  if (value < 0) return "text-red-600";
  return "text-gray-700";
}

function fmtCurrency(value: number): string {
  return "$" + value.toLocaleString("en-US");
}

// ─── Sub-components ───

function ReturnCell({ value }: { value: number }) {
  return (
    <td className={`px-4 py-3 text-right font-medium tabular-nums ${returnColor(value)}`}>
      {fmtReturn(value)}
    </td>
  );
}

function StatRow({
  label,
  thor,
  bench,
  format = "return",
}: {
  label: string;
  thor: number;
  bench: number;
  format?: "return" | "pct" | "ratio" | "dd";
}) {
  const formatValue = (v: number) => {
    switch (format) {
      case "return":
        return fmtReturn(v);
      case "pct":
        return `${fmt(v)}%`;
      case "ratio":
        return fmt(v);
      case "dd":
        return `${fmt(v)}%`;
    }
  };

  const colorThor = format === "dd" ? returnColor(thor) : format === "return" ? returnColor(thor) : "text-gray-900";
  const colorBench = format === "dd" ? returnColor(bench) : format === "return" ? returnColor(bench) : "text-gray-900";

  return (
    <tr className="border-b border-gray-100 even:bg-gray-50/50">
      <td className="px-4 py-3 text-sm text-gray-700 font-medium">{label}</td>
      <td className={`px-4 py-3 text-right font-medium tabular-nums text-sm ${colorThor}`}>
        {formatValue(thor)}
      </td>
      <td className={`px-4 py-3 text-right font-medium tabular-nums text-sm ${colorBench}`}>
        {formatValue(bench)}
      </td>
    </tr>
  );
}

// ─── Page ───

export default function InternationalFactsheetPage() {
  return (
    <article className="min-h-screen bg-white print:bg-white">
      {/* ── Header ── */}
      <header className="gradient-navy text-white py-12 md:py-16 px-4 print:py-8 print:bg-navy-800">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-4 print:hidden">
            <Link
              href="/models/international"
              className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
            >
              ← THOR International
            </Link>
          </nav>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                THOR International
              </h1>
              <p className="text-xl md:text-2xl text-gold-400 font-medium mt-2">
                Model Portfolio Factsheet
              </p>
            </div>
            <div className="text-right text-sm text-gray-300 space-y-1 mt-2">
              <p className="text-white font-semibold">As of January 31, 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Strategy</div>
              <div className="text-sm font-semibold mt-1">International Equity</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Benchmark</div>
              <div className="text-sm font-semibold mt-1">Vanguard Total World Stock ETF (VT)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Inception</div>
              <div className="text-sm font-semibold mt-1">January 2017</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Management Fee</div>
              <div className="text-sm font-semibold mt-1">0.20%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12 print:py-6 print:space-y-8">
        {/* ── Strategy Overview ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Strategy Overview
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3 max-w-4xl">
            <p>
              The THOR International model portfolio provides systematic exposure to global equity
              markets by investing in the top 10 countries by market capitalization, equally
              weighted across each position. The strategy leverages THOR&apos;s proprietary risk
              management technology to evaluate each country independently.
            </p>
            <p>
              When individual country signals indicate elevated risk, those positions are
              systematically de-risked to short-duration treasuries. When a majority of country
              allocations signal risk-off, the portfolio can move to 100% cash, providing full
              capital protection during periods of elevated systemic risk.
            </p>
          </div>
        </section>

        {/* ── Cumulative Performance Chart ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Growth of $10,000
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Hypothetical growth of a $10,000 investment from January 2017 through January 31, 2026. Net of 0.20% management fee.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
            <PerformanceChart />
          </div>
        </section>

        {/* ── Performance Summary ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Performance Summary
          </h2>
          <p className="text-xs text-gray-500 mb-3">
            Returns for periods greater than one year are annualized. Net of 0.20% management fee.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    THOR International (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    Vanguard Total World Stock ETF
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "MTD", ...standardPeriods.mtd },
                  { label: "QTD", ...standardPeriods.qtd },
                  { label: "YTD", ...standardPeriods.ytd },
                  { label: "1 Year", ...standardPeriods.oneYear },
                  { label: "3 Year (Ann.)", ...standardPeriods.threeYear },
                  { label: "5 Year (Ann.)", ...standardPeriods.fiveYear },
                  {
                    label: "Since Inception (Ann.)",
                    ...standardPeriods.sinceInception,
                  },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                      {row.label}
                    </td>
                    <ReturnCell value={row.thor} />
                    <ReturnCell value={row.bench} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Calendar Year Returns ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Calendar Year Returns
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    THOR International (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    Vanguard Total World Stock ETF
                  </th>
                </tr>
              </thead>
              <tbody>
                {calendarYears.map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-gray-100 even:bg-gray-50/50 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                      {row.year}
                    </td>
                    <ReturnCell value={row.thor} />
                    <ReturnCell value={row.bench} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Monthly Returns Grid ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Monthly Returns
          </h2>
          <p className="text-xs text-gray-500 mb-3">
            THOR International (Net) monthly returns. Net of 0.20% management fee.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-2 py-2 text-left font-semibold uppercase tracking-wider">Year</th>
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                    <th key={m} className="px-2 py-2 text-right font-semibold uppercase tracking-wider">{m}</th>
                  ))}
                  <th className="px-2 py-2 text-right font-semibold uppercase tracking-wider">Full Year</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  // Group monthly returns by year
                  const years = Array.from(new Set(monthlyReturns.map((d) => d.date.slice(0, 4)))).sort();
                  return years.map((year) => {
                    const yearData = monthlyReturns.filter((d) => d.date.startsWith(year + "-"));
                    // Build a map of month index (0-11) to return
                    const monthMap = new Map<number, number>();
                    yearData.forEach((d) => {
                      const monthIdx = parseInt(d.date.split("-")[1], 10) - 1;
                      monthMap.set(monthIdx, d.thorNet);
                    });
                    // Compound full year return
                    let fullYear = 1;
                    yearData.forEach((d) => { fullYear *= 1 + d.thorNet / 100; });
                    const fullYearReturn = (fullYear - 1) * 100;
                    const isPartial = yearData.length < 12;

                    return (
                      <tr key={year} className="border-b border-gray-100 even:bg-gray-50/50">
                        <td className="px-2 py-1.5 font-semibold text-gray-700">
                          {year}{isPartial ? " YTD" : ""}
                        </td>
                        {Array.from({ length: 12 }, (_, i) => {
                          const val = monthMap.get(i);
                          if (val === undefined) {
                            return <td key={i} className="px-2 py-1.5 text-right text-gray-300">—</td>;
                          }
                          return (
                            <td
                              key={i}
                              className={`px-2 py-1.5 text-right tabular-nums font-medium ${
                                val > 0 ? "text-emerald-600" : val < 0 ? "text-red-600" : "text-gray-700"
                              }`}
                            >
                              {val.toFixed(2)}%
                            </td>
                          );
                        })}
                        <td
                          className={`px-2 py-1.5 text-right tabular-nums font-bold ${
                            fullYearReturn > 0 ? "text-emerald-600" : fullYearReturn < 0 ? "text-red-600" : "text-gray-700"
                          }`}
                        >
                          {fullYearReturn.toFixed(2)}%
                        </td>
                      </tr>
                    );
                  });
                })()}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Growth of $10,000 ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Growth of $10,000
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Hypothetical growth of a $10,000 investment from January 2017 through January 31,
            2026.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-navy-800 rounded-xl p-6 text-white text-center">
              <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                THOR International (Net)
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gold-400">
                {fmtCurrency(growthOf10K.thor)}
              </div>
              <div className="text-sm text-emerald-400 mt-1">
                +{fmt((growthOf10K.thor / 10000 - 1) * 100)}% total return
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Vanguard Total World Stock ETF
              </div>
              <div className="text-3xl md:text-4xl font-bold text-navy-800">
                {fmtCurrency(growthOf10K.bench)}
              </div>
              <div className="text-sm text-emerald-600 mt-1">
                +{fmt((growthOf10K.bench / 10000 - 1) * 100)}% total return
              </div>
            </div>
          </div>
        </section>

        {/* ── Risk Statistics ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Risk Statistics
          </h2>
          <p className="text-xs text-gray-500 mb-3">
            Calculated from monthly returns, January 2017 – January 2026. Sharpe ratio
            assumes a 2.00% risk-free rate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    THOR International (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    Vanguard Total World Stock ETF
                  </th>
                </tr>
              </thead>
              <tbody>
                <StatRow
                  label="Annualized Return"
                  thor={riskStats.annualizedReturn.thor}
                  bench={riskStats.annualizedReturn.bench}
                  format="return"
                />
                <StatRow
                  label="Annualized Std Dev"
                  thor={riskStats.annualizedStdDev.thor}
                  bench={riskStats.annualizedStdDev.bench}
                  format="pct"
                />
                <StatRow
                  label="Sharpe Ratio"
                  thor={riskStats.sharpeRatio.thor}
                  bench={riskStats.sharpeRatio.bench}
                  format="ratio"
                />
                <StatRow
                  label="Max Drawdown"
                  thor={riskStats.maxDrawdown.thor}
                  bench={riskStats.maxDrawdown.bench}
                  format="dd"
                />
                <StatRow
                  label="Best Month"
                  thor={riskStats.bestMonth.thor}
                  bench={riskStats.bestMonth.bench}
                  format="return"
                />
                <StatRow
                  label="Worst Month"
                  thor={riskStats.worstMonth.thor}
                  bench={riskStats.worstMonth.bench}
                  format="return"
                />
                <tr className="border-b border-gray-100 even:bg-gray-50/50">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    % Positive Months
                  </td>
                  <td className="px-4 py-3 text-right font-medium tabular-nums text-sm text-gray-900">
                    {fmt(riskStats.positiveMonths.thor, 1)}%
                  </td>
                  <td className="px-4 py-3 text-right font-medium tabular-nums text-sm text-gray-900">
                    {fmt(riskStats.positiveMonths.bench, 1)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {[
              {
                title: "Equal Weight Across Top 10 Countries",
                desc: "Diversified exposure to the largest global equity markets by market capitalization, equally weighted to avoid concentration risk.",
              },
              {
                title: "Independent Country-Level Risk Signals",
                desc: "THOR's proprietary technology evaluates each country allocation independently for risk-on/risk-off conditions.",
              },
              {
                title: "100% Cash Capability",
                desc: "When systemic risk is elevated across a majority of allocations, the portfolio can move entirely to short-duration treasuries.",
              },
              {
                title: "0.20% Management Fee",
                desc: "Low, transparent fee structure. All performance shown is net of the annual management fee.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <svg
                  className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-navy-800 text-sm">{feature.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Disclosures ── */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-navy-800 mb-3">Important Disclosures</h2>
          <div className="text-xs text-gray-500 leading-relaxed space-y-2 max-w-4xl">
            <p>
              Performance shown is hypothetical and net of a 0.20% annual management fee.
              Past performance is not indicative of future results.
            </p>
            <p>
              The model portfolio is not an actual account and does not reflect actual trading,
              liquidity constraints, fees beyond the stated management fee, or other factors
              that would impact actual returns.
            </p>
            <p>
              Hypothetical performance results have many inherent limitations, some of which are
              described below. No representation is being made that any account will or is likely
              to achieve profits or losses similar to those shown. In fact, there are frequently
              sharp differences between hypothetical performance results and the actual results
              subsequently achieved by any particular trading program.
            </p>
            <p>
              One of the limitations of hypothetical performance results is that they are
              generally prepared with the benefit of hindsight. In addition, hypothetical trading
              does not involve financial risk, and no hypothetical trading record can completely
              account for the impact of financial risk in actual trading.
            </p>
            <p>
              All investments involve risk, including possible loss of principal. International
              investments may involve additional risks including currency fluctuations, political
              instability, and differing accounting standards. The Vanguard Total World Stock ETF
              (VT) is shown for benchmark comparison purposes only and is not available for
              direct investment through THOR.
            </p>
            <p>
              For complete disclosures, please visit{" "}
              <Link
                href="/disclosures"
                className="text-gold-600 underline hover:text-gold-500"
              >
                thorft.com/disclosures
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      {/* ── Print button (hidden in print) ── */}
      <div className="max-w-5xl mx-auto px-4 pb-10 print:hidden">
        <PrintButton />
      </div>
    </article>
  );
}
