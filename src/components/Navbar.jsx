import React from 'react'
import logo from '../../public/logo.png'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';


/**
* @author
* @function Navbar
**/

export const Navbar = (props) => {
  return(
    <nav className='flex lg:mb-20 sm:mb-5 py-4 justify-between items-center '>
            <div className='w-23'>
                <img src={logo} alt="logo" />
            </div>
            <div className='text-3xl flex justify-center items-center gap-5'>

                <FaGithub/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaTwitter/>
            </div>
    </nav>
   )
  }
