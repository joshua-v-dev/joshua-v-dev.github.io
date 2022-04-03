import React from "react";
import Particles from "../Animations/Particles/index";
import TailNav from "../Nav/TailNav";


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
