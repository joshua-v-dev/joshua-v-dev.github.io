import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export default function Layout({ props, children }): JSX.Element {
	return (
		<Container>
			<Header />
			<Container {...children}>
				<main>{props.children}</main>
			</Container>
			<Footer />
		</Container>
	)
}
