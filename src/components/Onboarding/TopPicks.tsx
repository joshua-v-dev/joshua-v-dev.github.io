import React, { FunctionComponentElement } from 'react'
import Image from 'next/image'
import { topPicks } from '../../database/database'

export default function TopPicks ()
{
	return (
		<>
			<div className='container grid items-center justify-center my-10 '>
				<div className='container grid grid-flow-col-dense grid-cols-3 gap-x-8 sm:grid-cols-1 bg-transparent '>
					{ topPicks.map(
						( topPicks, i ): FunctionComponentElement<PageTransitionEvent> => (
							<div
								key={ i }
								className='container grid grid-flow-row outline-offset-1 outline-double border-t-4 shadow-indigo-600 p-8 border-indigo-600/40 bg-black/40 backdrop-blur-md shadow-lg rounded-3xl hover:scale-105 justify-center items-center brightness-125 '>
								<a
									className='relative h-64 w-64 mx-auto p-10 border-4 border-indigo-600 rounded-md brightness-75'
									href={ topPicks.href }
									data-mdb-ripple='true'
									data-mdb-ripple-color='light '>
									<Image
										className='object-cover flex items-center justify-center w-full'
										src={ topPicks.src }
										alt={ topPicks.imageAlt }
										layout='fill'
										priority
									/>
								</a>
								<h5 className='grid justify-center p-8 text-4xl font-medium text-gray-200 '>
									{ topPicks.name }
								</h5>
								<p className='grid justify-center text-gray-200 text-md font-small '>{ topPicks.description }</p>
								<a href={ topPicks.href } data-mdb-ripple='true' data-mdb-ripple-color='light '>
									<div className='grid items-center justify-center p-6 '>
										<button
											type='button'
											className=' rounded bg-indigo-600 px-4 py-3 text-sm font-semibold uppercase leading-tight text-gray-200 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'>
											Learn More
										</button>
									</div>
								</a>
							</div>
						),
					) }
				</div>
			</div>
		</>
	)
}
