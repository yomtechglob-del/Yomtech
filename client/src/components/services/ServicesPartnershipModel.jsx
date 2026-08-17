import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wrench, GraduationCap, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export const ServicesPartnershipModel = () => {
  const pillars = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Active Listening & Alignment',
      desc: 'We listen to the organization, its people, goals, workflows, and operational challenges.',
      icon: MessageSquare,
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      num: '02',
      title: 'BUILD',
      subtitle: 'Practical Solution Delivery',
      desc: 'We transform client requirements into reliable, custom-built software and enterprise platforms.',
      icon: Wrench,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      num: '03',
      title: 'ENABLE',
      subtitle: 'Knowledge & Capability Transfer',
      desc: 'We train internal teams and individuals to work with technology effectively through WabiSkills mentorship.',
      icon: GraduationCap,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    {
      num: '04',
      title: 'GROW',
      subtitle: 'Continuous Evolution',
      desc: 'We continue evolving technology infrastructure and capabilities as new opportunities emerge.',
      icon: TrendingUp,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-white relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            LONG-TERM PARTNERSHIP
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            More Than a <span className="text-[#0284C7]">Technology Provider</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            YomTech Global aims to build meaningful technology relationships, working alongside organizations, teams, and ambitious individuals to understand challenges, create solutions, and support continuous growth.
          </p>
        </div>

        {/* 4 Partnership Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border ${pillar.border} shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 relative overflow-hidden`}>
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 rounded-2xl ${pillar.bg} ${pillar.text} border ${pillar.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <IconComp size={24} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${pillar.bg} ${pillar.text} border ${pillar.border}`}>
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${pillar.text}`}>
                        STAGE {pillar.num}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {pillar.title}
                      </h3>
                      <div className={`text-xs font-bold ${pillar.text} mt-0.5 mb-2`}>
                        {pillar.subtitle}
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      {idx < 3 ? `Pillar ${idx + 1} of 4` : 'Sustainable Success'}
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
