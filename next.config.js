/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/app/2023/LearningOnlineSSS",
  reactStrictMode: true,
  trailingSlash: true,
  // env: {
  //   // NEXT_PUBLIC_GA_MEASUREMENT_ID:"G-2D3WW30X0M",
  //   API_BASE:
  //     "http://192.168.1.138:3000/api",
  // },
  images: {
    unoptimized: true,
  },
  domains: ["*"],
  output: "export",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/community": { page: "/community" },
      "/physical-activity/community": { page: "/physical-activity/community" },
    };
  },
};

module.exports = nextConfig;
