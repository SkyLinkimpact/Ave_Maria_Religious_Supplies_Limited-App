/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.BACKEND_HOST,
      },
    ],
  },
};

export default nextConfig;
