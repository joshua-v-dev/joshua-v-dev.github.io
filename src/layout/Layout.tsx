import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from '../components/Header/HeaderStyles'

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<Container>
				<Header isMain={true} />
				{children}
				<Footer />
			</Container>
		</>
	)
}

export default Layout
