import styled from 'styled-components'

export const Boxes = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.4rem;
	margin: 2.4rem 0 4rem;
	padding: 3rem 3rem;

	@media ${(props) => props.theme.breakpoints.md} {
		gap: 1.6rem;
		margin: 2rem 0 3.2rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		max-width: 500px;
		margin: 2.4rem auto;
	}
`

export const Box = styled.div`
	background: #212d45;
	border-radius: 1.2rem;
	height: 14.4rem;
	padding: 2.4rem;
	@media ${(props) => props.theme.breakpoints.lg} {
		height: 21rem;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		height: 13.5rem;
		padding: 1.6rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 11rem;
		padding: 1.2rem;

		&:nth-child(2n) {
			grid-row: 2;
		}
	}
`
export const BoxNum = styled.h5`
	font-style: normal;
	font-weight: 600;
	font-size: 3.6rem;
	line-height: 4rem;
	letter-spacing: 0.01em;
	color: ${(props) => props.theme.colors.accent9};
	margin-bottom: 0.8rem;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 2.8rem;
		line-height: 3.2rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.4rem;
		line-height: 2.6rem;
	}
`

export const BoxText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 1.8rem;
	line-height: 2.4rem;
	letter-spacing: 0.02em;
	color: ${(props) => props.theme.colors.accent4};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.6rem;
		line-height: 2rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1rem;
		line-height: 1.4rem;
	}
`

export const Join = styled.div`
	display: flex;
	max-width: 1040px;
	justify-content: center;
	align-items: center;
	padding-bottom: 8rem;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: center;
		padding-bottom: 6.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 3.2rem;
	}
`

export const JoinText = styled.h5`
	display: flex;
	font-size: 2.4rem;
	line-height: 4rem;
	letter-spacing: 0.02em;
	color: ${(props) => props.theme.colors.accent1};

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
