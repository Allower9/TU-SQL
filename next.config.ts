import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Отключает проверку ESLint при сборке
  },
  typescript: {
    ignoreBuildErrors: true, // Опционально: отключает ошибки TypeScript при сборке
  },
  output: 'standalone', 
};

export default nextConfig;
