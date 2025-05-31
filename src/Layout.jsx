import React from 'react'
import {Outlet} from 'react-router-dom'
import {Navbar} from './components/Navbar.jsx'
import {Footer} from './components/Footer.jsx'


/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
       <div className='overflow-x-hidden text-white selection:text-cyan-900 selection:bg-cyan-300'>
        <div className='fixed top-0 -z-10 h-fit w-full'><div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div></div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
   )
  }
