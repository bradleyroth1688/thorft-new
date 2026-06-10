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
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
