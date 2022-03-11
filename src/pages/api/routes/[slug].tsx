/* eslint-disable @typescript-eslint/require-await */
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { projects } from "../../../database/database";

const Details = ({ htmlString }: { htmlString: string }) => {
  return (
    <>
      <h1>This is the slug file</h1>
      <pre>{projects}</pre>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export const getStaticProps = async ({ ...slug }: { slug: unknown }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const  projects = fs.readFileSync( path.join( `${slug} + ".tsx" `) ).toString()
  const  parsedProjects = matter( projects )

  const  toString = `${( parsedProjects.content ) }`

  return  { props: { toString } }
};


export const getStaticPaths = async () => {
  const files = fs.readdirSync(__dirname);

  const paths = files.map((__filename) => ({
    params: {
      slug: __filename.replace(".tsx", ""),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Details;
