/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC-based minification
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
