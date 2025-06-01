import React from 'react'
import about from '../../public/about.jpeg'
import { ABOUT_TEXT } from '../constants'
import { animate, motion } from "framer-motion"

/**
* @author
* @function About
**/


export const About = (props) => {
    return (
        <div className='border-b border-neutral-900 pb-10'>
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                className='text-center mb-15 my-20 text-4xl'>About <span className='text-neutral-300'>Me</span></motion.h2>
            <div className='flex flex-wrap-reverse '>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-center mt-6 lg:mt-0'>
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .2 }}
                            className='w-3/4 lg:w-96 rounded-2xl shadow-lg' src={about} alt="Mijanur" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .2}}
                            className='my-4 max-w-xl mx-auto lg:mx-0 font-light tracking-tight text-xl'>
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}
