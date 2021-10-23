import Link from 'next/link'
import { projects } from '../../constants/constants'

const ProjectsPage = () =>
	projects.map((projects) => {
		return projects.slug
	})

export default ProjectsPage
