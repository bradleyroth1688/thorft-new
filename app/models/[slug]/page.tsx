import Link from "next/link";
import type { Metadata } from "next";
import { models, getModelBySlug } from "@/data/models";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import { breadcrumbSchema, faqSchema, modelProductSchema } from "@/data/schemas";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = getModelBySlug(params.slug);
  if (!model) return {};
  return {
    title: `${model.name} Model Portfolio — ${model.tagline}`,
    description: `The THOR ${model.name} model portfolio is a ${model.category.toLowerCase()} strategy for RIA advisors. ${model.description[0].substring(0, 200)} Benchmark: ${model.benchmark}. Minimum: ${model.minimum}. Fee: 0.20%.`,
    alternates: { canonical: `https://thorft.com/models/${model.slug}/` },
  };
}

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const model = getModelBySlug(params.slug);
  if (!model) notFound();

  return (
    <>
      <JsonLd data={modelProductSchema(model)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Model Portfolios", url: "/models/" },
        { name: model.name, url: `/models/${model.slug}/` },
      ])} />
      <JsonLd data={faqSchema(model.faqs)} />

      <article>
        {/* Hero */}
        <section className="gradient-navy text-white py-20 md:py-28" aria-label="Model Overview">
          <div className="container-max mx-auto">
            <nav className="flex items-center gap-3 mb-6" aria-label="Breadcrumb">
              <Link href="/models" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                ← All Models
              </Link>
              <span className="text-gray-600">|</span>
              <span className="px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-xs font-medium">
                {model.category}
              </span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {model.name}
            </h1>
            <p className="text-xl md:text-2xl text-gold-400 font-medium mb-6">
              {model.tagline}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Benchmark</div>
                <div className="text-lg font-semibold">{model.benchmark}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Allocation</div>
                <div className="text-lg font-semibold">{model.allocation}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Minimum Investment</div>
                <div className="text-lg font-semibold">{model.minimum}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Management Fee</div>
                <div className="text-lg font-semibold">0.20%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Description */}
        <section className="section-padding bg-white" aria-label="Investment Strategy">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">Investment Strategy</h2>
                <div className="space-y-4">
                  {model.description.map((para, i) => (
                    <p key={i} className="text-lg text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <aside>
                <div className="bg-navy-800 rounded-2xl p-6 text-white sticky top-28">
                  <h3 className="text-lg font-bold mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    {model.howItWorks.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-navy-700">
                    <a href={model.factsheetUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      Download Factsheet (PDF)
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding bg-gray-50" aria-label="Key Features">
          <div className="container-max mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {model.keyFeatures.map((feature) => (
                <div key={feature.title} className="card">
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ETF Section */}
        {model.etf && (
          <section className="section-padding bg-white" aria-label="Corresponding ETF">
            <div className="container-max mx-auto">
              <div className="bg-navy-50 border border-navy-100 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gold-400 text-navy-800 rounded text-xs font-bold">ETF</span>
                  <h3 className="text-2xl font-bold text-navy-800">Corresponding ETF Available</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The {model.name} strategy is also available as an actively managed ETF — the <strong>{model.etf.name}</strong>.
                  {model.etf.index && <> The ETF tracks the <strong>{model.etf.index}</strong>.</>}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://thorfunds.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Learn More at thorfunds.com</a>
                  <Link href="/funds" className="btn-outline">View All THOR Funds</Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FaqSection faqs={model.faqs} title={`${model.name} — Frequently Asked Questions`} className="bg-gray-50" />

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-white" aria-label="Disclosures">
          <div className="container-max mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-sm font-bold text-navy-800 mb-2">Important Disclosures</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                All model performance is hypothetical, back-tested, and net of a 0.20% management fee. Past performance is not indicative of future results.
                Hypothetical performance has inherent limitations — unlike actual performance records, simulated results do not represent actual trading.
                All investments involve risk, including possible loss of principal. There is no guarantee that the strategy will achieve its objectives.
                For complete hypothetical performance disclosures, please review our{" "}
                <Link href="/disclosures" className="text-gold-600 underline">Disclosures page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-navy text-white text-center" aria-label="Contact">
          <div className="container-max mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in {model.name}?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Schedule a consultation to discuss how this model fits within your clients&apos; portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">Open the Black Box</Link>
              <Link href="/models" className="btn-outline text-lg px-8 py-4">View All Models</Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
