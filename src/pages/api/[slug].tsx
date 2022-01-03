import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { projects } from '../../constants/constants'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
	slug: string
}

const Details = ({ htmlString }: { htmlString: any }) => {
	return (
		<>
			<h1>Projects Page</h1>
			<pre>{projects}</pre>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</>
	)
}
export const getStaticPaths: GetStaticPaths = async () => {
	const arr: string[] = ['slug1', 'slug2']
	const paths = arr.map((slug) => {
		return {
			params: { slug },
		}
	})
	return { paths, fallback: false }
}

// 	const files = fs.readdirSync(__dirname)
// 	console.log('files: ', files)
// 	const paths = files.map((filename) => ({
// 		params: {
// 			slug: filename.replace('.js', ''),
// 		},
// 	}))
// 	console.log('paths: ', paths)
//
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as IParams // no longer causes error
	const props = fetch(`/api/${slug}`)
	return { props }
}

// }): Promise<{ props: { htmlString: string } }> => {
// 	const projects = fs.readFileSync(path.join(slug + '.js')).toString()
// 	const parsedProjects = matter(projects)
//
// 	const htmlString = `${marked(parsedProjects.content)}`
//
// 	return { props: { htmlString } }

export default Details
