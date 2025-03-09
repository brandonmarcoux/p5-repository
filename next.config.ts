const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: isProd ? "/p5-repository" : "", // Use basePath only in production
  assetPrefix: isProd ? "/p5-repository" : "", // Use assetPrefix only in production
  reactStrictMode: true,
};

module.exports = nextConfig;