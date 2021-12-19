import React from 'react'
import { CardContainer } from '../../../src/components/Projects/ProjectsStyles'

const GlassCard = () => {
	return (
		<>
			<CardContainer>
				<div className='card'>
					<div className='cardSide cardSideFront'>
						<div className='' />
						<div clasName='cardPicture cardPicture--1'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeadingSpan cardHeadingSpan--1'>The Sea Explorer</span>
						</h4>
						<div className='cardDetails'>
							<ul>
								<li>3 day tours</li>
								<li>Up to 30 people</li>
								<li>2 tour guides</li>
								<li>Sleep in cozy hotels</li>
								<li>Difficulty: easy</li>
							</ul>
						</div>
					</div>
					<div className='cardSide cardSide--back cardSide--back-1'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$297</p>
							</div>
							<a href='#popup' className='btn btnWhite'>
								Book now!
							</a>
						</div>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className='card'>
					<div className='cardSide cardSide--front'>
						<div className='cardPicture cardPicture--2'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeadingSpan cardHeadingSpan--2'>The Forest Hiker</span>
						</h4>
						<div className='card__details'>
							<ul>
								<li>7 day tours</li>
								<li>Up to 40 people</li>
								<li>6 tour guides</li>
								<li>Sleep in provided tents</li>
								<li>Difficulty: medium</li>
							</ul>
						</div>
					</div>
					<div className='cardSide cardSide--back cardSide--back-2'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$497</p>
							</div>
							<a href='#popup' className='btn btn--white'>
								Book now!
							</a>
						</div>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className='card'>
					<div className='cardSide cardSide--front'>
						<div className='cardPicture cardPicture--3'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeading-span cardHeadingSpan--3'>The Snow Adventurer</span>
						</h4>
						<div className='cardDetails'>
							<ul>
								<li>5 day tours</li>
								<li>Up to 15 people</li>
								<li>3 tour guides</li>
								<li>Sleep in provided tents</li>
								<li>Difficulty: hard</li>
							</ul>
						</div>
					</div>
					<div className='cardSide cardSide--back cardSide--back-3'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$897</p>
							</div>
							<a href='#popup' className='btn btn--white'>
								Book now!
							</a>
						</div>
					</div>
				</div>
			</CardContainer>
		</>
	)
}

export default GlassCard
