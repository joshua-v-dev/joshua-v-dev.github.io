import Acomplishments from '../components/Acomplishments/Acomplishments'
import BackgroundgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import { IdProvider } from '@radix-ui/react-id'
// import TechnologiesPage from './TechnologiesPage'
const Home = () => {
	return (
		<IdProvider>
			<Layout>
				<Section grid>
					<Hero />
					<BackgroundgAnimation className='BgAnimation__svg' />
				</Section>
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
