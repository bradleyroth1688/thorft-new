import Link from "next/link";
import type { Metadata } from "next";
import newsletters from "@/data/newsletters.json";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "The Signal — Newsletter Archive | THOR Financial Technologies",
  description:
    "Brad Roth's daily market brief. Systematic signals, ETF positioning, and what the data is actually showing.",
  alternates: { canonical: "https://thorft.com/blog/" },
  openGraph: {
    title: "The Signal Newsletter Archive | THOR Financial Technologies",
    description:
      "Brad Roth's daily market brief. Systematic signals, ETF positioning, and what the data is actually showing.",
    url: "https://thorft.com/blog/",
    type: "website",
  },
};

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...newsletters].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "The Signal", url: "/blog/" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Signal Newsletter Archive",
          description:
            "Brad Roth's daily market brief. Systematic signals, ETF positioning, and what the data is actually showing.",
          url: "https://thorft.com/blog/",
          publisher: {
            "@type": "Organization",
            name: "THOR Financial Technologies",
            url: "https://thorft.com",
          },
          blogPost: sorted.slice(0, 10).map((nl) => ({
            "@type": "BlogPosting",
            headline: nl.title,
            datePublished: nl.date,
            url: `https://thorft.com/blog/${nl.slug}/`,
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
            The Signal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Daily Market <span className="text-gold-400">Brief</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Systematic signals, ETF positioning, and what the data is actually
            showing. Published weekday mornings.
          </p>
          <p className="text-gray-400 mt-6 text-sm">
            {sorted.length} editions in the archive
          </p>
          <div className="mt-8">
            <a
              href="https://thorft.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Subscribe — Free
            </a>
          </div>
        </div>
      </section>

      {/* Latest 3 — featured */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-2xl font-bold text-navy-800 mb-8">
            Latest Editions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sorted.slice(0, 3).map((nl) => (
              <Link
                key={nl.slug}
                href={`/blog/${nl.slug}`}
                className="card group flex flex-col"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-navy-100">
                  <img
                    src={nl.thumbnailUrl || "/images/podcast-logo.jpg"}
                    alt={nl.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                  {nl.title}
                </h3>
                {nl.subtitle && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                    {nl.subtitle}
                  </p>
                )}
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                  <time dateTime={nl.date}>{fmtDate(nl.date)}</time>
                  <span>&middot;</span>
                  <span>{nl.wordCount ? `${Math.ceil(nl.wordCount / 200)} min read` : ""}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* All editions */}
          <h2 className="text-2xl font-bold text-navy-800 mb-8">
            All Editions
          </h2>
          <div className="space-y-6">
            {sorted.slice(3).map((nl) => (
              <Link
                key={nl.slug}
                href={`/blog/${nl.slug}`}
                className="card group flex flex-col sm:flex-row gap-6"
              >
                <div className="sm:w-48 flex-shrink-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-navy-100">
                    <img
                      src={nl.thumbnailUrl || "/images/podcast-logo.jpg"}
                      alt={nl.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-1 line-clamp-1">
                    {nl.title}
                  </h3>
                  {nl.subtitle && (
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {nl.subtitle}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <time dateTime={nl.date}>{fmtDate(nl.date)}</time>
                    <span>&middot;</span>
                    <span>{nl.wordCount ? `${Math.ceil(nl.wordCount / 200)} min read` : ""}</span>
                  </div>
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
            Subscribe on Beehiiv
          </a>
        </div>
      </section>
    </>
  );
}
