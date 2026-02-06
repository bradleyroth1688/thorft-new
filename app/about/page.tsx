import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About THOR Financial Technologies",
  description: "Founded by Brad Roth in Greensburg, PA, THOR Financial Technologies uses proprietary signal processing to eliminate behavioral biases through systematic investing.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            About THOR
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Challenging the <span className="text-gold-400">Status Quo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Every other industry has embraced technology to improve outcomes. Healthcare, manufacturing, logistics — all transformed by data and automation. Financial services? Still largely relying on gut instinct and backward-looking analysis. We&apos;re changing that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                THOR Financial Technologies was founded with a single conviction: that systematic, technology-driven investing consistently outperforms emotionally-driven decision-making.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We build proprietary signal processing systems that detect market regime changes in real time. When conditions shift, our models adapt — not based on feelings or forecasts, but on data.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to eliminate the behavioral biases that destroy investor wealth: panic selling at bottoms, chasing performance at tops, and the paralysis that comes from information overload.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-gold-500 w-24 flex-shrink-0">$1.1B+</div>
                  <div className="text-gray-600">Assets under management across ETFs and model portfolios</div>
                </div>
                <div className="border-t border-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-gold-500 w-24 flex-shrink-0">6</div>
                  <div className="text-gray-600">Distinct model portfolios spanning equities, international, leveraged, and alternatives</div>
                </div>
                <div className="border-t border-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-gold-500 w-24 flex-shrink-0">2</div>
                  <div className="text-gray-600">Actively managed ETFs available on the public markets</div>
                </div>
                <div className="border-t border-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-gold-500 w-24 flex-shrink-0">2009</div>
                  <div className="text-gray-600">Original strategy inception — over 15 years of systematic methodology refinement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">How It Started</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                THOR Financial Technologies was founded by Brad Roth in Greensburg, Pennsylvania — not in a Wall Street tower, but in the heart of Main Street America. The distance from the financial establishment wasn&apos;t a disadvantage. It was the advantage.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                After two decades in quantitative finance, Brad observed a persistent pattern: investors — even sophisticated ones — consistently underperformed because of behavioral decisions, not bad strategies. The technology to prevent this existed in other fields. Signal processing had transformed telecommunications, defense, and engineering. Why not investing?
              </p>
              <p className="text-lg leading-relaxed mb-6">
                THOR was built to answer that question. By applying proprietary signal processing techniques to financial markets, we created a systematic methodology that identifies when to be invested and when to be in cash — removing the human emotions that destroy long-term returns.
              </p>
              <p className="text-lg leading-relaxed">
                Today, THOR serves RIA advisors nationwide with model portfolios and ETFs that embody this philosophy. Every strategy we build starts with one question: <strong className="text-navy-800">&ldquo;How do we protect capital first, then compound it?&rdquo;</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            What Sets THOR Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Proprietary Technology</h3>
              <p className="text-gray-600">
                Our signal processing technology is built in-house — not licensed, not off-the-shelf. It detects market regime changes that traditional indicators miss.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">100% Cash Capability</h3>
              <p className="text-gray-600">
                When risk is elevated across the board, our models can move entirely to short-duration treasuries. Most strategies can&apos;t — or won&apos;t — make that call.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Risk-First Approach</h3>
              <p className="text-gray-600">
                Capital preservation is the foundation. Every strategy is designed to manage downside risk first, enabling stronger long-term compounding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-white text-center">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Discover how THOR&apos;s systematic approach can complement your advisory practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Schedule a Consultation</Link>
            <Link href="/models" className="btn-outline text-lg px-8 py-4">Explore Models</Link>
          </div>
        </div>
      </section>
    </>
  );
}
