import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import { modelsFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Model Portfolios — Systematic Investment Strategies for Advisors",
  description: "THOR Financial Technologies offers six adaptive model portfolios for RIA advisors: Sector 100, Low Volatility SDQ, International, Levered Index, NextGen Stock, and Dollar ALT. All use proprietary signal processing with the ability to go to 100% cash. Management fee: 0.49%.",
  alternates: { canonical: "https://thorft.com/models/" },
};

const models = [
  {
    name: "Sector 100",
    slug: "sector-100",
    description: "S&P 500 sector-based strategy with proprietary risk management. Equally weighted sectors with systematic de-risking capability to 100% short-duration treasuries.",
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "S&P 500",
    minimum: "$25,000",
    highlight: "Flagship Strategy",
    etf: "THLV",
  },
  {
    name: "Low Volatility SDQ",
    slug: "low-volatility-sdq",
    description: "Three major U.S. index strategy with adaptive rotation and cascading risk-off positioning. Equally weighted across the S&P 500, Dow Jones, and Nasdaq 100.",
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "S&P 500",
    minimum: "$5,000",
    highlight: "Low Minimum",
    etf: "THIR",
  },
  {
    name: "International",
    slug: "international",
    description: "Global equity strategy trading the top countries by market capitalization. Equal weight with proprietary risk tiering and cascading de-risk to cash.",
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "Total World Stock",
    minimum: "$5,000",
    highlight: "Global Diversification",
  },
  {
    name: "Levered Index",
    slug: "levered-index",
    description: "Enhanced index strategy using a dual-signal framework for leveraged, standard, and buffered S&P 500 exposure depending on market conditions.",
    allocation: "Up to 140% Equity Exposure",
    benchmark: "S&P 500",
    minimum: "$5,000",
    highlight: "Enhanced Returns",
  },
  {
    name: "NextGen Stock",
    slug: "nextgen-stock",
    description: "Concentrated 8–12 position high-growth stock portfolio with proprietary cascading de-risk from full equity to 100% short-duration treasuries.",
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "Growth Innovation",
    minimum: "$50,000",
    highlight: "High Conviction",
  },
  {
    name: "Dollar ALT",
    slug: "dollar-alt",
    description: "Precious metals allocation strategy with 60% gold and 40% silver when risk-on. Systematic risk management for dollar diversification.",
    allocation: "60/40 Gold/Silver",
    benchmark: "Precious Metals Basket",
    minimum: "$5,000",
    highlight: "Alternatives",
  },
];

export default function ModelsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Model Portfolios", url: "/models/" }])} />
      <JsonLd data={faqSchema(modelsFaqs)} />
      <JsonLd data={webPageSchema({ name: "THOR Model Portfolios", description: "Six adaptive model portfolios powered by proprietary signal processing.", url: "/models/" })} />
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Model Portfolios
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Adaptive Model <span className="text-gold-400">Portfolios</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Six distinct strategies, one unifying principle: systematic risk management powered by proprietary signal processing. Each model is designed to adapt to changing market conditions in real time.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">How Our Models Work</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-800 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="font-semibold text-navy-800 mb-2">Signal Detection</h3>
              <p className="text-sm text-gray-600">Proprietary technology monitors market conditions across multiple timeframes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-800 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="font-semibold text-navy-800 mb-2">Regime Classification</h3>
              <p className="text-sm text-gray-600">Each position is classified as risk-on or risk-off based on signal output</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-800 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="font-semibold text-navy-800 mb-2">Cascading De-Risk</h3>
              <p className="text-sm text-gray-600">As signals turn risk-off, positions systematically rotate to short-duration treasuries</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-800 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 className="font-semibold text-navy-800 mb-2">Re-Entry</h3>
              <p className="text-sm text-gray-600">When risk-on signals return, the model rebuilds positions systematically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}`}
                className="card group hover:border-gold-400/50 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2.5 py-1 bg-navy-800 text-gold-400 rounded text-xs font-medium">
                    {model.highlight}
                  </span>
                  {model.etf && (
                    <span className="px-2.5 py-1 bg-gold-400/10 text-gold-600 rounded text-xs font-medium">
                      ETF Available
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-3">
                  {model.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{model.description}</p>
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Benchmark</span>
                    <span className="text-navy-800 font-medium">{model.benchmark}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Allocation</span>
                    <span className="text-navy-800 font-medium">{model.allocation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Minimum</span>
                    <span className="text-navy-800 font-medium">{model.minimum}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gold-600 text-sm font-medium group-hover:text-gold-500">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-500 mb-2">
              <strong>Important:</strong> All model performance is hypothetical, back-tested, and net of 0.49% management fee. Past performance is not indicative of future results.
            </p>
            <p className="text-sm text-gray-500">
              Hypothetical results have inherent limitations and do not represent actual trading. See{" "}
              <Link href="/disclosures" className="text-gold-600 underline">full disclosures</Link> for complete details.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={modelsFaqs} className="bg-white" />

      {/* CTA */}
      <section className="section-padding gradient-navy text-white text-center">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Download model factsheets or book a zoom to discuss implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Open the Black Box</Link>
            <Link href="/resources" className="btn-outline text-lg px-8 py-4">Download Factsheets</Link>
          </div>
        </div>
      </section>
    </>
  );
}
