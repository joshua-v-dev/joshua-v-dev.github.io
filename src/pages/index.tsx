import React from "react";
import Particles from "../components/Particles/index";
import Projects from "../components/Projects";
import Timeline from "../components/TimeLine";
import Layout from "../layout/Layout";
import ProjectsPage from "../components/ProjectsPage";
import ImageCarousel from "../components/ImageCarousel";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <Layout>
      <Particles />
      <Header />
      <Projects />
      <ImageCarousel />
      <Timeline />
      <ProjectsPage />
    </Layout>
  );
};

export default Home;
