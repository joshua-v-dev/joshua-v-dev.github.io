import React from 'react'

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles'
import {
	Section,
	SectionDivider,
	SectionDividerContainer,
	SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'
import FullBackgroundAnimation from '../FullBackgroundAnimation/FullBackgroundAnimation'
import { Overlay } from './ProjectsStyles'

const Projects = () => (
	<>
		<SectionDividerContainer>
			<SectionDivider divider />
			<SectionTitle main>Projects</SectionTitle>
		</SectionDividerContainer>

		<Section nopadding id='projects'>
			<GridContainer>
				{projects.map((p, i) => {
					return (
						<BlogCard key={i}>
							<Img src={p.image} />
							<TitleContent>
								<HeaderThree title='true'>{p.title}</HeaderThree>
								<Hr />
							</TitleContent>
							<CardInfo className='card-info'>{p.description}</CardInfo>
							<div>
								<TitleContent>
									<br />
									<br />
									Stack
								</TitleContent>
								<TagList>
									{p.tags.map((t, i) => {
										return <Tag key={i}>{t}</Tag>
									})}
								</TagList>
							</div>
							<UtilityList>
								<ExternalLinks href={p.visit}>Code</ExternalLinks>
								<ExternalLinks href={p.source}>Source</ExternalLinks>
							</UtilityList>
						</BlogCard>
					)
				})}
			</GridContainer>
			<Overlay>
				<FullBackgroundAnimation />
			</Overlay>
		</Section>
		<Overlay>
			<FullBackgroundAnimation />
		</Overlay>
	</>
)

export default Projects
