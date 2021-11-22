import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents/index'
import { SubProjectsData } from '../constants/constants'
import { Layout } from '../layout/Layout'

const MernProject = () => (
	<Layout>
		<Section id='SubProjects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>

			{function SubProjects() {
				const [isPlaying, setIsPlaying] = useState(true)
				const handleContextMenu = useCallback((e) => {
					e.preventDefault()
				}, [])
				SubProjectsData.map((p, i) => {
					return (
						<ProjectContainer key={i}>
							<ProjectTitle>{p.title}</ProjectTitle>
							<ProjectDescription>{p.description}</ProjectDescription>
							<ProjectLink href={p.link} target='_blank' rel='noopener noreferrer'>
								<ProjectLinkText>{p.linkText}</ProjectLinkText>
							</ProjectLink>
							<ProjectVideo>
								<ReactPlayer
									url={
										'https://res.cloudinary.com/dpytkhyme/video/upload/v1634987340/e-commerce-from-scratch_mgh6ci.mp4'
									}
									onClickPreview={() => setIsPlaying(!isPlaying)}
									playing={isPlaying}
									controls={true}
									onContextMenu={handleContextMenu}
									width='100%'
									height='100%'
								/>
							</ProjectVideo>
						</ProjectContainer>
					)
				})
			}}
		</Section>
	</Layout>
)

export const ProjectVideo = styled.video`
	display: grid;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`

export const ProjectContainer = styled.section`
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
export const ProjectDescription = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 640px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`
export const ProjectTitle = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`

export const ProjectLinkText = styled.h3`
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

export const ProjectLink = styled.a`
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

export default MernProject
