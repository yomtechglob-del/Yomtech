import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, ExternalLink } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const AcademyCTA = () => {
  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#BBBDE8] via-[#ADADDF] to-[#BBBDE8] relative text-slate-900 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-white/30 via-indigo-200/20 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-white/20 via-purple-200/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #5555AA 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-[1.5px] rounded-[3rem] bg-gradient-to-r from-indigo-600 via-[#1DA1F2] to-[#0ED3DD] shadow-2xl"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.9rem] p-8 sm:p-14 md:p-16 text-center space-y-8 relative overflow-hidden border border-indigo-200/50">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-900 px-5 py-2 rounded-full bg-indigo-100/90 border border-indigo-300 inline-block shadow-sm">
              🎓 ELEVATE YOUR TECH CAREER
            </span>

            <div className="space-y-4 relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Your Next Chapter Starts <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">With What You Build.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
                Learn modern technology, apply your knowledge, and keep growing through practical experience.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 relative z-10 pt-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#educational-courses"
                className="px-9 py-4 rounded-full bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-500 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn"
              >
                <GraduationCap size={18} />
                <span>Explore Academy</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://wabiskills.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#1DA1F2] font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:bg-cyan-50/80 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn2"
              >
                <ExternalLink size={18} className="text-[#0ED3DD]" />
                <span>Visit WabiSkills ↗</span>
              </motion.a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
