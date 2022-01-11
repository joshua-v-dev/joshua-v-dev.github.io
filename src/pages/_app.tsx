import PageWithLayoutType from '../layout/PageWithLayout'
import React, { PropsWithChildren } from 'react'
import GlobalStyles from '../styles/globals'
import 'tailwindcss/tailwind.css'

type AppLayoutProps = {
	Component: PageWithLayoutType
	pageProps: PropsWithChildren<Record<string, unknown>> //  <-- this is the important part , not sure if this is right
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
	const Layout = Component.layout || ((children) => <>{children}</>)
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
