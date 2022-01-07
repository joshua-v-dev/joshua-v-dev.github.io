// import 'react-devtools'
import React from 'react'

import Particles from '../components/Particles/index'
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import Layout from '../layout/Layout'
import ImageCarousel from '../components/Slider/ImageCarousel'
import GlassCard from '../components/GlassCard/GlassCard'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'

const Home = () => {
	return (
		<React.StrictMode>
			<Layout>
				<Particles />
				<BackgroundAnimation />
				<Hero />
				<GlassCard />
				<ImageCarousel />
				<Projects />
				<Technologies />
				<Timeline />
				<Acomplishments />
				<ContactPage />
				<AboutPage />
			</Layout>
		</React.StrictMode>
	)
}

export default Home
