/**
 * @type {import('next').NextConfig}
 **/
  const withTwin = require('./next-twin.js')
  module.exports =  withTwin({
    images: {
    domains: ['res.cloudinary.com'],
  },
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    }
  })