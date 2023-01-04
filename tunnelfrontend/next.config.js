/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['lastfm.freetls.fastly.net','lh3.googleusercontent.com','c4.wallpaperflare.com'],
  }
}

module.exports = nextConfig
