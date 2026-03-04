# thorft.com Site Audit Report

**Date:** 2026-03-04  
**Auditor:** Claude (subagent)  
**Scope:** Source code at `~/clawd/thorft-new` — static analysis only, no live HTTP requests

---

## Summary

| Category | Issues Found |
|---|---|
| 🔴 Critical | 2 |
| 🟡 Warning | 6 |
| 🔵 Info | 5 |

The most significant issues are: (1) the sitemap's 98 blog `/blog/[slug]/` URLs use episode slugs instead of newsletter slugs — none will resolve because the actual route is built from `newsletters.json`; and (2) the analyzer lead capture form calls a staging Vercel URL (`thorfunds-new.vercel.app`) instead of the production API.

---

## 🔴 CRITICAL Issues

### C1 — Sitemap Blog URLs Are All Wrong (98 broken URLs)

**File:** `public/sitemap.xml`  
**Root cause:** The sitemap was generated using episode slugs from `episodes.json` for `/blog/[slug]/` URLs. But `app/blog/[slug]/page.tsx` generates its static params from **`newsletters.json`** (27 entries), not from `blog-posts.json` or `episodes.json`.

**Impact:** All 98 `/blog/[slug]/` URLs in the sitemap point to routes that do not exist and will return 404. Google is indexing these. The 27 actual newsletter routes are **not in the sitemap at all**.

**Example mismatches:**
- Sitemap has: `https://thorft.com/blog/sam-klar-gmo/` → **404** (no such route)
- Actual route: `https://thorft.com/blog/largest-strikes-yet-markets-brace-as-iran-conflict-deepens/` → **200** (not in sitemap)

**Fix:** Regenerate the sitemap. The `/blog/[slug]/` entries should use newsletter slugs from `newsletters.json` (27 URLs), not episode slugs. The current sitemap has 98 ghost blog URLs.

---

### C2 — Analyzer Lead Form Calls Staging Vercel URL

**Files:**  
- `app/analyze/components/steps/LeadGateStep.tsx` (line 28)  
- `app/analyze/components/steps/CaptureStep.tsx` (line 29)

**The code:**
```js
await fetch('https://thorfunds-new.vercel.app/api/analyzer-lead', { ... })
```

**Impact:** The Portfolio Analyzer's lead capture form submits data to `thorfunds-new.vercel.app` — a staging/preview Vercel deployment URL — instead of the production site or the local `/api/analyzer-lead` route. This is almost certainly broken in production: CORS will reject it or the staging endpoint may not exist. Leads submitted through the analyzer tool are likely being dropped or erroring silently.

There is a working `/api/analyzer-lead/route.ts` in the local app already — the fetch calls should point to `/api/analyzer-lead` (relative path).

**Fix:** Replace both hardcoded URLs with `/api/analyzer-lead`.

---

## 🟡 WARNING Issues

### W1 — 3 Blog Posts Have Empty youtubeId

**File:** `data/blog-posts.json`  
**Affected slugs:**
- `bob-elliott-2`
- `david-auerbach`
- `david-allen`

The `youtubeId` field exists but is an empty string `""`. The podcast `[slug]/page.tsx` conditionally renders YouTube content with `{ep.youtubeId ? ... }`, so this is handled gracefully. However, the blog-posts.json empty IDs could cause issues if any future template renders them without null-checking.

**Note:** `david-allen` corresponds to the known David Allen (Octane) missing YouTube episode — consistent.

---

### W2 — 1 Episode Has Empty youtubeId

**File:** `data/episodes.json`  
**Affected slug:** `david-allen-octane-investments`  
**youtubeId:** `""` (empty string)

The podcast `[slug]/page.tsx` guards against this correctly (`{ep.youtubeId ? <embed> : null}`). The episode will render without a YouTube player. The Buzzsprout audio URL is present and valid.

**Status:** Handled gracefully in code. Confirmed intentional per task spec. Info only.

---

### W3 — Slug Typos in Data Files (SEO / credibility)

**File:** `data/episodes.json` (and reflected in `public/sitemap.xml`, `data/blog-posts.json`)

Two episode slugs contain spelling errors that are now baked into permanent URLs:

| Slug | Typo | Correct |
|---|---|---|
| `sam-rahman-john-mcnamara-hedgeye-asset-managment` | `managment` | `management` |
| `yang-tang-arch-indicies-vwi` | `indicies` | `indices` |

These typos propagate to: sitemap URLs, podcast route URLs, and any SEO indexing. Fixing them would require slug migration (301 redirects from old → new URLs).

---

### W4 — Hardcoded Staging Domain in Analyzer API Route

**File:** `app/api/analyzer-lead/route.ts` (line 99-100)

The email template in the analyzer lead route hardcodes `thorfunds.com` fund links:
```html
<a href="https://thorfunds.com/funds/thir">THOR SDQ Index Rotation ETF</a>
<a href="https://thorfunds.com/funds/thlv">THOR Equal Weight Low Volatility ETF</a>
```

These point to `thorfunds.com` (the THOR fund product site, separate domain). This appears intentional but should be verified — if `thorfunds.com` is being retired or redirected, these links in outbound emails would break.

---

### W5 — `thorfunds.com` Referenced in Multiple Pages

**Files:** `app/funds/page.tsx`, `app/models/[slug]/page.tsx`

Three places link out to `https://thorfunds.com` (bare domain, no path):
- `app/funds/page.tsx` lines 24, 91, 112, 144
- `app/models/[slug]/page.tsx` line 144

