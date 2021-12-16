import styled from 'styled-components'

export const ImageContainer = styled.div`
	text-align: center;
	background-image: radial-gradient(
		50% 50% at 50% 50%,
		rgba(79, 108, 176, 0.25) 53.8%,
		rgba(79, 108, 176, 0) 100%
	);
	width: 100%;
	padding: 5rem;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.lg} {
		background-image: none;
		padding: 0;
		margin-top: 4rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		background-image: none;
		padding: 0;
		margin-top: 1.6rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		background-image: none;
		padding: 0;
		margin-top: 1.6rem;
	}
`

export const MainImage = styled.img`
	width: 100%;
`

export const List = styled.ul`
	width: 100%;
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 3rem;
	// margin: 3rem 0;

	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 6.4rem 0;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: 6.4rem 0;
		gap: 2.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 3.2rem 0;
	}
`

export const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	justify-content: center;
	align-self: space-around;
	// padding: 1rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		margin-left: 1.8rem;
	}
`

export const ListTitle = styled.h4`
	font-weight: 700;
	font-size: 4rem;
	line-height: 3.2rem;
	letter-spacing: 0.02em;
	color: ${(props) => props.theme.colors.accent7};
	margin: 2rem 0;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 2.4rem;
		line-height: 2.8rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2rem;
		line-height: 2.8rem;
		letter-spacing: 0.02em;
		margin-bottom: 0.4rem;
	}
`

export const ListParagraph = styled.p`
	font-size: 3rem;
	line-height: 3.5rem;
	color: ${(props) => props.theme.colors.accent2};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.6rem;
		line-height: 2.8rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.4rem;
		line-height: 2.2rem;
	}
`

export const ListItem = styled.li`
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 203px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 1.4rem;
		max-width: 320px;
		flex-direction: row;
	}
`

export const ListIcon = styled.img`
	display: block;
	width: 7rem;
	height: 7rem;
	margin: auto;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 4rem;
		height: 4rem;
		margin-bottom: 0.8rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 3.2rem;
		height: 3.2rem;
		margin-bottom: 0;
	}
`
