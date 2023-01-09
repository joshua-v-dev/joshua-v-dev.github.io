import React from "react";
import Container from "~/components/Container";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";

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
