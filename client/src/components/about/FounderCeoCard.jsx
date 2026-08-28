import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, CheckCircle2, ShieldCheck, Sparkles, Building2, Phone, Mail, Globe } from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import logoEmblem from '../../assets/logos/logo.png';
export const FounderCeoCard = ({ className = '' }) => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className={`relative inline-block w-full max-w-md mx-auto ${className}`}>
      
      {/* Interactive Main Container */}
      <div 
        className="relative group cursor-pointer w-full max-w-[340px] sm:max-w-[380px] mx-auto pt-4 pb-8 px-4 sm:px-6"
        onClick={() => setShowLightbox(true)}
      >
        
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E90FF]/35 via-[#00B4D8]/25 to-[#0284C7]/35 blur-3xl rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700 opacity-90" />

        {/* ========================================================
            3D OVERLAPPING CARDS STACK (Wrapped in Advanced Rotating Cyber Rings)
        ======================================================== */}
        <div className="relative w-full aspect-[4/4.8] max-w-[320px] sm:max-w-[350px] mx-auto">
          
          {/* ADVANCED FULL-STACK ROTATING ORBIT RINGS (Encompassing Whole Card Stack Framework) */}
          {/* 1. Outer Dashed Laser Cyber Ring (Clockwise 15s) */}
          <div className="absolute -inset-4 sm:-inset-5 rounded-[3.2rem] border border-dashed border-[#1E90FF]/60 animate-[spin_15s_linear_infinite] pointer-events-none z-0">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00B4D8] border-2 border-white shadow-[0_0_12px_#00B4D8] animate-pulse" />
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#1E90FF] border border-white shadow-[0_0_10px_#1E90FF]" />
          </div>

          {/* 2. Counter-Rotating Laser Arc Ring (Counter-Clockwise 9s) */}
          <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-[2.8rem] border-2 border-t-cyan-300 border-r-transparent border-b-[#1E90FF] border-l-transparent opacity-80 animate-[spin_9s_linear_infinite_reverse] pointer-events-none z-0" />

          {/* CARD 1 (Back-most card - Tilted Left in DodgerBlue) */}
          <div className="absolute inset-0 rounded-[2.2rem] bg-[#1E90FF] border-2 border-[#1E90FF] shadow-xl shadow-[#1E90FF]/30 transform -rotate-6 translate-x-[-12px] translate-y-[-6px] group-hover:-rotate-8 group-hover:translate-x-[-16px] transition-all duration-500 origin-center" />

          {/* CARD 2 (Middle card - Tilted Right in Warm Taupe Brown from Swatch) */}
          <div className="absolute inset-0 rounded-[2.2rem] bg-[#9A7C67] border-2 border-[#B2947E] shadow-lg transform rotate-6 translate-x-[12px] translate-y-[-4px] group-hover:rotate-8 group-hover:translate-x-[16px] transition-all duration-500 origin-center" />

          {/* CARD 3 (Front Main Photo Card - ermi-two.jpg with Advanced Professional Overlays) */}
          <div className="relative w-full h-full rounded-[2.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transform group-hover:scale-[1.08] sm:group-hover:scale-[1.12] transition-transform duration-500 z-10 flex flex-col bg-slate-900 border border-slate-700/50">
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-900">
              <img
                src={ermiTwoImg}
                alt="Ermias Alemayehu - Founder & CEO"
                className="w-full h-full object-cover object-top group-hover:scale-120 sm:group-hover:scale-125 transition-transform duration-700"
              />

              {/* Sweeping Light Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

              {/* Precision Tech Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-300/70 pointer-events-none z-20" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-300/70 pointer-events-none z-20" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-300/70 pointer-events-none z-20" />

              {/* Bottom Subtle Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent pointer-events-none z-10" />

              {/* ========================================================
                  CARD 4: OVERLAPPING YOMTECH CIRCULAR BRAND EMBLEM SEAL (Seamless 3D Overlay)
              ======================================================== */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-[0_10px_25px_rgba(30,144,255,0.75)]">
                
                {/* Advanced Rotating Outer Dashed Cyber Ring (Clockwise 10s) */}
                <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border border-dashed border-[#1E90FF]/80 animate-[spin_10s_linear_infinite] pointer-events-none">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00B4D8] border border-white shadow-[0_0_10px_#00B4D8] animate-pulse" />
                </div>

                {/* Advanced Counter-Rotating Laser Arc Ring (Counter-Clockwise 6s) */}
                <div className="absolute -inset-1 sm:-inset-1.5 rounded-full border-2 border-t-cyan-300 border-r-transparent border-b-[#1E90FF] border-l-transparent opacity-90 animate-[spin_6s_linear_infinite_reverse] pointer-events-none" />

                {/* Main Circular Seal Container */}
                <div className="relative w-20 h-20 rounded-full bg-[#0B1528] border-2 border-[#1E90FF] p-1 flex flex-col items-center justify-center text-center shadow-2xl">
                  
                  {/* Inner Glowing Ring */}
                  <div className="absolute inset-0.5 rounded-full border border-[#1E90FF]/40 pointer-events-none" />

                  {/* Center Logo with Subtly Rotating Sub-Ring */}
                  <div className="relative w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 mb-0.5 flex items-center justify-center">
                    <div className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-[spin_4s_linear_infinite]" />
                    <img 
                      src={logoEmblem} 
                      alt="YomTech Global" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(30,144,255,0.6)] relative z-10" 
                    />
                  </div>
                  
                  <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-[#1E90FF] leading-none mb-0.5 font-display">
                    YOMTECH
                  </span>
                  <span className="text-[5.5px] sm:text-[6.5px] font-mono text-slate-400 font-semibold leading-none">
                    EST. 2015
                  </span>

                  {/* Attached "FOUNDER & CEO" Pill Badge */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#0077B6] text-white text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider shadow-xl border border-sky-300/40 whitespace-nowrap">
                    FOUNDER &amp; CEO
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Executive Info below Stack */}
        <div className="mt-9 space-y-1 text-center relative z-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            Ermias Alemayehu
          </h3>
          <p className="text-xs font-black text-[#1E90FF] uppercase tracking-widest">
            Founder &amp; Chief Executive Officer
          </p>
          <p className="text-xs text-slate-500 font-medium">
            YomTech Global Software &amp; Technology Ecosystem
          </p>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightbox(false)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200 relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowLightbox(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Modal Image Left Side */}
              <div className="md:w-1/2 bg-slate-950 aspect-square md:aspect-auto relative overflow-hidden flex items-center justify-center">
                <img
                  src={ermiTwoImg}
                  alt="Ermias Alemayehu"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Brand Seal Medallion Floating on Modal Image */}
                <div className="absolute bottom-4 left-4 p-2 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B1528] border-2 border-[#00B4D8] p-1 flex items-center justify-center">
                    <img src={logoEmblem} alt="YomTech" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white block">YomTech Global</span>
                    <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">Est. 2015</span>
                  </div>
                </div>
              </div>

              {/* Modal Content Right Side */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-wider">
                    <ShieldCheck size={14} className="text-[#0284C7]" />
                    <span>Executive Leadership Profile</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-display">
                      Ermias Alemayehu
                    </h3>
                    <p className="text-xs font-extrabold text-[#0284C7] uppercase tracking-wider mt-0.5">
                      Founder &amp; Chief Executive Officer
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Ermias Alemayehu is the Founder and CEO of YomTech Global. Under his leadership, YomTech Global has evolved into a premier tech ecosystem driving enterprise ERP systems, government digital transformation, WabiSkills talent bootcamps, and Pan-African innovation.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                      <span>Visionary behind Yomnex ERP, WabiSkills &amp; WabiJobs</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                      <span>10+ Years Enterprise Engineering Leadership</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 size={15} className="text-cyan-500 flex-shrink-0" />
                      <span>Pan-African Tech Sovereignty Advocate</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-mono">
                  <div className="flex items-center justify-between">
                    <span>Direct Email:</span>
                    <span className="font-bold text-slate-900">ealemayehu3@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Headquarters:</span>
                    <span className="font-bold text-slate-900">Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default FounderCeoCard;
