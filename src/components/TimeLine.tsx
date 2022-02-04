// snap back to beginning of scroll when window is resized
// avoids a bug where content is covered up if coming from smaller screen
// Timeline.tsx uses useEffect hook to run on window resize

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimeLineData } from '../constants/constants'

const Timeline = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const carouselRef = useRef<number>(0)
	// scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
	const scroll = (ref: number) => {
		carouselRef.current = ref // set current index
		window.scrollTo(0, ref * window.innerHeight) // scroll to index * window height
	}

	// const scroll = (node:  number, left: number) => {
	// 	return () => {
	// 		node.scrollTo({ left, behavior: 'smooth' })
	// 	}
	// }
	// need to fix this to modulate left, right with same top mixed with behavior with types from lib.dom.d.ts ScrollIntoViewOptions
	const handleClick = (
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>,
		i: number,
	) => {
		e.preventDefault()

		if (carouselRef.current) {
			const scrollLeft = Math.floor(carouselRef.current * 0.7 * (i / TimeLineData.length - 1))

			scroll(carouselRef.current + scrollLeft)
		}
	}

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current / (carouselRef.current * 0.7)) * TimeLineData.length,
			)

			setCurrentIndex(index)
		}
	}

	useEffect(() => {
		const handleResize = () => {
			//handle resize for useEffect to re-render the carousel on mobile devices when the window is resized to a smaller width than the initial width of the carousel container

			scrollTo(carouselRef.current, 0)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [currentIndex, carouselRef])

	return (
		// 	<SectionTitle>About Me</SectionTitle>
		// 	<SectionText>I am a self-taught developer with plenty of zest</SectionText>
		<>
			<CarouselContainer onScroll={handleScroll}>
				{TimeLineData.map((i, index) => (
					<CarouselMobileScrollNode key={index}>
						<CarouselItemTitle>{i.year}</CarouselItemTitle>
						<CarouselItem
							id={`carousel__item-${index}`}
							onClick={(
								e:
									| React.MouseEvent<HTMLDivElement, MouseEvent>
									| React.MouseEvent<HTMLButtonElement, MouseEvent>,
							) => handleClick(e, index)}>
							<CarouselItemText>{i.text}</CarouselItemText>
						</CarouselItem>
					</CarouselMobileScrollNode>
				))}
			</CarouselContainer>

			{TimeLineData.map((i, index) => (
				<CarouselButton
					key={index}
					onClick={(
						e:
							| React.MouseEvent<HTMLDivElement, MouseEvent>
							| React.MouseEvent<HTMLButtonElement, MouseEvent>,
					) => handleClick(e, index)}
					type='button'>
					<CarouselButtonDot />
					<CarouselItemText>{i.text}</CarouselItemText>
				</CarouselButton>
			))}
		</>
	)
}

export default Timeline

export const CarouselContainer = styled.ul`
	margin: 0;
	object-fit: cover;
	display: flex;
	flex-wrap: wrap;
	background: #0f1624;
	padding: 0;
	list-style-type: space-counter;
	justify-content: space-around;
	align-items: space-around;
	overflow-x: scroll;
	margin-bottom: 8rem;
`
export const CarouselMobileScrollNode = styled.div`
	display: grid;
	grid-area: 1 / 1 / span 4 / span 3;
	justify-content: space-evenly;
	align-items: center;
	grid-column-gap: 5rem;
`

export const CarouselItem = styled.div`
	background: #0f1624;
	border-radius: 0.3rem;
	object-fit: cover;
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
