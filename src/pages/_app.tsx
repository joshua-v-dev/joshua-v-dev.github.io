// import 'react-devtools'
import React from 'react'
import Theme from '../styles/theme'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	)
}
export default App
