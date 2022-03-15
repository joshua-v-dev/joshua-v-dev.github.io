/**
 * @type {import('next').NextConfig}
 **/

const withMDX = require('@next/mdx')
  const withTwin = require('./next-twin.js')


  module.exports =  withTwin({
    experimental: {
       future: { webpack5: true }
    },
      // Enables the styled-components SWC transform
    compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
    },
    
    withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
}) 
)
