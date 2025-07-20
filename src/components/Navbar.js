import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-bgPrimary/80 border-b border-glassBorder shadow-neon-violet'
          : 'bg-transparent border-none shadow-none'
      }`}
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Text Logo */}
        <a
          href="#hero"
          aria-label="Cryvion home link"
          className="font-orbitron text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-neonBlue via-neonViolet to-neonBlue bg-clip-text text-transparent select-none drop-shadow-neon-blue"
        >
          Cryvion
        </a>

        {/* Desktop navigation links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium text-textPrimary">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group px-2 py-1 rounded-md hover:text-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 transition"
            >
              {item}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 rounded"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="primary-navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-bgPrimary border-t border-glassBorder overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 text-textPrimary font-medium">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md hover:text-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
