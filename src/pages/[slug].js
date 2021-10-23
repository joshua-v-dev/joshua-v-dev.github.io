import React from 'react'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'

const Details = ({ projects, data }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<div>
				<h1>Projects Page</h1>
				<pre>{projects}</pre>
			</div>
		</>
	)
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync('ProjectsPage')

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.js', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const projects = fs.readFileSync(path.join('ProjectsPage', slug + '.js')).toString()
	const parsedProjects = matter(projects)
	return { props: { projects: parsedProjects.projects, data: parsedProjects.data } }
}
export default Details
