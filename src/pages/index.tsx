import React from 'react'
import Particles from '../components/Particles/index'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Projects from '../components/Projects'
import Acomplishments from '../components/Acomplishments'
import Technologies from '../components/Technologies'
import Timeline from '../components/TimeLine'
import ImageCarousel from '../components/ImageCarousel'
import Layout from './layout/Layout'

const Home: React.FC = () => {
	return (
		<Layout>
			<BackgroundAnimation />
			<Particles />
			<ImageCarousel />
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	)
}

export default Home
