import Link from "next/link";
import type { Metadata } from "next";
import mediaData from "@/data/media-appearances.json";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webPageSchema, videoObjectSchema, newsArticleSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Press & Media — THOR Financial Technologies in the News",
  description: "THOR Financial Technologies has been featured on ETF.com, Schwab Network, InvestmentNews, Yahoo Finance, FinTech TV, and NYSE. Watch video interviews, read articles, and see Behind the Ticker clips.",
  alternates: { canonical: "https://thorft.com/press/" },
};

function fmtDate(dateStr: string) {
  if (dateStr.length === 4) return dateStr;
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const outlets = [
  "ETF.com", "Schwab Network", "InvestmentNews", "Yahoo Finance",
  "FinTech TV", "NYSE", "DWealth News", "Business Wire",
];

type Appearance = (typeof mediaData.mediaAppearances)[number] & {
  youtubeId?: string;
  pullQuote?: string;
};

type VideoShort = (typeof mediaData.videoShorts)[number];

export default function PressPage() {
  const appearances = (mediaData.mediaAppearances as Appearance[]).sort(
    (a, b) => {
      const dateA = a.date.length === 4 ? `${a.date}-06-01` : a.date;
      const dateB = b.date.length === 4 ? `${b.date}-06-01` : b.date;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
  );

  const videos = appearances.filter((a) => a.type === "video");
  const articles = appearances.filter((a) => a.type === "article" || a.type === "press-release" || a.type === "author-page" || a.type === "book");
  const shorts = mediaData.videoShorts as VideoShort[];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Press & Media", url: "/press/" }])} />
      <JsonLd data={webPageSchema({ name: "Press & Media", description: "THOR Financial Technologies press coverage, media appearances, and Behind the Ticker video clips.", url: "/press/" })} />

      {/* VideoObject schema for each video with youtubeId */}
      {videos.filter(v => v.youtubeId).map((v, i) => (
        <JsonLd key={`video-schema-${i}`} data={videoObjectSchema({
          title: v.title,
          description: v.description,
          youtubeId: v.youtubeId!,
          date: v.date.length === 4 ? `${v.date}-01-01` : v.date,
        })} />
      ))}

      {/* NewsArticle schema for articles */}
      {articles.map((a, i) => (
        <JsonLd key={`article-schema-${i}`} data={newsArticleSchema({
          title: a.title,
          outlet: a.outlet,
          description: a.description,
          date: a.date.length === 4 ? `${a.date}-01-01` : a.date,
          url: a.url,
        })} />
      ))}

      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Press & Media
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            In the <span className="text-gold-400">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            THOR Financial Technologies featured across the industry&apos;s leading financial media outlets.
          </p>
        </div>
      </section>

      {/* Outlet Marquee */}
      <section className="bg-navy-700 py-6 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...outlets, ...outlets].map((outlet, i) => (
            <span key={i} className="mx-8 text-lg font-semibold text-gray-400">
              {outlet}
            </span>
          ))}
        </div>
      </section>

      {/* Video Appearances */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Video Appearances</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-gold-400/50"
              >
                {item.youtubeId && (
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100">
                    <img
                      src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <svg className="w-12 h-12 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-navy-800 text-gold-400 rounded text-xs font-medium">
                    {item.outlet}
                  </span>
                  <span className="text-xs text-gray-500">{fmtDate(item.date)}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                {item.pullQuote && (
                  <blockquote className="mt-3 pl-3 border-l-2 border-gold-400 text-sm text-gray-500 italic line-clamp-2">
                    &ldquo;{item.pullQuote}&rdquo;
                  </blockquote>
                )}
                <div className="mt-3 text-sm text-gold-600 font-medium flex items-center gap-1">
                  Watch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Shorts */}
      {shorts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-2">Behind the Ticker Clips</h2>
            <p className="text-gray-600 mb-8">Short clips and highlights from the Behind the Ticker podcast.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {shorts.map((short, i) => (
                <a
                  key={i}
                  href={short.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-gray-200">
                    <img
                      src={`https://i.ytimg.com/vi/${short.youtubeId}/hqdefault.jpg`}
                      alt={short.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <svg className="w-8 h-8 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                      {Math.floor(short.duration / 60)}:{String(short.duration % 60).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {short.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles */}
      {articles.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-max mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Articles &amp; Features</h2>
            <div className="space-y-4 max-w-4xl">
              {articles.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group hover:border-gold-400/50 flex items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 bg-navy-800 text-gold-400 rounded text-xs font-medium">
                        {item.outlet}
                      </span>
                      <span className="text-xs text-gray-500">{fmtDate(item.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    {item.pullQuote && (
                      <blockquote className="mt-2 pl-3 border-l-2 border-gold-400 text-sm text-gray-500 italic">
                        &ldquo;{item.pullQuote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0 mt-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding gradient-navy text-white text-center">
        <div className="container-max mx-auto">
          <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            For all media inquiries, please contact us at welcome@thoranalytics.com
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
