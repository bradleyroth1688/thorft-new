import Link from "next/link";
import type { Metadata } from "next";
import articles from "@/data/articles.json";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Insights — Educational Articles for Advisors",
  description:
    "In-depth educational articles on systematic investing, ETF mechanics, risk management, and portfolio construction. Written for financial advisors by Brad Roth.",
  alternates: { canonical: "https://thorft.com/insights/" },
  openGraph: {
    title: "Insights | THOR Financial Technologies",
    description:
      "In-depth educational articles on systematic investing, ETF mechanics, risk management, and portfolio construction.",
    url: "https://thorft.com/insights/",
    type: "website",
    images: [{ url: "https://thorft.com/images/whitepaper-og.png", width: 1200, height: 600, alt: "THOR Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | THOR Financial Technologies",
    description:
      "In-depth educational articles on systematic investing, ETF mechanics, and risk management for advisors.",
    images: ["https://thorft.com/images/whitepaper-og.png"],
  },
};

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights/" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "THOR Insights",
          description:
            "In-depth educational articles on systematic investing, ETF mechanics, risk management, and portfolio construction.",
          url: "https://thorft.com/insights/",
          publisher: {
            "@type": "Organization",
            name: "THOR Financial Technologies",
            url: "https://thorft.com",
          },
          blogPost: sorted.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            datePublished: a.date,
            url: `https://thorft.com/insights/${a.slug}/`,
            author: {
              "@type": "Person",
              name: "Brad Roth",
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Educational <span className="text-gold-400">Articles</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In-depth explorations of systematic investing, ETF mechanics, risk
            management, and the technology behind modern portfolio construction.
          </p>
          <p className="text-gray-400 mt-6 text-sm">
            {sorted.length} articles
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="card group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-navy-50 text-navy-700 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                  <span>Brad Roth</span>
                  <span>&middot;</span>
                  <time dateTime={article.date}>{fmtDate(article.date)}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding gradient-navy text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get The Signal Every Morning
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Brad Roth&apos;s daily market brief — systematic signals, ETF
            positioning, and what the data is actually showing. Free to
            subscribe.
          </p>
          <a
            href="https://thorft.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Subscribe to The Signal
          </a>
        </div>
      </section>
    </>
  );
}
