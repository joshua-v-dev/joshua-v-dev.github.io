import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'
import '../../themes/default'

export const Navigation = styled.nav`
	width: 100%;
	display: flex;
	margin-bottom: 2rem;
	margin-top: 1rem;
`

export const Container = styled.div`
	width: 100%;
	padding: 0;
	display: grid;
	grid-template-rows: 1fr;
	grid-column-gap: 3rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 6rem);
		grid-column-gap: 0.5rem;
	}
`
export const Div1 = styled.div`
	visibility: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		flex-direction: row;
		justify-content: center;
		font-size: 4rem;
		// grid-area: 1 / 1 / 2 / 3;
	}
`
export const Div2 = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-content: center;
	align-items: flex-end;
	margin: 1rem 0;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
`
export const Div3 = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	justify-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
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
	color: ${(props) => props.theme.colors.accent4};
	background: transparent;
	box-shadow: 0 1rem 3.5rem 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(0.02px);
	-webkit-backdrop-filter: blur(0.02px);
	border-radius: 2rem;
	border: 0.5rem solid rgba(255, 255, 255, 0.18);
	border-radius: 0.4rem;
	transition: 0.4s ease;
	&:hover {
		color: ${(props) => props.theme.colors.primary2};
		opacity: 1;
		cursor: pointer;
		underline: white;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		visibility: hidden;
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
	line-height: 3.2rem;
	color: ${(props) => props.theme.colors.accent7};
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: ${(props) => props.theme.colors.button3};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`

// Social Icons

export const SocialIcons = styled.a`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0.3rem 0.6rem;
	transition: 0.4s ease;
	color: ${(props) => props.theme.colors.fff};
	border-radius: 4rem;
	padding: 1rem;
	&:hover {
		background-color: ${(props) => props.theme.colors.background4};
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
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0.2rem 0 0 0.2rem;
		width: 1.5rem;
	}
`
