import React from "react";
import TailHero from "./TailHero";
import TailNav from "./TailNav";

type HeaderProps = {
  isMain?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <TailNav />
      <TailHero />
    </>
  );
};

export default Header;
