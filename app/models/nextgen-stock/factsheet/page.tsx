import type { Metadata } from "next";
import Link from "next/link";
import {
  standardPeriods,
  calendarYears,
  growthOf10K,
  riskStats,
  monthlyReturns,
} from "@/data/nextgen-stock-performance";
import { PrintButton } from "./PrintButton";
import PerformanceChart from "./PerformanceChart";

export const metadata: Metadata = {
  title: "THOR NextGen Stock Model Portfolio Factsheet",
  description:
    "Hypothetical performance factsheet for the THOR NextGen Stock model portfolio. S&P 500 sector-based equal-weight strategy with proprietary risk management.",
  alternates: { canonical: "https://thorft.com/models/nextgen-stock/factsheet/" },
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

export default function Sector100FactsheetPage() {
  return (
    <article className="min-h-screen bg-white print:bg-white">
      {/* ── Header ── */}
      <header className="gradient-navy text-white py-12 md:py-16 px-4 print:py-8 print:bg-navy-800">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-4 print:hidden">
            <Link
              href="/models/nextgen-stock"
              className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
            >
              ← THOR NextGen Stock
            </Link>
          </nav>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                THOR NextGen Stock
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
              <div className="text-sm font-semibold mt-1">Domestic Equity</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Benchmark</div>
              <div className="text-sm font-semibold mt-1">ARK Innovation ETF (ARKK)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Inception</div>
              <div className="text-sm font-semibold mt-1">February 2005</div>
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
              The THOR NextGen Stock model portfolio is THOR&apos;s flagship strategy, providing systematic exposure to S&P 500 sectors using an equal-weight approach with proprietary risk management. The portfolio trades sector-based ETFs representing the major sectors of the S&P 500.
            </p>
            <p>
              THOR&apos;s proprietary technology continuously evaluates each sector&apos;s risk profile independently. When individual sectors rotate toward risk-off conditions, the model systematically de-risks — overweighting the strongest performing sectors and moving weaker positions to short-duration treasuries.
            </p>
          </div>
        </section>

        {/* ── Cumulative Performance Chart ── */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-4 border-b-2 border-gold-400 pb-2 inline-block">
            Growth of $10,000
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Hypothetical growth of a $10,000 investment from February 2005 through January 31, 2026. Net of 0.20% management fee.
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
                    THOR NextGen Stock (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    ARK Innovation ETF
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
                    THOR NextGen Stock (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    ARK Innovation ETF
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
            THOR NextGen Stock (Net) monthly returns. Net of 0.20% management fee.
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
                  const years = Array.from(new Set(monthlyReturns.map((d) => d.date.slice(0, 4)))).sort();
                  return years.map((year) => {
                    const yearData = monthlyReturns.filter((d) => d.date.startsWith(year + "-"));
                    const monthMap = new Map<number, number>();
                    yearData.forEach((d) => {
                      const monthIdx = parseInt(d.date.split("-")[1], 10) - 1;
                      monthMap.set(monthIdx, d.thorNet);
                    });
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
            Hypothetical growth of a $10,000 investment from February 2005 through January 31, 2026.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-navy-800 rounded-xl p-6 text-white text-center">
              <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                THOR NextGen Stock (Net)
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
                ARK Innovation ETF
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
            Calculated from monthly returns, February 2005 – January 2026. Sharpe ratio assumes a 2.00% risk-free rate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    THOR NextGen Stock (Net)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                    ARK Innovation ETF
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
                title: "Broad Sector Exposure",
                desc: "Full coverage across S&P 500 sectors with equal weighting eliminates concentration risk.",
              },
              {
                title: "Adaptive De-Risking",
                desc: "Proprietary signals independently evaluate each sector for risk-on/risk-off conditions.",
              },
              {
                title: "100% Cash Capability",
                desc: "Can move entirely to short-duration treasuries when systemic risk is elevated.",
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
          <h2 className="text-lg font-bold text-navy-800 mb-3">IMPORTANT DISCLOSURES ON HYPOTHETICAL PERFORMANCE DATA</h2>
          <div className="text-xs text-gray-500 leading-relaxed space-y-3 max-w-none">
            <p>
              Performance information for the strategy is back-tested and hypothetical, and does not reflect the returns of any actual investment portfolio. Past performance is no indication of future performance. This material is prepared by THOR Analytics, LLC (&ldquo;THOR&rdquo;) for informational purposes only. It is not intended to serve as a substitute for personalized investment or as a recommendation or solicitation for any particular security, strategy or investment product. The performance results provided herein represent the hypothetical back-test of the criteria of the strategy, do not reflect actual trading by THOR and do not represent the actual performance achieved by any THOR client. THOR has no client accounts for which it trades the strategy.
            </p>
            <p className="font-semibold text-navy-800">Relevance of the Hypothetical Performance Data to Recipient&apos;s Investment Objective</p>
            <p>
              You are receiving this material as the adviser or provider has made a reasonable determination — through the implementation of certain policies and procedures, and based on available information — that the hypothetical performance data contained herein is relevant to your financial situation and investment objectives.
            </p>
            <p className="font-semibold text-navy-800">Criteria Used and Assumptions Made for the Hypothetical Performance</p>
            <p>
              It is assumed that the securities used in the hypothetical back-tested results were available for purchase or sale during the time period presented and the markets were sufficiently liquid to permit the types of trading used. In addition, back-testing assumes purchase and sale prices believed to be attainable. Trades for the hypothetical returns were not actually executed. In actual trading, the prices attained may or may not be the same as the assumed order prices due to differences in the time the trades were executed and other factors. The results do not represent the impact that material economic and market factors might have on an investment adviser&apos;s decision-making process if the adviser were managing client money. Accordingly, the results may have over or under compensated for the impact, if any, of certain market factors such as lack of liquidity, money flow and other factors. Back-tested hypothetical returns are dependent on the market and economic conditions that existed during the period. Future market or economic conditions can adversely affect the returns. The hypothetical back-tested characteristics related to positions, position sizes and sector weights might differ materially from actual client portfolios.
            </p>
            <p className="font-semibold text-navy-800">Assumptions on Advisory Fees</p>
            <p>
              The hypothetical performance results likewise reflect the deduction of an investment platform and manager fee of 0.55%. Advisory fees, however, may vary among clients invested in this strategy. Actual performance results will be reduced by fees including, but not limited to, investment management fees and other costs such as custodial, reporting, evaluation services, other expenses and a possible distribution fee. Actual advisory fees and expenses paid may be higher or lower than model advisory fees. The investment management fee paid to THOR Financial Technologies is separate and distinct from the internal fees and expenses charged by the respective funds. Prospective clients should consider all of these fees and charges when deciding whether to invest in the program. Performance results for this program do not reflect the impact of taxes. Select programs may engage in a significant amount of trading. Gains or losses will generally be short-term in nature; consequently, such programs will likely not be suitable for clients seeking tax efficiency. THOR Financial Technologies does not provide tax or legal advice. Moreover, the hypothetical performance does not include custodial, taxes or other fees that may be incurred by an investor. The hypothetical performance results represent the price return of the investments in the hypothetical portfolios. In order to provide more accurate prices that reflect the performance of the underlying assets of mutual funds and exchange-traded funds (&ldquo;ETFs&rdquo;) closing prices of mutual funds and ETFs are adjusted to correct for any capital gains, dividends, and/or splits. Hypothetical returns reflecting the use of ETFs are calculated based on the ETFs&apos; sole end-of-day price.
            </p>
            <p className="font-semibold text-navy-800">The S&amp;P 500 as a Benchmark</p>
            <p>
              The S&amp;P 500 index is widely regarded as the best single gauge of large-cap U.S. equities. The index includes 500 companies and covers approximately 80% of available market capitalization. The index results display the total return and assume the reinvestment of all dividends and interest. Investors cannot invest directly in the index and the index returns do not reflect any fees, expenses, or sales charges. The S&amp;P 500 is shown for general market comparison purposes and does not represent the strategy. Past performance is not indicative of future results. Any information and data pertaining to an index contained in this document relate only to the index itself and not to any asset management product based on the index.
            </p>
            <p className="font-semibold text-navy-800">Risks and Limitations of Hypothetical Performance Data</p>
            <p>
              Hypothetical or simulated performance results have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading, but are based on the historical returns of the selected investments, indices or investment classes and various assumptions of past and future events. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. Also, since the trades have not actually been executed, the results may have under or overcompensated for the impact of certain market factors. In addition, hypothetical trading does not involve financial risk. No hypothetical trading record can completely account for the impact of financial risk in actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of the trading losses are material factors which can adversely affect the actual trading results. There are numerous other factors related to the economy or markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results, all of which can adversely affect trading results.
            </p>
            <p>
              The following are specific limitations of hypothetical, back-tested performance as presented in the Model: (a) the Model results do not reflect the results of actual trading using investor assets, but were achieved by means of the retroactive application of each of the referenced underlying Models, which may have been chosen with the benefit of hindsight; (b) back tested performance may not reflect the impact that any material market or economic factors might have had on an adviser&apos;s use of the hypothetical Model if the Model had been used during the period to actually manage investor assets; (c) such performance does not reflect the adviser&apos;s decision making process if the adviser were actually managing a client&apos;s portfolio, which may include sentiment and/or emotional influences by market and/or economic events; (d) back tested performance does not reflect actual client asset trading and cannot accurately account for trading costs and the ability to withstand losses and, (e) for various reasons including variances in Model account holdings, variances in the investment management fee incurred, market fluctuation, the date on which a client engages the adviser&apos;s investment management services, and any account contributions or withdrawals, the performance of a specific adviser&apos;s managed account may experience investment results that are materially different from those reflected by the respective Model.
            </p>
            <p>
              Routine maintenance of the strategy — which includes updates to the strategy settings, fund substitutions, and the incorporation of recent market data into computational back-tests, among other adjustments — is performed at regular intervals. Hypothetical back-tested performance also differs from actual performance because, as noted, it is achieved through the retroactive application of screening designed with the benefit of hindsight. As a result, the screening process theoretically can continue to be changed until desired or better performance results are achieved. Further, back-tested screening performance does not represent the impact of technical factors, such as: 1) changes in signals as a result of changes in market data that occur after the cutoff time for trading and 2) the inability to execute trades when desired. In addition, performance results for clients that invest in the strategy will vary from the back-tested screening performance due to, for example, investment cash flows, frequency and precision of rebalancing and tax-management strategies.
            </p>
            <p className="font-semibold text-navy-800">Additional Disclosures</p>
            <p>
              All information and data are generally based on information and data from third party sources. Neither the adviser nor any of its affiliates, officers, owners, employees, investment advisory representatives, licensors or contractors (&ldquo;Non-Liable Parties&rdquo; or &ldquo;NLPs&rdquo;) shall be liable for any error, omission, inaccuracy, or incompleteness in the material provided herein or any data related thereto, and any use of this material is conditioned upon a user&apos;s total release of such NLPs. No further distribution of this material is permitted without the adviser&apos;s express written consent, and no NLP is responsible for updating this information at any time since this information is exclusively used for educational and informational purposes. The services are not intended and should not be construed as financial or investment advice, a recommendation or promotion. Neither ETF Action nor its licensors shall be responsible for investment decisions, damages, or other losses resulting from use of the services. Past performance does not guarantee future performance. Neither ETF Action nor its licensors shall be considered an &ldquo;expert&rdquo; under the securities act of 1933. Neither ETF Action nor its licensors warrant that the services comply with the requirements of the NASD or any similar organization or with the securities laws of any jurisdiction. Any information contained in the services should not be acted upon without obtaining specific legal, tax, and investment advice from a licensed professional. Distribution prohibited without prior permission. Full terms of service, including terms of use, copyrights, and disclaimers are available at https://www.etfaction.com/terms. &copy; Copyright ETF Action, Inc. All Rights Reserved.
            </p>
            <p className="font-semibold text-navy-800">Data Reliability and Definitions</p>
            <p>
              ETF Action, LLC believes the information herein to be accurate (at time of publication) and was obtained from reliable sources, but makes no guarantees with respect to its accuracy. Calculations of fundamental data are based on weighted averages of reported results and consensus estimates of current ETF constituents. Valuation data (price/earnings, price/sales, price/cash flow, price/book value) are calculated using per share data divided by current NAV of corresponding ETF. Performance, risk and technical data (moving averages, relative performance, RSI) calculated for specified periods using ETF market price which may differ from net asset value (NAV). Fixed income fundamental data provided directly by FactSet and updated monthly. The Global Industry Classification Standard (GICS&reg;) was developed by and/or is the exclusive property of MSCI, Inc. and S&amp;P Global Market Intelligence Inc. GICS is a service mark of MSCI and S&amp;P Global Market Intelligence and has been licensed for use by ETF Action. Source Data: FactSet Research Systems Inc.
            </p>
            <p className="mt-4">
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
