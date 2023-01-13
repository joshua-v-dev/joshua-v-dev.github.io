// import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Session } from "inspector";
import { type AppType } from "next/app";

import { ThemeProvider } from "next-themes";
import Container from "~/components/Container";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import Nav from "~/components/Nav";
import ParticlesContainer from "~/components/ParticlesContainer";
import "../styles/main.css";

// const interVariable = Inter();

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <ParticlesContainer />
      <ThemeProvider attribute="class">
        <MobileMenu />
        <Nav />

        <Container>
          <Component {...pageProps} />
          <Analytics />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
