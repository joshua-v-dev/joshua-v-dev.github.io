import React, { useState } from 'react'
import { projects } from './constantsconstants.js.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Section } from '../../styles/GlobalComponents/index.js'
import { RightArrow, LeftArrow, SliderStyle, Slide, SlideActive } from './SliderStyles.js'

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<Section>
			<SliderStyle>
				<LeftArrow>
					<FaArrowAltCircleLeft onClick={prevSlide} />
				</LeftArrow>
				<RightArrow>
					<FaArrowAltCircleRight onClick={nextSlide} />
				</RightArrow>
				{projects.map((slide, index) => {
					return (
						<Slide key={index}>
							<SlideActive>
								<div className={index === current ? 'slide active' : 'slide'} key={index}>
									{index === current && (
										<img src={slide.image} alt='travel image' className='image' />
									)}
								</div>
							</SlideActive>
						</Slide>
					)
				})}
			</SliderStyle>
		</Section>
	)
}

export default ImageSlider
