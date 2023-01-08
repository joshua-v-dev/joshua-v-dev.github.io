// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // experimental: { appDir: true, serverComponentsExternalPackages: ["react"] },
  images: {
    domains: ["res.cloudinary.com", "localhost"],
  },
  swcMinify: true,

};
export default config;
