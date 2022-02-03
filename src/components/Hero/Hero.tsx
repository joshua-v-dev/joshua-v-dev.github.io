import React from 'react'
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, ButtonContainer } from './HeroStyles'

const Hero = () => (
	<>
		<Section>
			<LeftSection>
				<SectionTitle>Joshua Vaughn</SectionTitle>
				<SectionText>Full-Stack Web Developer</SectionText>

				<ButtonContainer>
					<Link href={'/ProjectsPage'}>
						<a>
							<Button
								alt={null}
								form={null}
								disabled={false}
								onClick={function (): void {
									throw new Error('Function not implemented.')
								}}>
								Learn More
							</Button>
						</a>
					</Link>
				</ButtonContainer>
			</LeftSection>
		</Section>
	</>
)

export default Hero
