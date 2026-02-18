import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/data/schemas";
import WhitepaperForm from "@/components/WhitepaperForm";

export const metadata: Metadata = {
  title: "Advisor Resources — Factsheets, Whitepaper & Educational Content",
  description: "Download THOR model portfolio factsheets for all six strategies, access the Signal Processing 101 whitepaper, and explore educational resources. All factsheets include full hypothetical performance disclosures.",
  alternates: { canonical: "https://thorft.com/resources/" },
  openGraph: {
    title: "Advisor Resources | THOR Financial Technologies",
    description: "Signal Processing 101: How THOR's systematic approach filters market noise to detect regime changes. Download the whitepaper.",
    images: [{ url: "https://thorft.com/images/whitepaper-og.png", width: 1200, height: 600, alt: "Signal Processing 101 - THOR Whitepaper" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisor Resources | THOR Financial Technologies",
    description: "Signal Processing 101: How THOR's systematic approach filters market noise to detect regime changes.",
    images: ["https://thorft.com/images/whitepaper-og.png"],
  },
};

const factsheets = [
  { name: "Sector 100", href: "/documents/thor-sector-100-factsheet.pdf" },
  { name: "Low Volatility SDQ", href: "/documents/thor-low-volatility-sdq-factsheet.pdf" },
  { name: "International", href: "/documents/thor-international-factsheet.pdf" },
  { name: "Levered Index", href: "/documents/thor-levered-index-factsheet.pdf" },
  { name: "NextGen Stock", href: "/documents/thor-nextgen-stock-factsheet.pdf" },
  { name: "Dollar ALT", href: "/documents/thor-dollar-alt-factsheet.pdf" },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources/" }])} />
      <JsonLd data={webPageSchema({ name: "Advisor Resources", description: "Download THOR model factsheets, access the Signal Processing 101 whitepaper, and explore educational resources.", url: "/resources/" })} />
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advisor <span className="text-gold-400">Resources</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Download model factsheets, access research, and explore educational content to help you evaluate THOR&apos;s systematic approach.
          </p>
        </div>
      </section>

      {/* Whitepaper */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-gold-400 text-navy-800 rounded text-xs font-bold mb-4">
                  WHITEPAPER
                </span>
                <h2 className="text-3xl font-bold mb-4">Signal Processing 101</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An introduction to the signal processing principles that power THOR&apos;s investment methodology. Learn how techniques from telecommunications and defense apply to financial market analysis and risk management.
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  Topics include: regime detection, adaptive filtering, noise reduction in financial data, and systematic de-risking frameworks.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <WhitepaperForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factsheets */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-4 text-center">Model Factsheets</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Download detailed factsheets for each THOR model portfolio. Each includes strategy description, risk statistics, and full hypothetical performance disclosures.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {factsheets.map((fs) => (
              <a
                key={fs.name}
                href={fs.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-gold-400/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {fs.name}
                  </h3>
                  <p className="text-xs text-gray-500">PDF Download</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              All factsheets contain hypothetical, back-tested performance data. Past performance is not indicative of future results.
              Please review the disclosures section within each factsheet and our{" "}
              <Link href="/disclosures" className="text-gold-600 underline">Disclosures page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">More Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/podcast" className="card group text-center hover:border-gold-400/50">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-2">
                Behind the Ticker
              </h3>
              <p className="text-sm text-gray-600">94+ podcast episodes with ETF industry leaders</p>
            </Link>
            <Link href="/book" className="card group text-center hover:border-gold-400/50">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-2">
                The Book
              </h3>
              <p className="text-sm text-gray-600">Little Reasons, Big Consequences — by Brad Roth</p>
            </Link>
            <Link href="/models" className="card group text-center hover:border-gold-400/50">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-2">
                Model Details
              </h3>
              <p className="text-sm text-gray-600">In-depth strategy descriptions for all 6 models</p>
            </Link>
            <a href="https://thorft.beehiiv.com" target="_blank" rel="noopener noreferrer" className="card group text-center hover:border-gold-400/50">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-2">
                The Signal
              </h3>
              <p className="text-sm text-gray-600">Our daily market brief — positioning, risk signals, and the CIO&apos;s view</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-white text-center">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Our team is available to discuss any aspect of THOR&apos;s methodology and model portfolios.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
