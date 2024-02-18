/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      // github
      {
        source: "/trend-scope-github",
        destination: "https://github.com/TrendScope",
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
