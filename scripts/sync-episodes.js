#!/usr/bin/env node
/**
 * Fetches the Buzzsprout RSS feed and writes data/episodes.json
 * in the exact format the podcast pages expect.
 *
 * Features:
 * - Syncs new episodes from Buzzsprout RSS
 * - Preserves existing youtubeIds, summaries, keyTopics, highlights
 * - Auto-matches YouTube IDs from youtube-ids-reference.json by guest name
 * - De-duplicates slugs to prevent routing conflicts
 * - Logs unmatched episodes for manual review
 *
 * Run: node scripts/sync-episodes.js
 * Or: automatically via "prebuild" npm script
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const RSS_URL = 'https://feeds.buzzsprout.com/2162961.rss';
const OUTPUT = path.join(__dirname, '..', 'data', 'episodes.json');
const YT_REF = path.join(__dirname, '..', 'data', 'youtube-ids-reference.json');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { agent: false, headers: { 'User-Agent': 'THOR-Podcast-Sync/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function extractBetween(str, start, end) {
  const startIdx = str.indexOf(start);
  if (startIdx === -1) return null;
  const contentStart = startIdx + start.length;
  const endIdx = str.indexOf(end, contentStart);
  if (endIdx === -1) return null;
  return str.substring(contentStart, endIdx);
}

function extractCDATA(str, tag) {
  const cdataStart = str.indexOf(`<${tag}>`);
  if (cdataStart === -1) return null;
  const contentStart = cdataStart + tag.length + 2;
  const cdataEnd = str.indexOf(`</${tag}>`, contentStart);
  if (cdataEnd === -1) return null;
  let content = str.substring(contentStart, cdataEnd);
  if (content.includes('<![CDATA[')) {
    content = content.replace('<![CDATA[', '').replace(']]>', '');
  }
  return content.trim();
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'");
}

function formatDuration(seconds) {
  const mins = Math.round(seconds / 60);
  return `${mins} min`;
}

function makeSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

function normalizeForMatch(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Try to match a YouTube ID from the reference file by guest name.
 */
function matchYoutubeId(guest, company, ytReference, usedIds) {
  const guestNorm = normalizeForMatch(guest);

  for (const [ytId, ref] of Object.entries(ytReference)) {
    if (usedIds.has(ytId)) continue;
    if (typeof ref === 'string') continue; // Skip legacy "name": "id" entries
    if (ref.isShort) continue; // Skip shorts
    if (!ref.guest || !ref.title) continue; // Skip entries missing required fields

    const refGuestNorm = normalizeForMatch(ref.guest);
    const refTitleNorm = normalizeForMatch(ref.title);

    // Exact guest name match
    if (guestNorm === refGuestNorm) {
      return ytId;
    }

    // Guest name appears in YouTube title
    if (refTitleNorm.includes(guestNorm) && guestNorm.length > 5) {
      return ytId;
    }

    // YouTube reference guest name appears in episode guest/title field
    // (handles case where ep.guest is the full episode title, not just guest name)
    if (guestNorm.includes(refGuestNorm) && refGuestNorm.length > 5) {
      return ytId;
    }
  }

  return null;
}

