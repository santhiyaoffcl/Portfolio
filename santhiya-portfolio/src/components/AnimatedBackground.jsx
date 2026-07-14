import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ColorBends from './ColorBends';

const Star = ({ top, left, size, delay, isShooting }) => {
  if (isShooting) {
    return (
      <motion.div
        className="absolute w-[2px] h-[60px] bg-gradient-to-b from-white/80 to-transparent"
        style={{ top, left }}
        initial={{ opacity: 0, x: 200, y: -200, rotate: -45 }}
        animate={{ opacity: [0, 1, 0], x: -400, y: 400, rotate: -45 }}
        transition={{
          duration: 1.2,
          delay: delay,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5,
          ease: "easeIn"
        }}
      />
    );
  }

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity: Math.random() * 0.5 + 0.2,
      }}
      animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.2, 1] }}
      transition={{
        duration: Math.random() * 3 + 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const Cloud = ({ top, left, size, delay }) => (
  <motion.div
    className="absolute opacity-80 text-white"
    style={{ top, left, width: size, height: size * 0.6 }}
    animate={{ x: [0, 150, 0], y: [0, -10, 0] }}
    transition={{ duration: 40, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1325 20.1772 10.2018 17.8576 10.0166C17.4326 6.62007 14.5235 4 11 4C7.13401 4 4 7.13401 4 11C4 11.1685 4.00593 11.3356 4.01758 11.5011C2.30232 12.0123 1 13.606 1 15.5C1 17.9853 3.01472 20 5.5 20H17.5Z" />
    </svg>
  </motion.div>
);

const AnimatedBackground = ({ theme }) => {
  const [stars, setStars] = useState([]);
  const isDark = theme === 'dark';
  
  useEffect(() => {
    // Generate static stars and shooting stars
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 80}%`, // Keep mostly in the sky
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        isShooting: false
      });
    }
    // Add 6 shooting stars
    for (let i = 0; i < 6; i++) {
      newStars.push({
        id: `s-${i}`,
        top: `${Math.random() * 40}%`,
        left: `${Math.random() * 50 + 50}%`,
        delay: Math.random() * 15,
        isShooting: true
      });
    }
    setStars(newStars);
  }, []);

  return (
    <>
      {/* Fixed Background (ColorBends + Gradient + Stars) */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        {/* Sky Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#10041c] via-[#210f3c] to-background transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-background transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        
        {/* ColorBends Canvas Backdrop */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <ColorBends
            colors={isDark 
              ? ["#ff5c7a", "#8a5cff", "#00ffd1", "#6366f1", "#a855f7"]
              : ["#f472b6", "#a5b4fc", "#38bdf8", "#93c5fd", "#c084fc"]
            }
            rotation={45}
            speed={0.15}
            scale={1.1}
            frequency={0.8}
            warpStrength={1.0}
            mouseInfluence={0.5}
            noise={0.08}
            parallax={0.2}
            iterations={2}
            intensity={1.2}
            bandWidth={5}
            transparent={true}
          />
        </div>

        {/* Night Elements */}
        <div className={`transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          {stars.map((star) => (
            <Star key={star.id} {...star} />
          ))}
        </div>
      </div>

      {/* Scrolling Landscape Layer (Mountains + Clouds + Pines) */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden pointer-events-none z-0">
        {/* Day Elements */}
        <div className={`transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
          <Cloud top="10%" left="15%" size={200} delay={0} />
          <Cloud top="25%" left="50%" size={300} delay={5} />
          <Cloud top="15%" left="75%" size={150} delay={2} />
        </div>

        {/* Mountain Layer 1 (Farthest) */}
        <svg viewBox="0 0 1440 400" className={`absolute bottom-[8%] w-full h-auto min-w-[1200px] transition-all duration-1000 fill-current ${isDark ? 'opacity-40 text-[#2a1744]' : 'opacity-50 text-sky-200'}`} preserveAspectRatio="none">
          <path d="M0,250 L100,200 L250,280 L400,150 L600,260 L800,100 L1000,220 L1200,180 L1440,250 L1440,400 L0,400 Z" />
        </svg>

        {/* Mountain Layer 2 (Middle) */}
        <svg viewBox="0 0 1440 400" className={`absolute bottom-[4%] w-full h-auto min-w-[1200px] transition-all duration-1000 fill-current ${isDark ? 'opacity-70 text-[#1e0f33]' : 'opacity-80 text-blue-200'}`} preserveAspectRatio="none">
          <path d="M0,300 L150,220 L300,290 L500,180 L700,300 L950,150 L1200,280 L1440,220 L1440,400 L0,400 Z" />
        </svg>

        {/* Mountain Layer 3 (Closest) */}
        <svg viewBox="0 0 1440 400" className={`absolute bottom-0 w-full h-auto min-w-[1200px] transition-all duration-1000 fill-current ${isDark ? 'text-[#0d0617]' : 'text-slate-300'}`} preserveAspectRatio="none">
          <path d="M0,350 L200,280 L450,350 L650,250 L900,320 L1150,200 L1440,300 L1440,400 L0,400 Z" />
        </svg>

        {/* Pine Tree Forest Layer */}
        <svg width="100%" height="150" className={`absolute bottom-0 transition-all duration-1000 fill-current ${isDark ? 'text-[#020205]' : 'text-slate-500'}`} preserveAspectRatio="none">
          <defs>
            <pattern id="pines-back" x="0" y="0" width="80" height="150" patternUnits="userSpaceOnUse">
              <path d="M20,150 L20,110 L5,110 L25,70 L15,70 L30,30 L45,70 L35,70 L55,110 L40,110 L40,150 Z" opacity="0.6"/>
              <path d="M60,150 L60,120 L50,120 L65,80 L55,80 L70,50 L85,80 L75,80 L90,120 L80,120 L80,150 Z" opacity="0.8"/>
            </pattern>
            <pattern id="pines-front" x="40" y="20" width="100" height="150" patternUnits="userSpaceOnUse">
              <path d="M30,150 L30,100 L10,100 L35,60 L20,60 L45,10 L70,60 L55,60 L80,100 L60,100 L60,150 Z" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="150" fill="url(#pines-back)" />
          <rect x="0" y="0" width="100%" height="150" fill="url(#pines-front)" />
        </svg>

        {/* Fade overlay to perfectly blend the bottom into the rest of the site */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
    </>
  );
};

export default AnimatedBackground;
