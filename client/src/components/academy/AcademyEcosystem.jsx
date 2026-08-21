import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code2, Users, Network, TrendingUp, 
  ArrowUpRight
} from 'lucide-react';
import logoImg from '../../assets/academy/wabiskills-logo.jpg';

/* ─── 5-STEP BUSINESS INFOGRAPHIC (EXACT VECTOR RECREATION OF IMAGE 2) ─── */
const ECOSYSTEM_STEPS = [
  {
    id: 'learn',
    step: '01',
    title: 'LEARN',
    tagline: 'CORE KNOWLEDGE',
    description: 'Acquire production-grade software engineering principles, system design, and deep architectural patterns.',
    icon: BookOpen,
    ringBorder: 'border-[#00B4D8]',
    ringBg: 'bg-[#0077B6]',
    arrowBg: 'bg-[#0077B6]',
    dotBg: 'bg-[#0077B6]',
    textHex: '#0077B6',
  },
  {
    id: 'build',
    step: '02',
    title: 'BUILD',
    tagline: 'PRACTICAL EXECUTION',
    description: 'Engineer scalable fullstack applications, resilient microservices, and intelligent AI model deployments.',
    icon: Code2,
    ringBorder: 'border-[#FFB703]',
    ringBg: 'bg-[#FB8500]',
    arrowBg: 'bg-[#FB8500]',
    dotBg: 'bg-[#FB8500]',
    textHex: '#FB8500',
  },
  {
    id: 'mentor',
    step: '03',
    title: 'MENTOR',
    tagline: '1-ON-1 GUIDANCE',
    description: 'Receive direct 1-on-1 code reviews, pull request feedback, and expert architectural guidance.',
    icon: Users,
    ringBorder: 'border-[#9D4EDD]',
    ringBg: 'bg-[#7B2CBF]',
    arrowBg: 'bg-[#7B2CBF]',
    dotBg: 'bg-[#7B2CBF]',
    textHex: '#7B2CBF',
  },
  {
    id: 'connect',
    step: '04',
    title: 'CONNECT',
    tagline: 'GLOBAL NETWORK',
    description: 'Network directly with global technology teams, enterprise recruiters, and elite industry partners.',
    icon: Network,
    ringBorder: 'border-[#52B788]',
    ringBg: 'bg-[#2D6A4F]',
    arrowBg: 'bg-[#2D6A4F]',
    dotBg: 'bg-[#2D6A4F]',
    textHex: '#2D6A4F',
  },
  {
    id: 'grow',
    step: '05',
    title: 'GROW',
    tagline: 'CAREER ACCELERATION',
    description: 'Accelerate career trajectory with practical code craftsmanship, mentorship, and verified portfolios.',
    icon: TrendingUp,
    ringBorder: 'border-[#E63946]',
    ringBg: 'bg-[#D90429]',
    arrowBg: 'bg-[#D90429]',
    dotBg: 'bg-[#D90429]',
    textHex: '#D90429',
  },
];

