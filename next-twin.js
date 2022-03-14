 /** @type {import('@mdx-js/loader').Options}*/
const path = require('path')
const { NextConfig } = require('next')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
module.exports = function withTwin() {
  return nextConfig => {
     if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options)
        } else {
    return {
      ...nextConfig,
   addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
      webpackFinal: async (config) => {         
        const componentsDir = path.resolve(__dirname, '..', 'src', 'components')
        const pagesDir = path.resolve(__dirname, '..', 'src', 'pages')
        config.module = config.module || {}
        config.module.rules = config.module.rules || []

        config.module.rules.push({
            test: /\.(stories|story)\.mdx$/,
           loader: ['@mdx-js/loader'],
          include: [componentsDir, pagesDir],
          exclude: [/node_modules/],
          enforce: 'pre',
          });

        config.module.rules.push({
          test: /\.(stories|story)\.[tj]sx?$/,
       
        use: [
        options.defaultLoaders.babel, 
          {    
           loader: ['babel-loader'],
          options: {
             compilers: [createCompiler({})],
             twin: {
                        preset: 'stitches',
                        autoCssProp: false,
                 },
             plugins: [
                  require.resolve('@babel/plugin-transform-react-jsx'),
                  require.resolve('@storybook/source-loader'),
                  require.resolve('babel-plugin-macros'),
                  require.resolve('@babel/plugin-syntax-jsx'),
                  [require.resolve('babel-plugin-styled-components'), { ssr: true, displayName: true }],
                  [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],],
          }},
      ],
    }); 
        return config;
    },
   }
  }
 }
}