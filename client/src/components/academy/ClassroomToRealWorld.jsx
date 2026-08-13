import React, { useState, useRef } from 'react';
import { 
  BookOpen, Code2, Cpu, Wrench, Layers, Network, ShieldCheck, 
  Terminal, GitPullRequest, Users, Lightbulb, Rocket, 
  ArrowRight, Zap, ChevronRight, Activity
} from 'lucide-react';

const PHASE_1_THEORY = [
  { 
    id: 't1', 
    icon: Cpu, 
    title: 'Fundamentals', 
    desc: 'Core computer science, deep data structures, and algorithmic efficiency.',
    accent: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  { 
    id: 't2', 
    icon: Wrench, 
    title: 'Modern Tools', 
    desc: 'Git version control, IDE mastery, Docker containers, and package managers.',
    accent: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100'
  },
  { 
    id: 't3', 
    icon: Layers, 
    title: 'Frameworks', 
    desc: 'React, Next.js, Node.js, Express, Python, and PyTorch integration.',
    accent: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100'
  },
  { 
    id: 't4', 
    icon: Network, 
    title: 'Architecture', 
    desc: 'Microservices, RESTful/GraphQL APIs, and scalable database schemas.',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  },
  { 
    id: 't5', 
    icon: ShieldCheck, 
    title: 'Best Practices', 
    desc: 'Clean code standards, CI/CD automated pipelines, and cloud security.',
    accent: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  }
];

const PHASE_2_APPLICATION = [
  { 
    id: 'a1', 
    icon: Terminal, 
    title: 'Production Projects', 
    desc: 'Architecting and building full-fledged, multi-tenant web and mobile applications.',
    accent: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  { 
    id: 'a2', 
    icon: GitPullRequest, 
    title: 'Live Repositories', 
    desc: 'Managing complex feature branches, pull requests, and rigorous code reviews.',
    accent: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100'
  },
  { 
    id: 'a3', 
    icon: Users, 
    title: 'Team Collaboration', 
    desc: 'Agile enterprise workflows, issue tracking, and synchronized pair programming.',
    accent: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100'
  },
  { 
    id: 'a4', 
    icon: Lightbulb, 
    title: 'Complex Problem Solving', 
    desc: 'Advanced debugging, resolving performance bottlenecks, and scaling systems.',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  },
  { 
    id: 'a5', 
    icon: Rocket, 
    title: 'Real Scenarios', 
    desc: 'Deploying to AWS/GCP cloud platforms with high uptime SLAs and monitoring.',
    accent: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  }
];

const InteractiveNode = ({ item, index, align = 'left' }) => {
  const Icon = item.icon;
  const delay = `${index * 100}ms`;

  return (
    <div 
      className="group relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 border border-transparent hover:border-slate-100 cursor-pointer animate-fade-in-up bg-white/40"
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      {/* Icon Container */}
      <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center ${item.accent} transition-transform duration-500 group-hover:scale-110 shadow-sm z-10`}>
        <Icon className="w-5 h-5" />
        <div className="absolute inset-0 rounded-xl border border-current opacity-0 group-hover:animate-ping-slow pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="flex-1 pt-1 transition-transform duration-500 ease-out group-hover:translate-x-1">
        <h4 className="text-sm md:text-base font-extrabold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
          {item.desc}
        </p>
      </div>
      
      {/* Decorative Chevron */}
      {align === 'left' && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-slate-300 hidden md:block">
          <ChevronRight className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export const ClassroomToRealWorld = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-24 md:py-32 bg-[#F4F7FC] overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-b border-emerald-200/80"
    >
      {/* Ethereal Ambient Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Crisp Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 90% 90% at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at center, black 30%, transparent 80%)'
          }}
        />
        
        {/* Interactive Soft Spotlight */}
        <div 
          className="hidden lg:block absolute w-[1000px] h-[1000px] rounded-full pointer-events-none transition-transform duration-700 ease-out opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)',
            transform: `translate(${mousePosition.x - 500}px, ${mousePosition.y - 500}px)`
          }}
        />
        
        {/* Ambient Floating Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 blur-[120px] animate-blob mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-400/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-400/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          {/* Animated Premium Pill Badge */}
          <div className="group relative inline-flex items-center justify-center mb-8 cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm transition-transform group-hover:scale-105 duration-300">
              <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                Practical Application
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            From Classroom <br className="md:hidden"/>
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500">
                to Real World
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-cyan-200/40 -z-10 transform -skew-x-12" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Connecting theoretical engineering knowledge with elite production software craftsmanship.
          </p>

          {/* Central Knowledge -> Application Bridge Indicator */}
          <div className="mt-12 inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/80 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 relative z-10 group-hover:text-slate-800 transition-colors">Knowledge</span>
            <div className="relative flex items-center justify-center w-8 h-8 z-10">
              <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping" />
              <ArrowRight className="w-4 h-4 text-cyan-500" />
            </div>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-cyan-600 relative z-10">Application</span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
          
          {/* LEFT PANEL: Learn The Technology */}
          <div className="relative group rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-10 flex flex-col transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(6,182,212,0.15)] z-10 hover:border-blue-100">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] border border-blue-100 mb-2 shadow-sm">
                    Phase 01 &bull; Theory &amp; Patterns
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Learn the Technology</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              {PHASE_1_THEORY.map((item, index) => (
                <InteractiveNode key={item.id} item={item} index={index} align="left" />
              ))}
            </div>
          </div>

          {/* CENTER: The Animated Data Bridge (Desktop Only) */}
          <div className="hidden lg:flex w-24 h-full relative items-center justify-center z-0">
             {/* Glowing Vertical Line Spine */}
             <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-blue-500/30 via-cyan-400 via-violet-500 to-blue-500/30 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.6)] pointer-events-none" />

             <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[200%] bg-gradient-to-r from-transparent via-cyan-400 to-violet-500 animate-data-stream opacity-80" />
             </div>
             
             <div className="relative w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-[spin_4s_linear_infinite]" style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }} />
                <div className="absolute inset-0 rounded-full border-2 border-violet-400/30 animate-[spin_6s_linear_infinite_reverse]" style={{ borderBottomColor: 'transparent', borderRightColor: 'transparent' }} />
                <Activity className="w-4 h-4 text-cyan-600 animate-pulse" />
             </div>
          </div>

          {/* RIGHT PANEL: Build With The Technology */}
          <div className="relative group rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-10 flex flex-col transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.15)] z-10 hover:border-violet-100">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-[9px] font-black uppercase tracking-[0.2em] border border-violet-100 mb-2 shadow-sm">
                    Phase 02 &bull; Craftsmanship
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Build With the Technology</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {PHASE_2_APPLICATION.map((item, index) => (
                <InteractiveNode key={item.id} item={item} index={index + 5} align="right" />
              ))}
            </div>
          </div>

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
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes data-stream {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-data-stream {
          animation: data-stream 1.5s linear infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}} />
    </section>
  );
};

export default ClassroomToRealWorld;
