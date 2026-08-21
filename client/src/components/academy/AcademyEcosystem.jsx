import React, { useState } from 'react';
import { 
  BookOpen, Code2, Users, Network, TrendingUp, 
  Globe, Sparkles, Cpu, ArrowUpRight, Droplet, Zap
} from 'lucide-react';
import logoImg from '../../assets/academy/wabiskills-logo.jpg';

const ECOSYSTEM_NODES = [
  {
    id: 'learn',
    title: 'LEARN',
    tagline: 'Core Knowledge',
    description: 'Acquire production-grade software engineering principles, system design, and deep architectural patterns.',
    icon: BookOpen,
    theme: {
      accent: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      dotBg: 'bg-blue-500',
      border: 'border-blue-300',
      liquidGradient: 'from-blue-500/20 via-cyan-400/20 to-sky-500/30',
      liquidFullGradient: 'from-blue-500/40 via-cyan-400/40 to-sky-500/60',
      iconBg: 'bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)]',
      glow: 'shadow-[0_25px_65px_-10px_rgba(59,130,246,0.45)]',
      gradient: 'from-blue-500 via-cyan-400 to-sky-400',
      waveColor: '#3b82f6',
      hex: '#3b82f6'
    },
    delay: 0.1
  },
  {
    id: 'build',
    title: 'BUILD',
    tagline: 'Practical Execution',
    description: 'Engineer scalable fullstack applications, resilient microservices, and intelligent AI model deployments.',
    icon: Code2,
    theme: {
      accent: 'text-violet-600',
      badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
      dotBg: 'bg-violet-500',
      border: 'border-violet-300',
      liquidGradient: 'from-violet-500/20 via-purple-400/20 to-fuchsia-500/30',
      liquidFullGradient: 'from-violet-500/40 via-purple-400/40 to-fuchsia-500/60',
      iconBg: 'bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white shadow-[0_10px_30px_rgba(124,58,237,0.4)]',
      glow: 'shadow-[0_25px_65px_-10px_rgba(139,92,246,0.45)]',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
      waveColor: '#8b5cf6',
      hex: '#8b5cf6'
    },
    delay: 0.2
  },
  {
    id: 'mentor',
    title: 'MENTOR',
    tagline: '1-on-1 Guidance',
    description: 'Receive direct 1-on-1 code reviews, pull request feedback, and expert architectural guidance.',
    icon: Users,
    theme: {
      accent: 'text-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dotBg: 'bg-emerald-500',
      border: 'border-emerald-300',
      liquidGradient: 'from-emerald-500/20 via-teal-400/20 to-green-500/30',
      liquidFullGradient: 'from-emerald-500/40 via-teal-400/40 to-green-500/60',
      iconBg: 'bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)]',
      glow: 'shadow-[0_25px_65px_-10px_rgba(16,185,129,0.45)]',
      gradient: 'from-emerald-400 via-teal-500 to-green-400',
      waveColor: '#10b981',
      hex: '#10b981'
    },
    delay: 0.3
  },
  {
    id: 'connect',
    title: 'CONNECT',
    tagline: 'Global Network',
    description: 'Network directly with global technology teams, enterprise recruiters, and elite industry partners.',
    icon: Network,
    theme: {
      accent: 'text-cyan-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      dotBg: 'bg-cyan-500',
      border: 'border-cyan-300',
      liquidGradient: 'from-cyan-500/20 via-sky-400/20 to-blue-500/30',
      liquidFullGradient: 'from-cyan-500/40 via-sky-400/40 to-blue-500/60',
      iconBg: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-[0_10px_30px_rgba(6,182,212,0.4)]',
      glow: 'shadow-[0_25px_65px_-10px_rgba(6,182,212,0.45)]',
      gradient: 'from-cyan-400 via-blue-500 to-sky-400',
      waveColor: '#06b6d4',
      hex: '#06b6d4'
    },
    delay: 0.4
  },
  {
    id: 'grow',
    title: 'GROW',
    tagline: 'Career Acceleration',
    description: 'Accelerate career trajectory with practical code craftsmanship, mentorship, and verified portfolios.',
    icon: TrendingUp,
    theme: {
      accent: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      dotBg: 'bg-amber-500',
      border: 'border-amber-300',
      liquidGradient: 'from-amber-500/20 via-orange-400/20 to-yellow-500/30',
      liquidFullGradient: 'from-amber-500/40 via-orange-400/40 to-yellow-500/60',
      iconBg: 'bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-400 text-white shadow-[0_10px_30px_rgba(245,158,11,0.4)]',
      glow: 'shadow-[0_25px_65px_-10px_rgba(245,158,11,0.45)]',
      gradient: 'from-amber-400 via-orange-500 to-yellow-400',
      waveColor: '#f59e0b',
      hex: '#f59e0b'
    },
    delay: 0.5
  }
];

