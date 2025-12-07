import todo from "../../public/todo.png";
import currency from "../../public/currency.png";
import tic from "../../public/tic.png";
import kuetnote from "../../public/kuetnote.png";
import KuetBuble from "../../public/KuetBuble.png";
import Shuto from "../../public/Shuto-Shoilo.png";
import JobHunt from "../../public/jobhunt.png";
import Clubby from "../../public/Clubby.png"

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
    title: "KuetNote",
    image: kuetnote,
    cardDescription:
      "A thought-sharing platform for the alumni and students of KUET to exchange experiences, career insights, and helpful resources.",
    description:
      "KUETNote is a collaborative web platform built to simplify academic life for students of KUET. It allows students to easily share, access, and organize course notes, question papers, and study resources by department and academic year. Designed with a clean UI and intuitive navigation, KUETNote enhances peer-to-peer learning and promotes a culture of open knowledge sharing within the university. The project showcases dynamic routing, file upload capabilities, and user-friendly categorization—all developed using React, Tailwind CSS, and Appwrite for backend services.",
    detailLink: "/projects/2",
    previewLink: "https://kuet-note.vercel.app/",
    githubLink:"https://github.com/mijanur6tr/KuetNote",
    technologies: ["React", "Tailwind CSS", "Appwrite"],
    problems: [
      "Managing dynamic routing for individual posts",
      "Handling authentication and user roles",
    ],
  },
  {
    id: 3,
    title: "Shuto-Shoilo",
    image: Shuto,
    cardDescription:
      "A full-stack eCommerce platform designed to deliver a seamless shopping experience with robust cart, checkout, and order management features.",
    description:
      "ShutoShoilo is a full-stack MERN eCommerce application built for a smooth online shopping journey. It provides responsive UI, secure authentication, and dynamic product management. With features like cart, checkout, and hassle-free admin controls, the platform ensures efficient handling of both customer and admin operations. Designed with React and Tailwind CSS for modern UI, and powered by Node.js, Express.js, and MongoDB for backend scalability, ShutoShoilo demonstrates clean architecture and practical use of authentication and state management.",
    detailLink: "/projects/3",
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
    id: 4,
    title: "KuetBuble",
    image: KuetBuble,
    cardDescription:
      "An AI-integrated platform enabling KUET students to share anonymous messages securely engaged through intelligent suggestions.",
    description:
      "KuetBubble is an AI-powered anonymous messaging platform designed exclusively for KUET students. The platform allows users to share messages in a secure and private environment, while AI-driven suggestions enhance interaction and engagement. With NextAuth authentication ensuring safe sign-in and session management, and a clean UI built with Next.js, Tailwind CSS, and TypeScript, KuetBubble demonstrates the integration of AI in social platforms along with strong validation and seamless user flow.",
    detailLink: "/projects/4",
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
  {
  id: 5,
  title: "Job Hunt",
  image: JobHunt, 
  cardDescription:
    "A platform for job seekers and recruiters to post, search, and apply for jobs efficiently with advanced search capabilities.",
  description:
    "Job Hunt is a dynamic job portal built for students and professionals to post and apply for jobs seamlessly. It leverages Next.js with server-side rendering for fast performance, Prisma ORM with PostgreSQL (hosted on Neon) for reliable database management, and advanced Prisma queries to allow searching jobs by title, company, or type. The platform ensures smooth user experience with robust authentication, clean UI built with Tailwind CSS, and deployment on Vercel for global accessibility.",
  detailLink: "/projects/5",
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
}
,
  {
    id: 6,
    title: "Todo App",
    image: todo,
    cardDescription:
      "A simple and clean todo application designed to manage everyday tasks with categories and filters.",
    description:
      "A clean and minimalistic Todo application built to help users organize their daily tasks efficiently. It supports task categorization, filtering, and dynamic updates—making productivity simple and intuitive. This project was a hands-on introduction to React’s Context API, which I used to manage global state across components without prop drilling. It deepened my understanding of component-based architecture and scalable state management in React..",
    detailLink: "/projects/6",
    previewLink: "https://react-to-do-bice-five.vercel.app",
    githubLink:"https://github.com/mijanur6tr/React-ToDo",
    technologies: ["React", "Context API", "Tailwind CSS"],
    problems: [
      "State management across multiple components",
      "Building custom input forms with validation",
    ],
  },
  {
    id: 7,
    title: "Currency Converter",
    image: currency,
    cardDescription:
      "A real-time currency conversion tool using exchange API to convert between global currencies instantly.",
    description:
      "A responsive and real-time currency conversion application that allows users to convert between global currencies instantly using up-to-date exchange rates. This project leverages a public Exchange Rate API to fetch live data and perform accurate conversions. Through this project, I gained practical experience in integrating APIs, handling asynchronous operations, and displaying real-time data in a user-friendly interface using React.",
    detailLink: "/projects/7",
    previewLink: "https://currency-converter-ivory-sigma.vercel.app",
    githubLink:"https://github.com/mijanur6tr/Currency-Converter",
    technologies: ["HTML", "CSS", "JavaScript", "ExchangeRate API"],
    problems: [
      "Fetching dynamic data from third-party APIs",
      "Handling asynchronous loading and error states",
    ],
  },
  {
    id: 8,
    title: "Tic-Tac-Toe Game",
    image: tic,
    cardDescription:
      "A two-player Tic Tac Toe game with a computer AI option, built using basic HTML, CSS, and JavaScript.",
    description:
      "A classic two-player Tic Tac Toe game built using HTML, CSS, and JavaScript, featuring both human-vs-human and human-vs-computer modes. Originally developed for fun, this project turned into a deep dive into game logic and decision-making. I implemented a simple yet effective AI opponent that can intelligently predict and counter the player's next move, making the gameplay more challenging and engaging. It sharpened my logical thinking and problem-solving skills in JavaScript.",
    detailLink: "/projects/8",
    previewLink: "https://tic-tac-toe-eosin-two.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    problems: [
      "Designing a basic AI for computer opponent",
      "Game logic implementation and win detection",
    ],
  },

  // add more projects here
];

// export const CONTACT = {
//   address: "767 Fifth Avenue, New York, NY 10153 ",
//   phoneNo: "+12 4555 666 00 ",
//   email: "me@example.com",
// };
