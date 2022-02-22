// css.ts
import { createCss } from "@stitches/css";
import { createTailwindConfig } from "@stitches/tailwind";
// Treeshake by including only specific utils
// import { text, flex } from "@stitches/tailwind/utils"
import * as utils from "@stitches/tailwind/utils";
// Treeshake by including only specific theme
// import { colors, spacing } from "@stitches/tailwind/theme"
import * as theme from "@stitches/tailwind/theme";

const config = createTailwindConfig({
  screens: {
    tablet: (cssRule: CSSRule["IMPORT_RULE"]) =>
      `@media (min-width: 768px) { ${cssRule} }`,
    laptop: (cssRule: CSSRule["IMPORT_RULE"]) =>
      `@media (min-width: 1024px) { ${cssRule} }`,
  },
  theme: {
    ...theme,
    container: {
      center: false,
    },
  },
  utils: utils,
});

export const css = createCss(config);
