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
      liquidGradient: 'from-blue-500/30 via-cyan-400/25 to-sky-500/40',
      liquidFullGradient: 'from-blue-500/55 via-cyan-400/45 to-sky-500/75',
      iconBg: 'bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white shadow-[0_12px_35px_rgba(37,99,235,0.4)]',
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
      liquidGradient: 'from-violet-500/30 via-purple-400/25 to-fuchsia-500/40',
      liquidFullGradient: 'from-violet-500/55 via-purple-400/45 to-fuchsia-500/75',
      iconBg: 'bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white shadow-[0_12px_35px_rgba(124,58,237,0.4)]',
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
      liquidGradient: 'from-emerald-500/30 via-teal-400/25 to-green-500/40',
      liquidFullGradient: 'from-emerald-500/55 via-teal-400/45 to-green-500/75',
      iconBg: 'bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_12px_35px_rgba(16,185,129,0.4)]',
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
      liquidGradient: 'from-cyan-500/30 via-sky-400/25 to-blue-500/40',
      liquidFullGradient: 'from-cyan-500/55 via-sky-400/45 to-blue-500/75',
      iconBg: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-[0_12px_35px_rgba(6,182,212,0.4)]',
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
      liquidGradient: 'from-amber-500/30 via-orange-400/25 to-yellow-500/40',
      liquidFullGradient: 'from-amber-500/55 via-orange-400/45 to-yellow-500/75',
      iconBg: 'bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-400 text-white shadow-[0_12px_35px_rgba(245,158,11,0.4)]',
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
      className={`relative group flex flex-col h-full min-h-[380px] sm:min-h-[410px] rounded-[2.2rem] bg-white/85 backdrop-blur-2xl border-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible cursor-pointer p-5 sm:p-6 pt-9 opacity-100
        ${isHovered ? `scale-[1.04] -translate-y-3 z-30 ${node.theme.glow} border-white bg-white/95` : `${node.theme.border} shadow-[0_15px_45px_rgba(0,0,0,0.06)] scale-100 translate-y-0 z-10`}
      `}
    >
      {/* Top Bottle Inlet Collar (Clean Integration with SVG Fiber Pipe & WabiSkills Logo) */}
      <div className={`absolute -top-5 left-1/2 -translate-x-1/2 z-40 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border-2 ${node.theme.border} shadow-md flex items-center gap-2 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl whitespace-nowrap`}>
        <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full border border-cyan-200 overflow-hidden shrink-0 bg-white p-0.5 shadow-xs flex items-center justify-center">
          <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain rounded-full" />
        </div>
        <span className={`text-[9px] sm:text-[10px] font-black tracking-[0.18em] uppercase ${node.theme.accent}`}>
          {node.title} CORE INLET
        </span>
        <div className={`w-2 h-2 rounded-full ${node.theme.dotBg} animate-ping ml-0.5`} />
      </div>

      {/* Modern High-Tech Glass Volume Scale Gauge (100%, 75%, 50%, 25%) */}
      <div className="absolute top-9 right-2.5 bottom-8 flex flex-col justify-between items-end pointer-events-none z-20">
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
              isHovered ? `bg-gradient-to-r ${node.theme.gradient} w-4` : 'bg-slate-400'
            }`} />
          </div>
        ))}
      </div>

      {/* Water / Liquid Reservoir Filling Up Inside Bottle Container */}
      <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden pointer-events-none z-0">
        
        {/* Waterfall Stream Cascading Down Into Bottle From Top Inlet Collar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-full pointer-events-none z-0 overflow-hidden flex flex-col items-center">
          {/* Ambient Waterfall Shadow & Glow Effect Form */}
          <div className={`absolute top-0 bottom-0 w-full bg-gradient-to-b ${isHovered ? node.theme.liquidFullGradient : node.theme.liquidGradient} blur-xl transition-all duration-700 ${isHovered ? 'opacity-85 scale-x-125' : 'opacity-35'}`} />
          
          {/* Core Liquid Waterfall Stream Column */}
          <div className={`w-3 sm:w-4 h-full bg-gradient-to-b from-white/90 via-sky-300/40 to-transparent blur-[0.5px] transition-all duration-700 ${isHovered ? 'w-5.5 opacity-95' : 'opacity-40'}`} />

          {/* Vertical Falling Waterfall Stream Lines */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 40 400">
              <line x1="20" y1="0" x2="20" y2="400" stroke="#ffffff" strokeWidth={isHovered ? "3.2" : "2"} strokeDasharray="14 26" strokeLinecap="round" opacity="0.9" className="animate-root-dash" style={{ animationDuration: isHovered ? "0.7s" : "1.6s" }} />
              <line x1="12" y1="0" x2="12" y2="400" stroke={node.theme.hex} strokeWidth="1.8" strokeDasharray="8 20" strokeLinecap="round" opacity="0.8" className="animate-root-dash" style={{ animationDuration: isHovered ? "0.5s" : "1.2s", animationDirection: "reverse" }} />
              <line x1="28" y1="0" x2="28" y2="400" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="10 24" strokeLinecap="round" opacity="0.85" className="animate-root-dash" style={{ animationDuration: isHovered ? "0.6s" : "1.4s" }} />
            </svg>
          </div>
        </div>

        {/* Dynamic Water Liquid Body */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${isHovered ? node.theme.liquidFullGradient : node.theme.liquidGradient} transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{ height: isHovered ? '100%' : '35%' }}
        >
          {/* Dual Opposite-Moving Water Surface Liquid Waves */}
          <div className="absolute -top-6 left-0 right-0 w-full h-10 overflow-hidden">
            <svg className="w-[200%] h-full animate-liquid-wave-1 opacity-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M 0,0 C 150,90 350,-40 500,50 C 650,130 900,10 1200,40 L 1200,120 L 0,120 Z" 
                fill={node.theme.waveColor} 
              />
            </svg>
            <svg className="w-[200%] h-full animate-liquid-wave-2 opacity-35 absolute top-1 left-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M 0,40 C 200,10 450,110 650,30 C 850,-30 1050,70 1200,10 L 1200,120 L 0,120 Z" 
                fill={node.theme.waveColor} 
              />
            </svg>
          </div>

          {/* Floating Liquid Bubbles Rising Up Inside Bottle */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute bottom-2 left-[15%] w-2.5 h-2.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)] ${isHovered ? 'animate-bubble-rise-1' : 'opacity-30'}`} />
            <div className={`absolute bottom-6 left-[40%] w-3.5 h-3.5 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.8)] ${isHovered ? 'animate-bubble-rise-2' : 'opacity-30'}`} />
            <div className={`absolute bottom-1 left-[70%] w-2 h-2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)] ${isHovered ? 'animate-bubble-rise-3' : 'opacity-30'}`} />
            <div className={`absolute bottom-8 left-[85%] w-3 h-3 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.8)] ${isHovered ? 'animate-bubble-rise-4' : 'opacity-20'}`} />
          </div>
        </div>

        {/* Bottle Glass Specular Reflection Highlight */}
        <div className="absolute top-0 left-4 w-3 h-3/4 bg-gradient-to-b from-white/80 via-white/20 to-transparent rounded-full opacity-70 pointer-events-none" />
      </div>

      {/* Animated Glowing Border Overlay */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.2rem] bg-gradient-to-br ${node.theme.gradient} p-[2px]`}
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
      >
        <div className="w-full h-full bg-transparent rounded-[calc(2.2rem-2px)]" />
      </div>

      {/* Bottle Content (Icons, Text, Badges) */}
      <div className="relative z-10 flex flex-col h-full pt-2">
        
        {/* Top Icon & Tagline */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative mb-3">
            <div className={`absolute inset-0 bg-gradient-to-br ${node.theme.gradient} blur-xl opacity-30 group-hover:opacity-90 transition-opacity duration-700 rounded-full scale-125`} />
            
            <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${node.theme.iconBg} flex items-center justify-center transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-3`}>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl" />
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 text-white" strokeWidth={2} />
            </div>
          </div>

          <span className={`text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border ${node.theme.badgeBg} mb-2 shadow-xs bg-white/95 backdrop-blur-md`}>
            {node.tagline}
          </span>

          <h3 className={`text-xl font-black font-display tracking-tight text-slate-900 group-hover:${node.theme.accent} transition-colors duration-300`}>
            {node.title}
          </h3>
        </div>

        {/* Description Text */}
        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold text-center flex-1 flex items-center justify-center px-1">
          {node.description}
        </p>

        {/* Dynamic Water Level Indicator Gauge Bar at Bottom of Bottle */}
        <div className="mt-4 w-full h-2.5 bg-slate-200/90 backdrop-blur-sm rounded-full overflow-hidden relative shadow-inner border border-white/80">
          <div className={`absolute inset-y-0 left-0 w-full bg-gradient-to-r ${node.theme.gradient} transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-85'}`} />
          <div className={`absolute inset-y-0 left-0 w-1/3 bg-white/90 blur-[2px] transition-all duration-1000 ease-in-out ${isHovered ? 'translate-x-[300%]' : 'translate-x-[-100%]'}`} />
        </div>

      </div>
    </div>
  );
};

