import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../constants';

const Details = () => {
  const { id } = useParams();
  const projectIndex = projectData.findIndex(p => p.id.toString() === id);
  const project = projectData[projectIndex];





  return project ? (<div className="px-6 sm:px-10 lg:px-20 xl:px-40 py-16 bg-slate-800 min-h-screen text-slate-900">

    <div className="bg-gradient-to-b from-white via-gray-50 to-white shadow-2xl rounded-3xl px-5 md:px-15 lg:px-20 py-18">


      <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl w-full max-h-[500px] object-cover shadow-xl mb-15"
      />

    
      <p className=" bg-gradient-to-br text-lg from-slate-600 tracking-tight to-slate-700 lg:px-20 px-10 py-10 rounded-2xl shadow-lgtext-lg text-gray-200 mb-0 mx-auto leading-relaxed">
        {project.description}
      </p>

      <div className="mb-8 py-15 text-center">
        <h2 className="text-2xl font-semibold pb-5 mb-2 text-cyan-600">Technologies Used:</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-green-700 px-3 py-1 rounded-xl text-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>


      {project.problems && (
        <div className="mb-12 text-center py-5">
          <h3 className="text-xl font-semibold mb-2 text-red-500">Problems Faced:</h3>
          <ul className="list-disc list-inside text-gray-600 max-w-xl mx-auto">
            {project.problems.map((problem, i) => (
              <li key={i}>{problem}</li>
            ))}
          </ul>
        </div>
      )}


      <div className="flex justify-around items-center mt-12 gap-4 text-sm font-medium">
        {projectIndex > 0 ? (
          <Link
            to={`/projects/${projectData[projectIndex - 1].id}`}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
          >
            ← Previous
          </Link>
        ) : <div></div>}

        {projectIndex < projectData.length - 1 ? (
          <Link
            to={`/projects/${projectData[projectIndex + 1].id}`}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
          >
            Next →
          </Link>
        ) : <div></div>}
      </div>
    </div>
  </div>
  ) : null

};

export default Details;
