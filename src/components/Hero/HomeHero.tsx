import HomeOnboarding from "../Onboarding/HomeOnboarding";
import React from "react";
import Hero from "../MultiComp/Hero";

type HeroProps = {
  isMain?: boolean;
};

const HomeHero: React.FC<HeroProps> = () => {
  return (
    <>
      <Hero />
      <HomeOnboarding />
    </>
  );
};

export default HomeHero;
