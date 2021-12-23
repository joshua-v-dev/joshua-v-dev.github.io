import styled from 'styled-components'

export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 4rem 4rem;
	width: 100%;
	object-fit: cover;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: flex-start;

		border-radius: 3rem 0 3rem 3rem;
		overflow: hidden;
	}
`

export const GridContainer = styled.section`
	display: grid;
	justify-content: center;
	max-width: 100%;
	max-height: 100%;
	grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
	padding: 3rem 3rem;
	place-items: center;
	column-gap: 5rem;
	row-gap: 5rem;
	object-fit: cover;
	overflow: hidden;
	position: relative;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;

		// width: 100%;
		// padding: 2rem;
	}
`
export const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-auto-flow: row;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`

export const BlogCard = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
	grid-template-gap: 1rem;
	padding: 1rem;
	width: 80%;
	height: 100%;
	text-align: center;
	position: relative;
	z-index: 100;
	background: ${(props) => props.theme.colors.accent14};
	box-shadow: 2rem 4rem 5rem 2rem rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(7px);
	border-radius: 3rem;
	border: 1rem solid rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		overflow: hidden;
	}
`

export const Hr = styled.hr`
	width: 5.5rem;
	height: 0.5rem;
	margin: 2rem auto;
	border: 0;
	background: ${(props) => props.theme.colors.background3};
`

export const Intro = styled.div`
	width: 100%;
	color: ${(props) => props.theme.colors.accent2};
	font-family: 'Droid Serif', serif;
	font-size: 1.5rem;
	font-style: italic;
	line-height: 2rem;
`

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 5rem;
	color: ${(props) => props.theme.colors.primary4};
	font-style: 2rem;
	font-size: 2rem;
	line-height: 3rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	flex: 1;
	justify-content: space-around;
	margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
	color: ${(props) => props.theme.colors.background1};
	font-size: 1.7rem;
	font-weight: 500;
	padding: 1rem 1.5rem;
	background: ${(props) => props.theme.colors.accent4};
	border-radius: 1.5rem;
	transition: 0.5s;

	&:hover {
		background: ${(props) => props.theme.colors.accent1};
	}
`

export const TagList = styled.ul`
	display: flex;
	flex: 1;
	align-items: space-evenly;
	justify-content: space-around;
	padding: 2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
		display: flex;
		align-items: space-evenly;
		justify-content: space-around;
	}
`

export const Tag = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${(props) => props.theme.colors.background3};
	font-weight: 500;
	font-size: 2rem;
`
