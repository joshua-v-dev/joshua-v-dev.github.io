// styles/globalStyles.tsx
import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from './stitches.config'


type Record<K extends string, T> = {
  [P in K]: T
}
type  PropResponse = Record<string, TemplateStringsArray>
const PropResponse = {
  prop1:"string",
  prop2: "number",
  prop3: "symbol"
  
  
}

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<string, PropResponse>)()
}

export default styles