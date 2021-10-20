import React from 'react'
import Router, { useRouter } from 'next/router'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const router = useRouter()
const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					Joshua Vaughn's <br />
					Personal Portfolio
				</SectionTitle>
				<SectionText>
					I am a passionate <br />
					Full-Stack Web Developer & UI/UX Designer.
				</SectionText>

				<Button onClick={() => router.push(<ProjectsPage />)}>Learn More</Button>
			</LeftSection>
		</Section>
	</>
)

export default Hero
