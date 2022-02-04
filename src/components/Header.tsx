import React from 'react'
import TailNav from '../components/TailNav'

type HeaderProps = {
	isMain: boolean
}

const Header: React.FC<HeaderProps> = () => {
	return <TailNav />
}

export default Header
