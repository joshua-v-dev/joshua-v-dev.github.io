import React from 'react'
import fs from 'fs'
import path from 'path'
import marked from 'marked'
import ProjectsPage from './ProjectsPage'

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
