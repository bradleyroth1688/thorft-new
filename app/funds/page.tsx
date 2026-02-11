"use client";

import { useState } from "react";
import Link from "next/link";

function RedirectModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-8 text-center">
        <div className="text-4xl mb-4">🔗</div>
        <h3 className="text-xl font-bold text-navy-800 mb-3">You Are Leaving This Site</h3>
        <p className="text-gray-600 mb-6">
          You are being redirected away from THOR Financial Technologies and directed to THOR Funds, a separate entity. THOR Financial Technologies is not responsible for the content on the THOR Funds website.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Cancel
          </button>
          <a
            href="https://thorfunds.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-navy-800 text-white hover:bg-navy-700 font-medium"
          >
            Continue to THOR Funds
          </a>
        </div>
      </div>
    </div>
  );
}

const funds = [
  {
    ticker: "THLV",
    name: "Thor Equal Weight Low Volatility ETF",
    category: "Domestic Equity — Sector-Based",
  },
  {
    ticker: "THIR",
    name: "Thor SDQ Index Rotation ETF",
    category: "Domestic Equity — Index Rotation",
  },
];

export default function FundsPage() {
  const [showRedirect, setShowRedirect] = useState(false);

  return (
    <>
      <RedirectModal open={showRedirect} onClose={() => setShowRedirect(false)} />

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
            Two actively managed ETFs bringing THOR Financial Technologies&apos; proprietary signal processing and systematic risk management to the public markets.
          </p>
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
                <h2 className="text-2xl font-bold text-navy-800 mb-6">{fund.name}</h2>
                <button
                  onClick={() => setShowRedirect(true)}
                  className="btn-primary w-full text-center cursor-pointer"
                >
                  Full Details at thorfunds.com →
                </button>
              </div>
            ))}
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
              <button
                onClick={() => setShowRedirect(true)}
                className="text-gold-600 underline cursor-pointer"
              >
                thorfunds.com
              </button>.
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
