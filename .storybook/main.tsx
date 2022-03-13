module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links/register', '@storybook/addon-essentials/register', '@storybook/addon-postcss/register', '@storybook/addon-docs/register'],
}