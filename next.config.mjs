/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
