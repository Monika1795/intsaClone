/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  experimental: {
    styledComponents: true
  }
}

module.exports = withPWA(nextConfig)

