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
		margin-top: 40px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		background-image: none;
		padding: 0;
		margin-top: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		background-image: none;
		padding: 0;
		margin-top: 16px;
	}
`

export const MainImage = styled.img`
	width: 100%;
`

export const List = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	margin: 3rem 0;

	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 64px 0;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: 64px 0;
		gap: 24px;
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
	align-items: space-around;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		margin-left: 18px;
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
		font-size: 24px;
		line-height: 28px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0.02em;
		margin-bottom: 4px;
	}
`

export const ListParagraph = styled.p`
	font-size: 1.8rem;
	line-height: 3rem;
	color: ${(props) => props.theme.colors.accent6};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
	}
`

export const ListItem = styled.li`
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 203px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 14px;
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
		width: 40px;
		height: 40px;
		margin-bottom: 8px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 32px;
		height: 32px;
		margin-bottom: 0px;
	}
`
