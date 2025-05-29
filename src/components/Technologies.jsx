import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';


/**
* @author
* @function Technologies
**/

export const Technologies = (props) => {
    return (
        <div className='border-b border-neutral-900 py-4'>
            <h2 className='text-center mb-5 lg:my-20 text-4xl'>Technologies</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-orange-600'><FaHtml5 /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-blue-600'><FaCss3Alt /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-yellow-400'><SiJavascript /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-cyan-400'><FaReact /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800  text-white'><SiNextdotjs /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-sky-400'><SiTailwindcss /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-green-600'><SiMongodb /></div>
                <div className='text-7xl rounded-2xl p-4 border-4 border-neutral-800 text-gray-500'><SiExpress /></div>



            </div>
        </div>
    )
}
