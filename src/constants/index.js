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
  frogger,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  resumepng,
  trashpandas,
  nwnc
} from '../assets';

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
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
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
    name: 'React JS',
    icon: reactjs,
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
    title: 'Business Process Engineer',
    company_name: 'NWN Carousel',
    icon: nwnc,
    iconBg: '#333333',
    date: 'Aug 2024 - present'
  },
  {
    title: 'Engineering Intern',
    company_name: 'Product Advisory',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Mar 2023 - Aug 2023',
  },
  {
    title: 'Engineering Fellow',
    company_name: 'General Assembly',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2023 - Sep 2023',
  },
  {
    title: 'Sixth Grade Grammar Teacher',
    company_name: 'The Geneva School of Manhattan',
    icon: dcc,
    iconBg: '#d3d3d3',
    date: 'Aug 2021 - Jul 2024',
  },
  {
    title: 'Campus Tour Guide, Event Planner',
    company_name: "The Kings College",
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2017 - Jun 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: '@trash.pandas_ofnyc',
    description:
      'React Application with a mock instagram feed and a SQL library to display the data collected by @trash.pandas_ofnyc.',
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
    image: trashpandas,
    repo: 'https://github.com/m-j-terry/TrashPandasofNYC',
    demo: 'https://trash-pandasof-nyc.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Frogger',
    description:
      'Browser-based frogger game with scrolling capabilities, difficulty settings, and a scoreboard to track current and high-scores.',
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
    image: frogger,
    repo: 'https://github.com/m-j-terry/unit-1-project',
    demo: 'https://m-j-terry.github.io/unit-1-project/',
  },
  {
    id: 'project-3',
    name: 'Bazaar',
    description: 'Collaborative project designed to mimic an online marketplace application such as Etsy.',
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
    image: math,
    repo: 'https://github.com/joe-bor/Etsy_Capstone',
    demo: 'https://bazaar.hlysllrs.me/home',
  },
  {
    id: 'project-4',
    name: 'Knightly News',
    description: `Multi-page MERN-stack application for student run newspaper at The Geneva School of Manhattan.`,
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
    image: movie,
    repo: 'https://github.com/m-j-terry/knightly_news',
    demo: 'https://knightlynews.mjterry.me/',
  },
  {
    id: 'project-5',
    name: 'ATS Resume Checker',
    description:
      'Simple-to-use React Application that checks a job description and resume for buzzwords.',
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
    image: resumepng,
    repo: 'https://github.com/m-j-terry/resume_checker',
    demo: 'https://ats-resume-checker.mjterry.me/',
  }
];

export { services, technologies, experiences, projects };
