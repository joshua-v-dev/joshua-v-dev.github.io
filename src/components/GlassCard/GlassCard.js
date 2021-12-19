import React from 'react'
import { CardContainer } from '../../../src/components/Projects/ProjectsStyles'
import '../../../src/pages/App.css'

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
					<div className='cardSide cardSide--back card__side--back-1'>
						<div className='card__cta'>
							<div className='card__price-box'>
								<p className='card__price-only'>Only</p>
								<p className='card__price-value'>$297</p>
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
					<div className='card__side card__side--front'>
						<div className='card__picture card__picture--2'> &nbsp; </div>
						<h4 className='card__heading'>
							<span className='card__heading-span card__heading-span--2'>The Forest Hiker</span>
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
					<div className='card__side card__side--back card__side--back-2'>
						<div className='card__cta'>
							<div className='card__price-box'>
								<p className='card__price-only'>Only</p>
								<p className='card__price-value'>$497</p>
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
					<div className='card__side card__side--front'>
						<div className='card__picture card__picture--3'> &nbsp; </div>
						<h4 className='card__heading'>
							<span className='card__heading-span card__heading-span--3'>The Snow Adventurer</span>
						</h4>
						<div className='card__details'>
							<ul>
								<li>5 day tours</li>
								<li>Up to 15 people</li>
								<li>3 tour guides</li>
								<li>Sleep in provided tents</li>
								<li>Difficulty: hard</li>
							</ul>
						</div>
					</div>
					<div className='card__side card__side--back card__side--back-3'>
						<div className='card__cta'>
							<div className='card__price-box'>
								<p className='card__price-only'>Only</p>
								<p className='card__price-value'>$897</p>
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
