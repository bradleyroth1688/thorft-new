import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THOR Financial Technologies | Technology-Driven Investment Solutions for Advisors",
  description:
    "THOR Financial Technologies uses proprietary signal processing to deliver systematic, adaptive model portfolios for RIA advisors. $1.1B+ AUM across ETFs and models.",
};

const models = [
  {
    name: "Sector 100",
    description: "S&P 500 sector-based strategy with proprietary risk management. Equally weighted sectors with systematic de-risking to short-duration treasuries.",
    benchmark: "S&P 500",
    href: "/models/sector-100",
  },
  {
    name: "Low Volatility SDQ",
    description: "Three major U.S. index strategy with adaptive rotation and cascading risk-off positioning. Equally weighted with dynamic overweighting.",
    benchmark: "S&P 500",
    href: "/models/low-volatility-sdq",
  },
  {
    name: "International",
    description: "Global equity strategy trading the top countries by market capitalization. Equal weight with proprietary risk tiering across international markets.",
    benchmark: "Total World Stock",
    href: "/models/international",
  },
  {
    name: "Levered Index",
    description: "Enhanced index strategy using dual-signal framework for leveraged, standard, and buffered exposure to the S&P 500.",
    benchmark: "S&P 500",
    href: "/models/levered-index",
  },
  {
    name: "NextGen Stock",
    description: "Concentrated high-growth stock portfolio with 8–12 positions. Proprietary cascading de-risk from full equity to 100% short-duration treasuries.",
    benchmark: "Growth Innovation",
    href: "/models/nextgen-stock",
  },
  {
    name: "Dollar ALT",
    description: "Precious metals allocation strategy with 60% gold and 40% silver. Systematic risk management with dollar diversification exposure.",
    benchmark: "Precious Metals Basket",
    href: "/models/dollar-alt",
  },
];

const stats = [
  { value: "$1.1B+", label: "Assets Under Management" },
  { value: "6", label: "Model Portfolios" },
  { value: "2", label: "Active ETFs" },
  { value: "94+", label: "Podcast Episodes" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(200, 165, 90, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(200, 165, 90, 0.15) 0%, transparent 40%)"
          }} />
        </div>
        <div className="container-max mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-8">
              For RIA Advisors
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              Technology-Driven Investment Solutions{" "}
              <span className="text-gold-400">for Advisors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              THOR uses proprietary signal processing to systematically manage risk across model portfolios and ETFs — removing emotion and replacing it with data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule a Consultation
              </Link>
              <Link href="/models" className="btn-outline text-lg px-8 py-4">
                Explore Models
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-700 py-8">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              THOR Financial Technologies builds systematic investment solutions powered by proprietary signal processing technology. We help advisors manage risk, reduce behavioral biases, and deliver consistent client outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-14 h-14 bg-navy-800 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Model Portfolios</h3>
              <p className="text-gray-600">
                Six distinct model portfolios spanning domestic equity, international, leveraged, growth, and alternatives — each powered by our proprietary risk management system.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-navy-800 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Active ETFs</h3>
              <p className="text-gray-600">
                Two actively managed ETFs bringing THOR&apos;s systematic methodology to the public markets, with over $1.1 billion in combined assets under management.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-navy-800 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Research & Education</h3>
              <p className="text-gray-600">
                94+ podcast episodes, a published book, and educational resources to help advisors understand systematic investing and signal processing approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Portfolios Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Model Portfolios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six adaptive model portfolios, each designed with distinct risk/return profiles. All powered by THOR&apos;s proprietary signal processing technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link
                key={model.name}
                href={model.href}
                className="card group hover:border-gold-400/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {model.name}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500">Benchmark: {model.benchmark}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">
              All model performance is hypothetical and net of 0.20% management fee. Past performance is not indicative of future results.
              See <Link href="/disclosures" className="text-gold-600 underline">full disclosures</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Why THOR Is Different
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Proprietary Signal Processing</h3>
                    <p className="text-gray-600">Our technology detects regime changes in real time, allowing portfolios to adapt before — not after — risk events unfold.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Ability to Go 100% Cash</h3>
                    <p className="text-gray-600">Unlike most strategies, THOR models can move entirely to short-duration treasuries when systemic risk is elevated across the board.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Risk-First Philosophy</h3>
                    <p className="text-gray-600">Every THOR strategy starts with risk management. Protecting capital during drawdowns is the foundation for long-term compounding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-1">Eliminates Behavioral Bias</h3>
                    <p className="text-gray-600">Systematic rules replace emotional decision-making. No guessing, no gut feelings — just disciplined, data-driven execution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy-800 rounded-2xl p-10 text-white">
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                &ldquo;Every other industry has embraced technology to improve outcomes. Financial services hasn&apos;t. It&apos;s time that changed.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                  <span className="text-gold-400 font-bold">BR</span>
                </div>
                <div>
                  <div className="font-semibold">Brad Roth</div>
                  <div className="text-sm text-gray-400">Founder & CIO, THOR Financial Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Featured */}
      <section className="section-padding gradient-navy text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured & Recognized</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            THOR&apos;s approach to systematic investing has been featured across the industry&apos;s leading platforms.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400">
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">ETF.com</span>
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">Schwab Network</span>
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">InvestmentNews</span>
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">Yahoo Finance</span>
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">FinTech TV</span>
            <span className="text-lg font-semibold hover:text-gold-400 transition-colors">NYSE</span>
          </div>
        </div>
      </section>

      {/* Book & Podcast */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book */}
            <div className="card border-2 border-navy-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📖</span>
                <span className="px-3 py-1 bg-gold-400/10 text-gold-600 rounded-full text-xs font-semibold">The Book</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">
                Little Reasons, Big Consequences
              </h3>
              <p className="text-gray-600 mb-4">
                Why your investment returns stink — and what to do about it. Brad Roth&apos;s 12-chapter exploration of the behavioral pitfalls that destroy wealth.
              </p>
              <Link href="/book" className="btn-secondary inline-flex">
                Learn More →
              </Link>
            </div>
            {/* Podcast */}
            <div className="card border-2 border-navy-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎙️</span>
                <span className="px-3 py-1 bg-gold-400/10 text-gold-600 rounded-full text-xs font-semibold">Podcast</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">
                Behind the Ticker
              </h3>
              <p className="text-gray-600 mb-4">
                94+ episodes featuring the people building today&apos;s most innovative ETFs. Strategy, structure, and the stories behind each fund.
              </p>
              <Link href="/podcast" className="btn-secondary inline-flex">
                Listen Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gold-400 to-gold-500">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Ready to Explore Systematic Investing?
          </h2>
          <p className="text-lg text-navy-700/80 max-w-2xl mx-auto mb-8">
            Schedule a consultation to learn how THOR&apos;s model portfolios can enhance your practice and deliver better outcomes for your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
            <Link href="/resources" className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-800 font-semibold rounded-lg hover:bg-gray-50 transition-all text-lg">
              Download Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
