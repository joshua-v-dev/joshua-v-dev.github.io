import React from 'react'
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					Joshua Vaughn&apos;s <br />
					Personal Portfolio
				</SectionTitle>
				<SectionText>
					I am a passionate <br />
					Full-Stack Web Developer & UI/UX Designer.
				</SectionText>
				<Link href={'/ProjectsPage'}>
					<a>
						<Button>Learn More</Button>
					</a>
				</Link>
			</LeftSection>
		</Section>
	</>
)

export default Hero
