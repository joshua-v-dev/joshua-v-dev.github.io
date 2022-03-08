import React from "react";
import TailHero from "../components/TailHero";
import Acomplishments from "../components/Acomplishments";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <TailHero />
      <Acomplishments />
    </>
  );
};

export default Header;
