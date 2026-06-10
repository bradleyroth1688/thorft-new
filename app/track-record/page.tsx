import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Six Years of Live Track Record | THOR Financial Technologies",
  description:
    "THOR's systematic strategies have traded real money since 2020 — through the 2020 crash, the 2022 bear market, and the rotations of 2024 and 2025. The ETFs are the newest wrapper around the same engine.",
  alternates: { canonical: "https://thorft.com/track-record" },
  openGraph: {
    title: "Six Years of Live Track Record. Not a Backtest.",
    description:
      "THOR's systematic strategies have run live in SMAs and model portfolios since 2020. The ETFs are the newest wrapper around the same engine.",
    url: "https://thorft.com/track-record",
    type: "website",
    images: [{ url: "https://thorft.com/images/whitepaper-og.png", width: 1200, height: 600, alt: "THOR Financial Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Six Years of Live Track Record. Not a Backtest.",
    description:
      "THOR's systematic strategies have run live since 2020. The ETFs are the newest wrapper around the same engine.",
    images: ["https://thorft.com/images/whitepaper-og.png"],
  },
};

const timeline = [
  {
    date: "2020",
    title: "Strategies go live",
    detail: "THOR's systematic strategies begin trading real money in separately managed accounts and model portfolios.",
  },
  {
    date: "September 2022",
    title: "THOR Equal Weight Low Volatility ETF",
    ticker: "THLV",
    detail: "The sector strategy arrives in an ETF wrapper on NYSE Arca.",
  },
  {
    date: "September 2024",
    title: "THOR Index Rotation ETF",
    ticker: "THIR",
    detail: "The three-index rotation strategy follows in its own ETF.",
  },
  {
    date: "April 2026",
    title: "THOR AdaptiveRisk Dynamic ETF",
    ticker: "THMR",
    detail: "An adaptive multi-asset strategy joins the lineup, sub-advised by Ai Alpha LLC.",
  },
];

export default function TrackRecordPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Track Record", url: "/track-record" }])} />
      <JsonLd
        data={webPageSchema({
          name: "Six Years of Live Track Record",
          description:
            "THOR's systematic strategies have traded real money since 2020 across SMAs and model portfolios. The ETFs are the newest wrapper around the same engine.",
          url: "/track-record",
        })}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Since 2020
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Six Years of Live Track Record.{" "}
            <span className="text-gold-400">Not a Backtest.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            THOR&apos;s systematic strategies have traded real money since 2020, first in separately
            managed accounts and model portfolios, now in ETFs. Same engine, newer wrapper.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              The Strategy Is Older Than the Funds
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Most ETF due-diligence screens gate on vehicle history. Three years of fund data is a
                common cutoff, and a fund launched last year fails that filter automatically. The filter
                answers the wrong question.
              </p>
              <p>
                The vehicle is new. The strategy is not. THOR&apos;s signal-driven process has run live
                since 2020 in SMAs and model portfolios used by advisors nationwide. Live means executed
                trades in real accounts, with no benefit of hindsight. The ETFs run that same systematic
                process inside a different structure.
              </p>
              <p>
                What an allocator actually wants to know is how a manager behaves in stress. Six live
                years cover the 2020 crash, the 2022 rate-driven bear market, and the sharp rotations of
                2024 and 2025. Every regime change in that stretch hit real positions, not a simulation.
                So the evaluation here is not a startup fund with a short history. It is an established
                systematic manager in a newer wrapper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            From Live Strategies to Listed Funds
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-gold-400/60 ml-3 space-y-10">
              {timeline.map((item) => (
                <li key={item.date} className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gold-400 ring-4 ring-gray-50" aria-hidden="true" />
                  <div className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-1">{item.date}</div>
                  <h3 className="text-xl font-bold text-navy-800">
                    {item.title}
                    {item.ticker && (
                      <span className="ml-3 align-middle inline-block px-2 py-0.5 rounded bg-navy-800 text-gold-400 text-xs font-mono tracking-wide">
                        {item.ticker}
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              The Engine Behind It
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                THOR applies digital signal processing to market data, the same engineering math that
                powers noise-canceling headphones. The system filters daily noise out of price action to
                detect when a market regime has actually changed. It detects; it does not forecast.
              </p>
              <p>
                When signals turn risk-off, positions cascade systematically toward short-duration
                Treasuries. The goal across every strategy is the same: seek to avoid the big hits and
                participate in the bulk of uptrends. No gut calls, no narratives, no exceptions to the
                rules.
              </p>
              <p>
                The full methodology is laid out in our{" "}
                <Link href="/resources" className="text-gold-600 underline hover:text-gold-700">
                  Signal Processing 101 whitepaper
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-white text-center">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Evaluate the Record Yourself</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Financial professionals can access model factsheets covering the full strategy lineup, or
            talk directly with the team that runs the system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/advisors" className="btn-primary text-lg px-8 py-4">
              Access Model Factsheets
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Talk to the Team
            </Link>
          </div>
          <p className="text-xs text-gray-400 max-w-3xl mx-auto mt-10 leading-relaxed">
            The ETFs are distinct vehicles from the separately managed accounts and model portfolios that
            preceded them. SMA and model portfolio history does not represent ETF performance, and past
            performance does not guarantee future results. All investing involves risk, including possible
            loss of principal. See{" "}
            <Link href="/disclosures" className="text-gold-400 underline">full disclosures</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
