import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Sprout, Video, ArrowUpRight, Cpu, LineChart, ShieldAlert } from 'lucide-react';


const projects = [
  {
    title: 'SkillGap Intelligence Portal',
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    problem: 'Sourcing target training resources for job roles.',
    solution: 'AI-powered platform generating personalized learning roadmaps via Gemini API, with JWT auth, RBAC, and Docker deployment.',
    impact: 'Automated gap analysis & custom learning curves.',
    tech: ['Java 17', 'Spring Boot', 'React 19', 'MongoDB', 'Gemini API', 'Docker'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'GenAI / Full Stack'
  },
  {
    title: 'TruPhish',
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    problem: 'Rising frequency of digital credential phishing.',
    solution: 'Full-stack phishing detection system with URL scanning, an AI/ML classification model, risk scoring, and a microservices dashboard.',
    impact: 'Real-time threat evaluation & risk profiling.',
    tech: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Python', 'MySQL'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'Cybersecurity'
  },
  {
    title: 'FarmChainX',
    icon: <Sprout className="w-8 h-8 text-green-400" />,
    problem: 'Supply chain vulnerability and lack of product tracking.',
    solution: 'Full-stack supply chain platform with REST APIs, JWT auth, QR-based traceability, and AI-driven quality analysis to reduce fraud.',
    impact: 'Verifiable product origin transparency.',
    tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AI'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'Web3 & Enterprise'
  },
  {
    title: 'AI Audio & Video Translator',
    icon: <Video className="w-8 h-8 text-purple-400" />,
    problem: 'High manual costs for localizing audio-visual files.',
    solution: 'Automated multilingual video dubbing pipeline using FFmpeg for accurate audio transcription, translation, and lip-syncing.',
    impact: 'High-speed media translation & audio rendering.',
    tech: ['Python', 'FFmpeg', 'Vosk', 'gTTS'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'AI / Media'
  },
  {
    title: 'Housing Dashboard Intelligence',
    icon: <LineChart className="w-8 h-8 text-amber-400" />,
    problem: 'Opaque real estate valuations and market forecasting.',
    solution: 'Real estate analytics dashboard featuring price prediction using Random Forest and Linear Regression ML models.',
    impact: 'Accurate value estimations and trends plotting.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'Data Science'
  },
  {
    title: 'Fraud Detection & Risk Analytics',
    icon: <ShieldAlert className="w-8 h-8 text-rose-400" />,
    problem: 'High velocity financial transaction leaks and fraud.',
    solution: 'Interactive fraud detection dashboard highlighting real-time transactional KPI analytics and risk scoring.',
    impact: 'Interactive analytics for immediate risk detection.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Plotly'],
    github: 'https://github.com/santhiyaoffcl',
    live: '#',
    category: 'Data Analytics'
  }
];

const ProjectCard = ({ project, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative glass rounded-[2.5rem] p-10 overflow-hidden flex flex-col h-full dark:border-white/[0.05] border-black/[0.05] hover:border-accent-blue/30 transition-all duration-500"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex items-start justify-between mb-10">
          <div className="p-5 rounded-3xl dark:bg-white/[0.03] bg-black/[0.03] group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
            {project.icon}
          </div>
          <div className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            {project.category}
          </div>
        </div>

        <h3 className="text-3xl font-display font-bold mb-6 tracking-tight dark:text-white text-zinc-900 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <div className="space-y-6 mb-10 flex-grow">
          <p className="dark:text-zinc-400 text-zinc-600 text-lg font-light leading-relaxed">
            {project.solution}
          </p>
          <div className="pt-6 border-t dark:border-white/[0.05] border-black/[0.05]">
            <p className="text-[10px] font-bold dark:text-zinc-600 text-zinc-400 uppercase tracking-[0.2em] mb-3">Key Impact</p>
            <p className="text-zinc-500 text-sm font-medium italic">"{project.impact}"</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 dark:bg-white/[0.03] bg-black/[0.03] rounded-full text-[10px] dark:text-zinc-500 text-zinc-700 font-bold uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8 pt-6 border-t dark:border-white/[0.05] border-black/[0.05]">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 dark:hover:text-white hover:text-zinc-900 transition-colors">
            <Github className="w-4 h-4 mr-2" /> Code
          </a>
          <a href={project.live} className="flex items-center text-xs font-bold uppercase tracking-widest text-accent-blue hover:text-accent-purple transition-colors group/link">
            Live View <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-6">Portfolio</h2>
          <h3 className="text-4xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-8 dark:text-white text-zinc-900">
            Architecture meet <span className="dark:text-zinc-600 text-zinc-400 italic">Ambition</span>.
          </h3>
          <p className="text-xl dark:text-zinc-400 text-zinc-600 font-light max-w-xl">
            A selection of projects where I've tackled complex scalability and AI integration challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
