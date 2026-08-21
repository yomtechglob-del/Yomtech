import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, RefreshCw, ChevronRight } from 'lucide-react';

/* ─── 3-STEP SEQUENTIAL BUSINESS INFOGRAPHIC FLOW (EXACT MATCH FOR SCREENSHOT 2) ─── */
const PRINCIPLES = [
  {
    id: '01',
    step: '01',
    label: 'UNDERSTAND',
    subtitle: 'BUILD STRONG FOUNDATIONS',
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
    label: 'APPLY',
    subtitle: 'PRACTICAL SOLUTIONS',
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
    label: 'IMPROVE',
    subtitle: 'FEEDBACK & ITERATION',
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
    <section className="relative min-h-screen py-24 md:py-36 bg-[#F4F8FC] overflow-hidden font-sans selection:bg-amber-500/20 selection:text-amber-900 border-b border-slate-200/80">
      
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

      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left space-y-4 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>PRACTICAL LEARNING PHILOSOPHY</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight relative z-10">
            Why WabiSkills <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Practical Learning Matters</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10 font-sans">
            "At WabiSkills, knowledge becomes valuable when you can apply it in real production projects."
          </p>
        </div>

        {/* 3-STEP SEQUENTIAL BUSINESS INFOGRAPHIC FLOW LAYOUT (MATCHING SCREENSHOT 2) */}
        <div className="relative max-w-6xl mx-auto pt-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
            {PRINCIPLES.map((principle, idx) => {
              const IconComp = principle.icon;
              const isLast = idx === PRINCIPLES.length - 1;

              return (
                <div key={principle.id} className="relative flex flex-col items-center group">
                  
                  {/* Outer Dotted Outline Frame Container matching Screenshot 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    className={`w-full border-2 border-dashed ${principle.borderDash} rounded-3xl p-3 relative bg-white/40 backdrop-blur-xs hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col justify-between h-full`}
                  >
                    {/* Inner Background Color Block Plate matching Screenshot 2 */}
                    <div className={`${principle.cardBg} rounded-2xl p-1 relative flex flex-col justify-between h-full overflow-hidden shadow-inner`}>
                      
                      {/* Pure White Card Body matching Screenshot 2 */}
                      <div className="bg-white rounded-xl p-6 sm:p-7 shadow-md space-y-4 flex flex-col justify-between h-full relative z-10 text-left border border-slate-100">
                        
                        {/* Top Row: Centered Icon */}
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${principle.themeText} shadow-2xs group-hover:scale-110 transition-transform`}>
                            <IconComp size={20} strokeWidth={2.2} />
                          </div>
                          <span className={`text-[9px] font-mono font-black uppercase px-2.5 py-1 rounded-md border ${principle.badgeBg}`}>
                            {principle.subtitle}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2 text-left pt-2">
                          <h3 className="text-xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                            {principle.label}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            {principle.description}
                          </p>
                        </div>

                        {/* Bottom Step Number matching Screenshot 2 */}
                        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-slate-400 font-mono font-bold text-xs">
                          <span>STEP</span>
                          <span className={`text-base font-black font-mono ${principle.themeText}`}>
                            {principle.step}
                          </span>
                        </div>

                      </div>

                      {/* Directional Arrow Pointer Notch on Right Side matching Screenshot 2 */}
                      {!isLast && (
                        <div 
                          className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 ${principle.cardBg} z-20`}
                          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                        />
                      )}

                    </div>
                  </motion.div>

                  {/* Connected Node Dot between Cards matching Screenshot 2 */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center">
                      <div className={`w-4 h-4 rounded-full ${principle.dotBg} border-2 border-white shadow-md animate-pulse`} />
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
