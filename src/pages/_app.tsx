
import { AppProps } from 'next/app'
import styles from '../styles/globalStyles'


function App({ Component, pageProps }: AppProps) {
	styles()
	return <Component {...pageProps} />
}

export default App
