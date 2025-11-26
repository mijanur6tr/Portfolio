import React from 'react';
import { projectData } from '../constants';
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Projects = ({ limit }) => {

  const displayedProjects = limit ? projectData.slice(0, limit) : projectData;

  //     const controls = useAnimation();

  // useEffect(() => {
  //   controls.start({ scale:1, opacity: 1 });
  // }, []);

  return (

    <div className="py-5 px-10 mb-10   lg:px-20 xl:px-30 min-h-screen">
      <motion.h2
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className="text-center pb-5 my-10 lg:my-15 text-4xl">My Projects</motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 xl:gap-20">
        {displayedProjects.map(project => (
          <motion.div
            initial={{ scale: 0.95, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={project.id}
            className=" rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-300 p-5 "
          >
            {/* Image with soft bottom shadow */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-xl shadow-[0_8px_14px_-6px_#11FFFF]"
              />
            </div>

            {/* Content */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-gray-200 tracking-tight text-sm mb-4 leading-relaxed">{project.cardDescription}</p>

              <div className="flex justify-between mt-auto gap-3">

                {/* Detail Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-gradient-to-r from-indigo-500 to-violet-800 text-white px-4 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition"
                >
                  Detail
                </Link>

                {/* Preview Button */}
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-4 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition"
                >
                  Preview
                </a>

                {/* GitHub Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-slate-700 to-[#11FFFF] text-white px-4 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition"
                >
                  GitHub
                </a>

              </div>

            </div>
          </motion.div>




        ))}
      </div>

      {limit && (
        <div className="text-center mt-16">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: .2 }}
            viewport={{ once: true }}
            className="mb-4 font-light text-xl text-gray-300">Check out more projects that I have built.</motion.p>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="inline-block text-white px-4 py-2 rounded-xl bg-gradient-to-r from-slate-500 to-cyan-700 hover:from-slate-600 hover:to-amber-800 transition-colors duration-300"

            >
              See more
            </Link>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Projects;
