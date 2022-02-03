import styled from 'styled-components'

export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 4rem 4rem;

	object-fit: cover;
	overflow: hidden;
`

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(41rem, 1fr));
	grid-gap: 2rem;
	object-fit: auto;
	justify-content: center;
	overflow: hidden;
`
export const CardContainer = styled.div`
	object-fit: cover;
	display: grid;
	grid-auto-flow: row;
`

export const BlogCard = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
	grid-template-gap: 1rem;
	padding: 1rem;
	object-fit: cover;
	text-align: center;
	position: relative;
	background: blue;
	box-shadow: 2rem 4rem 5rem 2rem rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(7px);
	border-radius: 3rem;
	border: 1rem solid rgba(255, 255, 255, 0.5);
`

export const Hr = styled.hr`
	object-fit: cover;
	margin: 2rem auto;
	border: 0;
	background: blue;
`

export const Intro = styled.div`
	object-fit: cover;
	color: red;
	font-family: 'Droid Serif', serif;
	font-size: 1rem;
	font-style: italic;
	line-height: 2rem;
`

export const CardInfo = styled.p`
	object-fit: cover;
	padding: 0 5rem;
	color: blue;
	font-style: 2rem;
	font-size: 2rem;
	line-height: 3rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
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
	color: red;
	font-size: 1.7rem;
	font-weight: 500;
	padding: 1rem 1.5rem;
	background: blue;
	border-radius: 1.5rem;
	transition: 0.5s;

	&:hover {
		background: red;
	}
`

export const TagList = styled.ul`
	display: flex;
	flex: 1;
	align-items: space-evenly;
	justify-content: space-around;
	padding: 2rem;
`

export const Tag = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: green;
	font-weight: 500;
	font-size: 2rem;
`
