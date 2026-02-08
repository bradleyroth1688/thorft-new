#!/usr/bin/env python3
"""
Generate blog articles from podcast transcripts + RSS metadata.
Outputs data/blog-posts.json for the Next.js site.
"""

import json
import re
import os
import html
from datetime import datetime

TRANSCRIPTS_DIR = '/Users/bradleyroth/clawd/thorfunds-new/content/podcasts/transcripts'
SITE_EPISODES = '/Users/bradleyroth/clawd/thorft-new/data/episodes.json'
RSS_EPISODES = '/tmp/rss_episodes.json'
OUTPUT = '/Users/bradleyroth/clawd/thorft-new/data/blog-posts.json'

BANNED_TICKERS_PROSE = ['SPY', 'DIA', 'QQQ']
BANNED_REFS = ['TSI', 'Ehlers']


def clean_html(text):
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = html.unescape(text)
    return text.strip()


def compliance_check(text):
    # tactical -> adaptive
    text = re.sub(r'\btactical\b', 'adaptive', text, flags=re.IGNORECASE)
    text = re.sub(r'\bTactical\b', 'Adaptive', text)
    # crushed in drawdowns
    text = re.sub(r'crushed in drawdowns', 'experienced significant drawdowns', text, flags=re.IGNORECASE)
    # banned refs
    for ref in BANNED_REFS:
        text = re.sub(r'\b' + re.escape(ref) + r'\b', '', text, flags=re.IGNORECASE)
    # banned tickers in prose
    for ticker in BANNED_TICKERS_PROSE:
        text = re.sub(r'\$' + ticker + r'\b', 'the broad market index', text)
        # Only replace standalone ticker, not inside words
        text = re.sub(r'(?<![A-Z])' + ticker + r'(?![A-Z])\s+(?:ETF|index|fund)', 'the broad market index', text, flags=re.IGNORECASE)
    return text


def extract_substantive_paragraphs(transcript, guest_name, existing_desc_words, target_words=600):
    """Extract substantive paragraphs from transcript, avoiding fluff."""
    if not transcript:
        return []
    
    # Split into sentences
    sentences = re.split(r'(?<=[.!?])\s+', transcript)
    
    # Skip patterns (intro, outro, ads, filler)
    skip_patterns = [
        r'welcome to behind the ticker',
        r'brought to you by',
        r'check out.*\.com',
        r'without further ado',
        r'thanks for.*joining',
        r'thanks for.*having',
        r'thanks for.*listening',
        r'please.*subscribe',
        r'leave.*review',
        r'see you next',
        r'that\'s all for',
        r'ux wealth',
        r'uxwp\.com',
    ]
    
    # Build paragraph groups from consecutive substantive sentences
    paragraphs = []
    current_para = []
    word_count = 0
    
    for sent in sentences:
        sent = sent.strip()
        if not sent or len(sent) < 20:
            if current_para and len(' '.join(current_para).split()) > 30:
                paragraphs.append(' '.join(current_para))
            current_para = []
            continue
        
        # Skip fluff
        skip = False
        for pattern in skip_patterns:
            if re.search(pattern, sent, re.IGNORECASE):
                skip = True
                break
        if skip:
            if current_para and len(' '.join(current_para).split()) > 30:
                paragraphs.append(' '.join(current_para))
            current_para = []
            continue
        
        # Skip very short filler sentences
        if len(sent.split()) < 5:
            continue
        
        current_para.append(sent)
        
        # Break paragraphs at reasonable length
        if len(' '.join(current_para).split()) > 80:
            paragraphs.append(' '.join(current_para))
            current_para = []
    
    if current_para and len(' '.join(current_para).split()) > 30:
        paragraphs.append(' '.join(current_para))
    
    # Score paragraphs by substance
    scored = []
    for para in paragraphs:
        para_lower = para.lower()
        score = 0
        # Prefer paragraphs with substantive content
        substance_markers = [
            'strategy', 'portfolio', 'invest', 'approach', 'market',
            'risk', 'return', 'performance', 'allocation', 'fund',
            'etf', 'management', 'research', 'process', 'framework',
            'dividend', 'yield', 'equity', 'bond', 'sector',
            'growth', 'value', 'opportunity', 'challenge', 'advantage',
            'percent', '%', 'basis point', 'holdings', 'benchmark',
            'active share', 'alpha', 'beta', 'correlation', 'exposure',
        ]
        for marker in substance_markers:
            if marker in para_lower:
                score += 2
        
        # Penalize filler/conversational
        filler = ['you know', 'kind of', 'sort of', 'like i said', 'yeah',
                  'absolutely', 'exactly', 'right right', 'uh huh', 'um']
        filler_count = sum(para_lower.count(f) for f in filler)
        score -= filler_count * 3
        
        # Prefer medium-length paragraphs
        wc = len(para.split())
        if 40 < wc < 120:
            score += 5
        elif wc < 25:
            score -= 10
        
        # Penalize high overlap with description
        para_words = set(para_lower.split())
        overlap = len(para_words & existing_desc_words) / max(len(para_words), 1)
        if overlap > 0.4:
            score -= 15
        
        scored.append((para, score, wc))
    
    # Sort by score, take best paragraphs up to target word count
    scored.sort(key=lambda x: -x[1])
    
    selected = []
    total_words = 0
    for para, score, wc in scored:
        if score < 0:
            continue
        if total_words + wc > target_words:
            if total_words > target_words * 0.6:
                break
        selected.append(para)
        total_words += wc
        if total_words >= target_words:
            break
    
    return selected


