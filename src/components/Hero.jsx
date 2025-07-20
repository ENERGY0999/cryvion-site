import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bgPrimary text-textPrimary min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24"
      aria-label="Hero section introducing Cryvion"
    >
      {/* Subtle animated gradient background overlay */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(135deg, #0a0f23 0%, #080b1a 50%, #0a0f23 100%)',
            'linear-gradient(135deg, #1c1f4a 0%, #0a0f23 50%, #1c1f4a 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Glassmorphism panel */}
      <motion.div
        className="relative bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-12 max-w-4xl text-center shadow-neon-violet"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide text-neonBlue drop-shadow-neon-blue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-label="Building the Future with Cryvion"
        >
          Building the Future with{' '}
          <span className="relative text-neonViolet drop-shadow-neon-violet">
            Cryvion
            <motion.span
              className="block h-1 bg-gradient-to-r from-neonBlue via-neonViolet to-neonBlue rounded mt-1"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Smart. Scalable. Localized. We launch powerful online platforms that solve real-world problems and transform industries.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-gradient-to-r from-neonBlue to-neonViolet text-bgPrimary font-bold px-12 py-4 rounded-full shadow-neon-blue hover:shadow-neon-violet transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-neonViolet focus:ring-opacity-60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          aria-label="View our projects"
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px #8A2BE2' }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Work
        </motion.a>
      </motion.div>
    </section>
  );
}

