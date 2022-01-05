import React from 'react'

import {
	BlogCard,
	CardContainer,
	CardInfo,
	ExternalLinks,
	GridContainer,
	Tag,
	TagList,
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

const Projects = () => (
	<>
		<SectionDividerContainer>
			<SectionDivider />
		</SectionDividerContainer>
		<SectionTitle>Projects</SectionTitle>
		<Section id='projects'>
			<CardContainer>
				<GridContainer>
					{projects.map((p, i) => {
						return (
							<BlogCard key={i}>
								<Img src={p.image} />
								<>
									<SectionTitle title='true'>{p.title}</SectionTitle>
								</>
								<CardInfo className='card-info'>{p.description}</CardInfo>

								<SectionTitle>Stack</SectionTitle>

								<TagList>
									{p.tags.map((t, i) => {
										return <Tag key={i}>{t}</Tag>
									})}
								</TagList>

								<UtilityList>
									<ExternalLinks href={p.visit}>Code</ExternalLinks>
									<ExternalLinks href={p.source}>Source</ExternalLinks>
								</UtilityList>
							</BlogCard>
						)
					})}
				</GridContainer>
			</CardContainer>
		</Section>
	</>
)

export default Projects
