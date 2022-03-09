import React from "react";
import TopPicks from "./TopPicks";
import ImageCarousel from "./ImageCarousel";
import SliderOverlay from "./SliderOverlay";
import Cta from "./Cta";
import Onboarding from "../components/Onboarding";

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
