//tailwind 2x2 column grid

import React from 'react'
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/react/outline'

const features = [
	{
		name: 'Microservices',
		description:
			'Headless services that can be deployed to any cloud provider. No need to worry about infrastructure, just deploy your services and let them do the rest.',
		icon: GlobeAltIcon,
	},
	{
		name: 'Next.js with TypeScript and Tailwindcss Production Build',
		description:
			'Secure, Scalable, and Fast. Built with Next.js, TypeScript, and Tailwindcss. Production ready for production deployment.',
		icon: ScaleIcon,
	},
	{
		name: 'Design Tools',
		description:
			'Built with Sketch, Figma, and Adobe XD. No need to worry about design. Just focus on building your app.',
		icon: LightningBoltIcon,
	},
	{
		name: 'Modern UX Principles and Architecture',
		description:
			'Built with React Hooks, Context, and Redux. No need to worry about the details. Just focus on building your app.',
		icon: AnnotationIcon,
	},
]

export default function Technologies() {
	return (
		<div className='py-12 bg-transparent'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='lg:text-center'>
					<h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
						Technologies
					</h2>
					<p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
						A better way to Full Stack
					</p>
					<p className='mt-4 max-w-2xl text-xl text-white lg:mx-auto'>
						Cross platform, cross browser, cross device. No more headaches. Just focus on building
						your app.
					</p>
				</div>

				<div className='mt-10'>
					<dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
						{features.map((feature) => (
							<div key={feature.name} className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
										<feature.icon className='h-6 w-6' aria-hidden='true' />
									</div>
									<p className='ml-16 text-lg leading-6 font-medium text-white'>{feature.name}</p>
								</dt>
								<dd className='mt-2 ml-16 text-base text-white'>{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
