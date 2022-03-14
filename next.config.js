/**
 * @type {import('next').NextConfig}
 */
const withTwin = require('next-twin');
  withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  })
const nextConfig = {
  // ATTENTION: because of https://github.com/vercel/next.js/issues/21679#issuecomment-771941447
  future: { webpack5: true },

}

module.exports = nextConfig

