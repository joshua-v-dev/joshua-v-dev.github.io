import React from "react";
import Particles from "../Animations/Particles/index";
import TailNav from "./TailNav";


type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () =>
{
  return (
    <>
      <Particles />
      <TailNav />

    </>
  );
};

export default Header;
