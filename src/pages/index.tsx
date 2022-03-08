import React from "react";
import Particles from "../components/Particles/index";
import Layout from "../layout/Layout";
import ProjectsPage from "../components/ProjectsPage";
import Cta from "../components/Cta";
// import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <Layout>
      <Particles />
      <Cta />
      {/* <ImageCarousel /> */}
      <ProjectsPage />
    </Layout>
  );
};

export default Home;
