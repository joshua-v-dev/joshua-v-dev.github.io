import { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'
import "tailwindcss/tailwind.css"

function App({ Component, pageProps }: AppProps) {
	globalStyles()
	return <Component {...pageProps} />
}

export default App
