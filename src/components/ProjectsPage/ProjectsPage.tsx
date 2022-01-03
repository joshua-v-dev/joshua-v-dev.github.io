import React from 'react'
import MernProject from '../MernProject/MernProject'
import { IdProvider } from '@radix-ui/react-id'

const ProjectsPage = () => (
	<IdProvider>
		<MernProject />
	</IdProvider>
)

export default ProjectsPage
