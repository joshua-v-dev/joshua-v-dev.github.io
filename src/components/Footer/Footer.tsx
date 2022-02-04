import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import {
	CompanyContainer,
	FooterWrapper,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
