import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '/demo/presentation',
  assetPrefix: '/demo/presentation'
};

export default nextConfig;
