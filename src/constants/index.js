import {
  aws,
  rikai,
  narnoo,
  exodo,
  flowlogic,
  financetracker,
  weatherapp,
  minitwitter,
  clientportal,
  agencyhub,
} from "../assets";

export const YEARS_EXPERIENCE = 4;

export const RESUME_URL = `${import.meta.env.BASE_URL}Joshua%20Gamiao%20-%20Resume.pdf`;

export const navLinks = [
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "stack", title: "Stack" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: `${YEARS_EXPERIENCE}+`, label: "Years building for the web" },
  { value: "5", label: "Companies across AU, JP & DE" },
  { value: "1", label: "Year as an AI engineer" },
  { value: "2", label: "Full-stack apps you can log into" },
];

// AI journey, shown in the "What I do" section.
export const aiJourney = [
  {
    year: "2022",
    title: "AI in my daily workflow",
    body: "Started using AI tools alongside my development work.",
  },
  {
    year: "2024",
    title: "Fully AI-first",
    body: "Two years of building with AI at the centre of how I design, code, test and ship.",
  },
  {
    year: "2025",
    title: "AI engineer",
    body: "The past year working as an AI engineer as well as a full-stack developer.",
  },
];

// New portfolio applications built on Next.js + Supabase.
export const featuredProjects = [
  {
    id: "client-portal",
    index: "01",
    name: "Client Portal Mini",
    tagline: "Multi-tenant client portal for a digital agency",
    description:
      "A client portal with project tracking, onboarding, file management, messaging and role-based access. The focus is Supabase row-level security: a client can't read another client's records, even by changing IDs in a request.",
    highlights: [
      "Tenant isolation enforced in Postgres with RLS, with a live in-app page that proves it",
      "Private file storage with type, size and magic-byte validation and short-lived signed links",
      "Configurable onboarding checklists, milestones and a trigger-written project history",
      "Accessible by default: axe checks run in CI alongside Playwright end-to-end tests",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Postgres RLS", "Tailwind", "Playwright"],
    image: clientportal,
    live: "https://client-portal-mini.vercel.app",
    github: "https://github.com/aws-jgamiao/client-portal-mini",
  },
  {
    id: "ops-hub",
    index: "02",
    name: "Agency Operations Hub",
    tagline: "Internal dashboard an agency team uses to run the week",
    description:
      "An internal agency dashboard with task management, client requests, audit logs and a Slack integration demo. It also includes REST API endpoints, database permissions and automated testing.",
    highlights: [
      "Workspace-scoped permissions with RLS and trigger-enforced field rules",
      "Immutable, column-by-column audit log that nobody can edit",
      "Optimistic concurrency (409 on stale writes) and keyset pagination",
      "Outbox-based Slack integration with retries and rate-limit handling",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PL/pgSQL", "REST API", "Vitest"],
    image: agencyhub,
    live: "https://agency-operations-hub-woad.vercel.app",
    github: "https://github.com/aws-jgamiao/agency-operations-hub",
  },
];

export const projects = [
  {
    name: "Finance Tracker",
    description:
      "Track income, expenses and savings with budgeting tools, financial insights and visual reports.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: financetracker,
    link: "https://aws-jgamiao.github.io/finance-tracker/",
  },
  {
    name: "Weather App",
    description:
      "Real-time weather, forecasts and conditions for any city, with search by location.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: weatherapp,
    link: "https://aws-jgamiao.github.io/weather-app/",
  },
  {
    name: "Mini Twitter",
    description:
      "A lightweight take on Twitter: post, like and interact with other users in a fast, minimal feed.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: minitwitter,
    link: "https://aws-jgamiao.github.io/mini-twitter-demo/",
  },
];

// Current roles first (main role on top), then past roles by end date.
export const experiences = [
  {
    title: "Software Engineer",
    company: "FlowLogic",
    icon: flowlogic,
    current: true,
    date: "Aug 2025 – Present",
    location: "Remote · Australia",
    points: [
      "Building and maintaining features across FlowLogic's software platform as part of the core engineering team.",
      "Working on mobile and TypeScript API tooling that connects to the FlowLogic platform.",
      "Collaborating with an Australian-based product and engineering team.",
    ],
    stack: ["TypeScript", "React", "Node.js"],
  },
  {
    title: "Front-end Developer",
    company: "Narnoo",
    icon: narnoo,
    date: "April 2024 – Present",
    location: "Remote · Australia",
    points: [
      "Built and maintained an e-commerce web application using Nuxt.js and Node.js.",
      "Collaborated with an Australian-based developer to refine and improve the application.",
      "Focused on responsive design and cross-browser compatibility.",
    ],
    stack: ["Nuxt.js", "Node.js"],
  },
  {
    title: "Software Developer",
    company: "Rikai Pty Ltd",
    icon: rikai,
    date: "June 2024 – Dec 2025",
    location: "Remote · Australia",
    points: [
      "Developed and maintained a web application using Vue.js and GraphQL.",
      "Partnered with an Australian-based software developer in regular reviews to keep quality high.",
      "Implemented responsive design and a seamless experience across browsers.",
    ],
    stack: ["Vue.js", "GraphQL"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Exodo",
    icon: exodo,
    date: "May 2025 – Nov 2025",
    location: "Remote · Germany",
    points: [
      "Developed a web application using Next.js with Supabase storage.",
      "Implemented both UI and backend components for a cohesive full-stack solution.",
      "Partnered with a freelance expat in Germany to deliver a robust application.",
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    title: "Associate Research & Development Engineer",
    company: "Advanced World Solutions, Inc.",
    icon: aws,
    date: "Nov 2022 – Nov 2024",
    location: "Philippines · Japanese clients",
    points: [
      "Designed, developed and maintained web applications using React.js and Node.js.",
      "Worked with cross-functional teams, including Japanese developers and QA engineers.",
      "Ensured responsive design and seamless cross-browser compatibility.",
      "Conducted code reviews to improve code quality and performance.",
    ],
    stack: ["React", "Node.js"],
  },
];

export const stack = [
  {
    group: "AI & automation",
    highlight: true,
    items: [
      "Claude",
      "Claude Code",
      "Cursor",
      "ChatGPT",
      "Grok",
      "Gemini",
      "GitHub Copilot",
      "n8n",
      "Hermes",
      "OpenClaw",
      "MCP servers",
      "Prompt engineering",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Three.js"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Supabase", "PostgreSQL", "Row-level security", "GraphQL", "REST APIs", "MongoDB", "Zod"],
  },
  {
    group: "Testing & delivery",
    items: ["Vitest", "Playwright", "pgTAP", "axe", "GitHub Actions", "Docker", "Vercel", "Git", "Figma"],
  },
];

export const services = [
  {
    title: "Full-stack web apps",
    body: "Next.js and Node applications from database schema to polished UI.",
  },
  {
    title: "Secure data access",
    body: "Postgres row-level security, role-based access and audit trails that hold up to tampering.",
  },
  {
    title: "Front-end that scales",
    body: "React, Vue and Nuxt interfaces that stay responsive, accessible and maintainable.",
  },
  {
    title: "Legacy modernisation",
    body: "Migrating older systems to modern stacks without losing what already works.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/aws-jgamiao" },
];
