import Link from "next/link";
import type { Metadata } from "next";
import blogPosts from "@/data/blog-posts.json";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/data/schemas";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function thumbUrl(youtubeId: string) {
  return youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : "https://thorft.com/images/podcast-logo.jpg";
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
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://thorft.com/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://thorft.com/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: ["Brad Roth"],
      images: [
        {
          url: thumbUrl(post.youtubeId),
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [
        thumbUrl(post.youtubeId),
      ],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sorted.findIndex((p) => p.slug === post.slug);
  const prev =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const next = currentIndex > 0 ? sorted[currentIndex - 1] : null;

  // Find related posts by topic overlap
  const related = sorted
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      ...p,
      overlap: p.topics.filter((t) => post.topics.includes(t)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          dateModified: post.date,
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
          url: `https://thorft.com/blog/${post.slug}/`,
          image: thumbUrl(post.youtubeId),
          mainEntityOfPage: `https://thorft.com/blog/${post.slug}/`,
          keywords: post.topics.join(", "),
          wordCount: post.wordCount,
          isPartOf: {
            "@type": "Blog",
            name: "THOR Financial Technologies Blog",
            url: "https://thorft.com/blog/",
          },
          about: {
            "@type": "PodcastEpisode",
            name: `${post.guest} — Behind the Ticker`,
            url: `https://thorft.com/podcast/${post.podcastSlug}/`,
          },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog/" },
          { name: post.guest, url: `/blog/${post.slug}/` },
        ])}
      />

      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold-400 transition-colors text-sm mb-6 inline-block"
          >
            ← All Articles
          </Link>

          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>By Brad Roth</span>
              <span>&middot;</span>
              <time dateTime={post.date}>{fmtDate(post.date)}</time>
              <span>&middot;</span>
              <span>{Math.ceil(post.wordCount / 200)} min read</span>
              <span>&middot;</span>
              <Link
                href={`/podcast/${post.podcastSlug}`}
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                🎧 Listen to episode
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main content */}
            <article className="lg:col-span-3">
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
                  prose-ul:my-4 prose-ul:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Podcast embed */}
              <div className="mt-12 p-6 bg-navy-50 rounded-xl border border-navy-100">
                <h3 className="text-lg font-bold text-navy-800 mb-3">
                  🎧 {post.youtubeId ? "Watch" : "Listen to"} the Full Episode
                </h3>
                {post.youtubeId ? (
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${post.youtubeId}`}
                      title={post.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : post.buzzsproutId ? (
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.buzzsprout.com/2162961/${post.buzzsproutId}?client_source=small_player&iframe=true`}
                      title={post.title}
                      width="100%"
                      height="200"
                      className="rounded-lg"
                    />
                  </div>
                ) : null}
                <div className="mt-4 flex gap-4">
                  {post.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                    >
                      Watch on YouTube →
                    </a>
                  )}
                  <a
                    href="https://open.spotify.com/show/1TJpgOAqctOCnjij9KTxNS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                  >
                    Listen on Spotify →
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Guest card */}
                <div className="card">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Featured Guest
                  </div>
                  <div className="font-bold text-navy-800 text-lg">
                    {post.guest}
                  </div>
                  {post.company && (
                    <div className="text-sm text-gold-600 font-medium mt-1">
                      {post.company}
                    </div>
                  )}
                  <Link
                    href={`/podcast/${post.podcastSlug}`}
                    className="text-sm text-gold-600 hover:text-gold-700 mt-3 inline-block font-medium"
                  >
                    Listen to full episode →
                  </Link>
                </div>

                {/* Related articles */}
                {related.length > 0 && (
                  <div>
                    <h3 className="font-bold text-navy-800 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="block group"
                        >
                          <div className="text-sm font-semibold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-2">
                            {r.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {r.guest} &middot; {fmtDate(r.date)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topics */}
                <div>
                  <h3 className="font-bold text-navy-800 mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
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
                  <div className="text-xs text-gray-500">Previous Article</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {prev.guest}
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
                  <div className="text-xs text-gray-500">Next Article</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {next.guest}
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
