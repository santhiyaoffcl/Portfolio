import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Box, Award, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['C', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web & Frameworks',
      icon: <Layout className="w-5 h-5" />,
      skills: ['Spring Boot', 'Angular', 'React', 'Node.js', 'Express.js', 'PHP', 'HTML', 'CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Platforms',
      icon: <Code2 className="w-5 h-5" />,
      skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Figma', 'MS Excel', 'MS Word']
    },
    {
      title: 'Soft Skills',
      icon: <Box className="w-5 h-5" />,
      skills: ['Active Listening', 'Communication', 'Teamwork', 'Decision Making', 'Situation Analysis', 'Motivating']
    }
  ];

  const education = [
    {
      degree: 'B.Tech, Computer Science & Business Systems',
      institution: 'V.S.B Engineering College',
      period: '2023 - 2027',
      location: 'Karur, Tamil Nadu',
      score: 'CGPA: 8.28'
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: 'Cheran Matric Hr. Sec. School',
      period: '2023',
      location: 'Karur, Tamil Nadu',
      score: 'Percentage: 77.6%'
    }
  ];

  const certifications = [
    'NPTEL — Programming in Java',
    'Infosys Springboard — Java Foundation',
    'Forage — GenAI Data Analytics Simulation',
    'Coursera — Data Visualization in MS PowerPoint',
    'Salesforce — Agentforce Champion'
  ];

  const achievements = [
    'Selected for Round 2 of the AI-Driven Nation Buildathon by Capgemini after clearing the initial evaluation round.'
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Summary & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Solving problems through <span className="dark:text-zinc-500 text-zinc-400 italic">intentional</span> code.
            </h3>
            
            <div className="space-y-6 text-xl dark:text-zinc-400 text-zinc-600 font-light leading-relaxed mb-12">
              <p>
                Final year B.Tech CSBS student skilled in Java, Spring Boot, Angular, React, REST APIs, JWT/OAuth, and RBAC. 
                Experienced in data analytics, machine learning, and fraud detection, seeking a Software Developer or Data Analyst role.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-4 border-b dark:border-white/[0.08] border-black/[0.08] pb-4">
              {[
                { id: 'skills', label: 'Technical Skills', icon: <Code2 className="w-4 h-4" /> },
                { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
                { id: 'certs', label: 'Credentials & Honours', icon: <Award className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                      : 'dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-zinc-900 glass'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Tab Panel Content */}
          <div className="lg:w-1/2 w-full min-h-[400px] relative">
            <AnimatePresence mode="wait">
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {skillCategories.map((cat, idx) => (
                    <div
                      key={cat.title}
                      className="glass p-8 rounded-[2rem] dark:hover:bg-white/[0.05] hover:bg-black/[0.05] transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all">
                          {cat.icon}
                        </div>
                        <h4 className="text-lg font-bold tracking-tight">{cat.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/[0.05] border-black/[0.05] rounded-full text-xs dark:text-zinc-500 text-zinc-600 dark:group-hover:text-zinc-300 group-hover:text-zinc-900 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="glass p-10 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent-blue/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-blue bg-accent-blue/5">
                          <GraduationCap className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold tracking-tight dark:text-white text-zinc-900 mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-accent-blue font-semibold text-sm mb-2">{edu.institution}</p>
                          <p className="dark:text-zinc-500 text-zinc-500 text-sm">{edu.location}</p>
                        </div>
                      </div>
                      <div className="md:text-right flex flex-col gap-2">
                        <span className="px-4 py-1.5 glass rounded-full text-xs font-bold text-zinc-500 whitespace-nowrap self-start md:self-end">
                          {edu.period}
                        </span>
                        <span className="text-lg font-bold dark:text-white text-zinc-900 tracking-tight">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'certs' && (
                <motion.div
                  key="certs"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  {/* Certifications Card */}
                  <div className="glass p-10 rounded-[2.5rem] hover:border-accent-purple/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple">
                        <Award className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight">Professional Certifications</h4>
                    </div>
                    <ul className="space-y-4">
                      {certifications.map((cert) => (
                        <li key={cert} className="flex items-start text-sm dark:text-zinc-400 text-zinc-700">
                          <CheckCircle2 className="w-5 h-5 text-accent-purple mt-0.5 mr-3 flex-shrink-0" />
                          <span className="font-medium">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements Card */}
                  <div className="glass p-10 rounded-[2.5rem] hover:border-accent-blue/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight">Key Achievements</h4>
                    </div>
                    <ul className="space-y-4">
                      {achievements.map((ach) => (
                        <li key={ach} className="flex items-start text-sm dark:text-zinc-400 text-zinc-700">
                          <Trophy className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" />
                          <span className="font-medium">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
