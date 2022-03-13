module.exports = {
   core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs/register']
}

