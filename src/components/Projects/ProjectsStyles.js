import styled from 'styled-components'

export const Overlay = styled.div`
	display: grid;
	overflow: hidden;
`

export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 0.2rem 0.2rem;
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
	grid-areas: 'BlogCard' 'Overlay';
	justify-items: center;
	justify-content: center;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 3rem;
	row-gap: 3rem;
	object-fit: cover;
	overflow: hidden;
	position: relative;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem;
		padding-bottom: 0;
	}
`
export const BlogCard = styled.div`
	display: grid;
	grid-auto-flow: row dense;
	grid-auto-flow: initial;
	width: 90%;
	border-radius: 2rem;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	justify-self: center;
	justify-content: space-evenly;
	text-align: center;
	// margin-bottom: 3rem;
	// margin-top: 3rem;
	opacity: 1;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`
export const TitleContent = styled.div`
	text-align: center;
	width: 100%;
	// margin-top: 1rem;
`

export const HeaderThree = styled.h3`
	font-weight: 500;
	margin-top: 1rem;
	letter-spacing: 0.15em;
	color: ${(props) => props.theme.colors.accent3};
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`

export const Hr = styled.hr`
	width: 5.5rem;
	height: 0.5rem;
	margin: 2rem auto;
	border: 0;
	background: ${(props) => props.theme.colors.accent4};
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
	color: ${(props) => props.theme.colors.background3};
	font-style: 2rem;
	line-height: 2rem;
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
	color: ${(props) => props.theme.colors.button};
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: ${(props) => props.theme.colors.background3};
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
		justify-content: space-evenly;
	}
`

export const Tag = styled.li`
	color: ${(props) => props.theme.colors.accent5};
	font-size: 1.5rem;
`
