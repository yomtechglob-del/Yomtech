import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ShieldCheck, Layers, Wrench } from 'lucide-react';

export const ServicesScalableTechnology = () => {
  const principles = [
    {
      step: '01',
      phase: 'PRINCIPLE 01',
      stage: 'SCALABILITY',
      title: 'Growth-Ready Infrastructure & High-Load Architecture',
      desc: 'Technology foundations designed to support growing user loads, peak concurrency spikes, and expanding enterprise data volumes.',
      icon: TrendingUp,
      themeBg: 'bg-[#E53E3E]',
      themeDarkBg: 'bg-[#C53030]',
      themeText: 'text-[#E53E3E]',
      themeBorder: 'border-[#E53E3E]',
      offset: 'ml-0',
    },
    {
      step: '02',
      phase: 'PRINCIPLE 02',
      stage: 'RELIABILITY',
      title: 'Consistent High Availability & Uptime Guarantee',
      desc: 'Systems engineered for 99.9% uptime, fault tolerance, automated failover triggers, and dependable multi-region operation.',
      icon: Cpu,
      themeBg: 'bg-[#ED8936]',
      themeDarkBg: 'bg-[#DD6B20]',
      themeText: 'text-[#ED8936]',
      themeBorder: 'border-[#ED8936]',
      offset: 'ml-0 sm:ml-6 lg:ml-14',
    },
    {
      step: '03',
      phase: 'PRINCIPLE 03',
      stage: 'SECURITY',
      title: 'Zero-Trust Architecture & Threat Defense',
      desc: 'Role-based access control (RBAC), end-to-end data encryption at rest and in transit, vulnerability audits, and ISO compliance.',
      icon: ShieldCheck,
      themeBg: 'bg-[#48BB78]',
      themeDarkBg: 'bg-[#38A169]',
      themeText: 'text-[#48BB78]',
      themeBorder: 'border-[#48BB78]',
      offset: 'ml-0 sm:ml-12 lg:ml-28',
    },
    {
      step: '04',
      phase: 'PRINCIPLE 04',
      stage: 'FLEXIBILITY',
      title: 'Modular API Evolution & Microservices',
      desc: 'Decoupled microservice architectures and REST/GraphQL APIs built to adapt seamlessly as business priorities and technologies evolve.',
      icon: Layers,
      themeBg: 'bg-[#00A3C4]',
      themeDarkBg: 'bg-[#0987A0]',
      themeText: 'text-[#00A3C4]',
      themeBorder: 'border-[#00A3C4]',
      offset: 'ml-0 sm:ml-18 lg:ml-42',
    },
    {
      step: '05',
      phase: 'PRINCIPLE 05',
      stage: 'MAINTAINABILITY',
      title: 'Structured Codebase & Long-Term Support',
      desc: 'Clean, modular, thoroughly documented engineering codebases that ensure effortless long-term maintainability and rapid onboarding.',
      icon: Wrench,
      themeBg: 'bg-[#3182CE]',
      themeDarkBg: 'bg-[#2B6CB0]',
      themeText: 'text-[#3182CE]',
      themeBorder: 'border-[#3182CE]',
      offset: 'ml-0 sm:ml-12 lg:ml-28',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 right-1/3 w-[700px] h-[500px] bg-purple-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>SCALABLE TECHNOLOGY</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            Built for Today. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Ready for Tomorrow.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl font-sans">
            We engineer technology with future growth in mind, creating foundations that can adapt to changing users, business requirements, and emerging digital opportunities.
          </p>
        </div>

        {/* Scaled Up Infographic Banner Flow Container */}
        <div className="space-y-10 max-w-[88rem]">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex items-stretch w-full max-w-4xl lg:max-w-5xl ${p.offset} group`}
              >
                {/* Left Solid Number Box */}
                <div className={`w-32 sm:w-44 lg:w-52 shrink-0 ${p.themeBg} text-white rounded-l-[2rem] sm:rounded-l-[2.5rem] p-5 sm:p-8 flex flex-col justify-center items-center shadow-xl relative z-10 overflow-hidden`}>
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white/90">
                    {p.phase}
                  </span>
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white mt-1 drop-shadow-lg">
                    {p.step}
                  </span>
                </div>

                {/* Main Card Body + Top Folded Ribbon Banner */}
                <div className="flex-1 bg-white rounded-r-[2rem] sm:rounded-r-[2.5rem] border-2 border-slate-100/90 shadow-[0_15px_40px_rgba(0,0,0,0.07)] p-6 sm:p-9 lg:p-11 pt-9 lg:pt-11 relative flex flex-col justify-center gap-2 z-0 pr-24 sm:pr-32 lg:pr-36 hover:shadow-[0_25px_60px_rgba(0,0,0,0.14)] transition-all duration-300">
                  
                  {/* Top Folded Ribbon Banner */}
                  <div className="absolute -top-4 left-0 flex items-center z-20">
                    <div className={`w-3 h-4 ${p.themeDarkBg} rounded-tl-sm clip-fold-left pointer-events-none`} />
                    <div className={`${p.themeBg} text-white px-7 py-1.5 rounded-t-2xl shadow-lg font-black text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2`}>
                      <span>{p.stage}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight mt-1 group-hover:text-[#0284C7] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Right Protruding Double-Ring Circular Icon Badge */}
                <div className="absolute -right-6 sm:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white p-1.5 shadow-2xl border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${p.themeBg} flex items-center justify-center text-white shadow-inner`}>
                      <IconComp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2.2} />
                    </div>
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

export default ServicesScalableTechnology;
