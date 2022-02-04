import React from 'react'
import TailNav from '../components/TailNav'
import TailHero from '../components/TailHero'

type HeaderProps = {
	isMain: boolean
}

const Header: React.FC<HeaderProps> = () => {
	return (
		<>
			<TailNav />
			<TailHero />
		</>
	)
}

export default Header
