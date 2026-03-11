import Link from "next/link";
import type { Metadata } from "next";
import articles from "@/data/articles.json";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `https://thorft.com/insights/${article.slug}/` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://thorft.com/insights/${article.slug}/`,
      type: "article",
      publishedTime: article.date,
      authors: ["Brad Roth"],
      images: [
        {
          url: "https://thorft.com/images/whitepaper-og.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: ["https://thorft.com/images/whitepaper-og.png"],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const otherArticles = sorted.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.date,
          dateModified: article.date,
          author: {
            "@type": "Person",
            name: "Brad Roth",
            jobTitle: "Founder & CIO",
            url: "https://thorft.com/team/",
          },
          publisher: {
            "@type": "Organization",
            name: "THOR Financial Technologies",
            url: "https://thorft.com",
            logo: {
              "@type": "ImageObject",
              url: "https://thorft.com/images/logos/thor-ft-white.png",
            },
          },
          url: `https://thorft.com/insights/${article.slug}/`,
          mainEntityOfPage: `https://thorft.com/insights/${article.slug}/`,
          articleSection: article.category,
          image: "https://thorft.com/images/whitepaper-og.png",
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights/" },
          { name: article.title, url: `/insights/${article.slug}/` },
        ])}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <Link
            href="/insights"
            className="text-gray-400 hover:text-gold-400 transition-colors text-sm mb-6 inline-block"
          >
            &larr; All Insights
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-xs font-medium">
                {article.category}
              </span>
              <span className="text-xs text-gray-400">{article.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-300 mb-4">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>By Brad Roth</span>
              <span>&middot;</span>
              <time dateTime={article.date}>{fmtDate(article.date)}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="max-w-4xl">
            <div
              className="prose prose-lg max-w-none text-gray-700
                prose-headings:text-navy-800 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:mb-4
                prose-blockquote:border-l-4 prose-blockquote:border-gold-400
                prose-blockquote:bg-gold-50 prose-blockquote:py-4 prose-blockquote:px-6
                prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-blockquote:text-navy-700
                prose-li:text-gray-700
                prose-a:text-gold-600 prose-a:underline
                prose-ul:my-4 prose-ul:space-y-2
                prose-table:text-sm"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Subscribe CTA */}
            <div className="mt-12 p-6 bg-navy-50 rounded-xl border border-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-navy-800 mb-1">
                  Subscribe to The Signal
                </div>
                <div className="text-sm text-gray-600">
                  Brad Roth&apos;s daily market brief — systematic signals, ETF positioning, and what the data is actually showing.
                </div>
              </div>
              <a
                href="https://thorft.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-shrink-0"
              >
                Subscribe Free &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      {otherArticles.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max mx-auto">
            <h2 className="text-2xl font-bold text-navy-800 mb-8">More Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="card group flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 bg-navy-50 text-navy-700 rounded-full text-xs font-medium">
                      {a.category}
                    </span>
                    <span className="text-xs text-gray-400">{a.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                    <span>Brad Roth</span>
                    <span>&middot;</span>
                    <time dateTime={a.date}>{fmtDate(a.date)}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section-padding gradient-navy text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get The Signal Every Morning
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Brad Roth&apos;s daily market brief — systematic signals, ETF
            positioning, and what the data is actually showing. Free to subscribe.
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