export const AcademyEcosystem = () => {
  return (
    <section className="relative min-h-screen py-20 lg:py-32 overflow-hidden font-sans bg-[#F4F7FB] text-slate-800 border-b border-slate-200">
      
      {/* Precision Blueprint Dot Grid Background matching screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F6FC] via-[#F4F8FC] to-[#F0F6FC]" />
        
        {/* Cyan Dot Matrix Grid matching screenshot */}
        <div 
          className="absolute inset-0 opacity-[0.45]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0EA5E9 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Light Orbs */}
        <div className="absolute top-[10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-20">
        
        {/* Left-Aligned Header with Pill Badge & Cyan Accent Line */}
        <div className="text-left space-y-5 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-sm font-black uppercase tracking-widest shadow-xs shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>GLOBAL INTEGRATION</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight relative z-10">
            Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">Ecosystem</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-4xl relative z-10 font-sans">
            How YomTech Global and WabiSkills interconnect to train elite engineers and deliver enterprise solutions.
          </p>
        </div>

        {/* Central Core Nucleus Card (Matching Page Body Background Color #F4F7FB) */}
        <div className="flex justify-center relative z-20 my-2">
          <div className="relative group cursor-pointer w-full max-w-md">
            <div className="relative bg-[#F4F7FB] rounded-3xl p-5 shadow-lg flex items-center gap-4 hover:scale-[1.02] transition-transform duration-500 border border-slate-200/60">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-xs shrink-0 flex items-center justify-center border border-slate-100">
                <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain rounded-xl" />
              </div>

              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-black uppercase tracking-widest text-cyan-600">
                    CENTRAL CORE NUCLEUS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-black uppercase">
                    LIVE
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 font-display tracking-tight">
                  WabiSkills Platform
                </h3>
                
                <p className="text-xs text-slate-500 font-medium">
                  Skills Development &amp; Intelligence Core
                </p>

                <a
                  href="https://wabiskills.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0284C7] text-white text-[10px] font-black uppercase tracking-widest shadow-xs hover:bg-sky-700 transition-all mt-1"
                >
                  <span>VISIT PLATFORM</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-STEP BUSINESS INFOGRAPHIC CONTAINER (EXACT IMAGE 2 RECREATION) */}
        <div className="relative max-w-[90rem] mx-auto py-4">
          
          {/* Animated Water Flow Liquid Vertical Spine (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 900">
              <defs>
                {/* Water Liquid Flow Linear Gradient */}
                <linearGradient id="waterFlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="25%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#818CF8" />
                  <stop offset="75%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>

                {/* Soft Liquid Glow Filter */}
                <filter id="waterGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Base Outer Glow Track Line */}
              <path
                d="M 500 70 L 500 850"
                stroke="url(#waterFlowGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.25"
                filter="url(#waterGlowFilter)"
              />

              {/* 2. Base Solid Pipe Line */}
              <path
                d="M 500 70 L 500 850"
                stroke="#CBD5E1"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* 3. Primary Animated Water Liquid Flow Stream */}
              <motion.path
                d="M 500 70 L 500 850"
                stroke="url(#waterFlowGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="16 16"
                fill="none"
                animate={{
                  strokeDashoffset: [0, -128],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* 4. Secondary Fast Water Bubble Pulsing Stream */}
              <motion.path
                d="M 500 70 L 500 850"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 24"
                fill="none"
                opacity="0.9"
                animate={{
                  strokeDashoffset: [0, -120],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* 5. Cascading Water Droplets */}
              {[120, 290, 460, 630, 800].map((yPos, i) => (
                <motion.circle
                  key={i}
                  cx={500}
                  cy={yPos}
                  r={5}
                  fill="#0EA5E9"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  animate={{
                    r: [4, 7, 4],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </svg>
          </div>

          <div className="space-y-12 relative z-10">
            {ECOSYSTEM_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 1; // Left: 01, 03, 05; Right: 02, 04

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex flex-col lg:flex-row items-center w-full relative z-10"
                >
                  {/* LEFT SIDE CARD (Step 01, 03, 05) */}
                  {!isEven ? (
                    <div className="flex items-center w-full lg:w-[54%] pr-0 lg:pr-6 justify-between relative group">
                      
                      {/* Pure Crisp White Capsule Pill Card Plate matching Screenshot 1 */}
                      <div className="relative flex-1 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 sm:p-7 flex items-center gap-5 z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                        
                        {/* Far Left Icon inside subtle circle */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-slate-100/60">
                          <IconComp className="w-6 h-6 text-slate-700" />
                        </div>

                        {/* Middle Text Content */}
                        <div className="flex-1 text-left min-w-0 pr-8">
                          <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight font-display uppercase">
                            {step.title}
                          </h3>
                          <div className="w-full h-px bg-slate-200 my-1.5" />
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Overlapping Double-Ring 3D Step Circle matching Image 2 */}
                        <div className="relative shrink-0 flex items-center -mr-6 sm:-mr-8 z-20">
                          
                          {/* Circular 3D Step Ring Badge overlapping right end of pill card */}
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 border-[6px] ${step.ringBorder} shadow-xl flex flex-col items-center justify-center text-white z-20`}>
                            <div className={`w-full h-full rounded-full ${step.ringBg} flex flex-col items-center justify-center text-white font-mono font-black shadow-inner`}>
                              <span className="text-[7px] uppercase tracking-tighter opacity-90">STEP</span>
                              <span className="text-xs sm:text-sm font-extrabold leading-none">{step.step}</span>
                            </div>
                          </div>

                        </div>

                      </div>

                      {/* Line Segment & Connected Node Dot on Spine Line */}
                      <div className="hidden lg:flex items-center shrink-0 pl-16 z-20">
                        <div className="w-6 h-0.5 bg-slate-400" />
                        <div className={`w-6 h-6 rounded-full bg-white border-4 ${step.ringBorder} shadow-md flex items-center justify-center`}>
                          <div className={`w-2.5 h-2.5 rounded-full ${step.ringBg}`} />
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* RIGHT SIDE CARD (Step 02, 04) */
                    <div className="flex items-center w-full lg:w-[54%] lg:ml-auto pl-0 lg:pl-6 justify-between relative group flex-row-reverse">
                      
                      {/* Pure Crisp White Capsule Pill Card Plate matching Screenshot 1 */}
                      <div className="relative flex-1 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 sm:p-7 flex items-center gap-5 z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                        
                        {/* Overlapping Double-Ring 3D Step Circle on Left matching Image 2 */}
                        <div className="relative shrink-0 flex items-center -ml-6 sm:-ml-8 z-20">
                          
                          {/* Circular 3D Step Ring Badge overlapping left end of pill card */}
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 border-[6px] ${step.ringBorder} shadow-xl flex flex-col items-center justify-center text-white z-20`}>
                            <div className={`w-full h-full rounded-full ${step.ringBg} flex flex-col items-center justify-center text-white font-mono font-black shadow-inner`}>
                              <span className="text-[7px] uppercase tracking-tighter opacity-90">STEP</span>
                              <span className="text-xs sm:text-sm font-extrabold leading-none">{step.step}</span>
                            </div>
                          </div>

                        </div>

                        {/* Middle Text Content */}
                        <div className="flex-1 text-left min-w-0 pl-8 sm:pl-10">
                          <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight font-display uppercase">
                            {step.title}
                          </h3>
                          <div className="w-full h-px bg-slate-200 my-1.5" />
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Far Right Icon inside crisp white circle */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                          <IconComp className="w-6 h-6 text-slate-700" />
                        </div>

                      </div>

                      {/* Line Segment & Connected Node Dot on Spine Line */}
                      <div className="hidden lg:flex items-center shrink-0 pr-16 z-20 flex-row-reverse">
                        <div className="w-6 h-0.5 bg-slate-400" />
                        <div className={`w-6 h-6 rounded-full bg-white border-4 ${step.ringBorder} shadow-md flex items-center justify-center`}>
                          <div className={`w-2.5 h-2.5 rounded-full ${step.ringBg}`} />
                        </div>
                      </div>

                    </div>
                  )}
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
