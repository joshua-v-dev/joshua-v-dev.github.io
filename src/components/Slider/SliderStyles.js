import styled from 'styled-components'

export const SliderStyle = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SliderImages = styled.img`
	width: 1000px;
	height: 600px;
	border-radius: 10px;
`

export const RightArrow = styled.div`{
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export const LeftArrow = styled.div`
	position: absolute;
	top: 50%;
	left: 32px;
	font-size: 3rem;
	color: #000;
	z-index: 10;
	cursor: pointer;
	user-select: none;
`

export const Slide = styled.div`
	opacity: 0;
	transition-duration: 1s ease;
`

export const SlideActive = styled(Slide)`
	opacity: 1;
	transition-duration: 1s;
	transform: scale(1.08);
`
