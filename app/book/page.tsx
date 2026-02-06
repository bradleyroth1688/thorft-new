import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import { bookFaqs } from "@/data/faqs";
import { bookSchema, breadcrumbSchema, faqSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Little Reasons, Big Consequences — Why Your Investment Returns Stink | By Brad Roth",
  description: "'Little Reasons, Big Consequences: Why Your Investment Returns Stink' is a 12-chapter book by Brad Roth, Founder & CIO of THOR Financial Technologies. It explores the behavioral mistakes that destroy investor wealth and makes the case for systematic, rules-based investing.",
  alternates: { canonical: "https://thorft.com/book/" },
};

const chapters = [
  { number: 1, title: "Introduction", excerpt: "Setting the stage for understanding why most investors consistently underperform — and it's not for the reasons they think." },
  { number: 2, title: "The Performance Gap", excerpt: "The data is clear: investors dramatically underperform the very funds they invest in. The culprit isn't bad products — it's bad behavior." },
  { number: 3, title: "Fear and Greed", excerpt: "The two emotions that drive markets and destroy portfolios. Understanding the cycle of panic and euphoria that repeats throughout history." },
  { number: 4, title: "The Buy-and-Hold Myth", excerpt: "Why the conventional wisdom of 'just hold on' fails in practice, and what happens when theory meets human psychology." },
  { number: 5, title: "Timing the Market", excerpt: "Everyone says you can't time the market. But what if the real problem is that you're using the wrong tools to try?" },
  { number: 6, title: "The Diversification Trap", excerpt: "Diversification is supposed to protect you. But in a crisis, correlations go to one — and diversification fails when you need it most." },
  { number: 7, title: "Information Overload", excerpt: "More information doesn't mean better decisions. In fact, it usually means worse ones. The paradox of modern investing." },
  { number: 8, title: "The Advisor Problem", excerpt: "Financial advisors are human too. The structural incentives that often work against your best interests." },
  { number: 9, title: "Systematic Solutions", excerpt: "Rules beat intuition. Every time. How systematic approaches remove the behavioral biases that destroy returns." },
  { number: 10, title: "Signal Processing", excerpt: "What telecommunications and defense have known for decades — and how those principles apply to financial markets." },
  { number: 11, title: "Risk First", excerpt: "The case for making risk management the foundation of every investment decision, not an afterthought." },
  { number: 12, title: "The Path Forward", excerpt: "Bringing it all together: a framework for investing that prioritizes discipline, data, and systematic execution." },
];

export default function BookPage() {
  return (
    <>
      <JsonLd data={bookSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Book", url: "/book/" }])} />
      <JsonLd data={faqSchema(bookFaqs)} />
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
                The Book
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Little Reasons,{" "}
                <span className="text-gold-400">Big Consequences</span>
              </h1>
              <p className="text-xl text-gold-400 font-medium mb-6">
                Why Your Investment Returns Stink
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The investment industry wants you to believe that success is complicated. It isn&apos;t. This book exposes the small, seemingly innocent mistakes that compound into massive wealth destruction — and reveals the systematic approach that actually works.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                By Brad Roth &middot; ~10,600 words &middot; 12 Chapters
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#chapters" className="btn-primary">
                  Explore Chapters
                </a>
                <Link href="/contact" className="btn-outline">
                  Request a Copy
                </Link>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
              <div className="text-7xl mb-6">📖</div>
              <h2 className="text-3xl font-bold mb-2">12 Chapters</h2>
              <p className="text-gray-300 mb-4">
                A complete framework for understanding why investors fail — and what to do about it.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-gold-400 font-bold text-lg">~10,600</div>
                  <div className="text-gray-400">Words</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-gold-400 font-bold text-lg">12</div>
                  <div className="text-gray-400">Chapters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-12">What You&apos;ll Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">The Mistakes That Matter</h3>
              <p className="text-gray-600">
                From buy-and-hold myths to emotion-driven decisions, discover the errors that destroy more wealth than any market crash.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Why Rules Beat Intelligence</h3>
              <p className="text-gray-600">
                Smart people make dumb investment decisions. Learn why systematic approaches outperform intuition every time.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">What Actually Works</h3>
              <p className="text-gray-600">
                Cut through the noise. Discover the simple principles that protect wealth and let it compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section id="chapters" className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-4">Chapters</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Each chapter stands alone, but together they build a complete framework for understanding investment success and failure.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-gold-400 font-bold flex-shrink-0">
                    {chapter.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy-800">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{chapter.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={bookFaqs} className="bg-white" />

      {/* About the Author */}
      <section className="section-padding gradient-navy text-white">
        <div className="container-max mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About the Author</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Brad Roth is the founder and CIO of THOR Financial Technologies. With over two decades of experience in quantitative finance and signal processing, he developed THOR&apos;s proprietary methodology for detecting market regime changes. He hosts the &ldquo;Behind the Ticker&rdquo; podcast with 94+ episodes interviewing ETF industry leaders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/team" className="btn-primary">Meet Brad</Link>
              <Link href="/podcast" className="btn-outline">Listen to Podcast</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gold-400 to-gold-500">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Interested in the Book?</h2>
          <p className="text-lg text-navy-700/80 max-w-2xl mx-auto mb-8">
            Contact us to request a copy or learn more about the ideas behind THOR&apos;s systematic investment philosophy.
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
