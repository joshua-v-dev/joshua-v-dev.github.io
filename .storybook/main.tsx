module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs/register',  
    '@storybook/addon-postcss/register',
   {
     name: '@storybook/addon-postcss/register',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
       },
     },
  }],

}

