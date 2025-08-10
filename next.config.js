/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC-based minification
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "evnhandyman.com" }],
        destination: "https://www.evnhandyman.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
