import Head from "next/head";

const Container = (props: { [x: string]: any; children: any }) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Joshua Vaughn – Developer, DJ, Designer.",
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1644349577/V_nkqavb.svg",
    type: "website",
    date: "Add date component here",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />

        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href="https://joshuavstories.com" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Joshua Vaughn" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joshuavstories1529" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      {children}
    </>
  );
};

export default Container;
