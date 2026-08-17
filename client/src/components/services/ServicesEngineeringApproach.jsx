import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, RefreshCw, ArrowRight, Building2 } from 'lucide-react';

export const ServicesEngineeringApproach = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding Requirements',
      desc: 'Understand the business, users, challenges, workflows, and technical requirements.',
      icon: Search,
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
    },
    {
      num: '02',
      title: 'ARCHITECT',
      subtitle: 'System & Interface Design',
      desc: 'Design scalable systems, interfaces, integrations, and technology foundations.',
      icon: Compass,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    {
      num: '03',
      title: 'ENGINEER',
      subtitle: 'Software & Solution Build',
      desc: 'Build reliable software and technology solutions using modern engineering practices.',
      icon: Code,
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    {
      num: '04',
      title: 'EVOLVE',
      subtitle: 'Continuous Optimization',
      desc: 'Improve, optimize, secure, and scale solutions as business requirements grow.',
      icon: RefreshCw,
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture — exact About Us pattern */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header — Left Aligned (About Us exact) */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Engineering Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            How We Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Technology
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Every YomTech Global solution begins with understanding the problem, designing the right architecture, and engineering technology around measurable real-world needs.
          </p>
        </div>

        {/* 4 Stage Cards — About Us gradient card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${stage.bg} ${stage.border} ${stage.accent} border`}>
                      STAGE {stage.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${stage.bg} ${stage.accent} border ${stage.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {stage.title}
                  </h3>

                  <h4 className={`text-sm font-extrabold ${stage.accent}`}>
                    {stage.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>{idx < 3 ? `Step ${idx + 1} of 4` : 'Continuous Growth'}</span>
                  {idx < 3 && (
                    <ArrowRight size={14} className="text-[#0284C7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
