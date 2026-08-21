import React, { useState, useRef } from 'react';
import { 
  BookOpen, Code2, RefreshCw, Sparkles, 
  Quote 
} from 'lucide-react';

const PRINCIPLES = [
  {
    id: '01',
    label: 'UNDERSTAND',
    subtitle: 'Build Strong Foundations',
    description: 'Master software engineering concepts, system design principles, and clean code practices from the ground up.',
    icon: BookOpen,
    theme: {
      accent: 'text-blue-500',
      bgLight: 'bg-blue-50/50',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-400',
      glow: 'rgba(59, 130, 246, 0.15)',
      particle: 'bg-cyan-300'
    },
    delay: 0.1
  },
  {
    id: '02',
    label: 'APPLY',
    subtitle: 'Turn Concepts Into Working Solutions',
    description: 'Architect production web, mobile, and AI software applications with hands-on coding and real repositories.',
    icon: Code2,
    theme: {
      accent: 'text-amber-500',
      bgLight: 'bg-amber-50/50',
      border: 'border-amber-200',
      gradient: 'from-amber-400 to-orange-500',
      glow: 'rgba(245, 158, 11, 0.15)',
      particle: 'bg-orange-300'
    },
    delay: 0.2
  },
  {
    id: '03',
    label: 'IMPROVE',
    subtitle: 'Learn From Feedback & Iteration',
    description: 'Refine software quality continuously through senior mentor code reviews, pull requests, and performance tuning.',
    icon: RefreshCw,
    theme: {
      accent: 'text-emerald-500',
      bgLight: 'bg-emerald-50/50',
      border: 'border-emerald-200',
      gradient: 'from-emerald-400 to-teal-500',
      glow: 'rgba(16, 185, 129, 0.15)',
      particle: 'bg-teal-300'
    },
    delay: 0.3
  }
];

const PrincipleCard = ({ principle, hoveredCard, setHoveredCard }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isHovered = hoveredCard === principle.id;
  const isDimmed = hoveredCard !== null && hoveredCard !== principle.id;
  const Icon = principle.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredCard(principle.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`relative group flex flex-col h-full min-h-[340px] rounded-[2.5rem] bg-white/70 backdrop-blur-xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer
        ${isHovered ? `border-transparent z-20` : 'border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] z-10'}
        ${isDimmed ? 'opacity-50 scale-[0.97] blur-[2px]' : 'opacity-100 blur-0'}
      `}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePos.y - 170) / -30}deg) rotateY(${(mousePos.x - 170) / 30}deg) scale3d(1.03, 1.03, 1.03)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isHovered 
          ? `0 30px 60px -12px ${principle.theme.glow}, 0 0 0 2px rgba(255,255,255,1) inset` 
          : '0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.6) inset',
        animation: `fade-in-up 0.8s ease-out ${principle.delay}s both`
      }}
    >
      {/* Dynamic Inner Cursor Spotlight */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2.5rem] overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[60px] transition-transform duration-75 ease-out mix-blend-multiply"
          style={{
            background: principle.theme.glow,
            transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          }}
        />
      </div>

      {/* Animated Gradient Border Reveal */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] bg-gradient-to-br ${principle.theme.gradient} p-[2px]`}
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
      >
        <div className="w-full h-full bg-transparent rounded-[calc(2.5rem-2px)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-10">
          <span className={`px-4 py-1.5 rounded-full bg-white border shadow-sm text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500
            ${isHovered ? `border-transparent ${principle.theme.accent}` : 'border-slate-100 text-slate-500'}`}
          >
            Principle {principle.id}
          </span>
          
          <div className={`w-12 h-12 rounded-2xl bg-white border shadow-sm flex items-center justify-center transition-all duration-500 relative overflow-hidden group-hover:rotate-12 group-hover:scale-110
            ${isHovered ? `border-transparent` : 'border-slate-100'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${principle.theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <Icon className={`w-5 h-5 transition-colors duration-500 ${isHovered ? principle.theme.accent : 'text-slate-400'}`} strokeWidth={isHovered ? 2.5 : 1.5} />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center flex-1 flex flex-col justify-center mb-8">
          <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 transition-colors duration-500 ${isHovered ? 'text-slate-900' : 'text-slate-800'}`}>
            {principle.label}
          </h3>
          <h4 className={`text-sm font-bold mb-5 transition-colors duration-500 ${isHovered ? principle.theme.accent : 'text-cyan-500'}`}>
            {principle.subtitle}
          </h4>
          <p className={`text-[13px] md:text-sm leading-relaxed font-medium transition-colors duration-500 ${isHovered ? 'text-slate-700' : 'text-slate-500'}`}>
            {principle.description}
          </p>
        </div>

        {/* Laser-Sweep Bottom Energy Track */}
        <div className="mt-auto w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
           <div className={`absolute inset-0 bg-gradient-to-r ${principle.theme.gradient} transition-transform duration-700 ease-out origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
           <div 
              className={`absolute top-0 bottom-0 w-1/3 bg-white/70 blur-[2px] transition-all duration-1000 ease-in-out z-10 ${principle.theme.particle}`}
              style={{
                transform: isHovered ? 'translateX(300%)' : 'translateX(-100%)',
                opacity: isHovered ? 1 : 0,
                transitionDelay: isHovered ? '0.2s' : '0s'
              }} 
           />
        </div>

      </div>
    </div>
  );
};

