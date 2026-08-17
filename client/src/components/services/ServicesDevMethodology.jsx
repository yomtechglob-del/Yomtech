import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Compass, Code, CheckCircle, Rocket, Wrench, Sparkles } from 'lucide-react';

export const ServicesDevMethodology = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Analysis',
      desc: 'Understanding client needs, defining operational scope, and establishing clear project milestones.',
      icon: FileText,
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      num: '02',
      title: 'System Architecture',
      desc: 'Designing scalable, secure, and resilient system blueprints and cloud component interactions.',
      icon: Compass,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      num: '03',
      title: 'Agile Engineering',
      desc: 'Iterative sprint development with continuous client feedback, code reviews, and modular builds.',
      icon: Code,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
    {
      num: '04',
      title: 'QA & Security Testing',
      desc: 'Rigorous load testing, vulnerability scanning, and multi-device usability verification.',
      icon: CheckCircle,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    {
      num: '05',
      title: 'Smooth Deployment',
      desc: 'Zero-downtime production rollout, database migration, and staff operational onboarding.',
      icon: Rocket,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    {
      num: '06',
      title: '24/7 Support & Evolution',
      desc: 'Ongoing monitoring, SLA maintenance, security updates, and continuous platform enhancements.',
      icon: Wrench,
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-white relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            DEVELOPMENT METHODOLOGY
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Our Structured <span className="text-[#0284C7]">Agile Execution</span> Engine
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            At YomTech Global, we follow a structured, agile-driven methodology designed to deliver high-quality, scalable, and secure digital solutions from scratch.
          </p>
        </div>

        {/* 6 Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className={`group relative bg-white p-8 rounded-[2rem] border ${step.border} shadow-md hover:shadow-xl transition-all duration-300 space-y-5`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.text} border ${step.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <IconComp size={26} />
                  </div>
                  <span className={`font-black text-2xl font-display ${step.text}`}>
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
