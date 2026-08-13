import React, { useState, useRef } from 'react';
import { Target, Eye, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

const FOUNDATION_TABS = [
  {
    id: 'mission',
    kicker: 'ENGINEERING PURPOSE',
    title: 'Our Mission',
    description: 'We aim to empower companies and ambitious learners with cutting-edge software, resilient cloud architectures, and AI-driven insights—engineering technology that solves complex real-world challenges and accelerates digital growth.',
    icon: Target,
    watermark: 'MISSION',
    theme: {
      accent: 'text-cyan-400',
      glow: 'shadow-[0_0_60px_rgba(34,211,238,0.6)]',
      border: 'border-cyan-400/50',
      bgGlow: 'bg-cyan-500/20',
      gradient: 'from-cyan-400 to-blue-600',
      textGradient: 'from-cyan-300 to-blue-400'
    },
    pillars: [
      'Build enterprise-grade ERP, CRM, and cloud systems',
      'Bridge the gap between theoretical knowledge & industry tech careers',
      'Deliver scalable, high-performance software with zero compromise on quality'
    ]
  },
  {
    id: 'vision',
    kicker: 'FUTURE TRAJECTORY',
    title: 'Our Vision',
    description: 'To become the definitive global nexus where elite software engineering meets transformative technical education, establishing a new standard for how technology is built and how future technologists are forged.',
    icon: Eye,
    watermark: 'VISION',
    theme: {
      accent: 'text-fuchsia-400',
      glow: 'shadow-[0_0_60px_rgba(232,121,249,0.6)]',
      border: 'border-fuchsia-400/50',
      bgGlow: 'bg-fuchsia-500/20',
      gradient: 'from-fuchsia-400 to-purple-600',
      textGradient: 'from-fuchsia-300 to-purple-400'
    },
    pillars: [
      'Establish a globally recognized standard for technical excellence',
      'Pioneer AI-integrated learning and development platforms',
      'Cultivate a self-sustaining ecosystem of innovation and mentorship'
    ]
  },
  {
    id: 'values',
    kicker: 'GUIDING PRINCIPLES',
    title: 'Our Values',
    description: 'Our culture is rooted in uncompromising craftsmanship, radical transparency, and a relentless drive to push boundaries. We believe that exceptional technology is built by people who care deeply about the details.',
    icon: Heart,
    watermark: 'VALUES',
    theme: {
      accent: 'text-amber-400',
      glow: 'shadow-[0_0_60px_rgba(251,191,36,0.6)]',
      border: 'border-amber-400/50',
      bgGlow: 'bg-amber-500/20',
      gradient: 'from-amber-400 to-orange-600',
      textGradient: 'from-amber-300 to-orange-400'
    },
    pillars: [
      'Craftsmanship: Obsess over code quality and architectural elegance',
      'Integrity: Operate with radical transparency and accountability',
      'Evolution: Continuously adapt, learn, and implement cutting-edge paradigms'
    ]
  }
];

const FluidBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a192f]">
    {/* Deep Ocean Base Gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#112240] via-[#0a192f] to-[#020c1b]" />
    
    {/* Animated Fluid Waves (Caustics effect) */}
    <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ filter: 'url(#fluid-filter)' }}>
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-r from-cyan-900/40 to-blue-900/40 animate-fluid-wave-1 rounded-full blur-[80px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-gradient-to-l from-indigo-900/40 to-cyan-900/40 animate-fluid-wave-2 rounded-full blur-[100px]" style={{ animationDelay: '-5s' }} />
    </div>

    {/* SVG Filter for Fluid Effect */}
    <svg className="hidden">
      <defs>
        <filter id="fluid-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>

    {/* Subtle Dot Grid for depth */}
    <div 
      className="absolute inset-0 opacity-[0.15]" 
      style={{ 
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', 
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)'
      }}
    />
  </div>
);

