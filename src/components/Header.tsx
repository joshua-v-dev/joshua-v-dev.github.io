import React from "react";
import TailHero from "../components/TailHero";
import Cta from "../components/Cta";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <TailHero />
      <Cta />
    </>
  );
};

export default Header;
