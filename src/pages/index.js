import Acomplishments from '../components/Acomplishments/Acomplishments'

import BackgroundgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import { IdProvider } from '@radix-ui/react-id'
import BackgroundAnimationFull from '../components/BackgroundAnimationFull/BackgroundAnimationFull'
// import TechnologiesPage from './TechnologiesPage'
const Home = () => {
	return (
		<IdProvider>
			<Layout>
				<BackgroundgAnimation />
				<Projects />
				<Technologies />
				{/* <TechnologiesPage /> */}
				<Timeline />
				<Acomplishments />
			</Layout>
		</IdProvider>
	)
}

export default Home
