import { Analytics } from "@vercel/analytics/react";
import { Session } from "inspector";
import { type AppType } from "next/app";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Container from "~/components/Container";
// import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import Nav from "~/components/Nav";
import "../styles/main.css";

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider attribute="class">
          <Container>


            <MobileMenu />
            <Nav />

            <Component {...pageProps} />

            <Analytics />

            {/* <Footer /> */}
          </Container>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
