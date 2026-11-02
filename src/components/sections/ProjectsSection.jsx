'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const ProjectsSection = ({ initialProjects = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & RAG', 'Full-Stack Web'];

  const filtered = initialProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="work" className="bg-[#fbfbfd] py-10 sm:py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-10 pb-3 sm:pb-5 border-b border-neutral-200 gap-4">
          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1.5">
              // 02. SELECTED WORK (TOP 6)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              Featured Systems & Applications
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-none transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0c0b13] text-white font-semibold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Zero Radius & Compact Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((project) => (
            <div
              key={project.id || project.slug}
              className="group bg-white rounded-none border border-neutral-200 hover:border-neutral-900 transition-all duration-200 flex flex-col justify-between corner-crosshair"
            >
              <div>
                {/* Compact Image Container (h-36 instead of h-48) */}
                <div className="relative w-full h-36 bg-neutral-100 border-b border-neutral-200 overflow-hidden rounded-none">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300 rounded-none"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400">
                      [ System Image ]
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-none bg-[#0c0b13]/90 text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content with Compact Padding */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                    {project.cardDescription || project.description?.slice(0, 140)}
                  </p>

                  {/* Solved Problems Key Highlights */}
                  {project.problems && project.problems.length > 0 && (
                    <div className="mb-3 pt-2.5 border-t border-neutral-100">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                        Core Solution:
                      </div>
                      <div className="flex items-start gap-1.5 text-[11px] text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{project.problems[0]}</span>
                      </div>
                    </div>
                  )}

                  {/* Tech Badges (Rounded-none) */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {(project.technologies || []).slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies || []).length > 3 && (
                      <span className="text-[10px] font-mono px-1 py-0.5 text-neutral-400">
                        +{(project.technologies || []).length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Links (Compact & Sharp) */}
              <div className="px-4 py-2.5 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between text-xs">
                <Link
                  href={`/projects/${project.slug || project.id}`}
                  className="font-semibold text-neutral-900 hover:text-emerald-700 transition-colors"
                >
                  Architecture & Details &rarr;
                </Link>

                <div className="flex items-center gap-1.5">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded-none hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
                      title="GitHub Repository"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded-none hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-6 sm:mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-[#0c0b13] text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all border border-neutral-800"
          >
            <span>Explore All Projects Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
