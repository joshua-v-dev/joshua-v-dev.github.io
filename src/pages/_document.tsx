// pages/_document.tsx
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default class Document extends NextDocument {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </>
        ),
      };
      // eslint-disable-next-line no-empty
    } finally {
    }
  }

  render() {
    return (
      <Html className="dark">
        <Head />
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
