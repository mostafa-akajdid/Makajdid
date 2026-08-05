import {
  realstate,
  glassOcean,
  piolecImage,
  gemini,
  monpatient,
  StoryCareer,
  Herohala,
  Problemhala,
  Approachhala,
  Outcomehala,
  herostory,
  Problemstory,
  Approachstory,
  Outcomestory,
  herorealestat,
  Outcomerealestat,
  Approachrealestat,
  problemrealestat,
  Heromonpatient,
  Problemmonpatient,
  Approachmonpatient,
  Outcomemonpatient,
} from "../assets/projects";

const caseStudies = [
  {
    id: 1,
    slug: "realstate",
    title: "Real Estate Platform",
    subtitle:
      "A full-stack real estate platform for browsing properties and managing listings, details, images, availability, and reservations from a secured dashboard.",
    description:
      "A production-ready real estate platform with property discovery, secured administration, reservations, and a separated frontend/backend architecture.",
    image: herorealestat,
    stack: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
    liveUrl: "https://realstat-eta.vercel.app",
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2024–2026",
      year: "2026",
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
          "Property discovery and property management were split across disconnected workflows. Visitors needed a clear way to browse and filter listings, while administrators needed one place to manage property data, images, availability, and reservations.",
          "The first version also kept the public website, API, database access, authentication, and media logic in the same application. As the project grew, that structure became harder to maintain and deploy safely.",
        ],
        image: problemrealestat,
        imageAlt:
          "Real Estate Platform properties page with search filters and property listings",
      },
      {
        title: "The Approach",
        text: [
          "I separated the product into two focused applications: a frontend-only public website and a secured dashboard that owns the API, authentication, database access, and Cloudinary operations.",
          "The migration was completed step by step—read routes, listing and detail management, JWT protection, reservations, consumer cutover, and production deployment—without changing the existing database schema or interrupting the live data.",
        ],
        image: Approachrealestat,
        imageAlt:
          "Real Estate Platform dashboard for managing property listings",
      },
      {
        title: "The Outcome",
        text: [
          "Visitors can now search, filter, and explore properties with images, structured details, map data, and sharing links. Administrators can manage listings, property details, availability, media, and reservations from one protected dashboard.",
          "The final production setup uses Next.js, Prisma, PostgreSQL, Cloudinary, JWT authentication, and Vercel, with the public website and dashboard connected through a dedicated backend API.",
        ],
        image: Outcomerealestat,
        imageAlt:
          "Real Estate Platform property detail view with images, specifications, and map data",
      },
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
      "Cloudinary",
      "Vercel",
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
      "A multi-role healthcare platform connecting patients, doctors, nurses, pharmacies, and administrators through one coordinated digital experience.",
    description:
      "A full-stack healthcare platform for patient care, professional coordination, medical records, prescriptions, notifications, and secure role-based access.",
    image: Heromonpatient,
    stack: ["React", "Fastify", "Prisma", "PostgreSQL"],
    liveUrl: "https://monpatient-kappa.vercel.app",
    githubUrl: null,
    meta: {
      role: "Full-Stack Development",
      duration: "2025–2026",
      year: "2026",
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
          "Healthcare coordination often relies on disconnected tools for patient profiles, care requests, medical records, prescriptions, and communication. This makes it difficult for patients and healthcare professionals to follow the same care journey.",
          "The project needed one role-based platform where patients, doctors, nurses, pharmacies, and administrators could access the information and actions relevant to them without sharing the same interface or permissions.",
        ],
        image: Problemmonpatient,
        imageAlt:
          "MonPatient registration and role-based access experience",
      },
      {
        title: "The Approach",
        text: [
          "I built the product as a React frontend connected to a Fastify backend, with JWT authentication, role guards, Prisma, and PostgreSQL. Each role receives a dedicated dashboard and protected workflows based on its responsibilities.",
          "The working core includes registration, login, profile completion, doctor–patient requests, nurse service requests, medical records, prescriptions, notifications, chat, document uploads, and responsive dashboards. Modules planned for later versions remain visible through honest Coming Soon states instead of broken pages.",
        ],
        image: Approachmonpatient,
        imageAlt:
          "MonPatient healthcare dashboard with role-based navigation and patient workflows",
      },
      {
        title: "The Outcome",
        text: [
          "MonPatient is deployed as a presentation-ready healthcare platform where users can register, complete their profile, access the correct dashboard, and use the implemented care and communication workflows without encountering blank pages or broken actions.",
          "The final system uses a responsive React interface, a secured Fastify REST API, PostgreSQL data persistence, Cloudinary document storage, email verification, and production deployments on Vercel.",
        ],
        image: Outcomemonpatient,
        imageAlt:
          "MonPatient patient profile with healthcare and emergency information",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
      "Cloudinary",
      "WebSocket",
      "Vercel",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    slug: "storycareer",
    title: "StoryCareer",
    subtitle:
      "A storytelling platform where professionals share real career journeys to inspire, guide, and help others navigate their own path.",
  
    description:
      "A community-driven platform for discovering, publishing, and saving authentic career stories.",
  
    image: herostory,
  
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk"
    ],
  
    liveUrl: "https://storycareer-six.vercel.app",
    githubUrl: "https://github.com/akajdid-mostafa/storycareer",
  
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
          "Most career advice online comes in the form of generic articles, motivational posts, or unrealistic success stories. What people often need instead is honesty — learning how others faced setbacks, changed careers, solved problems, and eventually found their path.",
          "The challenge was to create a platform where professionals can share authentic career experiences, giving students and early-career professionals practical insights they can actually relate to."
        ],
        image: Problemstory,
        imageAlt: "StoryCareer homepage featuring real career stories",
      },
  
      {
        title: "The Approach",
        text: [
          "StoryCareer was designed around one core idea: people learn best from other people's experiences. Users can discover stories by industry, publish their own journey, save inspiring stories, and build a personal reading collection.",
          "The interface stays intentionally simple. The focus is always on the content itself, making reading comfortable and distraction-free while encouraging meaningful contributions from the community."
        ],
        image: Approachstory,
        imageAlt: "StoryCareer story reading experience",
      },
  
      {
        title: "The Outcome",
        text: [
          "The final product delivers a clean publishing and reading experience with secure authentication, responsive design, SEO-friendly architecture, and a scalable foundation for a growing community of career stories.",
          "Built with Next.js, Prisma, PostgreSQL, and Clerk, the platform prioritizes simplicity, performance, and maintainability over unnecessary complexity."
        ],
        image: Outcomestory,
        imageAlt: "StoryCareer story publishing interface",
      },
    ],
  
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Server Actions",
      "Responsive Design",
      "SEO Optimization",
    ],
  },
  {
  id: 6,
  slug: "halatranslat",

  title: "Hala Translat",

  subtitle:
    "A production-ready document translation platform that simplifies document submission, automated pricing, order tracking, and secure delivery.",

  description:
    "End-to-end translation management platform with client portal, administrative dashboard, automated pricing engine, secure file management, and order tracking.",

  image: Herohala,

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Cloudinary",
    "Tailwind CSS",
    "Shadcn UI",
    "Vercel",
  ],

  liveUrl: "https://translate-front-beta.vercel.app/",
  githubUrl: null,

  meta: {
    role: "Full Stack Engineer",
    duration: "6 Weeks",
    year: "2026",
    type: "Production Web Platform",
  },

  facts: {
    industry: "Translation Services",
    platform: "Web",
    responsive: "Yes",
    team: "Solo",
  },

  status: "Production Deployment",

  story: [
    {
      title: "The Problem",
      text: [
        "Translation agencies often manage requests through emails, messaging apps, and spreadsheets. Price estimation, document delivery, and project tracking are handled manually, making the process slow and difficult to scale.",
        "The objective was to build a complete platform where clients could upload documents, receive instant pricing, submit translation requests, track progress, and securely download completed files without relying on manual communication.",
      ],
      image: Problemhala,
      imageAlt: "Hala Translat document upload interface",
    },

    {
      title: "The Solution",
      text: [
        "The platform provides two connected experiences: a public client portal and a secure administrative dashboard. Clients upload documents, receive automatic price calculations, submit requests, and monitor every stage of the translation process using a unique tracking ID.",
        "Administrators manage incoming requests, review uploaded files, update order status, upload translated documents, and securely deliver completed work. Prisma handles database operations while Cloudinary manages document storage and delivery.",
      ],
      image: Approachhala,
      imageAlt: "Hala Translat translation management dashboard",
    },

    {
      title: "The Result",
      text: [
        "The final platform delivers a complete workflow from document upload to secure delivery. Automatic pricing, request tracking, status management, file replacement, and protected downloads work together in a production-ready application.",
        "The project demonstrates full-stack architecture, secure backend development, API design, database modeling, file storage integration, authentication, responsive UI, and deployment on Vercel.",
      ],
      image: Outcomehala,
      imageAlt: "Hala Translat platform across desktop and mobile devices",
    },
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma ORM",
    "PostgreSQL",
    "Cloudinary",
    "REST API",
    "Tailwind CSS",
    "Shadcn UI",
    "Vercel",
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
