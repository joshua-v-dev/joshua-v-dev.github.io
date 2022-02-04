import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header isMain={true} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
