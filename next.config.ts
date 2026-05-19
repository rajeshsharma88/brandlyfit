import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable MDX
  pageExtensions: ['ts', 'tsx', 'mdx'],

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Strict mode catches motion and hydration issues early
  reactStrictMode: true,

  // Allow GSAP's browser-only modules without SSR issues
  serverExternalPackages: ['gsap'],
}

export default nextConfig
