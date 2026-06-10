import Link from "next/link";
import type { Metadata } from "next";
import { AdvisorGate } from "@/components/AdvisorGate";
import { models } from "@/data/models";

export const metadata: Metadata = {
  title: "Advisor Resources | THOR Financial Technologies",
  description:
    "Model factsheets and fund one-pagers for financial professionals. THOR's systematic strategies have run live since 2020.",
  robots: { index: false },
};

const onePagers = [
  {
    name: "THOR Equal Weight Low Volatility ETF",
    description: "Ten equal-weight sector sleeves with a signal-driven de-risk cascade into Treasuries.",
    href: "/advisors/thor-low-volatility-one-pager.pdf",
  },
  {
    name: "THOR Index Rotation ETF",
    description: "Rotation across the three major U.S. indexes with a cascading move to cash when signals turn risk-off.",
    href: "/advisors/thor-index-rotation-one-pager.pdf",
  },
  {
    name: "THOR AdaptiveRisk Dynamic ETF",
    description: "Actively managed adaptive multi-asset strategy spanning equities, commodities, currencies, and fixed income.",
    href: "/advisors/thor-adaptiverisk-dynamic-one-pager.pdf",
  },
];

export default function AdvisorsPage() {
  return (
    <AdvisorGate>
      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Financial Professionals
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Advisor Resources</h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            THOR&apos;s systematic strategies have run live in SMAs and model portfolios since 2020,
            and the ETFs run the same engine in a newer wrapper. The materials below cover the full
            lineup for your due diligence.
          </p>
        </div>
      </section>

      {/* Model Factsheets */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-3">Model Factsheets</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Strategy mechanics, hypothetical performance, and risk statistics for each of THOR&apos;s six
            model portfolios.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={model.factsheetUrl}
                className="card group hover:border-gold-400/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {model.name}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">{model.tagline}</p>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gold-600">View factsheet</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fund One-Pagers */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-3">Fund One-Pagers</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Single-page summaries of each THOR ETF: strategy, rationale, and track record context.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {onePagers.map((sheet) => (
              <a
                key={sheet.href}
                href={sheet.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-gold-400/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {sheet.name}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">{sheet.description}</p>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gold-600">Download PDF</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-white pb-16">
        <div className="container-max mx-auto">
          <p className="text-xs text-gray-500 max-w-3xl">
            These materials are intended for financial professionals only and are not for distribution
            to retail investors. Model factsheets contain hypothetical performance; see{" "}
            <Link href="/disclosures" className="text-gold-600 underline">full disclosures</Link>.
          </p>
        </div>
      </section>
    </AdvisorGate>
  );
}
