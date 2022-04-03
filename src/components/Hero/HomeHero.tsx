import HomeOnboarding from "../../components/Onboarding/HomeOnboarding";
import React from "react";
import TailHero from "./TailHero";

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
