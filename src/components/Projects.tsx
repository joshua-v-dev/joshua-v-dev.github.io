/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { projects } from '../database/database'
import styled from 'styled-components'

// const Projects = () => (
// 	<>
// 		<CardContainer>
// 			<GridContainer>
// 				{projects.map((p, i) => {
// 					return (
// 						<BlogCard key={i}>
// 							<Img src={p.image} />
// 							<CardInfo className='card-info'>{p.description}</CardInfo>
// 							<TagList>
// 								{p.tags.map((t, i) => {
// 									return <Tag key={i}>{t}</Tag>
// 								})}
// 							</TagList>
// 						</BlogCard>
// 					)
// 				})}
// 			</GridContainer>
// 		</CardContainer>
// 	</>
// )
//
// export default Projects
//
// export const Img = styled.img`
// 	display: grid;
// 	border-radius: 2rem 2rem 4rem 4rem;
// 	object-fit: cover;
// 	overflow: hidden;
// `
//
// export const GridContainer = styled.section`
// 	display: grid;
// 	grid-template-columns: repeat(auto-fill, minmax(41rem, 1fr));
// 	grid-gap: 2rem;
// 	object-fit: auto;
// 	justify-content: center;
// 	overflow: hidden;
// `
// export const CardContainer = styled.div`
// 	object-fit: cover;
// 	display: grid;
// 	grid-auto-flow: row;
// `
//
// export const BlogCard = styled.div`
// 	display: grid;
// 	grid-auto-flow: row;
// 	grid-template-columns: 1fr;
// 	grid-template-gap: 1rem;
// 	padding: 1rem;
// 	object-fit: cover;
// 	text-align: center;
// 	position: relative;
// 	background: blue;
// 	box-shadow: 2rem 4rem 5rem 2rem rgba(31, 38, 135, 0.37);
// 	backdrop-filter: blur(7px);
// 	border-radius: 3rem;
// 	border: 1rem solid rgba(255, 255, 255, 0.5);
// `
//
// export const Hr = styled.hr`
// 	object-fit: cover;
// 	margin: 2rem auto;
// 	border: 0;
// 	background: blue;
// `
//
// export const Intro = styled.div`
// 	object-fit: cover;
// 	color: red;
// 	font-family: 'Droid Serif', serif;
// 	font-size: 1rem;
// 	font-style: italic;
// 	line-height: 2rem;
// `
//
// export const CardInfo = styled.p`
// 	object-fit: cover;
// 	padding: 0 5rem;
// 	color: blue;
// 	font-style: 2rem;
// 	font-size: 2rem;
// 	line-height: 3rem;
// 	display: flex;
// 	flex: 1;
// 	flex-direction: column;
// 	align-items: center;
// 	text-align: center;
// 	justify-content: center;
// `
//
// export const TagList = styled.ul`
// 	display: flex;
// 	flex: 1;
// 	align-items: space-evenly;
// 	justify-content: space-around;
// 	padding: 2rem;
// `
//
// export const Tag = styled.li`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-evenly;
// 	color: green;
// 	font-weight: 500;
// 	font-size: 2rem;
// `

//tailwind card with image and ripple effect
const Projects = () => (
	<div className='flex justify-center'>
		<div className='rounded-lg shadow-lg bg-white max-w-sm'>
			<a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
				<img
					className='rounded-t-lg'
					src='https://mdbootstrap.com/img/new/standard/nature/182.jpg'
					alt=''
				/>
			</a>
			<div className='p-6'>
				<h5 className='text-gray-900 text-xl font-medium mb-2'>Card title</h5>
				<p className='text-gray-700 text-base mb-4'>
					Some quick example text to build on the card title and make up the bulk of the card&apos;s
					content.
				</p>
				<button
					type='button'
					className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
					Button
				</button>
			</div>
		</div>
	</div>
)
export default Projects
