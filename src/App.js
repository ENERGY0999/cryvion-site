import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';  // <-- Import contact form
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { ParallaxProvider } from 'react-scroll-parallax';

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
          <ContactForm /> {/* Added contact form section */}
        </main>
        <Footer />
      </ParallaxProvider>
    </div>
  );
}
