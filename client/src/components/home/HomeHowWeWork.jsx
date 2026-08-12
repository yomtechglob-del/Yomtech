import React from 'react';
import { Search, Layout, Code, CheckCircle2, TrendingUp, ArrowRight, Zap } from 'lucide-react';

export const HomeHowWeWork = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Requirements & Outcomes',
      desc: 'Understand the business, users, technical requirements, challenges, and desired outcomes.',
      icon: Search,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      num: '02',
      title: 'DESIGN',
      subtitle: 'UX & Architecture',
      desc: 'Translate requirements into clear product experiences, system structures, and technical strategies.',
      icon: Layout,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      num: '03',
      title: 'ENGINEER',
      subtitle: 'Clean Software Build',
      desc: 'Build reliable software using modern technologies, clean architecture, and scalable engineering practices.',
      icon: Code,
      gradient: 'from-sky-400 to-cyan-500',
    },
    {
      num: '04',
      title: 'VALIDATE',
      subtitle: 'Quality & Security Testing',
      desc: 'Test functionality, usability, performance, security, and technical quality before delivery.',
      icon: CheckCircle2,
      gradient: 'from-emerald-400 to-teal-600',
    },
    {
      num: '05',
      title: 'GROW',
      subtitle: 'Continuous Evolution',
      desc: 'Improve, maintain, optimize, and evolve the solution as business and technology needs change.',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-blue-600',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative isolate text-slate-700 overflow-hidden border-y border-slate-200 home-section">
      {/* Background Subtle Accent Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft Ambient Light Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none glow-layer" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none glow-layer" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-xs font-black tracking-[0.2em] uppercase shadow-xs">
            <Zap size={14} className="text-cyan-500 animate-pulse" />
            <span>ENGINEERING PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
            From Challenge to <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Working Solution.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Every successful technology project starts with deep problem discovery. Our structured workflow connects strategy, clean engineering, quality validation, and long-term evolution.
          </p>
        </div>

        {/* 5-Stage Process Pipeline */}
        <div className="relative">
          {/* Connecting Line Beam */}
          <div className="hidden lg:block absolute top-[85px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-sky-200 via-cyan-400 to-sky-200 z-0 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.4)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <div key={stage.num} className="group relative">
                  {/* Outer Multi-Gradient Border Container */}
                  <div className="p-[2px] rounded-[2.3rem] bg-gradient-to-b from-sky-300/80 via-sky-200/40 to-cyan-300/60 hover:from-[#0072B8] hover:via-[#0284C7] hover:to-[#0ED3DD] transition-all duration-500 shadow-[0_10px_35px_rgba(2,132,199,0.07)] hover:shadow-[0_22px_55px_rgba(2,132,199,0.22)] hover:-translate-y-2.5 h-full">

                    {/* Inner Pure White Glass Body */}
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2.15rem] p-7 space-y-6 h-full flex flex-col justify-between relative overflow-hidden">

                      {/* Hover Ambient Corner Light Flare */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Top Glow Accent Line */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="space-y-4 relative z-10">
                        {/* Node Circle & Step Badge */}
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#071A2B] to-[#0F2942] text-cyan-400 font-black text-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            {stage.num}
                          </div>
                          
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                            <IconComp size={22} />
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1 pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8] block">
                            STAGE {stage.num}
                          </span>
                          <h3 className="text-2xl font-black font-display text-[#071A2B] group-hover:text-[#0072B8] transition-colors leading-tight">
                            {stage.title}
                          </h3>
                          <p className="text-xs font-bold text-slate-500">
                            {stage.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>

                      {/* Bottom Progress Step */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          {idx < 4 ? `Step ${idx + 1} of 5` : 'Production Ready'}
                        </span>
                        {idx < 4 ? (
                          <ArrowRight size={16} className="text-[#0ED3DD] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                        )}
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
