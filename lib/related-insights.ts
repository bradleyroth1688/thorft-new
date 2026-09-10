import articles from "@/data/articles.json";

/**
 * Picks the insight articles most related to a piece of source content.
 *
 * Every newsletter and podcast page on the site used to link only to the next
 * and previous item in its own section, so the insight articles - the only
 * pages written against advisor search intent - sat behind a single link from
 * the header. This scores articles against the source text so each of those
 * ~310 pages carries three contextual links into the commercial content.
 *
 * Runs at build time. Everything here is static.
 */

export interface InsightLink {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}

const STOP = new Set(
  ("a about above after again against all am an and any are as at be because been before being below " +
    "between both but by can cannot could did do does doing down during each few for from further had has " +
    "have having he her here hers him his how i if in into is it its itself just me more most my no nor not " +
    "of off on once only or other our out over own same she should so some such than that the their them " +
    "then there these they this those through to too under until up very was we were what when where which " +
    "while who whom why will with would you your yours it's we're that's what's here's there's " +
    "one two three four five new get got make made take taken see seen look looks going go goes " +
    "week weeks day days month months year years today yesterday tomorrow morning " +
    "thor signal signals brad roth edition read reading also still much many even back last next first")
    .split(" ")
);

function tokenize(text: string): string[] {
  return (text || "")
    .toLowerCase()
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter((w) => w.length > 3 && w.length < 24 && !STOP.has(w));
}

/**
 * Inverse document frequency across the article corpus. Without it, a word
 * like "portfolio" - which appears in nearly every article - would dominate
 * the score and every page would surface the same three links.
 */
const DF = new Map<string, number>();
const ARTICLE_TOKENS = articles.map((a) => {
  const counts = new Map<string, number>();
  // Title and category carry the topic, so they are weighted above body text.
  const weighted = [
    ...tokenize(a.title),
    ...tokenize(a.title),
    ...tokenize(a.title),
    ...tokenize(a.category),
    ...tokenize(a.category),
    ...tokenize(a.excerpt),
    ...tokenize(a.metaDescription),
  ];
  for (const w of weighted) counts.set(w, (counts.get(w) || 0) + 1);
  Array.from(new Set(weighted)).forEach((w) => DF.set(w, (DF.get(w) || 0) + 1));
  return counts;
});

const N = articles.length || 1;

function idf(term: string): number {
  const df = DF.get(term) || 0;
  if (df === 0) return 0;
  return Math.log(1 + N / df);
}

export function getRelatedInsights(
  sourceText: string,
  limit = 3,
  excludeSlug?: string
): InsightLink[] {
  const terms = Array.from(new Set(tokenize(sourceText)));

  const scored = articles.map((a, i) => {
    const counts = ARTICLE_TOKENS[i];
    let score = 0;
    terms.forEach((t) => {
      const c = counts.get(t);
      if (c) score += c * idf(t);
    });
    return { a, score };
  });

  const ranked = scored
    .filter((s) => s.a.slug !== excludeSlug)
    .sort((x, y) => y.score - x.score || (x.a.date < y.a.date ? 1 : -1));

  // A page with no meaningful overlap still needs links, so fall back to the
  // newest articles rather than rendering an empty block.
  const picked = ranked.filter((s) => s.score > 0).slice(0, limit);
  if (picked.length < limit) {
    for (const s of ranked) {
      if (picked.length >= limit) break;
      if (!picked.includes(s)) picked.push(s);
    }
  }

  return picked.slice(0, limit).map(({ a }) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    excerpt: a.excerpt,
    readTime: a.readTime,
  }));
}
