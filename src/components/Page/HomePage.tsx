import React from "react";
import HomeHero from "../Hero/HomeHero";
import HomeMain from "../Main/HomeMain";
import SliderOverlay from "../MultiComp/SliderOverlay";
import HomeOnboarding from "../Onboarding/HomeOnboarding";
export default function HomePage() {
  return (
    <>
      <SliderOverlay />
      <HomeHero />
      <HomeOnboarding />
      <HomeMain />
    </>
  );
}
