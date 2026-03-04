import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Newsletter {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  content?: string;
}

export async function GET() {
  const dataPath = path.join(process.cwd(), 'data', 'newsletters.json');
  const newsletters: Newsletter[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  const items = newsletters
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 30)
    .map((n) => {
      const pubDate = new Date(n.date).toUTCString();
      const description = n.subtitle || n.title;
      return `
    <item>
      <title><![CDATA[${n.title}]]></title>
      <link>https://thorft.com/blog/${n.slug}</link>
      <guid isPermaLink="true">https://thorft.com/blog/${n.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Signal by THOR Financial Technologies</title>
    <link>https://thorft.com/blog</link>
    <description>Daily market intelligence from THOR Financial Technologies. Systematic signals, ETF positioning, and what the data is actually showing.</description>
    <language>en-us</language>
    <managingEditor>broth@thoranalytics.com (Brad Roth)</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://thorft.com/api/feed" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
