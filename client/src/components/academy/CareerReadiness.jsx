import React, { useState, useRef } from 'react';
import { 
  Award, Code2, ShieldCheck, Briefcase, TrendingUp, 
  Activity 
} from 'lucide-react';

const MILESTONES = [
  {
    id: '01',
    title: 'SKILLS',
    description: 'Master production languages, frameworks & software architecture patterns.',
    icon: Award,
    color: 'from-blue-400 to-cyan-400',
    shadow: 'rgba(6, 182, 212, 0.2)',
    accent: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100'
  },
  {
    id: '02',
    title: 'PROJECTS',
    description: 'Build scalable fullstack web apps, mobile solutions & AI models.',
    icon: Code2,
    color: 'from-violet-400 to-purple-500',
    shadow: 'rgba(139, 92, 246, 0.2)',
    accent: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100'
  },
  {
    id: '03',
    title: 'CONFIDENCE',
    description: 'Solve complex engineering challenges with independent autonomy.',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-teal-500',
    shadow: 'rgba(16, 185, 129, 0.2)',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  },
  {
    id: '04',
    title: 'PORTFOLIO',
    description: 'Showcase live production repositories & interactive web applications.',
    icon: Briefcase,
    color: 'from-pink-400 to-rose-500',
    shadow: 'rgba(244, 63, 94, 0.2)',
    accent: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100'
  },
  {
    id: '05',
    title: 'OPPORTUNITY',
    description: 'Unlock global technology paths with practical code craftsmanship.',
    icon: TrendingUp,
    color: 'from-amber-400 to-orange-500',
    shadow: 'rgba(245, 158, 11, 0.2)',
    accent: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  }
];

const MilestoneCard = ({ milestone, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isEven = index % 2 === 0;
  const staggerClass = isEven ? 'lg:-translate-y-6' : 'lg:translate-y-6';
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const Icon = milestone.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-full group z-10 transition-transform duration-700 ease-out ${staggerClass}`}
      style={{
        perspective: '1000px',
        animation: `fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s both`
      }}
    >
      <div 
        className={`w-full h-full bg-white/60 backdrop-blur-xl border flex flex-col p-6 lg:p-8 rounded-[2rem] transition-all duration-500 ease-out relative overflow-hidden
          ${isHovered ? 'border-transparent' : 'border-white'}
        `}
        style={{
          transform: isHovered 
            ? `rotateX(${(mousePos.y - 150) / -25}deg) rotateY(${(mousePos.x - 150) / 25}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          boxShadow: isHovered 
            ? `0 30px 60px -12px ${milestone.shadow}, 0 0 0 1.5px rgba(255,255,255,0.9) inset` 
            : '0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.5) inset',
        }}
      >
        {/* Dynamic Inner Cursor Spotlight */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2rem] overflow-hidden"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div 
            className="absolute w-[300px] h-[300px] rounded-full blur-[50px] transition-transform duration-75 ease-out"
            style={{
              background: milestone.shadow.replace('0.2', '0.15'),
              transform: `translate(${mousePos.x - 150}px, ${mousePos.y - 150}px)`,
            }}
          />
        </div>

        {/* Card Content Layer */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* Top Row: Pill & Icon */}
          <div className="flex justify-between items-start mb-10">
            <span className={`px-3.5 py-1.5 rounded-full ${milestone.bg} ${milestone.accent} border ${milestone.border} text-[9px] font-black uppercase tracking-[0.2em] shadow-sm group-hover:bg-white transition-colors duration-300`}>
              Milestone {milestone.id}
            </span>
            
            <div className={`w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center ${milestone.accent} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <Icon className="w-5 h-5 relative z-10" strokeWidth={2} />
            </div>
          </div>

          {/* Typography */}
          <div className="mt-auto mb-10">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
              {milestone.title}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300">
              {milestone.description}
            </p>
          </div>

          {/* Kinetic Progress Bar Track */}
          <div className="mt-auto w-full">
            <div className="h-1.5 w-full bg-slate-100/80 rounded-full overflow-hidden relative shadow-inner">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${milestone.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: isHovered ? '100%' : '15%',
                  boxShadow: isHovered ? `0 0 10px ${milestone.shadow}` : 'none'
                }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export const CareerReadiness = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-[#FCFDFF] overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-b border-slate-200/80">
      
      {/* High-End Ethereal Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Soft Technical Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)', 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)'
          }}
        />
        
        {/* Giant Slow-Moving Luminous Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-200/20 blur-[150px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-200/20 blur-[150px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-blue-200/10 blur-[100px] mix-blend-multiply animate-pulse-slow" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 flex flex-col items-center">
          
          {/* Animated Premium Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-8 hover:scale-105 transition-transform duration-300 cursor-default group">
            <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
              Technical Progression
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Build Skills That <br className="md:hidden"/>
            <span className="relative inline-block ml-2">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0ea5e9,45%,#6366f1,55%,#0ea5e9)] bg-[length:200%_auto] animate-shimmer">
                Move With You
              </span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-200/60" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none">
                <path d="M2 7.00002C45 -1.99998 120 -1.99998 198 7.00002" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            A structured, engineered path bridging the gap from core technology acquisition to complete practical technical autonomy.
          </p>
        </div>

        {/* The Wave Staggered Grid */}
        <div className="relative w-full">
          
          {/* Decorative Connecting Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-px -translate-y-1/2 z-0">
             <div className="absolute inset-0 border-t-2 border-solid border-slate-200/80" />
             <div className="absolute top-[-1px] left-0 w-full h-[2px] overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-stream opacity-70" />
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 relative z-10 w-full pb-12 lg:pb-0">
            {MILESTONES.map((milestone, index) => (
              <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.05); }
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
          animation: shimmer 5s linear infinite;
        }

        @keyframes data-stream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-data-stream {
          animation: data-stream 6s linear infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default CareerReadiness;
