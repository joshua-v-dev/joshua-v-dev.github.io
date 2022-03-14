module.exports = {
   core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs/register', '@storybook/builder-webpack5', '@storybook/manager-webpack5' ]
}

