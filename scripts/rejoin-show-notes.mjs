#!/usr/bin/env node
/**
 * One-off: re-link show notes (data/blog-posts.json) to current episodes
 * (data/episodes.json) after episode slug churn.
 *
 * app/podcast/[slug]/page.tsx matches show notes via
 *   p.podcastSlug === ep.slug || p.slug === ep.slug
 * so this updates each blog post's podcastSlug to the current episode slug,
 * matched by the Buzzsprout episode ID in the audio URLs
 * (fallback: normalized guest-name match).
 *
 * Run: node scripts/rejoin-show-notes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "data", "blog-posts.json");

const blogPosts = JSON.parse(fs.readFileSync(blogPath, "utf-8"));
const episodes = JSON.parse(
  fs.readFileSync(path.join(root, "data", "episodes.json"), "utf-8")
);

const bzId = (url) => url?.match(/buzzsprout\.com\/\d+\/(?:episodes\/)?(\d+)/)?.[1] ?? null;
const epByBz = new Map();
for (const ep of episodes) {
  const id = bzId(ep.audioUrl);
  if (id) epByBz.set(id, ep.slug);
}

const norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

let updated = 0;
let unchanged = 0;
let unmatched = 0;

for (const post of blogPosts) {
  let slug = epByBz.get(String(post.buzzsproutId || ""));
  if (!slug) {
    const guest = norm(post.guest);
    const hits = episodes.filter((ep) => norm(ep.guest) === guest);
    if (hits.length === 1) slug = hits[0].slug;
  }
  if (!slug) {
    unmatched++;
    console.warn(`UNMATCHED: ${post.slug} (guest: ${post.guest})`);
    continue;
  }
  if (post.podcastSlug === slug) {
    unchanged++;
  } else {
    post.podcastSlug = slug;
    updated++;
  }
}

fs.writeFileSync(blogPath, JSON.stringify(blogPosts, null, 2) + "\n");

const matched = blogPosts.filter((p) =>
  episodes.some((ep) => p.podcastSlug === ep.slug || p.slug === ep.slug)
).length;

console.log(`updated: ${updated}, already current: ${unchanged}, unmatched: ${unmatched}`);
console.log(`show notes now matching an episode: ${matched}/${blogPosts.length}`);
