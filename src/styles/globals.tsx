import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro' //{theme} //

const CustomStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
   #root{
        margin:0 auto;
    }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {

    cursor: default;
    ${tw`antialiased`}
  }
  
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`
const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
)

export default GlobalStyles
