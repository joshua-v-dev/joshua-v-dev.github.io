/* eslint-disable react/no-children-prop */
import React from 'react'
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, ButtonContainer } from './HeroStyles'

const Hero = () => (
	<>
		<Section>
			<LeftSection>
				<SectionTitle>
					Joshua
					<br />
					Vaughn
				</SectionTitle>
				<SectionText>Full-Stack Web Developer</SectionText>

				<ButtonContainer>
					<Link href={'/ProjectsPage'}>
						<a>
							<Button
								alt={undefined}
								form={undefined}
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
