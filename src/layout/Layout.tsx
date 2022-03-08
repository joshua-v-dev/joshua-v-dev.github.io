import React from "react";
import Particles from "../components/Particles/index";
import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
     
      <Header />
       <Particles />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
