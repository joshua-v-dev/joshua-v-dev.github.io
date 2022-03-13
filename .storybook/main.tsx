module.exports = {
  stories: [
   ['../src/**/*.stories.@(js|mdx|ts|tsx)']
 
  ],
  addons: ['@storybook/addon-links/register', '@storybook/addon-essentials/register', '@storybook/addon-postcss/register', '@storybook/addon-docs'],
}