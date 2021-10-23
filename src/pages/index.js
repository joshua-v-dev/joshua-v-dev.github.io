import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import NavDropDown from '../components/NavDropDown'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import ProjectsPage from './ProjectsPage'

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<NavDropDown />
				<Hero />
				<BgAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
			<Footer />
			<ProjectsPage />
		</Layout>
	)
}

export default Home
