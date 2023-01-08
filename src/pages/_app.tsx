
import { Session } from "inspector";
import { type AppType } from "next/app";
import ParticlesContainer from "src/components/Animations/Particles/ParticlesContainer";
// import Footer from "src/components/Footer/Footer";
import Nav from "src/components/Nav/Nav";

import { ThemeProvider } from "next-themes";
import "../styles/main.css";
const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (

    <>
      <ParticlesContainer />

      <Nav />
      <ThemeProvider attribute="class">
        <main className="container">
          <Component {...pageProps} />

        </main>
      </ThemeProvider>
      {/* <Footer /> */}

    </>

  );
};

export default MyApp;
