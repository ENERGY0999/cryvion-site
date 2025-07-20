import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="bg-bgPrimary border-t border-glassBorder text-textPrimary py-12 px-6 sm:px-12 md:px-24"
      aria-label="Footer"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center md:text-left">
          <h3 className="font-orbitron text-2xl text-neonBlue mb-2 drop-shadow-neon-blue">
            Cryvion
          </h3>
          <p className="text-textPrimary/80">
            &copy; {new Date().getFullYear()} Cryvion. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex space-x-6 text-lg font-medium">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-neonBlue transition focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </footer>
  );
}
