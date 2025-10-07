import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,

  },
  // image domains

  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
