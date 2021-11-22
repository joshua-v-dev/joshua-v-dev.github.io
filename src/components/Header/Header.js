import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import DropdownNav from '../DropdownNav/DropdownNav'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
	<Container>
		<Div1>
			<Link href='/' passHref>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
						color: 'white',
					}}>
					<DiCssdeck className='DiCssdeck_mobile' />
					<DropdownNav />
					<span>Joshua&apos;s Stories</span>
				</a>
			</Link>
		</Div1>
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
			<SocialIcons href='https://github.com/joshua-v-dev'>
				<AiFillGithub size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://www.linkedin.com/in/joshua-vaughn/'>
				<AiFillLinkedin size='3rem' />
			</SocialIcons>
		</Div3>
	</Container>
)

export default Header
