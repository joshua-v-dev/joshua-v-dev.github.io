// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // experimental: {
  //   fontLoaders: [
  //     { loader: "@next/font/google", options: { subsets: ["latin"] } },
  //   ],
  // },
  // experimental: { appDir: true, serverComponentsExternalPackages: ["react"] },
  images: {
    domains: ["res.cloudinary.com", "localhost"],
  },
  swcMinify: true,
};
export default config;
