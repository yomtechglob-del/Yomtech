import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Shield, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesCaseStudies = () => {
  const caseStudies = [
    {
      title: 'Pan-African Enterprise ERP Rollout',
      client: 'Public Sector & Industrial Enterprises',
      impact: 'Integrated 12+ operational departments (Finance, HR, WMS, SFA, Gate Security) into a single centralized Yomnex ERP platform, eliminating data silos and reducing approval times by 65%.',
      icon: Building2,
      tag: 'ENTERPRISE ERP',
      metrics: '65% Faster Approvals',
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      footerRight: 'Government SLAs',
    },
    {
      title: 'E-Government & Municipal Trade Portal',
      client: 'Addis Ababa City Admin Trade Bureau',
      impact: 'Digitized business licensing, trade renewals, document archiving, and workflow automation, enabling over 100,000+ businesses to process licenses digitally.',
      icon: Landmark,
      tag: 'E-GOVERNMENT',
      metrics: '100,000+ Businesses Served',
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      footerRight: 'Public Sector Impact',
    },
    {
      title: 'AI-Integrated Security & Surveillance Zone',
      client: 'Space Science Institute & INSA',
      impact: 'Deployed smart CCTV camera networks with automated motion detection, real-time analytics, and secure data center infrastructure for national research installations.',
      icon: Shield,
      tag: 'SMART SURVEILLANCE',
      metrics: '24/7 Real-Time Monitoring',
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      footerRight: 'National Security',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Case Studies & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Proven Results & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Real Impact
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Our portfolio reflects our engineering capability to deliver large-scale, mission-critical systems across government, enterprise, and educational institutions.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => {
            const IconComp = cs.icon;
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${cs.bg} border ${cs.border} ${cs.accent}`}>
                      {cs.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      {cs.metrics}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${cs.bg} ${cs.accent} border ${cs.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <IconComp size={22} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {cs.title}
                  </h3>

                  <h4 className={`text-xs font-extrabold ${cs.accent}`}>
                    Partner: {cs.client}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {cs.impact}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Deployed & Verified
                  </span>
                  <Link
                    to="/contact"
                    className={`flex items-center gap-1 ${cs.accent} hover:opacity-80 transition-opacity`}
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
