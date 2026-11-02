'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsClientView({ initialProjects = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & RAG', 'Full-Stack Web'];

  const filtered = initialProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.technologies || []).some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-neutral-200">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search by title, tech, or problem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 font-sans"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0c0b13] text-white font-semibold'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-neutral-500 font-mono text-xs">
          No projects found matching your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id || project.slug}
              className="group bg-white rounded-none border border-neutral-200 hover:border-neutral-900 transition-all duration-200 flex flex-col justify-between corner-crosshair"
            >
              <div>
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

                  <div className="flex flex-wrap gap-1 pt-1">
                    {(project.technologies || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
      )}
    </div>
  );
}
