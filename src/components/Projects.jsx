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

    <div className="py-5 px-10 mb-10 lg:mb-15  lg:px-20 xl:px-30 min-h-screen">
      <motion.h2
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{once:true}}
        className="text-center pb-5 my-10 lg:my-15 text-4xl">My Projects</motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 xl:gap-20">
        {displayedProjects.map(project => (
          <motion.div
            initial={{ scale: .9, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: .2 }}
            viewport={{once:true}}
            
            key={project.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1">
              <h3 className="text-xl text-amber-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="flex justify-between px-4 pb-4">
              <a href={project.detailLink} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Detail</a>
              <a href={project.previewLink} className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">Preview</a>
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
            viewport={{once:true}}
            className="mb-4 font-light text-xl text-gray-300">You can check out more projects that I have built.</motion.p>
        
         <motion.div
  initial={{ y: 25, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
>
  <Link
    to="/projects"
    className="inline-block bg-amber-600 text-white px-4 py-2 rounded-xl hover:bg-amber-700 transition-colors duration-300"
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
