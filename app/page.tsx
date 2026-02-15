import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeFaqs } from "@/data/faqs";
import { organizationSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "THOR Financial Technologies | Systematic Model Portfolios & ETFs for RIA Advisors",
  description:
    "THOR Financial Technologies provides proprietary, technology-driven model portfolios and actively managed ETFs for registered investment advisors. Six systematic strategies powered by signal processing with the ability to go to 100% cash. $1.1B AUM. Founded by Brad Roth.",
  alternates: { canonical: "https://thorft.com/" },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const models = [
  {
    name: "Sector 100",
    description: "S&P 500 sector-based strategy with proprietary risk management. Equally weighted sectors with systematic de-risking.",
    href: "/models/sector-100",
  },
  {
    name: "Low Volatility SDQ",
    description: "Three major U.S. index strategy with adaptive rotation and cascading risk-off positioning.",
    href: "/models/low-volatility-sdq",
  },
  {
    name: "International",
    description: "Global equity strategy trading the top countries by market capitalization with risk tiering.",
    href: "/models/international",
  },
  {
    name: "Levered Index",
    description: "Enhanced index strategy using dual-signal framework for leveraged and standard exposure.",
    href: "/models/levered-index",
  },
  {
    name: "NextGen Stock",
    description: "Concentrated high-growth stock portfolio with 8–12 positions and cascading de-risk capability.",
    href: "/models/nextgen-stock",
  },
  {
    name: "Dollar ALT",
    description: "Precious metals allocation strategy with systematic risk management and dollar diversification.",
    href: "/models/dollar-alt",
  },
];

const pressLogos = ["ETF.com", "Schwab Network", "InvestmentNews", "Yahoo Finance", "FinTech TV", "NYSE"];

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd data={webPageSchema({
        name: "THOR Financial Technologies — Systematic Investment Solutions for Advisors",
        description: "THOR Financial Technologies provides proprietary, technology-driven model portfolios and actively managed ETFs for registered investment advisors.",
        url: "/",
      })} />

      <article>
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden" aria-label="Hero">
          {/* Atmospheric background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#050508]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-gradient-to-b from-gold-400/[0.07] via-gold-400/[0.02] to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-gold-400/[0.04] to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-white/[0.02] to-transparent rounded-full blur-3xl" />
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10 pt-32 pb-24">
            {/* AUM badge */}
            <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-white font-semibold">$1.1B</span> in assets under management
                </span>
              </span>
            </div>

            {/* Main headline */}
            <div className="max-w-5xl">
              <h1 className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight text-white leading-[1.05]">
                  Different,
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight leading-[1.05] mt-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400">not better</span>
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight text-white leading-[1.05] mt-1">
                  at sameness.
                </span>
              </h1>
              
              <p className="mt-8 text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                Systematic model portfolios and ETFs that can go to{" "}
                <span className="text-white font-medium">100% cash</span>.{" "}
                Proprietary signal processing replaces emotion with data.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                <Link href="/contact" className="btn-primary btn-lg group">
                  <span>Open the Black Box</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/analyze" className="btn-outline btn-lg">
                  Analyze Your Portfolio
                </Link>
              </div>
            </div>

            {/* Floating stats */}
            <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <StatCard number="6" label="Model Portfolios" />
              <StatCard number="2" label="Active ETFs" />
              <StatCard number="5+" label="Years Live Track Record" suffix="yrs" />
              <StatCard number="100" label="Cash Capability" suffix="%" highlight />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PHILOSOPHY SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Philosophy">
          <div className="absolute inset-0 bg-[#07070a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Editorial quote */}
              <div>
                <span className="label mb-6 block">Our Philosophy</span>
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.2] tracking-tight">
                  &ldquo;Every other industry has embraced technology to improve outcomes.{" "}
                  <span className="text-gold-400">Financial services hasn&apos;t.</span>&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <img 
                    src="/images/brad-roth-headshot.jpg" 
                    alt="Brad Roth, Founder & CIO" 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div>
                    <div className="font-semibold text-white">Brad Roth</div>
                    <div className="text-sm text-gray-500">Founder & Chief Investment Officer</div>
                  </div>
                </div>
              </div>

              {/* Right: Value props */}
              <div className="space-y-8">
                <ValueProp 
                  icon={<SignalIcon />}
                  title="Proprietary Signal Processing"
                  description="Regime detection in real time. Portfolios adapt before risk events unfold — not after."
                />
                <ValueProp 
                  icon={<ShieldIcon />}
                  title="100% Cash Capability"
                  description="Unlike most strategies, we can move entirely to short-duration treasuries when systemic risk is elevated."
                />
                <ValueProp 
                  icon={<ChartIcon />}
                  title="Risk-First Philosophy"
                  description="Every strategy starts with downside protection. Capital preservation is the foundation for compounding."
                />
                <ValueProp 
                  icon={<BrainIcon />}
                  title="No Behavioral Bias"
                  description="Systematic rules replace emotional decisions. No guessing, no gut feelings — data-driven execution."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PORTFOLIO ANALYZER CTA (THE DIFFERENTIATOR)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Portfolio Analyzer">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0905] via-[#080808] to-[#050508]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="label mb-6 block">Free Tool for Advisors</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
                How risky is your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">client&apos;s portfolio?</span>
              </h2>
              <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
                Upload holdings. Get an instant risk analysis. See how THOR models could improve risk-adjusted returns.
              </p>
              
              {/* Mock analyzer preview */}
              <div className="mt-12 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 via-gold-400/10 to-gold-400/20 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-[#0d0d12] border border-white/10 rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Risk Score</div>
                      </div>
                      <div className="text-5xl font-display font-bold text-white">78<span className="text-2xl text-red-400">/100</span></div>
                      <div className="text-sm text-gray-400">High concentration risk detected</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Volatility</div>
                      </div>
                      <div className="text-5xl font-display font-bold text-white">22<span className="text-2xl text-gray-500">%</span></div>
                      <div className="text-sm text-gray-400">Annualized standard deviation</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">With THOR</div>
                      </div>
                      <div className="text-5xl font-display font-bold text-emerald-400">-31<span className="text-2xl">%</span></div>
                      <div className="text-sm text-gray-400">Potential volatility reduction</div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-white/5">
                    <Link href="/analyze" className="btn-primary btn-lg w-full sm:w-auto group">
                      <span>Analyze Your Portfolio Now</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            MODEL PORTFOLIOS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40" aria-label="Model Portfolios">
          <div className="absolute inset-0 bg-[#050508]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <span className="label mb-4 block">Six Systematic Strategies</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                  Model Portfolios
                </h2>
              </div>
              <p className="text-gray-400 max-w-md lg:text-right">
                Each powered by proprietary signal processing. All with the ability to de-risk to treasuries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {models.map((model, i) => (
                <Link 
                  key={model.name} 
                  href={model.href}
                  className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-gold-400/30 rounded-2xl p-8 transition-all duration-500"
                >
                  <div className="absolute top-8 right-8 text-4xl font-display font-bold text-white/[0.03] group-hover:text-gold-400/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-400 transition-colors mb-3">
                    {model.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <div className="flex items-center text-sm text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Strategy</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-600">
              All model performance is hypothetical and net of 0.20% management fee. Past performance is not indicative of future results.{" "}
              <Link href="/disclosures" className="text-gold-400/70 hover:text-gold-400 underline">Full disclosures</Link>.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            MEDIA & BOOK SECTION (THE FLEX)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Media & Book">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#08080a] to-[#050508]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Podcast Card */}
              <div className="group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl p-10 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-400/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <img 
                      src="/images/podcast-logo.jpg" 
                      alt="Behind the Ticker Podcast" 
                      className="w-24 h-24 rounded-2xl shadow-2xl object-cover"
                    />
                    <div>
                      <span className="inline-block px-3 py-1 bg-gold-400/10 text-gold-400 rounded-full text-xs font-semibold mb-3">
                        PODCAST
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                        Behind the Ticker
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                      94+
                    </div>
                    <div className="text-gray-400 text-lg mt-1">episodes on ETF.com</div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    In-depth conversations with the people building today&apos;s most innovative ETFs. 
                    Strategy, structure, and the stories behind each fund.
                  </p>
                  
                  <Link href="/podcast" className="btn-secondary group/btn">
                    <span>Listen Now</span>
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Book Card */}
              <div className="group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl p-10 md:p-12 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold-400/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <img 
                      src="/images/book-cover.png" 
                      alt="Little Reasons, Big Consequences" 
                      className="w-20 h-auto rounded-lg shadow-2xl"
                    />
                    <div>
                      <span className="inline-block px-3 py-1 bg-gold-400/10 text-gold-400 rounded-full text-xs font-semibold mb-3">
                        THE BOOK
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                        Little Reasons,<br />Big Consequences
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xl md:text-2xl font-serif text-gray-300 italic mb-6">
                    &ldquo;Why your investment returns stink — and what to do about it.&rdquo;
                  </p>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Brad Roth&apos;s 12-chapter exploration of the behavioral pitfalls that destroy wealth. 
                    The performance gap, fear and greed cycles, and why systematic rules win.
                  </p>
                  
                  <Link href="/book" className="btn-secondary group/btn">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PRESS / SOCIAL PROOF
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 overflow-hidden" aria-label="Featured In">
          <div className="absolute inset-0 bg-[#050508]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <p className="text-center text-sm text-gray-600 uppercase tracking-[0.2em] mb-10">Featured & Recognized</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {pressLogos.map((logo) => (
                <span 
                  key={logo} 
                  className="text-lg md:text-xl font-display font-semibold text-gray-600 hover:text-gold-400 transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FAQ SECTION (STYLED FOR DARK THEME)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40" aria-label="FAQ">
          <div className="absolute inset-0 bg-[#07070a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="label mb-4 block">Common Questions</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Frequently Asked
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-3">
              {homeFaqs.slice(0, 6).map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Call to Action">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-[#0a0908] to-[#050508]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] bg-gradient-to-b from-gold-400/[0.08] to-transparent blur-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          
          <div className="container-max mx-auto px-6 md:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Ready to explore
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">systematic investing?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Schedule a consultation to learn how THOR&apos;s model portfolios can enhance your practice 
              and deliver better outcomes for your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary btn-lg group">
                <span>Open the Black Box</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/resources" className="btn-secondary btn-lg">
                Download Resources
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function StatCard({ number, label, suffix, highlight }: { number: string; label: string; suffix?: string; highlight?: boolean }) {
  return (
    <div className="stat-card">
      <div className={`text-4xl md:text-5xl font-display font-bold ${highlight ? 'text-gold-400' : 'text-white'}`}>
        {number}
        {suffix && <span className="text-xl md:text-2xl text-gray-500 ml-1">{suffix}</span>}
      </div>
      <div className="text-sm text-gray-500 mt-2">{label}</div>
    </div>
  );
}

function ValueProp({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-5 group">
      <div className="w-12 h-12 rounded-xl bg-gold-400/5 border border-gold-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/10 group-hover:border-gold-400/20 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-white/[0.02] transition-colors list-none">
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <svg 
          className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" 
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <div className="px-6 pb-5 text-gray-400 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

// Icons
function SignalIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
    </svg>
  );
}
