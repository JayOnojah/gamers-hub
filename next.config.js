/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '**'
      }
    ],
  },
  trailingSlash: false
}

module.exports = nextConfig
