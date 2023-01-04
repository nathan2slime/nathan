import Head from 'next/head';

import Card from '../components/card';
import Navbar from '../components/navbar';

import { projects } from '../mocks';
import { ProjectsWrapper } from '../styles/projects.styles';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Head>
        <title>Projects | Francisco Cajlon</title>
      </Head>

      <Navbar name="Projects" />

      <section>
        {projects.map(project => (
          <Card data={project} key={Math.random()} />
        ))}
      </section>
    </ProjectsWrapper>
  );
};

export default Projects;

export type ProjectData = {
  type?: string;
  href?: string;
  title: string;
  techs: React.ReactNode[];
  github: string;
  description: string;
  icon: string;
};
