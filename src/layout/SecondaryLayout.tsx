import React from 'react'

import Header from '../components/Header/Header'

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header isMain={false} />
			{children}
		</>
	)
}

export default Layout
