import Theme from '../styles/theme'
import type { AppProps } from 'next/app' /*, AppContext */
import '../pages/_app.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	)
}
export default App
