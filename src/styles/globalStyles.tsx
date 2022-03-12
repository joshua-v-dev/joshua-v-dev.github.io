import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles } from 'twin.macro'

 const MacroStyles = require.resolve('babel-plugin-macros')
const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const BaseStyles = () => (
  <>
  <MacroStyles />
    <GlobalStyles />
    <CustomStyles />
  </>
)

export default BaseStyles