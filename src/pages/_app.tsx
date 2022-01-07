// import 'react-devtools'

import Head from 'next/head'
import 'twin.macro'
import React from 'react'

function MyApp({ Component, pageProps }): React.ReactElement {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext: AppContext) => {
// calls page's `getInitialProps` and fills `appProps.pageProps`
// 	const appProps = await MyApp.getInitialProps(appContext)
//
// 	return (
// 		<React.StrictMode>
// 			<Component {...appProps} />
// 		</React.StrictMode>
// 	)
// }

export default MyApp
