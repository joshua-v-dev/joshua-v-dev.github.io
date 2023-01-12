import React from "react";
import Container from "~/components/Container";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-transparent container dark:bg-transparent">
        <Container>
          <HomeHero />
          <HomeCta />
        </Container>
      </div>
    </>
  );
};
export default Home;
