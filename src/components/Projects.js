import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SkillDZ.com',
    description: 'A local freelance services marketplace built for Algeria, inspired by Fiverr and Armut.',
    link: '#',
  },
  {
    title: 'BotBento.com',
    description: 'A marketplace of niche AI micro-bots designed to automate specific online tasks efficiently.',
    link: '#',
  },
  {
    title: 'AutoDM.ai',
    description: 'A no-code SaaS tool that auto-replies to Instagram DMs for small businesses.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-cryvionYellow">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-sm font-medium text-cryvionYellow hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

