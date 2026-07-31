import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Home, User, FolderGit2, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Badge */}
        <a href="#" className="flex items-center group relative">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 group-hover:border-accent-blue/50 transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 to-accent-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            <span className="relative z-10 text-xl font-display font-black tracking-tighter bg-gradient-to-b from-white to-zinc-400 group-hover:to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
              S
            </span>
          </div>
          <span className="ml-3 font-display font-bold text-lg tracking-tight text-white group-hover:text-accent-blue transition-colors">
            Santhiya S
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center relative mr-6">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-5 py-2 rounded-full flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300"
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <Icon size={14} className="relative z-10" />
                  <span className="relative z-10 text-sm font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 pl-6 border-l border-white/10">
            <a href="https://github.com/santhiyaoffcl" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white group relative" aria-label="Github">
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/santhiya-selvakumar-2852a2330/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white group relative" aria-label="LinkedIn">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Header Menu Trigger */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            className="p-3 glass rounded-full text-white border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#020205]/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-center gap-4 text-3xl font-display font-medium text-zinc-300 hover:text-white hover:scale-110 transition-all duration-300 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={28} className="text-accent-blue group-hover:text-accent-purple transition-colors" />
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-8 pt-8 border-t border-white/10"
              >
                <a href="https://github.com/santhiyaoffcl" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-white hover:text-accent-blue hover:scale-110 transition-all" aria-label="Github">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/santhiya-selvakumar-2852a2330/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-white hover:text-accent-purple hover:scale-110 transition-all" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
