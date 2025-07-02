const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  staticPageGenerationTimeout: 180,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true
  }
};

module.exports = withMDX(nextConfig); 