export const PracticalLearning = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-white overflow-hidden font-sans selection:bg-amber-500/20 selection:text-amber-900 border-b border-slate-200/80">
      
      {/* Idle Ethereal Background (Champagne & Sky) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF5] via-[#FFFDF9] to-[#F5F8FA]" />
        
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)', 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 10%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 10%, black 20%, transparent 80%)'
          }}
        />
        
        <div className="absolute top-[-15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-amber-200/20 blur-[130px] mix-blend-multiply animate-float-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/20 blur-[140px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-3s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-orange-100/30 blur-[120px] mix-blend-multiply animate-pulse-slow" />

        <Quote className="absolute top-[15%] left-[5%] w-[30vw] h-[30vw] text-slate-900/[0.015] -rotate-12 pointer-events-none" />
        <Quote className="absolute bottom-[10%] right-[5%] w-[25vw] h-[25vw] text-slate-900/[0.015] rotate-12 pointer-events-none" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Kinetic Typography Header */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-28 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-amber-100 shadow-[0_4px_20px_-4px_rgba(245,158,11,0.1)] mb-8 hover:bg-white hover:scale-105 transition-all duration-300 cursor-default group relative">
            <div className="absolute inset-0 bg-amber-400 opacity-0 blur-md rounded-full group-hover:opacity-20 transition-opacity duration-500" />
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse relative z-10" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-amber-700 relative z-10 font-sans">
              WABISKILLS PRACTICAL PHILOSOPHY
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight font-display">
            Why WabiSkills <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Practical Learning Matters</span>
          </h2>
          
          {/* Hero Quote */}
          <div className="relative">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto italic relative z-10 font-display">
                "At WabiSkills, knowledge becomes valuable when you can <br className="hidden md:block"/>
                <span className="relative inline-block mt-2 md:mt-0">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0ea5e9,45%,#f59e0b,55%,#0ea5e9)] bg-[length:200%_auto] animate-shimmer pr-2">
                    apply it in real projects.
                  </span>
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-200/50" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none">
                    <path d="M2 7.00002C45 -1.99998 120 -1.99998 198 7.00002" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-slate-900">"</span>
             </h1>
          </div>
        </div>

        {/* Focus-Defocus Refraction Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 w-full"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {PRINCIPLES.map((principle) => (
            <PrincipleCard 
              key={principle.id} 
              principle={principle} 
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
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
          50% { transform: translate(-30px, 40px) scale(0.95); }
        }
        .animate-float-slower {
          animation: float-slower 24s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default PracticalLearning;
