import Link from 'next/link'
import { projects } from '../../constants/constants'

const ProjectsPage = () => <Link href={'/[slug]'}></Link>
projects.map((projects) => {
	return projects.slug
})

export default ProjectsPage
