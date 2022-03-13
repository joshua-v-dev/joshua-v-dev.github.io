module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs/register',  
    '@storybook/addon-postcss',
   {
     name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
       },
     },
  }],

}

