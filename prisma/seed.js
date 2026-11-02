import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialProjects = [
  {
    title: 'Clubby AI',
    slug: 'clubby-ai',
    cardDescription: 'An AI-powered content assistant that helps users generate ideas, write content, create images, and edit visuals through a seamless multi-step workflow.',
    description: 'Clubby AI is an end-to-end AI content assistant web application designed to streamline the entire content creation process. It allows users to generate content ideas, expand them into full articles or scripts, create AI-generated images, and edit visuals using background and object removal tools. Built with React, Tailwind CSS, Clerk authentication, and integrated AI APIs, the platform offers a smooth and intuitive user experience. Users can also publish their generated images to a public gallery, making the experience more interactive and community-driven. Clubby AI highlights practical AI integration, real-time content workflows, and robust user management through Clerk.',
    image: '/images/Clubby.png',
    previewLink: 'https://clubby-seven.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/Clubby.Ai',
    category: 'AI & RAG',
    technologies: ['React', 'Tailwind CSS', 'Clerk Auth', 'Node.js', 'Express.js', 'AI APIs'],
    problems: [
      'Handling multi-step content workflow with idea, content, and image generation',
      'Integrating Clerk for secure and smooth authentication across routes',
      'Managing image uploads and gallery publishing flow',
      'Production failure of resume review feature due to pdf-parse incompatibility with serverless'
    ],
    featured: true,
    order: 1
  },
  {
    title: 'Agro Bot',
    slug: 'agro-bot',
    cardDescription: 'AI-powered agriculture assistant that answers farming queries using Retrieval Augmented Generation (RAG).',
    description: 'Agro Bot is an AI-powered agriculture assistant that helps farmers and users get accurate answers to farming-related questions. The system uses a Retrieval Augmented Generation (RAG) pipeline where agriculture knowledge sources are scraped, processed, converted into vector embeddings, and stored in AstraDB vector database. When a user asks a question, the system retrieves the most relevant documents through semantic search and sends them to an LLM to generate context-aware answers. Built with a simple chat interface, Agro Bot demonstrates practical implementation of vector databases, semantic retrieval, and AI-powered knowledge systems.',
    image: '/images/agro.png',
    previewLink: 'https://agro-bot-delta.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/Agro-Bot',
    category: 'AI & RAG',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AstraDB', 'LangChain', 'RAG Architecture', 'Gemini LLM'],
    problems: [
      'Building an efficient RAG pipeline for retrieving relevant agriculture knowledge',
      'Generating high-quality vector embeddings from scraped documents',
      'Implementing semantic search using AstraDB vector database',
      'Managing context retrieval to improve LLM response accuracy'
    ],
    featured: true,
    order: 2
  },
  {
    title: 'KuetNote',
    slug: 'kuetnote',
    cardDescription: 'A collaborative note-sharing platform for alumni and students of KUET to exchange academic resources.',
    description: 'KUETNote is a collaborative web platform built to simplify academic life for students of KUET. It allows students to easily share, access, and organize course notes, question papers, and study resources by department and academic year. Designed with a clean UI and intuitive navigation, KUETNote enhances peer-to-peer learning and promotes a culture of open knowledge sharing within the university. The project showcases dynamic routing, file upload capabilities, and user-friendly categorization.',
    image: '/images/KuetNote.png',
    previewLink: 'https://kuet-note.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/KuetNote',
    category: 'Full-Stack Web',
    technologies: ['React', 'Tailwind CSS', 'Appwrite', 'Node.js'],
    problems: [
      'Managing dynamic routing for individual posts and departmental categories',
      'Handling role-based authorization for verified KUET students',
      'Optimizing file upload and retrieval performance'
    ],
    featured: true,
    order: 3
  },
  {
    title: 'Spectrum – Official Website',
    slug: 'spectrum-kuet',
    cardDescription: 'Official website for Spectrum, a professional skill development club of KUET, showcasing activities and events.',
    description: 'Spectrum Official Website is a modern web platform built to represent Spectrum, a professional skill development club at KUET. The platform highlights the club’s mission, events, and initiatives while providing a structured interface for members and visitors to explore activities and updates. Designed with a responsive UI and clean component architecture, the website focuses on accessibility, performance, and clear content presentation.',
    image: '/images/spectrumweb.png',
    previewLink: 'https://spectrum-kuet.com/',
    githubLink: 'https://github.com/mijanur6tr',
    category: 'Full-Stack Web',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Express.js', 'MongoDB', 'Cloudinary'],
    problems: [
      'Designing an integrated Admin panel for dynamic content updates by executives',
      'Structuring reusable component system across club initiatives and event boards',
      'Optimizing performance and responsive rendering across devices'
    ],
    featured: true,
    order: 4
  },
  {
    title: 'Shuto-Shoilo',
    slug: 'shuto-shoilo',
    cardDescription: 'A full-stack eCommerce platform with dynamic cart, checkout, JWT authentication, and admin order management.',
    description: 'ShutoShoilo is a full-stack MERN eCommerce application built for a smooth online shopping journey. It provides responsive UI, secure authentication, and dynamic product management. With features like cart, checkout, and hassle-free admin controls, the platform ensures efficient handling of both customer and admin operations. Designed with React and Tailwind CSS for modern UI, and powered by Node.js, Express.js, and MongoDB for backend scalability.',
    image: '/images/Shuto-Shoilo.png',
    previewLink: 'https://shuto-shoilo-frontend.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/Shuto-Shoilo-Frontend',
    category: 'Full-Stack Web',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    problems: [
      'Implementing secure authentication and JWT-based authorization',
      'Designing cart and checkout flow with resilient state management',
      'Structuring admin panel for product inventory and order status tracking'
    ],
    featured: true,
    order: 5
  },
  {
    title: 'Job Hunt',
    slug: 'job-hunt',
    cardDescription: 'A modern job portal built with Next.js SSR, Prisma ORM, and Neon PostgreSQL for fast job search and filtering.',
    description: 'Job Hunt is a dynamic job portal built for students and professionals to post and apply for jobs seamlessly. It leverages Next.js with server-side rendering for fast performance, Prisma ORM with PostgreSQL (hosted on Neon) for reliable database management, and advanced Prisma queries to allow searching jobs by title, company, or type. The platform ensures smooth user experience with robust authentication, clean UI built with Tailwind CSS, and deployment on Vercel for global accessibility.',
    image: '/images/jobhunt.png',
    previewLink: 'https://job-hunt-seven-chi.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/job-hunt',
    category: 'Full-Stack Web',
    technologies: ['Next.js (SSR)', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Neon DB'],
    problems: [
      'Implementing server-side rendering with Next.js for superior SEO and initial load speed',
      'Designing complex multi-parameter Prisma filter queries for positions and locations',
      'Maintaining secure and scalable database interactions with PostgreSQL connection pooling'
    ],
    featured: true,
    order: 6
  },
  {
    title: 'KuetBubble',
    slug: 'kuetbubble',
    cardDescription: 'An AI-integrated anonymous messaging platform for KUET students with smart message suggestions.',
    description: 'KuetBubble is an AI-powered anonymous messaging platform designed exclusively for KUET students. The platform allows users to share messages in a secure and private environment, while AI-driven suggestions enhance interaction and engagement. With NextAuth authentication ensuring safe sign-in and session management, and a clean UI built with Next.js, Tailwind CSS, and TypeScript, KuetBubble demonstrates the integration of AI in social platforms along with strong validation and seamless user flow.',
    image: '/images/KuetBuble.png',
    previewLink: 'https://kuet-bubble.vercel.app/',
    githubLink: 'https://github.com/mijanur6tr/KuetBubble',
    category: 'AI & RAG',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'Zod', 'AI APIs'],
    problems: [
      'Integrating AI to generate contextual, engaging message prompts',
      'Ensuring strict message anonymity while preventing abuse and spam',
      'Implementing type-safe schema validation with React Hook Form and Zod'
    ],
    featured: true,
    order: 7
  }
];

