/**
 * @type {import('next').NextConfig}
 **/

  const withTwin = require('./next-twin.js')
  module.exports = 
  
  
  withTwin(
   
    {
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
      
    images: {
    domains: ["res.cloudinary.com"],
  },
  })