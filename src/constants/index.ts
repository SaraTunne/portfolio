import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "SAAS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "php Developer",
    companyName: "freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "E-Commerce Platform: A full-stack PHP app with an intuitive admin panel and MySQL for streamlined data management.", ],
  },
  {
    title: "React Native Developer",
    companyName: "freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "A responsive app providing real-time weather data, demonstrating my skill in API integrations.",],
  },
  {
    title: "Web Developer",
    companyName: "freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.Designed and developed responsive, high-converting pages using HTML, CSS, and JavaScript.",],
  },
  {
    title: "SAAS Developer",
    companyName: "freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "A conversational AI-inspired project built to replicate advanced chatbot functionality.",],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "ICodePath’s Intermediate Web Development Fall 2024 Course",
    name: "CODEPATH",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Completed  CodePath’s Intro to Cybersecurity Fall 2024 Course.",
    name: "CODEPATH",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Current Computer Science Student",
    name: "NVCCS",
    designation: "",
    company: "",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "RaiStore",
    description:
      "A Full-Stack E-commerce Website with Admin pannel.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
     
    ],
    image: "src\assets\Screenshot (109).png",
    sourceCodeLink: "https://github.com/SaraTunne/raistore.git",
  },
  {
    name: "bloging app",
    description:
      "Blogging Web application for women in stem a codepath project.",
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
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: "src\assets\Screenshot (110).png",
    sourceCodeLink: "https://github.com/SaraTunne/femininomenon.git",
  },
  {
    name: "chat gpt clone",
    description:
      "an AI application.",
    tags: [
      {
        name: "Vercel AI SDK",
        color: "blue-text-gradient",
      },
      {
        name: "eslint",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: "src\assets\Screenshot (111).jpg",
    sourceCodeLink: "https://github.com/SaraTunne/chatgpt-clone.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
