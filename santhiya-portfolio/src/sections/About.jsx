import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Box } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['C', 'Java', 'JavaScript']
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5" />,
      skills: ['HTML', 'CSS', 'React']
    },
    {
      title: 'Backend',
      icon: <Box className="w-5 h-5" />,
      skills: ['PHP', 'Node.js', 'Express']
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      icon: <Code2 className="w-5 h-5" />,
      skills: ['Git & GitHub', 'Vercel', 'Figma', 'Excel', 'MS Word']
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Solving problems through <span className="dark:text-zinc-500 text-zinc-400 italic">intentional</span> code.
            </h3>
            <div className="space-y-6 text-xl dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
              <p>
                I am a results-driven developer and analyst focused on building applications that matter. 
                My approach combines technical precision with a product-centric mindset.
              </p>
              <p>
                Whether it's optimizing systems or building real-time AI security, I thrive on solving complex problems 
                where code meets real-world impact.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-[2rem] dark:hover:bg-white/[0.05] hover:bg-black/[0.05] transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all">
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold tracking-tight">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/[0.05] border-black/[0.05] rounded-full text-xs dark:text-zinc-500 text-zinc-600 dark:group-hover:text-zinc-300 group-hover:text-zinc-900 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
