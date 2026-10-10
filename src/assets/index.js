import todo from "./todo.png";
import currency from "./currency.png";
import tic from "./tic.png";
import kuetnote from "./KuetNote.png";
import KuetBuble from "./KuetBuble.png";
import Shuto from "./Shuto-Shoilo.png";
import JobHunt from "./jobhunt.png";
import Clubby from "./Clubby.png";
import SpectrumWeb from "./spectrumweb.png";
import Agro from "./agro.png";

export const HERO_CONTENT = `I Build High-Impact, Fast, and Modern Web Solutions.From idea to launch, I craft scalable websites and full-stack applications that drive business results.
Let’s create something your users will love. `;

export const ABOUT_TEXT = `❖ Full Stack Intern | Yolast (May - July 2025)

● Designed and implemented end-to-end authentication systems for production-ready flows.
● Built role-based authorization for multiple user types (users, affiliates, service providers, multi-level admins).
● Developed secure flows including custom registration, Google OAuth, OTP-based reset password, and user data persistence.
● Integrated Razorpay Payment Gateway to handle transactions, subscription logic, and order validations.
● Managed and debugged complex application structures.

Key Impact: Strengthened auth security, streamlined user onboarding, and ensured secure payment handling.`;

export const projectData = [
  {
  id: 1,
  title: "Clubby AI",
  image: Clubby, 
  cardDescription:
    "An AI-powered content assistant that helps users generate ideas, write content, create images, and edit visuals through a seamless multi-step workflow.",
  description:
    "Clubby AI is an end-to-end AI content assistant web application designed to streamline the entire content creation process. It allows users to generate content ideas, expand them into full articles or scripts, create AI-generated images, and edit visuals using background and object removal tools. Built with React, Tailwind CSS, Clerk authentication, and integrated AI APIs, the platform offers a smooth and intuitive user experience. Users can also publish their generated images to a public gallery, making the experience more interactive and community-driven. Clubby AI highlights practical AI integration, real-time content workflows, and robust user management through Clerk.",
  detailLink: "/projects/1",
  previewLink: "https://clubby-seven.vercel.app/",
  githubLink: "https://github.com/mijanur6tr/Clubby.Ai",
  technologies: [
    "React",
    "Tailwind CSS",
    "Clerk Authentication",
    "Node.js",
    "Express.js",
    "AI APIs",
  ],
  problems: [
    "Handling multi-step content workflow with idea, content, and image generation",
    "Integrating clerk for secure and smooth authentication across routes",
    "Managing image uploads and gallery publishing flow",
    "Production failure of the resume review feature due to pdf-parse incompatibility with serverless environments"
  ],
},
 {
  id: 2,
  title: "Agro Bot",
  image: Agro,
  cardDescription:
    "AI-powered agriculture assistant that answers farming queries using Retrieval Augmented Generation (RAG).",

  description:
    "Agro Bot is an AI-powered agriculture assistant that helps farmers and users get accurate answers to farming-related questions. The system uses a Retrieval Augmented Generation (RAG) pipeline where agriculture knowledge sources are scraped, processed, converted into vector embeddings, and stored in AstraDB vector database. When a user asks a question, the system retrieves the most relevant documents through semantic search and sends them to an LLM to generate context-aware answers. Built with a simple chat interface, Agro Bot demonstrates practical implementation of vector databases, semantic retrieval, and AI-powered knowledge systems.",

  detailLink: "/projects/2",
  previewLink: "https://agro-bot-delta.vercel.app/",
  githubLink: "https://github.com/mijanur6tr/Agro-Bot",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AstraDB Vector Database",
    "LangChain",
    "RAG Architecture",
    "Gemini Embedding Model and LLM"
  ],

  problems: [
    "Building an efficient RAG pipeline for retrieving relevant agriculture knowledge",
    "Generating high-quality vector embeddings from scraped documents",
    "Implementing semantic search using AstraDB vector database",
    "Managing context retrieval to improve LLM response accuracy"
  ],
},

  {
    id: 3,
    title: "KuetNote",
    image: kuetnote,
    cardDescription:
      "A thought-sharing platform for the alumni and students of KUET to exchange experiences, career insights, and helpful resources.",
    description:
      "KUETNote is a collaborative web platform built to simplify academic life for students of KUET. It allows students to easily share, access, and organize course notes, question papers, and study resources by department and academic year. Designed with a clean UI and intuitive navigation, KUETNote enhances peer-to-peer learning and promotes a culture of open knowledge sharing within the university. The project showcases dynamic routing, file upload capabilities, and user-friendly categorization—all developed using React, Tailwind CSS, and Appwrite for backend services.",
    detailLink: "/projects/3",
    previewLink: "https://kuet-note.vercel.app/",
    githubLink:"https://github.com/mijanur6tr/KuetNote",
    technologies: ["React", "Tailwind CSS", "Appwrite"],
    problems: [
      "Managing dynamic routing for individual posts",
      "Handling authentication and user roles",
    ],
  },
  {
  id: 4,
  title: "Spectrum – Official Website",
  image: SpectrumWeb,
  cardDescription:
    "Official website for Spectrum, a professional skill development club of KUET, showcasing activities, events, and community initiatives.",

  description:
    "Spectrum Official Website is a modern web platform built to represent Spectrum, a professional skill development club at KUET. The platform highlights the club’s mission, events, and initiatives while providing a structured interface for members and visitors to explore activities and updates. Designed with a responsive UI and clean component architecture, the website focuses on accessibility, performance, and clear content presentation. Built using modern frontend technologies, the project demonstrates practical experience in designing scalable and maintainable web interfaces for organizations.",

  detailLink: "/projects/4",
  previewLink: "https://spectrum-kuet.com/",
  githubLink: "/projects/4",

  technologies: [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "Cloudinary",
    "Vercel",
  ],

  problems: [
    "GitHub project is private, not available for public viewing",
    "Complete Admin panel integration for proper control over frontend",
    "Structuring reusable components for different website sections",
    "Ensuring performance optimization and smooth navigation",
    "Continuous integarion and deployment setup for seamless updates",
  ],
},
  {
    id: 5,
    title: "Shuto-Shoilo",
    image: Shuto,
    cardDescription:
      "A full-stack eCommerce platform designed to deliver a seamless shopping experience with robust cart, checkout, and order management features.",
    description:
      "ShutoShoilo is a full-stack MERN eCommerce application built for a smooth online shopping journey. It provides responsive UI, secure authentication, and dynamic product management. With features like cart, checkout, and hassle-free admin controls, the platform ensures efficient handling of both customer and admin operations. Designed with React and Tailwind CSS for modern UI, and powered by Node.js, Express.js, and MongoDB for backend scalability, ShutoShoilo demonstrates clean architecture and practical use of authentication and state management.",
    detailLink: "/projects/5",
    previewLink: "https://shuto-shoilo-frontend.vercel.app/",
    githubLink:"https://github.com/mijanur6tr/Shuto-Shoilo-Frontend",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Router DOM",
      "JWT",
    ],
    problems: [
      "Implementing secure authentication and JWT-based authorization",
      "Designing cart and checkout flow with dynamic state management",
      "Structuring admin panel for product and order management",
    ],
  },
  
  {
  id: 6,
  title: "Job Hunt",
  image: JobHunt, 
  cardDescription:
    "A platform for job seekers and recruiters to post, search, and apply for jobs efficiently with advanced search capabilities.",
  description:
    "Job Hunt is a dynamic job portal built for students and professionals to post and apply for jobs seamlessly. It leverages Next.js with server-side rendering for fast performance, Prisma ORM with PostgreSQL (hosted on Neon) for reliable database management, and advanced Prisma queries to allow searching jobs by title, company, or type. The platform ensures smooth user experience with robust authentication, clean UI built with Tailwind CSS, and deployment on Vercel for global accessibility.",
  detailLink: "/projects/6",
  previewLink: "https://job-hunt-seven-chi.vercel.app/", 
  githubLink:"https://github.com/mijanur6tr/job-hunt",
  technologies: [
    "Next.js (SSR && CSR)",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Neon DB",
    "Vercel",
  ],
  problems: [
    "Implementing server-side rendering with Next.js for better SEO and performance",
    "Designing advanced Prisma queries to filter jobs by name, company, and type",
    "Ensuring smooth CRUD operations for job posts and applications",
    "Maintaining secure and scalable database interactions with PostgreSQL and Prisma",
  ],
},

{
    id: 7,
    title: "KuetBuble",
    image: KuetBuble,
    cardDescription:
      "An AI-integrated platform enabling KUET students to share anonymous messages securely engaged through intelligent suggestions.",
    description:
      "KuetBubble is an AI-powered anonymous messaging platform designed exclusively for KUET students. The platform allows users to share messages in a secure and private environment, while AI-driven suggestions enhance interaction and engagement. With NextAuth authentication ensuring safe sign-in and session management, and a clean UI built with Next.js, Tailwind CSS, and TypeScript, KuetBubble demonstrates the integration of AI in social platforms along with strong validation and seamless user flow.",
    detailLink: "/projects/7",
    previewLink: "https://kuet-bubble.vercel.app/",
    githubLink:"https://github.com/mijanur6tr/KuetBubble",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "React Hook Form",
      "Zod",
      "NextAuth",
    ],
    problems: [
      "Integrating AI to generate meaningful and engaging message suggestions",
      "Ensuring security and anonymity while maintaining smooth user flow",
      "Implementing robust validation with React Hook Form and Zod",
    ],
  },

];


