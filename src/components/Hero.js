import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building the Future with <span className="text-cryvionYellow">Cryvion</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Smart. Scalable. Localized. We launch powerful online platforms that solve real-world problems and transform industries.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-cryvionYellow text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          View Our Work
        </motion.a>
      </div>
    </section>
  );
}



