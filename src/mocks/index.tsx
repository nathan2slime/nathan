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
  LogoStencil,
} from 'react-ionicons';

import { ProjectData } from '../pages/projects';

export const projects: ProjectData[] = [
  {
    href: 'https://tartarus-county.vercel.app',
    github: 'https://github.com/nathan2slime/tartarus',
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
      'Obtain information from a Brazilian municipality',
  },
  {
    type: 'PWA',
    description: 'Real-time tracking of artificial satellites',
    icon: 'https://spacekrypton.vercel.app/logo512.png',
    github: 'https://github.com/nathan2slime/spacekrypton',
    techs: [
      <LogoReact />,
      <LogoNodejs />,
      <LogoCss3 />,
      <LogoStencil />,
      <LogoHtml5 />,
      <i className="ri-database-2-fill" />,
      <i className="ri-open-source-fill" />,
      <LogoPwa />,
      <LogoJavascript />,
      <LogoVercel />,
    ],
    href: 'https://spacekrypton.vercel.app/',
    title: 'Space Krypton',
  },
  {
    github: 'https://github.com/nathan2slime/cars',
    type: 'App',
    icon: 'https://github.com/nathan2slime/callisto/blob/master/app/android/app/src/main/res/drawable/icon.png?raw=true',
    techs: [
      <LogoReact />,
      <LogoNodejs />,
      <LogoAndroid />,
      <LogoJavascript />,
      <i className="ri-open-source-fill" />,
      <i className="ri-database-2-fill" />,
    ],
    title: 'Callisto',
    description: 'Simple used car management system',
  },
];
