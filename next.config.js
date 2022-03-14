/**
 * @type {import('next').NextConfig}
 **/

const withTwin = require('./next-twin');
  withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  })