def extract_quotes(transcript, max_quotes=3):
    """Extract notable quotes from transcript."""
    if not transcript:
        return []
    
    sentences = re.split(r'(?<=[.!?])\s+', transcript)
    candidates = []
    
    insight_markers = ['the key is', 'what matters', 'the important thing', 'what we found',
                      'the biggest', 'the real', "that's why", 'the challenge',
                      'the opportunity', 'fundamentally', 'the difference',
                      'what sets', 'our approach', 'the way we think', 'the beauty of',
                      'what makes this', 'the whole point', 'at the end of the day',
                      'the bottom line', 'what we believe']
    
    for sent in sentences:
        sent = sent.strip()
        if 60 < len(sent) < 300:
            if any(m in sent.lower() for m in insight_markers):
                candidates.append(sent)
    
    return candidates[:max_quotes]


def get_topics(transcript):
    """Extract topic tags."""
    if not transcript:
        return ['ETF Industry']
    
    topic_keywords = {
        'ETF Structure': ['etf structure', 'wrapper', 'tax efficient', 'creation unit'],
        'Risk Management': ['risk management', 'drawdown', 'downside protection', 'risk-adjusted'],
        'Active Management': ['active management', 'actively managed', 'stock selection', 'alpha generation'],
        'Fixed Income': ['fixed income', 'bonds', 'yield', 'credit quality', 'duration'],
        'Quantitative Investing': ['quantitative', 'systematic', 'factor', 'rules-based'],
        'Crypto & Digital Assets': ['crypto', 'bitcoin', 'blockchain', 'digital asset'],
        'Options Strategies': ['options', 'covered call', 'put writing', 'collar'],
        'International Markets': ['international', 'emerging market', 'global macro'],
        'Income Investing': ['income', 'dividend', 'distribution', 'yield'],
        'Growth Investing': ['growth', 'innovation', 'disrupt'],
        'Value Investing': ['value investing', 'undervalued', 'intrinsic value'],
        'Portfolio Construction': ['portfolio construction', 'allocation', 'diversification'],
        'Alternatives': ['alternative', 'hedge fund', 'non-traditional'],
        'Energy': ['energy', 'oil', 'natural gas', 'infrastructure'],
        'Small & Mid Cap': ['small cap', 'mid cap', 'smid'],
        'ESG & Thematic': ['esg', 'thematic', 'clean energy', 'sustainability'],
        'Market Outlook': ['macro', 'recession', 'inflation', 'monetary policy'],
    }
    
    lower = transcript.lower()
    found = []
    for topic, kws in topic_keywords.items():
        score = sum(1 for kw in kws if kw in lower)
        if score >= 2:
            found.append((topic, score))
    
    found.sort(key=lambda x: -x[1])
    return [t[0] for t in found[:5]] or ['ETF Industry']


def seo_title(guest, company, desc_text):
    ticker_match = re.search(r'\b([A-Z]{2,5})\b\s+(?:ETF|Fund)', desc_text)
    ticker = ticker_match.group(1) if ticker_match else None
    
    if ticker:
        return f"{guest} on the {ticker} ETF: Strategy, Process, and What Sets It Apart"
    elif company:
        clean_co = company.split(' - ')[0].split(' / ')[0].strip()
        return f"{guest} of {clean_co}: Inside Their Investment Approach"
    else:
        return f"{guest}: ETF Strategy and Market Insights"


