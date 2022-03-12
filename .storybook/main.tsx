import { WebpackConfigContext } from "next/dist/server/config-shared";
import { ConfigFileDiagnosticsReporter, ParseConfigFileHost } from "typescript";

module.exports = {
  
  managerWebpack: async (config: ConfigFileDiagnosticsReporter, options: WebpackConfigContext) => {
    // update config here
    return config;
  },
  managerBabel: async (config: ParseConfigFileHost, options: ParseConfigFileHost) => {
    // update config here
    return config;
  },
  webpackFinal: async (config: WebpackConfigContext, options: WebpackConfigContext) => {
    // change webpack config
    return config;
  },
  babel: async (config: ParseConfigFileHost, options: ParseConfigFileHost) => {
    return config;
  },
  addons: async (config: ParseConfigFileHost, options: ParseConfigFileHost) => {
    // add addons here
    "@storybook/addon-postcss";
    return config;
  }

};