#!/usr/bin/env node
/**
 * One-off generator for the legacy URL redirect map (data/redirects.json).
 *
 * Maps:
 *   1. /blog/<old-show-note-slug>  -> /podcast/<current-episode-slug>
 *      (old /blog/ URLs were podcast show notes; /blog/ now serves newsletters)
 *   2. /podcast/<old-episode-slug> -> /podcast/<current-episode-slug>
 *      (episode slugs churned when episodes.json was regenerated from RSS)
 *
 * Matching is done via the Buzzsprout episode ID embedded in each file's
 * audio URL / buzzsproutId field. Unmatchable blog posts fall back to /podcast.
 *
 * Run: node scripts/generate-redirects.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf-8"));

const blogPosts = read("data/blog-posts.json");
const episodes = read("data/episodes.json");
const newsletters = read("data/newsletters.json");

// Buzzsprout ID -> current episode slug
const bzId = (url) => url?.match(/buzzsprout\.com\/\d+\/(?:episodes\/)?(\d+)/)?.[1] ?? null;
const epByBz = new Map();
for (const ep of episodes) {
  const id = bzId(ep.audioUrl);
  if (id) epByBz.set(id, ep.slug);
}

const currentEpisodeSlugs = new Set(episodes.map((e) => e.slug));
const newsletterSlugs = new Set(newsletters.map((n) => n.slug));

const norm = (s) =>
  (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// Fallback: match by guest name similarity
function matchByGuest(post) {
  const guest = norm(post.guest);
  if (!guest) return null;
  const hit = episodes.filter((ep) => norm(ep.guest) === guest);
  if (hit.length === 1) return hit[0].slug;
  return null;
}

const redirects = [];
const seenSources = new Set();
let blogMatched = 0;
let blogFallback = 0;

function addRedirect(source, destination) {
  if (source === destination) return;
  if (seenSources.has(source)) return;
  seenSources.add(source);
  redirects.push({ source, destination, permanent: true });
}

// 1. /blog/<old-slug> -> /podcast/<current-slug>
for (const post of blogPosts) {
  if (newsletterSlugs.has(post.slug)) continue; // live newsletter owns this path
  let dest = epByBz.get(String(post.buzzsproutId || "")) || matchByGuest(post);
  if (dest) {
    blogMatched++;
    addRedirect(`/blog/${post.slug}`, `/podcast/${dest}`);
  } else {
    blogFallback++;
    addRedirect(`/blog/${post.slug}`, `/podcast`);
  }
}

// 2. Old podcast slugs (pre-churn podcastSlug values) -> current episode slugs
let podcastRenames = 0;
for (const post of blogPosts) {
  const oldSlug = post.podcastSlug;
  if (!oldSlug || currentEpisodeSlugs.has(oldSlug)) continue; // already current
  const dest = epByBz.get(String(post.buzzsproutId || "")) || matchByGuest(post);
  if (!dest || dest === oldSlug) continue;
  podcastRenames++;
  addRedirect(`/podcast/${oldSlug}`, `/podcast/${dest}`);
}

// 3. Legacy podcast slugs from the retired next.config.ts redirect map
//    (destinations there were the previous generation of episode slugs)
const legacyConfigPath = path.join(root, "next.config.ts");
let legacyRenames = 0;
if (fs.existsSync(legacyConfigPath)) {
  const src = fs.readFileSync(legacyConfigPath, "utf-8");
  const pairs = [...src.matchAll(/source:\s*'\/blog\/([^']+?)\/?',\s*destination:\s*'\/podcast\/([^']+?)\/?'/g)];
  const blogByOldSlug = new Map(blogPosts.map((p) => [p.slug, p]));
  for (const [, blogSlug, oldPodcastSlug] of pairs) {
    if (currentEpisodeSlugs.has(oldPodcastSlug)) continue; // still live
    const post = blogByOldSlug.get(blogSlug);
    if (!post) continue;
    const dest = epByBz.get(String(post.buzzsproutId || "")) || matchByGuest(post);
    if (!dest || dest === oldPodcastSlug) continue;
    legacyRenames++;
    addRedirect(`/podcast/${oldPodcastSlug}`, `/podcast/${dest}`);
  }
}

// Loop check: no source may equal another redirect's destination
const destSet = new Set(redirects.map((r) => r.destination));
const loops = redirects.filter((r) => destSet.has(r.source));
if (loops.length) {
  console.error("Redirect chains/loops detected:", loops);
  process.exit(1);
}

fs.writeFileSync(
  path.join(root, "data", "redirects.json"),
  JSON.stringify(redirects, null, 2) + "\n"
);

console.log(`blog redirects: ${blogMatched} matched, ${blogFallback} fallback to /podcast`);
console.log(`podcast slug renames (from blog-posts.json): ${podcastRenames}`);
console.log(`podcast slug renames (from legacy next.config.ts): ${legacyRenames}`);
console.log(`total redirects written: ${redirects.length}`);
