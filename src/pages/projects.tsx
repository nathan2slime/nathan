import Head from 'next/head';

import Card from '../components/card';
import Navbar from '../components/navbar';

import { projects } from '../mocks';
import { ProjectsWrapper } from '../styles/projects.styles';

const Projects = () => {
 
  return (
    <ProjectsWrapper>
      <Head>
        <title>Francisco Cajlon</title>
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
  title: string;
  type?: string;
  href?: string;
  techs: React.ReactNode[];
  github: string;
  description: string;
  icon: string;
};
