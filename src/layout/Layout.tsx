import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer>{children}</Footer> 
      </>
  );
};

export default Layout;
