import React from 'react'
import Layout from '../layout/Layout'
import HomePage from '../components/Page/HomePage'

// import tw, { styled } from "twin.macro";
// import Logo from "../components/Logo/Logo";
// import Button from "../components/Button/Button";
//
// const Container = styled.div({
//   ...tw`flex flex-col items-center justify-center h-screen`,
//   variants: {
//     hasBackground: {
//       true: tw`bg-gradient-to-b from-current to-blue-300`,
//     },
//   },
// });
//
// const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`;
const Home: React.FC = () => {
	return (
		<>
			{/* <Container hasBackground>
        <ButtonBox>
          <Button variant="primary">Submit</Button>
          <Button variant="secondary">Cancel</Button>
          <Button isSmall>Close</Button>
        </ButtonBox>
        <Logo />
      </Container> */}
			<Layout>
				<HomePage />
			</Layout>
		</>
	)
}

export default Home
