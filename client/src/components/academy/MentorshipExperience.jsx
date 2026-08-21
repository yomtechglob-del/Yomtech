import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageSquare, GitPullRequest, Crown } from 'lucide-react';

/* ─── 4-STEP LIVE-ONLY LEARNING INFOGRAPHIC (MATCHING IMAGE 2) ─── */
const MENTORSHIP_STEPS = [
  {
    id: '01',
    step: '01',
    dataTag: 'DATA A',
    title: 'LIVE-ONLY LECTURES',
    subtitle: 'Step 01 • Real Human Instructors',
    description: 'Interactive, instructor-led sessions that feel like a real physical classroom with daily live Q&A.',
    icon: UserCheck,
    gradient: 'from-[#0EA5E9] via-[#0284C7] to-[#0369A1]',
    ringBorder: 'border-[#0EA5E9]',
    badgeBg: 'bg-[#0EA5E9]',
    themeText: 'text-[#0EA5E9]',
  },
  {
    id: '02',
    step: '02',
    dataTag: 'DATA B',
    title: '1-ON-1 CODE REVIEWS',
    subtitle: 'Step 02 • Senior Engineering Feedback',
    description: 'Direct line-by-line pull request audits, architectural feedback, and optimization guidance.',
    icon: GitPullRequest,
    gradient: 'from-[#F59E0B] via-[#D97706] to-[#B45309]',
    ringBorder: 'border-[#F59E0B]',
    badgeBg: 'bg-[#F59E0B]',
    themeText: 'text-[#D97706]',
  },
  {
    id: '03',
    step: '03',
    dataTag: 'DATA C',
    title: 'DAILY FOLLOW-UPS',
    subtitle: 'Step 03 • Continuous Accountability',
    description: 'Daily instructor check-ins to monitor coding progress, resolve bugs, and keep learners on track.',
    icon: MessageSquare,
    gradient: 'from-[#A855F7] via-[#9333EA] to-[#7E22CE]',
    ringBorder: 'border-[#A855F7]',
    badgeBg: 'bg-[#A855F7]',
    themeText: 'text-[#9333EA]',
  },
  {
    id: '04',
    step: '04',
    dataTag: 'DATA D',
    title: 'CAREER PLACEMENT',
    subtitle: 'Step 04 • Internship & Hiring Network',
    description: 'Direct recommendation into YomTech Global client projects and partner technology companies.',
    icon: Crown,
    gradient: 'from-[#10B981] via-[#059669] to-[#047857]',
    ringBorder: 'border-[#10B981]',
    badgeBg: 'bg-[#10B981]',
    themeText: 'text-[#059669]',
  }
];

export const MentorshipExperience = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-[#F8FAFC] overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-b border-amber-200/80">
      
      {/* Blueprint Dot Grid & Ambient Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF9] via-white to-[#F8FAFC]" />
        
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.25) 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-amber-200/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/20 blur-[140px]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        
        {/* Left-Aligned Header Section matching Image 2 */}
        <div className="text-left space-y-4 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>WABISKILLS LIVE-ONLY LEARNING</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight relative z-10">
            Learn With Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Human Instructors Live</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10 font-sans">
            Live, Instructor-led Sessions that feel like a real classroom, not just a video library. No bots — our WabiSkills instructors are real humans teaching in real time with daily follow-ups.
          </p>
        </div>

        {/* 4-STEP ALTERNATING BUSINESS INFOGRAPHIC LAYOUT (MATCHING IMAGE 2 EXACTLY) */}
        <div className="relative max-w-6xl mx-auto py-6">
          
          {/* Central Connected Zig-Zag Line (Desktop Only) */}
          <div className="hidden lg:block absolute inset-y-12 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-cyan-400 via-yellow-400 via-purple-400 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.4)] pointer-events-none z-0" />

          <div className="space-y-12 relative z-10">
            {MENTORSHIP_STEPS.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={stepItem.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Main Step Pill Card matching Image 2 */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] group">
                    <div className="bg-white rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between space-y-4 hover:-translate-y-1.5">
                      
                      {/* Header Row: Double Ring Step Badge + Arrow Pointer Data Tag matching Image 2 */}
                      <div className={`flex items-center justify-between gap-4 ${isEven ? 'flex-row-reverse' : ''}`}>
                        
                        {/* Circular Double-Ring Badge + Arrow Pointer Tab matching Image 2 */}
                        <div className={`flex items-center gap-2 ${isEven ? 'flex-row-reverse' : ''}`}>
                          <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-4 ${stepItem.ringBorder} shadow-lg flex items-center justify-center shrink-0`}>
                            <div className={`w-full h-full rounded-full ${stepItem.badgeBg} flex flex-col items-center justify-center text-white font-mono font-black text-xs shadow-inner`}>
                              <span className="text-[8px] uppercase tracking-tighter opacity-90">STEP</span>
                              <span className="text-sm font-extrabold leading-none">{stepItem.step}</span>
                            </div>
                          </div>

                          {/* Arrow Pointer Tab matching Image 2 */}
                          <div
                            className={`px-4 py-1.5 bg-gradient-to-r ${stepItem.gradient} text-white font-mono font-black text-xs uppercase tracking-wider shadow-md ${
                              isEven ? 'rounded-l-2xl rounded-r-sm' : 'rounded-r-2xl rounded-l-sm'
                            }`}
                          >
                            <span>{stepItem.dataTag}</span>
                          </div>
                        </div>

                        {/* Icon Badge */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stepItem.gradient} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComp size={22} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="space-y-2 text-left">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-md bg-slate-100 ${stepItem.themeText}`}>
                            {stepItem.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                          {stepItem.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {stepItem.description}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Central Connected Node Dot matching Image 2 */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-slate-200 shadow-md items-center justify-center z-10 shrink-0">
                    <div className={`w-5 h-5 rounded-full ${stepItem.badgeBg} animate-ping`} />
                  </div>

                  {/* Empty Space for Grid Balance */}
                  <div className="hidden lg:block w-[calc(50%-2.5rem)]" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorshipExperience;
