import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-12 md:px-16 lg:px-24"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left side: Logo */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/tech.jpg" // Ensure this image is in the public folder
            alt="Cryvion logo representing technology and innovation"
            className="max-w-full h-auto rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Right side: About text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="about-title"
            className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            About Cryvion
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
            Cryvion is a future-driven technology company focused on building smart, scalable, and localized digital platforms.
            Our mission is to launch impactful services that solve real-world problems with simplicity and power.
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center md:justify-start">
            <div className="bg-cryvionYellow text-black p-6 rounded-2xl shadow-xl w-72 flex flex-col items-center md:items-start">
              <FaEye className="text-3xl mb-3" aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="text-sm text-center md:text-left">
                To empower businesses and communities through powerful digital ecosystems.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-2xl shadow-xl w-72 flex flex-col items-center md:items-start">
              <FaHeart className="text-3xl mb-3" aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2">Our Values</h3>
              <p className="text-sm text-center md:text-left">
                Simplicity, impact, and innovation are at the heart of everything we build.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


