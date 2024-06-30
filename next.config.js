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
    remotePatterns: [
      {
        hostname: "**images.unsplash.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
