import React from "react";
import Layout from "../layout/Layout";
import ProjectsPage from "../components/ProjectsPage";
import Cta from "../components/Cta";

const Home: React.FC = () => {
  return (
    <Layout>
      <ProjectsPage />
      <Cta />
    </Layout>
  );
};

export default Home;
