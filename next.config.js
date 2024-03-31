const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
