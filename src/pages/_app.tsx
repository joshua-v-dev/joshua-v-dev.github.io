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
        <Container>
          <ThemeProvider attribute="class">
            <MobileMenu />
            <Nav />

            <Component {...pageProps} />

            {/* <Footer /> */}
          </ThemeProvider>
        </Container>
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default MyApp;
