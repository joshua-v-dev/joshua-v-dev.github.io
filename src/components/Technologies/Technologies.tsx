import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'

import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

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