const NodeCard = ({ node, hoveredNode, setHoveredNode }) => {
  const isHovered = hoveredNode === node.id;
  const Icon = node.icon;

  return (
    <div
      onMouseEnter={() => setHoveredNode(node.id)}
      onMouseLeave={() => setHoveredNode(null)}
      className={`relative group flex flex-col h-full min-h-[410px] sm:min-h-[440px] rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible cursor-pointer p-5 sm:p-6 pt-10
        ${isHovered ? `scale-[1.04] -translate-y-3 z-30 ${node.theme.glow} border-white bg-white` : `${node.theme.border} shadow-[0_15px_45px_rgba(0,0,0,0.06)] scale-100 translate-y-0 z-10`}
      `}
    >
      {/* Top Core Inlet Badge (Aligned cleanly without overlapping card elements) */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-full bg-white border-2 ${node.theme.border} shadow-md flex items-center gap-2 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl whitespace-nowrap`}>
        <div className="w-5 h-5 rounded-full border border-cyan-200 overflow-hidden shrink-0 bg-white p-0.5 shadow-xs flex items-center justify-center">
          <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain rounded-full" />
        </div>
        <span className={`text-[10px] font-black tracking-[0.18em] uppercase ${node.theme.accent}`}>
          {node.title} CORE INLET
        </span>
        <div className={`w-2 h-2 rounded-full ${node.theme.dotBg} animate-ping ml-0.5`} />
      </div>

      {/* Modern High-Tech Glass Volume Scale Gauge (100%, 75%, 50%, 25%) */}
      <div className="absolute top-10 right-3 bottom-10 flex flex-col justify-between items-end pointer-events-none z-30">
        {[
          { mark: '100%' },
          { mark: '75%' },
          { mark: '50%' },
          { mark: '25%' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <span className={`text-[10px] font-mono font-black tracking-tight px-1.5 py-0.5 rounded-md bg-white/95 backdrop-blur-md border transition-all duration-300 ${
              isHovered 
                ? `${node.theme.badgeBg} ${node.theme.accent} shadow-sm border-current scale-105` 
                : 'text-slate-800 border-slate-300/90 shadow-xs'
            }`}>
              {item.mark}
            </span>
            <div className={`w-3 h-[2px] rounded-full transition-all duration-300 ${
              isHovered ? `bg-gradient-to-r ${node.theme.gradient} w-4` : 'bg-slate-300'
            }`} />
          </div>
        ))}
      </div>

      {/* Dynamic Water Liquid Background Animation (Subtle Flow at Base) */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${isHovered ? node.theme.liquidFullGradient : node.theme.liquidGradient} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{ height: isHovered ? '45%' : '20%' }}
        >
          {/* Dual Waves */}
          <div className="absolute -top-6 left-0 right-0 w-full h-10 overflow-hidden">
            <svg className="w-[200%] h-full animate-liquid-wave-1 opacity-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M 0,0 C 150,90 350,-40 500,50 C 650,130 900,10 1200,40 L 1200,120 L 0,120 Z" 
                fill={node.theme.waveColor} 
              />
            </svg>
          </div>
        </div>

        {/* Glass Reflection Highlight */}
        <div className="absolute top-0 left-4 w-3 h-3/4 bg-gradient-to-b from-white/80 via-white/20 to-transparent rounded-full opacity-60 pointer-events-none" />
      </div>

      {/* Inner Card Content: Icon, Title, Tagline, & 100% Readable Glass White Text Card */}
      <div className="relative z-20 flex flex-col h-full space-y-4">
        
        {/* Top Icon & Tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${node.theme.gradient} blur-xl opacity-30 group-hover:opacity-90 transition-opacity duration-700 rounded-full scale-125`} />
            
            <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${node.theme.iconBg} flex items-center justify-center transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-3`}>
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 text-white" strokeWidth={2} />
            </div>
          </div>

          <span className={`text-[10px] font-mono font-black uppercase tracking-widest px-3 py-0.5 rounded-full border ${node.theme.badgeBg} mb-1.5 shadow-xs bg-white/95 backdrop-blur-md`}>
            {node.tagline}
          </span>

          <h3 className={`text-xl font-black font-display tracking-tight text-slate-900 group-hover:${node.theme.accent} transition-colors duration-300`}>
            {node.title}
          </h3>
        </div>

        {/* 100% Legible Glassmorphism Card Body for Description Text */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm relative z-20 flex-1 flex flex-col justify-center items-center text-center">
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
            {node.description}
          </p>
        </div>

        {/* Dynamic Water Level Indicator Gauge Bar */}
        <div className="w-full h-2.5 bg-slate-200/90 backdrop-blur-sm rounded-full overflow-hidden relative shadow-inner border border-white/80 shrink-0">
          <div className={`absolute inset-y-0 left-0 w-full bg-gradient-to-r ${node.theme.gradient} transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-85'}`} />
          <div className={`absolute inset-y-0 left-0 w-1/3 bg-white/90 blur-[2px] transition-all duration-1000 ease-in-out ${isHovered ? 'translate-x-[300%]' : 'translate-x-[-100%]'}`} />
        </div>

      </div>
    </div>
  );
};

