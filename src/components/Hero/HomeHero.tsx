import React from "react";
import Hero from "../MultiComp/Hero";
import HomeOnboarding from "../Onboarding";

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
