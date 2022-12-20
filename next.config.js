/**
 * @type {import('next').NextConfig}
 **/


const withTwin = require("./next-twin.js");

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

withTwin({
  experimental: {
    future: { webpack5: true },
  },
  // Enables the styled-components SWC transform
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
});


