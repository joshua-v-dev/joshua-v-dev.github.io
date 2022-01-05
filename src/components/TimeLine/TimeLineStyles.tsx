import styled from 'styled-components'

export const CarouselContainer = styled.ul`
margin: 0;
    width: 100%;
	height: 100%;
	display: flex;
	flex-wrap:wrap;
	background: #0f1624;
	padding: 0;
	list-style-type: space-counter;
	justify-content: space-around;
	align-items: space-around;
    overflow-x: scroll;
	/* overflow-x: hidden; */

	// margin-left: 5rem;
	// &:first-of-type {
	// 	margin-left: 0;
	// }

	margin-bottom: 8rem;
s
	//remove scrollbar
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}


`
export const CarouselMobileScrollNode = styled.div`
	display: grid;
	grid-area: 1 / 1 / span 4 / span 3;
	// flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	grid-column-gap: 5rem;
`

export const CarouselItem = styled.div`
	// border: 1px solid #e4e6e7;
	background: #0f1624;
	border-radius: 0.3rem;
	max-width: 55rem;
	grid-auto-rows: minmax(25rem, auto);
	grid-template-columns: repeat(5, 1fr);
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
`

export const CarouselItemText = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 1rem;
	font-size: 2.5rem;
	line-height: 3rem;
	letter-spacing: 0.02em;
	line-spacing: 1.5rem;
	color: red;
`
export const CarouselButtons = styled.div`
	width: 28.8rem;
	display: none;
	visibility: hidden;
`

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 0.4rem;
	border: none;
	cursor: pointer;
	margin-right: 0.4rem;

	&:focus {
		outline: none;
	}
`

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 1rem;
	margin: auto;
	width: 0.3rem;
	height: 0.3rem;
`
