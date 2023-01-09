import React from "react";
import Container from "~/components/Container";
import HomeHero from "~/components/Hero/HomeHero";
import HomeCta from "~/components/HomeCta";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <HomeHero />
        <HomeCta />
      </Container>
    </>
  );
};
export default Home;
