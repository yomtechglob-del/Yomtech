import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

export const SkillStack = () => {
  const stackLayers = [
    {
      level: 'LAYER 04',
      name: 'INFRASTRUCTURE & DEPLOYMENT',
      tag: 'CLOUD & DEVOPS',
      icon: Cloud,
      color: 'from-[#1DA1F2] to-sky-600',
      skills: ['AWS Microservices', 'Docker Containers', 'CI/CD GitHub Actions', 'Zero-Trust Security', 'SLA Monitoring']
    },
    {
      level: 'LAYER 03',
      name: 'INTELLIGENCE & AUTOMATION',
      tag: 'AI & DATA SCIENCE',
      icon: Cpu,
      color: 'from-[#0ED3DD] to-[#1DA1F2]',
      skills: ['Python Data Stack', 'PyTorch & AI Models', 'LLM Chatbots', 'SQL Querying', 'PowerBI Dashboards']
    },
    {
      level: 'LAYER 02',
      name: 'APPLICATION & SOFTWARE BUILD',
      tag: 'FULLSTACK & MOBILE',
      icon: Layers,
      color: 'from-[#1DA1F2] to-[#0ED3DD]',
      skills: ['React & Next.js', 'Node.js & Express APIs', 'React Native Mobile', 'PostgreSQL / MongoDB', 'Figma UI/UX']
    },
    {
      level: 'LAYER 01',
      name: 'FOUNDATION & ENGINEERING CORE',
      tag: 'CORE FUNDAMENTALS',
      icon: Terminal,
      color: 'from-[#0284C7] to-cyan-500',
      skills: ['Algorithms & Data Structures', 'Git Version Control', 'RESTful API Architecture', 'Clean Code Standards', 'Problem Solving']
    }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4.5 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-300 inline-block shadow-sm">
            🏗️ ARCHITECTURAL LAYERS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Technology <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Skill Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Layered technical progression built for modern production engineering environments.
          </p>
        </div>

        {/* Stack Visualization Stack */}
        <div className="w-full max-w-[1720px] mx-auto space-y-5">
          {stackLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-[1.5px] rounded-[2.2rem] bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl group cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-[2.1rem] p-7 text-slate-900 space-y-4 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-100/90 text-[#1DA1F2] border border-cyan-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F2]">
                          {layer.level} • {layer.tag}
                        </span>
                        <h3 className="text-lg font-black font-display text-slate-900">
                          {layer.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {layer.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#1DA1F2] flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-[#0ED3DD]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
