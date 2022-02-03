// snap back to beginning of scroll when window is resized
// avoids a bug where content is covered up if coming from smaller screen
// Timeline.tsx uses useEffect hook to run on window resize

import React, { useState, useRef, useEffect } from 'react'
import {
	CarouselButton,
	CarouselButtonDot,
	CarouselContainer,
	CarouselItem,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './TimeLineStyles'
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents/index'
import { TimeLineData } from '../../constants/constants'

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
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>I am a self-taught developer with plenty of zest</SectionText>
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

			<SectionDivider />
		</Section>
	)
}

export default Timeline
