import HomeOnboarding from "../Onboarding/HomeOnboarding";
import React from "react";
import TailHero from "../MultiComp/Hero";

type HeroProps = {
  isMain?: boolean;
};

const HomeHero: React.FC<HeroProps> = () =>
{
  return (
    <>
      <TailHero />
      <HomeOnboarding />
    </>
  );
};

export default HomeHero;