def meta_description(guest, company, desc_text):
    clean = clean_html(desc_text)
    sentences = re.split(r'(?<=[.!?])\s+', clean)
    meta = ''
    for s in sentences[:3]:
        if len(meta + s) < 145:
            meta += s + ' '
        else:
            break
    if not meta:
        meta = clean[:150]
    return meta.strip()[:155]


def key_takeaways(desc_text, topics, guest, company):
    """Generate key takeaways."""
    clean = clean_html(desc_text)
    sentences = re.split(r'(?<=[.!?])\s+', clean)
    
    takeaways = []
    signals = ['offers', 'provides', 'designed', 'focuses on', 'combines',
              'aims to', 'allows', 'seeks to', 'emphasizes', 'targets',
              'delivers', 'positioned', 'differentiates', 'holds',
              'typically', 'actively managed', 'unique', 'key']
    
    for sent in sentences:
        if 30 < len(sent) < 250 and any(s in sent.lower() for s in signals):
            takeaways.append(sent.strip())
    
    # Deduplicate similar takeaways
    unique = []
    for t in takeaways:
        if not any(len(set(t.lower().split()) & set(u.lower().split())) / max(len(t.split()), 1) > 0.6 for u in unique):
            unique.append(t)
    
    # Pad if needed
    while len(unique) < 3:
        if topics:
            topic = topics[len(unique) % len(topics)]
            unique.append(f"The conversation explores important themes in {topic.lower()} relevant to today's advisor landscape.")
        else:
            unique.append(f"{guest}'s approach offers a differentiated perspective for advisors building diversified portfolios.")
            break
    
    return unique[:6]


def generate_slug(guest):
    slug = guest.lower().strip()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'\s+', '-', slug)
    return re.sub(r'-+', '-', slug).strip('-')


def build_article(guest, company, desc_html, transcript, site_ep, topics):
    """Build full article as HTML string."""
    desc_text = clean_html(desc_html)
    desc_words = set(desc_text.lower().split())
    
    # Get transcript extras
    extra_paras = extract_substantive_paragraphs(transcript, guest, desc_words, target_words=500)
    quotes = extract_quotes(transcript)
    takeaways = key_takeaways(desc_text, topics, guest, company)
    
    # Parse description into paragraphs
    desc_paras = [p.strip() for p in desc_text.split('\n') if p.strip() and len(p.strip()) > 30]
    
    # Build HTML article
    parts = []
    
    # Intro paragraph
    if desc_paras:
        parts.append(f'<p>{compliance_check(desc_paras[0])}</p>')
    else:
        intro = f"In this episode of Behind the Ticker, Brad Roth sits down with {guest}"
        if company:
            intro += f" of {company}"
        intro += " for an in-depth conversation about their investment approach."
        parts.append(f'<p>{intro}</p>')
    
    # Guest background
    if len(desc_paras) > 1:
        co_name = company.split(' - ')[0].split(' / ')[0].strip() if company else ''
        heading = f"About {guest}" + (f" and {co_name}" if co_name else "")
        parts.append(f'<h2>{heading}</h2>')
        parts.append(f'<p>{compliance_check(desc_paras[1])}</p>')
    
    # Strategy section from description
    if len(desc_paras) > 2:
        parts.append('<h2>Investment Strategy and Approach</h2>')
        for p in desc_paras[2:4]:
            parts.append(f'<p>{compliance_check(p)}</p>')
    
    # More from description
    if len(desc_paras) > 4:
        parts.append('<h2>Portfolio Construction and Implementation</h2>')
        for p in desc_paras[4:]:
            parts.append(f'<p>{compliance_check(p)}</p>')
    
    # Transcript-sourced deeper dive
    if extra_paras:
        parts.append('<h2>Deeper Dive: Insights from the Full Conversation</h2>')
        parts.append(f'<p>Beyond the headline strategy, the full conversation between Brad and {guest} covered several additional themes worth highlighting for advisors and investors.</p>')
        for i, para in enumerate(extra_paras):
            # Add a sub-heading every 2-3 paragraphs
            if i == 0 and len(extra_paras) > 2:
                parts.append('<h3>On Process and Philosophy</h3>')
            elif i == 2 and len(extra_paras) > 3:
                parts.append('<h3>Market Context and Positioning</h3>')
            parts.append(f'<p>{compliance_check(para)}</p>')
    
    # Quotes
    if quotes:
        parts.append('<h2>Notable Insights</h2>')
        for q in quotes[:2]:
            parts.append(f'<blockquote><p>"{compliance_check(q)}"</p></blockquote>')
    
    # Key Takeaways
    parts.append('<h2>Key Takeaways</h2>')
    parts.append('<ul>')
    for t in takeaways:
        parts.append(f'<li>{compliance_check(t)}</li>')
    parts.append('</ul>')
    
    # Advisor context
    parts.append('<h2>What This Means for Advisors</h2>')
    topic_text = topics[0].lower() if topics else 'portfolio construction'
    parts.append(f'<p>For financial advisors evaluating options for client portfolios, this conversation with {guest} highlights important considerations around {topic_text}. Understanding the strategy behind each fund—not just the ticker—helps advisors make more informed allocation decisions and better communicate the rationale to clients.</p>')
    
    if topics and len(topics) > 1:
        parts.append(f'<p>The themes of {topics[0].lower()} and {topics[1].lower()} discussed in this episode are particularly relevant in the current market environment, where advisors are increasingly looking for differentiated solutions that go beyond traditional benchmarks.</p>')
    
    # Listen CTA
    parts.append('<h2>Listen to the Full Episode</h2>')
    parts.append(f'<p>This article is based on an episode of <em>Behind the Ticker</em>, hosted by Brad Roth, Founder and CIO of THOR Financial Technologies. For the full conversation with {guest}, including additional nuances and details, listen on Spotify, Apple Podcasts, or watch on YouTube.</p>')
    
    return '\n'.join(parts)


