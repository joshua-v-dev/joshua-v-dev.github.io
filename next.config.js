module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: pluginOptions.options,
//         },
//       ],
//     });
//
//     return config;
//   },
// };
