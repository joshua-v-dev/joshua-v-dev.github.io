import React from "react";
import Particles from "../components/Particles/index";
import TopPicks from "../components/TopPicks";
import Timeline from "../components/TimeLine";
import Layout from "../layout/Layout";
import ProjectsPage from "../components/ProjectsPage";
import Header from "../components/Header";
import "tw-elements";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <Layout>
      <Particles />
      <Header />
      <TopPicks />
      <ImageCarousel />
      <Timeline />
      <ProjectsPage />
    </Layout>
  );
};

export default Home;
