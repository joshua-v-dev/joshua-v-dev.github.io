import React, { FunctionComponentElement } from 'react'
import Image from 'next/image'
import { topPicks } from '../../database/database'

export default function TopPicks ()
{
	return (
		<>
			<div className='container grid items-center justify-center my-10 '>
				<div className='container grid grid-flow-col-dense  grid-cols-3
				 gap-x-24 sm:grid-cols-1 bg-transparent shadow-indigo-600  '>
					{ topPicks.map(
						( topPicks, i ): FunctionComponentElement<PageTransitionEvent> => (
							<div
								key={ i }
								className='container grid grid-flow-row outline-offset-2 border-black  border-double outline-black outline-2 border-t-4 border-b-1
								 shadow-indigo-600 p-12 border-indigo-600/90  bg-black/30 backdrop-blur-sm shadow-md  rounded-3xl 
								 hover:scale-105 justify-center items-center brightness-125 border-t-indigo-600 border-opacity-90 border-4 '>
								<a
									className='relative h-64 w-64 mx-auto outline-black outline-8 outline-offset-2
									  border-double 
									rounded-lg 
									brightness-100'
									href={ topPicks.href }
									data-mdb-ripple='true'
									data-mdb-ripple-color='light '>
									<Image
										className='object-cover flex items-center justify-center rounded-md p-2'
										src={ topPicks.src }
										alt={ topPicks.imageAlt }
										layout='fill'
										priority
									/>
								</a>
								<h5 className='grid justify-center text-3xl font-semibold  brightness-125  text-indigo-700 leading-relaxed p-2'>
									{ topPicks.name }
								</h5>
								<p className='grid justify-center text-teal-500 text-sm font-semibold brightness-95'>{ topPicks.description }</p>
								<div className='flex flex-wrap justify-center items-center'>
									<a href={ topPicks.href } data-mdb-ripple='true' data-mdb-ripple-color='light'>
										<div className='container grid items-end justify-end p-3 mt-5 -mb-10'>
											<button
												type='button'
												className='grid grid-flow-col-dense justify-end rounded-md bg-indigo-900 px-3 py-2 border-2 border-black text-sm font-normal uppercase leading-normal text-gray-200 shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg brightness-150'>
												Learn More
											</button>
										</div>
									</a>
								</div>
							</div>
						),
					) }
				</div>
			</div>
		</>
	)
}
