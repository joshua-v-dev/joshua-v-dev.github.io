import React from "react";
import GlassTopPicks from "~/components/GlassTopPicks";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";
// import ParticlesContainer from "~/components/ParticlesContainer";

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <div className="h-10" />
      <GlassTopPicks />
      <div className="h-10" />
      <HomeCta />
      <div className="h-10" />
      {/* <ParticlesContainer /> */}
    </>
  );
};
export default Home;
