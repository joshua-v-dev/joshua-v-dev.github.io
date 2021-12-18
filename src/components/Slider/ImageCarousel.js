import React from 'react'
import { projects } from '../../constants/constants'
import {
	PageContainer,
	SliderWrapper,
	SliderImage,
	Nav,
	BackButton,
	NextButton,
} from './ImageCarouselStyles.js'
import Projects from '../Projects/Projects'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const ImageCarousel = () => {
	return (
		<PageContainer>
			<SliderWrapper>
				<CarouselProvider
					naturalSlideWidth={1000}
					naturalSlideHeight={500}
					totalSlides={projects.length}
					visibleSlides={1}>
					<Slider>
						<Slide>
							<SliderImage>
								<Projects />
							</SliderImage>
						</Slide>
					</Slider>
					<Nav>
						<BackButton>{`<`}</BackButton>
						<NextButton>{`>`}</NextButton>
					</Nav>
				</CarouselProvider>
			</SliderWrapper>
		</PageContainer>
	)
}

export default ImageCarousel
