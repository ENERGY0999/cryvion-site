import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SkillDZ',
    description:
      'A premium freelance marketplace for Algeria, designed with cutting-edge features and a futuristic UI.',
    link: 'https://skilldz.com',
  },
  {
    title: 'AutoDM.ai',
    description:
      'An AI-powered Instagram DM auto-responder to boost small business engagement and customer support.',
    link: 'https://autodm.ai',
  },
  {
    title: 'BotBento',
    description:
      'A micro AI bots marketplace with niche use cases, offering easy integration and powerful automation.',
    link: 'https://botbento.com',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-bgPrimary text-textPrimary min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 py-20"
      aria-label="Our Projects"
    >
      <motion.h2
        className="font-orbitron text-5xl font-extrabold mb-12 text-neonBlue drop-shadow-neon-blue tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our Projects
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-7xl w-full">
        {projects.map(({ title, description, link }, index) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glassBg backdrop-blur-xs border border-glassBorder rounded-2xl p-8 shadow-neon-violet flex flex-col justify-between hover:shadow-neon-blue transform hover:scale-[1.05] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeOut' }}
            aria-label={`View project ${title}`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-neonViolet drop-shadow-neon-violet">
              {title}
            </h3>
            <p className="text-textPrimary/90 flex-grow">{description}</p>
            <span className="mt-6 inline-block text-neonBlue font-bold hover:underline">
              Visit Project &rarr;
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}


