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
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { TimeLineData } from '../../constants/constants'

const Timeline = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const carouselRef = useRef(0)

	useEffect(() => {
		const scroll = (
			node: { scrollTo: (scrolls: { left: number; behavior: string }) => void },
			left: number,
		) => {
			return node.scrollTo({ left, behavior: 'smooth' })
		}
		const handleResize = () => {
			//handle resize for useEffect to re-render the carousel on mobile devices when the window is resized to a smaller width than the initial width of the carousel container
			// 		if (window.innerWidth < carouselRef.current.offsetWidth) {
			// 			scroll(carouselRef.current, 0)
			// 		}
			// 	}
			// 	window.addEventListener('resize', handleResize)
			// 	return () => {
			// 		window.removeEventListener('resize', handleResize)
			// 	}
			// }, [])

			scroll({ scrollTo() {} }, 0)
		}

		window.addEventListener('resize', handleResize)
	}, [currentIndex])

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current / (carouselRef.current * 0.7)) * TimeLineData.length,
			)

			setCurrentIndex(index)
		}
	}

	const handleClick = (
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>,
		i: number,
	) => {
		e.preventDefault()

		if (carouselRef.current) {
			const scrollLeft = Math.floor(carouselRef.current * 0.7 * (i / TimeLineData.length - 1))

			scroll(carouselRef.current, scrollLeft)
		}
	}

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen

	// Timeline.tsx uses useEffect hook to run on window resize
	// https://reactjs.org/docs/hooks-effect.html
	// https://reactjs.org/docs/hooks-reference.html#useeffect
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-browser-resize
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-scroll
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-resize
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-orientation-change
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-focus-or-blur
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-visibility-change
	// https://reactjs.org/docs/hooks-faq.html#how-do-i-detect-a-window-page-hide-or-show

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
