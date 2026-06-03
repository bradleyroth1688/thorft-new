#!/usr/bin/env node
// One-shot enrichment of the Jon Clements / MarketDesk (FMTM) episode.
const fs = require('fs');
const path = require('path');

const EP_PATH = path.join(__dirname, '..', 'data', 'episodes.json');
const BP_PATH = path.join(__dirname, '..', 'data', 'blog-posts.json');

const PODCAST_SLUG = 'why-most-momentum-funds-are-looking-at-the-wrong-data-jon-clements-market-desk';
const YT_ID = 'NJ4Ot_ql5L8';

const keyTopics = [
  "Why a six-month momentum lookback beats the academic twelve-month standard",
  "Scoring the quality and consistency of a stock's price path instead of raw trailing return",
  "The screens behind FMTM: a liquidity filter, a quality cut to roughly 300 names, and an equal-weighted 30-to-50 stock book",
  "Whether momentum is just performance chasing, and Jon's answer to the skeptic",
  "Managing risk through holdings selection when a fund stays fully invested with no cash and no hedges"
];

const highlights = [
  "Jon on why a twelve-month lookback bakes in stale data and a six-month window reads the trend that is actually in force",
  "The roughly two percent overlap with the S&P 500 and what that means for an investor who already owns the index",
  "Why a fully invested book with no cash and no shorts can still manage a drawdown through the names it chooses to hold"
];

const summary = "Jon Clements, co-founder of MarketDesk Research, joins Brad Roth to break down FMTM, the firm's Focused U.S. Momentum ETF, and the research that says most momentum products are reading the wrong data. He explains why MarketDesk uses a six-month lookback that scores the quality and consistency of a stock's price path rather than the academic twelve-month trailing return, and how that produces an equal-weighted thirty-to-fifty stock portfolio with roughly two percent overlap with the S&P 500. The conversation also takes on the obvious skeptic's question, whether momentum is just performance chasing, and how a fully invested strategy with no cash or hedging manages risk through which names it holds.";

const content = `<p>Jon Clements covered U.S. large-cap financials in equity research at Goldman Sachs, then did time at JP Morgan and Guggenheim before he and his brother Matt started MarketDesk Research in 2020. The firm runs model portfolios and research for roughly two hundred of the largest wealth managers in the country, plus family offices in Switzerland and the Middle East. The ETF business came later, and FMTM, the Focused U.S. Momentum ETF, is the product of more than a decade of quantitative work. His argument: most momentum funds are reading the wrong data.</p>

<h2>The Data Most Momentum Funds Get Wrong</h2>
<p>The academic standard for momentum is a twelve-month lookback. Jon thinks that window is too long. A year of price history bakes in moves that already happened and may already be reversing, so the signal is partly measuring the past instead of the trend that is actually in force. MarketDesk uses a six-month lookback instead. It also does not just rank trailing return. The algorithm scores the quality and consistency of how a stock got there, so a name that climbed in a straight line ranks above one that posted the same number through two violent swings. Price tells you more than most analysts are willing to admit.</p>

<h2>How the Portfolio Gets Built</h2>
<p>The universe starts with a liquidity screen, then a quality filter narrows it to about three hundred names. From there the strategy holds thirty to fifty stocks, equal weighted, and rebalances monthly. Equal weight is a deliberate choice. It keeps a single mega-cap from quietly becoming the whole bet, which is what happens to closet indexers that charge active fees for index-hugging. The result is a portfolio with roughly two percent overlap with the S&P 500. If you already own the index, that is the number that should get your attention. You are getting something genuinely different, not a high-fee copy of what is already in the account.</p>

<h2>Isn't Momentum Just Performance Chasing?</h2>
<p>Jon takes the skeptic's question head-on. Momentum is a systematic, rules-based way of staying with trends that persist longer than people expect, rebalanced on a schedule so it sells what has rolled over and buys what is working. Performance chasing is what an investor does by hand, late, on emotion. A disciplined monthly process is the opposite of that.</p>

<h2>Where Risk Actually Gets Managed</h2>
<p>FMTM stays fully invested. No cash, no shorts, no hedging overlay. It sounds aggressive. The risk control lives in holdings selection. When the market turns, the momentum signal rotates toward names that are holding up and away from the ones breaking down, so the drawdown defense is built into what the fund owns rather than bolted on through an allocation call. Jon argues it is a cleaner design than most risk-managed equity products.</p>

<h2>Who It Is For</h2>
<p>Jon is clear that this is not a core holding for someone who wants index-like behavior. It is built for an investor who already owns broad market exposure and wants a concentrated, rules-driven sleeve that behaves the way a momentum strategy should. If that is not what you are after, Jon will say so.</p>`;

// --- episodes.json ---
let epRaw = JSON.parse(fs.readFileSync(EP_PATH, 'utf8'));
let eps = Array.isArray(epRaw) ? epRaw : epRaw.episodes;
const ep = eps.find(e => e.slug === PODCAST_SLUG);
if (!ep) throw new Error('episode entry not found: ' + PODCAST_SLUG);
ep.youtubeId = YT_ID;
ep.summary = summary;
ep.keyTopics = keyTopics;
ep.highlights = highlights;
fs.writeFileSync(EP_PATH, JSON.stringify(epRaw, null, 2) + '\n');
console.log('episodes.json updated for', ep.title);

// --- blog-posts.json ---
let bpRaw = JSON.parse(fs.readFileSync(BP_PATH, 'utf8'));
let posts = Array.isArray(bpRaw) ? bpRaw : bpRaw.posts;
const BLOG_SLUG = 'jon-clements-marketdesk';
const existing = posts.findIndex(p => p.slug === BLOG_SLUG);
const wordCount = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const post = {
  slug: BLOG_SLUG,
  title: "Why Most Momentum Funds Are Looking at the Wrong Data | Jon Clements, MarketDesk",
  date: "2026-05-31",
  metaDescription: "Jon Clements, co-founder of MarketDesk Research, breaks down FMTM, the Focused U.S. Momentum ETF: why a six-month lookback beats the academic twelve-month standard, why scoring the quality of a price path matters more than raw return, how an equal-weighted thirty-to-fifty stock book ends up with roughly two percent overlap with the S&P 500, and how a fully invested strategy manages risk through holdings selection.",
  guest: "Jon Clements",
  company: "MarketDesk Research",
  podcastSlug: PODCAST_SLUG,
  youtubeId: YT_ID,
  duration: "32 min",
  buzzsproutId: "19242650",
  topics: [
    "Momentum Investing",
    "Factor Investing",
    "Quantitative Strategy",
    "Portfolio Construction",
    "Risk Management"
  ],
  wordCount,
  needsRevision: false,
  content
};
if (existing >= 0) { posts[existing] = post; console.log('blog post replaced'); }
else { posts.unshift(post); console.log('blog post added'); }
fs.writeFileSync(BP_PATH, JSON.stringify(bpRaw, null, 2) + '\n');
console.log('blog-posts.json updated. wordCount=', wordCount);
