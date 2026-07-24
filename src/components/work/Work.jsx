// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  realstate,
  glassOcean,
  piolecImage,
  gemini,
  monpatient,
  StoryCareer,

} from "../../assets/projects";

const projects = [
  {
    name: "Real Estate Platform",
    description:
      "A full-stack real estate app built with Next.js, Chakra UI, and Prisma. Features property listings, advanced search, and user authentication.",
    stacks: ["Next.js", "Chakra UI", "Prisma", "PostgreSQL", "JWT"],
    link: "https://realestat.vercel.app/Index",
    github: "https://github.com/akajdid-mostafa/realestat",
    image: realstate,
    category: "Fullstack",
  },
  {
    name: "Glass Ocean",
    description:
      "A visually stunning portfolio or landing page built with Next.js and Material-UI. Features a glass morphism design, smooth animations, and responsive layout.",
    stacks: [
      "Next.js",
      "Material-UI",
      "JavaScript",
      "GSAP",
      "Responsive Design",
    ],
    link: "https://glass-ocean.vercel.app/en", // Live demo link added
    github: "https://github.com/akajdid-mostafa/glass-ocean",
    image: glassOcean, // Replace with the actual image variable or path
    category: "Frontend",
  },
  {
    name: "Piolec",
    description:
      "A dynamic web application built with Next.js and Tailwind CSS, designed for managing and exploring electrical products efficiently. Features an intuitive UI, responsive design, and seamless navigation.",
    stacks: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    link: "https://piolec.vercel.app/",
    github: "https://github.com/akajdid-mostafa/Piolec",
    image: piolecImage, // Replace with the actual image variable or path
    category: "Frontend",
  },
 
  {
    name: "Monpatient Sass",
    description:
      "Moroccan healthcare platform for home visits, prescriptions, and medical coordination.",
    stacks: ["Next.js", "Redux Toolkit", "Node.js", "Fastify", "PostgreSQL"],
    link: "https://monpatient.vercel.app/auth/login",
    github: "https://github.com/sayyidmarvanvt/Exedo-estate",
    image: monpatient,
    category: "Fullstack",
  },
  {
    name: "storycareer",
    description:
      "StoryCareer – Career tips and success stories to help professionals grow.",
    stacks: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Clerk",
    ],
    link: "https://storycareer-gilt.vercel.app/",
    github: "https://github.com/akajdid-mostafa/storycareer",
    image: StoryCareer,
    category: "Fullstack",
  },
  {
    name: "Gemini",
    description:
      "A generative AI application utilizing the Gemini API, with efficient state management via Context API.",
    stacks: ["React", "Gemini API", "Vercel"],
    link: "https://gemini-alpha-rose.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/Gemini",
    image: gemini,
    category: "React",
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">A collection of work I’m proud of</span>
      <Projects projects={projects} />
    </section>
  );
};

export default Work;
