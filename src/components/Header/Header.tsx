import React from "react";
import TailNav from "./TailNav";
import Particles from "../Animations/Particles/index";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <TailNav />
      <Particles />
    </>
  );
};

export default Header;
