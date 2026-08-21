import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, GitPullRequest, Rocket } from 'lucide-react';

/* ─── 4-COLUMN HORIZONTAL CHEVRON GRID (DATA TAGS REMOVED) ─── */
const TRANSFORMATION_STEPS = [
  {
    id: '01',
    step: '01',
    optionText: 'STEP',
    title: 'THEORY & COMPUTER SCIENCE',
    subtitle: 'PHASE 01 • CORE WABISKILLS PRINCIPLES',
    description: 'WabiSkills learners master production algorithms, data structures, system design, microservices architecture, and clean code principles.',
    icon: BookOpen,
    chevronBg: 'bg-[#0EA5E9]', // Cyan Blue
    chevronPos: 'top',
    themeText: 'text-[#0EA5E9]',
    iconColor: 'text-[#0EA5E9]',
  },
  {
    id: '02',
    step: '02',
    optionText: 'STEP',
    title: 'SIMULATED PRODUCTION',
    subtitle: 'PHASE 02 • WABISKILLS SIMULATED REPOS',
    description: 'Students architect multi-tenant fullstack web, mobile, and AI applications inside live WabiSkills enterprise git repositories.',
    icon: Terminal,
    chevronBg: 'bg-[#F59E0B]', // Amber Yellow
    chevronPos: 'bottom',
    themeText: 'text-[#D97706]',
    iconColor: 'text-[#F59E0B]',
  },
  {
    id: '03',
    step: '03',
    optionText: 'STEP',
    title: 'LIVE CODE REVIEWS',
    subtitle: 'PHASE 03 • SENIOR MENTORSHIP',
    description: 'Undergo thorough line-by-line pull request reviews, performance bottleneck refactoring, and security audits from senior mentors.',
    icon: GitPullRequest,
    chevronBg: 'bg-[#A855F7]', // Purple
    chevronPos: 'top',
    themeText: 'text-[#9333EA]',
    iconColor: 'text-[#A855F7]',
  },
  {
    id: '04',
    step: '04',
    optionText: 'STEP',
    title: 'CLOUD DEPLOYMENT & IMPACT',
    subtitle: 'PHASE 04 • WABISKILLS CAREER ROLLOUT',
    description: 'Deploy production applications to AWS/GCP with automated CI/CD pipelines, followed by direct hiring recommendations.',
    icon: Rocket,
    chevronBg: 'bg-[#10B981]', // Emerald Green
    chevronPos: 'bottom',
    themeText: 'text-[#059669]',
    iconColor: 'text-[#10B981]',
  }
];

export const ClassroomToRealWorld = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-36 bg-[#F4F8FC] overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-b border-slate-200/80">
      
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
        
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-400/15 blur-[120px]" />
      </div>

      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        
        {/* Left-Aligned Header Section */}
        <div className="text-left space-y-4 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>WABISKILLS PRACTICAL APPLICATION</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight relative z-10">
            From Classroom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500">to Real World</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10 font-sans">
            Transforming academic CS knowledge into elite production engineering craftsmanship through WabiSkills immersive bootcamps.
          </p>
        </div>

        {/* 4-COLUMN HORIZONTAL CHEVRON CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-4 relative z-10">
          {TRANSFORMATION_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            const isTopChevron = step.chevronPos === 'top';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.07)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[440px] group hover:-translate-y-2 relative border border-slate-100"
              >
                {/* CHEVRON BANNER AT TOP (Step 01 & Step 03) */}
                {isTopChevron ? (
                  <div className="p-6 pb-2 space-y-4">
                    {/* Arrow Chevron Header Tab */}
                    <div className="flex items-center justify-between -ml-6 -mt-6">
                      <div 
                        className={`w-[80%] px-5 py-3 ${step.chevronBg} text-white shadow-md flex items-center justify-start rounded-r-sm`}
                        style={{ clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)' }}
                      >
                        <div className="flex items-center gap-2 pl-2">
                          <span className="text-[10px] font-mono font-black uppercase tracking-widest opacity-90">
                            {step.optionText}
                          </span>
                          <span className="text-xl font-black font-mono leading-none">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subtitle Badge */}
                    <div className="pt-2">
                      <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md bg-slate-100 ${step.themeText}`}>
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Middle Text Content */}
                    <div className="space-y-2 pt-1 text-left">
                      <h3 className="text-lg font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* ICON AT TOP (Step 02 & Step 04) */
                  <div className="p-6 pb-2 space-y-4 text-left">
                    {/* Top Row: Icon Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${step.iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
                        <IconComp size={24} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Subtitle Badge */}
                    <div>
                      <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md bg-slate-100 ${step.themeText}`}>
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Middle Text Content */}
                    <div className="space-y-2 pt-1">
                      <h3 className="text-lg font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* BOTTOM ROW (Icon or Chevron Banner) */}
                {isTopChevron ? (
                  /* Icon at Bottom (Step 01 & Step 03) */
                  <div className="p-6 pt-2 flex justify-start">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${step.iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={24} strokeWidth={2.2} />
                    </div>
                  </div>
                ) : (
                  /* CHEVRON BANNER AT BOTTOM (Step 02 & Step 04) */
                  <div className="p-6 pt-2">
                    <div className="-ml-6 -mb-6">
                      <div 
                        className={`w-[80%] px-5 py-3 ${step.chevronBg} text-white shadow-md flex items-center justify-start rounded-r-sm`}
                        style={{ clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)' }}
                      >
                        <div className="flex items-center gap-2 pl-2">
                          <span className="text-[10px] font-mono font-black uppercase tracking-widest opacity-90">
                            {step.optionText}
                          </span>
                          <span className="text-xl font-black font-mono leading-none">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ClassroomToRealWorld;
