import 'twin.macro'
import { css as cssImport } from '@stitches/react'
import styledImport from '@stitches/react'
// import  styledImport,  { CSSProp, css as cssImport } from 'styled-components'

// Support a css prop when used with twins styled.div({}) syntax
type CSSProp<T = AnyIfEmpty<DefaultTheme>> = string | CSSObject;

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
    tw?: string
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
    tw?: string
  }
}

// Support twins styled.div({}) syntax
type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    JSX.IntrinsicElements[Tag]
  >
}

declare module 'twin.macro' {
  // The styled and css imports
  //   const styled: typeof styledImport
  const styled: typeof StyledTags | typeof styledImport 
  const css: typeof cssImport
}

// The 'as' prop on styled components
// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element
//     }
//   }
// }