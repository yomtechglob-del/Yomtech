import React, { useState } from 'react';
import { 
  BookOpen, Code2, Users, Network, TrendingUp, 
  Atom, Globe, Sparkles, Activity
} from 'lucide-react';
import logoImg from '../../assets/logo.png';

const ECOSYSTEM_NODES = [
  {
    id: 'learn',
    title: 'LEARN',
    description: 'Acquire production-grade software engineering principles and deep architectural patterns.',
    icon: BookOpen,
    theme: {
      accent: 'text-blue-600',
      dotBg: 'bg-blue-500',
      border: 'border-blue-300',
      bgGradient: 'from-blue-50/80 via-cyan-50/30 to-white',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_8px_25px_rgba(59,130,246,0.35)]',
      glow: 'shadow-[0_25px_60px_-10px_rgba(59,130,246,0.4)]',
      gradient: 'from-blue-500 via-cyan-400 to-sky-400'
    },
    delay: 0.1
  },
  {
    id: 'build',
    title: 'BUILD',
    description: 'Engineer scalable fullstack applications, resilient microservices & intelligent AI models.',
    icon: Code2,
    theme: {
      accent: 'text-violet-600',
      dotBg: 'bg-violet-500',
      border: 'border-violet-300',
      bgGradient: 'from-violet-50/80 via-purple-50/30 to-white',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-[0_8px_25px_rgba(139,92,246,0.35)]',
      glow: 'shadow-[0_25px_60px_-10px_rgba(139,92,246,0.4)]',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-400'
    },
    delay: 0.2
  },
  {
    id: 'mentor',
    title: 'MENTOR',
    description: 'Receive direct 1-on-1 code reviews, PR feedback, and expert architecture guidance.',
    icon: Users,
    theme: {
      accent: 'text-emerald-600',
      dotBg: 'bg-emerald-500',
      border: 'border-emerald-300',
      bgGradient: 'from-emerald-50/80 via-teal-50/30 to-white',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-[0_8px_25px_rgba(16,185,129,0.35)]',
      glow: 'shadow-[0_25px_60px_-10px_rgba(16,185,129,0.4)]',
      gradient: 'from-emerald-400 via-teal-500 to-green-400'
    },
    delay: 0.3
  },
  {
    id: 'connect',
    title: 'CONNECT',
    description: 'Network directly with global technology teams, recruiters, and elite tech partners.',
    icon: Network,
    theme: {
      accent: 'text-cyan-600',
      dotBg: 'bg-cyan-500',
      border: 'border-cyan-300',
      bgGradient: 'from-cyan-50/80 via-sky-50/30 to-white',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-[0_8px_25px_rgba(6,182,212,0.35)]',
      glow: 'shadow-[0_25px_60px_-10px_rgba(6,182,212,0.45)]',
      gradient: 'from-cyan-400 via-blue-500 to-sky-400'
    },
    delay: 0.4
  },
  {
    id: 'grow',
    title: 'GROW',
    description: 'Accelerate career trajectory with practical code craftsmanship and verified portfolios.',
    icon: TrendingUp,
    theme: {
      accent: 'text-amber-600',
      dotBg: 'bg-amber-500',
      border: 'border-amber-300',
      bgGradient: 'from-amber-50/80 via-orange-50/30 to-white',
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_8px_25px_rgba(245,158,11,0.35)]',
      glow: 'shadow-[0_25px_60px_-10px_rgba(245,158,11,0.4)]',
      gradient: 'from-amber-400 via-orange-500 to-yellow-400'
    },
    delay: 0.5
  }
];

