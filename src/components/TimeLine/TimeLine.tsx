import 'react-devtools'
import React, { useRef, useEffect } from 'react'
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
	const [currentIndex, setCurrentIndex] = React.useState(0)
	const scroll = (
		node: { scroll: (arg0: { left: any; behavior: string }) => any },
		left: number,
	) => {
		return node.scroll({ left, behavior: 'smooth' })
	}
	const carouselRef = useRef(0)
	const handleClick = (
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>,
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

			setCurrentIndex(index)
		}
	}

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen

	useEffect(() => {
		const handleResize = () => {
			scrollTo(carouselRef.current, 0)
		}

		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>I am a self-taught developer with plenty of zest</SectionText>
			<CarouselContainer onScroll={handleScroll}>
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

			{TimeLineData.map((_item, index) => (
				<CarouselButton key={index} onClick={(e) => handleClick(e, index)} type='button'>
					<CarouselButtonDot />
				</CarouselButton>
			))}

			<SectionDivider />
		</Section>
	)
}

export default Timeline
