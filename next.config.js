/**
 * @type {import('next').NextConfig}
 **/
// import { NextConfig } from 'next';
const withTwin = require('./next-twin')

  withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  })
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


  withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
 
})