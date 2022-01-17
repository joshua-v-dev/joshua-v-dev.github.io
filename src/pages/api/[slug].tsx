import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { projects } from '../../constants/constants'

const Details = ({ htmlString }: { htmlString: string }) => {
	return (
		<>
			<h1>Projects Page</h1>
			<pre>{projects}</pre>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</>
	)
}

export const getStaticProps = async ({ slug }: { slug: unknown }) => {
	const projects = fs.readFileSync(path.join(slug + '.tsx')).toString()
	const parsedProjects = matter(projects)

	const htmlString = `${marked(parsedProjects.content)}`

	return { props: { htmlString } }
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync(__dirname)
	console.log('files: ', files)
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.tsx', ''),
		},
	}))
	console.log('paths: ', paths)

	return {
		paths,
		fallback: false,
	}
}

export default Details
