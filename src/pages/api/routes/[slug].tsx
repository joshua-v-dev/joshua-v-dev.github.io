import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["slug1", "slug2"];
  const paths = arr.map((slug) => {
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // This is where the error occurs
  const { slug } = context.params as IParams; // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
  const props = fetch(`/api/${slug}`);
  return { props };
};
