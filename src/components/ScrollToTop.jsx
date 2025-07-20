import React, { useState, useEffect, useRef } from 'react';
import { HiChevronUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const toggleVisible = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > 300 && currentScrollY > lastScrollY.current) {
        // Show button only if scrolled down past 300px and scrolling down
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', toggleVisible);

    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        hover:animate-spin
        focus:outline-none focus:ring-4 focus:ring-blue-400`}
      style={{ fontSize: '1.75rem' }}
    >
      <HiChevronUp />
    </button>
  );
}
