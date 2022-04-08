import TailNav from "components/Nav/TailNav";
import React from "react";
import Particles from "../Animations/Particles/index";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Particles />
      <TailNav />
    </>
  );
};

export default Header;
