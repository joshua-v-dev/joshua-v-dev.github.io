import Link from 'next/link'
import React from 'react'

import { Container, Div2, Div3, NavLink, SocialIcons, Navigation } from './HeaderStyles'

type HeaderProps = {
	isMain: boolean
}

const Header: React.FC<HeaderProps> = () => {
	return (
		<Container>
			<Navigation>
				<Div2>
					<li>
						<Link href='#projects' passHref>
							<NavLink>Projects</NavLink>
						</Link>
					</li>
					<li>
						<Link href='#tech' passHref>
							<NavLink>Technologies</NavLink>
						</Link>
					</li>
					<li>
						<Link href='#about' passHref>
							<NavLink>About</NavLink>
						</Link>
					</li>
				</Div2>
				<Div3>
					<SocialIcons href='https://github.com/joshua-v-dev'></SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/joshua-vaughn/'></SocialIcons>
				</Div3>
			</Navigation>
		</Container>
	)
}

export default Header
