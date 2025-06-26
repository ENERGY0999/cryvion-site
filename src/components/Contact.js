import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-gray-100 px-6 py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Get In Touch
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Interested in collaborating, partnering, or just saying hello? Let’s connect and build something impactful together.
      </p>
      <a
        href="mailto:hello@cryvion.com"
        className="px-6 py-3 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
      >
        Contact Us
      </a>
    </motion.section>
  );
};

export default Contact;

