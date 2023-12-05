/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/app/2023/nestle-purelife-freshtive",
  reactStrictMode: true,
  trailingSlash: true,
  // env: {
  //   // NEXT_PUBLIC_GA_MEASUREMENT_ID:"G-2D3WW30X0M",
  //   API_BASE:
  //     "https://www.gforcesolution.com/app/2023/nestle-purelife-freshtive/api",
  // },
  images: {
    unoptimized: true,
  },
  domains: ["*"],
  output: "export",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },

    };
  },
};

module.exports = nextConfig;
