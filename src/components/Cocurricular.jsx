import React from 'react'
import { motion } from "framer-motion"
import spectrumLogo from "../../public/spectrum.jpg" // replace with actual path
import hackLogo from "../../public/hack.png"         // replace with actual path

/**
* @function CoCurricular
**/

export const CoCurricular = () => {
  return (
    <div className='border-b border-neutral-900 py-4'>
      <motion.h2
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='text-center my-15 text-4xl'
      >
        Co-Curricular Activities
      </motion.h2>

      <div className='flex flex-col gap-12 justify-center px-8 lg:px-20 py-5'>

        {/* Spectrum */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row gap-6 items-center lg:items-start relative'
        >
          {/* Left Column: Info */}
          <div className='flex-1 relative text-base lg:text-lg'>
            <span className="absolute -left-[13px] top-2 w-[8px] h-full rounded-md bg-amber-600 border-2 border-gray-900"></span>
            <h4 className='font-semibold'>Oct 2025 - Present</h4>
            <h3 className='text-xl font-semibold'>Junior Executive | Spectrum</h3>
            <p className='mt-1'>Professional Skill Development Club at KUET</p>
            <p>Handled case competitions, skill-related events, and managed web dev for events.</p>
          </div>

          {/* Right Column: Logo */}
          <div className='w-24 lg:w-52 flex justify-center items-center'>
            <img src={spectrumLogo} alt="Spectrum Logo" className='w-full h-auto rounded-lg shadow-md' />
          </div>
        </motion.div>

        {/* HACK */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row gap-6 items-center lg:items-start relative'
        >
          {/* Left Column: Info */}
          <div className='flex-1 relative text-base lg:text-lg'>
            <span className="absolute -left-[13px] top-2 w-[8px] h-full rounded-md bg-amber-600 border-2 border-gray-900"></span>
            <h4 className='font-semibold'>Oct 2025 - Present</h4>
            <h3 className='text-xl font-semibold'>Junior Executive | HACK</h3>
            <p className='mt-1'>Hardware Acceleration Club at KUET</p>
            <p>Worked on Arduino projects, hardware events, and supported project-related activities.</p>
          </div>

          {/* Right Column: Logo */}
          <div className='w-24 lg:w-42 flex justify-center items-center'>
            <img src={hackLogo} alt="HACK Logo" className='w-full h-auto rounded-lg shadow-md' />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
