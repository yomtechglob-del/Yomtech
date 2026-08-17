import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Compass, Code, CheckCircle, Rocket, Wrench, Building2 } from 'lucide-react';

export const ServicesDevMethodology = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Analysis',
      desc: 'Understanding client needs, defining operational scope, and establishing clear project milestones.',
      icon: FileText,
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      footerRight: 'Phase 02 Architecture',
    },
    {
      num: '02',
      title: 'System Architecture',
      desc: 'Designing scalable, secure, and resilient system blueprints and cloud component interactions.',
      icon: Compass,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      footerRight: 'Phase 03 Sprints',
    },
    {
      num: '03',
      title: 'Agile Engineering',
      desc: 'Iterative sprint development with continuous client feedback, code reviews, and modular builds.',
      icon: Code,
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      footerRight: 'Phase 04 QA Audit',
    },
    {
      num: '04',
      title: 'QA & Security Testing',
      desc: 'Rigorous load testing, vulnerability scanning, and multi-device usability verification.',
      icon: CheckCircle,
      accent: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      footerRight: 'Phase 05 Deployment',
    },
    {
      num: '05',
      title: 'Smooth Deployment',
      desc: 'Zero-downtime production rollout, database migration, and staff operational onboarding.',
      icon: Rocket,
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      footerRight: 'Phase 06 24/7 SLA',
    },
    {
      num: '06',
      title: '24/7 Support & Evolution',
      desc: 'Ongoing monitoring, SLA maintenance, security updates, and continuous platform enhancements.',
      icon: Wrench,
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      footerRight: 'DevOps Maintenance',
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
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[400px] bg-indigo-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Development Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Our Structured Agile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Execution Engine
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            At YomTech Global, we follow a structured, agile-driven methodology designed to deliver high-quality, scalable, and secure digital solutions from scratch.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${step.bg} border ${step.border} ${step.accent}`}>
                      PHASE {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.accent} border ${step.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {step.num}
                  </h3>

                  <h4 className={`text-base font-extrabold ${step.accent}`}>
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>Process Phase {step.num}</span>
                  <span className={step.accent}>{step.footerRight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
