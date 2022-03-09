import React from "react";
import TopPicks from "../Onboarding/TopPicks";
import ImageCarousel from "../MultiComp/ImageCarousel";
import SliderOverlay from "../MultiComp/SliderOverlay";
import Cta from "../MultiComp/Cta";
import Onboarding from "../Onboarding/Onboarding";

export default function HomePage() {
  return (
    <>
      <SliderOverlay />
      <Onboarding />
      <TopPicks />
      <ImageCarousel />
      <Cta />
    </>
  );
}