const initialPosts = [
  {
    title: 'Architecting End-to-End Authentication & Razorpay Payments: Lessons from Yolast',
    slug: 'architecting-auth-payments-yolast',
    excerpt: 'Key technical insights from designing multi-role authorization, Google OAuth, OTP verification, and Razorpay subscription handling in production.',
    content: `During my Full Stack Internship at Yolast, I was responsible for designing and implementing mission-critical flows that required high security and rock-solid reliability.

### 1. Multi-Tier Role-Based Authorization
A major challenge in modern SaaS is orchestrating permissions across diverse actors: standard users, affiliates, service providers, and multi-level administrators. 

Instead of simple boolean flags, we implemented hierarchical permission claims encoded in cryptographically signed tokens. This ensured zero-downtime permission checks on every incoming request without unnecessary database round-trips.

### 2. Bulletproof Payment Pipelines with Razorpay
Payment gateways are unforgiving. Network drops, webhooks arriving out of order, and concurrent user requests can cause double credits or orphaned transactions.

Key patterns implemented:
- **Idempotency Keys**: Guaranteeing that retried checkout operations never create duplicate orders.
- **HMAC Signature Validation**: Verifying that every webhook event genuinely originated from Razorpay before processing order completion.
- **Atomic Transactions**: Ensuring database ledger updates occur within isolated ACID boundaries.

### Key Takeaway
Secure auth and payments require designing for edge cases first. By validating on both client and server layers and utilizing automated idempotency checks, systems remain reliable under heavy traffic.`,
    coverImage: '/images/jobhunt.png',
    category: 'Full-Stack Architecture',
    tags: ['Next.js', 'Authentication', 'Razorpay', 'Security', 'Node.js'],
    readTime: '5 min read',
    published: true,
    featured: true
  },
  {
    title: 'Building a High-Accuracy RAG Pipeline with AstraDB Vector Search and Gemini',
    slug: 'building-rag-pipeline-astradb-gemini',
    excerpt: 'How we engineered Agro Bot to retrieve precise agriculture knowledge using semantic vector embeddings and context-aware LLM generation.',
    content: `When building domain-specific AI assistants, general LLMs often hallucinate or lack hyper-local information. In **Agro Bot**, our goal was to provide farmers with accurate, context-rich advice.

### The Pipeline Architecture
1. **Document Ingestion**: Agricultural research papers, crop treatment manuals, and regional soil datasets were parsed and chunked with semantic boundary awareness.
2. **Vector Embeddings**: Documents were converted into dense mathematical vectors using Gemini's embedding models.
3. **Storage & Semantic Indexing**: Vectors were indexed inside AstraDB using cosine similarity metrics.
4. **Context Injection**: When a user inputs a query (e.g., *"How do I control leaf blast disease in Boro rice?"*), AstraDB retrieves the top-K relevant chunks which are injected into the prompt context for the LLM.

### Results & Learnings
- Chunk overlap of 15-20% dramatically improved semantic retrieval accuracy.
- Adding hybrid keyword + vector search prevented false negatives on specific chemical names and regional plant terminology.`,
    coverImage: '/images/agro.png',
    category: 'AI & Machine Learning',
    tags: ['RAG', 'Vector Database', 'AstraDB', 'LangChain', 'Gemini'],
    readTime: '6 min read',
    published: true,
    featured: true
  },
  {
    title: 'Overcoming Serverless Pitfalls: The PDF Parsing Challenge in Production',
    slug: 'serverless-pdf-parsing-production-fix',
    excerpt: 'How native binary dependencies can break in Vercel serverless environments and the clean architectural patterns to resolve them.',
    content: `During the launch of Clubby AI, a core resume review feature worked flawlessly in local development using \`pdf-parse\`, but immediately crashed in production with standard serverless lambda timeout errors.

### The Problem
Traditional Node.js PDF parsing libraries often bundle native C++ binaries or rely on filesystem access (\`fs\`) that behaves fundamentally differently inside ephemeral Vercel Lambda functions.

### The Solution
1. **Offloading Heavy Processing**: Moving PDF extraction into an asynchronous background pipeline or an edge-compatible WASM engine (\`pdfjs-dist/legacy/build/pdf\`).
2. **Memory Constraints**: Tuning the maximum Lambda execution memory and setting strict payload size caps.
3. **Structured Error Recovery**: Providing immediate client feedback with retry fallbacks if document parsing encounters corrupt encoding.`,
    coverImage: '/images/Clubby.png',
    category: 'Engineering & DevOps',
    tags: ['Serverless', 'Next.js', 'Debugging', 'Vercel', 'Performance'],
    readTime: '4 min read',
    published: true,
    featured: false
  }
];

async function main() {
  console.log('🌱 Starting database seed...');

  // Upsert Projects
  for (const project of initialProjects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
    console.log(`✓ Project synced: ${project.title}`);
  }

  // Upsert Posts
  for (const post of initialPosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
    console.log(`✓ Post synced: ${post.title}`);
  }

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

