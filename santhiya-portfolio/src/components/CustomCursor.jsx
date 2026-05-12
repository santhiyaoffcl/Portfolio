import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Core light moves instantly
  const coreSpringConfig = { stiffness: 1000, damping: 40 };
  const coreX = useSpring(cursorX, coreSpringConfig);
  const coreY = useSpring(cursorY, coreSpringConfig);
  
  // Ambient aura follows smoothly
  const auraSpringConfig = { stiffness: 100, damping: 30 };
  const auraX = useSpring(cursorX, auraSpringConfig);
  const auraY = useSpring(cursorY, auraSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass-card') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Outer Bliss Aura - Deep Blue/Purple glow */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? [0.4, 0.6, 0.4] : 0,
        }}
        transition={{ 
          scale: { duration: 0.3 },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-48 h-48 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full blur-[50px] mix-blend-screen"
      />

      {/* Inner Bliss Core - Bright Cyan glow */}
      <motion.div
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? [0.5, 0.8, 0.5] : 0,
        }}
        transition={{ 
          scale: { duration: 0.2 },
          opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-20 h-20 bg-cyan-400/40 rounded-full blur-[25px] mix-blend-screen"
      />

      {/* Twinkling Star Core (Mix-blend-difference ensures visibility over bright navbars) */}
      <motion.div
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? [1.5, 2.5, 1.5] : [1, 1.5, 1],
          opacity: isVisible ? [0.6, 1, 0.6] : 0,
        }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#ffffff] mix-blend-difference"
      />
    </div>
  );
};

export default CustomCursor;
