/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "res.cloudinary.com",
      "localhost",
      "images.unsplash.com",
      "tailwindui.com",
    ],
  },
};
export default config;
