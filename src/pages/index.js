import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { IdProvider } from '@radix-ui/react-id'
import ImageCarousel from '../components/Slider/ImageCarousel'
import Particles from '../components/Particles/Particles'

const Home = () => {
	return (
		<IdProvider>
			<Layout>
				<BackgroundAnimation />
				<ImageCarousel />
				<Particles />
				<Projects />
				<Technologies />
				<Timeline />
				<Acomplishments />
			</Layout>
		</IdProvider>
	)
}

export default Home
