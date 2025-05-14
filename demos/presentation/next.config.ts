import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: process.env.NODE_ENV === 'production' ? '/demo/presentation' : '',
  assetPrefix: '/demo/presentation'
};

export default nextConfig;
