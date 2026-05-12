import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t dark:border-white/5 border-black/5 relative z-10 glass backdrop-blur-3xl dark:bg-black/40 bg-white/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-3xl font-display font-bold dark:text-white text-zinc-900 tracking-tighter">Santhiya S</span>
            <p className="dark:text-zinc-600 text-zinc-500 text-sm font-medium uppercase tracking-[0.2em]">Full Stack Developer & Data Analyst</p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <p className="text-zinc-500 text-sm font-light italic max-w-xs text-center">
              "Building systems that bridge the gap between complex data and human experience."
            </p>
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
              <a href="#about" className="text-zinc-500 hover:text-accent transition-colors">About</a>
              <a href="#projects" className="text-zinc-500 hover:text-accent transition-colors">Projects</a>
              <a href="mailto:santhiyaselvakumarofficial@gmail.com" className="text-zinc-500 hover:text-accent transition-colors">Inquiries</a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-zinc-800 text-[10px] font-bold uppercase tracking-widest">Designed with Intentionality</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
