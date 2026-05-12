import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={scrollRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-10">
            <Sparkles size={14} className="animate-pulse text-accent-purple" />
            Empowering Digital Solutions
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] mb-12 tracking-tighter">
            <span className="bg-gradient-to-b dark:from-white dark:via-white dark:to-zinc-500 from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-transparent">
              Santhiya S
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <p className="text-xl md:text-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed font-light tracking-tight">
              A <span className="dark:text-white text-zinc-900 font-medium">Full Stack Developer</span> and <span className="dark:text-white text-zinc-900 font-medium">Data Analyst</span> architecting high-performance systems and AI-driven insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="#projects" className="btn-accent flex items-center group">
              Explore Projects 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.span>
            </a>
            <a href="#contact" className="btn-glass backdrop-blur-3xl px-10 dark:border-white/20 border-black/10">
              Personal Inquiry
            </a>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
