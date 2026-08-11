import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Layers, Cpu, Users, GraduationCap, ShieldCheck, Zap } from 'lucide-react';

export const WhyModelDifferent = () => {
  const [activeTab, setActiveTab] = useState('formula'); // 'formula' | 'comparison' | 'outcomes'

  return (
    <div className="py-12 w-full text-slate-900 relative">
      <div className="max-w-[1720px] mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-4.5 py-2 rounded-full bg-cyan-100/90 border border-cyan-300 inline-block shadow-sm">
            ⚖️ PARADIGM COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Why Our Model <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Is Different</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            An executive comparison highlighting our holistic digital capability model.
          </p>

          {/* Quick Sub-Tab Selector */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[
              { id: 'formula', label: 'Holistic Model' },
              { id: 'comparison', label: 'Comparison Matrix' },
              { id: 'outcomes', label: 'Strategic Outcomes' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white shadow-md border-transparent scale-105'
                    : 'bg-white/90 text-slate-700 border-cyan-300/60 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Grid (Clean Luxury Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          {/* TRADITIONAL APPROACH (Col 5 - Conventional Paradigm) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 p-[1.5px] rounded-[2.2rem] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 shadow-xl"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[2.1rem] p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full text-slate-900 relative overflow-hidden">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-200 shadow-sm">
                      <AlertCircle size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      CONVENTIONAL PARADIGM
                    </span>
                  </div>
                  <span className="text-[9px] font-black text-rose-600 uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200">
                    High Risk
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-slate-800">
                  TRADITIONAL APPROACH
                </h3>

                {/* Linear Process Flow */}
                <div className="p-5 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-3 text-xs font-bold text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900">1. Technology Acquisition</span>
                    <span className="text-[10px] text-slate-500">Step 01</span>
                  </div>
                  <div className="text-slate-400 pl-4 font-black">↓</div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900">2. One-Off Implementation</span>
                    <span className="text-[10px] text-slate-500">Step 02</span>
                  </div>
                  <div className="text-slate-400 pl-4 font-black">↓</div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900">3. Transactional Handover</span>
                    <span className="text-[10px] text-slate-500">Step 03</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Focuses purely on one-off project deliverables without building internal organizational knowledge, team capability, or code longevity.
                </p>

                {/* Risk Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    'Permanent Vendor Lock-In & Licensing Costs',
                    'Internal Knowledge Depletion Post-Launch',
                    'High Long-Term Maintenance Overhead'
                  ].map((risk, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-black text-slate-600 uppercase tracking-wider">
                RESULT: Short-Term Output, High Vendor Dependency
              </div>
            </div>
          </motion.div>

          {/* YOMTECH GLOBAL APPROACH (Col 7 - Sustainable Paradigm) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-[1.5px] rounded-[2.2rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl group"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[2.1rem] p-8 sm:p-12 space-y-6 flex flex-col justify-between h-full relative overflow-hidden text-slate-900">
              {/* Radial Aura Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0ED3DD]/30 via-cyan-200/20 to-sky-300/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-50 text-[#0284C7] border border-cyan-200 shadow-sm">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7]">
                      SUSTAINABLE PARADIGM
                    </span>
                  </div>
                  <span className="text-[9px] font-black text-[#0284C7] uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300">
                    Recommended Model
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                  YOMTECH GLOBAL APPROACH
                </h3>

                {/* Integrated Capability Model */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-cyan-50/90 rounded-2xl border-2 border-cyan-300 shadow-sm space-y-4 text-xs font-bold text-slate-900"
                  >
                    {activeTab === 'formula' && (
                      <>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-900">
                          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-cyan-300 text-[#0284C7] font-black shadow-sm flex items-center gap-1.5">
                            <Cpu size={14} className="text-[#0ED3DD]" /> Technology
                          </span>
                          <span className="text-[#0284C7] font-black text-base">+</span>
                          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-cyan-300 text-[#0284C7] font-black shadow-sm flex items-center gap-1.5">
                            <Users size={14} className="text-[#0ED3DD]" /> Talent
                          </span>
                          <span className="text-[#0284C7] font-black text-base">+</span>
                          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-cyan-300 text-[#0284C7] font-black shadow-sm flex items-center gap-1.5">
                            <Layers size={14} className="text-[#0ED3DD]" /> Strategy
                          </span>
                          <span className="text-[#0284C7] font-black text-base">+</span>
                          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-cyan-300 text-[#0284C7] font-black shadow-sm flex items-center gap-1.5">
                            <GraduationCap size={14} className="text-[#0ED3DD]" /> Continuous Learning
                          </span>
                        </div>

                        <div className="text-[#0284C7] pt-2 flex items-center gap-2.5 font-black text-sm sm:text-base font-display uppercase tracking-wide">
                          <ArrowRight size={20} className="text-[#0ED3DD]" />
                          <span>Long-Term Digital Capability</span>
                        </div>
                      </>
                    )}

                    {activeTab === 'comparison' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
                        <div className="p-3 rounded-xl bg-white border border-cyan-200 space-y-1">
                          <span className="text-[10px] font-black text-[#0284C7] uppercase block">In-House Mastery</span>
                          <p className="text-xs font-semibold">Teams learn as code is built, eliminating reliance on external agencies.</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-cyan-200 space-y-1">
                          <span className="text-[10px] font-black text-[#0284C7] uppercase block">Enduring Architecture</span>
                          <p className="text-xs font-semibold">Clean, documented code with zero proprietary lock-in.</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'outcomes' && (
                      <div className="space-y-2 text-slate-900">
                        <div className="flex items-center gap-2 text-xs font-black text-[#0284C7]">
                          <Zap size={16} className="text-[#0ED3DD]" />
                          <span>100% In-House Technical Independence</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-black text-[#0284C7]">
                          <ShieldCheck size={16} className="text-[#0ED3DD]" />
                          <span>Sustainable High-Performance Engineering Culture</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  We combine enterprise software engineering with hands-on talent cultivation, ensuring organizations gain enduring digital independence and modern technical excellence.
                </p>
              </div>

              <div className="pt-4 border-t border-cyan-200 text-xs sm:text-sm font-black text-[#0284C7] uppercase tracking-wider relative z-10 flex items-center gap-2">
                <Sparkles size={16} className="text-[#0ED3DD] animate-pulse" />
                <span>RESULT: Sustainable Innovation &amp; In-House Capability</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
