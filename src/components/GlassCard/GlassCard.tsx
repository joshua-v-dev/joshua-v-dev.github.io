import React from 'react'
import { CardContainer } from '../Projects/ProjectsStyles'
import './GlassCardStyles.ts'

const GlassCard = () => {
	return (
		<>
			<CardContainer>
				<div className='Card'>
					<div className='cardSideFront'>
						<div className='cardPictureCardPicture1'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeadingSpanCardHeadingSpan1'>The Sea Explorer</span>
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
					<div className='cardSideBackCardSideBack1'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$297</p>
							</div>
							<a href='#popup' className='Btn BtnWhite'>
								Book now!
							</a>
						</div>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className='Card'>
					<div className='cardSide cardSideFront'>
						<div className='cardPicture cardPicture2'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeadingSpan cardHeadingSpan2'>The Forest Hiker</span>
						</h4>
						<div className='cardDetails'>
							<ul>
								<li>7 day tours</li>
								<li>Up to 40 people</li>
								<li>6 tour guides</li>
								<li>Sleep in provided tents</li>
								<li>Difficulty: medium</li>
							</ul>
						</div>
					</div>
					<div className='cardSideCardSideBack cardSideBack2'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$497</p>
							</div>
							<a href='#popup' className='Btn BtnWhite'>
								Book now!
							</a>
						</div>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className='Card'>
					<div className='cardSide cardSideFront'>
						<div className='cardPicture cardPicture3'> &nbsp; </div>
						<h4 className='cardHeading'>
							<span className='cardHeadingSpan cardHeadingSpan3'>The Snow Adventurer</span>
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
					<div className='cardSideCardSideBackCardSideBack3'>
						<div className='cardCta'>
							<div className='cardPriceBox'>
								<p className='cardPriceOnly'>Only</p>
								<p className='cardPriceValue'>$897</p>
							</div>
							<a href='#popup' className='Btn btnWhite'>
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
