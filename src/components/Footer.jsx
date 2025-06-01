import React from 'react';
import { motion } from "framer-motion"

/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <div className="bg-slate-900 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Motive */}
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.1}}
        
        >
          <h3 className="text-lg font-semibold text-white mb-2">My Motive</h3>
          <p className="text-sm text-gray-400">
            I aim to combine creativity with logic to bring ideas to life on the web.
            Every line of code I write is a step toward making the digital world more
            interactive, inclusive, and innovative.
          </p>
        </motion.div>

        {/* About Links */}
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.15}}
        
        >
          <h3 className="text-lg font-semibold text-white mb-2">Links</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Get in Touch</a></li>
            <li><a href="#">Have Fun</a></li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.2}}
        
        >
          <h3 className="text-lg font-semibold text-white mb-2">Follow Me</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li><a href="https://www.instagram.com/mijanur6tr/">Instagram</a></li>
            <li><a href="https://x.com/mijanur6tr">X</a></li>
            <li><a href="https://github.com/mijanur6tr">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mijanur-rahman-9508682ba/">LinkedIn</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1,delay:.25}}
        
        >
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm text-gray-400">WhatsApp: 0177777789</p>
          <p className="text-sm text-gray-400">Phone: 0177777789</p>
          <p className="text-sm text-gray-400">Email: lorem23@loremmail.com</p>
        </motion.div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-gray-500 mt-10">
        <span>© 2025 Mijanur Rahman. All rights reserved.</span>
      </div>
    </div>
  );
};
