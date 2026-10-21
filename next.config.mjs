import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Legacy URL map (old /blog/ show-note slugs + churned podcast slugs).
// Regenerate with: node scripts/generate-redirects.mjs
const legacyRedirects = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'redirects.json'), 'utf-8')
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        // The single booking URL for every published surface. Everything we
        // publish links here, never straight to the scheduler, so the booking
        // tool can change without reprinting a link we have already sent.
        // `?s=<surface>` rides through to the scheduler and shows up in the
        // Vercel request log, which is how we attribute a booking to a channel.
        // Canon: ~/clawd/canon/CTA_STANDARD.md
        source: '/call',
        destination: 'https://ThorsCalendar.as.me',
        permanent: false,
      },
      {
        source: '/resources/white-papers',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/white-paper',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/whitepaper',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/analyze',
        destination: '/models',
        permanent: true,
      },
      {
        // LinkedIn outreach sent /analyzer (not /analyze) to thousands of
        // leads; it 404'd. Several replied to say the link was broken.
        source: '/analyzer',
        destination: '/models',
        permanent: true,
      },
      {
        source: '/analyzer/:path*',
        destination: '/models',
        permanent: true,
      },
      {
        source: '/analyze/:path*',
        destination: '/models',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: '/blog',
        permanent: true,
      },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