const NodeCard = ({ node, hoveredNode, setHoveredNode }) => {
  const isHovered = hoveredNode === node.id;
  const isDimmed = hoveredNode !== null && hoveredNode !== node.id;
  const Icon = node.icon;

  return (
    <div
      onMouseEnter={() => setHoveredNode(node.id)}
      onMouseLeave={() => setHoveredNode(null)}
      className={`relative group flex flex-col h-full min-h-[460px] sm:min-h-[500px] md:min-h-[520px] rounded-[2.8rem] bg-gradient-to-b ${node.theme.bgGradient} backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible cursor-pointer
        ${isHovered ? `scale-[1.05] z-30 ${node.theme.glow} border-transparent` : `${node.theme.border} shadow-[0_15px_45px_rgba(0,0,0,0.06)] scale-100 z-10`}
        ${isDimmed ? 'opacity-40 scale-[0.97] blur-[1px]' : 'opacity-100 blur-0'}
      `}
      style={{ animation: `fade-in-up 0.8s ease-out ${node.delay}s both` }}
    >
      {/* Top Energy Docking Port Badge */}
      <div className={`absolute -top-4.5 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-white border ${node.theme.border} shadow-lg flex items-center gap-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
        <div className={`w-2.5 h-2.5 rounded-full ${node.theme.dotBg} animate-ping`} />
        <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${node.theme.accent}`}>
          {node.title} NODE
        </span>
      </div>

      {/* Animated Glowing Border Reveal */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.8rem] bg-gradient-to-br ${node.theme.gradient} p-[3px]`}
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
      >
        <div className="w-full h-full bg-transparent rounded-[calc(2.8rem-3px)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full p-8 sm:p-12 md:p-14 pt-16">
        
        {/* Top Icon Container */}
        <div className="flex justify-center mb-12 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${node.theme.gradient} blur-3xl opacity-25 group-hover:opacity-60 transition-opacity duration-700 rounded-full scale-150`} />
          
          <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl ${node.theme.iconBg} flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 overflow-hidden`}>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <Icon className="w-9 h-9 sm:w-11 sm:h-11 relative z-10" strokeWidth={2} />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center flex-1 flex flex-col justify-center space-y-4">
          <h3 className={`text-xl md:text-2xl font-black tracking-[0.2em] uppercase transition-colors duration-500 ${isHovered ? 'text-slate-900' : 'text-slate-800'}`}>
            {node.title}
          </h3>
          <p className={`text-base md:text-lg leading-relaxed font-medium transition-colors duration-500 ${isHovered ? 'text-slate-700' : 'text-slate-600'}`}>
            {node.description}
          </p>
        </div>

        {/* Bioluminescent Bottom Track */}
        <div className="mt-12 w-full h-3 bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
           <div className={`absolute inset-y-0 left-0 w-full bg-gradient-to-r ${node.theme.gradient} transition-transform duration-700 ease-out origin-left ${isHovered ? 'scale-x-100' : 'scale-x-100 opacity-70'}`} />
           <div className={`absolute inset-y-0 left-0 w-1/3 bg-white/80 blur-[2px] transition-all duration-1000 ease-in-out ${isHovered ? 'translate-x-[300%] opacity-100' : 'translate-x-[-100%] opacity-0'}`} style={{ transitionDelay: isHovered ? '0.2s' : '0s' }} />
        </div>

      </div>
    </div>
  );
};

export const AcademyEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="relative min-h-screen py-28 lg:py-44 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 bg-white border-b border-slate-200/80">
      
      {/* Ambient Sky/Ethereal Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/90 via-blue-50/40 to-white" />
        
        <div className="absolute top-[-10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-400/15 blur-[120px] mix-blend-multiply animate-float-slow" />
        <div className="absolute top-[20%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-cyan-300/15 blur-[130px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[65vw] h-[65vw] rounded-full bg-sky-200/25 blur-[150px] mix-blend-multiply animate-pulse-slow" />
        
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)', 
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 80% at center top, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center top, black 20%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-[112rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header & Storytelling */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200 shadow-[0_4px_20px_-4px_rgba(6,182,212,0.2)] mb-8 hover:bg-white hover:scale-105 transition-all duration-300 cursor-default group">
            <Globe className="w-4 h-4 text-cyan-500 animate-[spin_10s_linear_infinite]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-cyan-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
              Global Integration
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">Ecosystem</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Connecting WabiSkills learners, mentors, projects, and the YomTech Global engineering core into a single, unified intelligence network.
          </p>
        </div>

        {/* The Living Central Nucleus */}
        <a 
          href="https://wabiskills.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex justify-center mb-40 z-20 group cursor-pointer"
        >
          {/* Advanced High-Visibility Multi-Layer Tree Root Network */}
          <div className="absolute top-[90%] left-0 right-0 h-[210px] pointer-events-none z-10 overflow-visible">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    {/* Intense Bioluminescent Glow Filter */}
                    <filter id="rootGlowIntense" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Gradient Definitions for Root Tendrils */}
                    <linearGradient id="rootTrunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.95" />
                    </linearGradient>

                    <linearGradient id="root1Grad" x1="50%" y1="0%" x2="10%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>

                    <linearGradient id="root2Grad" x1="50%" y1="0%" x2="30%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>

                    <linearGradient id="root3Grad" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>

                    <linearGradient id="root4Grad" x1="50%" y1="0%" x2="70%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>

                    <linearGradient id="root5Grad" x1="50%" y1="0%" x2="90%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>

                  {/* Outer Glowing Neon Aura Paths (Layer 1) */}
                  <path d="M 50 0 L 50 25 C 50 55, 10 45, 10 100" fill="none" stroke="#3b82f6" strokeWidth="8" opacity="0.35" filter="url(#rootGlowIntense)" />
                  <path d="M 50 0 L 50 25 C 50 55, 30 45, 30 100" fill="none" stroke="#8b5cf6" strokeWidth="8" opacity="0.35" filter="url(#rootGlowIntense)" />
                  <path d="M 50 0 L 50 25 C 50 55, 50 45, 50 100" fill="none" stroke="#10b981" strokeWidth="9" opacity="0.35" filter="url(#rootGlowIntense)" />
                  <path d="M 50 0 L 50 25 C 50 55, 70 45, 70 100" fill="none" stroke="#06b6d4" strokeWidth="8" opacity="0.35" filter="url(#rootGlowIntense)" />
                  <path d="M 50 0 L 50 25 C 50 55, 90 45, 90 100" fill="none" stroke="#f59e0b" strokeWidth="8" opacity="0.35" filter="url(#rootGlowIntense)" />

                  {/* Primary Central Root Trunk */}
                  <path 
                    d="M 50 0 L 50 25" 
                    fill="none" 
                    stroke="url(#rootTrunkGrad)" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                    filter="url(#rootGlowIntense)" 
                  />

                  {/* Main Branching Tree Roots */}
                  <path d="M 50 25 C 50 55, 10 45, 10 100" fill="none" stroke="url(#root1Grad)" strokeWidth="3.6" strokeLinecap="round" filter="url(#rootGlowIntense)" />
                  <path d="M 50 25 C 50 55, 30 45, 30 100" fill="none" stroke="url(#root2Grad)" strokeWidth="3.6" strokeLinecap="round" filter="url(#rootGlowIntense)" />
                  <path d="M 50 25 C 50 55, 50 45, 50 100" fill="none" stroke="url(#root3Grad)" strokeWidth="4.2" strokeLinecap="round" filter="url(#rootGlowIntense)" />
                  <path d="M 50 25 C 50 55, 70 45, 70 100" fill="none" stroke="url(#root4Grad)" strokeWidth="3.6" strokeLinecap="round" filter="url(#rootGlowIntense)" />
                  <path d="M 50 25 C 50 55, 90 45, 90 100" fill="none" stroke="url(#root5Grad)" strokeWidth="3.6" strokeLinecap="round" filter="url(#rootGlowIntense)" />

                  {/* Core White Light Beams */}
                  <path d="M 50 0 L 50 25 C 50 55, 10 45, 10 100" fill="none" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
                  <path d="M 50 0 L 50 25 C 50 55, 30 45, 30 100" fill="none" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
                  <path d="M 50 0 L 50 25 C 50 55, 50 45, 50 100" fill="none" stroke="#ffffff" strokeWidth="2.2" opacity="0.95" />
                  <path d="M 50 0 L 50 25 C 50 55, 70 45, 70 100" fill="none" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
                  <path d="M 50 0 L 50 25 C 50 55, 90 45, 90 100" fill="none" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />

                  {/* Secondary Feeder Root Threads */}
                  <path d="M 50 25 C 40 45, 20 45, 20 80" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />
                  <path d="M 50 25 C 42 50, 35 50, 35 85" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />
                  <path d="M 50 25 C 58 50, 65 50, 65 85" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />
                  <path d="M 50 25 C 60 45, 80 45, 80 80" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />

                  {/* Pulsing White Energy Stream Highlights */}
                  <path d="M 50 25 C 50 55, 10 45, 10 100" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeDasharray="10 26" className="animate-root-stream-1" opacity="0.95" />
                  <path d="M 50 25 C 50 55, 30 45, 30 100" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeDasharray="10 26" className="animate-root-stream-2" opacity="0.95" />
                  <path d="M 50 25 C 50 55, 50 45, 50 100" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeDasharray="10 26" className="animate-root-stream-3" opacity="0.95" />
                  <path d="M 50 25 C 50 55, 70 45, 70 100" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeDasharray="10 26" className="animate-root-stream-4" opacity="0.95" />
                  <path d="M 50 25 C 50 55, 90 45, 90 100" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeDasharray="10 26" className="animate-root-stream-5" opacity="0.95" />

                  {/* High-Brightness Travelling Energy Orbs */}
                  <circle r="5" fill="#3b82f6" filter="url(#rootGlowIntense)">
                    <animateMotion path="M 50 0 L 50 25 C 50 55, 10 45, 10 100" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="5" fill="#8b5cf6" filter="url(#rootGlowIntense)">
                    <animateMotion path="M 50 0 L 50 25 C 50 55, 30 45, 30 100" dur="2.6s" repeatCount="indefinite" begin="0.4s" />
                  </circle>
                  <circle r="5.5" fill="#10b981" filter="url(#rootGlowIntense)">
                    <animateMotion path="M 50 0 L 50 25 C 50 55, 50 45, 50 100" dur="1.9s" repeatCount="indefinite" begin="0.2s" />
                  </circle>
                  <circle r="5" fill="#06b6d4" filter="url(#rootGlowIntense)">
                    <animateMotion path="M 50 0 L 50 25 C 50 55, 70 45, 70 100" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <circle r="5" fill="#f59e0b" filter="url(#rootGlowIntense)">
                    <animateMotion path="M 50 0 L 50 25 C 50 55, 90 45, 90 100" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
                  </circle>
              </svg>
          </div>

          <div className="relative group cursor-pointer">
              {/* Sonar Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-sonar-ping scale-150" />
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-sonar-ping scale-[2]" style={{ animationDelay: '1s' }} />
              
              {/* Nucleus Button Surface */}
              <div className="relative z-10 bg-white/95 backdrop-blur-xl border border-cyan-200 px-10 py-5 rounded-full flex items-center gap-4.5 shadow-[0_12px_45px_-10px_rgba(6,182,212,0.45)] hover:shadow-[0_22px_55px_-10px_rgba(59,130,246,0.55)] transition-all duration-500 group-hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full border border-slate-100 overflow-hidden shrink-0 shadow-md">
                      <img src={logoImg} alt="WabiSkills" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-base font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    WabiSkills Central Nucleus
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,1)] animate-pulse" />
              </div>
          </div>
        </a>

        {/* Focus-Defocus Fluid Grid */}
        <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 relative z-10 w-full"
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
          50% { transform: translate(30px, -40px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 18s ease-in-out infinite;
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
        }
        .animate-float-slower {
          animation: float-slower 24s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes sonar-ping {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-sonar-ping {
          animation: sonar-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes root-dash {
          0% { stroke-dashoffset: 72; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-root-stream-1 { animation: root-dash 1.4s linear infinite; }
        .animate-root-stream-2 { animation: root-dash 1.8s linear infinite; }
        .animate-root-stream-3 { animation: root-dash 1.2s linear infinite; }
        .animate-root-stream-4 { animation: root-dash 2.0s linear infinite; }
        .animate-root-stream-5 { animation: root-dash 2.2s linear infinite; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default AcademyEcosystem;
