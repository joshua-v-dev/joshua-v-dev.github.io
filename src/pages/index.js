import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import Slider from '../components/Slider/Slider'
import { Layout } from '../layout/Layout'
import { IdProvider } from '@radix-ui/react-id'

const Home = () => {
	return (
		<IdProvider>
			<Layout>
				<BackgroundAnimation />
				<Projects />
				<Slider />
				<Technologies />
				<Timeline />
				<Acomplishments />
			</Layout>
		</IdProvider>
	)
}

export default Home
