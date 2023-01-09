import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Session } from "inspector";
import { type AppType } from "next/app";
import ParticlesContainer from "~/components/ParticlesContainer";

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

        <main className={interVariable.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
