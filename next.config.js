
const withTwin = require('next-twin');
  withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  })

  // ATTENTION: because of https://github.com/vercel/next.js/issues/21679#issuecomment-771941447
  

module.exports = async ( withTwin, ({  NextConfig }) => {
 /**
 * @type {import('next').NextConfig}
 */
  const nextConfig = {
    /* config options here */
    future: { webpack5: true },
  }
  return nextConfig
})(withTwin);

