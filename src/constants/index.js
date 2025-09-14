import todo from "../../public/todo.png";
import currency from "../../public/currency.png";
import tic from "../../public/tic.png";
import kuetnote from "../../public/kuetnote.png";
import KuetBuble from "../../public/KuetBuble.png";
import Shuto from "../../public/Shuto-Shoilo.png";

export const HERO_CONTENT = `I Build High-Impact, Fast, and Modern Web Solutions.From idea to launch, I craft scalable websites and full-stack applications that drive business results.
Let’s create something your users will love. `;

export const ABOUT_TEXT = `I’m an undergraduate student at KUET and a passionate full-stack web developer.I specialize in React, Next.js, and Tailwind CSS to create responsive, accessible, and modern user interfaces. On the backend, I work with Node.js, Express, and MongoDB to develop robust APIs and handle complex database operations. I write clean, production-level code and follow best practices to ensure performance, scalability, and maintainability.  I’m experienced in state management with Redux and React Query, and use server-side rendering with Next.js to boost SEO and performance.I’d love the opportunity to help make your online presence elegant, impactful, and effective.`;

export const projectData = [
  {
    id: 1,
    title: "KuetNote",
    image: kuetnote,
    cardDescription:
      "A thought-sharing platform for the alumni and students of KUET to exchange experiences, career insights, and helpful resources.",
    description:
      "KUETNote is a collaborative web platform built to simplify academic life for students of KUET. It allows students to easily share, access, and organize course notes, question papers, and study resources by department and academic year. Designed with a clean UI and intuitive navigation, KUETNote enhances peer-to-peer learning and promotes a culture of open knowledge sharing within the university. The project showcases dynamic routing, file upload capabilities, and user-friendly categorization—all developed using React, Tailwind CSS, and Appwrite for backend services.",
    detailLink: "/projects/1",
    previewLink: "https://kuet-note.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Appwrite"],
    problems: [
      "Managing dynamic routing for individual posts",
      "Handling authentication and user roles",
    ],
  },
  {
    id: 2,
    title: "Shuto-Shoilo",
    image: Shuto,
    cardDescription:
      "A full-stack eCommerce platform designed to deliver a seamless shopping experience with robust cart, checkout, and order management features.",
    description:
      "ShutoShoilo is a full-stack MERN eCommerce application built for a smooth online shopping journey. It provides responsive UI, secure authentication, and dynamic product management. With features like cart, checkout, and hassle-free admin controls, the platform ensures efficient handling of both customer and admin operations. Designed with React and Tailwind CSS for modern UI, and powered by Node.js, Express.js, and MongoDB for backend scalability, ShutoShoilo demonstrates clean architecture and practical use of authentication and state management.",
    detailLink: "/projects/2",
    previewLink: "https://shuto-shoilo-frontend.vercel.app/",
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
    id: 3,
    title: "KuetBuble",
    image: KuetBuble,
    cardDescription:
      "An AI-integrated platform enabling KUET students to share anonymous messages securely engaged through intelligent suggestions.",
    description:
      "KuetBubble is an AI-powered anonymous messaging platform designed exclusively for KUET students. The platform allows users to share messages in a secure and private environment, while AI-driven suggestions enhance interaction and engagement. With NextAuth authentication ensuring safe sign-in and session management, and a clean UI built with Next.js, Tailwind CSS, and TypeScript, KuetBubble demonstrates the integration of AI in social platforms along with strong validation and seamless user flow.",
    detailLink: "/projects/3",
    previewLink: "https://kuet-bubble.vercel.app/",
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
    id: 4,
    title: "Todo App",
    image: todo,
    cardDescription:
      "A simple and clean todo application designed to manage everyday tasks with categories and filters.",
    description:
      "A clean and minimalistic Todo application built to help users organize their daily tasks efficiently. It supports task categorization, filtering, and dynamic updates—making productivity simple and intuitive. This project was a hands-on introduction to React’s Context API, which I used to manage global state across components without prop drilling. It deepened my understanding of component-based architecture and scalable state management in React..",
    detailLink: "/projects/4",
    previewLink: "https://react-to-do-bice-five.vercel.app",
    technologies: ["React", "Context API", "Tailwind CSS"],
    problems: [
      "State management across multiple components",
      "Building custom input forms with validation",
    ],
  },
  {
    id: 5,
    title: "Currency Converter",
    image: currency,
    cardDescription:
      "A real-time currency conversion tool using exchange API to convert between global currencies instantly.",
    description:
      "A responsive and real-time currency conversion application that allows users to convert between global currencies instantly using up-to-date exchange rates. This project leverages a public Exchange Rate API to fetch live data and perform accurate conversions. Through this project, I gained practical experience in integrating APIs, handling asynchronous operations, and displaying real-time data in a user-friendly interface using React.",
    detailLink: "/projects/5",
    previewLink: "https://currency-converter-ivory-sigma.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript", "ExchangeRate API"],
    problems: [
      "Fetching dynamic data from third-party APIs",
      "Handling asynchronous loading and error states",
    ],
  },
  {
    id: 6,
    title: "Tic-Tac-Toe Game",
    image: tic,
    cardDescription:
      "A two-player Tic Tac Toe game with a computer AI option, built using basic HTML, CSS, and JavaScript.",
    description:
      "A classic two-player Tic Tac Toe game built using HTML, CSS, and JavaScript, featuring both human-vs-human and human-vs-computer modes. Originally developed for fun, this project turned into a deep dive into game logic and decision-making. I implemented a simple yet effective AI opponent that can intelligently predict and counter the player's next move, making the gameplay more challenging and engaging. It sharpened my logical thinking and problem-solving skills in JavaScript.",
    detailLink: "/projects/6",
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
