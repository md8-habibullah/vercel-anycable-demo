/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/api/anycable/:path*",
        destination: "/api/anycable",
      },
    ];
  },
};

module.exports = nextConfig;
