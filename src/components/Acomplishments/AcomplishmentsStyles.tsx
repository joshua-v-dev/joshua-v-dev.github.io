import styled from 'styled-components'

export const Boxes = styled.div`
	width: 100%;
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
	max-width: 1040px;
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

	@media ${(props) => props.theme.breakpoints.md} {
		line-height: 3.2rem;
		font-size: 2rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.6rem;
		line-height: 2.4rem;
		margin: 0 0 1.6rem;
	}
`

export const IconContainer = styled.div`
	display: flex;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 1.6rem;
		justify-content: space-between;
	}
`
