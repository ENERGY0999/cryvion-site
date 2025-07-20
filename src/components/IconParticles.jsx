// src/components/IconParticles.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLaptopCode, FaNetworkWired, FaCloud } from 'react-icons/fa';

const icons = [FaRocket, FaLaptopCode, FaNetworkWired, FaCloud];

const particles = Array.from({ length: 20 }).map((_, i) => {
  const Icon = icons[i % icons.length];
  return {
    Icon,
    size: 12 + Math.random() * 20, // 12px to 32px
    x: Math.random() * 100, // percent
    y: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 6,
  };
});

export default function IconParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20">
      {particles.map(({ Icon, size, x, y, delay, duration }, idx) => (
        <motion.div
          key={idx}
          className="text-neonBlue"
          style={{
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            fontSize: size,
            userSelect: 'none',
          }}
          initial={{ opacity: 0.3, y: 0 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -15, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            delay,
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
