import React from 'react'
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, ButtonContainer } from './HeroStyles'

const Hero = () => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Joshua
					<br />
					Vaughn
				</SectionTitle>
				<SectionText>Full-Stack Web Developer</SectionText>

				<ButtonContainer>
					<Link href={'/ProjectsPage'}>
						<a>
							<Button>Learn More</Button>
						</a>
					</Link>
				</ButtonContainer>
			</LeftSection>
		</Section>
	</>
)

export default Hero
