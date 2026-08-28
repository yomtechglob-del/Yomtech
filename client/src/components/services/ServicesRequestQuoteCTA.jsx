import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import logoImg from '../../assets/logos/logo.png';

export const ServicesRequestQuoteCTA = () => {
  return (
    <section className="py-14 sm:py-20 md:py-32 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
      {/* Background Subtle Accent Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto group"
        >
          <div className="bg-white rounded-[2.5rem] sm:rounded-[3.1rem] p-6 sm:p-10 md:p-16 text-slate-900 text-center space-y-6 sm:space-y-8 relative overflow-hidden shadow-inner">
            
            {/* Translucent YomTech Brand Logo Watermark Background */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.20] pointer-events-none z-0">
              <img src={logoImg} alt="" className="w-80 sm:w-96 h-80 sm:h-96 object-contain" />
            </div>

            {/* Radial Aura Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0ED3DD]/20 via-cyan-100/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            {/* Top Floating YomTech Logo Badge */}
            <div className="flex justify-center relative z-10">
              <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-md hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl px-5 py-2 flex items-center gap-3 border border-cyan-200">
                  <div className="w-6 h-6 rounded-lg overflow-hidden border border-cyan-300 shrink-0">
                    <img src={logoImg} alt="YomTech Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-[#0284C7] font-display">
                    ⚡ Start Your Digital Transformation
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Ready to Build Your <br />
                <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">
                  Next Enterprise Solution?
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Consult with our senior software architects, ERP specialists, and tech advisors. Get a tailored project breakdown, timeline, and custom quote within 24 hours.
              </p>
            </div>

            {/* Action Buttons & Hotline Capsule */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 relative z-10">
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-bold text-xs sm:text-sm shadow-[0_10px_30px_rgba(2,132,199,0.35)] hover:shadow-[0_15px_40px_rgba(14,211,221,0.5)] hover:scale-105 transition-all duration-300"
              >
                <span>Request a Custom Quote</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#0284C7] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </Link>

              <a
                href="tel:+251977666699"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-cyan-50 text-[#0284C7] border border-cyan-200 font-bold text-xs sm:text-sm shadow-md hover:bg-cyan-100 hover:border-cyan-300 hover:scale-105 transition-all duration-300"
              >
                <Phone size={16} className="text-[#0284C7]" />
                <span>Call +251 (977) 666-699</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-100 text-xs font-bold text-slate-600 relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>24hr Quote Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Full SLA Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Custom-Built From Scratch</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesRequestQuoteCTA;
