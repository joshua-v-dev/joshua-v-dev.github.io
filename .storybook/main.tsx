module.exports = {
  // .storybook/main.js
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

   core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)', "../src/components/*.@(js|md)"],
  addons: ['@storybook/addon-docs/register', '@storybook/builder-webpack5', '@storybook/manager-webpack5' ],
   features: {
    storyStoreV7: true,
  },
}

// .storybook/main.ts

// Imports the Storybook's configuration API
// import type { StorybookConfig } from '@storybook/core-common';
// 
// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   staticDirs: ['../public'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/preset-create-react-app',
//     '@storybook/addon-interactions',
//   ],
//   typescript: {
//     check: false,
//     checkOptions: {},
//     reactDocgen: 'react-docgen-typescript',
//     reactDocgenTypescriptOptions: {
//       shouldExtractLiteralValuesFromEnum: true,
//       propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
//     },
//   },
//   framework: '@storybook/react',
//   core: {
//     builder: 'webpack4',
//   },
//   features: {
//     postcss: false,
//   },
//   refs: {
//     'design-system': {
//       title: 'Storybook Design System',
//       url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
//     },
//   },
// };
// module.exports = config;