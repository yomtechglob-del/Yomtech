import React, { useState, useRef } from 'react';
import { 
  Building2, Globe, Cpu, Users, ShieldCheck, 
  Zap, Award, Calendar, Layers, Activity, ArrowRight, Sparkles
} from 'lucide-react';

const BENTO_CARDS = [
  {
    id: 'c1',
    category: 'TALENT IMPACT',
    icon: Users,
    type: 'stat',
    title: '2K+',
    badge: 'LEARNERS',
    subtitle: 'Learners Empowered',
    description: 'Equipping 2,000+ ambitious engineers, AI specialists, and designers with future-ready skills through hands-on mentorship.',
    footerLeft: 'WabiSkills Academy',
    footerRight: 'Production Code Ready',
    theme: {
      accent: 'text-blue-500',
      bgLight: 'bg-blue-50',
      borderLight: 'border-blue-100',
      gradient: 'from-blue-400 to-cyan-400',
      glow: 'rgba(56, 189, 248, 0.15)'
    },
    delay: 0.1
  },
  {
    id: 'c2',
    category: 'ENTERPRISE SCALE',
    icon: Layers,
    type: 'stat',
    title: '25+',
    badge: 'SOLUTIONS',
    subtitle: 'Business Solutions Deployed',
    description: 'Enterprise-grade ERP, CRM, WMS, and custom cloud platforms engineered for scale and operational efficiency.',
    footerLeft: 'ERP, WMS & SFA',
    footerRight: '99.8% SLA',
    theme: {
      accent: 'text-indigo-500',
      bgLight: 'bg-indigo-50',
      borderLight: 'border-indigo-100',
      gradient: 'from-indigo-400 to-blue-500',
      glow: 'rgba(99, 102, 241, 0.15)'
    },
    delay: 0.2
  },
  {
    id: 'c3',
    category: 'FOUNDED HERITAGE',
    icon: Calendar,
    type: 'stat',
    title: '2015',
    badge: 'ESTABLISHED',
    subtitle: 'Years of Innovation',
    description: 'Pioneering software engineering, digital transformation, and real-world tech education.',
    footerLeft: 'HQ Addis Ababa',
    footerRight: 'Worldwide Delivery',
    theme: {
      accent: 'text-emerald-500',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-100',
      gradient: 'from-emerald-400 to-teal-400',
      glow: 'rgba(16, 185, 129, 0.15)'
    },
    delay: 0.3
  },
  {
    id: 'c4',
    category: 'GLOBAL NETWORK',
    icon: Globe,
    type: 'stat',
    title: '7+',
    badge: 'PARTNERSHIPS',
    subtitle: 'Global Partnerships',
    description: 'Collaborating globally with enterprise organizations and tech leaders to shape the digital future.',
    footerLeft: 'Global Reach',
    footerRight: 'Enterprise Trust',
    theme: {
      accent: 'text-violet-500',
      bgLight: 'bg-violet-50',
      borderLight: 'border-violet-100',
      gradient: 'from-violet-400 to-purple-500',
      glow: 'rgba(139, 92, 246, 0.15)'
    },
    delay: 0.4
  }
];

const FeaturePill = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors">
      <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 transition-colors" />
    </div>
    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900">{text}</span>
  </div>
);

