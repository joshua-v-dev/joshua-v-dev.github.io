import React from 'react';
import Particles from '../components/Particles/index';
import Projects from '../components/Projects';
import Acomplishments from '../components/Acomplishments';
import Technologies from '../components/Technologies';
import Timeline from '../components/TimeLine';
import Layout from './layout/Layout';
import ProjectsPage from 'src/components/ProjectsPage';

const Home: React.FC = () => {
  return (
    <Layout>
      <Projects />
      <Particles />
      <ProjectsPage />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
