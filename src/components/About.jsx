import React from 'react'
import about from '../../public/about.jpeg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export const About = (props) => {
    return (
        <div className='border-b border-neutral-900 pb-10'>
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                viewport={{ once: true }}
                className='text-center mb-15 my-20 text-4xl'
            >
                About <span className='text-neutral-300'>Me</span>
            </motion.h2>

            <div className='flex flex-wrap-reverse'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col justify-center items-center mt-10 lg:mt-0'>
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .2 }}
                            viewport={{ once: true }}
                            className='w-3/4 lg:w-96 rounded-2xl shadow-lg'
                            src={about}
                            alt="Mijanur"
                        />

                        {/* Contact Me Button for small devices */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='mt-14 flex justify-center lg:hidden'
                        >
                            <Link
                                to="/projects"
                                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                            >
                                Explore My Projects
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Text + Button Section */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col  gap-15 justify-center items-center lg:items-start'>
                        <motion.p
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .2 }}
                            viewport={{ once: true }}
                            className='my-4 lg:my-2 max-w-xl mx-auto lg:mx-0 font-extralight tracking-tight text-center lg:text-left text-xl'
                        >
                            {ABOUT_TEXT}
                        </motion.p>

                        {/* Contact Me Button for large devices */}
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='mt-4  justify-center hidden lg:flex'
                        >
                            <Link
                                to="/projects"
                                className="inline-block  px-13 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                            >
                                Explore My Projects
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
