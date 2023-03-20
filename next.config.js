/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/da9s8mfnz/image/upload/v1678977992/**",
      },
    ],
  },
};

module.exports = nextConfig;
