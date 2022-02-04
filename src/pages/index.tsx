import React from 'react'
import Particles from '../components/Particles/index'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import ImageCarousel from '../components/Slider/ImageCarousel'
import GlassCard from '../components/GlassCard/GlassCard'
import Layout from '../layout/Layout'

const Home: React.FC = () => {
	return (
		<Layout>
			<BackgroundAnimation />
			<Particles />
			<GlassCard />
			<ImageCarousel />
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	)
}

export default Home
