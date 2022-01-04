import styled, { css } from 'styled-components'
import { ButtonNext, ButtonBack } from 'pure-react-carousel'
import { rgba } from 'polished'

export const PageContainer = styled.div`
	margin: 0 auto;
	background: transparent;
	width: 80vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0 auto;
		display: flex;
		flex: 1;
		max-width: 100vw;
		max-height: 100vh;
	}
`
export const SliderImage = styled.div`
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
	@media ${(props) => props.theme.breakpoints.sm} {
		position: relative;
		transform: translateY(-50%);
		width: 100%;
		display: flex;
		justify-content: space-between;
		// background: transparent;
	}
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

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 90vw;
		max-height: 100vh;
	}
`
export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 1rem 1rem;

	object-fit: scale-down;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		border-radius: 2rem 2rem 0.2rem 0.2rem;

		object-fit: cover;
	}
`
export const CarouselCard = styled.div`
	display: flex;
	object-fit: cover;
	flex-direction: column;
	padding: 1rem;
	justify-content: center;
	align-content: center;
	margin: 3rem auto;
	text-align: center;
	position: relative;
	overflow: hidden;
	background: ${(props) => props.theme.colors.accent4};
	box-shadow: 2rem 4rem 5rem 2rem rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(7px);
	border-radius: 3rem;
	broder-bottom: 1rem solid ${(props) => props.theme.colors.accent14};
	border: 1rem solid rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		object-fit: cover;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		object-fit: cover;
	}
`
export const CarouselTitle = styled.h2`
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	margin-top: 10rem;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 1.2rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: center;
		align-items: center;

		margin-bottom: 0.8rem;

		position: absolute;
	}
`
