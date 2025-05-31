import React from 'react'
import about from '../../public/about.jpeg'
import { ABOUT_TEXT } from '../constants'

/**
* @author
* @function About
**/

export const About = (props) => {
  return(
    <div className='border-b border-neutral-900 pb-10'>
        <h2 className='text-center mb-15 my-20 text-4xl'>About <span className='text-neutral-300'>Me</span></h2>
        <div className='flex flex-wrap-reverse '>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center items-center mt-6 lg:mt-0'>
                    <img className='w-3/4 lg:w-96 rounded-2xl shadow-lg' src={about} alt="Mijanur" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-4 max-w-xl mx-auto lg:mx-0 font-light tracking-tight text-xl'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    </div>
   )
  }
