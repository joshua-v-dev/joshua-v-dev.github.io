import React from 'react'

const data = [
	{ number: 2, text: 'Shopify Apps' },
	{ number: 1, text: 'Shopify Store' },
	{ number: 5, text: 'Progressive Web Apps' },
	{ number: 1, text: 'UI/UX Prototype' },
]

const Acomplishments = () => (
	<>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</>
)

export default Acomplishments

import styled from 'styled-components'

export const Boxes = styled.div`
	object-fit: cover;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.4rem;
	margin: 2.4rem 0 4rem;
	padding: 3rem 3rem;
`

export const Box = styled.div`
	background: #212d45;
	border-radius: 1.2rem;
	height: 14.4rem;
	padding: 2.4rem;
`
export const BoxNum = styled.h5`
	font-style: normal;
	font-weight: 600;
	font-size: 3.6rem;
	line-height: 4rem;
	letter-spacing: 0.01em;
	color: red;
	margin-bottom: 0.8rem;
`

export const BoxText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 1.8rem;
	line-height: 2.4rem;
	letter-spacing: 0.02em;
	color: red;
`

export const Join = styled.div`
	display: flex;
	object-fit: cover;
	justify-content: center;
	align-items: center;
	padding-bottom: 8rem;
`

export const JoinText = styled.h5`
	display: flex;
	font-size: 2.4rem;
	line-height: 4rem;
	letter-spacing: 0.02em;
	color: red;
`

export const IconContainer = styled.div`
	display: flex;
`
