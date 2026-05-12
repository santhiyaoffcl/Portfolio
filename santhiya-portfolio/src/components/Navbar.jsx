import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Home, User, FolderGit2, Briefcase, Mail, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none flex justify-center py-6">
      {/* Desktop Floating Dock */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex items-center pointer-events-auto"
      >
        <div className={`flex items-center gap-2 p-2 rounded-full transition-all duration-500 border ${isScrolled ? 'dark:bg-black/40 bg-white/40 backdrop-blur-2xl dark:border-white/10 border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'dark:bg-white/5 bg-black/5 backdrop-blur-md dark:border-white/5 border-black/5'}`}>
          
          {/* Logo Badge */}
          <a href="#" className="px-2 md:px-4 flex items-center group relative">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/[0.05] bg-black/[0.02] border dark:border-white/10 border-black/10 group-hover:border-accent-blue/50 transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 to-accent-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <span className="relative z-10 text-xl font-display font-black tracking-tighter dark:bg-gradient-to-b dark:from-white dark:to-zinc-400 bg-gradient-to-b from-zinc-800 to-zinc-500 group-hover:to-white dark:group-hover:to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                S
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex items-center relative">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-5 py-2.5 rounded-full flex items-center gap-2 dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 transition-colors duration-300"
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full border dark:border-white/10 border-black/5 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10 text-sm font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-2 pl-3 ml-1 border-l dark:border-white/10 border-black/10">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-black/5 transition-colors dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 group relative">
              {theme === 'dark' ? <Sun size={18} className="group-hover:scale-110 transition-transform" /> : <Moon size={18} className="group-hover:scale-110 transition-transform" />}
            </button>
            <a href="https://github.com/santhiyaoffcl" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-black/5 transition-colors dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 group relative">
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/santhiya-selvakumar-2852a2330/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-black/5 transition-colors dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 group relative">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <div className="md:hidden absolute top-0 left-0 right-0 p-6 flex items-center justify-between pointer-events-auto">
        {/* Mobile Logo Badge */}
        <a href="#" className="flex items-center group relative z-50">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full dark:bg-white/[0.05] bg-black/[0.05] border dark:border-white/10 border-black/10 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 to-accent-purple/40 opacity-50 blur-md" />
            <span className="relative z-10 text-2xl font-display font-black tracking-tighter dark:text-white text-zinc-900">
              S
            </span>
          </div>
        </a>
        <div className="flex items-center gap-4 z-50">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-3 glass rounded-full dark:text-white text-zinc-900 border dark:border-white/10 border-black/10"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-3 glass rounded-full dark:text-white text-zinc-900 border dark:border-white/10 border-black/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="fixed inset-0 dark:bg-[#020205]/95 bg-white/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center pointer-events-auto"
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
                    className="flex items-center justify-center gap-4 text-3xl font-display font-medium dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 hover:scale-110 transition-all duration-300 group"
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
                className="flex justify-center gap-8 pt-8 border-t dark:border-white/10 border-black/10"
              >
                <a href="https://github.com/santhiyaoffcl" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full dark:text-white text-zinc-800 hover:text-accent-blue hover:scale-110 transition-all">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/santhiya-selvakumar-2852a2330/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full dark:text-white text-zinc-800 hover:text-accent-purple hover:scale-110 transition-all">
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
