import React from 'react'
import styled from 'styled-components'
// import { CloudinaryContext, Transformation, Video } from 'cloudinary-video-player'
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents'
import { SubProjectsData } from '../constants/constants'
import Layout from '../layout/Layout'
import dynamic from 'next/dynamic' //add

//add
const NativeVideo = dynamic(() => import('../components/NativeVideoPlayer/NativeVideoPlayer.js'), {
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

{
	/* url='https://res.cloudinary.com/dpytkhyme/video/upload/v1634987340/e-commerce-from-scratch_mgh6ci.mp4' */
}
// <CloudinaryContext>
// 	<Video cloudName='dpytkhyme'>
// 		<Transformation width='200' crop='scale' angle='10' />
{
	/* config=
											{{
												file: {
													attributes: {
														controlsList: 'nodownload',
														samesite: 'Lax',
														secure: 'true',
													},
												},
											}} */
}
{
	/* </Video>
									</CloudinaryContext>
								</div> */
}

// export const Reactplayer = styled.video`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	controls: true;
//
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		width: 100%;
// 		display: flex;
// 		flex-direction: column;
// 		padding: 2rem;
// 		padding-bottom: 0;
// 	}
// `

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`

export const GridContainer = styled.section`
	display: grid;
	// grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`
export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 650px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
		font: 20px;
	}
`

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #d0bb57;
`

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	border-radius: 15px;
	transition: 0.5s;
	&:hover {
		background: #801414;
	}
`

export const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`

export default MernProject
