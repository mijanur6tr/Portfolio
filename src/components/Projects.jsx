import React from 'react';
import { projectData } from '../constants';

const Projects = ({ limit }) => {
  // If a limit is passed, slice the projectData; otherwise, show all
  const displayedProjects = limit ? projectData.slice(0, limit) : projectData;

  return (
    <div className="py-5 px-10 mb-10 lg:mb-15 lg:px-20 min-h-screen">
      <h2 className="text-center pb-5 my-10 lg:my-15 text-4xl">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {displayedProjects.map(project => (
          <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1">
              <h3 className="text-xl text-amber-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="flex justify-between px-4 pb-4">
              <a href={project.detailLink} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Detail</a>
              <a href={project.previewLink} className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">Preview</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
