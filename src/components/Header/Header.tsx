import React from "react";
import Particles from "../Animations/Particles/index";
import TailNav from "./TailNav";
import SliderOverlay from "../MultiComp/SliderOverlay";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <SliderOverlay />
      <Particles />
      <TailNav />
    </>
  );
};

export default Header;
