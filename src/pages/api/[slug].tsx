import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { projects } from '../../constants/constants'

const Details = ({ htmlString }: { htmlString: any }) => {
	return (
		<>
			<h1>Projects Page</h1>
			<pre>{projects}</pre>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</>
	)
}

export const getStaticProps = async ({ slug }: { slug: any }) => {
	const projects = fs.readFileSync(path.join(slug + '.js')).toString()
	const parsedProjects = matter(projects)

	const htmlString = `${marked(parsedProjects.content)}`

	return { props: { htmlString } }
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync(__dirname)
	console.log('files: ', files)
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.js', ''),
		},
	}))
	console.log('paths: ', paths)

	return {
		paths,
		fallback: false,
	}
}

export default Details
