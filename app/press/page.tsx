import Link from "next/link";
import type { Metadata } from "next";
import mediaData from "@/data/media-appearances.json";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "THOR Financial Technologies in the press. Video appearances, articles, and features from ETF.com, Schwab Network, InvestmentNews, Yahoo Finance, and more.",
};

function fmtDate(dateStr: string) {
  if (dateStr.length === 4) return dateStr; // year only
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const outlets = [
  "ETF.com", "Schwab Network", "InvestmentNews", "Yahoo Finance",
  "FinTech TV", "NYSE", "DWealth News",
];

export default function PressPage() {
  const appearances = mediaData.mediaAppearances.sort(
    (a, b) => {
      const dateA = a.date.length === 4 ? `${a.date}-06-01` : a.date;
      const dateB = b.date.length === 4 ? `${b.date}-06-01` : b.date;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
  );

  const videos = appearances.filter((a) => a.type === "video");
  const articles = appearances.filter((a) => a.type === "article");

  return (
    <>
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
            THOR Financial Technologies and Brad Roth featured across the industry&apos;s leading financial media outlets.
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

      {/* Articles */}
      {articles.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Articles & Features</h2>
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
            For press inquiries, interviews, or speaking engagements, contact us.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
