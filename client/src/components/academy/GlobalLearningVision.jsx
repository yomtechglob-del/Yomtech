import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users2, BookOpen, Cpu, TrendingUp, Sparkles, Activity } from 'lucide-react';

const CONNECTIONS = [
  { 
    id: '01',
    title: 'PEOPLE', 
    subtitle: 'Global Community',
    desc: 'Connecting ambitious learners across global technology communities and developer networks.', 
    icon: Users2,
    theme: {
      accent: 'text-indigo-600',
      border: 'border-indigo-300',
      bgGradient: 'from-indigo-50/80 via-purple-50/30 to-white',
      gradient: 'from-indigo-500 via-purple-500 to-fuchsia-500',
      glow: 'rgba(99, 102, 241, 0.25)',
      particle: 'bg-indigo-300'
    }
  },
  { 
    id: '02',
    title: 'KNOWLEDGE', 
    subtitle: 'Democratized Excellence',
    desc: 'Democratizing production software engineering education, system design & elite architecture practices.', 
    icon: BookOpen,
    theme: {
      accent: 'text-cyan-600',
      border: 'border-cyan-300',
      bgGradient: 'from-cyan-50/80 via-sky-50/30 to-white',
      gradient: 'from-cyan-400 via-blue-500 to-sky-500',
      glow: 'rgba(6, 182, 212, 0.25)',
      particle: 'bg-cyan-300'
    }
  },
  { 
    id: '03',
    title: 'TECHNOLOGY', 
    subtitle: 'Modern Architecture',
    desc: 'Mastering cutting-edge fullstack web, cloud microservices, LLM artificial intelligence & data architecture.', 
    icon: Cpu,
    theme: {
      accent: 'text-violet-600',
      border: 'border-violet-300',
      bgGradient: 'from-violet-50/80 via-fuchsia-50/30 to-white',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
      glow: 'rgba(139, 92, 246, 0.25)',
      particle: 'bg-violet-300'
    }
  },
  { 
    id: '04',
    title: 'OPPORTUNITY', 
    subtitle: 'Career Autonomy',
    desc: 'Empowering software craftsmanship, high-impact career progression & remote engineering autonomy without limits.', 
    icon: TrendingUp,
    theme: {
      accent: 'text-emerald-600',
      border: 'border-emerald-300',
      bgGradient: 'from-emerald-50/80 via-teal-50/30 to-white',
      gradient: 'from-emerald-400 via-teal-500 to-green-400',
      glow: 'rgba(16, 185, 129, 0.25)',
      particle: 'bg-teal-300'
    }
  }
];

const VisionCard = ({ connection, hoveredCard, setHoveredCard, idx }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isHovered = hoveredCard === connection.id;
  const isDimmed = hoveredCard !== null && hoveredCard !== connection.id;
  const Icon = connection.icon;

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
      onMouseEnter={() => setHoveredCard(connection.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`relative group flex flex-col h-full min-h-[360px] rounded-[2.6rem] bg-gradient-to-b ${connection.theme.bgGradient} backdrop-blur-xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer
        ${isHovered ? `border-transparent z-20` : `${connection.theme.border} shadow-[0_10px_35px_rgba(0,0,0,0.04)] z-10`}
        ${isDimmed ? 'opacity-40 scale-[0.97] blur-[1px]' : 'opacity-100 blur-0'}
      `}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePos.y - 180) / -30}deg) rotateY(${(mousePos.x - 180) / 30}deg) scale3d(1.03, 1.03, 1.03)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isHovered 
          ? `0 30px 60px -12px ${connection.theme.glow}, 0 0 0 2px rgba(255,255,255,1) inset` 
          : '0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.6) inset',
        animation: `fade-in-up 0.8s ease-out ${idx * 0.1}s both`
      }}
    >
      {/* Dynamic Cursor Spotlight Refraction */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2.6rem] overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[60px] transition-transform duration-75 ease-out mix-blend-multiply"
          style={{
            background: connection.theme.glow,
            transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          }}
        />
      </div>

      {/* Animated Gradient Border Reveal */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.6rem] bg-gradient-to-br ${connection.theme.gradient} p-[2px]`}
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
      >
        <div className="w-full h-full bg-transparent rounded-[calc(2.6rem-2px)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-8">
          <span className={`px-4 py-1.5 rounded-full bg-white border shadow-sm text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500
            ${isHovered ? `border-transparent ${connection.theme.accent}` : 'border-slate-100 text-slate-500'}`}
          >
            NODE 0{idx + 1}
          </span>
          
          <div className={`w-12 h-12 rounded-2xl bg-white border shadow-sm flex items-center justify-center transition-all duration-500 relative overflow-hidden group-hover:rotate-12 group-hover:scale-110
            ${isHovered ? `border-transparent` : 'border-slate-100'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${connection.theme.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
            <Icon className={`w-5 h-5 transition-colors duration-500 ${isHovered ? connection.theme.accent : 'text-slate-400'}`} strokeWidth={isHovered ? 2.5 : 1.5} />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center flex-1 flex flex-col justify-center mb-6">
          <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 transition-colors duration-500 ${isHovered ? 'text-slate-900' : 'text-slate-800'}`}>
            {connection.title}
          </h3>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 transition-colors duration-500 ${isHovered ? connection.theme.accent : 'text-slate-500'}`}>
            {connection.subtitle}
          </h4>
          <p className={`text-[13px] md:text-sm leading-relaxed font-medium transition-colors duration-500 ${isHovered ? 'text-slate-700' : 'text-slate-600'}`}>
            {connection.desc}
          </p>
        </div>

        {/* Laser-Sweep Bottom Energy Track */}
        <div className="mt-auto w-full h-2 bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
           <div className={`absolute inset-0 bg-gradient-to-r ${connection.theme.gradient} transition-transform duration-700 ease-out origin-left ${isHovered ? 'scale-x-100' : 'scale-x-100 opacity-60'}`} />
           <div 
              className={`absolute top-0 bottom-0 w-1/3 bg-white/80 blur-[2px] transition-all duration-1000 ease-in-out z-10 ${connection.theme.particle}`}
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

export const GlobalLearningVision = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative min-h-screen py-24 md:py-36 bg-white overflow-hidden font-sans selection:bg-indigo-500/20 selection:text-indigo-900 border-b border-slate-200/80">
      
      {/* Ambient Atmospheric Orbs & Blueprint Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/70 via-slate-50/50 to-white" />
        
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)', 
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 20%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 20%, black 20%, transparent 80%)'
          }}
        />
        
        <div className="absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-300/15 blur-[140px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-300/15 blur-[140px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="max-w-[108rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Kinetic Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.2)] mb-8 hover:bg-white hover:scale-105 transition-all duration-300 cursor-default group">
            <Globe className="w-4 h-4 text-indigo-600 animate-[spin_12s_linear_infinite]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-300">
              Global Vision
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-sky-500">Without Borders</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Connecting technical passion with global software engineering standards, remote autonomy, and continuous craftsmanship.
          </p>
        </div>

        {/* 4 Connected Global Milestone Nodes Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 w-full"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {CONNECTIONS.map((c, idx) => (
            <VisionCard 
              key={c.id} 
              connection={c} 
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              idx={idx}
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
      `}} />
    </section>
  );
};

export default GlobalLearningVision;
