import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  reactStrictMode: false,
  devIndicators: false,
  reactProductionProfiling: false,
};

export default nextConfig;
