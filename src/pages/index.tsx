import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import Layout from '../layout/Layout'
import ImageCarousel from '../components/Slider/ImageCarousel'
import Particles from '../components/Particles/Particles'
import GlassCard from '../components/GlassCard/GlassCard'

const Home = () => {
	return (
		<Layout>
			<Hero />
			<BackgroundAnimation />
			<GlassCard />
			<ImageCarousel />
			<Particles />
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	)
}

export default Home
