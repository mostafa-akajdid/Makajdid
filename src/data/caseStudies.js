import {
  realstate,
  glassOcean,
  piolecImage,
  gemini,
  monpatient,
  StoryCareer,
} from "../assets/projects";

const caseStudies = [
  {
    id: 1,
    slug: "realstate",
    title: "Real Estate Platform",
    subtitle:
      "A full-stack property marketplace built for modern real estate — search, filter, and connect with ease.",
    description:
      "Full-stack property marketplace with advanced search and user authentication.",
    image: realstate,
    stack: ["Next.js", "Chakra UI", "Prisma", "PostgreSQL"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2 Months",
      year: "2024",
      type: "Web Application",
    },
    facts: {
      industry: "Real Estate",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Finding a property online should feel simple. Most platforms, however, overwhelm users with cluttered interfaces, slow search, and fragmented listing data. The experience feels outdated — more like a database dump than a tool designed for people.",
          "The challenge was clear: build a marketplace where searching for a home feels effortless. Fast results, clean presentation, and a path from browsing to contacting that requires almost no thought.",
        ],
        image: realstate,
        imageAlt: "Real Estate Platform showing property listings",
      },
      {
        title: "The Approach",
        text: [
          "Search was the starting point. It's the most common action on any real estate platform, so every other feature was designed to support it — not compete with it. Filtering by location, price, and type had to feel instant.",
          "The interface was kept deliberately minimal. Large property cards, clear pricing, and map integration. Users can move from browsing to contacting an agent in three taps, with no dead ends or confusing detours.",
        ],
        image: realstate,
        imageAlt: "Real Estate Platform search and filter interface",
      },
      {
        title: "The Outcome",
        text: [
          "The platform delivers a calm, focused browsing experience. Property pages load instantly, search results update in real time, and the overall feel is trustworthy without being sterile.",
          "Built on Next.js for performance, Prisma for type-safe data access, and PostgreSQL for reliability — a stack chosen for longevity, not trends.",
        ],
        image: realstate,
        imageAlt: "Real Estate Platform property detail view",
      },
    ],
    technologies: [
      "Next.js",
      "Chakra UI",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "Authentication",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    slug: "glassocean",
    title: "Glass Ocean",
    subtitle:
      "A landing page that demonstrates glassmorphism done right — transparent, layered, and alive.",
    description:
      "Landing page with glass morphism design and smooth responsive animations.",
    image: glassOcean,
    stack: ["Next.js", "Material-UI", "GSAP"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Frontend Development",
      duration: "3 Weeks",
      year: "2024",
      type: "Landing Page",
    },
    facts: {
      industry: "Design Showcase",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Concept",
    story: [
      {
        title: "The Problem",
        text: [
          "Glassmorphism is everywhere — but most implementations feel heavy. Blurred backgrounds that obscure content, low-contrast text, and effects that slow the page to a crawl. It's a trend that's easy to apply and hard to get right.",
          "The goal was to prove that glassmorphism can feel premium without sacrificing readability or speed. Depth and transparency should enhance the experience, not decorate it.",
        ],
        image: glassOcean,
        imageAlt: "Glass Ocean landing page hero section",
      },
      {
        title: "The Approach",
        text: [
          "The philosophy was restraint. Subtle blur, controlled opacity, and carefully layered depth. Every glass element was tuned for contrast against its background — readable at a glance, beautiful on closer inspection.",
          "GSAP animations were used sparingly. Smooth entrances, gentle parallax on scroll, and micro-interactions that reward attention without demanding it. Nothing moves unless it has a reason to.",
        ],
        image: glassOcean,
        imageAlt: "Glass Ocean showing layered glass elements",
      },
      {
        title: "The Outcome",
        text: [
          "The result is a page that feels alive — depth, movement, and transparency working in concert without overwhelming the visitor. It demonstrates that glassmorphism, when applied with discipline, can be both beautiful and functional.",
          "Performance was non-negotiable. The page loads smoothly with no layout shifts, and every animation runs at 60fps. A visual showcase that never asks the user to wait.",
        ],
        image: glassOcean,
        imageAlt: "Glass Ocean responsive design across devices",
      },
    ],
    technologies: [
      "Next.js",
      "Material-UI",
      "GSAP",
      "CSS Custom Properties",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    slug: "piolec",
    title: "Piolec",
    subtitle:
      "An electrical products catalog built for clarity — navigate hundreds of products without friction.",
    description:
      "Electrical products catalog with intuitive UI and seamless navigation.",
    image: piolecImage,
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Frontend Development",
      duration: "1 Month",
      year: "2024",
      type: "Web Application",
    },
    facts: {
      industry: "Industrial",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Client Work",
    story: [
      {
        title: "The Problem",
        text: [
          "Industrial product catalogs are notoriously difficult to navigate. Hundreds of SKUs, dense technical specifications, and categories that make sense to engineers but leave buyers lost. The information is there — the experience isn't.",
          "The objective was to build a catalog where finding the right product takes seconds, not minutes. Clarity over complexity.",
        ],
        image: piolecImage,
        imageAlt: "Piolec product catalog interface",
      },
      {
        title: "The Approach",
        text: [
          "Products were organized by category with persistent sidebar navigation, so context is never lost. Each product page presents specifications with clean hierarchy — no walls of text, no buried details.",
          "Search was designed to be forgiving. Partial matches, tolerance for typos, and instant results. The interface stays clean whether displaying ten products or ten hundred.",
        ],
        image: piolecImage,
        imageAlt: "Piolec product detail and navigation",
      },
      {
        title: "The Outcome",
        text: [
          "The catalog handles its full product range without feeling heavy. Navigation is seamless, search is instant, and the overall experience communicates professionalism and reliability.",
          "Tailwind CSS enabled rapid, consistent styling across every product category. The result is a catalog that scales gracefully as the product line grows.",
        ],
        image: piolecImage,
        imageAlt: "Piolec catalog search results",
      },
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    slug: "monpatient",
    title: "MonPatient",
    subtitle:
      "A digital platform designed to simplify healthcare management — connecting patients with providers through a seamless, intuitive experience.",
    description:
      "Healthcare platform for home visits, prescriptions, and medical coordination.",
    image: monpatient,
    stack: ["Next.js", "Redux Toolkit", "Node.js", "PostgreSQL"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "3 Months",
      year: "2025",
      type: "Web Application",
    },
    facts: {
      industry: "Healthcare",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Healthcare systems often burden patients with fragmented tools — separate portals for appointments, records, and communication. The experience feels clinical, disconnected, and unnecessarily complex for people who just need care.",
          "The goal was to rethink this from the patient's perspective. One place to manage everything. No friction, no confusion, no learning curve.",
        ],
        image: monpatient,
        imageAlt: "MonPatient interface showing the patient dashboard",
      },
      {
        title: "The Approach",
        text: [
          "We started with the simplest possible flow: a patient opens the app and immediately sees what matters. Appointments, messages, documents — presented clearly without navigating through layers of menus.",
          "Every interaction was designed to feel effortless. Scheduling requires two taps. Messages appear in a clean, chronological feed. Medical records are organized by visit, not scattered across disconnected files.",
        ],
        image: monpatient,
        imageAlt: "MonPatient appointment scheduling interface",
      },
      {
        title: "The Outcome",
        text: [
          "The final product is a calm, focused application that puts patients in control. No unnecessary features, no visual noise — just the tools people need, presented with care.",
          "Performance was a priority from the start. Pages load instantly, transitions feel native, and the experience remains smooth even on older devices. Healthcare software should feel this way.",
        ],
        image: monpatient,
        imageAlt: "MonPatient medical records view",
      },
    ],
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "JWT Auth",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    slug: "storycareer",
    title: "StoryCareer",
    subtitle:
      "An AI-powered career platform that helps creative professionals build their narrative and find opportunities.",
    description:
      "Career platform with tips and success stories for professional growth.",
    image: StoryCareer,
    stack: ["Next.js", "Node.js", "Tailwind CSS", "Clerk"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2 Months",
      year: "2025",
      type: "Web Application",
    },
    facts: {
      industry: "Career Development",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Career advice is everywhere — but it's generic, disconnected, and rarely actionable. Creative professionals need guidance that understands their unique path, not corporate templates applied to creative work.",
          "The challenge was to build a platform where career growth feels personal. Tailored advice, real stories, and tools that adapt to individual goals rather than imposing a one-size-fits-all framework.",
        ],
        image: StoryCareer,
        imageAlt: "StoryCareer platform dashboard",
      },
      {
        title: "The Approach",
        text: [
          "The platform centers on storytelling — real career journeys from real professionals. AI-powered recommendations surface relevant opportunities based on skills, interests, and career stage, not just job titles.",
          "The interface was kept clean and focused. No cluttered dashboards, no overwhelming metrics. Just the next step in your career, presented clearly — with enough context to act on it immediately.",
        ],
        image: StoryCareer,
        imageAlt: "StoryCareer AI-powered recommendations",
      },
      {
        title: "The Outcome",
        text: [
          "StoryCareer delivers personalized career guidance in a calm, focused environment. The AI recommendations feel relevant rather than generic, and the platform adapts as users grow and their goals evolve.",
          "Built with Clerk for seamless authentication, Tailwind CSS for consistent styling, and Node.js for a reliable backend — chosen for stability over novelty.",
        ],
        image: StoryCareer,
        imageAlt: "StoryCareer career journey view",
      },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Clerk",
      "AI Integration",
      "Responsive Design",
    ],
  },
  {
    id: 6,
    slug: "gemini",
    title: "Gemini",
    subtitle:
      "A generative AI application built for clarity — clean interface, instant responses, and thoughtful state management.",
    description:
      "Generative AI application with efficient state management via Context API.",
    image: gemini,
    stack: ["React", "Gemini API", "Context API"],
    liveUrl: null,
    githubUrl: null,
    meta: {
      role: "Frontend Development",
      duration: "3 Weeks",
      year: "2024",
      type: "Web Application",
    },
    facts: {
      industry: "Artificial Intelligence",
      platform: "Web",
      responsive: "Yes",
      team: "Solo",
    },
    status: "Personal Project",
    story: [
      {
        title: "The Problem",
        text: [
          "Most AI chat interfaces feel cluttered — sidebars, settings panels, and overwhelming options distract from the core experience: asking a question and getting a clear answer. The technology is impressive; the interfaces often aren't.",
          "The goal was to strip away everything unnecessary and build an AI interface that feels instant, clean, and focused on the conversation.",
        ],
        image: gemini,
        imageAlt: "Gemini AI interface showing clean chat view",
      },
      {
        title: "The Approach",
        text: [
          "The design centers on the conversation itself. A single input field, a clean response area, and nothing else. History is accessible but never intrusive — it supports the flow without interrupting it.",
          "Context API was used for state management — conversation history, loading states, and error handling all flow through a single, predictable store. No heavy libraries, no unnecessary abstraction.",
        ],
        image: gemini,
        imageAlt: "Gemini conversation flow",
      },
      {
        title: "The Outcome",
        text: [
          "The application feels instant. Responses stream in smoothly, the interface stays calm regardless of conversation length, and the overall experience keeps focus on the content — not the tool.",
          "Built with React and Context API for lightweight, predictable state. A reminder that the best architecture is often the simplest one that works.",
        ],
        image: gemini,
        imageAlt: "Gemini responsive design across devices",
      },
    ],
    technologies: [
      "React",
      "Gemini API",
      "Context API",
      "CSS Custom Properties",
      "Responsive Design",
    ],
  },
];

export default caseStudies;

export function getProjectBySlug(slug) {
  return caseStudies.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug) {
  const index = caseStudies.findIndex((project) => project.slug === currentSlug);
  if (index === -1) return caseStudies[0];
  return caseStudies[(index + 1) % caseStudies.length];
}
