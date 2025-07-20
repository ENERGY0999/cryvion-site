import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa';

const icons = [FaReact, FaNodeJs, FaGithub, FaDocker];

export default function AnimatedIconsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 flex flex-wrap items-center justify-center gap-20 p-10 opacity-20">
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="text-neonBlue text-6xl animate-floating"
          style={{
            animationDelay: `${i * 2}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
