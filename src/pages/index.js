import Acomplishments from '../components/Acomplishments/Acomplishments'

import BackgroundgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { IdProvider } from '@radix-ui/react-id'

const Home = () => {
	return (
		<IdProvider>
			<Layout>
				<BackgroundgAnimation />
				<Projects />
				<Technologies />
				<Timeline />
				<Acomplishments />
			</Layout>
		</IdProvider>
	)
}

export default Home
