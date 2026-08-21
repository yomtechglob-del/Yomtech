import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, RefreshCw } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── 3-STEP SEQUENTIAL BUSINESS INFOGRAPHIC FLOW (WATERMARK LOGO IN RIGHT BOTTOM CORNER) ─── */
const PRINCIPLES = [
  {
    id: '01',
    step: '01',
    label: 'Understand',
    subtitle: 'Build Strong Foundations',
    description: 'Master software engineering concepts, system design principles, and clean code practices from the ground up.',
    icon: BookOpen,
    accentColor: '#0EA5E9',
    borderColor: 'border-cyan-200/80',
    borderDash: 'border-cyan-400/60',
    cardBg: 'bg-[#0EA5E9]',
    badgeBg: 'bg-cyan-50 text-[#0284C7] border-cyan-200',
    themeText: 'text-[#0EA5E9]',
    dotBg: 'bg-[#0EA5E9]',
  },
  {
    id: '02',
    step: '02',
    label: 'Apply',
    subtitle: 'Practical Solutions',
    description: 'Architect production web, mobile, and AI software applications with hands-on coding and real repositories.',
    icon: Code2,
    accentColor: '#F59E0B',
    borderColor: 'border-amber-200/80',
    borderDash: 'border-amber-400/60',
    cardBg: 'bg-[#F59E0B]',
    badgeBg: 'bg-amber-50 text-[#D97706] border-amber-200',
    themeText: 'text-[#D97706]',
    dotBg: 'bg-[#F59E0B]',
  },
  {
    id: '03',
    step: '03',
    label: 'Improve',
    subtitle: 'Feedback & Iteration',
    description: 'Refine software quality continuously through senior mentor code reviews, pull requests, and performance tuning.',
    icon: RefreshCw,
    accentColor: '#A855F7',
    borderColor: 'border-purple-200/80',
    borderDash: 'border-purple-400/60',
    cardBg: 'bg-[#A855F7]',
    badgeBg: 'bg-purple-50 text-[#9333EA] border-purple-200',
    themeText: 'text-[#9333EA]',
    dotBg: 'bg-[#A855F7]',
  }
];

export const PracticalLearning = () => {
  return (
    <section className="relative min-h-screen py-28 md:py-44 bg-[#F4F8FC] overflow-hidden font-sans selection:bg-amber-500/20 selection:text-amber-900 border-b border-slate-200/80">
      
      {/* Precision Blueprint Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F6FC] via-[#F4F8FC] to-[#F0F6FC]" />
        
        {/* Cyan Dot Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.45]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0EA5E9 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="absolute top-[-15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-amber-200/20 blur-[130px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/20 blur-[140px]" />
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-20">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left space-y-5 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>Practical Learning Philosophy</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-tight relative z-10">
            Why WabiSkills <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Practical Learning Matters</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl relative z-10 font-sans">
            "At WabiSkills, knowledge becomes valuable when you can apply it in real production projects."
          </p>
        </div>

        {/* 3-STEP SEQUENTIAL INFOGRAPHIC FLOW */}
        <div className="relative max-w-[90rem] mx-auto pt-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 relative z-10 items-stretch">
            {PRINCIPLES.map((principle, idx) => {
              const IconComp = principle.icon;
              const isLast = idx === PRINCIPLES.length - 1;

              return (
                <div key={principle.id} className="relative flex flex-col items-center group">
                  
                  {/* Outer Dotted Frame */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    className={`w-full border-3 border-solid ${principle.borderDash} rounded-[3rem] p-5 sm:p-7 relative bg-white/60 backdrop-blur-xs hover:bg-white/90 transition-all duration-300 hover:-translate-y-3 shadow-lg hover:shadow-2xl flex flex-col justify-between h-full min-h-[480px]`}
                  >
                    {/* Inner Background Color Block Plate */}
                    <div className={`${principle.cardBg} rounded-[2.5rem] p-2 relative flex flex-col justify-between h-full overflow-hidden shadow-inner`}>
                      
                      {/* Pure White Card Body */}
                      <div className="bg-white rounded-3xl p-8 sm:p-11 shadow-xl space-y-8 flex flex-col justify-between h-full relative z-10 text-left border border-slate-100 min-h-[440px] overflow-hidden">
                        
                        {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                        <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                          <img src={logoEmblem} alt="" className="w-28 sm:w-36 h-28 sm:h-36 object-contain" />
                        </div>

                        {/* Top Row: Icon Box & Subtitle Badge */}
                        <div className="flex items-center justify-between relative z-10">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${principle.themeText} shadow-md group-hover:scale-110 transition-transform`}>
                            <IconComp size={34} strokeWidth={2.4} />
                          </div>
                          <span className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border ${principle.badgeBg} shadow-2xs`}>
                            {principle.subtitle}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-4 text-left pt-2 relative z-10">
                          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors leading-tight">
                            {principle.label}
                          </h3>
                          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                            {principle.description}
                          </p>
                        </div>

                        {/* Bottom Step Number */}
                        <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-slate-400 font-mono font-semibold text-sm sm:text-base relative z-10">
                          <span className="tracking-widest font-bold">Step</span>
                          <span className={`text-2xl sm:text-3xl font-black font-mono ${principle.themeText}`}>
                            {principle.step}
                          </span>
                        </div>

                      </div>

                      {/* Directional Arrow Pointer Notch */}
                      {!isLast && (
                        <div 
                          className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 ${principle.cardBg} z-20`}
                          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                        />
                      )}

                    </div>
                  </motion.div>

                  {/* Connected Node Dot between Cards */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-7 lg:-right-9 top-1/2 -translate-y-1/2 z-30 items-center justify-center">
                      <div className={`w-6 h-6 rounded-full ${principle.dotBg} border-3 border-white shadow-xl animate-pulse`} />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PracticalLearning;
