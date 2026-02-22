import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { personSchema, breadcrumbSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Brad Roth — Founder & CIO, THOR Financial Technologies",
  description:
    "Brad Roth is the Founder and Chief Investment Officer of THOR Financial Technologies, a systematic investment firm based in Pittsburgh, Pennsylvania. Over two decades in quantitative finance, host of the Behind the Ticker podcast (94+ episodes), and author of Little Reasons, Big Consequences.",
  alternates: { canonical: "https://thorft.com/brad-roth/" },
  openGraph: {
    type: "profile",
    title: "Brad Roth — Founder & CIO, THOR Financial Technologies",
    description:
      "Brad Roth is the Founder and CIO of THOR Financial Technologies, Pittsburgh. Systematic investing, signal processing, 94-episode podcast host, published author.",
    url: "https://thorft.com/brad-roth/",
    images: [
      {
        url: "https://thorft.com/images/brad-roth-headshot.jpg",
        width: 800,
        height: 800,
        alt: "Brad Roth, Founder & CIO of THOR Financial Technologies",
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: "@Bradr_thor",
    title: "Brad Roth — Founder & CIO, THOR Financial Technologies",
    description:
      "Founder & CIO of THOR Financial Technologies. Systematic investing, signal processing. Pittsburgh, PA.",
    images: ["https://thorft.com/images/brad-roth-headshot.jpg"],
  },
};

export default function BradRothPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...personSchema() }} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Brad Roth", url: "/brad-roth/" },
        ])}
      />
      <JsonLd
        data={webPageSchema({
          name: "Brad Roth — Founder & CIO, THOR Financial Technologies",
          description:
            "Brad Roth is the Founder and Chief Investment Officer of THOR Financial Technologies, based in Pittsburgh, Pennsylvania.",
          url: "/brad-roth/",
        })}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0">
              <img
                src="/images/brad-roth-headshot.jpg"
                alt="Brad Roth, Founder and CIO of THOR Financial Technologies, Pittsburgh PA"
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-4 border-gold-400/30"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-4">
                Founder &amp; Chief Investment Officer
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">Brad Roth</h1>
              <p className="text-xl text-gold-400 font-medium mb-4">
                THOR Financial Technologies &mdash; Pittsburgh, Pennsylvania
              </p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Systematic investor. Signal processing engineer. Founder of THOR Financial
                Technologies. Host of the <em>Behind the Ticker</em> podcast. Author. Duquesne
                University alum, Pittsburgh.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/brad-roth-thor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-gold-400/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Bradr_thor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-gold-400/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @Bradr_thor
                </a>
                <a
                  href="https://www.youtube.com/@BRoth_THOR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-gold-400/20 border border-white/20 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-navy-800 rounded-2xl p-6 text-white">
                <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-4">At a Glance</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>Founder &amp; CIO, THOR Financial Technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>Pittsburgh, Pennsylvania</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>20+ years quantitative finance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>Duquesne University, BBA (honors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>CFP® — New York University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>FINRA Series 66 &amp; NFA Series 3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>Host: <em>Behind the Ticker</em> podcast (94+ episodes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">▸</span>
                    <span>Author: <em>Little Reasons, Big Consequences</em></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/team" className="text-navy-700 hover:text-gold-600 font-medium">
                      Full Leadership Team →
                    </Link>
                  </li>
                  <li>
                    <Link href="/podcast" className="text-navy-700 hover:text-gold-600 font-medium">
                      Behind the Ticker Podcast →
                    </Link>
                  </li>
                  <li>
                    <Link href="/book" className="text-navy-700 hover:text-gold-600 font-medium">
                      Little Reasons, Big Consequences →
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-navy-700 hover:text-gold-600 font-medium">
                      Contact Brad →
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://adviserinfo.sec.gov/individual/summary/5686432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-700 hover:text-gold-600 font-medium"
                    >
                      FINRA BrokerCheck →
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Background</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Brad Roth is the Founder and Chief Investment Officer of{" "}
                  <Link href="/" className="text-navy-700 font-semibold hover:text-gold-600">
                    THOR Financial Technologies
                  </Link>
                  , a registered investment adviser headquartered in Greensburg, Pennsylvania —
                  in the greater Pittsburgh area. He founded THOR with a conviction that
                  systematic, technology-driven investing consistently outperforms emotionally-driven
                  decision-making.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A honors graduate of Duquesne University in Pittsburgh, Pennsylvania, Brad began
                  his career in finance in the early 2000s. Over two decades, he built deep expertise
                  in quantitative finance, signal processing, and risk management — eventually applying
                  techniques from telecommunications and defense engineering to financial markets.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Building THOR</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  THOR&apos;s methodology started as a research project in 2009. Brad observed a persistent
                  pattern across markets: investors — even sophisticated ones — consistently underperformed
                  because of behavioral decisions, not bad strategies. The technology to solve this existed
                  in other fields. Signal processing had transformed communications and defense. Why not
                  investing?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The result is THOR&apos;s proprietary signal processing system — built in-house, not licensed —
                  that detects market regime changes in real time. When conditions shift, THOR&apos;s models adapt.
                  No gut instinct. No forecasts. Just data. Under Brad&apos;s leadership, THOR has grown to manage
                  assets across six distinct model portfolios and two actively managed ETFs listed on NYSE Arca,
                  serving RIA advisors nationwide.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-800 mb-4">
                  Behind the Ticker Podcast
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brad hosts{" "}
                  <Link href="/podcast" className="text-navy-700 font-semibold hover:text-gold-600">
                    <em>Behind the Ticker</em>
                  </Link>
                  , a podcast featuring in-depth conversations with the people building today&apos;s most
                  innovative ETFs. Now partnered with ETF.com, the show has aired 94+ episodes and has
                  become a go-to resource for advisors and investors seeking to understand the strategies
                  and structures behind modern fund offerings. Available on Spotify, Apple Podcasts, and
                  YouTube.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Author</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brad is the author of{" "}
                  <Link href="/book" className="text-navy-700 font-semibold hover:text-gold-600">
                    <em>&ldquo;Little Reasons, Big Consequences: Why Your Investment Returns Stink&rdquo;
                    </em>
                  </Link>{" "}
                  — a 12-chapter exploration of the behavioral mistakes that destroy investor wealth. The
                  book distills decades of experience into a single, plainspoken argument: investors
                  underperform because of behavior, not bad strategies. Systematic rules win.
                </p>
              </div>

              <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                <h3 className="text-lg font-bold text-navy-800 mb-3">Philosophy</h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;Every other industry has embraced technology to eliminate human error and improve
                  outcomes. Healthcare uses it. Manufacturing uses it. Logistics uses it. Financial
                  services? Still largely relies on the same approaches from decades ago. That&apos;s not
                  just outdated — it&apos;s costing investors real money.&rdquo;
                </blockquote>
                <p className="text-sm text-gray-500 mt-3">— Brad Roth, Founder &amp; CIO, THOR Financial Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gold-400 to-gold-500">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Connect With Brad
          </h2>
          <p className="text-lg text-navy-700/80 max-w-2xl mx-auto mb-8">
            Schedule a conversation to discuss how THOR&apos;s systematic approach can benefit
            your advisory practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Get in Touch
            </Link>
            <Link
              href="/podcast"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-800 font-semibold rounded-lg hover:bg-gray-50 transition-all text-lg"
            >
              Listen to Behind the Ticker
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
