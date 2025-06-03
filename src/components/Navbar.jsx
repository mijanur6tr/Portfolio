import React, { useState } from 'react';
import logo from '../../public/logo.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-slate-900 text-white font-light py-2 px-5">
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-20 h-auto" />
        </div>

        {/* Desktop Nav + Social */}
        <div className="hidden lg:flex justify-between items-center gap-10 ml-auto">
          <div className="flex gap-6 text-lg">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : " hover:text-amber-200 transition-colors duration-300 "}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : "hover:text-amber-200 transition-colors duration-300 "}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : "hover:text-amber-200 transition-colors duration-300 "}>Contact</NavLink>
          </div>
          <div className="flex gap-4 text-2xl ml-8">
            <a href="https://github.com/mijanur6tr" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-orange-400 transition" />
            </a>
            <a href="https://www.instagram.com/mijanur6tr/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-orange-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-orange-400 transition" />
            </a>
            <a href="https://x.com/mijanur6tr" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-orange-400 transition" />
            </a>
          </div>
        </div>

        {/* Mobile Social + Hamburger */}
        <div className="lg:hidden flex items-center gap-4 ml-auto text-2xl">
          {/* Social Icons */}
          <a href="https://github.com/mijanur6tr" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-orange-400 transition" />
          </a>
          <a href="https://www.instagram.com/mijanur6tr/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-orange-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-orange-400 transition" />
          </a>
          <a href="https://x.com/mijanur6tr" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-orange-400 transition" />
          </a>

          {/* Hamburger */}
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
   <div
  className={`lg:hidden transition-all duration-500 ease-in-out transform ${
    menuOpen
      ? 'max-h-60 opacity-100 scale-100 mt-4 py-5'
      : 'max-h-0 opacity-0 scale-95 py-0'
  } overflow-hidden flex flex-col gap-4 text-lg bg-gray-800 px-5 rounded-xl`}
>

          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : "hover:text-amber-200 transition-colors duration-300 "}>Home</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : "hover:text-amber-200 transition-colors duration-300 "}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "text-green-400 transition-colors duration-300" : "hover:text-amber-200 transition-colors duration-300 "}>Contact</NavLink>
        </div>
      
    </nav>
  );
};
