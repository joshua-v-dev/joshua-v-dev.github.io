module.exports = {
   core: {
    builder: 'webpack5',
  },
  stories: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs|mdx)'],
  addons: ['@storybook/addon-docs/register']
}

