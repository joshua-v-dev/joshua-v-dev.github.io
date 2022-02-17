import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import globalStyles from "./styles/globalStyles";

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default App;
