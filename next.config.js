/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages deployment configuration
  output: 'export',
  basePath: '',
  
  // Optimize images with modern formats
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
  },
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Disable experimental features not compatible with static export
  experimental: {
    ppr: false,
  },
}

module.exports = nextConfig
