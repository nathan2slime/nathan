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

import { ProjectData } from '../pages/projects';

export const projects: ProjectData[] = [
  {
    href: 'https://tartarus-county.vercel.app',
    github: '',
    type: 'PWA',
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
    description:
      'Project with functionality to obtain information from a Brazilian municipality (mesoregion, microregion, region, uf and etc), through the IBGE API.',
  },
  {
    github: 'https://github.com/nathan2slime/cars',
    type: 'App',
    icon: 'https://github.com/nathan2slime/cars/raw/master/client/assets/cars_wall.svg',
    techs: [
      <LogoReact />,
      <LogoNodejs />,
      <GitCommit />,
      <LogoAndroid />,
      <LogoJavascript />,
      <i className="ri-open-source-fill" />,
      <i className="ri-database-2-fill" />,
      <i className="ri-git-repository-fill" />,
    ],
    title: 'Callisto',
    description:
      'Simple used car management system. With car registration, removal and editing, as well as user authentication and registration.',
  },
];
