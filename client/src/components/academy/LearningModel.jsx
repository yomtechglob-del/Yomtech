import React, { useState, useRef } from 'react';
import { BookOpen, Terminal, Layers, Users, Zap, Atom, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const PILLARS = [
  {
    id: '01',
    label: 'LEARN',
    title: 'Understand Concepts',
    description: 'Grasp fundamental architecture, modern patterns, and production engineering principles with crystal clarity.',
    icon: BookOpen,
    colors: {
      light: 'bg-violet-50',
      border: 'border-violet-100',
      text: 'text-violet-600',
      gradient: 'from-violet-500 to-purple-600',
      shadow: 'rgba(139, 92, 246, 0.25)',
      glow: 'rgba(139, 92, 246, 0.15)'
    },
    delay: '0s'
  },
  {
    id: '02',
    label: 'PRACTICE',
    title: 'Apply Knowledge',
    description: 'Cement understanding through hands-on exercises, interactive sandbox labs, and elite coding challenges.',
    icon: Terminal,
    colors: {
      light: 'bg-cyan-50',
      border: 'border-cyan-100',
      text: 'text-cyan-600',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'rgba(6, 182, 212, 0.25)',
      glow: 'rgba(6, 182, 212, 0.15)'
    },
    delay: '0.1s'
  },
  {
    id: '03',
    label: 'BUILD',
    title: 'Real-World Projects',
    description: 'Architect production-ready web applications, scalable microservices, and enterprise-grade interfaces.',
    icon: Layers,
    colors: {
      light: 'bg-pink-50',
      border: 'border-pink-100',
      text: 'text-pink-600',
      gradient: 'from-pink-500 to-rose-500',
      shadow: 'rgba(236, 72, 153, 0.25)',
      glow: 'rgba(236, 72, 153, 0.15)'
    },
    delay: '0.2s'
  },
  {
    id: '04',
    label: 'MENTOR',
    title: 'Guidance & Feedback',
    description: 'Accelerate growth with senior technical review, direct code coaching, and 1-on-1 career trajectory mapping.',
    icon: Users,
    colors: {
      light: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-600',
      gradient: 'from-emerald-400 to-teal-500',
      shadow: 'rgba(16, 185, 129, 0.25)',
      glow: 'rgba(16, 185, 129, 0.15)'
    },
    delay: '0.3s'
  }
];

const GlassCard = ({ pillar }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Advanced 3D Magnetic hover physics
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const Icon = pillar.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full flex flex-col rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 transition-all duration-700 ease-out cursor-pointer z-10"
      style={{
        transform: isHovered 
          ? `perspective(1200px) rotateX(${(mousePos.y - 150) / -25}deg) rotateY(${(mousePos.x - 150) / 25}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isHovered 
          ? `0 30px 60px -12px ${pillar.colors.shadow}, 0 0 0 1px rgba(255,255,255,0.9) inset` 
          : '0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.5) inset',
        animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${pillar.delay} both`
      }}
    >
      {/* Dynamic Cursor Spotlight (Follows mouse on hover) */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] transition-opacity duration-300 pointer-events-none overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[60px] transition-transform duration-75 ease-out"
          style={{
            background: pillar.colors.glow,
            transform: `translate(${mousePos.x - 150}px, ${mousePos.y - 150}px)`,
          }}
        />
      </div>

      {/* Internal Content Container */}
      <div className="relative z-10 p-8 flex flex-col h-full bg-gradient-to-b from-white/40 to-transparent rounded-[2.5rem]">
        
        {/* Header Row: Badge & Floating Icon */}
        <div className="flex justify-between items-start mb-10">
          <span className={`px-4 py-1.5 rounded-full bg-white/80 ${pillar.colors.text} text-[10px] font-black uppercase tracking-[0.25em] border border-white shadow-sm transition-colors duration-300 group-hover:bg-white`}>
            Pillar {pillar.id}
          </span>
          
          <div className={`w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center ${pillar.colors.text} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative`}>
            <div className="absolute inset-0 bg-current opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity" />
            <Icon className="w-5 h-5 relative z-10 animate-float" strokeWidth={2} />
          </div>
        </div>

        <div className="mt-auto">
          <h4 className={`text-[10px] font-extrabold ${pillar.colors.text} uppercase tracking-widest mb-3 opacity-80 group-hover:opacity-100 transition-opacity`}>
            {pillar.label}
          </h4>
          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
            {pillar.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 group-hover:text-slate-700 transition-colors duration-300">
            {pillar.description}
          </p>
        </div>

        {/* Animated Sweep Line at bottom */}
        <div className="mt-auto w-full h-1 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full w-full bg-gradient-to-r ${pillar.colors.gradient} origin-left transition-transform duration-700 ease-out`}
            style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
          />
        </div>
      </div>

      {/* Giant Parallax Watermark Number */}
      <div 
        className="absolute -bottom-4 -right-2 text-[140px] font-black text-slate-900/[0.03] pointer-events-none select-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: isHovered ? 'translate(-10px, -10px) scale(1.05)' : 'translate(0px, 0px) scale(1)'
        }}
      >
        {pillar.id}
      </div>
    </div>
  );
};

export const LearningModel = () => {
  return (
    <section className="relative min-h-screen py-24 bg-[#FAFCFF] overflow-hidden font-sans selection:bg-violet-500/20 selection:text-violet-900 border-b border-purple-200/80">
      
      {/* Ambient Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)'
          }}
        />
        
        {/* Moving Aurora Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-300/30 blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-300/30 blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-200/30 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center animate-fade-in-up">
          
          {/* Animated Top Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-8 hover:bg-white hover:scale-105 transition-all duration-300 cursor-default group">
            <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 transition-all duration-300">
              Four-Pillar Ecosystem
            </span>
          </div>
          
          {/* Advanced Main Typography */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            How We <br className="md:hidden"/>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#8b5cf6,45%,#06b6d4,55%,#8b5cf6)] bg-[length:200%_auto] animate-shimmer">
                Help You Learn
              </span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Four connected pillars radiating around our central WabiSkills educational hub, engineered to transform ambition into mastery.
          </p>
        </div>

        {/* Central WabiSkills Button Link */}
        <a 
          href="https://wabiskills.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex justify-center mb-20 group cursor-pointer z-20"
        >
          {/* Background connecting lines */}
          <div className="hidden lg:block absolute top-1/2 left-[-20vw] right-[-20vw] h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent -z-10" />
          
          {/* Continuous Pulse Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-violet-400/30 animate-ping-slow scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-ping-slower scale-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main Button Surface */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-white px-8 py-4 rounded-full flex items-center gap-4 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-50 to-cyan-50 border border-slate-100 flex items-center justify-center relative overflow-hidden">
              <img src={logoImg} alt="WabiSkills" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900 group-hover:from-violet-600 group-hover:to-cyan-600 transition-all duration-300">
              WabiSkills Central Nucleus
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full z-10">
          {PILLARS.map((pillar) => (
            <GlassCard key={pillar.id} pillar={pillar} />
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default LearningModel;
