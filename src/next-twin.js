 /** @type {import('@mdx-js/loader').Options}*/
import { resolve } from 'path';
import { NextConfig } from 'next';
import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin';


export default function withTwin() {
  return nextConfig => {
     if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options)
        } else {
    return {
      ...nextConfig,
   addons: [
    {
      name: '@storybook/addon-docs/register',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
      webpackFinal: async (config) => {         
        const componentsDir = resolve(__dirname, '..', 'src', 'components')
        const pagesDir = resolve(__dirname, '..', 'src', 'pages')
        config.module = config.module || {}
        config.module.rules = config.module.rules || []

        // config.module.rules.push({
        //   // test: /\.(stories|story)\.[tj]sx?$/,
        //    loader: '@mdx-js/loader',
        //     options: {
        //     compilers: [createCompiler({})],
        //   },
        //   include: [componentsDir, pagesDir],
        //   // exclude: [/node_modules/],
        //   // enforce: 'pre',
        //   });

        config.module.rules.push({
          test: /\.(stories|story)\.mdx$/,
       
        use: [
        options.defaultLoaders.babel, 
          {    
            loader: require.resolve('babel-loader'),
             options: {
            plugins: [
                  require.resolve('@babel/plugin-transform-react-jsx'),
                  // require.resolve('@storybook/source-loader'),
                  require.resolve('babel-plugin-macros'),
                  require.resolve('@babel/plugin-syntax-jsx'),
                  [require.resolve('babel-plugin-styled-components'), { ssr: true, displayName: true }],
                  [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],],
             twin: {
                        preset: 'stitches',
                        autoCssProp: false,
                 },
        }},
      ],
    }); 
    config.module.rules.push({
          // test: /\.(stories|story)\.[tj]sx?$/,
           loader: '@mdx-js/loader@next',
            options: {
            compilers: [createCompiler({})],
          },
          include: [componentsDir, pagesDir],
          // exclude: [/node_modules/],
          // enforce: 'pre',
          });

       config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });
        return config;
    },
   }
  }
 }
}