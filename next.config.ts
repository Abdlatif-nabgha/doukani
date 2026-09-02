import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for GitHub Pages since it doesn't support Next.js image optimization servers
  },
  // Project Pages URL: https://abdlatif-nabgha.github.io/doukani/
  basePath: process.env.NODE_ENV === "production" ? "/doukani" : "",
};

export default nextConfig;
