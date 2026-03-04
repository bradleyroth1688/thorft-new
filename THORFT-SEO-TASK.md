# thorft.com SEO Build Task — Opus 4.6 — PERFECTION REQUIRED

You are working on the live thorft.com website (repo: /Users/bradleyroth/clawd/thorft-new).
Brad Roth (Founder & CIO, THOR Financial Technologies) needs this PERFECT.

## REPOS:
- LIVE SITE: /Users/bradleyroth/clawd/thorft-new (deploys to thorft.com)
- YOUTUBE/TRANSCRIPT DATA: /Users/bradleyroth/clawd/thorfunds-new/podcasts/

## CURRENT STATE:
- data/episodes.json: 97 episodes, 2 missing youtubeId (bob-elliott-unlimited-funds, david-allen-octane-investments)  
- data/media-appearances.json: 13 media appearances
- scripts/sync-episodes.js: prebuild RSS sync from Buzzsprout — works but youtubeId left blank for new episodes
- thorfunds-new/podcasts/episodes.json: 120 YouTube video entries (NDJSON, one per line) with real YouTube IDs + titles + descriptions
- thorfunds-new/content/podcasts/transcripts/: 95 transcript JSON files by Buzzsprout episode ID

## TASK 1: YouTube ID Matching (CRITICAL)
1. Read /Users/bradleyroth/clawd/thorfunds-new/podcasts/episodes.json (NDJSON - one JSON per line)
2. Read /Users/bradleyroth/clawd/thorft-new/data/episodes.json (JSON array)
3. For EACH episode in episodes.json that has a missing or empty youtubeId:
   - Match by guest name similarity against YouTube video titles
   - Also match by company name, description content
   - For bob-elliott: look for "Bob Elliott" or "Unlimited" in YouTube titles
   - For david-allen: look for "David Allen" or "Octane" in YouTube titles
4. Create /Users/bradleyroth/clawd/thorft-new/data/youtube-ids-reference.json mapping YouTube IDs to guest names for future use
5. Update episodes.json with all matched IDs

## TASK 2: Sync Script Enhancement  
Update scripts/sync-episodes.js to:
1. After pulling from RSS, automatically try to match YouTube IDs from youtube-ids-reference.json by guest name
2. Log any unmatched episodes so they can be fixed manually
3. Preserve ALL existing youtubeIds already set

## TASK 3: Episode Summaries from Transcripts
1. Read transcript files from /Users/bradleyroth/clawd/thorfunds-new/content/podcasts/transcripts/
   - Each file is named by Buzzsprout episode ID (e.g., 12927779.json)
   - Match to episodes by cross-referencing the RSS audioUrl which contains the Buzzsprout episode ID
2. For each episode WITH a transcript:
   - Generate a rich 3-5 paragraph summary (300-500 words) covering: guest background, key topics, main insights, memorable quotes if any
   - Add a "keyTopics" array of 5-8 specific topics discussed
   - Add a "highlights" array of 3-5 key takeaways
3. Store in episodes.json as new fields: summary, keyTopics, highlights
4. Update the podcast episode page template to display these

## TASK 4: Video Media — Include ALL Content
1. Read data/media-appearances.json (currently 13 entries)
2. Also find any additional video appearances from:
   - The thorfunds-new data
   - Any other media reference files
3. Add ALL YouTube shorts and non-podcast videos from thorfunds-new/podcasts/episodes.json that are NOT podcast episodes (duration < 300 seconds = shorts)
4. Create a dedicated "Video" section or enhance the media page with all content
5. Make sure every video has proper schema markup (VideoObject)

## TASK 5: Site Error Audit
1. Run: cd /Users/bradleyroth/clawd/thorft-new && npm run build 2>&1
2. Fix ALL TypeScript errors, missing imports, broken references
3. Fix any 404s from pages that exist in the codebase but don't render
4. Verify sitemap.xml is correct and includes all pages

## TASK 6: Schema Markup Enhancement
1. Every podcast episode page needs PodcastEpisode schema with: guest name, company, topic, duration, youtubeId embed, audioUrl, transcript excerpt
2. Press/media page needs NewsArticle + VideoObject schema for each appearance
3. Book page needs Book schema
4. Homepage needs enhanced Organization schema
5. Brad Roth page already has Person schema — verify it's correct

## TASK 7: SEO Content Enhancement
1. Each podcast episode page should have:
   - H1: Guest Name + Company (keyword-rich)
   - Subtitle with episode topic
   - Rich description (from summary)
   - Key topics as visible tags/pills
   - YouTube embed (when youtubeId present)
   - Audio player (when audioUrl present)
   - Full/partial transcript section
2. Press page: each appearance should link out AND have a pull quote displayed
3. Make sure ALL pages have unique meta descriptions

## COMPLIANCE RULES (NEVER VIOLATE):
- NO fund performance data, NAV, AUM, expense ratios on thorft.com
- NO tickers in prose (THLV, THIR, SPY, etc.) — use full names
- Funds page can mention funds + redirect to thorfunds.com — that's it
- NO "tactical" — use "adaptive" or "systematic"
- NO "downside protection" — use "downside mitigation"

## COMPLETION:
1. Run npm run build — must complete with ZERO errors
2. Run npm run lint — fix all warnings
3. Commit all changes: git add -A && git commit -m "SEO: Complete podcast, video, transcript, schema overhaul"
4. Push: git push origin main
5. When done, run: openclaw system event --text "Done: thorft.com SEO overhaul complete — podcast IDs matched, transcripts added, schema enhanced, zero build errors" --mode now

PERFECTION IS THE STANDARD. If something doesn't work, fix it before moving on.
