import React, { useState } from 'react';
import { projectData } from '../../../assets';
import { useWindowManager } from '../../../context/WindowManagerContext';
import { FolderProjectsIcon } from '../RetroIcons';
import { FaExternalLinkAlt, FaGithub, FaFolder, FaFolderOpen, FaThLarge, FaList } from 'react-icons/fa';

export const ProjectsApp = () => {
  const { windows } = useWindowManager();
  const initialProjectId = windows.projects?.data?.selectedProjectId || null;

  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'details'
  const [selectedProject, setSelectedProject] = useState(
    () => projectData.find((p) => p.id === initialProjectId) || null
  );

  // Categorize projects intelligently
  const categorize = (project) => {
    const title = project.title.toLowerCase();
    const desc = (project.description || '').toLowerCase();
    const tech = (project.technologies || []).join(' ').toLowerCase();

    if (title.includes('ai') || desc.includes('rag') || tech.includes('astradb') || tech.includes('rag')) {
      return 'AI & RAG';
    }
    if (title.includes('shuto') || title.includes('job') || tech.includes('mongodb') || tech.includes('postgresql')) {
      return 'Full-Stack Web';
    }
    return 'Community & Platforms';
  };

  const categories = ['All', 'AI & RAG', 'Full-Stack Web', 'Community & Platforms'];

  const filteredProjects = projectData.filter((p) => {
    if (activeCategory === 'All') return true;
    return categorize(p) === activeCategory;
  });

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] text-[#000000] select-text">
      {/* Explorer Menu Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-b border-gray-400 flex items-center gap-4 text-[11px] text-gray-800 select-none">
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>F</u>ile</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>E</u>dit</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>V</u>iew</span>
        <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>H</u>elp</span>
      </div>

      {/* Explorer Toolbar */}
      <div className="bg-[#c0c0c0] px-2 py-1 border-b border-gray-400 flex flex-wrap items-center justify-between gap-2 select-none text-xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="win-btn px-2 py-0.5 text-[11px]"
            title="Up one folder level"
          >
            &uarr; Up
          </button>

          <div className="h-4 w-[1px] bg-gray-400 mx-1" />

          {/* View toggle */}
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`win-btn px-2 py-0.5 text-[11px] flex items-center gap-1 ${
              viewMode === 'grid' ? 'is-active' : ''
            }`}
            title="Large Icons View"
          >
            <FaThLarge className="w-3 h-3" />
            <span className="hidden sm:inline">Grid</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('details')}
            className={`win-btn px-2 py-0.5 text-[11px] flex items-center gap-1 ${
              viewMode === 'details' ? 'is-active' : ''
            }`}
            title="Details View"
          >
            <FaList className="w-3 h-3" />
            <span className="hidden sm:inline">Details</span>
          </button>
        </div>

        {/* Category selector */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-gray-700 text-[11px]">Filter:</span>
          <select
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value);
              setSelectedProject(null);
            }}
            className="win-inset bg-white px-2 py-0.5 text-xs font-sans text-gray-900 border border-gray-500 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-[#c0c0c0] px-2 py-1 border-b border-gray-400 flex items-center gap-2 text-xs select-none">
        <span className="text-[11px] font-semibold text-gray-700 shrink-0">Address</span>
        <div className="win-inset bg-white px-2 py-0.5 flex-1 flex items-center gap-1 text-[11px] text-gray-800 font-mono overflow-hidden">
          <FolderProjectsIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">
            C:\Mijanur\Projects\{activeCategory}
            {selectedProject ? `\\${selectedProject.title}` : ''}
          </span>
        </div>
      </div>

      {/* Main Explorer Workspace */}
      <div className="flex-1 flex overflow-hidden min-h-0 bg-white">
        {/* Left Folder Tree Pane (Hidden on very small screens) */}
        <div className="hidden md:flex flex-col w-48 border-r-2 border-gray-300 bg-[#f4f4f4] p-2 text-xs overflow-y-auto shrink-0 select-none">
          <div className="font-bold text-[11px] uppercase tracking-wider text-gray-600 mb-2">
            Folders
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 font-semibold text-gray-800">
              <FaFolderOpen className="text-yellow-600 w-3.5 h-3.5 shrink-0" />
              <span>C:\Projects</span>
            </div>
            <div className="pl-4 space-y-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <div
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedProject(null);
                    }}
                    className={`flex items-center gap-1.5 px-1 py-0.5 cursor-pointer rounded-none text-[11px] ${
                      isActive
                        ? 'bg-[#000080] text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaFolder className={isActive ? 'text-yellow-300' : 'text-yellow-600'} />
                    <span className="truncate">{cat}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-auto pt-4 text-[10px] text-gray-500 border-t border-gray-300">
            Total Projects: {projectData.length}
          </div>
        </div>

        {/* Right Content Area: Either File View or Selected Project View */}
        <div className="flex-1 flex flex-col overflow-y-auto p-3 min-w-0 bg-[#ffffff]">
          {selectedProject ? (
            /* Detailed Project View */
            <div className="flex flex-col gap-3 h-full">
              {/* Back to folder button */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="win-btn text-xs py-1 px-3 font-semibold"
                >
                  &larr; Back to File List
                </button>
                <span className="text-xs text-gray-500 font-mono">
                  ID: #{selectedProject.id} &bull; {categorize(selectedProject)}
                </span>
              </div>

              {/* Project Title & Main Preview */}
              <div className="flex flex-col lg:flex-row gap-4 items-start">
                <div className="w-full lg:w-1/2 win-outset p-1 bg-[#c0c0c0]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-60 object-cover bg-black"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#000080]">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {selectedProject.cardDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3">
                      <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 border border-gray-400 text-[11px] px-2 py-0.5 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div className="mt-4 pt-3 border-t border-gray-300 flex flex-wrap gap-2">
                    {selectedProject.previewLink && (
                      <a
                        href={selectedProject.previewLink}
                        target="_blank"
                        rel="noreferrer"
                        className="win-btn py-1.5 px-3 font-bold text-xs text-emerald-800 bg-emerald-50"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>Launch Live Demo</span>
                      </a>
                    )}

                    {selectedProject.githubLink && !selectedProject.githubLink.startsWith('/projects') && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="win-btn py-1.5 px-3 font-semibold text-xs text-gray-900"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* In-depth Description */}
              <div className="win-inset p-3 bg-[#fafafa] text-xs text-gray-800 leading-relaxed mt-2">
                <div className="font-bold text-[#000080] mb-1 uppercase tracking-wide text-[11px]">
                  Project Overview &amp; Architecture:
                </div>
                <p>{selectedProject.description}</p>
              </div>

              {/* Problems Solved */}
              {selectedProject.problems && selectedProject.problems.length > 0 && (
                <div className="win-inset p-3 bg-[#fffdf5] border-yellow-300 text-xs text-gray-800 leading-relaxed">
                  <div className="font-bold text-[#804000] mb-1 uppercase tracking-wide text-[11px]">
                    Technical Challenges &amp; Solutions:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedProject.problems.map((prob, idx) => (
                      <li key={idx}>{prob}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="win-outset bg-[#c0c0c0] p-2 flex flex-col justify-between cursor-pointer hover:border-blue-700 transition group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="win-inset bg-black p-0.5 overflow-hidden mb-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>

                    <h4 className="font-bold text-sm text-[#000080] group-hover:underline truncate">
                      {project.title}
                    </h4>
                    <p className="text-[11px] text-gray-700 mt-1 line-clamp-2 leading-snug">
                      {project.cardDescription}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-300">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies?.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white border border-gray-400 px-1 py-0.2 text-gray-700 truncate max-w-[100px]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="text-[10px] text-gray-600 font-bold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="win-btn text-[11px] py-0.5 px-2 font-semibold"
                      >
                        Details
                      </button>

                      <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                        {project.previewLink && (
                          <a
                            href={project.previewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="win-btn text-[10px] py-0.5 px-1.5 text-emerald-800"
                            title="Live Demo"
                          >
                            Live ↗
                          </a>
                        )}
                        {project.githubLink && !project.githubLink.startsWith('/projects') && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="win-btn text-[10px] py-0.5 px-1.5 text-gray-800"
                            title="GitHub"
                          >
                            <FaGithub className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Details / Table View */
            <div className="overflow-x-auto win-inset bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#c0c0c0] border-b-2 border-gray-400 select-none text-[11px] text-gray-800">
                  <tr>
                    <th className="py-1 px-2 border-r border-gray-300">Name</th>
                    <th className="py-1 px-2 border-r border-gray-300">Category</th>
                    <th className="py-1 px-2 border-r border-gray-300">Primary Stack</th>
                    <th className="py-1 px-2 border-r border-gray-300 text-center">Live Demo</th>
                    <th className="py-1 px-2 text-center">Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="hover:bg-blue-100 cursor-pointer transition-colors"
                    >
                      <td className="py-2 px-2 font-semibold text-[#000080] flex items-center gap-2">
                        <FolderProjectsIcon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{project.title}</span>
                      </td>
                      <td className="py-2 px-2 text-gray-600 text-[11px]">
                        {categorize(project)}
                      </td>
                      <td className="py-2 px-2 text-gray-700 text-[11px] truncate max-w-[200px]">
                        {project.technologies?.slice(0, 3).join(', ')}
                      </td>
                      <td
                        className="py-2 px-2 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.previewLink ? (
                          <a
                            href={project.previewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-700 font-bold hover:underline"
                          >
                            Preview ↗
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td
                        className="py-2 px-2 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.githubLink && !project.githubLink.startsWith('/projects') ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-800 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            <FaGithub className="w-3 h-3" />
                            <span>Repo</span>
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Explorer Bottom Status Bar */}
      <div className="bg-[#c0c0c0] px-2 py-0.5 border-t border-gray-400 flex items-center justify-between text-[11px] text-gray-700 select-none">
        <div className="truncate">
          {filteredProjects.length} object(s) {selectedProject ? `| Selected: ${selectedProject.title}` : ''}
        </div>
        <div className="text-gray-500 font-mono shrink-0">
          Local Intranet: C:\
        </div>
      </div>
    </div>
  );
};
