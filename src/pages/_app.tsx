import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
// import { GlobalStyles } from 'twin.macro'

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App
