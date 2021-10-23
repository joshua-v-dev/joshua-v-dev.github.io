import React from 'react'
import fs from 'fs'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	return props.ProjectsPage.data
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

const Details = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	)
}
export default Details
