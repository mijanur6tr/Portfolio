import React from 'react'
import about from '../../public/about.jpeg'
import resumePdf from '../../public/Mijanur_Rahman_Resume.pdf' // Make sure your PDF is in the public folder
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
                    </div>
                </div>

                {/* EXPERIENCE SECTION */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-start items-start">

                    {/* Yolast */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full flex"
                    >
                        <div className="w-1 bg-orange-500 rounded-full mr-6"></div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">
                                Full-Stack Intern | Yolast
                                <span className="text-neutral-400 text-lg ml-2">(May – July 2025)</span>
                            </h3>
                            <ul className="list-disc list-inside text-lg font-light tracking-tight space-y-2">
                                <li>Designed and implemented end-to-end authentication systems.</li>
                                <li>Developed role-based authorization, Google OAuth2 & OTP reset flows.</li>
                                <li>Integrated Razorpay Payment Gateway for transactions & validations.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Fiverr Project: GrabSwap */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative w-full flex"
                    >
                        <div className="w-1 bg-orange-500 rounded-full mr-6"></div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">
                                Fiverr Project | Grabswap
                                <span className="text-neutral-400 text-lg ml-2">(October 2025)</span>
                            </h3>
                            <ul className="list-disc list-inside text-lg font-light tracking-tight space-y-2">
                                <li>Implemented cart, direct buy/sell, wallet, withdrawal & PhonePe.</li>
                                <li>Enhanced admin panel, chat, and location-based settings.</li>
                                <li>Delivered with no crashes & received a 5-star client review.</li>
                            </ul>
                        </div>
                    </motion.div>

                  {/* Download Resume Button with Animated Arrow */}
<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
  viewport={{ once: true }}
  className="flex justify-center lg:justify-start w-full"
>
  <a
    href={resumePdf}
    download="Mijanur_Rahman_Resume.pdf"
    className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-900 text-white rounded-lg shadow-md hover:from-emerald-600 hover:to-orange-700 transition duration-300"
  >
    Download Resume
    {/* Arrow */}
    <motion.span
      animate={{ y: [0, -6, 0] }} // moves up 6px and back
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="text-xl"
    >
      ⬇️
    </motion.span>
  </a>
</motion.div>


                </div>
            </div>
        </div>
    )
}