export const AcademyEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // 5 Precision Fiber-Optic Pipes departing cleanly from 5 distinct ports at the bottom of the Central Core button:
  // Port 1 (Learn): (42, 0) -> (10, 100)
  // Port 2 (Build): (46, 0) -> (30, 100)
  // Port 3 (Mentor): (50, 0) -> (50, 100)
  // Port 4 (Connect): (54, 0) -> (70, 100)
  // Port 5 (Grow): (58, 0) -> (90, 100)
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
          
          {/* Fiber-Optic SVG Connection Network Pouring Liquid Energy into Bottle Caps */}
          <div className="hidden lg:block absolute top-full left-0 right-0 h-[135px] pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                {/* High-Intensity Bioluminescent Glow Filter */}
                <filter id="ecosystemGlowIntense" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" result="blur1" />
                  <feGaussianBlur stdDeviation="1.5" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Laser Energy Pulse Glow Filter */}
                <filter id="laserPulseGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feColorMatrix type="matrix" values="
                    1 0 0 0 1
                    0 1 0 0 1
                    0 0 1 0 1
                    0 0 0 1 0" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Glass Conduit Track Gradient */}
                <linearGradient id="conduitTrackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
                </linearGradient>

                {/* Per-Node Smooth Liquid Core Gradients */}
                <linearGradient id="gradLearn" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                <linearGradient id="gradBuild" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>

                <linearGradient id="gradMentor" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <linearGradient id="gradConnect" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>

                <linearGradient id="gradGrow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>

              {/* Layer 1: Outer Bioluminescent Energy Aura Tracks (Ultra-Thin Glow) */}
              {paths.map((p) => (
                <path
                  key={`glow-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke={p.color}
                  strokeWidth={hoveredNode === p.id ? "3.8" : "2.0"}
                  opacity={hoveredNode === p.id ? "0.9" : "0.3"}
                  filter="url(#ecosystemGlowIntense)"
                  className="transition-all duration-500"
                />
              ))}

              {/* Layer 2: Outer Glass Fiber Casing Track (Sleek Micro Conduit) */}
              {paths.map((p) => (
                <path
                  key={`casing-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke="url(#conduitTrackGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              ))}

              {/* Layer 3: Main Liquid Fiber Stream Lines (Ultra-Thin Laser Thread) */}
              {paths.map((p) => (
                <path
                  key={`main-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke={`url(#${p.grad})`}
                  strokeWidth={hoveredNode === p.id ? "1.8" : "1.2"}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              ))}

              {/* Layer 4: Primary Expert High-Tech Energy Dash Streams (Thin Laser Dashes) */}
              {paths.map((p) => (
                <path
                  key={`stream-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={hoveredNode === p.id ? "1.3" : "0.85"}
                  strokeDasharray="6 14"
                  strokeLinecap="round"
                  opacity="0.95"
                  filter="url(#laserPulseGlow)"
                  className="animate-root-dash"
                  style={{
                    animationDuration: hoveredNode === p.id ? "0.8s" : p.dur
                  }}
                />
              ))}

              {/* Layer 5: High-Speed Secondary Micro-Photon Energy Sparks (Micro Spark Threads) */}
              {paths.map((p) => (
                <path
                  key={`sparks-${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  strokeDasharray="2 20"
                  strokeLinecap="round"
                  opacity="0.9"
                  className="animate-root-dash"
                  style={{
                    animationDuration: hoveredNode === p.id ? "0.5s" : "1.2s",
                    animationDirection: "reverse"
                  }}
                />
              ))}

              {/* Layer 6: Destination Inlet Energy Ports at Bottle Caps (Bottom Destinations) */}
              {paths.map((p, idx) => {
                const targetX = [10, 30, 50, 70, 90][idx];
                return (
                  <g key={`port-${p.id}`}>
                    <ellipse
                      cx={targetX}
                      cy="99"
                      rx="1.8"
                      ry="1.0"
                      fill={p.color}
                      opacity={hoveredNode === p.id ? "1" : "0.7"}
                      filter="url(#ecosystemGlowIntense)"
                    />
                    <circle
                      cx={targetX}
                      cy="99"
                      r="0.6"
                      fill="#ffffff"
                      opacity="0.9"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Central Nucleus Interactive Button — Advanced Animated Border */}
          <a
            href="https://wabiskills.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer flex flex-col items-center"
          >
            {/* Deep Layered Glow Auras */}
            <div className="absolute -inset-10 bg-gradient-to-br from-sky-300/35 via-cyan-200/25 to-blue-300/35 rounded-[3.5rem] blur-3xl opacity-80 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            <div className="absolute -inset-5 bg-gradient-to-r from-cyan-400/25 via-sky-300/15 to-blue-400/25 rounded-[2.8rem] blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 pointer-events-none" />

            {/* ── ADVANCED SPINNING CONIC BORDER (rotate-transform technique) ── */}
            {/* Outer clip wrapper */}
            <div className="relative rounded-[2.2rem] p-[5px] overflow-hidden" style={{ minWidth: '510px' }}>

              {/* The conic-gradient disc that spins — it's clipped by overflow-hidden */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, #06b6d4 0%, #3b82f6 25%, #8b5cf6 45%, #ec4899 55%, #f59e0b 70%, #06b6d4 100%)',
                  animation: 'wabi-border-spin 2.5s linear infinite',
                  borderRadius: 'inherit',
                }}
              />

              {/* Inner white card mask — sits on top of the spinning background */}
              <div
                className="relative bg-gradient-to-br from-white via-sky-50/98 to-cyan-50/90 backdrop-blur-2xl rounded-[1.75rem] px-10 py-6 sm:px-16 sm:py-8 flex items-center gap-6 sm:gap-8 overflow-hidden"
              >

                {/* SVG layer: full-perimeter animated border stroke + 3 laser orbs */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    {/* Bold glowing border stroke gradient */}
                    <linearGradient id="border-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.9" />
                      <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                    </linearGradient>
                    {/* Glowing orb filter */}
                    <filter id="orb-glow" x="-200%" y="-200%" width="500%" height="500%">
                      <feGaussianBlur stdDeviation="5" result="blur1" />
                      <feGaussianBlur stdDeviation="2" result="blur2" />
                      <feMerge><feMergeNode in="blur1" /><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="orb-glow-2" x="-200%" y="-200%" width="500%" height="500%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>

                    {/* The rounded-rect perimeter path — must match inner card radius (~28px) */}
                    <rect id="border-path-shape" x="3" y="3" width="calc(100% - 6px)" height="calc(100% - 6px)" rx="28" ry="28" fill="none" />
                  </defs>

                  {/* Persistent bold glowing border stroke */}
                  <rect x="3" y="3" width="calc(100% - 6px)" height="calc(100% - 6px)" rx="28" ry="28"
                    fill="none"
                    stroke="url(#border-stroke-grad)"
                    strokeWidth="2.5"
                    strokeOpacity="0.55"
                  />

                  {/* Laser Orb 1 — Cyan, fast (2s) */}
                  <circle r="7" fill="#06b6d4" filter="url(#orb-glow)">
                    <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>
                  {/* Orb 1 bright core */}
                  <circle r="3.5" fill="white">
                    <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>

                  {/* Laser Orb 2 — Violet, medium (3.5s), offset by 33% */}
                  <circle r="7" fill="#8b5cf6" filter="url(#orb-glow)">
                    <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto" begin="-1.17s">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="white">
                    <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto" begin="-1.17s">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>

                  {/* Laser Orb 3 — Pink/Amber, slow (4.5s), offset by 66% */}
                  <circle r="6" fill="#f59e0b" filter="url(#orb-glow-2)">
                    <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="-2.7s">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>
                  <circle r="2.5" fill="white">
                    <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="-2.7s">
                      <mpath href="#border-path-shape" />
                    </animateMotion>
                  </circle>

                </svg>

                {/* Logo Avatar */}
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white overflow-hidden bg-white group-hover:scale-105 transition-transform duration-300">
                    <img src={logoImg} alt="WabiSkills" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full px-2 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[9px] font-black text-white tracking-widest">LIVE</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left gap-1.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.28em] text-cyan-500 uppercase font-mono">
                      Central Core Nucleus
                    </span>
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent leading-tight">
                    WabiSkills
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-500 tracking-wide -mt-1">
                    Skills Development Platform
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wide group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                      <Sparkles className="w-3 h-3" />
                      Visit Platform
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">wabiskills.com</span>
                  </div>
                </div>

                {/* Right Decorative Accent */}
                <div className="shrink-0 hidden sm:flex flex-col items-center gap-3 ml-2 relative z-10">
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-cyan-300 to-transparent" />
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse" />
                    <div className="absolute inset-0 w-5 h-5 rounded-full border border-cyan-400/50 animate-ping" />
                  </div>
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                </div>

              </div>
            </div>

            {/* Inject keyframe for conic border spin */}
            <style>{`
              @keyframes wabi-border-spin {
                0%   { transform: rotate(0deg) scale(3); }
                100% { transform: rotate(360deg) scale(3); }
              }
            `}</style>

          </a>

        </div>

        {/* 5-Column Fluid Water Bottle Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 relative z-10 w-full"
          onMouseLeave={() => setHoveredNode(null)}
        >
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

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -30px) scale(1.04); }
        }
        .animate-float-slow {
          animation: float-slow 16s ease-in-out infinite;
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 25px) scale(0.96); }
        }
        .animate-float-slower {
          animation: float-slower 22s ease-in-out infinite;
        }

        @keyframes sonar-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-sonar-ping {
          animation: sonar-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes root-dash {
          0% { stroke-dashoffset: 48; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-root-dash { 
          animation: root-dash 1.5s linear infinite; 
        }

        @keyframes liquid-wave-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-liquid-wave-1 {
          animation: liquid-wave-1 3.5s linear infinite;
        }

        @keyframes liquid-wave-2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-liquid-wave-2 {
          animation: liquid-wave-2 5s linear infinite;
        }

        @keyframes bubble-rise {
          0% { transform: translateY(0px) scale(0.7); opacity: 0.8; }
          100% { transform: translateY(-400px) scale(1.5); opacity: 0; }
        }
        .animate-bubble-rise-1 { animation: bubble-rise 2.8s ease-in-out infinite; }
        .animate-bubble-rise-2 { animation: bubble-rise 4.0s ease-in-out infinite 0.6s; }
        .animate-bubble-rise-3 { animation: bubble-rise 3.2s ease-in-out infinite 1.2s; }
        .animate-bubble-rise-4 { animation: bubble-rise 4.5s ease-in-out infinite 1.8s; }
      `}} />
    </section>
  );
};

export default AcademyEcosystem;
