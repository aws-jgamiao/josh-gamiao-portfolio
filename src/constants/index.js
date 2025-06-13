import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aws,
  rikai,
  carrent,
  jobit,
  financetracker,
  weatherapp,
  minitwitter,
  tripguide,
  threejs,
  narnoo,
  exodo
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Research & Development Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Research & Development Engineer",
    company_name: "Advanced World Solutions, Inc.",
    icon: aws,
    iconBg: "#e3d5d3",
    date: "Nov 2022 - Nov 2024",
    points: [
      "Designed, developed, and maintained web applications using React.js and Node.js.",
      "Worked closely with cross-functional teams, including Japanese developers, QA engineers, and fellow developers, to deliver high-quality products.",
      "Ensured responsive design implementation and seamless cross-browser compatibility.",
      "Conducted code reviews, offering valuable feedback to enhance code quality and performance.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Narnoo",
    icon: narnoo,
    iconBg: "#e3d5d3",
    date: "April 2024 - Present",
    points: [
      "Built and maintained an e-commerce web application using Nuxt.js and Node.js.",
      "Collaborated with an Australian-based developer, engaging in regular discussions to refine and improve the web application.",
      "Focused on responsive design principles and ensured compatibility across different browsers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Rikai Pty Ltd",
    icon: rikai,
    iconBg: "#e3d5d3",
    date: "June 2024 - Present",
    points: [
      "Developed and maintained a web application using Vue.js and GraphQL.",
      "Partnered with an Australian-based software developer, engaging in productive meetings to ensure a high-quality application.",
      "Implemented responsive design strategies and guaranteed a seamless user experience across various browsers.",
    ],
  }, 
  {
    title: "Full Stack Web Developer",
    company_name: "Exodo",
    icon: exodo,
    iconBg: "#d3e5e3",
    date: "May 2025 - Present",
    points: [
      "Developed a web application using Next.js with Supabase storage.",
      "Partnered with a freelance expat in Germany to deliver a robust application.",
      "Implemented both UI and backend components for a cohesive full-stack solution."
    ]
  }
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
    name: "Finance Tracker",
    description:
      "Web application that helps users track their income, expenses, and savings. It provides budgeting tools, financial insights, and visual reports",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: financetracker,
    source_code_link: "https://aws-jgamiao.github.io/finance-tracker/",
  },
  {
    name: "Weather App",
    description:
      "Web application that provides real-time weather updates, forecasts, and climate conditions for any location. Users can search for weather details by city",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://aws-jgamiao.github.io/weather-app/",
  },
  {
    "name": "Mini Twitter",
    "description": 
      "A simplified version of Twitter that allows users to post tweets, like, and interact with others. It delivers a lightweight and fast social media experience.",
    "tags": [
      {
        "name": "react",
        "color": "blue-text-gradient"
      },
      {
        "name": "typescript",
        "color": "green-text-gradient"
      },
      {
        "name": "tailwind",
        "color": "pink-text-gradient"
      }
    ],
    "image": minitwitter,
    "source_code_link": "https://aws-jgamiao.github.io/mini-twitter-demo/"
}

];

export { services, technologies, experiences, testimonials, projects };
