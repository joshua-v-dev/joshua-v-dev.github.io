import TailNav from "components/Nav/Nav";
import React from "react";
import Particles from "../Animations/Particles/index";

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
