import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
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
  const projects = fs.readFileSync(path.join(slug + ".tsx")).toString();
  const parsedProjects = matter(projects);

  const htmlString = `${marked(parsedProjects.content)}`;

  return { props: { htmlString } };
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
