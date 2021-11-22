// next.js component for the About page of the app (see AboutPage.js)
// grid layout of the page
import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>About</h1>
					<p>
						This is a simple React app that uses the{' '}
						<Link href='/' target='_blank' rel='noopener noreferrer'>
							<a>next.js</a> framework.
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
export default AboutPage
