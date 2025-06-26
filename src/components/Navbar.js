import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-white p-4 flex items-center justify-between"
      style={{ backgroundColor: '#03080D' }}
      aria-label="Primary navigation"
    >
      <div className="flex items-center space-x-4">
        <img
          src="/cryvion.png"
          alt="Cryvion company logo"
          className="h-28 w-auto"
        />
      </div>

      {/* Hamburger button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle menu"
      >
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <div
        id="primary-navigation"
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex space-x-6 text-lg font-medium`}
      >
        <a
          href="#hero"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2 block px-2 py-1"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2 block px-2 py-1"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2 block px-2 py-1"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-cryvionYellow transition focus:outline-none focus:ring-2 focus:ring-cryvionYellow focus:ring-offset-2 block px-2 py-1"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}








