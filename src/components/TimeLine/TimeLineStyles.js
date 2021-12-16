import styled from 'styled-components'

export const CarouselContainer = styled.ul`
margin: 0;
    width: 100%;
	height: 100%;
	display: flex;
	flex-wrap:wrap;
	background: #0f1624;
	padding: 0rem;
	list-style-type: space-counter;
	justify-content: space-around;
	align-items: space-around;
    overflow-x: scroll;
	/* overflow-x: hidden; */

	// margin-left: 5rem;
	// &:first-of-type {
	// 	margin-left: 0px;
	// }

	margin-bottom: 80px;
s
	//remove scrollbar
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
		flex-wrap:nowrap;
        width:90vw;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;
		touch-action: pan-x;
		justify-content: initial;
		margin-bottom: 8px;
	}
`
export const CarouselMobileScrollNode = styled.div`
	display: grid;
	grid-area: 1 / 1 / span 4 / span 3;
	// flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	grid-column-gap: 5rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: ${({ final }) => (final ? `100%;` : `max-content`)};
		min-width: ${({ final }) => (final ? `100%;` : `min-content`)};
	}
`

export const CarouselItem = styled.div`
	// border: 1px solid #e4e6e7;
	background: #0f1624;
	border-radius: 3px;
	max-width: 55rem;
	grid-auto-rows: minmax(25rem, auto);
	grid-template-columns: repeat(5, 1fr);
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 124px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-auto-rows: minmax(100px, auto);
		grid-template-columns: repeat(4, 1fr);
		margin-left: 32px;
		// margin-bottom: 5rem;
		min-width: 90vw;
		background: #0e131f;
		padding: 4px;
		align-content: center;
		scroll-snap-align: start;
		border-radius: 3px;
		overflow: visible;
		position: relative;
		height: fit-content;
		width: fit-content;
		opacity: ${(props) => (props.active === props.index ? `opacity: 1` : `opacity: 0.99`)};
	}
`

export const CarouselItemTitle = styled.h4`
	font-weight: bold;
	font-size: 3rem;
	line-height: 4rem;
	letter-spacing: 0.02em;
	display: flex;
	align-items: space-around;
	justify-content: center;
	align-content: space-evenly;
	/* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
	background: linear-gradient(121.57deg, #ffffff 10%, rgba(255, 255, 255, 0.66) 30.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-top: 4rem;
	margin-bottom: 0.8rem;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 20px;
		line-height: 30px;
		margin-bottom: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 3rem;
		line-height: 3.5rem;
		// margin-bottom: 3rem;
	}
`
// export const CarouselItemImg = styled.svg`
// 	margin-left: 21px;
// 	-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
// 	 width: 50vw;
//   margin bottom: 2rem;
//
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		-webkit-mask-image: none;
// 		margin-left: 16px;
// 		overflow: hidden;
//     margin bottom: 2rem;
// 	}
// `

export const CarouselItemText = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 1rem;
	font-size: 2.5rem;
	line-height: 3rem;
	letter-spacing: 0.02em;
	line-spacing: 1.5rem;
	color: rgba(255, 255, 255, 0.75);
	// padding-right: 2rem;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100vw;
		font-size: 20px;
		line-height: 18px;
		padding-right: 0;
		margin-bottom: 10rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		line-height: 4rem;
		line-spacing: 2rem;
		// margin-bottom: 8rem;
		// margin-right: 2rem;
		// padding-bottom: 3rem;
		padding-left: 3rem;
		padding-right: 2rem;
	}
`
export const CarouselButtons = styled.div`
	width: 288px;
	display: none;
	visibility: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		visibility: visible;
		margin-bottom: 48px;
	}
`

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 4px;
	border: none;
	cursor: pointer;
	margin-right: 4px;
	opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
	transform: ${(props) => (props.active === props.index ? `scale(1.6)` : `scale(1)`)};

	&:focus {
		outline: none;
	}
`

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 10px;
	margin: auto;
	width: 3px;
	height: 3px;
`
