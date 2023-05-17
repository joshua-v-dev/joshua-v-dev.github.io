import React from "react";
import GlassTopPicks from "~/components/GlassTopPicks";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";
import ParticlesContainer from "~/components/ParticlesContainer";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/herobg.png')]">
        <HomeHero />
        <div className="h-10" />

        <GlassTopPicks />
        <div className="h-10" />
        <HomeCta />
        <ParticlesContainer />
      </div>
    </>
  );
};
export default Home;
