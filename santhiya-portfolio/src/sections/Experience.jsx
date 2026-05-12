import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Let’s GameTech',
    period: '2023 - 2024',
    description: 'Developed responsive user interfaces and optimized frontend performance for gaming platforms.',
    contributions: [
      'Built reusable cross-platform components using React.',
      'Improved page load speeds by 40% through lazy loading.',
      'Collaborated on pixel-perfect Figma implementations.'
    ]
  },
  {
    role: 'Java Intern',
    company: 'Infosys (Virtual Internship)',
    period: '2023',
    description: 'Focused on backend development and enterprise Java standards.',
    contributions: [
      'Implemented backend logic using Spring Boot & Hibernate.',
      'Managed complex data relationships in MySQL.',
      'Ensured 90% code coverage through unit testing.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">Professional Context</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              A career built on <span className="dark:text-zinc-500 text-zinc-400 italic">curiosity</span> and grit.
            </h3>
            <p className="text-xl dark:text-zinc-400 text-zinc-600 font-light leading-relaxed mb-10">
              My professional background is rooted in software engineering and data analysis, 
              delivering robust enterprise solutions and consumer-facing apps.
            </p>
            <a href="#contact" className="btn-glass px-8 inline-flex items-center text-sm font-bold uppercase tracking-widest dark:border-white/10 border-black/10 hover:border-accent-blue/40">
              Work with me <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[2.5rem] group dark:hover:bg-white/[0.05] hover:bg-black/[0.02] transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-accent-blue bg-accent-blue/10 group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all duration-300">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold tracking-tight dark:text-white text-zinc-900">{exp.role}</h4>
                      <p className="text-accent-blue/80 font-medium uppercase tracking-wider text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="px-5 py-2 glass rounded-full text-xs font-bold text-zinc-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <p className="dark:text-zinc-400 text-zinc-600 text-lg font-light leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-4">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex items-start text-sm dark:text-zinc-500 text-zinc-700 dark:group-hover:text-zinc-400 group-hover:text-zinc-900 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
