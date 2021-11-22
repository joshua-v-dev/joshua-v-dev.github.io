import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import { Navbar, NavItem, DropdownMenu } from '../components/Navbar'

const Home = () => {
	return (
		<Layout>
			<Navbar>
				<NavItem icon={<PlusIcon />} />
				<NavItem icon={<BellIcon />} />
				<NavItem icon={<MessengerIcon />} />

				<NavItem icon={<CaretIcon />}>
					<DropdownMenu></DropdownMenu>
				</NavItem>
			</Navbar>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	)
}

export default Home
