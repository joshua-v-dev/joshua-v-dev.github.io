import React from 'react'
import TailNav from '../TailNav/TailNav'

type HeaderProps = {
	isMain: boolean
}

const Header: React.FC<HeaderProps> = () => {
	return <TailNav />
}

export default Header
