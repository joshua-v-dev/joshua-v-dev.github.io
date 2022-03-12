import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const BaseStyles = () => (
  <>
    <GlobalStyles />
    <CustomStyles />
  </>
)

export default BaseStyles