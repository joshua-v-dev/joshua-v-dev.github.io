const path = require("path");
const { NextConfig } = require("next");

module.exports = function withTwin() {
  return (nextConfig) => {
    return {
      ...nextConfig,

      webpackFinal(config, options) {
        const { isServer, dev, dir } = options;
        // replace your dir
        const componentsDir = path.resolve(
          __dirname,
          "..",
          "src",
          "components"
        );
        const pagesDir = path.resolve(__dirname, "..", "src", "pages");
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];
        config.module.rules.push({
          test: (/\.(tsx|jsx)$/g, "''"),
          include: [componentsDir, pagesDir],
          use: [
            options.defaultLoaders.babel,
            {
              loader: "babel-loader",
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              options: {
                sourceMaps: dev,
                plugins: [
                  [
                    require.resolve("babel-plugin-macros"),
                    {
                      twin: {
                        preset: "stitches",
                        autoCssProp: false,
                      },
                    },
                  ],
                  require.resolve("@babel/plugin-syntax-jsx"),
                  [
                    require.resolve("babel-plugin-styled-components"),
                    { ssr: true, displayName: true },
                  ],
                  [
                    require.resolve("@babel/plugin-syntax-typescript"),
                    { isTSX: true },
                  ],
                ],
              },
            },
          ],
        });

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        } else {
          return config;
        }
      },
    };
  };
};
