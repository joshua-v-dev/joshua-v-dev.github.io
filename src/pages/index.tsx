import React from "react";
import GlassTopPicks from "~/components/GlassTopPicks";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";

const Home: React.FC = () => {
  return (
    <>
      <div className="-z-1000 bg-[url('/images/heroBg2.svg')] lg:max-w-none">
        <HomeHero />
        <div className="h-10" />
        <GlassTopPicks />
        <div className="h-10" />
        <HomeCta />
      </div>
    </>
  );
};
export default Home;
