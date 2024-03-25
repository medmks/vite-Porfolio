import {
  mobile,
  backend,
  creator,
  web,
  BlogAr,
  typescript,
  reactjs,
  P2,
  tailwind,
  nodejs,
  mongodb,
  git,
  wp1,
  wp2,
  wp3,

  jobit,



  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ionic Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [



  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Internship frontend Developer",
    company_name: "webenclic",
    icon: "https://webenclic.com/wp-content/uploads/2023/06/Logo-wec-pro1-e1686499174246.png",
    iconBg: "#383E56",
    date: "october 2023 - december 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ], 
  },
  {
    title: "Internship FullStack Developer",
    company_name: "Tekency Web Digital Agency",
    icon: "https://tekency.com/wp-content/uploads/2020/05/Logo-240.png",
    iconBg: "#383E56",
    date: "February 2024 - April 2024",
    points: [
      "Developing and maintaining Shopify applications using Remix.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ], 
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Activities Track",
    description:"TrackApp is web application aims to collects daily activities data and tasks and mesuring the estimated time using charts for targeted task. the app also can read CSV file imported from Notion template,and represent these data as chart",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: P2,
    source_code_link: "https://github.com/medmks/TrackApp",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "First Arabic Blog",
    description:
      "A first arabic blog platform that allows users to read and engage with their interests and also encorage content writers to post their works in the arabic way.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: BlogAr,
    source_code_link: "https://github.com/medmks/vite-mern-auth-blog",
  },
];

const WordpressProjects = [

  {
    name: "Randonne Maroc",
    description:"Randonnée Maroc is a site dedicated to hiking on which you can find many destination packages in Morocco. This site Mohamed bennouri, an organizer of trekking and hiking in Morocco and mountain and desert guide.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: wp1,
    source_code_link: "https://github.com/medmks/TrackApp",
  },
  {
    name: "BBKTours",
    description:
      "BBK TOURS is a tourist transportation company, it provides reliable, comfortable and secure transportation for tourists, while allowing them to discover local attractions and historical sites in the area.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },

    ],
    image: wp2,
    source_code_link: "https://github.com/",
  },
  {
    name: "MultiservicesPro",
    description:
"Trusted and renowned company that offers a wide range of services to individuals and businesses around the world. We strive to simplify and facilitate various processes, thereby ensuring a seamless experience for our customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },

    ],
    image: wp3,
    source_code_link: "https://github.com/medmks/vite-mern-auth-blog",
  },
];

export { services, technologies, experiences, testimonials, WordpressProjects,projects };
