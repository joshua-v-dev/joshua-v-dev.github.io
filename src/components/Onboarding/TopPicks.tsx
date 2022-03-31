import React, { FunctionComponentElement } from 'react'
import Image from 'next/image'
import { topPicks } from '../../database/database'

export default function TopPicks ()
{
	return (
		<>
			<div className=' grid items-center justify-center my-10 space-y-8 space-x-4'>
				<div className='container grid grid-flow-col-dense grid-cols-3 gap-x-8 sm:grid-cols-1 bg-transparent'>
					{ topPicks.map(
						( topPicks, i ): FunctionComponentElement<PageTransitionEvent> => (
							<div
								key={ i }
								className='container grid border-2 p-8 border-gray-200 bg-black justify-center items-center'>
								<a
									className='relative h-80 w-80 p-8 border-2 border-gray-200'
									href={ topPicks.href }
									data-mdb-ripple='true'
									data-mdb-ripple-color='light '>
									<Image
										className='object-cover '
										src={ topPicks.src }
										alt={ topPicks.imageAlt }
										layout='fill'
										priority
									/>
								</a>
								<h5 className='grid justify-center p-8 text-5xl font-medium text-gray-200'>
									{ topPicks.name }
								</h5>
								<p className='grid justify-center text-gray-200 text-xl font-medium p-2'>{ topPicks.description }</p>
								<a href={ topPicks.href } data-mdb-ripple='true' data-mdb-ripple-color='light '>
									<div className='grid items-center justify-center p-6 '>
										<button
											type='button'
											className=' rounded bg-indigo-600 px-6 py-4 text-sm font-semibold uppercase leading-tight text-gray-200 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'>
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
