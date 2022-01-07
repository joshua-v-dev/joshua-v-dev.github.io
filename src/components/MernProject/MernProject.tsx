import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { SubProjectsData } from '../../constants/constants'
import Layout from '../../layout/Layout'
import dynamic from 'next/dynamic' //add
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

//add
const NativeVideo = dynamic(() => import('../NativeVideoPlayer/NativeVideoPlayer'), {
	ssr: true,
})

function MernProject() {
	return (
		<Layout>
			<Section id='SubProjects'>
				<SectionDivider />

				{SubProjectsData.map((p, i) => {
					return (
						<GridContainer key={i}>
							<SectionTitle>Projects</SectionTitle>
							<BlogCard key={i}>
								<NativeVideo />
								<Img src={`/${p.id}`} />
								{/* CHECK TO FIX THIS IMAGE RENDER */}

								<SectionTitle title='true'>{p.title}</SectionTitle>

								<CardInfo className='card-info'>{p.description}</CardInfo>
								<div>
									<SectionTitle>Stack</SectionTitle>
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
			</Section>
		</Layout>
	)
}

export default MernProject
