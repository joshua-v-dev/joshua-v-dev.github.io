import React from "react";
import Layout from "../layout/Layout";
import ProjectsPage from "../components/ProjectsPage";
import Cta from "../components/Cta";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <Layout>
      <ImageCarousel />
      <ProjectsPage />
      <Cta />
    </Layout>
  );
};

export default Home;
