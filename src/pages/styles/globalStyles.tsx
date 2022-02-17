// styles/globalStyles.tsx
import tw, { theme, globalStyles } from "twin.macro";
import { globalCss } from "../../../stitches.config";

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<never, never>)();
};

export default styles;
