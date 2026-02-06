import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { personSchema, breadcrumbSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Brad Roth — Founder & CIO of THOR Financial Technologies",
  description: "Brad Roth is the Founder and Chief Investment Officer of THOR Financial Technologies. With over two decades of quantitative finance experience, he built THOR's proprietary signal processing methodology. Host of Behind the Ticker podcast (94+ episodes) and author of 'Little Reasons, Big Consequences.'",
  alternates: { canonical: "https://thorft.com/team/" },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...personSchema() }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Team", url: "/team/" }])} />
      <JsonLd data={webPageSchema({ name: "Brad Roth — Founder & CIO", description: "Meet Brad Roth, Founder and CIO of THOR Financial Technologies.", url: "/team/" })} />
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Leadership
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Team Behind <span className="text-gold-400">THOR</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining deep quantitative expertise with a passion for challenging the status quo in financial services.
          </p>
        </div>
      </section>

      {/* Brad Roth */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Photo/Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-navy-800 rounded-2xl p-8 text-white text-center sticky top-28">
                <div className="w-32 h-32 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl font-bold text-gold-400">BR</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">Brad Roth</h2>
                <p className="text-gold-400 font-medium mb-6">Founder & Chief Investment Officer</p>
                
                <div className="space-y-3 text-sm text-gray-300 mb-6">
                  <p>Greensburg, Pennsylvania</p>
                  <p>Two decades in quantitative finance</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/brad-roth-8a4a8619a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@BRoth_THOR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="https://x.com/Bradr_thor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Background</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Brad Roth brings over two decades of experience in quantitative finance and signal processing to his role as Founder and Chief Investment Officer of THOR Financial Technologies. His career has been defined by a singular pursuit: proving that systematic, technology-driven investing consistently outperforms emotionally-driven approaches.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brad built THOR&apos;s proprietary methodology from the ground up, applying signal processing techniques — traditionally used in telecommunications and defense — to financial markets. The result is a suite of systematic strategies that detect market regime changes and adapt portfolio positioning in real time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">THOR&apos;s Evolution</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  What started as a research project into market signal processing has grown into a comprehensive investment platform serving RIA advisors nationwide. Under Brad&apos;s leadership, THOR has launched six distinct model portfolios, two actively managed ETFs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each strategy reflects Brad&apos;s core philosophy: manage risk first, then compound capital. The ability for THOR&apos;s models to move to 100% cash during periods of elevated systemic risk is a direct expression of this conviction — and a capability most competing approaches lack.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Behind the Ticker Podcast</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brad hosts <em>Behind the Ticker</em>, a podcast featuring in-depth conversations with the people building today&apos;s most innovative ETFs. With 94+ episodes and counting, the show has become a go-to resource for advisors and investors seeking to understand the strategies and structures behind modern fund offerings. Available on Spotify, Apple Podcasts, and YouTube.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Author</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brad is the author of <em>&ldquo;Little Reasons, Big Consequences: Why Your Investment Returns Stink&rdquo;</em> — a 12-chapter exploration of the behavioral mistakes that destroy investor wealth. The book distills decades of experience into actionable insights, making the case that systematic rules consistently outperform human intuition in portfolio management.
                </p>
              </div>

              <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                <h3 className="text-lg font-bold text-navy-800 mb-3">Philosophy</h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;Every other industry has embraced technology to eliminate human error and improve outcomes. Healthcare uses it. Manufacturing uses it. Logistics uses it. Financial services? Still largely relies on the same approaches from decades ago. That&apos;s not just outdated — it&apos;s costing investors real money. It&apos;s time that changed.&rdquo;
                </blockquote>
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
            Schedule a conversation to discuss how THOR&apos;s systematic approach can benefit your advisory practice and your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">Schedule a Consultation</Link>
            <Link href="/podcast" className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-800 font-semibold rounded-lg hover:bg-gray-50 transition-all text-lg">Listen to the Podcast</Link>
          </div>
        </div>
      </section>
    </>
  );
}
