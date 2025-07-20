import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-bgPrimary z-50">
      <div
        className="h-full bg-neonViolet"
        style={{ width: `${scrollPercent}%`, transition: 'width 0.2s ease-out' }}
      />
    </div>
  );
}
