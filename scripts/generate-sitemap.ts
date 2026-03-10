#!/usr/bin/env npx tsx
/**
 * Generates sitemap.xml from static pages + dynamic data (episodes, newsletters).
 * Run: npx tsx scripts/generate-sitemap.ts
 */

import fs from "fs";
import path from "path";

const episodes = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/episodes.json"), "utf-8")
);
const newsletters = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/newsletters.json"), "utf-8")
);

const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const staticPages: SitemapEntry[] = [
  { loc: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { loc: "/about/", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { loc: "/team/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/brad-roth/", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { loc: "/models/", lastmod: today, changefreq: "weekly", priority: "0.8" },
  { loc: "/podcast/", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { loc: "/blog/", lastmod: today, changefreq: "daily", priority: "0.9" },
  { loc: "/press/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/resources/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/funds/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/contact/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/book/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/disclosures/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { loc: "/analyze/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  // Model pages
  { loc: "/models/sector-100/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/sector-100/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/models/low-volatility-sdq/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/low-volatility-sdq/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/models/international/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/international/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/models/nextgen-stock/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/nextgen-stock/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/models/levered-index/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/levered-index/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { loc: "/models/dollar-alt/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/models/dollar-alt/factsheet/", lastmod: today, changefreq: "monthly", priority: "0.6" },
];

// Dynamic pages from data
const episodePages: SitemapEntry[] = episodes.map((ep: { slug: string; date: string }) => ({
  loc: `/podcast/${ep.slug}/`,
  lastmod: ep.date,
  changefreq: "never",
  priority: "0.6",
}));

const newsletterPages: SitemapEntry[] = newsletters.map((nl: { slug: string; date: string }) => ({
  loc: `/blog/${nl.slug}/`,
  lastmod: nl.date,
  changefreq: "never",
  priority: "0.6",
}));

const allPages = [...staticPages, ...episodePages, ...newsletterPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) =>
      `  <url><loc>https://thorft.com${p.loc}</loc><lastmod>${p.lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;

const outPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`✅ Sitemap generated: ${allPages.length} URLs → ${outPath}`);