This is the separate THOR fund product site. If `thorfunds.com` is being sunsetted or redirected to `thorft.com`, these outbound links would send visitors to the wrong place or a dead end. Needs verification that `thorfunds.com` is live and intentional.

---

### W6 — media-appearances.json Appears Unused / Empty Array

**File:** `data/media-appearances.json`

The file has `"mediaAppearances": [...]` with 24 items, but the top-level object also has a `"videoShorts"` array. However, when the file is parsed as `data if isinstance(data, list)`, it returns an empty array (because it's an object, not an array). The press page (`app/press/page.tsx`) likely imports this differently — but the structure is an object with two keys, not a flat array.

**Check:** Verify `app/press/page.tsx` imports `media-appearances.json` correctly using named destructuring (`import { mediaAppearances } from ...`), not a default list assumption.

---

## 🔵 INFO / Low Priority

### I1 — All 98 Episode audioUrls Are Valid Buzzsprout Format

All `audioUrl` fields follow `https://www.buzzsprout.com/2162961/episodes/[id]-[slug].mp3` format. No missing or malformed URLs.

### I2 — All 98 Episode Slugs Are Unique

No duplicate slugs found in `episodes.json`.

### I3 — blog-posts.json Content Quality Is Good

- 98 entries, all with slugs, content, metaDescription, wordCount, podcastSlug
- 0 empty content fields
- 0 short content (all > 200 chars)
- Word count matches actual content within reasonable tolerance

`blog-posts.json` is used by `app/podcast/[slug]/page.tsx` (show notes lookup by `podcastSlug` or `slug` match) — not by the `/blog/` route directly.

### I4 — Sitemap Static Routes Are Complete

All 14 static app routes are present in the sitemap:
`/`, `/about/`, `/team/`, `/brad-roth/`, `/models/`, `/podcast/`, `/blog/`, `/press/`, `/resources/`, `/funds/`, `/contact/`, `/book/`, `/disclosures/`, `/analyze/`

All 6 model detail pages and 6 factsheet pages are present. All 98 podcast episode pages are present.

### I5 — External URLs Look Correct

All hardcoded external URLs found in source:

| URL | File(s) | Status |
|---|---|---|
| `https://open.spotify.com/show/1TJpgOAqctOCnjij9KTxNS` | `app/podcast/page.tsx` | Looks valid |
| `https://podcasts.apple.com/us/podcast/behind-the-ticker/id1682702118` | `app/podcast/page.tsx` | Looks valid |
| `https://youtube.com/playlist?list=PL6wvA-EH7M41bn5LPaWA9kpZgI5_Pxzyn` | `app/podcast/page.tsx` | Looks valid |
| `https://thorft.beehiiv.com` | multiple | Looks valid |
| `https://thorft.beehiiv.com/subscribe` | multiple | Looks valid |
| `https://thorfunds.com` | `app/funds/page.tsx`, `app/models/[slug]/page.tsx` | See W5 |
| `https://thorfunds.com/funds/thir` | `app/api/analyzer-lead/route.ts` | See W4 |
| `https://thorfunds.com/funds/thlv` | `app/api/analyzer-lead/route.ts` | See W4 |
| `https://adviserinfo.sec.gov/individual/summary/5686432` | `app/brad-roth/page.tsx` | Looks valid (FINRA BrokerCheck) |
| `https://app.advizorpro.com/i/kOVu3E.ap.js` | `app/layout.tsx` | 3rd-party tracking script |
| `https://challenges.cloudflare.com/turnstile/v0/api.js` | `app/contact/ContactForm.tsx` | Valid (Cloudflare Turnstile) |
| `https://www.linkedin.com/in/brad-roth-thor/` | multiple | Looks valid |
| `https://www.youtube.com/@BRoth_THOR` | multiple | Looks valid |
| `https://x.com/Bradr_thor` | multiple | Looks valid |
| `https://www.googletagmanager.com/gtag/js?id=G-MWXP9F3QTC` | `app/layout.tsx` | Valid (GA4) |
| `https://px.ads.linkedin.com/collect/...` | `app/layout.tsx` | Valid (LinkedIn Insight) |
| `https://snap.licdn.com/li.lms-analytics/insight.min.js` | `app/layout.tsx` | Valid (LinkedIn) |
| `https://thorfunds-new.vercel.app/api/analyzer-lead` | `app/analyze/components/steps/` | **BROKEN — See C2** |

---

## Recommended Fix Priority

1. **[C2] Fix analyzer lead API URL immediately** — leads are being lost in production. Two-line change: replace `'https://thorfunds-new.vercel.app/api/analyzer-lead'` with `'/api/analyzer-lead'` in both step files.

2. **[C1] Regenerate sitemap** — 98 ghost blog URLs are being indexed by Google; 27 real newsletter pages have no sitemap entry. Update the sitemap generator/script to pull newsletter slugs from `newsletters.json` for `/blog/[slug]/` entries.

3. **[W3] Consider slug typo redirects** — `managment` and `indicies` slugs are now in the index. If fixing the data, add 301 redirects from old → new URLs in `next.config.mjs`.

4. **[W5] Verify thorfunds.com is live** — If redirecting traffic away from `thorfunds.com`, update fund page links to point to `thorft.com/funds` instead.

5. **[W6] Verify press page import** — Confirm `app/press/page.tsx` correctly destructures `media-appearances.json` as an object (not treats it as a list).

---

*Report generated by static analysis. No HTTP requests were made. No files were modified.*
