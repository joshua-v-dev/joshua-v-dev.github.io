// styles/globalStyles.tsx
import { StyledComponentProps } from '@stitches/react/types/styled-component'
import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from '../../stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as StyledComponentProps<any[]>)()
}

export default styles