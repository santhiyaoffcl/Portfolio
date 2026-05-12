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
              Ready to <span className="italic dark:text-zinc-500 text-zinc-400">accelerate</span> your project?
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
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold dark:text-zinc-500 text-zinc-700 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full dark:bg-white/[0.03] bg-transparent border-b dark:border-white/[0.1] border-black/[0.1] px-0 py-4 dark:text-white text-zinc-900 font-medium text-lg focus:outline-none focus:border-accent-blue transition-all dark:placeholder:text-zinc-700 placeholder:text-zinc-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold dark:text-zinc-500 text-zinc-700 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full dark:bg-white/[0.03] bg-transparent border-b dark:border-white/[0.1] border-black/[0.1] px-0 py-4 dark:text-white text-zinc-900 font-medium text-lg focus:outline-none focus:border-accent-blue transition-all dark:placeholder:text-zinc-700 placeholder:text-zinc-400"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold dark:text-zinc-500 text-zinc-700 uppercase tracking-widest">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your vision..."
                  className="w-full dark:bg-white/[0.03] bg-transparent border-b dark:border-white/[0.1] border-black/[0.1] px-0 py-4 dark:text-white text-zinc-900 font-medium text-lg focus:outline-none focus:border-accent-blue transition-all resize-none dark:placeholder:text-zinc-700 placeholder:text-zinc-400"
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
