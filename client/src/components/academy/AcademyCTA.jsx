import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, Sparkles, Rocket, ShieldCheck, Zap } from 'lucide-react';

export const AcademyCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 sm:py-36 w-full bg-slate-950 relative text-white overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Bioluminescent Multi-Layer Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Radial Energy Beams */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-gradient-to-r from-blue-600/20 via-cyan-500/25 to-purple-600/20 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-[120px] animate-float-slower" />

        {/* High-Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)', 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Main Glassmorphic Energy Container */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-2xl border border-white/15 p-8 sm:p-14 md:p-20 overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] text-center space-y-10">
          
          {/* Top Glowing Laser Border Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]" />

          {/* Floating Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-300 transition-all duration-300 group cursor-default"
          >
            <GraduationCap size={16} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">
              START YOUR LEARNING JOURNEY
            </span>
            <Sparkles size={14} className="text-amber-300 animate-pulse ml-1" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
          >
            Ready to Build Real Technology <br />
            <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Capabilities That Matter?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Join YomTech Academy to master modern software engineering, cloud computing, and AI architectures through hands-on production project execution.
          </motion.p>

          {/* Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-2"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Portfolios</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>1-on-1 Senior Mentorship</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span>Global Hiring Pipeline</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5 pt-4"
          >
            <button
              onClick={() => navigate('/contact', { state: { inquiryType: 'ACADEMY' } })}
              className="group relative px-9 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white font-black text-base shadow-[0_10px_35px_rgba(6,182,212,0.4)] hover:shadow-[0_15px_45px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">Enroll in Bootcamp</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/services')}
              className="px-9 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-base backdrop-blur-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Enterprise Services
            </button>
          </motion.div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-float-slow {
          animation: float-slow 14s ease-in-out infinite;
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-15px, 20px); }
        }
        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};
