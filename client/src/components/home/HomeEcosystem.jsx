import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, ShieldCheck, GraduationCap, Network, Sparkles } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const HomeEcosystem = () => {
  const pillars = [
    {
      num: '01',
      title: 'ENGINEER',
      label: 'SOFTWARE & SYSTEMS',
      desc: 'Build scalable software systems, enterprise applications, APIs, and digital products.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'CLOUD',
      label: 'INFRASTRUCTURE & PLATFORMS',
      desc: 'Design, deploy, and optimize modern cloud-based infrastructure and digital platforms.',
      icon: Cloud,
    },
    {
      num: '03',
      title: 'SECURE',
      label: 'SYSTEM PROTECTION',
      desc: 'Protect digital systems through security-focused engineering and responsible technology practices.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'EDUCATE',
      label: 'TALENT & MENTORSHIP',
      desc: 'Develop practical technology skills through structured learning, mentorship, and real-world projects.',
      icon: GraduationCap,
    },
    {
      num: '05',
      title: 'CONNECT',
      label: 'PROFESSIONAL NETWORK',
      desc: 'Connect businesses, engineers, learners, and technology opportunities through a growing professional ecosystem.',
      icon: Network,
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#EAF6FF] relative z-10 text-[#334155] overflow-hidden border-y border-sky-200/80">
      {/* Technical Dot Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #1DA1F3 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} 
      />

      {/* Luminous Ambient Light Flares */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#1DA1F3]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#0ED3DD]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            YOMTECH GLOBAL ECOSYSTEM
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight leading-tight">
            One Technology Ecosystem. <br />
            <span className="text-[#1DA1F3]">Built to Create Real Impact.</span>
          </h2>
          
          <p className="text-[#334155] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            YomTech Global brings technology, enterprise engineering, cloud infrastructure, cybersecurity, education, and technical talent into one connected ecosystem designed to solve real-world problems and create long-term digital value.
          </p>
        </div>

        {/* Interactive Central Ecosystem Diagram */}
        <div className="relative py-8">
          {/* Central YomTech Core Emblem Node */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-[3px] rounded-full bg-gradient-to-r from-[#1DA1F3] via-[#0ED3DD] to-[#1DA1F2] shadow-[0_0_40px_rgba(29,161,243,0.3)] group"
            >
              <div className="bg-white rounded-full px-8 py-4 flex items-center gap-4 border border-white text-[#071A2B] shadow-xl">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#1DA1F3] shrink-0 shadow-sm">
                  <img src={logoImg} alt="YomTech Global" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3] block">
                    NUCLEUS
                  </span>
                  <span className="text-sm font-black uppercase tracking-wider text-[#071A2B] font-display">
                    YOMTECH GLOBAL
                  </span>
                </div>
                <Sparkles size={18} className="text-[#0ED3DD] animate-spin shrink-0 ml-1" />
              </div>
            </motion.div>
          </div>

          {/* 5 Connected Ecosystem Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-[2rem] p-7 space-y-5 h-full flex flex-col justify-between border border-[#1DA1F3]/20 shadow-[0_8px_30px_rgba(7,26,43,0.04)] hover:shadow-[0_16px_40px_rgba(29,161,243,0.15)] hover:border-[#1DA1F3]/60 transition-all duration-300 relative overflow-hidden">
                    
                    <div className="space-y-4">
                      {/* Node Header Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#1DA1F3] border border-[#1DA1F3]/30">
                          PILLAR {p.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#1DA1F3] flex items-center justify-center group-hover:bg-[#1DA1F3] group-hover:text-white transition-all duration-300 shadow-xs">
                          <IconComp size={20} />
                        </div>
                      </div>

                      {/* Title & Label */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#0ED3DD]">
                          {p.label}
                        </span>
                        <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#1DA1F3] transition-colors">
                          {p.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Indicator Bar */}
                    <div className="pt-3 border-t border-[#1DA1F3]/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Ecosystem Component
                      </span>
                      <div className="w-2 h-2 rounded-full bg-[#1DA1F3] shadow-[0_0_8px_#1DA1F3]" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
