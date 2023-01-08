
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Session } from "inspector";
import { type AppType } from "next/app";
import ParticlesContainer from "src/components/Animations/Particles/ParticlesContainer";
// import Footer from "src/components/Footer/Footer";
// import Nav from "src/components/Nav/Nav";

import { ThemeProvider } from "next-themes";
import "../styles/main.css";

const interVariable = Inter();

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (

    <>

      <ThemeProvider attribute="class">
        <ParticlesContainer />
        {/* <Nav /> */}
        <main className={interVariable.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
        {/* <Footer /> */}
      </ThemeProvider>


    </>

  );
};

export default MyApp;
