import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ShieldCheck, Layers, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesScalableTechnology = () => {
  const principles = [
    {
      step: '01',
      optionLabel: 'OPTION 01',
      stage: 'SCALABILITY',
      title: 'Growth-Ready Infrastructure & High-Load Architecture',
      desc: 'Technology foundations designed to support growing user loads, peak concurrency spikes, and expanding enterprise data volumes.',
      icon: TrendingUp,
      themeBg: 'bg-[#06B6D4]',
      themeText: 'text-[#06B6D4]',
      themeBorder: 'border-[#06B6D4]',
      themeLightBg: 'bg-cyan-50',
    },
    {
      step: '02',
      optionLabel: 'OPTION 02',
      stage: 'RELIABILITY',
      title: 'Consistent High Availability & Uptime Guarantee',
      desc: 'Systems engineered for 99.9% uptime, fault tolerance, automated failover triggers, and dependable multi-region operation.',
      icon: Cpu,
      themeBg: 'bg-[#F59E0B]',
      themeText: 'text-[#F59E0B]',
      themeBorder: 'border-[#F59E0B]',
      themeLightBg: 'bg-amber-50',
    },
    {
      step: '03',
      optionLabel: 'OPTION 03',
      stage: 'SECURITY',
      title: 'Zero-Trust Architecture & Threat Defense',
      desc: 'Role-based access control (RBAC), end-to-end data encryption at rest and in transit, vulnerability audits, and ISO compliance.',
      icon: ShieldCheck,
      themeBg: 'bg-[#EF4444]',
      themeText: 'text-[#EF4444]',
      themeBorder: 'border-[#EF4444]',
      themeLightBg: 'bg-red-50',
    },
    {
      step: '04',
      optionLabel: 'OPTION 04',
      stage: 'FLEXIBILITY',
      title: 'Modular API Evolution & Microservices',
      desc: 'Decoupled microservice architectures and REST/GraphQL APIs built to adapt seamlessly as business priorities and technologies evolve.',
      icon: Layers,
      themeBg: 'bg-[#805AD5]',
      themeText: 'text-[#805AD5]',
      themeBorder: 'border-[#805AD5]',
      themeLightBg: 'bg-purple-50',
    },
    {
      step: '05',
      optionLabel: 'OPTION 05',
      stage: 'MAINTAINABILITY',
      title: 'Structured Codebase & Long-Term Support',
      desc: 'Clean, modular, thoroughly documented engineering codebases that ensure effortless long-term maintainability and rapid onboarding.',
      icon: Wrench,
      themeBg: 'bg-[#3182CE]',
      themeText: 'text-[#3182CE]',
      themeBorder: 'border-[#3182CE]',
      themeLightBg: 'bg-blue-50',
    },
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[600px] bg-purple-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>SCALABLE TECHNOLOGY PRINCIPLES</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
        </div>

        {/* Massive Scaled-Up Swapped Layout: Left Cards (lg:col-span-6) + Right Massive Donut Ring Wheel (lg:col-span-6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-[96rem] mx-auto">
          
          {/* Left Cards List */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100/90 relative overflow-hidden group flex items-center justify-between gap-6"
                >
                  {/* Left Colored Accent Pillar */}
                  <div className={`w-3.5 h-full ${p.themeBg} absolute left-0 top-0 bottom-0`} />

                  {/* Main Card Content */}
                  <div className="space-y-2 pl-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-black uppercase tracking-widest ${p.themeText}`}>
                        {p.optionLabel}
                      </span>
                      <span className={`px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest ${p.themeLightBg} ${p.themeText} border ${p.themeBorder}`}>
                        {p.stage}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Right Circular Icon Badge */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${p.themeBg} text-white shadow-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp size={26} strokeWidth={2.2} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Massive Scaled-Up Multi-Colored Donut Ring Wheel Container */}
          <div className="lg:col-span-6 flex justify-center items-center py-6 sm:py-10 relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-cyan-400/25 blur-[140px] rounded-full pointer-events-none" />

            {/* Massive Donut Wheel Outer Container */}
            <div className="relative w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[640px] lg:h-[640px] xl:w-[680px] xl:h-[680px] rounded-full flex items-center justify-center shadow-2xl p-6 bg-white border-4 border-slate-100/90 group hover:scale-[1.02] transition-transform duration-500">
              
              {/* 5-Colored Conic Donut Ring */}
              <div 
                className="w-full h-full rounded-full shadow-inner flex items-center justify-center p-12 sm:p-16 lg:p-20"
                style={{
                  background: 'conic-gradient(#06B6D4 0deg 72deg, #F59E0B 72deg 144deg, #EF4444 144deg 216deg, #805AD5 216deg 288deg, #3182CE 288deg 360deg)',
                }}
              >
                {/* Massive Inner White Center Circle */}
                <div className="w-full h-full rounded-full bg-white shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-center text-center font-sans border-4 border-slate-100 space-y-4">
                  <span className="px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs sm:text-sm font-mono font-black uppercase tracking-widest">
                    INFOGRAPHICS ELEMENTS
                  </span>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
                    Built for Today. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                      Ready for Tomorrow.
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-semibold leading-relaxed max-w-[280px] sm:max-w-[360px]">
                    Future-proof enterprise technology foundations.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#0284C7] text-white font-black text-sm sm:text-base uppercase tracking-widest shadow-xl shadow-sky-500/30 hover:bg-sky-700 transition-all mt-3"
                  >
                    <span>Audit Specs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesScalableTechnology;
