import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "global-services-corporation.github.io",
      },
    ],
  },
};

export default nextConfig;
