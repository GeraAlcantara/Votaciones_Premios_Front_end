/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true //para que funcionen los server action
  },
/*   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: "",
        pathname: "/u/**"
      },
    ],
  }, */
}

module.exports = nextConfig
