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
};

module.exports = nextConfig;
