// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) config.resolve.fallback.fs = false;
//
//     const fileLoaderRule = config.module.rules.find(
//       (rule) => rule.test && rule.test.test(".svg")
//     );
//
//     fileLoaderRule.exclude = /\.svg$/;
//
//     config.module.rules.push({
//       test: /\.svg$/,
//       loader: require.resolve("@svgr/webpack"),
//     });
//
//     return config;
//   },
//   images: {
//     domains: ["res.cloudinary.com", "static.shuffle.dev"],
//   },
// };
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  images: {
    domains: ["res.cloudinary.com", "static.shuffle.dev"],
  },
};
