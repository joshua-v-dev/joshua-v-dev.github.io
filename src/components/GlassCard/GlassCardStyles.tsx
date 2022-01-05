import styled from 'styled-components'

export const Card = styled.div`
	perspective: 150rem;
	-moz-perspective: 150rem;
	position: relative;
	height: 52rem;
`

export const cardSide = styled.div`
	height: 52rem;
	transition: all 0.8s ease;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border-radius: 3px;
	overflow: hidden;
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`

export const cardSideFront = styled.div` 
	background-color: #fff;

	&:hover {transform: rotateY(-180deg);
`

export const cardSideBack = styled.div`
	transform: rotateY(180deg);

	&:hover {
		transform: rotateY(0deg);
	}
`
export const cardSideBack1 = styled.div`
	background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
`
export const cardSideBack2 = styled.div`
	background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
`
export const cardSideBack3 = styled.div`
	background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
`

//////////////////////////////////////////////////////////////////////

export const CardPicture = styled.div`
	background-size: cover;
	height: 23rem;
	background-blend-mode: screen;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
`
export const cardPicture1 = styled.div`
	background-image: linear-gradient(to right bottom, #ffb900, #ff7730),
		url(https://res.cloudinary.com/dpytkhyme/image/upload/v1639943200/rainbow-4-pillar-wallpaper_qmxakk.png);
`
export const cardPicture2 = styled.div`
	background-image: linear-gradient(to right bottom, #7ed56f, #28b485),
		url(https://res.cloudinary.com/dpytkhyme/image/upload/v1639943200/rainbow-4-pillar-wallpaper_qmxakk.png);
`
export const cardPicture3 = styled.div`
	background-image: linear-gradient(to right bottom, #2998ff, #5643fa),
		url(https://res.cloudinary.com/dpytkhyme/image/upload/v1639943200/rainbow-4-pillar-wallpaper_qmxakk.png);
`
export const cardHeading = styled.h4`
	font-size: 2.8rem;
	font-weight: 300;
	text-transform: uppercase;
	text-align: right;
	color: #fff;
	position: absolute;
	top: 12rem;
	right: 2rem;
	object-fit: scale-down;
`
export const cardHeadingSpan = styled.span`
	padding: 1rem 1.5rem;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
`
export const cardHeadingSpan1 = styled.span`
	 {
		background-image: linear-gradient(
			to right bottom,
			rgba(255, 185, 0, 0.85),
			rgba(255, 119, 48, 0.85)
		);
	}
`
export const cardHeadingSpan2 = styled.span`
	 {
		background-image: linear-gradient(
			to right bottom,
			rgba(126, 213, 111, 0.85),
			rgba(40, 180, 133, 0.85)
		);
	}
`
export const cardHeadingSpan3 = styled.span`
	 {
		background-image: linear-gradient(
			to right bottom,
			rgba(41, 152, 255, 0.85),
			rgba(86, 67, 250, 0.85)
		);
	}
`
export const cardDetails = styled.div`
	padding: 3rem;
`
export const cardDetailsUl = styled.ul`
	 {
		list-style: none;
		object-fit: cover;
		margin: 0 auto;
	}
`
export const cardDetailsUlLi = styled.li` 
	text-align: center;
	font-size: 1.5rem;
	padding: 1rem;

	&:not(:last-child) {
	border-bottom: 1px solid #eee;
`

export const cardCta = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	text-align: center;
`
export const cardPriceBox = styled.div`
	text-align: center;
	color: #fff;
	margin-bottom: 8rem;
`
export const cardPriceOnly = styled.p`
	font-size: 1.4rem;
	text-transform: uppercase;
`
export const cardPriceValue = styled.p`
	font-size: 6rem;
	font-weight: 100;
`
