import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 優化開發模式性能
  reactStrictMode: true,

  // 減少編譯時間
  swcMinify: true,

  // 優化圖片載入
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // 加速 Fast Refresh
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};

export default nextConfig;
