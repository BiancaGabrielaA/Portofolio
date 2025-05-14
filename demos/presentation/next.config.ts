import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous', // Useful for cross-origin asset loading (images, fonts, etc.)
  trailingSlash: true, // Ensures routes end with a slash (e.g., /about/ instead of /about)
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? '/demo/presentation' : '', // Set baseUrl for production
  },
  typescript: {
    ignoreBuildErrors: false, // Do not ignore TypeScript build errors
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization (necessary for static export like GitHub Pages)
    remotePatterns: [
      {
        protocol: 'http', // Define allowed image sources
        hostname: '*',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/demo/presentation' : '', // Set basePath for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/demo/presentation' : '', // Set assetPrefix for production
};

export default nextConfig;
