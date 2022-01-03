import React from 'react'

import {
	BlogCard,
	CardContainer,
	CardInfo,
	ExternalLinks,
	GridContainer,
	Hr,
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
import { TitleContent, HeaderThree } from '../../pages/MernProject/MernProject'
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
									<TitleContent>
										<HeaderThree title='true'>{p.title}</HeaderThree>
										<Hr />
									</TitleContent>
								</>
								<CardInfo className='card-info'>{p.description}</CardInfo>

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
