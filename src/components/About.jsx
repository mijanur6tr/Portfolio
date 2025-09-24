import React from 'react'
import about from '../../public/about.jpeg'
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
                My <span className='text-neutral-300'>Experience</span>
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
                        <div className='w-full '>
                            <div className='flex flex-col gap-6 justify-center items-center lg:items-start'>

                                <motion.h3
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .2 }}
                                    viewport={{ once: true }}
                                    className='text-2xl font-semibold mb-4 text-center lg:text-left'
                                >
                                    Full Stack Intern | Yolast <span className="text-neutral-400 text-lg">(May – July 2025)</span>
                                </motion.h3>

                                <motion.ul
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .4 }}
                                    viewport={{ once: true }}
                                    className='list-disc list-inside text-xl font-light tracking-tight max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-3'
                                >
                                    <li>Designed and implemented end-to-end authentication systems for production-ready flows.</li>
                                    <li>Built role-based authorization for multiple user types (users, affiliates, service providers, multi-level admins).</li>
                                    <li>Developed secure flows including custom registration, Google OAuth, OTP-based reset password, and user data persistence.</li>
                                    <li>Integrated Razorpay Payment Gateway to handle transactions, subscription logic, and order validations.</li>
                                    <li>Managed and debugged complex application structures.</li>
                                </motion.ul>

                                <motion.p
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .6 }}
                                    viewport={{ once: true }}
                                    className='italic text-lg text-green-400 mt-4 text-center lg:text-left'
                                >
                                    Key Impact: Strengthened auth security, streamlined user onboarding, and ensured secure payment handling.
                                </motion.p>

                            </div>
                        </div>


                        {/* Projects explore Button for large devices */}
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
