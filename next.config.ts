import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Ensure no env needed
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
