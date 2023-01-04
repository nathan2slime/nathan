import Head from 'next/head';
import {
  LogoReact,
  LogoNodejs,
  GitCommit,
  LogoCss3,
  LogoHtml5,
  LogoJavascript,
  LogoAndroid,
  LogoPwa,
  LogoVercel,
} from 'react-ionicons';

import Card from '../components/card';
import Navbar from '../components/navbar';

import { ProjectsWrapper } from '../styles/projects.styles';

const Projects = () => {
  const projects: ProjectData[] = [
    {
      href: 'https://tartarus-county.vercel.app',
      github: '',
      icon: 'https://tartarus-county.vercel.app/logo192.png',
      techs: [
        <LogoReact />,
        <LogoNodejs />,
        <GitCommit />,
        <LogoCss3 />,
        <LogoHtml5 />,
        <i className="ri-git-repository-fill" />,
        <i className="ri-open-source-fill" />,
        <LogoPwa />,
        <LogoJavascript />,
        <LogoVercel />,
      ],
      title: 'Tartarus',
      description: 'Obtain information from a Brazilian municipality',
    },
    {
      github: 'https://github.com/nathan2slime/cars',
      icon: 'https://github.com/nathan2slime/cars/raw/master/client/assets/cars_wall.svg',
      techs: [
        <LogoReact />,
        <LogoNodejs />,
        <GitCommit />,
        <LogoAndroid />,
        <LogoJavascript />,
        <i className="ri-open-source-fill" />,
        <i className="ri-git-repository-fill" />,
      ],
      title: 'Callisto',
      description: 'System to search used cars with admin',
    },
  ];

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
  href?: string;
  techs: React.ReactNode[];
  github: string;
  description: string;
  icon: string;
};
