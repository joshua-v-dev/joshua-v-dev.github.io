
import React from "react";


type HeaderProps = {

  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>

      {children}
    </>
  );
};

export default Header;
