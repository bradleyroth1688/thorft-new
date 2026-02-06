import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THOR Funds | Active ETFs",
  description: "THOR's two actively managed ETFs — THLV and THIR — bring systematic, adaptive investing to the public markets with over $1.1B in combined AUM.",
};

const funds = [
  {
    ticker: "THLV",
    name: "Thor Equal Weight Low Volatility ETF",
    description:
      "An actively managed ETF that trades S&P 500 sector ETFs using THOR's proprietary signal processing technology. Equally weighted sectors with systematic de-risking to short-duration treasuries when risk is elevated.",
    strategy: "Same systematic methodology as the Sector 100 model portfolio",
    index: "Thor Low Volatility Index",
    category: "Domestic Equity — Sector-Based",
  },
  {
    ticker: "THIR",
    name: "Thor SDQ Index Rotation ETF",
    description:
      "An actively managed ETF that trades the S&P 500, Dow Jones Industrial Average, and Nasdaq 100 with adaptive rotation and cascading risk management. Overweights the best-performing index while de-risking weaker positions.",
    strategy: "Same systematic methodology as the Low Volatility SDQ model portfolio",
    index: "Thor SDQ Rotation Index",
    category: "Domestic Equity — Index Rotation",
  },
];

export default function FundsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            THOR Funds
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Active ETFs Powered by <span className="text-gold-400">THOR</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Two actively managed ETFs bringing THOR&apos;s proprietary signal processing and systematic risk management to the public markets.
          </p>
          <div className="text-3xl font-bold text-gold-400 mt-8">$1.1B+ Combined AUM</div>
        </div>
      </section>

      {/* Funds */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {funds.map((fund) => (
              <div key={fund.ticker} className="bg-white rounded-2xl border-2 border-navy-100 p-8 hover:border-gold-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 bg-navy-800 text-gold-400 rounded-lg text-sm font-bold">
                    {fund.ticker}
                  </span>
                  <span className="px-3 py-1 bg-gold-400/10 text-gold-600 rounded text-xs font-medium">
                    {fund.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy-800 mb-3">{fund.name}</h2>
                <p className="text-gray-600 mb-4">{fund.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {fund.strategy}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Tracks the {fund.index}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Actively managed with daily signal evaluation
                  </div>
                </div>
                <a
                  href="https://thorfunds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Full Details at thorfunds.com →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ETFs */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Why Active ETFs?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-navy-800 mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Daily portfolio visibility with exchange-traded liquidity and intraday pricing</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold text-navy-800 mb-2">Tax Efficiency</h3>
              <p className="text-sm text-gray-600">ETF structure provides potential tax advantages through in-kind creation/redemption</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-navy-800 mb-2">Active Management</h3>
              <p className="text-sm text-gray-600">THOR&apos;s proprietary signal processing drives real-time adaptive positioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="bg-navy-50 border border-navy-100 rounded-xl p-6 mb-8">
            <p className="text-xs text-gray-500 leading-relaxed">
              An investor should consider the investment objectives, risks, charges, and expenses of the Fund carefully before investing.
              All investments are subject to risks, including the possible loss of principal. ETFs trade like stocks, are subject to investment risk,
              fluctuate in market value and may trade at prices above or below the ETF&apos;s net asset value. For full fund details, prospectus,
              and performance information, visit{" "}
              <a href="https://thorfunds.com" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">thorfunds.com</a>.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Questions About THOR Funds?</h2>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
