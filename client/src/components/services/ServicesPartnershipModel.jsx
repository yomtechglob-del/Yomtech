import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wrench, GraduationCap, TrendingUp } from 'lucide-react';

export const ServicesPartnershipModel = () => {
  const pillars = [
    {
      step: '01',
      phase: 'PILLAR 01',
      stage: 'UNDERSTAND',
      title: 'Active Listening & Operational Alignment',
      desc: 'We listen to the organization, its people, goals, workflows, and operational challenges to ensure complete strategic alignment.',
      icon: MessageSquare,
      themeBg: 'bg-[#E53E3E]',
      themeDarkBg: 'bg-[#C53030]',
      themeText: 'text-[#E53E3E]',
      themeBorder: 'border-[#E53E3E]',
      offset: 'ml-0',
    },
    {
      step: '02',
      phase: 'PILLAR 02',
      stage: 'BUILD',
      title: 'Practical Solution Delivery',
      desc: 'We transform client requirements into reliable, custom-built software, Yomnex ERP modules, and high-performance enterprise platforms.',
      icon: Wrench,
      themeBg: 'bg-[#ED8936]',
      themeDarkBg: 'bg-[#DD6B20]',
      themeText: 'text-[#ED8936]',
      themeBorder: 'border-[#ED8936]',
      offset: 'ml-0 sm:ml-6 lg:ml-14',
    },
    {
      step: '03',
      phase: 'PILLAR 03',
      stage: 'ENABLE',
      title: 'Knowledge & Capability Transfer',
      desc: 'We train internal teams and individuals to work with technology effectively through dedicated WabiSkills mentorship and hands-on onboarding.',
      icon: GraduationCap,
      themeBg: 'bg-[#48BB78]',
      themeDarkBg: 'bg-[#38A169]',
      themeText: 'text-[#48BB78]',
      themeBorder: 'border-[#48BB78]',
      offset: 'ml-0 sm:ml-12 lg:ml-28',
    },
    {
      step: '04',
      phase: 'PILLAR 04',
      stage: 'GROW',
      title: 'Continuous Infrastructure Evolution',
      desc: 'We continue evolving technology infrastructure, security protocols, and operational capabilities as new digital opportunities emerge.',
      icon: TrendingUp,
      themeBg: 'bg-[#00A3C4]',
      themeDarkBg: 'bg-[#0987A0]',
      themeText: 'text-[#00A3C4]',
      themeBorder: 'border-[#00A3C4]',
      offset: 'ml-0 sm:ml-18 lg:ml-42',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>LONG-TERM PARTNERSHIP</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            More Than a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Technology Provider
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl font-sans">
            YomTech Global aims to build meaningful technology relationships, working alongside organizations, teams, and ambitious individuals to understand challenges, create solutions, and support continuous growth.
          </p>
        </div>

        {/* Scaled Up Infographic Banner Flow Container */}
        <div className="space-y-10 max-w-[88rem]">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex items-stretch w-full max-w-4xl lg:max-w-5xl ${pillar.offset} group`}
              >
                {/* Left Solid Number Box */}
                <div className={`w-32 sm:w-44 lg:w-52 shrink-0 ${pillar.themeBg} text-white rounded-l-[2rem] sm:rounded-l-[2.5rem] p-5 sm:p-8 flex flex-col justify-center items-center shadow-xl relative z-10 overflow-hidden`}>
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white/90">
                    {pillar.phase}
                  </span>
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white mt-1 drop-shadow-lg">
                    {pillar.step}
                  </span>
                </div>

                {/* Main Card Body + Top Folded Ribbon Banner */}
                <div className="flex-1 bg-white rounded-r-[2rem] sm:rounded-r-[2.5rem] border-2 border-slate-100/90 shadow-[0_15px_40px_rgba(0,0,0,0.07)] p-6 sm:p-9 lg:p-11 pt-9 lg:pt-11 relative flex flex-col justify-center gap-2 z-0 pr-24 sm:pr-32 lg:pr-36 hover:shadow-[0_25px_60px_rgba(0,0,0,0.14)] transition-all duration-300">
                  
                  {/* Top Folded Ribbon Banner */}
                  <div className="absolute -top-4 left-0 flex items-center z-20">
                    <div className={`w-3 h-4 ${pillar.themeDarkBg} rounded-tl-sm clip-fold-left pointer-events-none`} />
                    <div className={`${pillar.themeBg} text-white px-7 py-1.5 rounded-t-2xl shadow-lg font-black text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2`}>
                      <span>{pillar.stage}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight mt-1 group-hover:text-[#0284C7] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Right Protruding Double-Ring Circular Icon Badge */}
                <div className="absolute -right-6 sm:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white p-1.5 shadow-2xl border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${pillar.themeBg} flex items-center justify-center text-white shadow-inner`}>
                      <IconComp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2.2} />
                    </div>
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

export default ServicesPartnershipModel;
