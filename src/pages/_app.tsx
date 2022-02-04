import React from 'react'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import GlobalStyles from './styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