const BentoCard = ({ card, activeCard, setActiveCard }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isActive = activeCard === card.id;
  const isDimmed = activeCard !== null && activeCard !== card.id;
  const Icon = card.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActiveCard(card.id)}
      onMouseLeave={() => setActiveCard(null)}
      className={`relative group flex flex-col rounded-[2rem] bg-white border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer h-full min-h-[280px]
        ${isActive ? `border-transparent z-20 shadow-[0_25px_60px_rgba(0,0,0,0.08)]` : 'border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] z-10'}
        ${isDimmed ? 'opacity-40 scale-[0.97] blur-[1px]' : 'opacity-100 blur-0 scale-100'}
      `}
      style={{
        transform: isActive 
          ? `perspective(1000px) rotateX(${(mousePos.y - 150) / -30}deg) rotateY(${(mousePos.x - 150) / 30}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isActive 
          ? `0 30px 60px -12px ${card.theme.glow}, 0 0 0 1.5px rgba(255,255,255,1) inset` 
          : '0 10px 30px -10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.6) inset',
        animation: `fade-in-up 0.8s ease-out ${card.delay}s both`
      }}
    >
      {/* Dynamic Inner Cursor Spotlight (Refraction Effect) */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2rem] overflow-hidden"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[50px] transition-transform duration-75 ease-out mix-blend-multiply"
          style={{
            background: card.theme.glow,
            transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          }}
        />
      </div>

      {/* Animated Gradient Border Reveal */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem] bg-gradient-to-br ${card.theme.gradient} p-[2px]`}
        style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
      >
        <div className="w-full h-full bg-transparent rounded-[calc(2rem-2px)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
        
        {/* Header Row */}
        <div className="flex justify-between items-start mb-6">
          <span className={`px-3.5 py-1.5 rounded-full ${card.theme.bgLight} border ${card.theme.borderLight} ${card.theme.accent} text-[9px] font-black uppercase tracking-[0.2em] shadow-sm group-hover:bg-white transition-colors duration-300`}>
            {card.category}
          </span>
          
          <div className={`w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${card.theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <Icon className={`w-4 h-4 ${card.theme.accent} relative z-10`} strokeWidth={2} />
          </div>
        </div>

        {/* Dynamic Body Content based on type */}
        <div className="flex-1 flex flex-col">
          
          {card.type === 'stat' && (
            <>
              <div className="flex items-end gap-3 mb-2">
                <h3 className="text-6xl font-black text-slate-900 tracking-tighter leading-none relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500">
                  {card.title}
                </h3>
                <span className="mb-1.5 px-2 py-1 rounded-md bg-amber-100/50 text-amber-700 text-[10px] font-bold uppercase tracking-wider border border-amber-200/50">
                  {card.badge}
                </span>
              </div>
              <h4 className={`text-sm font-extrabold mb-3 ${card.theme.accent}`}>{card.subtitle}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 group-hover:text-slate-600 transition-colors">
                {card.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  <span>{card.footerLeft}</span>
                  <span className={card.theme.accent}>{card.footerRight}</span>
                </div>
                {/* Laser Progress Bar */}
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 h-full w-[15%] bg-slate-300 rounded-full transition-all duration-1000 ease-out group-hover:w-full group-hover:bg-gradient-to-r group-hover:${card.theme.gradient}`} />
                </div>
              </div>
            </>
          )}

          {card.type === 'standard' && (
            <>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                {card.title}
              </h3>
              <h4 className="text-xs font-semibold text-slate-400 mb-4">{card.subtitle}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                {card.description}
              </p>
              
              {/* Laser Progress Bar (Standard) */}
              <div className="mt-auto pt-6">
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 h-full w-[15%] bg-slate-300 rounded-full transition-all duration-1000 ease-out group-hover:w-full group-hover:bg-gradient-to-r group-hover:${card.theme.gradient}`} />
                </div>
              </div>
            </>
          )}

          {card.type === 'dual' && (
            <>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                {card.title} <ArrowRight className={`w-5 h-5 ${card.theme.accent} transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300`} />
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 group-hover:text-slate-600 transition-colors">
                {card.description}
              </p>
              
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {card.badges.map((b, i) => (
                  <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${b.bg} border ${b.border} shadow-sm group-hover:bg-white transition-colors duration-300`}>
                    <b.icon className={`w-3.5 h-3.5 ${b.color}`} />
                    <span className={`text-[10px] font-bold ${b.color}`}>{b.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Laser Progress Bar (Dual) */}
              <div className="mt-6">
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 h-full w-[15%] bg-slate-300 rounded-full transition-all duration-1000 ease-out group-hover:w-full group-hover:bg-gradient-to-r group-hover:${card.theme.gradient}`} />
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export const AboutAtGlance = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative min-h-screen py-20 lg:py-32 bg-white overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 flex items-center border-b border-slate-200/80">
      
      {/* Ambient Pearl & Ice Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-[0.35]" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(148,163,184,0.25) 1px, transparent 1px)', 
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)'
          }}
        />
        
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-200/30 blur-[130px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-blue-200/30 blur-[140px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/40 blur-[120px] mix-blend-multiply animate-pulse-slow" />
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Story & Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fade-in-right pr-0 lg:pr-8">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-cyan-100 shadow-[0_4px_20px_-4px_rgba(6,182,212,0.15)] mb-8 w-max group cursor-default">
              <Globe className="w-4 h-4 text-cyan-500 animate-[spin_8s_linear_infinite]" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-cyan-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                YomTech Global / At a Glance
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
              Technology Built Around <br />
              <span className="relative inline-block mt-2 pb-2">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0ea5e9,45%,#6366f1,55%,#0ea5e9)] bg-[length:200%_auto] animate-shimmer">
                  People, Systems & Possibility
                </span>
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-cyan-200/60" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 10.0001C50.6667 3.33342 154 -6.39992 198 10.0001" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
              We operate as an integrated technology powerhouse—engineering enterprise-grade cloud software while cultivating top-tier tech talent for modern organizations worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <FeaturePill icon={ShieldCheck} text="Enterprise Quality" />
              <FeaturePill icon={Zap} text="High Performance" />
              <FeaturePill icon={Globe} text="Global Talent" />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.25em]">Intelligence Dashboard Profile</span>
              <div className="flex-1 h-px bg-slate-200 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-laser-scan" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Advanced Bento Grid */}
          <div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-20"
            onMouseLeave={() => setActiveCard(null)}
          >
            {BENTO_CARDS.map((card) => (
              <BentoCard 
                key={card.id} 
                card={card} 
                activeCard={activeCard} 
                setActiveCard={setActiveCard} 
              />
            ))}
          </div>

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
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
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

        @keyframes laser-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-laser-scan {
          animation: laser-scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}} />
    </section>
  );
};

export default AboutAtGlance;
