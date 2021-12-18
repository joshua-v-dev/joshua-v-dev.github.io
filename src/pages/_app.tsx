import Theme from '../styles/theme'
import type { AppProps } from 'next/app' /*, AppContext */

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	)
}
