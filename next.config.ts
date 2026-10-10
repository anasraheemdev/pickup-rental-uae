import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/booking",
        destination: "/request-quote",
        permanent: true,
      },
      {
        source: "/coverage",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/retainers",
        destination: "/services/commercial-transportation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
