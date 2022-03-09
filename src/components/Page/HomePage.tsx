import React from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import SliderOverlay from "../MultiComp/SliderOverlay";
export default function HomePage() {
  return (
    <>
      <SliderOverlay />
      <Hero />
      <Main />
    </>
  );
}
