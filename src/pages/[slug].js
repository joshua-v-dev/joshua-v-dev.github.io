import React from 'react'
import fs from 'fs'

const Details = ({ slug }) => {
	return (
		<div>
			<h1>Details Page{slug}</h1>
		</div>
	)
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync('ProjectsPage')
	console.log(files)
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.js', ''),
		},
	}))
	console.log('paths:', paths)
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	return { props: { slug } }
}
export default Details
