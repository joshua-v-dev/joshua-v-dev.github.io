import React from "react";
import Particles from "../components/Particles/index";
import Timeline from "../components/TimeLine";
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
      <Timeline />
      <ProjectsPage />
    </Layout>
  );
};

export default Home;
