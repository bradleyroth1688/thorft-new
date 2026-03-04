import Link from "next/link";
import type { Metadata } from "next";
import newsletters from "@/data/newsletters.json";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export function generateStaticParams() {
  return newsletters.map((nl) => ({ slug: nl.slug }));
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
  const nl = newsletters.find((n) => n.slug === params.slug);
  if (!nl) return {};
  const description =
    nl.subtitle ||
    "Brad Roth's daily market brief from The Signal newsletter.";
  return {
    title: `${nl.title} | The Signal`,
    description,
    alternates: { canonical: `https://thorft.com/blog/${nl.slug}/` },
    openGraph: {
      title: nl.title,
      description,
      url: `https://thorft.com/blog/${nl.slug}/`,
      type: "article",
      publishedTime: nl.date,
      authors: ["Brad Roth"],
      ...(nl.thumbnailUrl
        ? {
            images: [
              {
                url: nl.thumbnailUrl,
                width: 1200,
                height: 630,
                alt: nl.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: nl.title,
      description,
      ...(nl.thumbnailUrl ? { images: [nl.thumbnailUrl] } : {}),
    },
  };
}

export default function NewsletterPage({
  params,
}: {
  params: { slug: string };
}) {
  const nl = newsletters.find((n) => n.slug === params.slug);
  if (!nl) notFound();

  const sorted = [...newsletters].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sorted.findIndex((n) => n.slug === nl.slug);
  const prev =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const next = currentIndex > 0 ? sorted[currentIndex - 1] : null;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: nl.title,
          description:
            nl.subtitle ||
            "Brad Roth's daily market brief from The Signal newsletter.",
          datePublished: nl.date,
          dateModified: nl.date,
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
          url: `https://thorft.com/blog/${nl.slug}/`,
          ...(nl.thumbnailUrl ? { image: nl.thumbnailUrl } : {}),
          mainEntityOfPage: `https://thorft.com/blog/${nl.slug}/`,
          ...(nl.wordCount ? { wordCount: nl.wordCount } : {}),
          isPartOf: {
            "@type": "Blog",
            name: "The Signal Newsletter Archive",
            url: "https://thorft.com/blog/",
          },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "The Signal", url: "/blog/" },
          { name: nl.title, url: `/blog/${nl.slug}/` },
        ])}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold-400 transition-colors text-sm mb-6 inline-block"
          >
            &larr; The Signal Archive
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-xs font-medium mb-4">
              The Signal
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {nl.title}
            </h1>

            {nl.subtitle && (
              <p className="text-xl text-gray-300 mb-4">{nl.subtitle}</p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>By Brad Roth</span>
              <span>&middot;</span>
              <time dateTime={nl.date}>{fmtDate(nl.date)}</time>
              <span>&middot;</span>
              {nl.wordCount ? <span>{Math.ceil(nl.wordCount / 200)} min read</span> : null}
              <span>&middot;</span>
              <a
                href={nl.beehiivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                Read on Beehiiv →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {nl.thumbnailUrl && (
        <div className="bg-white border-b border-gray-100">
          <div className="container-max mx-auto py-8">
            <div className="max-w-4xl">
              <img
                src={nl.thumbnailUrl}
                alt={nl.title}
                className="w-full rounded-xl object-cover max-h-64"
              />
            </div>
          </div>
        </div>
      )}

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
              dangerouslySetInnerHTML={{ __html: nl.content }}
            />

            {/* Beehiiv link */}
            <div className="mt-12 p-6 bg-navy-50 rounded-xl border border-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-navy-800 mb-1">
                  Read the original on Beehiiv
                </div>
                <div className="text-sm text-gray-600">
                  Full formatting, links, and subscriber features available on
                  the Beehiiv platform.
                </div>
              </div>
              <a
                href={nl.beehiivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-shrink-0"
              >
                Read on Beehiiv →
              </a>
            </div>
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
            Subscribe on Beehiiv
          </a>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container-max mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="card group flex items-center gap-3 flex-1"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Previous Edition</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="card group flex items-center gap-3 flex-1 justify-end text-right"
              >
                <div>
                  <div className="text-xs text-gray-500">Next Edition</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {next.title}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
