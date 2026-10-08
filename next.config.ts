import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Cover art is generated as inline SVG at runtime, so no remote loaders are needed.
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
