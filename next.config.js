/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/services/background-image",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}?client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/services/**",
      },
    ],
  },
};

module.exports = nextConfig;
