import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="overflow-hidden bg-bgPrimary text-textPrimary">
      <ScrollToTop />
      <ScrollProgress />
      <ParallaxProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </ParallaxProvider>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </div>
  );
}