async function main() {
  console.log('Fetching RSS feed...');
  const rss = await fetch(RSS_URL);

  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const episodes = [];
  let match;

  while ((match = itemRegex.exec(rss)) !== null) {
    const item = match[1];

    const rawTitle = extractBetween(item, '<title>', '</title>') ||
                     extractBetween(item, '<itunes:title>', '</itunes:title>') || '';
    const title = decodeEntities(rawTitle);

    // Try splitting by ' - ' first, then ' | ' for newer episode title format
    let parts = title.split(' - ');
    if (parts.length < 2) parts = title.split(' | ');
    const guest = parts.length >= 2 ? parts[parts.length - 1]?.trim() : title;
    const company = parts.length >= 2 ? parts.slice(0, -1).join(' | ').trim() : '';

    const descHtml = extractCDATA(item, 'description') ||
                     extractCDATA(item, 'content:encoded') || '';
    const description = decodeEntities(descHtml);

    const pubDate = extractBetween(item, '<pubDate>', '</pubDate>') || '';
    const date = pubDate ? new Date(pubDate).toISOString().split('T')[0] : '';

    const durationStr = extractBetween(item, '<itunes:duration>', '</itunes:duration>') || '0';
    const durationSec = parseInt(durationStr, 10) || 0;
    const duration = formatDuration(durationSec);

    const enclosureMatch = item.match(/enclosure[^>]+url="([^"]+)"/);
    const audioUrl = enclosureMatch ? enclosureMatch[1] : '';

    const slug = makeSlug(title);

    episodes.push({
      title,
      date,
      guest,
      company,
      duration,
      youtubeId: '',
      audioUrl,
      description,
      slug,
    });
  }

  // De-duplicate slugs by appending year
  const slugCount = {};
  for (const ep of episodes) {
    slugCount[ep.slug] = (slugCount[ep.slug] || 0) + 1;
  }
  for (const [slug, count] of Object.entries(slugCount)) {
    if (count > 1) {
      const dupes = episodes.filter(ep => ep.slug === slug);
      // Sort by date newest first — keep newest slug, suffix older ones
      dupes.sort((a, b) => b.date.localeCompare(a.date));
      for (let i = 1; i < dupes.length; i++) {
        const year = dupes[i].date.substring(0, 4);
        dupes[i].slug = `${slug}-${year}`;
        console.log(`  De-duped slug: ${slug} → ${dupes[i].slug} (${dupes[i].date})`);
      }
    }
  }

  // Load existing episodes to preserve enriched data
  let existing = [];
  try {
    existing = JSON.parse(fs.readFileSync(OUTPUT, 'utf8'));
  } catch (e) {
    // First run
  }

  const existingBySlug = {};
  for (const ep of existing) {
    existingBySlug[ep.slug] = ep;
  }

  // Load YouTube reference for auto-matching
  let ytReference = {};
  try {
    ytReference = JSON.parse(fs.readFileSync(YT_REF, 'utf8'));
  } catch (e) {
    console.log('  No youtube-ids-reference.json found — skipping auto-match');
  }

  // Track used YouTube IDs to avoid double-assignment
  const usedIds = new Set();
  for (const ep of existing) {
    if (ep.youtubeId) usedIds.add(ep.youtubeId);
  }

  // Merge: preserve existing enriched data
  const unmatched = [];
  for (const ep of episodes) {
    const old = existingBySlug[ep.slug];
    if (old) {
      // Preserve all existing enriched fields
      if (old.youtubeId) ep.youtubeId = old.youtubeId;
      if (old.summary) ep.summary = old.summary;
      if (old.keyTopics) ep.keyTopics = old.keyTopics;
      if (old.highlights) ep.highlights = old.highlights;
    }

    // Auto-match YouTube ID if still missing
    if (!ep.youtubeId && Object.keys(ytReference).length > 0) {
      const matched = matchYoutubeId(ep.guest, ep.company, ytReference, usedIds);
      if (matched) {
        ep.youtubeId = matched;
        usedIds.add(matched);
        console.log(`  Auto-matched YouTube: ${ep.guest} → ${matched}`);
      } else {
        unmatched.push(ep.title);
      }
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(episodes, null, 2));
  console.log(`Wrote ${episodes.length} episodes to ${OUTPUT}`);

  if (episodes.length > 0) {
    console.log(`Latest: ${episodes[0].title} (${episodes[0].date})`);
  }

  if (unmatched.length > 0) {
    console.log(`\nUnmatched episodes (need manual YouTube ID):`);
    for (const t of unmatched) {
      console.log(`  - ${t}`);
    }
  }
}

main().catch(err => {
  console.error('Error syncing episodes:', err);
  process.exit(1);
});
