/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow file uploads up to 10MB in server actions/routes if needed
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
