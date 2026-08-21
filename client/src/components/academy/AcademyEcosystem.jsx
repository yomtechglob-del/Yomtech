import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code2, Users, Network, TrendingUp, 
  ArrowUpRight
} from 'lucide-react';
import logoImg from '../../assets/academy/wabiskills-logo.jpg';

/* ─── 5-STEP ACADEMY ECOSYSTEM INFOGRAPHIC (MATCHING IMAGE 2 EXACTLY) ─── */
const ECOSYSTEM_NODES = [
  {
    id: 'learn',
    step: '01',
    phase: 'STEP 01',
    dataTag: 'DATA A',
    title: 'LEARN',
    tagline: 'Core Knowledge',
    description: 'Acquire production-grade software engineering principles, system design, and deep architectural patterns.',
    icon: BookOpen,
    gradient: 'from-[#0EA5E9] via-[#0284C7] to-[#0369A1]',
    ringBorder: 'border-[#0EA5E9]',
    badgeBg: 'bg-[#0EA5E9]',
    themeText: 'text-[#0EA5E9]',
  },
  {
    id: 'build',
    step: '02',
    phase: 'STEP 02',
    dataTag: 'DATA B',
    title: 'BUILD',
    tagline: 'Practical Execution',
    description: 'Engineer scalable fullstack applications, resilient microservices, and intelligent AI model deployments.',
    icon: Code2,
    gradient: 'from-[#F59E0B] via-[#D97706] to-[#B45309]',
    ringBorder: 'border-[#F59E0B]',
    badgeBg: 'bg-[#F59E0B]',
    themeText: 'text-[#D97706]',
  },
  {
    id: 'mentor',
    step: '03',
    phase: 'STEP 03',
    dataTag: 'DATA C',
    title: 'MENTOR',
    tagline: '1-on-1 Guidance',
    description: 'Receive direct 1-on-1 code reviews, pull request feedback, and expert architectural guidance.',
    icon: Users,
    gradient: 'from-[#A855F7] via-[#9333EA] to-[#7E22CE]',
    ringBorder: 'border-[#A855F7]',
    badgeBg: 'bg-[#A855F7]',
    themeText: 'text-[#9333EA]',
  },
  {
    id: 'connect',
    step: '04',
    phase: 'STEP 04',
    dataTag: 'DATA D',
    title: 'CONNECT',
    tagline: 'Global Network',
    description: 'Network directly with global technology teams, enterprise recruiters, and elite industry partners.',
    icon: Network,
    gradient: 'from-[#10B981] via-[#059669] to-[#047857]',
    ringBorder: 'border-[#10B981]',
    badgeBg: 'bg-[#10B981]',
    themeText: 'text-[#059669]',
  },
  {
    id: 'grow',
    step: '05',
    phase: 'STEP 05',
    dataTag: 'DATA E',
    title: 'GROW',
    tagline: 'Career Acceleration',
    description: 'Accelerate career trajectory with practical code craftsmanship, mentorship, and verified portfolios.',
    icon: TrendingUp,
    gradient: 'from-[#EF4444] via-[#DC2626] to-[#B91C1C]',
    ringBorder: 'border-[#EF4444]',
    badgeBg: 'bg-[#EF4444]',
    themeText: 'text-[#DC2626]',
  },
];

export const AcademyEcosystem = () => {
  return (
    <section className="relative min-h-screen py-24 lg:py-36 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 bg-[#F8FAFC] border-b border-slate-200/80">
      
      {/* Precision Blueprint Grid & Glow Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/60 via-slate-50/40 to-white" />
        
        {/* Soft Background Orbs */}
        <div className="absolute top-[-5%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-blue-400/10 blur-[130px]" />
        <div className="absolute top-[30%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-300/10 blur-[140px]" />
        
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.25) 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        
        {/* Left-Aligned Section Header matching Image 2 */}
        <div className="text-left space-y-4 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>GLOBAL INTEGRATION</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight relative z-10">
            Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">Ecosystem</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl relative z-10 font-sans">
            Connecting WabiSkills learners, mentors, projects, and the YomTech Global engineering core into a single, unified intelligence network.
          </p>
        </div>

        {/* Central Core Nucleus Badge */}
        <div className="flex justify-center relative z-20 my-4">
          <div className="relative group cursor-pointer w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-75 transition-opacity duration-500 scale-105" />
            
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-cyan-300/80 shadow-[0_15px_40px_rgba(14,211,221,0.2)] flex flex-col sm:flex-row items-center gap-5 hover:scale-[1.02] transition-transform duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 border-2 border-slate-100 shadow-md shrink-0 flex items-center justify-center">
                <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain rounded-xl" />
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-cyan-600">
                    CENTRAL CORE NUCLEUS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                    LIVE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight">
                  WabiSkills Platform
                </h3>
                
                <p className="text-xs text-slate-500 font-medium">
                  Skills Development &amp; Intelligence Core
                </p>

                <a
                  href="https://wabiskills.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0284C7] text-white text-[11px] font-black uppercase tracking-widest shadow-sm hover:bg-sky-700 transition-all mt-1"
                >
                  <span>VISIT PLATFORM</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-STEP ALTERNATING BUSINESS INFOGRAPHIC LAYOUT (EXACT MATCH FOR IMAGE 2) */}
        <div className="relative max-w-6xl mx-auto py-6">
          
          {/* Central Connected Zig-Zag Line (Desktop Only) */}
          <div className="hidden lg:block absolute inset-y-12 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-cyan-400 via-yellow-400 via-purple-400 via-emerald-400 to-red-500 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.4)] pointer-events-none z-0" />

          <div className="space-y-12 relative z-10">
            {ECOSYSTEM_NODES.map((node, idx) => {
              const IconComp = node.icon;
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={node.id}
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
                          <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-4 ${node.ringBorder} shadow-lg flex items-center justify-center shrink-0`}>
                            <div className={`w-full h-full rounded-full ${node.badgeBg} flex flex-col items-center justify-center text-white font-mono font-black text-xs shadow-inner`}>
                              <span className="text-[8px] uppercase tracking-tighter opacity-90">STEP</span>
                              <span className="text-sm font-extrabold leading-none">{node.step}</span>
                            </div>
                          </div>

                          {/* Arrow Pointer Tab matching Image 2 */}
                          <div
                            className={`px-4 py-1.5 bg-gradient-to-r ${node.gradient} text-white font-mono font-black text-xs uppercase tracking-wider shadow-md ${
                              isEven ? 'rounded-l-2xl rounded-r-sm' : 'rounded-r-2xl rounded-l-sm'
                            }`}
                          >
                            <span>{node.dataTag}</span>
                          </div>
                        </div>

                        {/* Icon Badge */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${node.gradient} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComp size={22} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="space-y-2 text-left">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-md bg-slate-100 ${node.themeText}`}>
                            {node.tagline}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                          {node.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {node.description}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Central Connected Node Dot matching Image 2 */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-slate-200 shadow-md items-center justify-center z-10 shrink-0">
                    <div className={`w-5 h-5 rounded-full ${node.badgeBg} animate-ping`} />
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

export default AcademyEcosystem;
