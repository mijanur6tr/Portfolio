import React from 'react';
import { Layout, Server, Database, Sparkles, Cloud, Lock, Cpu, Code2 } from 'lucide-react';

export const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      tag: 'CLIENT-SIDE',
      title: 'Frontend Engineering',
      description:
        'Building responsive, accessible, and high-conversion user interfaces with modern React, Next.js, and TypeScript. Focused on high Lighthouse scores, fluid Framer Motion micro-interactions, and pristine component architecture.',
      skills: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'State Management'],
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      tag: 'SERVER-SIDE',
      title: 'Backend Architecture',
      description:
        'Designing secure RESTful and serverless endpoints with Node.js and Express. Experienced in production auth systems (OAuth, JWT, OTP verification, RBAC) and payment gateway pipelines (Razorpay).',
      skills: ['Node.js & Express', 'Server Actions', 'Role-Based Access Control', 'Razorpay Payments', 'Clerk Auth', 'REST API Design'],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      tag: 'DATA SYSTEMS',
      title: 'Database & Storage',
      description:
        'Configuring relational and document databases with zero-downtime migrations. Proficient in PostgreSQL connection pooling on Neon, Prisma ORM schema modeling, and high-volume MongoDB instances.',
      skills: ['PostgreSQL & Neon DB', 'Prisma ORM', 'MongoDB & Mongoose', 'Database Indexing', 'ACID Transactions', 'Cloudinary CDN'],
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      tag: 'INTELLIGENCE',
      title: 'AI & RAG Solutions',
      description:
        'Engineering Retrieval-Augmented Generation (RAG) pipelines for domain-specific AI assistants. Generating vector embeddings, indexing in AstraDB, and synthesizing context with modern LLMs.',
      skills: ['LangChain', 'AstraDB Vector Database', 'Vector Embeddings', 'Gemini & OpenAI APIs', 'Semantic Search', 'Prompt Engineering'],
    },
    {
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      tag: 'INFRASTRUCTURE',
      title: 'Cloud & Deployment',
      description:
        'Shipping production workloads to Vercel and serverless architectures with continuous integration. Handling edge asset delivery, environmental variable management, and automated deployments.',
      skills: ['Vercel Edge Platform', 'Git & GitHub CI/CD', 'Postman Testing', 'Environment Isolation', 'Cloudinary Media Optimization'],
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      tag: 'SECURITY',
      title: 'Security & Auth Engineering',
      description:
        'Hardening authentication boundaries, mitigating CSRF/XSS attack vectors, implementing cryptographic webhook verification, and securing administrative routes with strict session tokens.',
      skills: ['JWT / JOSE Cryptography', 'Secure HttpOnly Cookies', 'Webhook HMAC Signatures', 'Input Sanitization', 'CORS Policies'],
    },
  ];

  return (
    <section id="skills" className="bg-[#0c0b13] bg-grid-dark-pattern text-white py-10 sm:py-16 md:py-20 lg:py-24 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 md:mb-16 pb-4 sm:pb-8 border-b border-neutral-800 gap-4 sm:gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span>// 03. CAPABILITIES & ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Engineered for speed, scale, and resilience.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Full-stack engineering stack designed to deliver dependable user experiences and rock-solid backend foundations.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="relative p-6 rounded-xl bg-[#13121f] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group corner-crosshair"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-emerald-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1a192a] text-neutral-300 border border-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

