import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion"


/**
* @author
* @function Technologies
**/


const icon = (duration)=>({
    initial:{
        y:-10
    },
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

        }
    }
})

export const Technologies = (props) => {
    return (
        <div className='border-b border-neutral-900 py-4 mb-15'>
            <motion.h2 
            initial={{ y: 45, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .2 }}
                viewport={{once:true}}
            className='text-center mb-25 my-20 text-4xl'>Technologies</motion.h2>
            <motion.div
            initial={{x:-100}}
            whileInView={{x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            className='flex flex-wrap justify-center items-center gap-4'>
                <motion.div 
                variants={icon(2.2)}
                initial="initial"
                animate="animate"
                
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-orange-600'><FaHtml5 /></motion.div >
                <motion.div 
                variants={icon(3.2)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-blue-600'><FaCss3Alt /></motion.div >
                <motion.div 
                variants={icon(2)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-yellow-400'><SiJavascript /></motion.div >
                <motion.div 
                variants={icon(3.2)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-cyan-400'><FaReact /></motion.div >
                <motion.div
                variants={icon(1.8)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800  text-white'><SiNextdotjs /></motion.div >
                <motion.div 
                variants={icon(2.5)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-sky-400'><SiTailwindcss /></motion.div >
                <motion.div 
                variants={icon(2)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-green-600'><SiMongodb /></motion.div >
                <motion.div 
                variants={icon(2.5)}
                initial="initial"
                animate="animate"
                className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-gray-500'><SiExpress /></motion.div >



            </motion.div>
        </div>
    )
}
