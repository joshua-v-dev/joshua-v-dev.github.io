// next.js component for the About page of the app (see AboutPage.js)
// grid layout of the page
import React from 'react'
function AboutPage(props) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>About</h1>
					<p>
						This is a simple React app that uses the{' '}
						<a href='/' target='_blank' rel='noopener noreferrer'>
							next.js
						</a>{' '}
						framework.
					</p>
				</div>
			</div>
		</div>
	)
}
export default AboutPage
