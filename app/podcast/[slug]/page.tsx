import Link from "next/link";
import type { Metadata } from "next";
import episodes from "@/data/episodes.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ep = episodes.find((e) => e.slug === params.slug);
  if (!ep) return {};
  return {
    title: `${ep.guest} — Behind the Ticker`,
    description: stripHtml(ep.description).substring(0, 160),
  };
}

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const ep = episodes.find((e) => e.slug === params.slug);
  if (!ep) notFound();

  const sorted = [...episodes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sorted.findIndex((e) => e.slug === ep.slug);
  const prev = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const next = currentIndex > 0 ? sorted[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <Link href="/podcast" className="text-gray-400 hover:text-gold-400 transition-colors text-sm mb-6 inline-block">
            ← All Episodes
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Video Embed */}
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                  title={ep.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <span className="px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-xs font-medium">
                Behind the Ticker
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-2">{ep.guest}</h1>
              {ep.company && (
                <p className="text-gold-400 font-medium text-lg mb-4">{ep.company}</p>
              )}
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
                <time dateTime={ep.date}>{fmtDate(ep.date)}</time>
                <span>&middot;</span>
                <span>{ep.duration}</span>
              </div>

              {/* Listen Links */}
              <div className="space-y-3">
                <a
                  href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
                <a
                  href="https://open.spotify.com/show/1TJpgOAqctOCnjij9KTxNS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Episode Summary</h2>
            <div
              className="prose prose-lg max-w-none text-gray-600 [&_a]:text-gold-600 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: ep.description }}
            />
          </div>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container-max mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link href={`/podcast/${prev.slug}`} className="card group flex items-center gap-3 flex-1">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Previous Episode</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">{prev.guest}</div>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/podcast/${next.slug}`} className="card group flex items-center gap-3 flex-1 justify-end text-right">
                <div>
                  <div className="text-xs text-gray-500">Next Episode</div>
                  <div className="font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">{next.guest}</div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}
