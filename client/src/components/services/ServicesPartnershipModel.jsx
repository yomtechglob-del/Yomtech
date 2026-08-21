import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wrench, GraduationCap, TrendingUp, Compass } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── SERVICES PARTNERSHIP MODEL (WATERMARK LOGO IN RIGHT BOTTOM CORNER & TITLE CASE) ─── */
export const ServicesPartnershipModel = () => {
  const pillars = [
    {
      step: '01',
      optionLabel: 'Option 01',
      stage: 'Understand',
      title: 'Active Listening & Operational Alignment',
      desc: 'We listen to the organization, its people, goals, workflows, and operational challenges to ensure complete strategic alignment.',
      icon: MessageSquare,
      align: 'left',
      themeBg: 'bg-[#F97316]',
      themeDarkBg: 'bg-[#EA580C]',
      themeText: 'text-[#EA580C]',
      themeBorder: 'border-[#F97316]',
      themeLightBg: 'bg-orange-50',
    },
    {
      step: '02',
      optionLabel: 'Option 02',
      stage: 'Build',
      title: 'Practical Solution Delivery',
      desc: 'We transform client requirements into reliable, custom-built software, Yomnex ERP modules, and high-performance enterprise platforms.',
      icon: Wrench,
      align: 'right',
      themeBg: 'bg-[#0891B2]',
      themeDarkBg: 'bg-[#0E7490]',
      themeText: 'text-[#0E7490]',
      themeBorder: 'border-[#0891B2]',
      themeLightBg: 'bg-cyan-50',
    },
    {
      step: '03',
      optionLabel: 'Option 03',
      stage: 'Enable',
      title: 'Knowledge & Capability Transfer',
      desc: 'We train internal teams and individuals to work with technology effectively through dedicated WabiSkills mentorship and hands-on onboarding.',
      icon: GraduationCap,
      align: 'left',
      themeBg: 'bg-[#06B6D4]',
      themeDarkBg: 'bg-[#0891B2]',
      themeText: 'text-[#0891B2]',
      themeBorder: 'border-[#06B6D4]',
      themeLightBg: 'bg-sky-50',
    },
    {
      step: '04',
      optionLabel: 'Option 04',
      stage: 'Grow',
      title: 'Continuous Infrastructure Evolution',
      desc: 'We continue evolving technology infrastructure, security protocols, and operational capabilities as new digital opportunities emerge.',
      icon: TrendingUp,
      align: 'right',
      themeBg: 'bg-[#F59E0B]',
      themeDarkBg: 'bg-[#D97706]',
      themeText: 'text-[#D97706]',
      themeBorder: 'border-[#F59E0B]',
      themeLightBg: 'bg-amber-50',
    },
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[600px] bg-emerald-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Long-Term Partnership Model</span>
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

        {/* Scaled-Up 3D Central Pencil Pillar + Alternating Directional Arrow Banners */}
        <div className="relative max-w-[92rem] mx-auto py-8">
          
          {/* Scaled Central Vertical 3D Pencil Stem */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:flex flex-col items-center z-10 pointer-events-none">
            {/* Top Pencil Cap / Eraser */}
            <div className="w-16 sm:w-20 lg:w-22 h-14 sm:h-16 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] rounded-t-3xl shadow-2xl flex items-center justify-center border-b-4 border-amber-800">
              <Compass size={28} className="text-white" />
            </div>

            {/* Main Pencil Shaft Body */}
            <div className="w-16 sm:w-20 lg:w-22 flex-1 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] shadow-2xl relative border-x-2 border-amber-700/40">
              <div className="absolute inset-y-0 left-4 w-3 bg-white/35 blur-[1px]" />
            </div>

            {/* Bottom Pencil Tip Cone */}
            <div className="w-16 sm:w-20 lg:w-22 h-24 flex flex-col items-center justify-start overflow-hidden">
              <div 
                className="w-full h-16 bg-amber-200"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
              <div 
                className="w-7 h-7 bg-slate-900 -mt-7"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </div>
          </div>

          {/* Alternating Directional Arrow Banner Cards Container */}
          <div className="space-y-14 md:space-y-20 relative z-20">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isLeft = pillar.align === 'left';

              return (
                <motion.div
                  key={pillar.step}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center w-full ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className={`w-full md:w-[48.5%] ${isLeft ? 'md:pr-10 lg:pr-14' : 'md:pl-10 lg:pl-14'} group`}>
                    
                    {/* Scaled Outer Directional Arrow Border Container */}
                    <div 
                      className={`p-4 sm:p-5 lg:p-6 ${pillar.themeBg} shadow-2xl transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden`}
                      style={{
                        clipPath: isLeft 
                          ? 'polygon(0% 50%, 10% 0%, 100% 0%, 100% 100%, 10% 100%)'
                          : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                      }}
                    >
                      {/* Scaled Inner White Card Plate */}
                      <div className={`bg-white p-7 sm:p-9 lg:p-11 relative flex flex-col justify-between space-y-5 shadow-inner overflow-hidden ${
                        isLeft ? 'pl-10 sm:pl-12 rounded-r-3xl' : 'pr-10 sm:pr-12 rounded-l-3xl'
                      }`}>
                        
                        {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                        <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                          <img src={logoEmblem} alt="" className="w-28 sm:w-36 h-28 sm:h-36 object-contain" />
                        </div>

                        {/* Top Header: Step Number & Stage Tag */}
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-4">
                            <span className={`text-4xl sm:text-6xl font-black font-mono tracking-tight ${pillar.themeText}`}>
                              {pillar.step}
                            </span>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider ${pillar.themeLightBg} ${pillar.themeText} border-2 ${pillar.themeBorder}`}>
                              {pillar.stage}
                            </span>
                          </div>

                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${pillar.themeLightBg} ${pillar.themeText} border-2 ${pillar.themeBorder} flex items-center justify-center shadow-inner group-hover:scale-115 transition-transform duration-300`}>
                            <IconComp size={28} strokeWidth={2.2} />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3 relative z-10">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                            {pillar.title}
                          </h3>

                          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Step Tag Label Outside */}
                    <div className={`pt-3 flex items-center ${isLeft ? 'justify-start pl-6' : 'justify-end pr-6'}`}>
                      <span className={`text-xs sm:text-sm font-mono font-bold tracking-wider ${pillar.themeText}`}>
                        ◆ {pillar.optionLabel}
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesPartnershipModel;
