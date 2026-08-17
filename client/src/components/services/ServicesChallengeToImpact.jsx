import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Compass, Cpu, TrendingUp, ArrowRight, Building2 } from 'lucide-react';

export const ServicesChallengeToImpact = () => {
  const transformation = [
    {
      step: '01',
      stage: 'CHALLENGE',
      title: 'Problem Identification',
      desc: 'Identify operational bottlenecks, fragmented systems, and technical challenges across client workflows.',
      icon: AlertCircle,
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
    {
      step: '02',
      stage: 'STRATEGY',
      title: 'Strategic Architecture',
      desc: 'Translate organizational requirements into a clear software architecture and digital roadmap.',
      icon: Compass,
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
    },
    {
      step: '03',
      stage: 'SOLUTION',
      title: 'Engineering Build',
      desc: 'Build customized software, Yomnex ERP modules, and AI surveillance systems from scratch.',
      icon: Cpu,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    {
      step: '04',
      stage: 'IMPACT',
      title: 'Sustainable Growth',
      desc: 'Enable automated workflows, operational clarity, capacity building, and long-term digital growth.',
      icon: TrendingUp,
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            From Complex Challenges to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Practical Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Technology creates value when it solves real problems. YomTech Global connects business challenges with software engineering, digital platforms, and practical tech talent.
          </p>
        </div>

        {/* 4 Transformation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformation.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${item.bg} ${item.border} ${item.accent} border`}>
                      {item.stage}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.accent} border ${item.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>

                  <h4 className={`text-sm font-extrabold ${item.accent}`}>
                    PHASE {item.step}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>{idx < 3 ? `Phase ${idx + 1} of 4` : 'Measurable Impact'}</span>
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
