import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';

export const ServicesEngineeringApproach = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding Requirements',
      desc: 'Understand the business, users, challenges, workflows, and technical requirements.',
      icon: Search,
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      num: '02',
      title: 'ARCHITECT',
      subtitle: 'System & Interface Design',
      desc: 'Design scalable systems, interfaces, integrations, and technology foundations.',
      icon: Compass,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      num: '03',
      title: 'ENGINEER',
      subtitle: 'Software & Solution Build',
      desc: 'Build reliable software and technology solutions using modern engineering practices.',
      icon: Code,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
    {
      num: '04',
      title: 'EVOLVE',
      subtitle: 'Continuous Optimization',
      desc: 'Improve, optimize, secure, and scale solutions as business requirements grow.',
      icon: RefreshCw,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} 
      />

      {/* Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            ENGINEERING APPROACH
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            How We Engineer <span className="text-[#0284C7]">Technology</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Every YomTech Global solution begins with understanding the problem, designing the right architecture, and engineering technology around measurable real-world needs.
          </p>
        </div>

        {/* Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border ${stage.border} shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 relative overflow-hidden`}>
                  
                  <div className="space-y-5">
                    {/* Node Header Row */}
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 rounded-2xl ${stage.bg} ${stage.text} border ${stage.border} font-black text-sm flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        {stage.num}
                      </div>
                      <div className={`w-11 h-11 rounded-2xl ${stage.bg} ${stage.text} border ${stage.border} flex items-center justify-center shadow-sm`}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    {/* Title Block */}
                    <div className="space-y-1">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${stage.text}`}>
                        STAGE {stage.num}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {stage.title}
                      </h3>
                      <p className={`text-xs font-bold ${stage.text}`}>
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      {idx < 3 ? `Step ${idx + 1} of 4` : 'Continuous Growth'}
                    </span>
                    {idx < 3 && (
                      <ArrowRight size={14} className="text-[#0284C7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
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
