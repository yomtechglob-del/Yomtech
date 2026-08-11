import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Cpu, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const ImpactModel = () => {
  const [activePillar, setActivePillar] = useState(0);

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
    <section className="py-28 w-full bg-gradient-to-b from-[#0084C8] via-[#0072B8] to-[#0084C8] relative text-white overflow-hidden border-b border-sky-600/40">
      {/* Background Subtle Accent Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white px-4.5 py-1.5 rounded-full bg-white/20 border border-white/40 inline-block shadow-sm">
            🌐 CONNECTED ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
            Our Impact <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent">Model</span>
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Four connected pillars radiating around our central YomTech Global engineering core.
          </p>
        </div>

        {/* Central Hub Element with Official YomTech Logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl group hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-full px-8 py-3.5 flex items-center gap-3.5 border border-cyan-200 text-slate-900 shadow-inner">
              {/* Logo Emblem */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-300 shrink-0">
                <img
                  src={logoImg}
                  alt="YomTech Global Logo Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0284C7] font-display">
                YOMTECH GLOBAL NUCLEUS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-ping" />
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
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                className="rounded-[2.2rem] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-transparent rounded-[2.1rem] p-7 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-white">
                  
                  {/* Watermark Number */}
                  <span className="absolute bottom-2 right-4 text-[5.5rem] font-black text-white/10 pointer-events-none select-none" style={{ lineHeight: 1 }}>
                    {p.num}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0ED3DD] px-3 py-1 rounded-full border border-[#0ED3DD]/70">
                        PILLAR {p.num}
                      </span>
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isActive ? 'bg-[#0ED3DD] text-slate-900 shadow-md font-bold' : 'text-[#0ED3DD] border border-[#0ED3DD]/50'
                      }`}>
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black font-display text-white">
                        {p.title}
                      </h3>
                      <p className="text-xs font-bold text-[#0ED3DD]">
                        {p.subtitle}
                      </p>
                    </div>

                    <p className="text-sky-100 text-xs sm:text-sm leading-relaxed font-medium">
                      {p.desc}
                    </p>

                    {/* Micro Metrics Tags */}
                    <div className="pt-3 border-t border-[#0ED3DD]/30 space-y-2">
                      {p.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs font-bold text-slate-100">
                          <CheckCircle2 size={15} className="text-[#0ED3DD] shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#0ED3DD]' : 'bg-white/20'
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
            className="rounded-[2.2rem]"
          >
            <div className="bg-transparent rounded-[2.1rem] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
                    PILLAR {currentPillar.num} DEEP DIVE • {currentPillar.title}
                  </span>
                  <Sparkles size={18} className="text-[#0ED3DD] animate-pulse" />
                </div>

                <h4 className="text-2xl sm:text-3xl font-black font-display text-white">
                  {currentPillar.title}: <span className="text-cyan-200">{currentPillar.subtitle}</span> Impact
                </h4>

                <p className="text-xs sm:text-sm text-sky-100 font-medium">
                  <strong className="text-white font-bold">Key Output:</strong> {currentPillar.deliverable}
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore {currentPillar.title} Pillar</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
