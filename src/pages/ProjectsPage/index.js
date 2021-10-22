import { projects } from '../../constants/constants'

const ProjectsPage = () =>
	projects.map((projects) => {
		return projects.id
	})

export default ProjectsPage
