import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

export const getStaticProps = async ({ params: { slug } }) => {
	const projects = fs.readFileSync(path.join('ProjectsPage', slug + '.js')).toString()
	const parsedProjects = matter(projects)

	const htmlString = marked(parsedProjects.content)

	return { props: { htmlString } }
}
const Details = ({ htmlString }) => {
	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: htmlString }}>
				<h1>Projects Page</h1>
				<pre>{projects}</pre>
			</div>
		</>
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
	return {
		paths,
		fallback: false,
	}
}

export default Details
