/**
 * @type {import('next').NextConfig}
 **/
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

  const withTwin = require('./src/next-twin.js')
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
  }),
  withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
 
})