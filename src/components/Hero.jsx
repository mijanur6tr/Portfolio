import React from 'react'
import profile from "../../public/profile.jpeg"
import { HERO_CONTENT } from '../constants'
import {motion } from "framer-motion"

/**
* @function Hero
**/

const container = (delay)=>({
  hidden:{
    x:-100,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:1,delay:delay}
  },
})

export const Hero = (props) => {
  return (
  
      <div className='border-b border-neutral-900 lg:mb-20 mb-2 px-6 py-5 lg:py-25 lg:px-15 flex flex-col lg:flex-row gap-15 items-center'>
        
       
        <motion.div  initial="hidden"
            animate="visible"
            
             className='w-full lg:w-1/2 text-center lg:text-left'>
          <motion.h1 
          variants={container(0)}
          
          className='text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight pb-8'>
            Mijanur Rahman
          </motion.h1>
          <motion.p
            variants={container(.3)}
         
            
          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight bg-clip-text'>
            Full-Stack Developer
          </motion.p>
          <motion.p 
         variants={container(.6)}
          className='my-4 max-w-xl mx-auto lg:mx-0 font-light tracking-tight text-xl'>
            {HERO_CONTENT}
          </motion.p>
        </motion.div>

        
        <div className='w-full lg:w-1/2 flex justify-center'>
          <motion.img 
          initial={{x:200,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1.5,delay:0}}
          className='w-full lg:w-120 rounded-2xl shadow-lg' src={profile} alt="Mijanur Rahman" />
        </div>
      </div>
  
  )
}
