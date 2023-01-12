import React from "react";
import GlassTopPicks from "~/components/GlassTopPicks";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <GlassTopPicks />
      <HomeCta />
    </>
  );
};
export default Home;
