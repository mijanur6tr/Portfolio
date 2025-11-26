import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Technologies } from './Technologies'
import { Education } from './Education'
import Projects from './Projects'
import ScrollToTop from './ScrollTop'
import { CoCurricular } from './Cocurricular'

/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
     <div className='overflow-x-hidden text-white selection:text-cyan-900 selection:bg-cyan-300'>
        <div className='fixed top-0 -z-10 h-fit w-full'><div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div></div>
        
        <div className='container mx-auto px-8'>
          <Hero/>
          <About/>
          <Technologies/>
          <Projects limit={6} />
          <Education/>
          <CoCurricular/>
          
          <ScrollToTop/>
        </div>
      </div>
   )
  }
