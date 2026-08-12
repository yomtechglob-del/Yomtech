import React from 'react';
import { Cpu, Cloud, ShieldCheck, GraduationCap, Network, Sparkles, Activity } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const HomeEcosystem = () => {
  const pillars = [
    {
      num: '01',
      title: 'ENGINEER',
      label: 'SOFTWARE & SYSTEMS',
      desc: 'Build scalable software systems, enterprise applications, APIs, and digital products.',
      icon: Cpu,
      gradient: 'from-[#0072B8] via-[#0284C7] to-[#0ED3DD]',
      glow: 'shadow-sky-500/25',
    },
    {
      num: '02',
      title: 'CLOUD',
      label: 'INFRASTRUCTURE & PLATFORMS',
      desc: 'Design, deploy, and optimize modern cloud-based infrastructure and digital platforms.',
      icon: Cloud,
      gradient: 'from-blue-600 via-sky-600 to-indigo-500',
      glow: 'shadow-blue-500/25',
    },
    {
      num: '03',
      title: 'SECURE',
      label: 'SYSTEM PROTECTION',
      desc: 'Protect digital systems through security-focused engineering and responsible practices.',
      icon: ShieldCheck,
      gradient: 'from-teal-600 via-emerald-500 to-cyan-500',
      glow: 'shadow-teal-500/25',
    },
    {
      num: '04',
      title: 'EDUCATE',
      label: 'TALENT & MENTORSHIP',
      desc: 'Develop practical technology skills through structured learning, mentorship, and real-world projects.',
      icon: GraduationCap,
      gradient: 'from-sky-500 via-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/25',
    },
    {
      num: '05',
      title: 'CONNECT',
      label: 'PROFESSIONAL NETWORK',
      desc: 'Connect businesses, engineers, learners, and technology opportunities through a growing ecosystem.',
      icon: Network,
      gradient: 'from-purple-600 via-indigo-600 to-blue-600',
      glow: 'shadow-purple-500/25',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-gradient-to-b from-[#F0F7FF] via-[#E6F3FF] to-[#F0F7FF] relative isolate text-slate-700 overflow-hidden border-y border-sky-200/80 home-section">
      {/* Light Technical Dot Matrix Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Luminous Soft Sky Blue Ambient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-sky-200/60 rounded-full blur-[140px] pointer-events-none glow-layer" />
      <div className="absolute bottom-10 left-1/4 w-[550px] h-[350px] bg-cyan-200/50 rounded-full blur-[130px] pointer-events-none glow-layer" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[350px] bg-blue-200/50 rounded-full blur-[130px] pointer-events-none glow-layer" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-sky-300/80 text-[#0072B8] text-xs font-black tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
            <Activity size={14} className="animate-pulse text-[#0ED3DD]" />
            <span>YOMTECH GLOBAL ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-[#071A2B] tracking-tight leading-tight">
            One Technology Ecosystem. <br />
            <span className="bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent">
              Built to Create Real Impact.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            YomTech Global brings software engineering, cloud platforms, cybersecurity, technical education, and talent networking into one connected, high-performance ecosystem.
          </p>
        </div>

        {/* Central Ecosystem Hub & Pillars */}
        <div className="relative py-6">
          
          {/* Central YomTech Core Emblem Nucleus */}
          <div className="flex justify-center mb-14 relative z-20">
            <div className="relative p-[2.5px] rounded-full bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] shadow-[0_10px_35px_rgba(2,132,199,0.2)] group">
              <div className="absolute -inset-1 rounded-full bg-cyan-400/20 blur-md animate-pulse pointer-events-none" />
              
              <div className="relative bg-white rounded-full px-8 py-4 flex items-center gap-4 border border-white text-[#071A2B] shadow-xl">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#0072B8] shrink-0 shadow-sm">
                  <img src={logoImg} alt="YomTech Global Nucleus" className="w-full h-full object-cover" />
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8]">
                      NUCLEUS CORE
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ED3DD] animate-ping" />
                  </div>
                  <span className="text-base font-black uppercase tracking-wider text-[#071A2B] font-display">
                    YOMTECH GLOBAL
                  </span>
                </div>

                <Sparkles size={20} className="text-[#0ED3DD] shrink-0 ml-2 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Connected Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.num} className="group relative">
                  {/* Outer Multi-Gradient Border Container */}
                  <div className="p-[2px] rounded-[2.3rem] bg-gradient-to-b from-sky-300/80 via-sky-200/40 to-cyan-300/60 hover:from-[#0072B8] hover:via-[#0284C7] hover:to-[#0ED3DD] transition-all duration-500 shadow-[0_10px_35px_rgba(2,132,199,0.07)] hover:shadow-[0_22px_55px_rgba(2,132,199,0.22)] hover:-translate-y-2.5 h-full">
                    
                    {/* Inner Pure White Glass Body */}
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2.15rem] p-7 space-y-6 h-full flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Hover Ambient Corner Light Flare */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Top Glow Accent Line */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="space-y-4 relative z-10">
                        {/* Node Header Row */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 text-[#0072B8] border border-sky-200/80 shadow-xs">
                            PILLAR {p.num}
                          </span>
                          
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center shadow-lg ${p.glow} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                            <IconComp size={22} />
                          </div>
                        </div>

                        {/* Title & Label */}
                        <div className="space-y-1 pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] block">
                            {p.label}
                          </span>
                          <h3 className="text-2xl font-black font-display text-[#071A2B] group-hover:text-[#0072B8] transition-colors leading-tight">
                            {p.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {p.desc}
                        </p>
                      </div>

                      {/* Bottom Component Status */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                          Ecosystem Component
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#0ED3DD] shadow-[0_0_8px_#0ED3DD]" />
                          <span className="text-[10px] font-black text-[#0072B8]">ONLINE</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
