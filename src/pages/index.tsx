import React from "react";
import Container from "~/components/Container";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";
import SkipToContent from "~/components/SkipToContent";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <HomeHero />
        <SkipToContent />
        <HomeCta />
      </Container>
    </>
  );
};
export default Home;
