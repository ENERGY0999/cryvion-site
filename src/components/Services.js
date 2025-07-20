import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    id: 1,
    icon: <FaCode className="text-neonBlue text-5xl" aria-hidden="true" />,
    title: "Web Development",
    description: "Building fast, scalable, and modern websites with the latest technologies.",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-neonViolet text-5xl" aria-hidden="true" />,
    title: "Mobile Apps",
    description: "Creating intuitive and performant mobile applications for iOS and Android.",
  },
  {
    id: 3,
    icon: <FaCloud className="text-neonBlue text-5xl" aria-hidden="true" />,
    title: "Cloud Solutions",
    description: "Designing scalable cloud infrastructure and deploying secure cloud applications.",
  },
];

const cardVariants = {
  offscreen: { y: 80, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 25px #00BFFF",
    transition: { duration: 0.3 },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bgPrimary text-textPrimary py-20 px-6 sm:px-12 md:px-24 min-h-screen"
      aria-label="Our Services"
    >
      <h2 className="font-orbitron text-5xl font-extrabold mb-12 text-neonBlue drop-shadow-neon-blue text-center">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map(({ id, icon, title, description }) => (
          <Parallax key={id} speed={5}>
            <motion.article
              className="bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-8 md:p-10 shadow-neon-violet flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              aria-label={title}
              tabIndex={0}
              role="article"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-textPrimary/90 text-lg leading-relaxed">{description}</p>
            </motion.article>
          </Parallax>
        ))}
      </div>
    </section>
  );
}

