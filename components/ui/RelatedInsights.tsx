import Link from "next/link";
import type { InsightLink } from "@/lib/related-insights";

interface RelatedInsightsProps {
  insights: InsightLink[];
  heading?: string;
  intro?: string;
  className?: string;
}

/**
 * Contextual links from newsletter and podcast pages into the insight
 * articles. These pages are the bulk of the site, so this is where the
 * internal link equity for the commercial content comes from.
 */
export function RelatedInsights({
  insights,
  heading = "Related Reading",
  intro,
  className = "",
}: RelatedInsightsProps) {
  if (!insights || insights.length === 0) return null;

  return (
    <aside className={`mt-12 pt-8 border-t border-gray-200 ${className}`}>
      <h2 className="text-xl font-bold text-navy-800 mb-2">{heading}</h2>
      {intro ? <p className="text-sm text-gray-600 mb-5">{intro}</p> : null}
      <ul className="grid gap-3 md:grid-cols-3">
        {insights.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/insights/${a.slug}`}
              className="card group block h-full p-4 hover:border-gold-400 transition-colors"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                {a.category}
              </span>
              <span className="mt-1 block font-semibold text-navy-800 group-hover:text-gold-600 transition-colors leading-snug">
                {a.title}
              </span>
              <span className="mt-2 block text-sm text-gray-600 line-clamp-3">
                {a.excerpt}
              </span>
              <span className="mt-3 block text-xs text-gray-500">
                {a.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/insights"
        className="mt-5 inline-flex items-center text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors"
      >
        Browse all insights &rarr;
      </Link>
    </aside>
  );
}
