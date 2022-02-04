/* eslint-disable @next/next/no-img-element */
// snap back to beginning of scroll when window is resized
// avoids a bug where content is covered up if coming from smaller screen
// Timeline.tsx uses useEffect hook to run on window resize

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimeLineData } from '../database/database'

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

//tailwind ui idea for timeline
/* This example requires Tailwind CSS v2.0+ */
// const features = [
//   { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//   { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//   { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//   { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]
//
// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
//         <div>
//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
//           <p className="mt-4 text-gray-500">
//             The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
//             steel divider separates active cards from new ones, or can be used to archive important task lists.
//           </p>
//
//           <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//             {features.map((feature) => (
//               <div key={feature.name} className="border-t border-gray-200 pt-4">
//                 <dt className="font-medium text-gray-900">{feature.name}</dt>
//                 <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//         <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//             alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
//             className="bg-gray-100 rounded-lg"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
//             alt="Top down view of walnut card tray with embedded magnets and card groove."
//             className="bg-gray-100 rounded-lg"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
//             alt="Side of walnut card tray with card groove and recessed card area."
//             className="bg-gray-100 rounded-lg"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
//             alt="Walnut card tray filled with cards and card angled in dedicated groove."
//             className="bg-gray-100 rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
