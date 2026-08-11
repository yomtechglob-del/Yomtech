import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Zap, ArrowUpRight, CheckCircle2, ShieldCheck, Code, Layers, Sparkles, TrendingUp, Award, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.jpg';

export const SoftwareTalentSplit = () => {
  const navigate = useNavigate();
  const [activeSide, setActiveSide] = useState('software'); // 'software' or 'talent'
  const [softwareTab, setSoftwareTab] = useState('capabilities'); // 'capabilities' | 'metrics' | 'stack'
  const [talentTab, setTalentTab] = useState('capabilities'); // 'capabilities' | 'metrics' | 'stack'

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Background Subtle Accent Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-4.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300 inline-block shadow-sm">
            ⚡ DUAL ECOSYSTEM BRIDGING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Software <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">+ Talent</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Operating at the vital intersection of Enterprise Technology, People, and Continuous Innovation.
          </p>
        </div>

        {/* Split Screen Grid (Clean Luxury Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          {/* LEFT: Software Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActiveSide('software')}
            className={`lg:col-span-5 p-[1.5px] rounded-[2.5rem] transition-all duration-300 ${
              activeSide === 'software'
                ? 'bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl scale-[1.01]'
                : 'bg-slate-200/80 hover:bg-slate-300 shadow-md'
            }`}
          >
            <div className="bg-white rounded-[2.4rem] p-8 sm:p-12 text-slate-900 space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#0284C7] flex items-center justify-center shadow-md">
                    <Cpu size={28} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-cyan-100/80 text-[#0284C7] border border-cyan-300">
                    ENTERPRISE SYSTEMS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                    SOFTWARE ENGINEERING
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                    "Building reliable, scalable, and secure digital systems for modern enterprise organizations worldwide."
                  </p>
                </div>

                {/* Sub-Tabs Selector */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
                  {[
                    { id: 'capabilities', label: 'Capabilities' },
                    { id: 'metrics', label: 'Impact Metrics' },
                    { id: 'stack', label: 'Tech Stack' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSoftwareTab(tab.id)}
                      className={`flex-1 py-1.5 rounded-lg text-[10.5px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        softwareTab === tab.id
                          ? 'bg-[#0284C7] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Sub-Tab Content */}
                <div className="pt-2">
                  {softwareTab === 'capabilities' && (
                    <div className="space-y-2.5">
                      {[
                        'Enterprise ERP & Custom WMS Platforms',
                        'Cloud Migration & Serverless Microservices',
                        'High-Throughput RESTful & gRPC APIs',
                        'Cybersecurity & End-to-End Encryption'
                      ].map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={16} className="text-[#0ED3DD] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {softwareTab === 'metrics' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
                        <span className="text-xl font-black font-display text-[#0284C7] block">100+</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Enterprise Builds</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
                        <span className="text-xl font-black font-display text-[#0284C7] block">99.99%</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Cloud SLA Uptime</span>
                      </div>
                    </div>
                  )}

                  {softwareTab === 'stack' && (
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Kubernetes'].map((st, stIdx) => (
                        <span key={stIdx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/services')}
                className="mt-6 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Software Capabilities</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* CENTER: Visual Bridge Nucleus Badge with Official YomTech Logo */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 relative z-20">
            <div className="p-6 sm:p-7 rounded-[2rem] bg-white border-2 border-cyan-400/90 text-slate-900 text-center shadow-2xl space-y-3 relative overflow-hidden group hover:border-[#0284C7] hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/60 via-white to-sky-50/60 opacity-90 pointer-events-none" />

              <div className="relative z-10 space-y-2.5">
                {/* Official YomTech Logo Emblem */}
                <div className="relative w-16 h-16 rounded-2xl p-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] mx-auto shadow-[0_0_20px_rgba(14,211,221,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-white p-0.5 shadow-inner">
                    <img
                      src={logoImg}
                      alt="YomTech Global Logo Emblem"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0ED3DD] border-2 border-white animate-ping" />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0284C7] border-2 border-white" />
                </div>

                <div className="text-[10px] font-black uppercase tracking-widest leading-tight text-slate-900">
                  TECHNOLOGY + PEOPLE
                </div>
                <div className="text-[9px] font-black text-[#0284C7] uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 inline-block shadow-sm">
                  = DIGITAL CAPABILITY
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Talent Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActiveSide('talent')}
            className={`lg:col-span-5 p-[1.5px] rounded-[2.5rem] transition-all duration-300 ${
              activeSide === 'talent'
                ? 'bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-[#0284C7] shadow-2xl scale-[1.01]'
                : 'bg-slate-200/80 hover:bg-slate-300 shadow-md'
            }`}
          >
            <div className="bg-white rounded-[2.4rem] p-8 sm:p-12 text-slate-900 space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#0284C7] flex items-center justify-center shadow-md">
                    <GraduationCap size={28} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-cyan-100/80 text-[#0284C7] border border-cyan-300">
                    WABISKILLS ACADEMY
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                    TALENT ENGINEERING
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                    "Developing practical, industry-ready technology capabilities for ambitious professionals and engineering teams."
                  </p>
                </div>

                {/* Sub-Tabs Selector */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
                  {[
                    { id: 'capabilities', label: 'Capabilities' },
                    { id: 'metrics', label: 'Academy Metrics' },
                    { id: 'stack', label: 'Focus Areas' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setTalentTab(tab.id)}
                      className={`flex-1 py-1.5 rounded-lg text-[10.5px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        talentTab === tab.id
                          ? 'bg-[#0284C7] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Sub-Tab Content */}
                <div className="pt-2">
                  {talentTab === 'capabilities' && (
                    <div className="space-y-2.5">
                      {[
                        'Full-Stack Web & Mobile Engineering',
                        'AI, Machine Learning & Data Analytics',
                        'Hands-On Real-World Repository Labs',
                        '1-on-1 Senior Industry Coaching & Mentorship'
                      ].map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={16} className="text-[#0ED3DD] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {talentTab === 'metrics' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
                        <span className="text-xl font-black font-display text-[#0284C7] block">5,000+</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Skilled Learners</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
                        <span className="text-xl font-black font-display text-[#0284C7] block">94%</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Career Transition</span>
                      </div>
                    </div>
                  )}

                  {talentTab === 'stack' && (
                    <div className="flex flex-wrap gap-2">
                      {['Full-Stack', 'AI/ML Models', 'UI/UX Design', 'Cloud DevOps', 'Data Analytics', 'Backend APIs'].map((st, stIdx) => (
                        <span key={stIdx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/academy')}
                className="mt-6 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-[#0284C7] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Tech Academy</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
