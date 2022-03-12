import { WEBPACK_VERSION } from "@storybook/manager-webpack5";
import { WebpackConfigContext } from "next/dist/server/config-shared";
import { ConfigFileDiagnosticsReporter, ParseConfigFileHost } from "typescript";
import '../stitches.config.ts'
module.exports = {
  
  managerWebpack: async (config: ConfigFileDiagnosticsReporter, options: WebpackConfigContext) => {
  
    return config;
  },
  managerBabel: async (config: ParseConfigFileHost, options: ParseConfigFileHost) => {
    // update config here
    return config;
  },
  webpackFinal: async (config: WebpackConfigContext, options: WebpackConfigContext) => {
   WEBPACK_VERSION
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