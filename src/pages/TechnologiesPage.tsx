// Used Github Co-Pilot for this comoponent to show low-code approach

// component lists items and links to their detail page.
// renders the technologies page.
// functional component.
// export default TechnologiesPage
function TechnologiesPage() {
	return (
		<div className='technologies-page'>
			<div className='technologies-page-content'>
				<div className='technologies-page-content-header'>
					<h1>Technologies</h1>
				</div>
				<div className='technologies-page-content-body'>
					<div className='technologies-page-content-body-item'>
						<div className='technologies-page-content-body-item-header'>
							<h2>Front-End</h2>
						</div>
						<div className='technologies-page-content-body-item-body'>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>React</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										React is a JavaScript library for building user interfaces. It is maintained by
										Facebook and a community of individual developers and companies. React can be
										used as a base in the development of single-page or mobile applications.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Redux</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										Redux is a predictable state container for JavaScript apps. It helps you write
										applications that behave consistently, run in different environments (client,
										server, and native), and are easy to test.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>React Router</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										React Router is a routing library for React. It lets you write applications with
										a clean API and a declarative, efficient UI.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>React-Bootstrap</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										React-Bootstrap is a collection of React components for building a responsive,
										mobile-first front-end. It is based on Bootstrap 3.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>JQuery</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										JQuery is a JavaScript library that makes it easier to customize the behavior
										and appearance of many aspects of a Web page.
									</p>
								</div>
							</div>

							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Bootstrap</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										Bootstrap is a free and open-source collection of responsive HTML, CSS, and JS
										components designed to help you build the website of your dreams.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Node.js</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									{' '}
									<p>
										Node.js is an open-source, cross-platform JavaScript run-time environment that
										executes JavaScript code outside of a web browser. Node.js lets developers use
										JavaScript to write command-line tools and for server-side scripting. Node.js
										uses an event-driven, non-blocking I/O model that makes it lightweight and
										efficient. Node.js package ecosystem, npm, is the largest ecosystem of open
										source JavaScript projects.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Express.js</h3>
								</div>

								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										Express.js is a minimal and flexible Node.js web application framework that
										provides a robust set of features for web and mobile applications.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>MongoDB</h3>
								</div>

								<div className='technologies-page-content-body-item-body-item-body'>
									<p></p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Mongoose</h3>
								</div>
								<div className='technologies-page-content-body-item-body-item-body'>
									<p>
										Mongoose is an Object Document Mapper (ODM) for MongoDB. It maps the native
										MongoDB objects to simple JS objects, so you can use them in your Node.js
										applications.
									</p>
								</div>
							</div>
							<div className='technologies-page-content-body-item-body-item'>
								<div className='technologies-page-content-body-item-body-item-header'>
									<h3>Mocha</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TechnologiesPage
