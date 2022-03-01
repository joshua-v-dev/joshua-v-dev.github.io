import React from "react";
import Footer from "../components/Footer";
import TailNav from "../components/TailNav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <TailNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
