import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 md:p-20 dark:bg-white/[0.02] bg-white/[0.4] border-r dark:border-white/[0.05] border-black/[0.05]">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-8">Connection</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 dark:text-white text-zinc-900 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple italic font-bold">accelerate</span> your project?
            </h3>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Email</p>
                <a href="mailto:santhiyaselvakumarofficial@gmail.com" className="text-xl md:text-2xl font-medium dark:text-white text-zinc-900 hover:text-accent-blue transition-colors break-words">
                  santhiyaselvakumarofficial@gmail.com
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Phone</p>
                <p className="text-xl md:text-2xl font-medium dark:text-white text-zinc-900">
                  +91 99447 46256
                </p>
              </div>

              <div className="flex gap-6 pt-6">
                <a href="https://github.com/santhiyaoffcl" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-500 hover:scale-110 shadow-lg shadow-accent-blue/10">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/santhiya-selvakumar-2852a2330/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all duration-500 hover:scale-110 shadow-lg shadow-accent-purple/10">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold dark:text-zinc-400 text-zinc-600 uppercase tracking-widest pl-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/[0.08] border-black/[0.08] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all duration-300 dark:text-white text-zinc-900 placeholder:text-zinc-500 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold dark:text-zinc-400 text-zinc-600 uppercase tracking-widest pl-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/[0.08] border-black/[0.08] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all duration-300 dark:text-white text-zinc-900 placeholder:text-zinc-500 text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold dark:text-zinc-400 text-zinc-600 uppercase tracking-widest pl-1">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your vision..."
                  className="w-full px-5 py-4 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/[0.08] border-black/[0.08] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all duration-300 dark:text-white text-zinc-900 placeholder:text-zinc-500 text-base resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-accent w-full md:w-auto px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center group">
                Send Message 
                <motion.span
                  whileHover={{ x: 5 }}
                  className="ml-3"
                >
                  <Send size={18} />
                </motion.span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
