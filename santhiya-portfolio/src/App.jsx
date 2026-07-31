import React from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-[#020205] text-white scroll-smooth cursor-default transition-colors duration-700 ease-in-out">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      <Navbar />
      
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
