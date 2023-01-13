// component that skips to the main content of the page

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SkipToContent() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (_url: string) => {
      const mainContent = document.getElementById("main-content");
      if (mainContent) mainContent.focus();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Link
        href="#main-content"
        className="z-50 mx-auto flex items-center justify-center bg-transparent py-20 text-white"
      >
        Skip to main content
      </Link>
    </>
  );
}
