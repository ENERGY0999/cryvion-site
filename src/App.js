import React from 'react';
import Navbar from './components/Navbar';  
import Hero from './components/Hero';      
import About from './components/About';    
import Projects from './components/Projects';  
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;


