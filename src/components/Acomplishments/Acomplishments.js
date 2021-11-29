import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
	{ number: 2, text: 'Shopify Apps' },
	{ number: 1, text: 'Shopify Store' },
	{ number: 5, text: 'Progressive Web Apps' },
	{ number: 1, text: 'UI/UX Prototype' },
]

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider divider />
	</Section>
)

export default Acomplishments
