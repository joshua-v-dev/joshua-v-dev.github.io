import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'

export const Navigation = styled.nav`
	display: flex;
	background-color: black;
	overflow: hidden;
	z-index: 101;

	}
`

export const Container = styled.div`
	object-fit: cover;
	padding: 0;
	display: grid;
	grid-template-rows: 1fr;
	grid-column-gap: 3rem;
`

export const Div2 = styled.div`
	display: flex;
	object-fit: cover;
	justify-content: flex-start;
	align-content: center;
	align-items: flex-end;
	margin: 1rem 0;

	}
`
export const Div3 = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	justify-content: center;

	}
`

// Navigation Links
export const NavLink = styled.a`
	display: flex;
	font-size: 2rem;
	font-weight: bold;
	margin-right: 5rem;
	padding: 0.3rem 0.6rem;
	background-flow: row-reverse;
	border: 0.5rem solid rgba(255, 255, 255, 0.75);
	color: blue;
	background: transparent;
	box-shadow: 0 1rem 3.5rem 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(0.02px);
	-webkit-backdrop-filter: blur(0.02px);
	border-radius: 2rem;
	border: 0.5rem solid rgba(255, 255, 255, 0.18);
	border-radius: 0.4rem;
	transition: 0.4s ease;
	&:hover {
		color: blue;
		opacity: 1;
		cursor: pointer;
		underline: white;
	}

	}
`

// Social Icons

export const SocialIcons = styled.a`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0.3rem 0.6rem;
	transition: 0.4s ease;
	color: red;
	border-radius: 4rem;
	padding: 1rem;
	&:hover {
		background-color: red;
		transform: scale(1.2);
		cursor: pointer;
	}
`
export const NavProductsIcon = styled(IoIosArrowDropdown)`
	size: 5rem;
	margin-left: 0.8rem;
	display: grid;
	align-self: center;
	justify-self: center;

	transition: 0.3s ease;

	&:hover {
		opacity: 1;
	}


	}
`
