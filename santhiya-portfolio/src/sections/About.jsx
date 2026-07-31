import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Box, Award, GraduationCap, Trophy, CheckCircle2, BadgeAlert, ArrowUpRight } from 'lucide-react';

const LOGO_MAPPING = {
  'C': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', title: 'C' },
  'Java': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', title: 'Java' },
  'Python': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python' },
  'JavaScript': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript' },
  'Spring Boot': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', title: 'Spring Boot' },
  'Angular': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', title: 'Angular' },
  'React': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', title: 'Node.js' },
  'Express.js': { src: 'https://cdn.simpleicons.org/express/ffffff', title: 'Express.js' },
  'PHP': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', title: 'PHP' },
  'HTML': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML' },
  'CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: 'CSS' },
  'MySQL': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'MySQL' },
  'MongoDB': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', title: 'MongoDB' },
  'Git': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', title: 'Git' },
  'GitHub': { src: 'https://cdn.simpleicons.org/github/ffffff', title: 'GitHub' },
  'Postman': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', title: 'Postman' },
  'Vercel': { src: 'https://cdn.simpleicons.org/vercel/ffffff', title: 'Vercel' },
  'Figma': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: 'Figma' },
  'MS Excel': { src: 'https://raw.githubusercontent.com/sempostma/office365-icons/master/svg/excel.svg', title: 'MS Excel' },
  'MS Word': { src: 'https://raw.githubusercontent.com/sempostma/office365-icons/master/svg/word.svg', title: 'MS Word' },
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

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
      score: 'CGPA: 8.28',
      details: 'Specialized curriculum bridging Computer Science foundations with Business Systems Management, Enterprise Technology, and Systems Engineering.'
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: 'Cheran Matric Hr. Sec. School',
      period: '2023',
      location: 'Karur, Tamil Nadu',
      score: '77.6%',
      details: 'Focus on Mathematics, Physics, and Chemistry.'
    }
  ];

  const certifications = [
    { name: 'Programming in Java', issuer: 'NPTEL', id: 'nptel-java' },
    { name: 'Java Foundation', issuer: 'Infosys Springboard', id: 'infosys-java' },
    { name: 'GenAI Data Analytics Simulation', issuer: 'Forage', id: 'forage-genai' },
    { name: 'Data Visualization in MS PowerPoint', issuer: 'Coursera', id: 'coursera-ppt' },
    { name: 'Agentforce Champion', issuer: 'Salesforce', id: 'salesforce-agent' }
  ];

  const achievements = [
    {
      title: 'AI-Driven Nation Buildathon',
      organizer: 'Capgemini',
      milestone: 'Selected for Round 2',
      description: 'Staged into the top tier of the national buildathon following initial project and architecture evaluation on AI-driven solution ideas.'
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 space-y-32">
        
        {/* Intro Summary Header */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Solving problems through <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple italic font-bold">intentional</span> code.
            </h3>
            <p className="text-xl dark:text-zinc-300 text-zinc-700 font-light leading-relaxed max-w-3xl">
              Final year B.Tech CSBS student skilled in Java, Spring Boot, Angular, React, REST APIs, JWT/OAuth, and RBAC. 
              Experienced in data analytics, machine learning, and fraud detection, seeking a Software Developer or Data Analyst role.
            </p>
          </motion.div>
        </div>

        {/* 1. Technical Skills Section */}
        <div className="space-y-12">
          <div className="border-l-4 border-accent-blue pl-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-2">Capabilities</h3>
            <h4 className="text-3xl md:text-4xl font-display font-bold">Technical Skills</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left side: Sticky info index column */}
            <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
                <h4 className="text-xl font-bold mb-3 text-white tracking-tight">Skills Index</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                  Structured competency catalog across core backend, frontend, database, and operational platforms.
                </p>
                <div className="space-y-3">
                  {skillCategories.map((cat, idx) => {
                    const isActive = activeCategory === cat.title;
                    return (
                      <button
                        key={cat.title}
                        onClick={() => setActiveCategory(cat.title)}
                        className={`flex items-center justify-between p-3.5 w-full rounded-2xl border transition-all duration-300 group relative ${
                          isActive
                            ? 'bg-[#0f0f1c]/80 border-accent-blue/40 text-white shadow-[0_4px_20px_rgba(59,130,246,0.15)]'
                            : 'bg-white/[0.01] border-white/[0.04] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03] hover:border-white/10'
                        }`}
                      >
                        {/* Hover/Active Background Radial Glow */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-transparent to-accent-purple/10 rounded-2xl pointer-events-none" />
                        )}
                        
                        <div className="flex items-center gap-3 relative z-10">
                          {/* Mini icon container */}
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'bg-accent-blue/15 text-accent-blue' 
                              : 'bg-white/[0.03] text-zinc-500 group-hover:text-zinc-300'
                          }`}>
                            {React.cloneElement(cat.icon, { className: 'w-4 h-4' })}
                          </div>
                          <span className="text-xs font-bold tracking-wide">
                            {cat.title}
                          </span>
                        </div>

                        {/* Items count badge */}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-all duration-300 relative z-10 ${
                          isActive 
                            ? 'bg-accent-blue/20 text-white border border-accent-blue/30' 
                            : 'bg-white/5 text-zinc-500 group-hover:text-zinc-400'
                        }`}>
                          {cat.skills.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side: Detailed vertical category cards */}
            <div className="lg:col-span-2 min-h-[300px]">
              <AnimatePresence mode="wait">
                {skillCategories
                  .filter((cat) => cat.title === activeCategory)
                  .map((cat, idx) => (
                    <motion.div
                      key={cat.title}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            staggerChildren: 0.04,
                            duration: 0.3
                          }
                        },
                        exit: { opacity: 0, x: -15, transition: { duration: 0.2 } }
                      }}
                      className="glass p-8 rounded-[2.5rem] hover:border-accent-blue/20 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all">
                            {cat.icon}
                          </div>
                          <h4 className="text-lg font-bold tracking-tight text-white">{cat.title}</h4>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-zinc-400">
                          {cat.skills.length} Items
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {cat.skills.map((skill) => {
                          const logo = LOGO_MAPPING[skill];
                          return (
                            <motion.div
                              key={skill}
                              variants={{
                                hidden: { opacity: 0, y: 15, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                              }}
                              transition={{ type: "spring", stiffness: 260, damping: 20 }}
                              whileHover={{ 
                                y: -6, 
                                scale: 1.03,
                                boxShadow: "0 12px 20px -8px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(139, 92, 246, 0.15)",
                                borderColor: "rgba(59, 130, 246, 0.4)"
                              }}
                              className="group/item flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0c0c14]/40 border border-white/[0.04] backdrop-blur-md transition-all duration-300 relative aspect-square cursor-pointer"
                            >
                              {/* Hover Radial Glow Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl" />
                              
                              <div className="relative z-10 flex flex-col items-center justify-center gap-3 h-full w-full">
                                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover/item:bg-white/[0.05] group-hover/item:border-accent-blue/20 transition-all duration-300">
                                  {logo ? (
                                    <img
                                      src={logo.src}
                                      alt={logo.title}
                                      className="h-7 w-7 object-contain transition-all duration-300 group-hover/item:scale-110 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    />
                                  ) : (
                                    <Box className="w-6 h-6 text-zinc-400 group-hover/item:text-accent-blue transition-colors" />
                                  )}
                                </div>
                                <span className="text-xs font-semibold text-zinc-300 group-hover/item:text-white transition-colors text-center px-1">
                                  {logo ? logo.title : skill}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 2. Education Section - Vertical Timeline */}
        <div className="space-y-12">
          <div className="border-l-4 border-accent-blue pl-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-2">Qualifications</h3>
            <h4 className="text-3xl md:text-4xl font-display font-bold">Education Journey</h4>
          </div>
          
          <div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={edu.degree}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#020205] border-2 border-accent-blue flex items-center justify-center group-hover:border-accent-purple transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent-blue group-hover:bg-accent-purple transition-colors" />
                </div>

                <div className="glass p-8 md:p-10 rounded-[2.5rem] hover:border-accent-blue/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-accent-blue font-medium text-sm">{edu.institution}</p>
                        <p className="text-zinc-500 text-xs mt-1">{edu.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center md:items-end gap-3 self-start md:self-center">
                      <span className="px-4 py-1.5 glass border border-white/10 rounded-full text-xs font-bold text-zinc-400 whitespace-nowrap">
                        {edu.period}
                      </span>
                      <span className="px-4 py-1.5 bg-accent-blue/20 border border-accent-blue/30 rounded-full text-sm font-black text-white tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-4xl">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Certifications Section - Showcase Grid */}
        <div className="space-y-12">
          <div className="border-l-4 border-accent-purple pl-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-purple mb-2">Verification</h3>
            <h4 className="text-3xl md:text-4xl font-display font-bold">Certifications & Badges</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={cert.id}
                className="glass p-8 rounded-[2rem] hover:border-accent-purple/30 dark:hover:bg-white/[0.05] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 text-accent-purple/20 group-hover:text-accent-purple/60 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    {cert.issuer}
                  </div>
                  <h4 className="text-lg font-bold leading-snug text-white group-hover:text-accent-purple transition-colors">
                    {cert.name}
                  </h4>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-accent-purple" /> Credential Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Key Achievements Section - Spotlight Card */}
        <div className="space-y-12">
          <div className="border-l-4 border-accent-blue pl-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-2">Honours</h3>
            <h4 className="text-3xl md:text-4xl font-display font-bold">Key Achievements</h4>
          </div>

          {achievements.map((ach) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={ach.title}
              className="glass p-10 md:p-12 rounded-[3rem] border border-accent-blue/20 hover:border-accent-blue/40 transition-all duration-500 relative overflow-hidden group shadow-2xl"
            >
              {/* Radial gradient spotlight background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div className="p-6 rounded-3xl bg-accent-blue/10 text-accent-blue group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent-blue/5">
                    <Trophy className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-accent-blue/20 border border-accent-blue/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                        {ach.organizer}
                      </span>
                      <span className="px-3 py-1 bg-accent-purple/20 border border-accent-purple/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                        {ach.milestone}
                      </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {ach.title}
                    </h4>
                    <p className="text-zinc-400 font-light text-sm md:text-base max-w-3xl leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/santhiyaoffcl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 glass border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 group/btn self-start lg:self-center"
                >
                  Project Details
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
