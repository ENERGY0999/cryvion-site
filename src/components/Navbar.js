import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="text-white p-4 flex items-center justify-between"
      style={{ backgroundColor: '#03080D' }}
      aria-label="Primary navigation"
    >
      <div className="flex items-center space-x-4">
        <img src="/cryvion.png" alt="Cryvion company logo" className="h-60 w-auto" />
        {/* No text next to logo as requested */}
      </div>
      <div className="space-x-6">
        <a
          href="#hero"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}







