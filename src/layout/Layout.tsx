import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../components/Header/HeaderStyles'

export default function Layout({ children }: { children: any }, { ...props }): JSX.Element {
	return (
		<React.StrictMode>
			<Container>
				<Header />
				<Container>
					{children}
					<main>{props.children}</main>
				</Container>
				<Footer />
			</Container>
		</React.StrictMode>
	)
}
