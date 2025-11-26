import React from 'react'
import { motion } from "framer-motion"

/**
* @author
* @function Education
**/

export const Education = (props) => {
  return(
    <div className='border-b border-neutral-900 py-4'>
        <motion.h2
        initial={{ y: 45, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                viewport={{once:true}}
        className='text-center mb-15   text-4xl'>Education</motion.h2>
    <div className='flex flex-col gap-8 justify-center px-8 lg:px-35 py-5  items-start font-light'>

        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1}}
        viewport={{once:true}}
         
        className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[8px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>2023-present</h4>
        <h3>Bachelor Of Science-Engg.</h3>
        <p>Department of Industrial Engineering and Management</p>
        <p>Khulna University of Engineering and Technology~KUET</p>
        </motion.div>
       
        <motion.div
         whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.2}}
        viewport={{once:true}}
        
        className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[8px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>2021-2023</h4>
        <h3>Higher Secondary Certificate</h3>
        <p>GPA : 5.00</p>
        <p>Meherpur Govt. College</p>
        </motion.div>

        <motion.div
         whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.4}}
        viewport={{once:true}}
         
        className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[8px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>Batch-2021</h4>
        <h3>Secondary School Certificate</h3>
        <p>GPA : 5.00</p>
        <p>Meherpur Govt. High School</p>
        </motion.div>

    </div>
    </div>
   )
  }
