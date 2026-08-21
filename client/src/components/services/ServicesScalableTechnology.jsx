import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ShieldCheck, Layers, Wrench } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── SERVICES SCALABLE TECHNOLOGY (WATERMARK LOGO IN RIGHT BOTTOM CORNER) ─── */
export const ServicesScalableTechnology = () => {
  const principles = [
    {
      step: '01',
      optionLabel: 'Option 01',
      stage: 'Scalability',
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
      optionLabel: 'Option 02',
      stage: 'Reliability',
      title: 'Consistent High Availability & Uptime Guarantee',
      desc: 'Systems engineered for 99.9% uptime, fault tolerance, automated failover triggers, and dependable multi-region operation.',
      icon: Cpu,
      themeBg: 'bg-[#F59E0B]',
      themeText: 'text-[#D97706]',
      themeBorder: 'border-[#F59E0B]',
      themeLightBg: 'bg-amber-50',
    },
    {
      step: '03',
      optionLabel: 'Option 03',
      stage: 'Security',
      title: 'Zero-Trust Architecture & Threat Defense',
      desc: 'Role-based access control (RBAC), end-to-end data encryption at rest and in transit, vulnerability audits, and ISO compliance.',
      icon: ShieldCheck,
      themeBg: 'bg-[#0EA5E9]',
      themeText: 'text-[#0EA5E9]',
      themeBorder: 'border-[#0EA5E9]',
      themeLightBg: 'bg-sky-50',
    },
    {
      step: '04',
      optionLabel: 'Option 04',
      stage: 'Flexibility',
      title: 'Modular API Evolution & Microservices',
      desc: 'Decoupled microservice architectures and REST/GraphQL APIs built to adapt seamlessly as business priorities and technologies evolve.',
      icon: Layers,
      themeBg: 'bg-[#8B5CF6]',
      themeText: 'text-[#8B5CF6]',
      themeBorder: 'border-[#8B5CF6]',
      themeLightBg: 'bg-purple-50',
    },
    {
      step: '05',
      optionLabel: 'Option 05',
      stage: 'Maintainability',
      title: 'Structured Codebase & Long-Term Support',
      desc: 'Clean, modular, thoroughly documented engineering codebases that ensure effortless long-term maintainability and rapid onboarding.',
      icon: Wrench,
      themeBg: 'bg-[#10B981]',
      themeText: 'text-[#10B981]',
      themeBorder: 'border-[#10B981]',
      themeLightBg: 'bg-emerald-50',
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

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Scalable Technology Principles</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
        </div>

        {/* Swapped Layout: Left Cards (lg:col-span-6) + Right Multi-Colored Donut Ring Wheel (lg:col-span-6) */}
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
                  {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                  <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                    <img src={logoEmblem} alt="" className="w-24 sm:w-28 h-24 sm:h-28 object-contain" />
                  </div>

                  {/* Left Colored Accent Pillar */}
                  <div className={`w-3.5 h-full ${p.themeBg} absolute left-0 top-0 bottom-0`} />

                  {/* Main Card Content */}
                  <div className="space-y-2 pl-4 flex-1 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold tracking-wider ${p.themeText}`}>
                        {p.optionLabel}
                      </span>
                      <span className={`px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider ${p.themeLightBg} ${p.themeText} border ${p.themeBorder}`}>
                        {p.stage}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Right Circular Icon Badge */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${p.themeBg} text-white shadow-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComp size={26} strokeWidth={2.2} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Scaled-Up Multi-Colored Donut Ring Wheel Container */}
          <div className="lg:col-span-6 flex justify-center items-center py-6 sm:py-10 relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-cyan-400/25 blur-[140px] rounded-full pointer-events-none" />

            {/* Donut Wheel Outer Container */}
            <div className="relative w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[640px] lg:h-[640px] xl:w-[680px] xl:h-[680px] rounded-full flex items-center justify-center shadow-2xl p-6 bg-white border-4 border-slate-100/90 group hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
              
              {/* 5-Colored Conic Donut Ring */}
              <div 
                className="w-full h-full rounded-full shadow-inner flex items-center justify-center p-12 sm:p-16 lg:p-20"
                style={{
                  background: 'conic-gradient(#06B6D4 0deg 72deg, #F59E0B 72deg 144deg, #0EA5E9 144deg 216deg, #8B5CF6 216deg 288deg, #10B981 288deg 360deg)',
                }}
              >
                {/* Inner White Center Circle */}
                <div className="w-full h-full rounded-full bg-white shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center font-sans border-4 border-slate-100 space-y-4 relative overflow-hidden">
                  
                  {/* Translucent YomTech Brand Logo Watermark Background */}
                  <div className="absolute right-4 bottom-4 opacity-[0.16] pointer-events-none z-0">
                    <img src={logoEmblem} alt="" className="w-44 sm:w-56 h-44 sm:h-56 object-contain" />
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display relative z-10">
                    Built for Today. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                      Ready for Tomorrow.
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal leading-relaxed max-w-[280px] sm:max-w-[360px] relative z-10">
                    Future-proof enterprise technology foundations.
                  </p>
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
