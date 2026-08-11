import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Layers, Cpu, Users, ArrowUpRight, Sparkles, ShieldCheck, Zap, Globe, Award } from 'lucide-react';

export const AboutAtGlance = () => {
  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Dynamic Floating Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-[700px] h-[700px] bg-gradient-to-tl from-sky-200/25 via-cyan-100/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Matrix Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Asymmetric Dashboard Header Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Eyebrow + Premium Gradient Heading + Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-7"
          >
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-cyan-100/80 border border-cyan-300 text-[#0284C7] text-xs font-black tracking-widest uppercase shadow-sm transition-all">
              <div className="w-5.5 h-5.5 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0">
                <Sparkles size={13} className="text-[#0284C7] animate-spin" />
              </div>
              <span className="whitespace-nowrap">YOMTECH GLOBAL / AT A GLANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 leading-[1.12] tracking-tight">
              Technology Built Around{' '}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">
                People, Systems &amp; Possibility
              </span>
            </h2>

            <p className="text-slate-600 text-base font-medium leading-relaxed">
              We operate as an integrated technology powerhouse—engineering enterprise-grade cloud software while cultivating top-tier tech talent for modern organizations worldwide.
            </p>

            {/* Micro Feature Badges */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <div className="group relative flex items-center gap-3 px-7 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-black text-xs shadow-md hover:border-cyan-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0284C7] group-hover:scale-110 transition-transform shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <span className="text-slate-800 font-extrabold whitespace-nowrap">Enterprise Quality</span>
              </div>

              <div className="group relative flex items-center gap-3 px-7 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-black text-xs shadow-md hover:border-amber-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shrink-0">
                  <Zap size={14} />
                </div>
                <span className="text-slate-800 font-extrabold whitespace-nowrap">High Performance</span>
              </div>

              <div className="group relative flex items-center gap-3 px-7 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-black text-xs shadow-md hover:border-emerald-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                  <Globe size={14} />
                </div>
                <span className="text-slate-800 font-extrabold whitespace-nowrap">Global Talent</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs font-black text-[#0284C7]">
              <span>INTELLIGENCE DASHBOARD PROFILE</span>
              <span className="w-14 h-[2.5px] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] rounded-full" />
            </div>
          </motion.div>

          {/* RIGHT: Ultra-Premium Light Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 relative">
            
            {/* FEATURE CARD 1: ESTABLISHED HERITAGE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-7 p-[1.5px] rounded-[2rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white rounded-[1.9rem] p-8 space-y-6 relative overflow-hidden h-full flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 shadow-xs">
                    ESTABLISHED HERITAGE
                  </span>
                  <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#0284C7] shadow-sm group-hover:scale-110 transition-all duration-300">
                    <Calendar size={22} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-black font-display text-slate-900 tracking-tight">
                      2015
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100/90 border border-amber-300 text-amber-800 text-xs font-black uppercase tracking-wider">
                      10+ YEARS
                    </span>
                  </div>
                  <div className="text-lg font-black text-[#0284C7] font-display">
                    Founded &amp; Pioneered
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed relative z-10">
                  Over a decade of software engineering excellence, digital transformation, and talent development.
                </p>

                <div className="relative z-10 space-y-1.5">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[1px] border border-slate-200">
                    <div className="h-full w-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>Continuous Innovation</span>
                    <span className="text-[#0284C7]">100% Proven Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FEATURE CARD 2: ENTERPRISE FOCUS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:col-span-5 p-[1.5px] rounded-[2rem] bg-gradient-to-br from-[#0284C7] via-cyan-400 to-[#1DA1F2] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white rounded-[1.9rem] p-7 space-y-5 relative overflow-hidden h-full flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0284C7] px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200">
                    FOCUS
                  </span>
                  <div className="p-2.5 rounded-2xl bg-cyan-50 text-[#0284C7] border border-cyan-200 group-hover:scale-110 transition-transform">
                    <Layers size={20} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                    Enterprise
                  </div>
                  <div className="text-xs font-bold text-slate-500">
                    Technology Platform &amp; ERP
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Custom ERP, WMS, SFA &amp; cloud systems built for enterprise scale.
                </p>

                <div className="h-1.5 w-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] rounded-full" />
              </div>
            </motion.div>

            {/* FEATURE CARD 3: AI + CLOUD CAPABILITY */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:col-span-5 p-[1.5px] rounded-[2rem] bg-gradient-to-br from-emerald-400 via-[#0ED3DD] to-cyan-500 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white rounded-[1.9rem] p-7 space-y-5 relative overflow-hidden h-full flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    CAPABILITY
                  </span>
                  <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 group-hover:scale-110 transition-transform">
                    <Cpu size={20} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                    AI + Cloud
                  </div>
                  <div className="text-xs font-bold text-slate-500">
                    Engineering Systems
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Deep Machine Learning, Intelligent Automation &amp; AWS/Azure.
                </p>

                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 to-[#0ED3DD] rounded-full" />
              </div>
            </motion.div>

            {/* FEATURE CARD 4: DUAL MODEL - SOFTWARE + TALENT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="md:col-span-7 p-[1.5px] rounded-[2rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white rounded-[1.9rem] p-7 space-y-5 relative overflow-hidden h-full flex flex-col justify-between text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0284C7] px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 shadow-xs">
                    DUAL MODEL
                  </span>
                  <div className="p-2.5 rounded-2xl bg-cyan-50 text-[#0284C7] border border-cyan-200 shadow-sm group-hover:scale-110 transition-transform">
                    <Users size={20} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
                    <span>Software + Talent</span>
                    <ArrowUpRight size={22} className="text-[#0284C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Connecting robust software engineering with market-ready tech talent development.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-[10px] font-extrabold text-[#0284C7]">
                    ⚡ Enterprise Solutions
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-[10px] font-extrabold text-amber-800">
                    🎓 Tech Mentorship
                  </span>
                </div>

                <div className="h-1.5 w-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] rounded-full" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
