import React from "react";
import TailHero from "./TailHero";
import Onboarding from "../Onboarding/Onboarding";

type HeroProps = {
  isMain?: boolean;
};

const HomeHero: React.FC<HeroProps> = () => {
  return (
    <>
      <TailHero />
      <Onboarding />
    </>
  );
};

export default HomeHero;
