import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Check, ArrowRight, Star, Sparkles, GraduationCap, Code2, Users, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import logoEmblem from '../../assets/logos/logo.png';
import heroBannerImg from '../../pages/academyhero.png';
import { AboutHeroBackground } from '../common/AboutHeroBackground';

/* ─── EXCLUSIVE 3D ACADEMY HERO — FEATURING ACADEMYHERO.PNG & WABISKILLS LOGO ─── */
export const WabiSkillsAcademyHero = () => {
  const scrollToCourses = () => {
    const el = document.getElementById('wabiskills-courses-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] py-20 lg:py-28 hero-cyan-gradient text-white overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-white border-b border-cyan-400/30">
      
      {/* Shared Executive Flowing Background */}
      <AboutHeroBackground />

      {/* Decorative Dynamic Particles */}
      <div className="absolute left-6 top-8 grid grid-cols-4 gap-3 opacity-70 sm:left-10 sm:top-12 pointer-events-none z-10">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: index * 0.07,
            }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"
          />
        ))}
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[720px]">
          
          {/* LEFT COLUMN: Holographic WabiSkills Brand Emblem & Value Proposition */}
          <div className="lg:col-span-6 space-y-8 text-left relative z-10 pr-0 lg:pr-4">
            
            {/* Top WabiSkills Holographic Logo Emblem Badge with Official Website Link */}
            <motion.a
              href="https://wabiskills.com/login"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-gradient-to-r from-white/20 via-cyan-400/20 to-white/10 border-2 border-cyan-300/70 shadow-[0_0_35px_rgba(14,211,221,0.4)] backdrop-blur-xl group hover:border-cyan-200 hover:shadow-[0_0_45px_rgba(14,211,221,0.6)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-9 h-9 rounded-full bg-white p-1 shadow-lg shrink-0 flex items-center justify-center border-2 border-cyan-300 group-hover:scale-110 transition-transform">
                <img src={wabiSkillsLogo} alt="WabiSkills Official Logo" className="w-full h-full object-contain" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse shadow-[0_0_8px_#10b981]" />
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black tracking-wider text-white font-display uppercase drop-shadow-sm">
                  WabiSkills
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-cyan-100 bg-[#0284C7]/80 hover:bg-[#0284C7] border border-cyan-300/50 px-3 py-1 rounded-lg tracking-wide shadow-sm group-hover:text-white transition-colors">
                  <span>wabiskills.com</span>
                  <ExternalLink size={12} className="text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-display tracking-tight leading-[1.06]">
                Unlock Potential &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-200 to-sky-200 drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                  Shape Tomorrow.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl font-sans pt-1 drop-shadow-xs">
                Master high-impact technology skills with live, expert-led training. From fullstack software engineering to AI, cloud architecture, and cybersecurity, engineered for real world impact.
              </p>
            </motion.div>

            {/* Highlighted Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="grid grid-cols-3 gap-3.5 max-w-lg pt-1"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-center space-y-1 shadow-lg hover:border-cyan-300 transition-all cursor-default"
              >
                <div className="text-xs sm:text-sm font-black text-amber-300 flex items-center justify-center gap-1">
                  <Star size={14} className="fill-amber-300 text-amber-300" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider">User Rating</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-center space-y-1 shadow-lg hover:border-cyan-300 transition-all cursor-default"
              >
                <div className="text-xs sm:text-sm font-black text-cyan-300 flex items-center justify-center gap-1">
                  <GraduationCap size={15} />
                  <span>5,000+</span>
                </div>
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider">Graduates</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-center space-y-1 shadow-lg hover:border-cyan-300 transition-all cursor-default"
              >
                <div className="text-xs sm:text-sm font-black text-emerald-300 flex items-center justify-center gap-1">
                  <ShieldCheck size={15} />
                  <span>100% Vetted</span>
                </div>
                <div className="text-[10px] font-bold text-slate-100 uppercase tracking-wider">Certificates</div>
              </motion.div>
            </motion.div>

            {/* Action Buttons — High-Impact Advanced Large Sizing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
            >
              {/* 1. Large Apply Now Button */}
              <a
                href="https://wabiskills.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-12 sm:px-14 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-[0_16px_50px_rgba(2,132,199,0.55)] hover:shadow-[0_24px_70px_rgba(14,211,221,0.85)] transition-all duration-300 hover:scale-108 active:scale-98 border border-cyan-200/40"
              >
                <span>Apply Now</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              {/* 2. Large Explore Courses Button */}
              <button
                onClick={scrollToCourses}
                className="inline-flex items-center gap-4 sm:gap-5 text-white hover:text-cyan-200 font-black text-base sm:text-lg tracking-wide transition-all group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-2xl border-2 border-white/50 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-white group-hover:text-[#0284C7] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  <Play size={24} className="fill-current ml-1" />
                </div>
                <span className="drop-shadow-sm group-hover:translate-x-1 transition-transform">Explore Courses</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Unique 3D Glass Showcase Frame Exclusively Displaying academyhero.png & wabi skills logo.png */}
          <div className="lg:col-span-6 relative flex justify-center items-center pt-8 lg:pt-0">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative w-full max-w-[680px]"
            >
              
              {/* Studio Ambient Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-24 bg-cyan-400/30 blur-3xl rounded-full pointer-events-none" />

              {/* Unique 3D Curved Glass Frame for academyhero.png */}
              <motion.div 
                whileHover={{ scale: 1.025, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[2.5rem] bg-white/20 backdrop-blur-2xl border-2 border-white/40 shadow-[0_30px_90px_rgba(0,196,238,0.35)] p-5 sm:p-7 space-y-5 overflow-hidden transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_45px_110px_rgba(0,196,238,0.5)]"
                style={{
                  transform: 'perspective(1200px) rotateY(-5deg) rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                
                {/* Glowing Top Accent Beam */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse z-30" />

                {/* WabiSkills Logo Watermark Background Accent */}
                <div className="absolute -right-6 -bottom-6 opacity-25 pointer-events-none z-0">
                  <img src={wabiSkillsLogo} alt="" className="w-56 h-56 object-contain filter drop-shadow-md" />
                </div>

                {/* Inner Header Bar */}
                <div className="flex items-center justify-between border-b border-white/25 pb-3.5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white p-1 flex items-center justify-center shadow-lg border-2 border-cyan-300 shrink-0">
                      <img src={wabiSkillsLogo} alt="WabiSkills Icon" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white font-display leading-tight drop-shadow-xs">WabiSkills Academy</h4>
                      <p className="text-[10px] text-cyan-200 font-mono font-bold">Live Tech Learning Platform</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shadow-[0_0_10px_#10b981]" />
                    <span className="px-3.5 py-1.5 rounded-full bg-white/25 border border-white/40 text-white text-[10px] font-mono font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
                      ● Live Enrollment Open
                    </span>
                  </div>
                </div>

                {/* Main Exclusive Image Banner (academyhero.png) */}
                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/40 shadow-2xl group bg-transparent">
                  <img 
                    src={heroBannerImg} 
                    alt="WabiSkills Academy Hero Showcase" 
                    className="w-full h-72 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Top Glass Badge on Image */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2 border border-cyan-300 text-left shadow-xl">
                    <div className="flex items-center gap-1.5 text-amber-600 text-xs font-black">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      <span>98.8% Satisfaction</span>
                    </div>
                    <div className="text-[10px] text-slate-600 font-bold pt-0.5">Top-Rated Tech Bootcamp</div>
                  </div>

                  {/* Bottom Gradient Overlay Banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0284C7]/95 via-[#0284C7]/50 to-transparent p-4 sm:p-5 flex items-center justify-between z-20">
                    <div className="space-y-0.5">
                      <h5 className="text-sm font-black text-white font-display tracking-tight">Hands-On Fullstack &amp; AI Engineering</h5>
                      <p className="text-xs text-cyan-100 font-medium">Live Mentorship • Real Projects • Job Ready</p>
                    </div>
                    
                    <a 
                      href="https://wabiskills.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4.5 py-2.5 rounded-xl bg-white hover:bg-cyan-50 text-[#0284C7] font-black text-xs shrink-0 transition-all shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95"
                    >
                      <span>Join Class</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

              </motion.div>

              {/* FLOATING 3D GLASS CARDS OVER FRAME */}

              {/* Floating Card 1: 100% Project Completion Progress */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.18)] border-2 border-cyan-200 flex items-center gap-3.5 z-30 min-w-[260px] text-left text-slate-900"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg border-2 border-white">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between text-xs font-black text-slate-900">
                    <span>100% Practical</span>
                    <span className="text-xs font-mono font-black text-emerald-600">Complete</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-500 font-mono">Real World Projects</div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-[#0284C7] to-emerald-500 h-full w-full rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: WabiSkills Official Emblem Badge (Top Left Overflow) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border-2 border-cyan-200 flex items-center gap-3 z-30 text-slate-900"
              >
                <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md border-2 border-cyan-300 shrink-0">
                  <img src={wabiSkillsLogo} alt="WabiSkills Logo Badge" className="w-full h-full object-contain" />
                </div>
                <div className="pr-2 text-left">
                  <div className="text-xs font-black text-slate-900 font-display">WabiSkills</div>
                  <div className="text-[10px] font-black text-[#0284C7]">Empowering Leaders</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WabiSkillsAcademyHero;
