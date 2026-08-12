import React from 'react';
import { BookOpen, Lightbulb, Cpu, Globe, ArrowRight, Compass } from 'lucide-react';

export const HomeBuiltForTheFuture = () => {
  const pillars = [
    {
      num: '01',
      title: 'CONTINUOUS LEARNING',
      subtitle: 'Skills & Foundation',
      desc: 'Technology professionals must continuously expand knowledge, experiment with tools, and strengthen engineering foundations.',
      icon: BookOpen,
      gradient: 'from-[#0072B8] to-[#0ED3DD]',
    },
    {
      num: '02',
      title: 'PRACTICAL INNOVATION',
      subtitle: 'Real-World Execution',
      desc: 'Ideas become valuable when transformed into useful products, working systems, and solutions to real-world challenges.',
      icon: Lightbulb,
      gradient: 'from-sky-500 to-cyan-500',
    },
    {
      num: '03',
      title: 'SCALABLE ENGINEERING',
      subtitle: 'Architecture & Security',
      desc: 'Strong architecture, maintainable code, secure systems, and thoughtful engineering create foundations built to scale.',
      icon: Cpu,
      gradient: 'from-blue-600 to-indigo-500',
    },
    {
      num: '04',
      title: 'GLOBAL CONNECTION',
      subtitle: 'Partnerships & Ecosystem',
      desc: 'Technology creates opportunities to connect businesses, engineers, learners, and partners beyond geographic boundaries.',
      icon: Globe,
      gradient: 'from-purple-600 to-blue-600',
    },
  ];

  const timelineSteps = ['TODAY', 'LEARN', 'BUILD', 'IMPROVE', 'TOMORROW'];

  return (
    <section className="home-section py-24 sm:py-32 w-full bg-gradient-to-b from-[#F0F7FF] via-[#E6F3FF] to-[#F0F7FF] relative isolate text-slate-700 overflow-hidden border-t border-sky-200/80">
      {/* Subtle Light Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Luminous Soft Sky Blue Flares */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[400px] bg-sky-200/50 rounded-full blur-[140px] pointer-events-none glow-layer" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[350px] bg-cyan-200/50 rounded-full blur-[130px] pointer-events-none glow-layer" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-sky-300/80 text-[#0072B8] text-xs font-black tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
            <Compass size={14} className="text-[#0ED3DD] animate-pulse" />
            <span>THE FUTURE OF TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-[#071A2B] tracking-tight leading-tight">
            Building for <br />
            <span className="bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent">
              What Comes Next.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Technology evolves rapidly. YomTech Global connects continuous learning, practical engineering, and scalable architecture so today's software can adapt to tomorrow's opportunities.
          </p>
        </div>

        {/* Future Timeline Progression Bar */}
        <div className="max-w-4xl mx-auto py-4">
          <div className="bg-white/95 backdrop-blur-xl border border-sky-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_8px_30px_rgba(7,26,43,0.04)]">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${idx === 4 ? 'bg-[#0ED3DD] shadow-[0_0_10px_#0ED3DD]' : 'bg-[#0072B8]'}`} />
                  <span className={`text-xs font-black tracking-widest ${idx === 4 ? 'text-[#0072B8] font-display' : 'text-slate-600'}`}>
                    {step}
                  </span>
                </div>
                {idx < 4 && (
                  <ArrowRight size={16} className="hidden md:block text-[#0072B8] opacity-60" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Future Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div key={p.num} className="group relative">
                {/* Outer Multi-Gradient Border Container */}
                <div className="p-[2px] rounded-[2.3rem] bg-gradient-to-b from-sky-300/80 via-sky-200/40 to-cyan-300/60 hover:from-[#0072B8] hover:via-[#0284C7] hover:to-[#0ED3DD] transition-all duration-500 shadow-[0_10px_35px_rgba(2,132,199,0.07)] hover:shadow-[0_22px_55px_rgba(2,132,199,0.22)] hover:-translate-y-2.5 h-full">

                  {/* Inner Pure White Glass Body */}
                  <div className="bg-white/95 backdrop-blur-2xl rounded-[2.15rem] p-8 space-y-6 h-full flex flex-col justify-between relative overflow-hidden text-slate-700">

                    {/* Hover Ambient Corner Light Flare */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top Glowing Beam Accent */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0072B8] via-[#0284C7] to-[#0ED3DD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 text-[#0072B8] border border-sky-200/80 shadow-xs">
                          PILLAR {p.num}
                        </span>
                        
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                          <IconComp size={22} />
                        </div>
                      </div>

                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] block">
                          {p.subtitle}
                        </span>
                        <h3 className="text-2xl font-black font-display text-[#071A2B] group-hover:text-[#0072B8] transition-colors leading-tight">
                          {p.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                        Future Strategy
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] shadow-[0_0_8px_#0ED3DD]" />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