export const AcademyEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const paths = [
    { id: 'learn', color: '#3b82f6', grad: 'gradLearn', d: 'M 42 0 C 42 35, 10 35, 10 100', dur: '2.2s', delay: '0s' },
    { id: 'build', color: '#8b5cf6', grad: 'gradBuild', d: 'M 46 0 C 46 40, 30 40, 30 100', dur: '2.5s', delay: '0.3s' },
    { id: 'mentor', color: '#10b981', grad: 'gradMentor', d: 'M 50 0 C 50 40, 50 40, 50 100', dur: '1.9s', delay: '0.15s' },
    { id: 'connect', color: '#06b6d4', grad: 'gradConnect', d: 'M 54 0 C 54 40, 70 40, 70 100', dur: '2.4s', delay: '0.45s' },
    { id: 'grow', color: '#f59e0b', grad: 'gradGrow', d: 'M 58 0 C 58 35, 90 35, 90 100', dur: '2.8s', delay: '0.6s' }
  ];

  return (
    <section className="relative min-h-screen py-28 lg:py-40 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 bg-white border-b border-slate-200/80">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/70 via-blue-50/30 to-white" />
        
        {/* Soft Animated Glow Orbs */}
        <div className="absolute top-[-5%] left-[15%] w-[42vw] h-[42vw] rounded-full bg-blue-400/10 blur-[130px] animate-float-slow" />
        <div className="absolute top-[15%] right-[-5%] w-[52vw] h-[52vw] rounded-full bg-cyan-300/10 blur-[140px] animate-float-slower" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-[-10%] left-[25%] w-[58vw] h-[58vw] rounded-full bg-sky-200/20 blur-[150px]" />
        
        {/* Precision Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.18]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)', 
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 80% at center top, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center top, black 20%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-[112rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 shadow-sm mb-6 hover:scale-105 transition-all duration-300 cursor-default">
            <Globe className="w-4 h-4 text-cyan-500 animate-[spin_12s_linear_infinite]" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-cyan-700">
              Global Integration
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 mb-5 tracking-tight leading-tight">
            Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">Ecosystem</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
            Connecting WabiSkills learners, mentors, projects, and the YomTech Global engineering core into a single, unified intelligence network.
          </p>
        </div>

        {/* Central Nucleus Node Container */}
        <div className="relative flex justify-center mb-32 z-20">
          
          {/* Fiber-Optic SVG Connection Network */}
          <div className="hidden lg:block absolute top-full left-0 right-0 h-[135px] pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <filter id="ecosystemGlowIntense" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" result="blur1" />
                  <feGaussianBlur stdDeviation="1.5" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {paths.map((path) => {
                const isHovered = hoveredNode === path.id;
                const isOtherHovered = hoveredNode && hoveredNode !== path.id;
                
                return (
                  <g key={path.id} className="transition-opacity duration-500" style={{ opacity: isOtherHovered ? 0.3 : 1 }}>
                    <path
                      d={path.d}
                      stroke={path.color}
                      strokeWidth={isHovered ? "5" : "3.5"}
                      strokeLinecap="round"
                      fill="none"
                      opacity={isHovered ? "0.9" : "0.5"}
                      filter="url(#ecosystemGlowIntense)"
                    />
                    <path
                      d={path.d}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="6 12"
                      fill="none"
                      className="animate-root-dash"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Central WabiSkills Core Node Card */}
          <div className="relative group cursor-pointer z-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-90 transition-opacity duration-700 scale-105" />
            
            <div className="relative bg-white rounded-[2.2rem] p-7 sm:p-9 border-2 border-cyan-300/80 shadow-[0_20px_50px_rgba(14,211,221,0.25)] flex flex-col sm:flex-row items-center gap-6 max-w-xl hover:scale-[1.02] transition-transform duration-500">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 border-2 border-slate-100 shadow-md shrink-0 flex items-center justify-center">
                <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain rounded-xl" />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-cyan-600">
                    CENTRAL CORE NUCLEUS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                    LIVE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight">
                  WabiSkills
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Skills Development Platform
                </p>

                <a
                  href="https://wabiskills.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0284C7] text-white text-xs font-black uppercase tracking-widest shadow-md hover:bg-sky-700 transition-all mt-1"
                >
                  <span>Visit Platform</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Bottom Inlet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pt-4">
          {ECOSYSTEM_NODES.map((node) => (
            <NodeCard
              key={node.id}
              node={node}
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademyEcosystem;
