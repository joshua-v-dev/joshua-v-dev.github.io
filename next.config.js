


/**
 * @type {import('next').NextConfig}
 **/
  const withTwin = require('./next-twin.js')
  module.exports =  withTwin({
  
    experimental: {
       future: { webpack5: true },
      // Enables the styled-components SWC transform
      styledComponents: true,
    }
  }) 