const MagneticGlassCard = ({ activeTab }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = activeTab.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-[2.5rem] perspective-1000 z-10 transition-transform duration-700 ease-out h-full min-h-[500px]"
      style={{
        transform: isHovered 
          ? `rotateX(${(mousePos.y - 300) / -60}deg) rotateY(${(mousePos.x - 300) / 60}deg) scale3d(1.02, 1.02, 1.02)`
          : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
    >
      {/* Animated Glow Border underneath */}
      <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${activeTab.theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10`} />
      
      {/* Main Glass Panel */}
      <div className="relative w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-colors duration-500 hover:bg-white/10">
        
        {/* Dynamic Internal Spotlight */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          style={{
            opacity: isHovered ? 0.8 : 0,
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2), transparent 40%)`
          }}
        />

        {/* Content Container */}
        <div key={activeTab.id} className="relative z-10 flex flex-col h-full animate-fade-in-slide">
          
          {/* Header Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden group/icon`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.theme.gradient} opacity-20 group-hover/icon:opacity-40 transition-opacity duration-500`} />
                <Icon className={`w-7 h-7 ${activeTab.theme.accent} relative z-10`} strokeWidth={1.5} />
              </div>
              <div>
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r ${activeTab.theme.textGradient} block mb-1`}>
                  {activeTab.kicker}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {activeTab.title}
                </h3>
              </div>
            </div>
            
            <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] ${activeTab.theme.accent}`}>
               <Sparkles className="w-4 h-4 animate-pulse-slow" />
            </div>
          </div>

          {/* Description Block */}
          <div className="bg-[#0a192f]/40 border border-white/5 rounded-2xl p-6 mb-8 backdrop-blur-md shadow-inner relative overflow-hidden">
             <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${activeTab.theme.gradient}`} />
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              {activeTab.description}
            </p>
          </div>

          {/* Pillars List */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-5 h-5 rounded-full bg-[#0a192f]/50 border border-white/10 flex items-center justify-center`}>
                 <div className={`w-1.5 h-1.5 rounded-full bg-current ${activeTab.theme.accent} animate-pulse`} />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400`}>
                Key Pillars & Objectives
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-4" />
            </div>

            <ul className="space-y-4">
              {activeTab.pillars.map((pillar, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-4 group/item p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                  style={{ animation: `fade-in-up 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${activeTab.theme.accent} transition-transform duration-300 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_8px_currentColor]`} />
                  <span className="text-sm md:text-base text-slate-400 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Giant Animated Watermark */}
        <div 
          key={`wm-${activeTab.id}`}
          className="absolute -bottom-6 right-0 text-[100px] md:text-[140px] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter animate-fade-in-scale"
          style={{ transform: 'translateY(20px)' }}
        >
          {activeTab.watermark}
        </div>

      </div>
    </div>
  );
};

export const CoreFoundations = () => {
  const [activeTabId, setActiveTabId] = useState('mission');
  const activeTab = FOUNDATION_TABS.find(t => t.id === activeTabId);

  return (
    <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-50 flex items-center bg-[#0a192f]">
      
      <FluidBackground />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-8 cursor-default group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-300 group-hover:text-white transition-colors">
              Core Foundations — Interactive Matrix
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Our Mission, Vision &{' '}
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                Values
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl leading-relaxed">
            Explore the deep structural pillars governing YomTech Global's software engineering and immersive educational ecosystem.
          </p>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: 3D Fluid Venn Diagram Selector */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[450px]">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              
              {FOUNDATION_TABS.map((tab, idx) => {
                const isActive = activeTabId === tab.id;
                
                let positionClasses = '';
                if (tab.id === 'mission') positionClasses = 'top-0 left-0 md:left-4';
                if (tab.id === 'vision') positionClasses = 'top-0 right-0 md:right-4';
                if (tab.id === 'values') positionClasses = 'bottom-0 left-1/2 -translate-x-1/2';

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`absolute w-44 h-44 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group cursor-pointer
                      ${positionClasses}
                      ${isActive ? `scale-110 z-30 ${tab.theme.glow} bg-[#112240]/80 border-2 ${tab.theme.border} backdrop-blur-xl shadow-2xl` : 'scale-100 z-10 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:scale-105 shadow-lg'}
                    `}
                    style={{ animation: `float-fluid 6s ease-in-out infinite alternate ${idx * 2}s` }}
                  >
                    {/* Active Internal Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tab.theme.gradient} opacity-0 transition-opacity duration-700 mix-blend-screen ${isActive ? 'opacity-20' : 'group-hover:opacity-10'}`} />
                    
                    {/* Subtle concentric rings */}
                    <div className={`absolute inset-0 rounded-full border border-white/5 scale-[0.8] transition-transform duration-700 ${isActive ? 'scale-[0.9]' : ''}`} />
                    <div className={`absolute inset-0 rounded-full border border-white/5 scale-[0.6] transition-transform duration-700 ${isActive ? 'scale-[0.7]' : ''}`} />

                    <div className="relative z-10 flex flex-col items-center">
                      <tab.icon className={`w-8 h-8 md:w-10 md:h-10 mb-3 transition-all duration-500 ${isActive ? `${tab.theme.accent} drop-shadow-[0_0_10px_currentColor]` : 'text-slate-400 group-hover:text-white'}`} strokeWidth={isActive ? 2 : 1.5} />
                      <span className={`text-sm md:text-base font-black uppercase tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {tab.id}
                      </span>
                      
                      {/* Status Indicator Pill */}
                      <div className={`mt-3 flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-500 ${isActive ? `bg-white/10 ${tab.theme.accent} ${tab.theme.border} backdrop-blur-md` : 'bg-black/20 text-white/40 border-white/5 opacity-0 group-hover:opacity-100'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-current animate-pulse' : 'bg-white/40'}`} />
                        <span className="text-[8px] font-bold uppercase tracking-widest">
                          {isActive ? 'Active' : 'Select'}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Horizontal Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mt-16 z-20">
              {FOUNDATION_TABS.map((tab) => (
                <button
                  key={`nav-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 border cursor-pointer
                    ${activeTabId === tab.id ? `bg-white/10 ${tab.theme.accent} ${tab.theme.border} shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md` : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'}
                  `}
                >
                  <div className={`w-2 h-2 rounded-full ${activeTabId === tab.id ? 'bg-current shadow-[0_0_8px_currentColor]' : 'bg-slate-600'}`} />
                  {tab.id}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Magnetic Glassmorphism Content Panel */}
          <div className="lg:col-span-7 relative z-20">
            <MagneticGlassCard activeTab={activeTab} />
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fluid-wave-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(2%, 2%) scale(1.05) rotate(2deg); }
          66% { transform: translate(-2%, 1%) scale(0.95) rotate(-1deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .animate-fluid-wave-1 {
          animation: fluid-wave-1 20s ease-in-out infinite;
        }

        @keyframes fluid-wave-2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-2%, -2%) scale(0.95) rotate(-2deg); }
          66% { transform: translate(2%, -1%) scale(1.05) rotate(1deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .animate-fluid-wave-2 {
          animation: fluid-wave-2 25s ease-in-out infinite;
        }

        @keyframes float-fluid {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(5px) rotate(2deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes fade-in-slide {
          0% { opacity: 0; transform: translateX(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-fade-in-slide {
          animation: fade-in-slide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(20px); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default CoreFoundations;
