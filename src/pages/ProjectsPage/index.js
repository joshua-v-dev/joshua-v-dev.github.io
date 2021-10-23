import Link from 'next/link'
import { projects } from '../../constants/constants'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	return props.ProjectsPage.data
}
const ProjectsPage = () => <Link href={'/[slug]'}></Link>
projects.map((projects) => {
	return projects.slug
})

export default ProjectsPage
