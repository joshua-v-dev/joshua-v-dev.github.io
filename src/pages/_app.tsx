
import { AppProps } from 'next/app'
import Styles from '../styles/globalStyles'
import "tailwindcss/tailwind.css"

function App({ Component, pageProps }: AppProps) {
	Styles()
	return <Component {...pageProps} />
}

export default App
