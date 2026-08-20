import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import logoImg from '../../assets/logos/logo.png';

export const AboutFinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
      {/* Background Subtle Accent Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto group"
        >
          <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
            {/* Radial Aura Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0ED3DD]/20 via-cyan-100/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            {/* Logo Watermark Background */}
            <img
              src={logoImg}
              alt=""
              className="absolute -bottom-6 -right-6 w-64 h-64 object-contain opacity-[0.28] pointer-events-none select-none"
              aria-hidden="true"
            />

            {/* Top Floating YomTech Logo Badge */}
            <div className="flex justify-center relative z-10">
              <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-md hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl px-5 py-2 flex items-center gap-3 border border-cyan-200">
                  <div className="w-6 h-6 rounded-lg overflow-hidden border border-cyan-300 shrink-0">
                    <img src={logoImg} alt="YomTech Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] font-display">
                    ⚡ START YOUR JOURNEY
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Let's Build <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">What Comes Next.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Whether you are looking to engineer a digital system, strengthen your technology capabilities, or explore a new idea, let's create something meaningful together.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 relative z-10 pt-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/contact')}
                className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/services')}
                className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:bg-cyan-50/80 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn2"
              >
                <Layers size={18} className="text-[#0ED3DD] group-hover/btn2:rotate-12 transition-transform duration-300" />
                <span>EXPLORE OUR SERVICES</span>
              </motion.button>
            </div>

            {/* Micro Trust Guarantee Pills */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-slate-700 text-xs font-bold relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#0ED3DD]" />
                <span>Zero-Downtime Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#0ED3DD]" />
                <span>100% In-House Capability</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#0ED3DD]" />
                <span>Sub-50ms API Performance</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
