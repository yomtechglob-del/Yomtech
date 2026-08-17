import React, { useState, useRef } from 'react';
import { 
  User, Users, Code2, MessageSquare, GitPullRequest, 
  Sparkles, Crown, Activity
} from 'lucide-react';

const MAIN_NODES = [
  {
    id: '01',
    type: 'LEARNER',
    title: 'Ambitious Developer',
    description: 'Acquiring modern software skills, architectural patterns, and engineering concepts.',
    icon: User,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-400',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-100',
    textLight: 'text-blue-600'
  },
  {
    id: '02',
    type: 'CENTRAL CONNECTOR',
    title: 'Senior Mentor',
    description: 'Providing code reviews, architectural feedback, and real-world production perspective.',
    icon: Crown,
    color: 'amber',
    gradient: 'from-amber-400 to-orange-500',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-100',
    textLight: 'text-amber-600',
    isCenter: true
  },
  {
    id: '03',
    type: 'PROJECT',
    title: 'Production Application',
    description: 'A fully-fledged application built to demonstrate elite software craftsmanship.',
    icon: Code2,
    color: 'emerald',
    gradient: 'from-emerald-400 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-100',
    textLight: 'text-emerald-600'
  }
];

const FEATURES = [
  {
    title: 'Knowledge Sharing',
    description: 'Direct technical insights from senior engineers working in production.',
    icon: MessageSquare,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Code Reviews',
    description: 'Detailed line-by-line PR feedback on architecture, cleanliness, and security.',
    icon: GitPullRequest,
    color: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  {
    title: 'Problem Solving',
    description: '1-on-1 guidance when overcoming difficult technical roadblocks and bugs.',
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  }
];

const MagneticNodeCard = ({ node, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const Icon = node.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full group z-10"
      style={{
        perspective: '1000px',
        animation: `fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s both`
      }}
    >
      <div 
        className={`w-full h-full rounded-3xl bg-white/70 backdrop-blur-xl border flex flex-col items-center text-center p-8 transition-all duration-500 ease-out relative overflow-hidden
          ${node.isCenter ? 'border-amber-200 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)]' : 'border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]'}
        `}
        style={{
          transform: isHovered 
            ? `rotateX(${(mousePos.y - 150) / -20}deg) rotateY(${(mousePos.x - 150) / 20}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${node.isCenter ? 'rgba(252,211,77,0.15)' : 'rgba(14,165,233,0.08)'}, transparent 40%)`
          }}
        />

      
        <div className="relative z-10 flex flex-col items-center h-full">
          {/* Animated Icon Container */}
          <div className="relative mb-6 group-hover:-translate-y-2 transition-transform duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${node.gradient} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${node.gradient} shadow-lg text-white relative z-10 overflow-hidden`}>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <Icon className={`w-7 h-7 relative z-10 ${node.isCenter ? 'animate-pulse' : ''}`} />
            </div>
          </div>

          
          <div className={`px-4 py-1.5 rounded-full ${node.bgLight} border ${node.borderLight} ${node.textLight} text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm group-hover:bg-white transition-colors duration-300`}>
            {node.isCenter ? (
              <span className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 animate-pulse" /> {node.type}
              </span>
            ) : (
              `NODE ${node.id}`
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
            {node.title}
          </h3>
          
          <p className="text-sm text-slate-500 leading-relaxed font-medium mt-auto group-hover:text-slate-700 transition-colors duration-300">
            {node.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturePill = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <div 
      className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.12)] transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden flex items-start gap-4"
      style={{ animation: `fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + (index * 0.1)}s both` }}
    >
      {/* Animated Sweep Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-0" />
      
      <div className={`relative z-10 w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${feature.bg} ${feature.color} transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white`}>
        <Icon className="w-5 h-5" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center pt-1">
        <h4 className="text-sm font-extrabold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h4>
        <p className="text-xs text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export const MentorshipExperience = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-[#FDFCF9] overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-b border-amber-200/80">
      
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        <div 
          className="absolute inset-0 opacity-[0.3]" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(148,163,184,0.2) 1px, transparent 1px)', 
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)'
          }}
        />
        
        
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-amber-200/20 blur-[120px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[10%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/20 blur-[140px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          
          {/* Animated Premium Pill Badge */}
          <div className="inline-flex items-center justify-center mb-8 cursor-default group relative">
             <div className="absolute inset-0 bg-amber-400 blur-md opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500" />
             <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 border border-amber-200 shadow-sm transition-transform group-hover:scale-105 duration-300">
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-amber-700">
                1-On-1 Guidance
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Learn With <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 relative inline-block">
              Guidance
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-200/50" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none"><path d="M2 7.00002C45 -1.99998 120 -1.99998 198 7.00002" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            Practical technical mentorship bridging ambition with elite production software craftsmanship.
          </p>
        </div>

        {/* The Trinity Nodes */}
        <div className="relative mb-8 md:mb-16">
          
          {/* Animated Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 z-0">
             <div className="absolute inset-0 border-t-2 border-solid border-slate-200/80" />
             
             <div className="absolute top-[-1px] left-0 w-[50%] h-[2px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-amber-400 animate-data-stream-right opacity-70" />
             </div>
             
             <div className="absolute top-[-1px] right-0 w-[50%] h-[2px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-transparent animate-data-stream-right opacity-70" style={{ animationDelay: '1s' }} />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {MAIN_NODES.map((node, index) => (
              <MagneticNodeCard key={node.id} node={node} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-10">
           {FEATURES.map((feature, index) => (
             <FeaturePill key={index} feature={feature} index={index} />
           ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
        }
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }

        @keyframes data-stream-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-data-stream-right {
          animation: data-stream-right 2.5s linear infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default MentorshipExperience;
