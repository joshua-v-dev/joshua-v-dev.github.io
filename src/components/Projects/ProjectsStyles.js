import styled from 'styled-components'

export const Overlay = styled.div`
	// display: grid;
	position: absolute;
	overflow: hidden;
	z-index: 1;
	opacity: 0.85;
`

export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 0.2rem 0.2rem;
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		border-radius: 2rem 2rem 0.2rem 0.2rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const GridContainer = styled.section`
	display: grid;
	grid-areas: 'BlogCard' 'Overlay';
	justify-items: center;
	justify-content: center;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 3rem;
	row-gap: 3rem;
	object-fit: cover;
	overflow: hidden;
	margin-top: 3rem;
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
	width: 100%;
	border-radius: 2rem;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	justify-self: center;
	justify-content: space-evenly;
	text-align: center;
	margin-bottom: 3rem;
	margin-top: 3rem;
	opacity: 1;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		height: 100%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		height: 100%;
	}
`
export const TitleContent = styled.div`
	text-align: center;
	width: 100%;
	margin-top: 1rem;
`

export const HeaderThree = styled.h3`
	font-weight: 500;
	margin-top: 1rem;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 2rem auto;
	border: 0;
	background: #d0bb57;
`

export const Intro = styled.div`
	width: 100%;
	margin: 0 auto;
	color: #dce3e7;
	margin-top: 1rem;
	font-family: 'Droid Serif', serif;
	font-size: 1.5rem;
	font-style: italic;
	line-height: 2rem;
`

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 2rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	margin-top: 1rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
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
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	border-radius: 15px;
	transition: 0.5s;

	&:hover {
		background: #801414;
	}
`

export const TagList = styled.ul`
	display: flex;
	flex: 1;
	align-items: space-evenly;
	justify-content: space-around;
	padding: 2rem;
	margin-top: 1rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
		display: flex;
		align-items: space-evenly;
		justify-content: space-evenly;
	}
`
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`
