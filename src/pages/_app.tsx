import Theme from '../styles/theme'
import type { AppProps /*, AppContext */ } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	)
}
