import React, { useState } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaShieldAlt,
  FaKey,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiC,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongoose,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiAppwrite,
  SiClerk,
  SiRender,
  SiHostinger,
  SiLangchain,
} from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { BsCpu } from 'react-icons/bs';

const SKILLS_DATA = {
  frontend: [
    { name: 'React', icon: <FaReact className="text-[#00d8ff]" />, desc: 'Component Architecture, Hooks, Context' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, desc: 'SSR, CSR, Server Actions, App Router' },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" />, desc: 'Type Safety, Generics, Interfaces' },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#f7df1e]" />, desc: 'Async/Await, DOM, Modern JS' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" />, desc: 'Utility-First Styling, Responsive Layouts' },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#e34f26]" />, desc: 'Semantic Structure, Accessibility' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572b6]" />, desc: 'Flexbox, Grid, Custom Styling' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#539e43]" />, desc: 'Runtime Environments, Event Loop' },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" />, desc: 'REST APIs, Middleware, Routing' },
    { name: 'Prisma ORM', icon: <SiPrisma className="text-[#2d3748]" />, desc: 'Database Modeling & Queries' },
    { name: 'Postman', icon: <SiPostman className="text-[#ef5b25]" />, desc: 'API Testing & Documentation' },
    { name: 'Python', icon: <FaPython className="text-[#3776ab]" />, desc: 'Scripting, Data Handling, AI Pipelines' },
    { name: 'C Language', icon: <SiC className="text-[#a8b9cc]" />, desc: 'Core Algorithms & Data Structures' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, desc: 'Relational DB, Complex Joins, Neon DB' },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" />, desc: 'NoSQL, Document Schemas, Aggregations' },
    { name: 'Mongoose', icon: <SiMongoose className="text-[#880000]" />, desc: 'Object Data Modeling (ODM)' },
    { name: 'MySQL', icon: <SiMysql className="text-[#00758f]" />, desc: 'Relational Database Management' },
    { name: 'AstraDB (Vector DB)', icon: <BsCpu className="text-purple-600" />, desc: 'Vector Embeddings & Semantic Search' },
  ],
  ai: [
    { name: 'RAG Architecture', icon: <BsCpu className="text-emerald-700" />, desc: 'Retrieval Augmented Generation Pipelines' },
    { name: 'LangChain', icon: <SiLangchain className="text-teal-700" />, desc: 'LLM Orchestration, Chains & Agents' },
    { name: 'Gemini LLM & Embeddings', icon: <BsCpu className="text-blue-600" />, desc: 'Google AI Models & Vectorizers' },
    { name: 'AI API Integrations', icon: <BsCpu className="text-purple-700" />, desc: 'Multi-step Content & Image Workflows' },
  ],
  cloud: [
    { name: 'Clerk Auth', icon: <SiClerk className="text-[#6c47ff]" />, desc: 'User Management & Route Protection' },
    { name: 'NextAuth / Auth.js', icon: <FaKey className="text-yellow-600" />, desc: 'Session Management & Providers' },
    { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" />, desc: 'Realtime DB & BaaS Services' },
    { name: 'Appwrite', icon: <SiAppwrite className="text-[#fd366e]" />, desc: 'Auth, Storage & Cloud Functions' },
    { name: 'Google OAuth', icon: <FcGoogle />, desc: 'Third-party Single Sign-On' },
    { name: 'JWT & Security', icon: <FaShieldAlt className="text-indigo-600" />, desc: 'Token Auth, Role-Based Access (RBAC)' },
    { name: 'Vercel', icon: <SiVercel className="text-black" />, desc: 'Serverless Deployment & CI/CD' },
    { name: 'Render', icon: <SiRender className="text-[#46e3b7]" />, desc: 'Web Service & API Hosting' },
    { name: 'Hostinger', icon: <SiHostinger className="text-[#673ab7]" />, desc: 'Domain & Server Management' },
    { name: 'Git & GitHub', icon: <FaGithub className="text-black" />, desc: 'Version Control, Branching, PRs' },
  ],
};

export const SkillsApp = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases & AI' },
    { id: 'cloud', label: 'Auth, Cloud & DevOps' },
  ];

  const getDisplayedSkills = () => {
    if (activeTab === 'all') {
      return [
        { category: 'Frontend Engineering', items: SKILLS_DATA.frontend },
        { category: 'Backend Engineering', items: SKILLS_DATA.backend },
        { category: 'Databases & Vector Storage', items: SKILLS_DATA.databases },
        { category: 'AI & Knowledge Systems', items: SKILLS_DATA.ai },
        { category: 'Authentication, Cloud & DevOps', items: SKILLS_DATA.cloud },
      ];
    }
    if (activeTab === 'frontend') return [{ category: 'Frontend Engineering', items: SKILLS_DATA.frontend }];
    if (activeTab === 'backend') return [{ category: 'Backend Engineering', items: SKILLS_DATA.backend }];
    if (activeTab === 'databases') {
      return [
        { category: 'Databases & Vector Storage', items: SKILLS_DATA.databases },
        { category: 'AI & Knowledge Systems', items: SKILLS_DATA.ai },
      ];
    }
    if (activeTab === 'cloud') return [{ category: 'Authentication, Cloud & DevOps', items: SKILLS_DATA.cloud }];
    return [];
  };

  const skillGroups = getDisplayedSkills();

  return (
    <div className="p-3 md:p-4 bg-[#c0c0c0] h-full flex flex-col select-text text-gray-900">
      {/* Tab Navigation */}
      <div className="win-tabs overflow-x-auto select-none shrink-0 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`win-tab whitespace-nowrap text-xs ${
              activeTab === tab.id ? 'is-active' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Tab Body */}
      <div className="flex-1 win-inset bg-white p-3 md:p-4 overflow-y-auto min-h-0 text-xs">
        <div className="mb-3 pb-2 border-b border-gray-200 flex items-center justify-between">
          <div className="text-[11px] text-gray-600 font-sans">
            Installed Modules &bull; Configured Frameworks &amp; Tooling
          </div>
          <div className="text-[11px] font-bold text-[#000080]">
            Verified Clean Stack
          </div>
        </div>

        <div className="space-y-5">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx}>
              <h4 className="font-bold text-[#000080] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#000080]" />
                <span>{group.category}</span>
                <span className="text-gray-400 font-normal text-[11px]">
                  ({group.items.length})
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="win-outset bg-[#f0f0f0] p-2 flex items-center gap-2.5 hover:bg-white transition"
                  >
                    <div className="w-8 h-8 win-inset bg-white flex items-center justify-center text-lg shrink-0">
                      {skill.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-gray-900 text-xs truncate">
                        {skill.name}
                      </div>
                      <div className="text-[10px] text-gray-600 truncate mt-0.5">
                        {skill.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Status Footer */}
      <div className="mt-2 text-[11px] text-gray-600 flex justify-between items-center select-none shrink-0 px-1">
        <span>Ready. All technical modules operational.</span>
        <span className="font-mono text-gray-500">Device Manager OK</span>
      </div>
    </div>
  );
};
