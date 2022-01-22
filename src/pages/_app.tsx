import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import GlobalStyles from '../styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
