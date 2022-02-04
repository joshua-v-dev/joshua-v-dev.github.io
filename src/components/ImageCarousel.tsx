/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImageCarousel = () => {
	return (
		<div
			id='carouselDarkVariant'
			className='carousel slide carousel-fade carousel-dark relative'
			data-bs-ride='carousel'>
			{/* <!-- Indicators --> */}
			<div className='carousel-indicators absolute right-0 bottom-0 left-0  flex justify-center p-0 mb-4 object-contain'>
				<button
					data-bs-target='#carouselDarkVariant'
					data-bs-slide-to='0'
					className='active'
					aria-current='true'
					aria-label='Slide 1'></button>
				<button
					data-bs-target='#carouselDarkVariant'
					data-bs-slide-to='1'
					aria-label='Slide 1'></button>
				<button
					data-bs-target='#carouselDarkVariant'
					data-bs-slide-to='2'
					aria-label='Slide 1'></button>
			</div>

			{/* <!-- Inner --> */}
			<div className='carousel-inner relative w-full overflow-hidden'>
				{/* <!-- Single item --> */}
				<div className='carousel-item active relative float-left w-full'>
					<img
						src='https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg'
						className='block w-full'
						alt='Motorbike Smoke'
					/>
					<div className='carousel-caption hidden md:block absolute text-center'>
						<h5 className='text-xl'>New Game Coming Soon!</h5>
						<p>We definitely have something that you are going to love</p>
					</div>
				</div>

				{/* <!-- Single item --> */}
				<div className='carousel-item relative float-left w-full'>
					<img
						src='https://res.cloudinary.com/dpytkhyme/image/upload/v1643978160/Simple_Lined_Black_Onboarding_Page_Wireframe_Website_UI_Prototype_maycmm.svg'
						className='block w-full'
						alt='Mountaintop'
					/>
					<div className='carousel-caption hidden md:block absolute text-center'>
						<h5 className='text-xl'>UI Themes </h5>
						<p>Soon I will have themes available for download</p>
					</div>
				</div>

				{/* <!-- Single item --> */}
				<div className='carousel-item relative float-left w-full'>
					<img
						src='https://res.cloudinary.com/dpytkhyme/image/upload/v1643978847/online-shopping-poster_zsnuxd.svg'
						className='block w-full'
						alt='Woman Reading a Book'
					/>
					<div className='carousel-caption hidden md:block absolute text-center'>
						<h5 className='text-xl'>E-Commerce Solutions</h5>
						<p>Stores, Apps, Templates</p>
					</div>
				</div>
			</div>
			{/* <!-- Inner -->

  <!-- Controls --> */}
			<button
				className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
				type='button'
				data-bs-target='#carouselDarkVariant'
				data-bs-slide='prev'>
				<span
					className='carousel-control-prev-icon inline-block bg-no-repeat'
					aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
				type='button'
				data-bs-target='#carouselDarkVariant'
				data-bs-slide='next'>
				<span
					className='carousel-control-next-icon inline-block bg-no-repeat'
					aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	)
}
export default ImageCarousel
