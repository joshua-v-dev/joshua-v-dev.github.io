import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

const Details = ({ htmlString }) => {
	return (
		<>
			<h1>Projects Page</h1>
			<pre>{projects}</pre>

			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</>
	)
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync('ProjectPage')
	console.log(files)
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

	const htmlString = marked(parsedProjects.content)

	return { props: { htmlString } }
}

export default Details
