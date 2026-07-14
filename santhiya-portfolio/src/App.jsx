import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground scroll-smooth cursor-default transition-colors duration-700 ease-in-out">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Background */}
      <AnimatedBackground theme={theme} />
      
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
