import React, { useRef, useEffect } from 'react'

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './TimeLineStyles'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { TimeLineData } from '../../constants/constants'

const Timeline = () => {
	const carouselRef = useRef()

	const scroll = (
		node: { scrollTo: (arg0: { left: any; behavior: string }) => any },
		left: number,
	) => {
		return node.scrollTo({ left, behavior: 'smooth' })
	}

	const handleClick = (
		e: React.MouseEvent<HTMLElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
		i: number,
	) => {
		e.preventDefault()

		if (carouselRef.current) {
			const scrollLeft = Math.floor(carouselRef.current * 0.7 * (i / TimeLineData.length - 1))

			scrollTo(carouselRef.current, scrollLeft)
		}
	}

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current / (carouselRef.current * 0.7)) * TimeLineData.length,
			)

			setActiveItem(index)
		}
	}

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0)
		}

		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>I am a self-taught developer with plenty of zest</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode key={index}>
							<CarouselItemTitle>{item.year}</CarouselItemTitle>
							<CarouselItem id={`carousel__item-${index}`} onClick={(e) => handleClick(e, index)}>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton key={index} onClick={(e) => handleClick(e, index)} type='button'>
						<CarouselButtonDot />
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	)
}

export default Timeline
function setActiveItem(index: number) {
	throw new Error('Function not implemented.')
}
