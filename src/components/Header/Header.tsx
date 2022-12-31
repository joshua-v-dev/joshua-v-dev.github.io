
import React from "react";
import ParticlesContainer from "../Animations/Particles/ParticlesContainer";
import Nav from "../Nav/Nav";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <ParticlesContainer />
      <Nav />
    </>
  );
};

export default Header;
