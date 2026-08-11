import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Cpu, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const ImpactModel = () => {
  const [activePillar, setActivePillar] = useState(1);

  const pillars = [
    {
      id: 'biz',
      num: '01',
      title: 'BUSINESS',
      subtitle: 'Better Digital Operations',
      desc: 'Optimizing workflow efficiency, automating manual processes, and driving measurable ROI for enterprises.',
      icon: Briefcase,
      color: 'from-[#0284C7] to-[#0ED3DD]',
      metrics: ['Workflow Efficiency', '3.5x ROI Acceleration', 'Enterprise ERP Integration'],
      deliverable: 'Automated Operations Suite & Real-Time Enterprise Analytics'
    },
    {
      id: 'tech',
      num: '02',
      title: 'TECHNOLOGY',
      subtitle: 'Scalable Systems',
      desc: 'Architecting modular cloud microservices built for maximum resilience, sub-50ms API speed, and zero downtime.',
      icon: Cpu,
      color: 'from-[#0ED3DD] to-[#1DA1F2]',
      metrics: ['Modular Microservices', '99.99% Cloud SLA', 'Sub-50ms API Latency'],
      deliverable: 'High-Availability Cloud Architecture & Zero-Downtime Releases'
    },
    {
      id: 'people',
      num: '03',
      title: 'PEOPLE',
      subtitle: 'Industry Tech Talent',
      desc: 'Nurturing full-stack engineers and tech leaders equipped with practical production experience and senior mentorship.',
      icon: Users,
      color: 'from-[#1DA1F2] to-[#0284C7]',
      metrics: ['Full-Stack Engineers', '100% Repository-Based', 'Continuous Mentorship'],
      deliverable: 'Production-Ready Technical Teams & Enduring Autonomy'
    },
    {
      id: 'future',
      num: '04',
      title: 'FUTURE',
      subtitle: 'Continuous Innovation',
      desc: 'Pioneering AI automation, modern cloud DevOps pipelines, and emerging engineering paradigms for sustained growth.',
      icon: Sparkles,
      color: 'from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]',
      metrics: ['AI Automation', 'Modern Cloud DevOps', 'Emerging Paradigms'],
      deliverable: 'Next-Gen AI & Cloud Infrastructure Expansion Roadmap'
    }
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#F8FAFC] relative text-slate-900 overflow-hidden border-y border-sky-200/80">
      {/* Soft Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[650px] h-[450px] bg-cyan-100/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Background Subtle Accent Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-6 py-2.5 rounded-full bg-sky-100/90 border border-sky-300 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={14} className="text-[#0284C7] animate-pulse" />
            <span>CONNECTED ECOSYSTEM</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900">
            Our Impact <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Model</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto">
            Four connected pillars radiating around our central YomTech Global engineering core.
          </p>
        </div>

        {/* Central Hub Element with Official YomTech Logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl shadow-sky-500/20 group hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-full px-8 py-4 flex items-center gap-4 border border-sky-200 text-slate-900 shadow-md">
              {/* Logo Emblem */}
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#0284C7] shrink-0 shadow-sm">
                <img
                  src={logoImg}
                  alt="YomTech Global Logo Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0284C7] font-display">
                YOMTECH GLOBAL NUCLEUS
              </span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ED3DD] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0284C7]" />
              </span>
            </div>
          </div>
        </div>

        {/* 4 Connected Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activePillar === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.025 }}
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                className={`p-[2px] rounded-[2.4rem] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-[0_20px_50px_rgba(2,132,199,0.25)] -translate-y-3'
                    : 'bg-slate-200 hover:bg-slate-300 shadow-sm'
                }`}
              >
                <div className="bg-white rounded-[2.3rem] p-7 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-slate-900 border border-slate-100 shadow-md">
                  
                  {/* Watermark Number */}
                  <span className="absolute bottom-2 right-4 text-[5.5rem] font-black text-slate-900/10 pointer-events-none select-none" style={{ lineHeight: 1 }}>
                    {p.num}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border ${
                        isActive
                          ? 'bg-sky-100 border-sky-300 text-[#0284C7]'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}>
                        PILLAR {p.num}
                      </span>
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white shadow-md scale-110'
                          : 'bg-sky-50 text-[#0284C7] border border-sky-200'
                      }`}>
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs font-black text-[#0284C7]">
                        {p.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {p.desc}
                    </p>

                    {/* Micro Metrics Tags */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {p.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800">
                          <CheckCircle2 size={16} className="text-[#0284C7] shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`h-2 w-full rounded-full transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-sm' : 'bg-slate-200'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Pillar Inspection Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl"
          >
            <div className="bg-white rounded-[2.4rem] p-8 sm:p-12 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-slate-100">
              <div className="space-y-2 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] shadow-xs">
                    PILLAR {currentPillar.num} DEEP DIVE • {currentPillar.title}
                  </span>
                  <Sparkles size={18} className="text-amber-500 animate-pulse" />
                </div>

                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-slate-900">
                  {currentPillar.title}: <span className="bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent">{currentPillar.subtitle}</span> Impact
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  <strong className="text-slate-900 font-black">Key Output:</strong> {currentPillar.deliverable}
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <button
                  type="button"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-xs uppercase tracking-wider flex items-center gap-3 shadow-xl shadow-sky-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Explore {currentPillar.title} Pillar</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
