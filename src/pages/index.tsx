import React from 'react';
import Particles from '../components/Particles/index';
import Projects from '../components/Projects';
import Timeline from '../components/TimeLine';
import Layout from './layout/Layout';
import ProjectsPage from 'src/components/ProjectsPage';

const Home: React.FC = () => {
  return (
    <Layout>
      <Particles />
      <Projects />
      <Timeline />
      <ProjectsPage />
    </Layout>
  );
};

export default Home;
