import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Monitor, BarChart, ArrowDown, CheckCircle2 } from 'lucide-react';

export const LearningPathways = () => {
  const pathways = [
    {
      num: 'PATH 01',
      title: 'AI & MACHINE LEARNING',
      subtitle: 'Intelligence & Automation',
      icon: Cpu,
      milestones: ['Python Engineering', 'PyTorch & ML Models', 'LLM Chatbots & Agents', 'Autonomous AI Workflows']
    },
    {
      num: 'PATH 02',
      title: 'UI/UX & PRODUCT DESIGN',
      subtitle: 'Digital Experience',
      icon: Layout,
      milestones: ['User Research & Flows', 'Figma Component Systems', 'Interactive Prototypes', 'Design System Tokens']
    },
    {
      num: 'PATH 03',
      title: 'FULLSTACK DEVELOPMENT',
      subtitle: 'Web & Application Engineering',
      icon: Monitor,
      milestones: ['React & Next.js Frontend', 'Node.js & Express APIs', 'PostgreSQL / MongoDB Schemas', 'React Native Mobile']
    },
    {
      num: 'PATH 04',
      title: 'DATA & ANALYTICS',
      subtitle: 'Data-Driven Decisions',
      icon: BarChart,
      milestones: ['Data Extraction & SQL', 'Pandas & Python Stack', 'PowerBI BI Dashboards', 'Predictive Modeling']
    }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4.5 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-300 inline-block shadow-sm">
            🛤️ SPECIALIZED TRACKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Structured <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Learning Pathways</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Choose a targeted learning direction engineered to build practical expertise.
          </p>
        </div>

        {/* 4 Pathway-Style Vertical Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pathways.map((path, idx) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-[2.4rem] p-7 space-y-5 h-full flex flex-col justify-between text-slate-900 relative overflow-hidden">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F2] px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300">
                        {path.num}
                      </span>
                      <div className="p-3 rounded-2xl bg-cyan-50 text-[#1DA1F2] border border-cyan-200 group-hover:bg-gradient-to-r group-hover:from-[#1DA1F2] group-hover:to-[#0ED3DD] group-hover:text-white transition-all">
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-black font-display text-slate-900 leading-tight">
                        {path.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1DA1F2]">
                        <ArrowDown size={14} className="text-[#0ED3DD]" />
                        <span>{path.subtitle}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {path.milestones.map((ms, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={14} className="text-[#0ED3DD] shrink-0" />
                          <span>{ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
