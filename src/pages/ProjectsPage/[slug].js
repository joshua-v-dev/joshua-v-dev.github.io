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

export const getStaticProps = async ({ params: { slug } }) => {
	const projects = fs.readFileSync(path.join('MernProject', slug + '.js')).toString()
	const parsedProjects = matter(projects)

	const htmlString = marked(parsedProjects.content)

	return { props: { htmlString } }
}

export const getStaticPaths = async () => {
	//  paths: {
	// 		params: {
	// 			slug: './MernProject'
	// 		}
	// 	}
	// 	;[]
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
