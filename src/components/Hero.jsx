import React from 'react'
import profile from "../../public/profile.jpeg"
import { HERO_CONTENT } from '../constants'

/**
* @function Hero
**/

export const Hero = (props) => {
  return (
    <div>
      <div className='border-b border-neutral-900 lg:mb-4 mb-2 px-6 py-5 lg:py-20 lg:px-10 flex flex-col lg:flex-row gap-10 items-center'>
        
        {/* Text Section (comes first) */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight pb-8'>
            Mijanur Rahman
          </h1>
          <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight bg-clip-text'>
            Full-Stack Developer
          </span>
          <p className='my-4 max-w-xl mx-auto lg:mx-0 font-light tracking-tight text-xl'>
            {HERO_CONTENT}
          </p>
        </div>

        {/* Image Section (comes second) */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img className='w-58 sm:w-74 md:w-82 lg:w-98 rounded-2xl shadow-lg' src={profile} alt="Mijanur Rahman" />
        </div>
      </div>
    </div>
  )
}
