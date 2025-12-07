import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaShieldAlt, FaKey } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiC, SiPostgresql, SiPrisma, SiMysql, SiMongoose, SiPostman, SiVercel, SiFirebase, SiAppwrite, SiClerk, SiRender, SiHostinger } from 'react-icons/si'
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion"

const bounce = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 py-4 mb-12'>
      <motion.h2
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='text-center mb-12 text-4xl'
      >
        Technologies
      </motion.h2>

      {/* ---- Frontend ---- */}
      <h3 className="text-2xl text-center mb-6 text-neutral-400">Frontend</h3>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-2 lg:gap-4 mb-10'
      >
        <Tech icon={<FaHtml5 />} color="text-orange-600" duration={2.2} />
        <Tech icon={<FaCss3Alt />} color="text-blue-600" duration={3.0} />
        <Tech icon={<SiJavascript />} color="text-yellow-400" duration={1.8} />
        <Tech icon={<SiTypescript />} color="text-blue-500" duration={2.5} />
        <Tech icon={<FaReact />} color="text-cyan-400" duration={3.2} />
        <Tech icon={<SiNextdotjs />} color="text-white" duration={1.8} />
        <Tech icon={<SiTailwindcss />} color="text-sky-400" duration={2.5} />
      </motion.div>

      {/* ---- Backend ---- */}
      <h3 className="text-2xl text-center mb-6 text-neutral-400">Backend</h3>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-2 lg:gap-4 mb-10'
      >
        <Tech icon={<FaNodeJs />} color="text-green-600" duration={2.2} />
        <Tech icon={<SiExpress />} color="text-gray-400" duration={2.0} />
        <Tech icon={<SiPrisma />} color="text-indigo-400" duration={2.8} />
        <Tech icon={<SiPostman />} color="text-orange-500" duration={3.0} />
        <Tech icon={<FaPython />} color="text-yellow-500" duration={2.5} />
        <Tech icon={<SiC />} color="text-blue-400" duration={2.4} />
      </motion.div>

      {/* ---- Database ---- */}
      <h3 className="text-2xl text-center mb-6 text-neutral-400">Database</h3>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-2 lg:gap-4 mb-10'
      >
        <Tech icon={<SiMongodb />} color="text-green-600" duration={2.0} />
        <Tech icon={<SiMongoose />} color="text-red-500" duration={2.4} />
        <Tech icon={<SiPostgresql />} color="text-blue-600" duration={2.6} />
        <Tech icon={<SiMysql />} color="text-blue-500" duration={2.8} />
      </motion.div>

      {/* ---- Authentication / Cloud ---- */}
      <h3 className="text-2xl text-center mb-6 text-neutral-400">Auth & Cloud</h3>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-2 lg:gap-4 mb-10'
      >
        <Tech icon={<SiFirebase />} color="text-yellow-500" duration={2.2} />
        <Tech icon={<SiAppwrite />} color="text-pink-500" duration={2.0} />
        <Tech icon={<SiClerk />} color="text-purple-500" duration={2.8} />
        <Tech icon={<FcGoogle />} color="text-purple-500" duration={3.0} />
        <Tech icon={<FaShieldAlt />} color="text-purple-500" duration={2.5} />
        <Tech icon={<FaKey />} color="text-purple-500" duration={2.4} />
      </motion.div>

      {/* ---- Hosting / Deployment ---- */}
      <h3 className="text-2xl text-center mb-6 text-neutral-400">Hosting / Deployment</h3>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-2 lg:gap-4'
      >
        <Tech icon={<SiVercel />} color="text-white" duration={2.0} />
        <Tech icon={<SiRender />} color="text-blue-400" duration={2.6} />
        <Tech icon={<SiHostinger />} color="text-purple-400" duration={3.0} />
        <Tech icon={<FaGitAlt />} color="text-orange-600" duration={2.2} />
        <Tech icon={<FaGithub />} color="text-white" duration={2.8} />
      </motion.div>
    </div>
  )
}

const Tech = ({ icon, color, duration }) => {
  return (
    <motion.div
      variants={bounce(duration)}
      initial="initial"
      animate="animate"
      className={`text-7xl rounded-2xl p-4 border-4 border-neutral-800 ${color}`}
    >
      {icon}
    </motion.div>
  )
}
