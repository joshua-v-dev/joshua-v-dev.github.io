import Head from "next/head";
// import Footer from "./Footer";
import Nav from "./Nav";

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props;
  // const router = useRouter();
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
    <div className="bg-transparent dark:bg-transparent">
      <Head>
        <title>{meta.title}</title>
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

      <Nav />

      {children}

      {/* <Footer /> */}
    </div>
  );
}
