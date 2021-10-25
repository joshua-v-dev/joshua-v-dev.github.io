import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from 'next/head'

const Details = ({ htmlString, data }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta title='description' content={data.description} />
			</Head>
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

export default Details
