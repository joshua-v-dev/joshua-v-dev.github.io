// styles/globalStyles.tsx
import tw, { theme, globalStyles as GlobalStyles } from "twin.macro";
import { globalCss } from "../../../stitches.config";

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
};

const globalStyles = () => {
  globalCss(customStyles)();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  globalCss(GlobalStyles as Record<any, any>)();
};

export default globalStyles;
