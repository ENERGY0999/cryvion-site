import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-bgPrimary text-textPrimary min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24"
      aria-label="About Cryvion"
    >
      <motion.div
        className="bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-12 max-w-6xl mx-auto shadow-neon-violet flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Neon vertical accent bar */}
        <div className="hidden md:block w-1 rounded-full bg-gradient-to-b from-neonBlue to-neonViolet h-48" />

        {/* Left text content */}
        <div className="flex-1 text-left">
          <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold mb-6 text-neonBlue drop-shadow-neon-blue tracking-wide">
            About Cryvion
          </h2>

          <p className="text-lg md:text-xl leading-relaxed tracking-wide mb-6 text-textPrimary/90">
            Cryvion is a cutting-edge technology company dedicated to building smart,
            scalable, and localized online platforms that revolutionize industries.
            Our mission is to combine innovation and practical solutions to empower
            businesses and individuals in the digital era.
          </p>

          <ul className="list-disc list-inside space-y-3 text-textPrimary/80 text-lg">
            <li>Innovative digital solutions tailored to your needs</li>
            <li>Highly scalable platforms that grow with your business</li>
            <li>Localized services that respect cultural and market differences</li>
            <li>Commitment to quality, security, and user experience</li>
          </ul>
        </div>

        {/* Right icon or image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <FaRocket className="text-neonViolet text-[120px] drop-shadow-neon-violet" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
