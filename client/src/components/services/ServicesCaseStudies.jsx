import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Shield, Landmark, ArrowRight, Sparkles } from 'lucide-react';
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
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      title: 'E-Government & Municipal Trade Portal',
      client: 'Addis Ababa City Admin Trade Bureau',
      impact: 'Digitized business licensing, trade renewals, document archiving, and workflow automation, enabling over 100,000+ businesses to process licenses digitally.',
      icon: Landmark,
      tag: 'E-GOVERNMENT',
      metrics: '100,000+ Businesses Served',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      title: 'AI-Integrated Security & Surveillance Zone',
      client: 'Space Science Institute & INSA',
      impact: 'Deployed smart CCTV camera networks with automated motion detection, real-time analytics, and secure data center infrastructure for national research installations.',
      icon: Shield,
      tag: 'SMART SURVEILLANCE',
      metrics: '24/7 Real-Time Monitoring',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            CASE STUDIES &amp; PORTFOLIO
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Proven Results &amp; <span className="text-[#0284C7]">Real Impact</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Our portfolio reflects our engineering capability to deliver large-scale, mission-critical systems across government, enterprise, and educational institutions.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => {
            const IconComp = cs.icon;
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group bg-white p-8 rounded-[2rem] border ${cs.border} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${cs.bg} ${cs.text} border ${cs.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={26} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                      {cs.metrics}
                    </span>
                  </div>

                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${cs.text}`}>
                      {cs.tag}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">
                      {cs.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mb-3">
                      Partner: <span className="text-slate-900 font-bold">{cs.client}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {cs.impact}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Deployed &amp; Verified
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-black text-[#0284C7] hover:text-[#0077B6] flex items-center gap-1 transition-colors"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={13} />
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
