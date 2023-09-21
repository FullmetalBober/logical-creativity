/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  transpilePackages: ['react-daisyui'],
};

module.exports = nextConfig;
