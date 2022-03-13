/**
 * @type {import('next').NextConfig}
 **/

  const withTwin = require('./next-twin.js')
  module.exports =
  {
          images: {
    domains: ['res.cloudinary.com'],
  }}
  withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  })