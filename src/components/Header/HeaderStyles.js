import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'
import '../../themes/default'

export const Container = styled.div`
	display: grid;

	grid-column-gap: 5rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
`
export const Div1 = styled.div`
	display: grid;
	grid-area: 1 / 1 / 2 / 2;
	align-items: center;
	justify-content: center;
	line-height: 5rem;
	padding: 2rem 4rem;
	font-size: 2.5rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 2;
	}
`
export const Div2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 2rem 4rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-area: 2 / 2 / 3 / 5;
	}
`
export const Div3 = styled.div`
	display: flex;
	padding: 2rem 4rem;
	justify-content: center;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`

// Navigation Links
export const NavLink = styled.a`
	display: grid;
	grid-area: 2 / 3 / 2 / 3;
	align-items: center;
	justify-content: center;
	margin: auto;
	font-size: 2rem;
	line-height: 4rem;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
		underline: primary1;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
		padding: 0.5rem;
	}
`

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: grid;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`
