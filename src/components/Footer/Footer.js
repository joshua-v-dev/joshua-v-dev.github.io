import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:865-371-6741'>865-371-6741</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
<<<<<<< HEAD
					<LinkItem href='mailto:joshua.v.dev@gmail.com'>joshua.v.dev@gmail.com</LinkItem>
=======
					<LinkItem href='mailto:contact@jsmastery.com'>joshua.v.dev@gmail.com</LinkItem>
>>>>>>> f3bf7db68ee64a75e1bbf4e396f3721862297ea5
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/joshua-v-dev'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/joshua-vaughn/'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
