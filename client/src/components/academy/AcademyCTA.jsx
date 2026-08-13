import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, ExternalLink, Sparkles, Rocket, ShieldCheck, Award, Users } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const AcademyCTA = () => {
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

  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 border-t border-slate-200/80">
      
      {/* Ambient Ethereal Atmospheric Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/80 via-blue-50/40 to-white" />
        
        <div className="absolute top-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-cyan-300/15 blur-[140px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[55vw] h-[55vw] rounded-full bg-blue-400/15 blur-[150px] mix-blend-multiply animate-float-slower" style={{ animationDelay: '-4s' }} />

        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)', 
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 90% at center, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at center, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative group rounded-[3.5rem] bg-gradient-to-b from-white/95 via-cyan-50/40 to-white backdrop-blur-2xl border border-cyan-200/90 shadow-[0_20px_70px_rgba(6,182,212,0.15)] hover:shadow-[0_35px_100px_rgba(6,182,212,0.3)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden p-10 sm:p-16 md:p-20 text-center flex flex-col items-center cursor-pointer`}
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${(mousePos.y - 220) / -45}deg) rotateY(${(mousePos.x - 350) / 45}deg) scale3d(1.015, 1.015, 1.015)`
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          }}
        >
          {/* Cursor Spotlight Refraction */}
          <div 
            className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none rounded-[3.5rem] overflow-hidden"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div 
              className="absolute w-[600px] h-[600px] rounded-full blur-[90px] transition-transform duration-75 ease-out mix-blend-multiply"
              style={{
                background: 'rgba(6, 182, 212, 0.22)',
                transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
              }}
            />
          </div>

          {/* Animated Glowing Border Reveal */}
          <div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3.5rem] bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-400 p-[3px]"
            style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
          >
            <div className="w-full h-full bg-transparent rounded-[calc(3.5rem-3px)]" />
          </div>

          {/* Top Badge with Logo */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-cyan-200 shadow-md mb-8 relative z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-sm">
              <img src={logoImg} alt="YomTech Academy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-black tracking-[0.25em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">
              ELEVATE YOUR TECH CAREER
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6 relative z-10">
            Your Next Chapter Starts <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">
              With What You Build.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Master modern technology, architect real solutions, and cement your career trajectory through practical software craftsmanship.
          </p>

          {/* Key Feature Pills Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
            <span className="px-4 py-2 rounded-full bg-white/80 border border-cyan-100 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <Award size={14} className="text-cyan-500" />
              <span>Accredited Bootcamps</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-white/80 border border-cyan-100 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>1-on-1 Senior Mentorship</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-white/80 border border-cyan-100 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <Rocket size={14} className="text-amber-500" />
              <span>Production Apps Portfolio</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-white/80 border border-cyan-100 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <Users size={14} className="text-indigo-500" />
              <span>Global Tech Network</span>
            </span>
          </div>

          {/* Ultra-Premier Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10 w-full sm:w-auto">
            
            {/* Explore Bootcamps Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#educational-courses"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[linear-gradient(110deg,#0284c7,45%,#38bdf8,55%,#0284c7)] bg-[length:200%_auto] animate-shimmer text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_12px_40px_rgba(14,165,233,0.45)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.65)] transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer group/btn border border-cyan-300/40"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 shadow-inner">
                <GraduationCap size={18} className="text-white" />
              </div>
              <span className="font-extrabold tracking-[0.15em]">EXPLORE BOOTCAMPS</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
            </motion.a>

            {/* Visit WabiSkills Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://wabiskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/90 hover:bg-white border-2 border-cyan-400/80 text-cyan-800 font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(6,182,212,0.2)] hover:shadow-[0_18px_50px_rgba(6,182,212,0.35)] transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer group/btn2 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0 shadow-sm">
                <ExternalLink size={16} className="text-cyan-600 group-hover/btn2:rotate-12 transition-transform" />
              </div>
              <span className="font-extrabold tracking-[0.15em]">VISIT WABISKILLS ↗</span>
            </motion.a>
          </div>

          {/* Ultra-Bioluminescent Dual Energy Beam Track */}
          <div className="mt-16 w-full max-w-2xl h-3 bg-slate-100/90 rounded-full p-[1.5px] border border-cyan-100 shadow-inner relative z-10 flex items-center overflow-hidden">
             {/* Neon Glow Track */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-400 opacity-80" />
             {/* Fast Travelling White Light Beam Stream */}
             <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-white to-transparent blur-[2px] animate-root-stream-1 z-10" />
             {/* Secondary Pulsing Beam Stream */}
             <div className="absolute inset-y-0 left-0 w-1/4 bg-white opacity-70 blur-[1px] animate-root-stream-3 z-10" />
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

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
        }

        @keyframes root-dash {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-root-stream-1 { animation: root-dash 2s linear infinite; }
        .animate-root-stream-3 { animation: root-dash 3s linear infinite; }
      `}} />
    </section>
  );
};

export default AcademyCTA;
