// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  images: {
    domains: [
      "res.cloudinary.com",
      "localhost",
      "images.unsplash.com",
      "tailwindui.com",
    ],
  },
};
export default config;
