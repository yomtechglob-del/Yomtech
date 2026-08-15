import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Cpu, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const ServicesScalableTechnology = () => {
  const principles = [
    {
      num: '01',
      title: 'SCALABILITY',
      subtitle: 'Growth-Ready Infrastructure',
      desc: 'Technology foundations designed to support growth.',
      icon: TrendingUp,
      position: 'top',
    },
    {
      num: '02',
      title: 'RELIABILITY',
      subtitle: 'Consistent Operation',
      desc: 'Systems engineered for consistency, resilience, and dependable operation.',
      icon: Cpu,
      position: 'supporting',
    },
    {
      num: '03',
      title: 'SECURITY',
      subtitle: 'Security-Conscious Design',
      desc: 'Security-conscious architecture and responsible engineering practices.',
      icon: ShieldCheck,
      position: 'left',
    },
    {
      num: '04',
      title: 'FLEXIBILITY',
      subtitle: 'Adaptive Evolution',
      desc: 'Solutions designed to adapt as requirements and technologies evolve.',
      icon: Layers,
      position: 'right',
    },
    {
      num: '05',
      title: 'MAINTAINABILITY',
      subtitle: 'Structured Codebase',
      desc: 'Clean, structured engineering that supports long-term development and improvement.',
      icon: Wrench,
      position: 'bottom',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#EAFBF4] relative text-[#334155] overflow-hidden border-b border-emerald-900/10">
      {/* Subtle Technical Architecture Lines Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #0ED3DD 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0ED3DD] px-5 py-2 rounded-full bg-white border border-[#0ED3DD]/30 inline-block shadow-sm">
            SCALABLE TECHNOLOGY
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight">
            Built for Today. <span className="text-[#0ED3DD]">Ready for Tomorrow.</span>
          </h2>
          
          <p className="text-[#334155] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            We engineer technology with future growth in mind—creating foundations that can adapt to changing users, business requirements, technologies, and digital opportunities.
          </p>
        </div>

        {/* 5 Engineering Principles Grid / Architecture Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            const isCenterCore = p.position === 'supporting';

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group relative ${isCenterCore ? 'lg:col-span-3 max-w-2xl mx-auto w-full' : ''}`}
              >
                <div className={`bg-white rounded-[2rem] p-7 space-y-5 h-full flex flex-col justify-between border shadow-[0_8px_30px_rgba(14,211,221,0.05)] hover:shadow-[0_16px_40px_rgba(14,211,221,0.15)] transition-all duration-300 relative overflow-hidden ${
                  isCenterCore 
                    ? 'border-[#0ED3DD] bg-gradient-to-r from-emerald-50/50 via-white to-cyan-50/50' 
                    : 'border-emerald-200/70 hover:border-[#0ED3DD]/60'
                }`}>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#EAFBF4] text-[#0ED3DD] border border-emerald-300">
                        PRINCIPLE {p.num}
                      </span>
                      <div className="relative w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-[#0ED3DD] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                        <div className="absolute -inset-1 rounded-xl border border-dashed border-[#0ED3DD]/60 animate-spin-slow pointer-events-none" />
                        <IconComp size={20} className="relative z-10" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#0ED3DD] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#1DA1F3]">
                        {p.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 size={15} className="text-[#0ED3DD] shrink-0" />
                    <span>Engineered for Sustainability</span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
