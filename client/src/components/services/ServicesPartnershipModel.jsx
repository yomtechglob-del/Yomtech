import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wrench, GraduationCap, TrendingUp, ArrowRight, Building2 } from 'lucide-react';

export const ServicesPartnershipModel = () => {
  const pillars = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Active Listening & Alignment',
      desc: 'We listen to the organization, its people, goals, workflows, and operational challenges.',
      icon: MessageSquare,
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      footerRight: 'Pillar 1 of 4',
    },
    {
      num: '02',
      title: 'BUILD',
      subtitle: 'Practical Solution Delivery',
      desc: 'We transform client requirements into reliable, custom-built software and enterprise platforms.',
      icon: Wrench,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      footerRight: 'Pillar 2 of 4',
    },
    {
      num: '03',
      title: 'ENABLE',
      subtitle: 'Knowledge & Capability Transfer',
      desc: 'We train internal teams and individuals to work with technology effectively through WabiSkills mentorship.',
      icon: GraduationCap,
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      footerRight: 'Pillar 3 of 4',
    },
    {
      num: '04',
      title: 'GROW',
      subtitle: 'Continuous Evolution',
      desc: 'We continue evolving technology infrastructure and capabilities as new opportunities emerge.',
      icon: TrendingUp,
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      footerRight: 'Sustainable Success',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>LONG-TERM PARTNERSHIP</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            More Than a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Technology Provider
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            YomTech Global aims to build meaningful technology relationships, working alongside organizations, teams, and ambitious individuals to understand challenges, create solutions, and support continuous growth.
          </p>
        </div>

        {/* 4 Partnership Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${pillar.bg} border ${pillar.border} ${pillar.accent}`}>
                      PILLAR {pillar.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${pillar.bg} ${pillar.accent} border ${pillar.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {pillar.title}
                  </h3>

                  <h4 className={`text-sm font-extrabold ${pillar.accent}`}>
                    {pillar.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>STAGE {pillar.num}</span>
                  <span className={pillar.accent}>{pillar.footerRight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