def main():
    with open(SITE_EPISODES) as f:
        site_episodes = json.load(f)
    with open(RSS_EPISODES) as f:
        rss_episodes = json.load(f)
    
    rss_by_title = {ep['title'].strip().lower(): ep for ep in rss_episodes}
    
    transcripts = {}
    for fname in os.listdir(TRANSCRIPTS_DIR):
        if not fname.endswith('.json'):
            continue
        bid = fname.replace('.json', '')
        try:
            with open(os.path.join(TRANSCRIPTS_DIR, fname)) as f:
                data = json.load(f)
            transcripts[bid] = data.get('transcript', '')
        except:
            pass
    
    print(f"Transcripts: {len(transcripts)}, Site episodes: {len(site_episodes)}, RSS: {len(rss_episodes)}")
    
    blog_posts = []
    slugs_used = set()
    
    for site_ep in site_episodes:
        title_key = site_ep['title'].strip().lower()
        rss_ep = rss_by_title.get(title_key)
        if not rss_ep:
            continue
        
        bid = rss_ep['buzzsproutId']
        transcript = transcripts.get(bid, '')
        guest = site_ep['guest']
        company = site_ep.get('company', '')
        desc_text = clean_html(rss_ep['description'])
        topics = get_topics(transcript)
        
        title = seo_title(guest, company, desc_text)
        meta = meta_description(guest, company, rss_ep['description'])
        content_html = build_article(guest, company, rss_ep['description'], transcript, site_ep, topics)
        
        slug = generate_slug(guest)
        if slug in slugs_used:
            slug = slug + '-2'
        slugs_used.add(slug)
        
        # Count words in content
        content_text = re.sub(r'<[^>]+>', ' ', content_html)
        word_count = len(content_text.split())
        
        post = {
            'slug': slug,
            'title': compliance_check(title),
            'metaDescription': compliance_check(meta),
            'guest': guest,
            'company': company,
            'date': site_ep['date'],
            'podcastSlug': site_ep['slug'],
            'youtubeId': site_ep['youtubeId'],
            'duration': site_ep.get('duration', ''),
            'buzzsproutId': bid,
            'topics': topics,
            'content': content_html,
            'wordCount': word_count,
        }
        blog_posts.append(post)
    
    blog_posts.sort(key=lambda x: x['date'], reverse=True)
    
    with open(OUTPUT, 'w') as f:
        json.dump(blog_posts, f, indent=2)
    
    wcs = [p['wordCount'] for p in blog_posts]
    print(f"\nGenerated {len(blog_posts)} blog posts")
    print(f"Word counts: min={min(wcs)}, max={max(wcs)}, avg={sum(wcs)/len(wcs):.0f}")
    print(f"Under 800: {sum(1 for w in wcs if w < 800)}")
    print(f"800-1500: {sum(1 for w in wcs if 800 <= w <= 1500)}")
    print(f"Over 1500: {sum(1 for w in wcs if w > 1500)}")


if __name__ == '__main__':
    main()
