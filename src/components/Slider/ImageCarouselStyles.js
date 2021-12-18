import styled, { css } from 'styled-components'
import { ButtonNext, ButtonBack } from 'pure-react-carousel'
import { rgba } from 'polished'

export const PageContainer = styled.div`
	margin-top: 2rem;
	background: ${(props) => props.theme.colors.accent12};
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const SliderImage = styled.div`
	background: url(${(p) => p.image});
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
`

export const Nav = styled.nav`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const sharedStyles = css`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${rgba('#1a132b', 0.5)};
	color: white;
	border: 0;
	font-size: 40px;
	outline: none;
	transition: opacity 0.35s;
	&:disabled {
		opacity: 0;
	}
`
export const NextButton = styled(ButtonNext)`
	${sharedStyles};
`
export const BackButton = styled(ButtonBack)`
	${sharedStyles};
`

export const SliderWrapper = styled.div`
	overflow: hidden;
	position: relative;
	width: 70%;
	background: white;
	background: ${(props) => props.theme.colors.background1};
`
export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 1rem 1rem;
	width: 100%;
	object-fit: scale-down;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		border-radius: 2rem 2rem 0.2rem 0.2rem;
		width: 100%;
		object-fit: cover;
	}
`
export const CarouselCard = styled.div`
	display: flex;
	width: 50rem;
	height: 65rem;
	flex-direction: column;
	padding: 1rem;
	justify-content: center;
	align-content: center;
	margin: 10rem auto;
	text-align: center;
	position: relative;
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
export const CarouselTitle = styled.h2`
	font-size: ${(props) => (props.main ? '7rem' : '4rem')};
	line-height: ${(props) => (props.main ? '8rem' : '5rem')};
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	padding: ${(props) => (props.main ? '1rem 1rem 1rem' : '0')};
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1000;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${(props) => (props.main ? '4rem' : '4.8rem')};
		line-height: ${(props) => (props.main ? '5.6rem' : '4.8rem')};
		margin-bottom: 1.2rem;
		padding: ${(props) => (props.main ? '3rem 0 1.2rem' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${(props) => (props.main ? '3rem' : '3.5rem')};
		line-height: ${(props) => (props.main ? '4rem' : '4.5rem')};
		margin-bottom: 0.8rem;
		padding: ${(props) => (props.main ? '0 0 1rem' : '0')};
	}
`
