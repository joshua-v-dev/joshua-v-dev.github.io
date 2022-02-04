import React from 'react';
import TailNav from '../components/TailNav';
import TailHero from '../components/TailHero';
import Cta from '../components/Cta';

type HeaderProps = {
  isMain: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <TailNav />
      <TailHero />
      <Cta />
    </>
  );
};

export default Header;
