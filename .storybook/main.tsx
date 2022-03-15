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
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs/register', '@storybook/builder-webpack5', '@storybook/manager-webpack5' ]
}

