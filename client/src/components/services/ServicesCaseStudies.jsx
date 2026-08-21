import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesCaseStudies = () => {
  const caseStudies = [
    {
      step: '01',
      optionLabel: 'OPTION',
      stage: 'ENTERPRISE ERP',
      title: 'Pan-African Enterprise ERP Rollout',
      client: 'Partner: Public Sector & Industrial Enterprises',
      impact: 'Integrated 12+ operational departments (Finance, HR, WMS, SFA, Gate Security) into a single centralized Yomnex ERP platform, eliminating data silos and reducing approval times by 65%.',
      icon: Building2,
      metrics: '65% Faster Approvals',
      numColor: 'text-[#D97706]',
      gradientBg: 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309]',
    },
    {
      step: '02',
      optionLabel: 'OPTION',
      stage: 'E-GOVERNMENT',
      title: 'E-Government & Municipal Trade Portal',
      client: 'Partner: Addis Ababa City Admin Trade Bureau',
      impact: 'Digitized business licensing, trade renewals, document archiving, and workflow automation, enabling over 100,000+ businesses to process licenses digitally.',
      icon: Landmark,
      metrics: '100,000+ Businesses Served',
      numColor: 'text-[#0284C7]',
      gradientBg: 'bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1]',
    },
    {
      step: '03',
      optionLabel: 'OPTION',
      stage: 'SURVEILLANCE',
      title: 'AI-Integrated Security & Surveillance Zone',
      client: 'Partner: Space Science Institute & INSA',
      impact: 'Deployed smart CCTV camera networks with automated motion detection, real-time analytics, and secure data center infrastructure for national research installations.',
      icon: Shield,
      metrics: '24/7 Real-Time Monitoring',
      numColor: 'text-[#65A30D]',
      gradientBg: 'bg-gradient-to-r from-[#84CC16] via-[#65A30D] to-[#4D7C0F]',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>CASE STUDIES & PORTFOLIO</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
        </div>

        {/* Split Layout: Left 45-Degree Diamond Info Box + Right Stacked Swallowtail Ribbon Banners (Exact Reference Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-[94rem] mx-auto">
          
          {/* Left 45-Degree Rotated 3D Diamond Card Container */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 sm:py-10 relative">
            <div className="absolute inset-0 bg-cyan-400/15 blur-[100px] rounded-full pointer-events-none" />

            {/* Rotated 45-Degree White Diamond Base Frame */}
            <div className="w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] rounded-[3.5rem] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-4 border-slate-100/90 rotate-45 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              
              {/* Inner Counter-Rotated Content (-45 Deg) */}
              <div className="-rotate-45 w-[320px] sm:w-[390px] p-6 sm:p-8 space-y-4 text-left font-sans">
                <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[11px] font-mono font-black uppercase tracking-widest inline-block">
                  PORTFOLIO IMPACT
                </span>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight font-display">
                  Proven Results & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                    Real Impact
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Our portfolio reflects our engineering capability to deliver large-scale, mission-critical systems across public and private sectors.
                </p>

                {/* Key Performance Indicators */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-lg font-black text-[#D97706] font-mono">65%</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">Faster Approval</p>
                  </div>
                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-200">
                    <p className="text-lg font-black text-[#0284C7] font-mono">100K+</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">Licenses</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-lg font-black text-[#65A30D] font-mono">24/7</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">SLA Audits</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0284C7] text-white font-black text-[11px] uppercase tracking-widest shadow-lg shadow-sky-500/25 hover:bg-sky-700 transition-all mt-1"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          </div>

          {/* Right Stacked Metallic Swallowtail Ribbon Banner Cards */}
          <div className="lg:col-span-7 space-y-6">
            {caseStudies.map((cs, idx) => {
              return (
                <motion.div
                  key={cs.step}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-stretch rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden bg-white border border-slate-100/90"
                >
                  {/* Left White Number Box + 3D Shadow Fold Line */}
                  <div className="w-24 sm:w-32 shrink-0 bg-white p-5 sm:p-7 flex flex-col justify-center items-center border-r-4 border-slate-200/80 shadow-[4px_0_15px_rgba(0,0,0,0.08)] z-10">
                    <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${cs.numColor} leading-none`}>
                      {cs.step}
                    </span>
                    <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-widest mt-1">
                      {cs.optionLabel}
                    </span>
                  </div>

                  {/* Right Gradient Swallowtail Ribbon Banner Body */}
                  <div 
                    className={`flex-1 ${cs.gradientBg} text-white p-6 sm:p-8 pr-12 relative flex flex-col justify-center space-y-2 z-0 overflow-hidden`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%)' }}
                  >
                    {/* Metallic 3D Highlight Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/15 pointer-events-none" />

                    <div className="flex flex-wrap items-center justify-between gap-2 pr-6 relative z-10">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-black uppercase tracking-widest border border-white/30">
                        {cs.stage}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-[10px] font-black uppercase tracking-wider shadow-sm">
                        ⚡ {cs.metrics}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-black text-white font-display tracking-tight leading-snug drop-shadow-md relative z-10">
                      {cs.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed max-w-xl relative z-10">
                      {cs.impact}
                    </p>

                    <div className="text-[11px] font-extrabold uppercase text-white/80 tracking-wider pt-1 relative z-10">
                      {cs.client}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesCaseStudies;
