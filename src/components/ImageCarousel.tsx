// tailwind carousel
// <div
//   id="carouselDarkVariant"
//   class="carousel slide carousel-fade carousel-dark relative"
//   data-bs-ride="carousel"
// >
//   <!-- Indicators -->
//   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
//     <button
//       data-bs-target="#carouselDarkVariant"
//       data-bs-slide-to="0"
//       class="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     ></button>
//     <button
//       data-bs-target="#carouselDarkVariant"
//       data-bs-slide-to="1"
//       aria-label="Slide 1"
//     ></button>
//     <button
//       data-bs-target="#carouselDarkVariant"
//       data-bs-slide-to="2"
//       aria-label="Slide 1"
//     ></button>
//   </div>
//
//   <!-- Inner -->
//   <div class="carousel-inner relative w-full overflow-hidden">
//     <!-- Single item -->
//     <div class="carousel-item active relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
//         class="block w-full"
//         alt="Motorbike Smoke"
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//
//     <!-- Single item -->
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
//         class="block w-full"
//         alt="Mountaintop"
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//
//     <!-- Single item -->
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
//         class="block w-full"
//         alt="Woman Reading a Book"
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <!-- Inner -->
//
//   <!-- Controls -->
//   <button
//     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
//     type="button"
//     data-bs-target="#carouselDarkVariant"
//     data-bs-slide="prev"
//   >
//     <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button
//     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
//     type="button"
//     data-bs-target="#carouselDarkVariant"
//     data-bs-slide="next"
//   >
//     <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
import React from 'react'
import { projects } from '../database/database'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { CardInfo, ExternalLinks, Tag, TagList, UtilityList } from './Projects'
import styled, { css } from 'styled-components'
import { ButtonNext, ButtonBack } from 'pure-react-carousel'
import { rgba } from 'polished'

const ImageCarousel = () => {
	return (
		<>
			<CarouselProvider
				naturalSlideWidth={60}
				naturalSlideHeight={40}
				totalSlides={projects.length}
				visibleSlides={1}>
				<PageContainer>
					<SliderWrapper>
						<Slider>
							{projects.map((p, i) => {
								return (
									<Slide key={i} index={i}>
										<CarouselCard>
											<SliderImage>
												<Img src={p.image} />
											</SliderImage>

											{/* <SectionTitle title='true'>{p.title}</SectionTitle> */}

											<CardInfo className='cardInfo'>{p.description}</CardInfo>

											{/* <SectionTitle>Stack</SectionTitle> */}
											<TagList>
												{p.tags.map((t, i) => {
													return <Tag key={i}>{t}</Tag>
												})}
											</TagList>

											<UtilityList>
												<ExternalLinks href={p.visit}>Code</ExternalLinks>
												<ExternalLinks href={p.source}>Source</ExternalLinks>
											</UtilityList>
										</CarouselCard>
									</Slide>
								)
							})}
						</Slider>
						<Nav>
							<BackButton>{`<`}</BackButton>
							<NextButton>{`>`}</NextButton>
						</Nav>
					</SliderWrapper>
				</PageContainer>
			</CarouselProvider>
		</>
	)
}
export default ImageCarousel

export const PageContainer = styled.div`
	margin: 0 auto;
	background: transparent;
	object-fit: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const SliderImage = styled.div`
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
`

export const Nav = styled.nav`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const sharedStyles = css`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${rgba('#1a132b', 0.5)};
	color: white;
	border: 0;
	font-size: 40px;
	outline: none;
	transition: opacity 0.35s;
	&:disabled {
		opacity: 0;
	}
`
export const NextButton = styled(ButtonNext)`
	${sharedStyles};
`
export const BackButton = styled(ButtonBack)`
	${sharedStyles};
`

export const SliderWrapper = styled.div`
	overflow: hidden;
	position: relative;
	width: 70%;
	background: white;
	background: blue;
`
export const Img = styled.img`
	display: grid;
	border-radius: 2rem 2rem 1rem 1rem;
	object-fit: scale-down;
	overflow: hidden;
`
export const CarouselCard = styled.div`
	display: flex;
	object-fit: cover;
	flex-direction: column;
	padding: 1rem;
	justify-content: center;
	align-content: center;
	margin: 3rem auto;
	text-align: center;
	position: relative;
	overflow: hidden;
	background: blue;
	box-shadow: 2rem 4rem 5rem 2rem rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(7px);
	border-radius: 3rem;
`
export const CarouselTitle = styled.h2`
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	margin-top: 10rem;
`
