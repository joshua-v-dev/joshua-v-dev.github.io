
import React from "react";
import Particles from "../Animations/Particles/index";
import Nav from "../Nav/Nav";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Particles />
      <Nav />
    </>
  );
};

export default Header;
