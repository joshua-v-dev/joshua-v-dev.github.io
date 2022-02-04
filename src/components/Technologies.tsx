import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'

const Technologies = () => (
	// <Section id='tech'>
	// 	<SectionDivider />
	// 	<SectionTitle>Technologies</SectionTitle>
	// 	<SectionText>
	// 		I have worked with a range a technologies in the web development space. From Back-end To
	// 		Design
	// 	</SectionText>
	<>
		<List>
			<ListItem>
				<picture>
					<DiReact color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>Experiece with React.js</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>Experience with Node and Databases</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with tools for the Think, Design, and Build process
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</>
	// </Section>
)

export default Technologies

import styled from 'styled-components'

export const ImageContainer = styled.div`
	text-align: center;
	background-image: radial-gradient(
		50% 50% at 50% 50%,
		rgba(79, 108, 176, 0.25) 53.8%,
		rgba(79, 108, 176, 0) 100%
	);
	object-fit: cover;
	padding: 5rem;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const List = styled.ul`
	object-fit: cover;
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 3rem;
`

export const ListContainer = styled.div`
	object-fit: cover;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	justify-content: center;
	align-self: space-around;
`

export const ListTitle = styled.h4`
	font-weight: 700;
	font-size: 4rem;
	line-height: 3.2rem;
	letter-spacing: 0.02em;
	color: red;
	margin: 2rem 0;
`

export const ListParagraph = styled.p`
	font-size: 3rem;
	line-height: 3.5rem;
	color: green;
`

export const ListItem = styled.li`
	object-fit: cover;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	justify-content: center;
`

export const ListIcon = styled.img`
	display: block;
	width: 7rem;
	height: 7rem;
	margin: auto;
`
