import React, { useEffect, useState } from 'react';
import {motion } from "framer-motion"

const scroll = (duration)=>({
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

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    const totalScrollable = docHeight - winHeight;
    const scrolled = (scrollTop / totalScrollable) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <motion.div
    variants={scroll(1)}
                initial="initial"
                animate="animate"
    className="fixed bottom-6 right-6 z-50">
      <svg width="70" height="70" className="rotate-[-90deg]">
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="gray"
          strokeWidth="4"
          fill="white"
        />
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="#13AA52"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-75"
        />
      </svg>

      <button
        onClick={scrollToTop}
        className="absolute inset-0 flex items-center justify-center text-green-400 text-2xl font-light"
      >
        M
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
