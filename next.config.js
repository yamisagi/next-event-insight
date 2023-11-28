/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',

      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
  
      },
    ],
  },
};

module.exports = nextConfig;
