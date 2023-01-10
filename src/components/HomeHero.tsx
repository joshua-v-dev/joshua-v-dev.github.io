import React from "react";
import GlassTopPicks from "./GlassTopPicks";
import Hero from "./Hero";

type HeroProps = {
  isMain?: boolean;
};

const HomeHero: React.FC<HeroProps> = () => {
  return (
    <>
      <Hero />
      <GlassTopPicks />
    </>
  );
};

export default HomeHero;
