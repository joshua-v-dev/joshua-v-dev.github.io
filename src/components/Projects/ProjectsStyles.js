import styled from 'styled-components'

export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 1rem 1rem;
	width: 100%;
	object-fit: cover;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		border-radius: 2rem 2rem 0.2rem 0.2rem;
		width: 100%;
		object-fit: cover;
	}
`

export const GridContainer = styled.section`
	display: grid;
	justify-content: center;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(44rem, 1fr));
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
		padding: 2rem;
	}
`
export const CardContainer = styled.div`
	width: 100%;
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
	overflow: hidden;
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
	}
`
export const TitleContent = styled.div`
	font-size: 2.5rem;
	text-align: center;
	width: 100%;
	margin-bottom: 1rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		z-index: 1000;
	}
`

export const HeaderThree = styled.h3`
	font-weight: 500;
	margin-top: 1rem;
	letter-spacing: 0.15em;
	color: ${(props) => props.theme.colors.accent6};
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		z-index: 1000;
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
