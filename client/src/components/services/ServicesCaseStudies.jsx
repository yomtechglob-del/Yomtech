import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── SERVICES CASE STUDIES & PORTFOLIO (WATERMARK LOGO IN RIGHT BOTTOM CORNER) ─── */
export const ServicesCaseStudies = () => {
  const caseStudies = [
    {
      step: '01',
      optionLabel: 'Option',
      stage: 'Enterprise ERP',
      title: 'Pan-African Enterprise ERP Rollout',
      client: 'Partner: Public Sector & Industrial Enterprises',
      impact: 'Integrated 12+ operational departments (Finance, HR, WMS, SFA, Gate Security) into a single centralized Yomnex ERP platform, eliminating data silos and reducing approval times by 65%.',
      icon: Building2,
      metrics: '65% Faster Approvals',
      numColor: 'text-[#0EA5E9]',
      iconBg: 'bg-white text-[#0EA5E9]',
      gradientBg: 'bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#0369A1]',
    },
    {
      step: '02',
      optionLabel: 'Option',
      stage: 'E-Government',
      title: 'E-Government & Municipal Trade Portal',
      client: 'Partner: Addis Ababa City Admin Trade Bureau',
      impact: 'Digitized business licensing, trade renewals, document archiving, and workflow automation, enabling over 100,000+ businesses to process licenses digitally.',
      icon: Landmark,
      metrics: '100,000+ Businesses Served',
      numColor: 'text-[#06B6D4]',
      iconBg: 'bg-white text-[#06B6D4]',
      gradientBg: 'bg-gradient-to-r from-[#06B6D4] via-[#0891B2] to-[#0E7490]',
    },
    {
      step: '03',
      optionLabel: 'Option',
      stage: 'Surveillance',
      title: 'AI-Integrated Security & Surveillance Zone',
      client: 'Partner: Space Science Institute & INSA',
      impact: 'Deployed smart CCTV camera networks with automated motion detection, real-time analytics, and secure data center infrastructure for national research installations.',
      icon: Shield,
      metrics: '24/7 Real-Time Monitoring',
      numColor: 'text-[#8B5CF6]',
      iconBg: 'bg-white text-[#8B5CF6]',
      gradientBg: 'bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]',
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12 lg:space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Case Studies &amp; Portfolio</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
        </div>

        {/* Split Layout: Left Scaled 45-Degree Diamond Info Box + Right Stacked Swallowtail Ribbon Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-[94rem] mx-auto">
          
          {/* ── MOBILE: Flat card (no rotation, no clipping) ── */}
          <div className="sm:hidden w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-6 space-y-5 relative overflow-hidden">
            {/* Logo watermark */}
            <div className="absolute right-3 bottom-3 opacity-[0.12] pointer-events-none">
              <img src={logoEmblem} alt="" className="w-24 h-24 object-contain" />
            </div>

            <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-mono font-bold inline-block">
              Portfolio Impact
            </span>

            <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Proven Results &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                Real Impact
              </span>
            </h2>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Our portfolio reflects our engineering capability to deliver large-scale, mission-critical systems across public and private sectors.
            </p>

            {/* KPI stats */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-center">
              <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200">
                <p className="text-xl font-black text-[#0EA5E9] font-mono">65%</p>
                <p className="text-[10px] font-bold text-slate-500">Faster Approval</p>
              </div>
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200">
                <p className="text-xl font-black text-[#06B6D4] font-mono">100K+</p>
                <p className="text-[10px] font-bold text-slate-500">Licenses</p>
              </div>
              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                <p className="text-xl font-black text-[#8B5CF6] font-mono">24/7</p>
                <p className="text-[10px] font-bold text-slate-500">SLA Audits</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0284C7] text-white font-bold text-xs tracking-wider shadow-xl shadow-sky-500/30 hover:bg-sky-700 transition-all"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── SM+: Rotated Diamond Card ── */}
          <div className="hidden sm:flex lg:col-span-5 justify-center items-center py-6 sm:py-12 relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Scaled Rotated 45-Degree White Diamond Base Frame */}
            <div className="w-[440px] h-[440px] lg:w-[560px] lg:h-[560px] rounded-[4rem] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.14)] border-4 border-slate-100/90 rotate-45 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              
              {/* Translucent YomTech Brand Logo Watermark Background */}
              <div className="absolute right-4 bottom-4 opacity-[0.20] pointer-events-none z-0">
                <img src={logoEmblem} alt="" className="w-56 sm:w-72 h-56 sm:h-72 object-contain" />
              </div>

              {/* Scaled Inner Counter-Rotated Content (-45 Deg) */}
              <div className="-rotate-45 w-[360px] lg:w-[450px] p-8 lg:p-10 space-y-5 text-left font-sans relative z-10">
                <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-mono font-bold inline-block">
                  Portfolio Impact
                </span>

                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
                  Proven Results &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                    Real Impact
                  </span>
                </h2>

                <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  Our portfolio reflects our engineering capability to deliver large-scale, mission-critical systems across public and private sectors.
                </p>

                {/* Scaled Key Performance Indicators */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-center">
                  <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200">
                    <p className="text-xl sm:text-2xl font-black text-[#0EA5E9] font-mono">65%</p>
                    <p className="text-[10px] font-bold text-slate-500">Faster Approval</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200">
                    <p className="text-xl sm:text-2xl font-black text-[#06B6D4] font-mono">100K+</p>
                    <p className="text-[10px] font-bold text-slate-500">Licenses</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                    <p className="text-xl sm:text-2xl font-black text-[#8B5CF6] font-mono">24/7</p>
                    <p className="text-[10px] font-bold text-slate-500">SLA Audits</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs sm:text-sm tracking-wider shadow-xl shadow-sky-500/30 hover:bg-sky-700 transition-all mt-2"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>


          {/* Right Stacked Metallic Swallowtail Ribbon Banner Cards with Black "V" Notch Cutout */}
          <div className="lg:col-span-7 space-y-6">
            {caseStudies.map((cs, idx) => {
              const IconComp = cs.icon;

              return (
                <motion.div
                  key={cs.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-stretch rounded-3xl shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden bg-[#0A0F1D] border border-slate-800"
                >
                  {/* Left White Number Box + 3D Shadow Fold Line */}
                  <div className="w-16 sm:w-24 md:w-32 shrink-0 bg-white p-3 sm:p-5 md:p-7 flex flex-col justify-center items-center border-r-4 border-slate-200/80 shadow-[4px_0_15px_rgba(0,0,0,0.08)] z-10">
                    <span className={`text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight ${cs.numColor} leading-none`}>
                      {cs.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider mt-1">
                      {cs.optionLabel}
                    </span>
                  </div>

                  {/* Right Vibrant Swallowtail Ribbon Banner Body */}
                  <div 
                    className={`flex-1 ${cs.gradientBg} text-white p-4 sm:p-6 md:p-8 pr-8 sm:pr-12 relative flex flex-col justify-center space-y-2 z-0 overflow-hidden`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%)' }}
                  >
                    {/* Translucent YomTech Brand Logo Watermark Background at Right-Bottom Corner */}
                    <div className="absolute right-10 bottom-1 opacity-[0.20] pointer-events-none z-0">
                      <img src={logoEmblem} alt="" className="w-32 sm:w-40 h-32 sm:h-40 object-contain brightness-200" />
                    </div>

                    {/* Vibrant Light Sheen Top Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

                    {/* Top Row: Icon Badge + Stage Pill + Metrics Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pr-6 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl ${cs.iconBg} flex items-center justify-center shadow-md shrink-0 border border-white/60`}>
                          <IconComp size={18} strokeWidth={2.4} />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/25 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider border border-white/40">
                          {cs.stage}
                        </span>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-[11px] font-bold tracking-wider shadow-md">
                        ⚡ {cs.metrics}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight leading-snug drop-shadow-sm relative z-10">
                      {cs.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed max-w-xl relative z-10">
                      {cs.impact}
                    </p>

                    <div className="text-[11px] font-bold text-white/90 tracking-wider pt-1 relative z-10">
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
