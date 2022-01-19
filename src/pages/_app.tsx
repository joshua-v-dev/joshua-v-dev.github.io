import PageWithLayoutType from '../layout/PageWithLayout'
import React, { PropsWithChildren } from 'react'
import GlobalStyles from '../styles/globals'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

type AppLayoutProps = {
	Component: PageWithLayoutType
	pageProps: PropsWithChildren<PageWithLayoutType> //  <-- this is the important part , not sure if this is right
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
	const Layout = Component.layout || ((children) => <>{children}</>)
	return (
		<>
			<Head>
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
			</Head>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
