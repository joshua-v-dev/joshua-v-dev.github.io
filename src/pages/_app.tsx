import PageWithLayoutType from '../layout/PageWithLayout'
import React, { PropsWithChildren } from 'react'

type AppLayoutProps = {
	Component: PageWithLayoutType
	pageProps: PropsWithChildren<{}> //  <-- this is the important part , not sure if this is right
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
	const Layout = Component.layout || ((children) => <>{children}</>)
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
