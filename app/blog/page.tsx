import Link from "next/link";
import type { Metadata } from "next";
import blogPosts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Blog — ETF Insights, Strategies & Market Analysis",
  description:
    "In-depth articles on ETF strategies, portfolio construction, and market insights from the Behind the Ticker podcast. Written for financial advisors and sophisticated investors.",
  alternates: { canonical: "https://thorft.com/blog/" },
  openGraph: {
    title: "Blog — ETF Insights & Strategies | THOR Financial Technologies",
    description:
      "Expert analysis of ETF strategies, risk management, and portfolio construction from Behind the Ticker podcast conversations.",
    url: "https://thorft.com/blog/",
    type: "website",
  },
};

function thumbUrl(youtubeId: string) {
  return youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
    : "/images/podcast-logo.jpg";
}

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const allTopics = Array.from(
  new Set(blogPosts.flatMap((p) => p.topics))
).sort();

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog/" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "THOR Financial Technologies Blog",
          description:
            "ETF strategy insights and market analysis from the Behind the Ticker podcast.",
          url: "https://thorft.com/blog/",
          publisher: {
            "@type": "Organization",
            name: "THOR Financial Technologies",
            url: "https://thorft.com",
          },
          blogPost: sorted.slice(0, 10).map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            url: `https://thorft.com/blog/${post.slug}/`,
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
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ETF Insights &amp; <span className="text-gold-400">Analysis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep dives into ETF strategies, portfolio construction, and the
            people building today&apos;s most innovative funds — distilled from
            Behind the Ticker conversations.
          </p>
          <p className="text-gray-400 mt-6 text-sm">
            {sorted.length} articles from {sorted.length} podcast episodes
          </p>
        </div>
      </section>

      {/* Topic filters (static, no JS needed) */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container-max mx-auto py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <span className="px-3 py-1.5 bg-navy-800 text-white text-sm rounded-full font-medium">
              All ({sorted.length})
            </span>
            {allTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-default"
              >
                {topic} (
                {blogPosts.filter((p) => p.topics.includes(topic)).length})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured (latest 3) */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <h2 className="text-2xl font-bold text-navy-800 mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sorted.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-navy-100">
                  <img
                    src={thumbUrl(post.youtubeId)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {post.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-0.5 bg-gold-400/10 text-gold-600 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                  {post.metaDescription}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                  <time dateTime={post.date}>{fmtDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{Math.ceil(post.wordCount / 200)} min read</span>
                </div>
              </Link>
            ))}
          </div>

          {/* All articles */}
          <h2 className="text-2xl font-bold text-navy-800 mb-8">
            All Articles
          </h2>
          <div className="space-y-6">
            {sorted.slice(3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col sm:flex-row gap-6"
              >
                <div className="sm:w-48 flex-shrink-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-navy-100">
                    <img
                      src={thumbUrl(post.youtubeId)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {post.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-0.5 bg-gold-400/10 text-gold-600 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-1 line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {post.metaDescription}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <time dateTime={post.date}>{fmtDate(post.date)}</time>
                    <span>&middot;</span>
                    <span>{post.guest}</span>
                    <span>&middot;</span>
                    <span>{Math.ceil(post.wordCount / 200)} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Listen to the Podcast
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            These articles are distilled from Behind the Ticker episodes. For
            the full conversations, subscribe on your favorite platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcast" className="btn-primary text-lg px-8 py-4">
              Browse All Episodes
            </Link>
            <a
              href="https://open.spotify.com/show/1TJpgOAqctOCnjij9KTxNS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-lg px-8 py-4"
            >
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
