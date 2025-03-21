import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "global-services-corporation.github.io",
      },
      {
        hostname: "www.fpb.pt",
      },
    ],
  },
};

export default nextConfig;
