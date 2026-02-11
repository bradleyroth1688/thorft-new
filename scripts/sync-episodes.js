#!/usr/bin/env node
/**
 * Fetches the Buzzsprout RSS feed and writes data/episodes.json
 * in the exact format the podcast pages expect.
 * 
 * Run: node scripts/sync-episodes.js
 * Or: automatically via "prebuild" npm script
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const RSS_URL = 'https://feeds.buzzsprout.com/2162961.rss';
const OUTPUT = path.join(__dirname, '..', 'data', 'episodes.json');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'THOR-Podcast-Sync/1.0' } }, (res) => {
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
  // Try CDATA first
  const cdataStart = str.indexOf(`<${tag}>`);
  if (cdataStart === -1) return null;
  const contentStart = cdataStart + tag.length + 2;
  const cdataEnd = str.indexOf(`</${tag}>`, contentStart);
  if (cdataEnd === -1) return null;
  let content = str.substring(contentStart, cdataEnd);
  // Strip CDATA wrapper if present
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

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
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
    
    // Parse "Guest - Company - Topic" format
    const parts = title.split(' - ');
    const guest = parts[0]?.trim() || title;
    const company = parts.slice(1).join(' - ').trim() || '';
    
    // Description
    const descHtml = extractCDATA(item, 'description') || 
                     extractCDATA(item, 'content:encoded') || '';
    const description = decodeEntities(descHtml);
    
    // Pub date
    const pubDate = extractBetween(item, '<pubDate>', '</pubDate>') || '';
    const date = pubDate ? new Date(pubDate).toISOString().split('T')[0] : '';
    
    // Duration
    const durationStr = extractBetween(item, '<itunes:duration>', '</itunes:duration>') || '0';
    const durationSec = parseInt(durationStr, 10) || 0;
    const duration = formatDuration(durationSec);
    
    // Audio URL
    const enclosureMatch = item.match(/enclosure[^>]+url="([^"]+)"/);
    const audioUrl = enclosureMatch ? enclosureMatch[1] : '';
    
    // Slug
    const slug = makeSlug(title);
    
    episodes.push({
      title,
      date,
      guest,
      company,
      duration,
      youtubeId: '',  // Not available from RSS — can be filled manually
      audioUrl,
      description,
      slug,
    });
  }
  
  // Load existing episodes to preserve youtubeIds
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
  
  // Merge: keep youtubeIds from existing data
  for (const ep of episodes) {
    const old = existingBySlug[ep.slug];
    if (old && old.youtubeId) {
      ep.youtubeId = old.youtubeId;
    }
  }
  
  fs.writeFileSync(OUTPUT, JSON.stringify(episodes, null, 2));
  console.log(`Wrote ${episodes.length} episodes to ${OUTPUT}`);
  
  if (episodes.length > 0) {
    console.log(`Latest: ${episodes[0].title} (${episodes[0].date})`);
  }
}

main().catch(err => {
  console.error('Error syncing episodes:', err);
  process.exit(1);
});
