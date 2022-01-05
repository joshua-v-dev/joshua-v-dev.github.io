import styled from 'styled-components'

export const FooterWrapper = styled.section`
	object-fit: cover;
	padding: 2rem 4.8rem 4rem;
	margin: 1rem auto;
	box-sizing: content-box;
`

export const LinkItem = styled.a`
	font-size: 1.8rem;
	line-height: 3rem;
	color: blue;
	margin-bottom: 1.6rem;
	transition: 0.3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: red;
		left: 0.6rem;
	}
`

export const SocialIconsContainer = styled.div`
	object-fit: cover;
	display: flex;
	justify-content: space-between;
`

export const CompanyContainer = styled.div`
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	margin-right: auto;
`
//////////////////////////////////////////////////////////////////////////////////////////////////
export const Slogan = styled.p`
	color: red;
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
`

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: grid;
	grid-template-columns: repeat(3, minmax(8.5rem, 22rem));
	gap: 4rem;
	padding: 4rem 0 2.8rem;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	object-fit: cover;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 2.4rem;
	text-transform: uppercase;
	color: green;
	margin-bottom: 1.6rem;
`
