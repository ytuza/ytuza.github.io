import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  cerv,
  inka,
  chazki,
  revelo,
  yuju,
  smart,
  coreCapital,
  fincite,
  chazkiW,
  yujuW,
} from '../assets';

import { SiDjango, SiReact, SiPython, SiJavascript, SiTypescript, SiCplusplus, SiCsharp, SiPostgresql, SiGit, 
  SiDocker, SiGraphql, SiGooglecloud, SiFirebase, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaNodeJs, FaJava, FaAws } from "react-icons/fa";


const techIcons = [
  {
    name: 'React JS',
    icon: SiReact,
  },
  {
    name: 'Django',
    icon: SiDjango,
  },
  {
    name: 'Node JS',
    icon: FaNodeJs,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'C++',
    icon: SiCplusplus
  },
  {
    name: 'C#',
    icon: SiCsharp
  },
  {
    name: 'Java',
    icon: FaJava
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql
  },
  {
    name: 'MySQL',
    icon: SiMysql
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss
  },
  {
    name: 'Git',
    icon: SiGit
  },
  {
    name: 'Docker',
    icon: SiDocker
  },
  {
    name: 'GraphQL',
    icon: SiGraphql
  },
  {
    name: 'Google Cloud',
    icon: SiGooglecloud
  },
  {
    name: 'Firebase',
    icon: SiFirebase
  },
  {
    name: 'AWS',
    icon: FaAws
  }
]

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps & Cloud',
    icon: prototyping,
  },
  {
    title: 'Mobile Developer',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'CERV',
    icon: cerv,
    iconBg: '#333333',
    date: 'Jan 2021 - apr 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Inka Labs',
    icon: inka,
    iconBg: '#333333',
    date: 'Mar 2021 - Oct 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Chazki',
    icon: chazki,
    iconBg: '#333333',
    date: 'Nov 2021 - Sep 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Inka Labs',
    icon: inka,
    iconBg: '#333333',
    date: 'Apr 2022 - Jun 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Yuju',
    icon: yuju,
    iconBg: '#333333',
    date: 'Jul 2023 - Now',
  },
  {
    title: 'AI Code Reviewer',
    company_name: 'Revelo',
    icon: revelo,
    iconBg: '#333333',
    date: 'Jun 2024 - Now',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'smart',
    description: 'Construction company, design and architecture studio',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: smart,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://www.smartconstructora.com/',
  },
  {
    id: 'project-2',
    name: 'Core Capital saf',
    description:
      'Investment Fund Management Company',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: coreCapital,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://corecapital.com.pe/',
  },
  {
    id: 'project-3',
    name: 'fincite',
    description: 'WealthTech Software Provider and one of Germany\'s fastest-growing companies',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: fincite,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://www.fincite.de/',
  },
  {
    id: 'project-4',
    name: 'Chazki',
    description: `First and Last Mile Logistics Platform`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: chazkiW,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://www.chazki.com/',
  },
  {
    id: 'project-5',
    name: 'Yuju',
    description:
      'SaaS platform to sell from a single interface in the largest marketplaces in Latin America',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: yujuW,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://yuju.io/',
  },
];

export { services, technologies, experiences, projects, techIcons };
