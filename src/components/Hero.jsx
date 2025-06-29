import React from 'react'
import profile from "../../public/profile.jpeg"
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

/**
* @function Hero
**/

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay }
  },
})

export const Hero = (props) => {
  return (

    <div className='border-b border-neutral-900 lg:mb-20 mb-2 px-6 py-5 lg:py-25 lg:px-15 xl:px-27 flex flex-col lg:flex-row gap-10 items-center'>


      <motion.div initial="hidden"
        animate="visible"

        className='w-full  lg:w-1/2 text-center lg:text-left'>
        <motion.h1
          variants={container(0)}
          viewport={{ once: true }}

          className='text-4xl sm:text-6xl md:text-6xl xl:text-7xl lg:text-6xl font-thin tracking-tight pb-8'>
          Mijanur Rahman
        </motion.h1>
        <motion.p
          variants={container(.3)}
          viewport={{ once: true }}


          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight bg-clip-text'>
          Full-Stack Developer
        </motion.p>
        <motion.p
          variants={container(.6)}
          viewport={{ once: true }}
          className='my-4 max-w-xl mx-auto py-2 xl:py-5 lg:mx-0 font-extralight tracking-tight text-xl'>
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          variants={container(.9)}
          viewport={{ once: true }}
          className='mt-4 mx-auto   hidden lg:block'
        >
          <Link
            to="/contact"
            className="inline-block mt-2 px-10 py-2 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition duration-300"
          >
            Contact With Me
          </Link>
        </motion.div>

      </motion.div>


      <div className='w-full lg:w-1/2 flex justify-center'>
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
          className='w-full lg:w-110 xl:w-140  rounded-2xl shadow-lg' src={profile} alt="Mijanur Rahman" />
      </div>
    </div>

  )
}
