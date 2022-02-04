import React from 'react'

import { SubProjectsData } from '../../constants/constants'

import {
	CardInfo,
	Img,
	GridContainer,
	BlogCard,
	UtilityList,
	ExternalLinks,
	TagList,
	Tag,
} from '../Projects/ProjectsStyles'

function MernProject() {
	return (
		<>
			{SubProjectsData.map((p, i) => {
				return (
					<GridContainer key={i}>
						{/* <SectionTitle>Projects</SectionTitle> */}
						<BlogCard key={i}>
							<Img src={`/${p.id}`} />

							{/* <SectionTitle title='true'>{p.title}</SectionTitle> */}

							<CardInfo className='card-info'>{p.description}</CardInfo>
							<div>
								{/* <SectionTitle>Stack</SectionTitle> */}
								<TagList>
									{p.tags.map((p, i) => {
										return <Tag key={i}>{p}</Tag>
									})}
								</TagList>
							</div>
							<UtilityList>
								<ExternalLinks href={p.visit}>Code</ExternalLinks>
								<ExternalLinks href={p.source}>Source</ExternalLinks>
							</UtilityList>
						</BlogCard>
					</GridContainer>
				)
			})}
		</>
	)
}

export default MernProject
