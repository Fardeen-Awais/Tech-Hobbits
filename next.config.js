/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-tweet'],
    images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'pbs.twimg.com' },
          { protocol: 'https', hostname: 'abs.twimg.com' },
          { protocol: 'https', hostname:'cdn.sanity.io' },
        ],
    },
}

module.exports = nextConfig
