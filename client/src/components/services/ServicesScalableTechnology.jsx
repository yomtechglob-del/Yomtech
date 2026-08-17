import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Cpu, Layers, Wrench, Sparkles } from 'lucide-react';

export const ServicesScalableTechnology = () => {
  const principles = [
    {
      num: '01',
      title: 'SCALABILITY',
      subtitle: 'Growth-Ready Infrastructure',
      desc: 'Technology foundations designed to support growing user loads and data volumes.',
      icon: TrendingUp,
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      num: '02',
      title: 'RELIABILITY',
      subtitle: 'Consistent High Availability',
      desc: 'Systems engineered for 99.9% uptime, fault tolerance, and dependable operation.',
      icon: Cpu,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      num: '03',
      title: 'SECURITY',
      subtitle: 'Zero-Trust Architecture',
      desc: 'Role-based access control, data encryption at rest/transit, and cybersecurity compliance.',
      icon: ShieldCheck,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
    {
      num: '04',
      title: 'FLEXIBILITY',
      subtitle: 'Modular API Evolution',
      desc: 'Microservice architectures built to adapt seamlessly as business priorities evolve.',
      icon: Layers,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    {
      num: '05',
      title: 'MAINTAINABILITY',
      subtitle: 'Structured Codebase',
      desc: 'Clean, documented engineering codebases supporting long-term maintenance.',
      icon: Wrench,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            SCALABLE TECHNOLOGY
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Built for Today. <span className="text-[#0284C7]">Ready for Tomorrow.</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            We engineer technology with future growth in mind, creating foundations that can adapt to changing users, business requirements, and emerging digital opportunities.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group bg-white p-8 rounded-[2rem] border ${p.border} shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${p.bg} ${p.text} border ${p.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={26} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${p.bg} ${p.text} border ${p.border}`}>
                      PRINCIPLE 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-[#0284C7] transition-colors">
                      {p.title}
                    </h3>
                    <div className={`text-xs font-black uppercase tracking-widest mb-3 ${p.text}`}>
                      {p.subtitle}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {p.desc}
                    </p>
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
