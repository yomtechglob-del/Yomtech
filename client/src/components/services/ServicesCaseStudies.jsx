import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Shield, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesCaseStudies = () => {
  const caseStudies = [
    {
      step: '01',
      phase: 'PROJECT 01',
      stage: 'ENTERPRISE ERP',
      title: 'Pan-African Enterprise ERP Rollout',
      client: 'Partner: Public Sector & Industrial Enterprises',
      impact: 'Integrated 12+ operational departments (Finance, HR, WMS, SFA, Gate Security) into a single centralized Yomnex ERP platform, eliminating data silos and reducing approval times by 65%.',
      icon: Building2,
      metrics: '65% Faster Approvals',
      themeBg: 'bg-[#E53E3E]',
      themeDarkBg: 'bg-[#C53030]',
      themeText: 'text-[#E53E3E]',
      themeBorder: 'border-[#E53E3E]',
      offset: 'ml-0',
    },
    {
      step: '02',
      phase: 'PROJECT 02',
      stage: 'E-GOVERNMENT',
      title: 'E-Government & Municipal Trade Portal',
      client: 'Partner: Addis Ababa City Admin Trade Bureau',
      impact: 'Digitized business licensing, trade renewals, document archiving, and workflow automation, enabling over 100,000+ businesses to process licenses digitally.',
      icon: Landmark,
      metrics: '100,000+ Businesses Served',
      themeBg: 'bg-[#ED8936]',
      themeDarkBg: 'bg-[#DD6B20]',
      themeText: 'text-[#ED8936]',
      themeBorder: 'border-[#ED8936]',
      offset: 'ml-0 sm:ml-6 lg:ml-16',
    },
    {
      step: '03',
      phase: 'PROJECT 03',
      stage: 'SURVEILLANCE',
      title: 'AI-Integrated Security & Surveillance Zone',
      client: 'Partner: Space Science Institute & INSA',
      impact: 'Deployed smart CCTV camera networks with automated motion detection, real-time analytics, and secure data center infrastructure for national research installations.',
      icon: Shield,
      metrics: '24/7 Real-Time Monitoring',
      themeBg: 'bg-[#48BB78]',
      themeDarkBg: 'bg-[#38A169]',
      themeText: 'text-[#48BB78]',
      themeBorder: 'border-[#48BB78]',
      offset: 'ml-0 sm:ml-12 lg:ml-32',
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
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>CASE STUDIES & PORTFOLIO</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
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

        {/* Infographic Banner Flow Container (Matching Reference Template) */}
        <div className="space-y-8 max-w-5xl">
          {caseStudies.map((cs, idx) => {
            const IconComp = cs.icon;
            return (
              <motion.div
                key={cs.step}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative flex items-stretch w-full max-w-3xl ${cs.offset} group`}
              >
                {/* Left Solid Number Box */}
                <div className={`w-28 sm:w-36 shrink-0 ${cs.themeBg} text-white rounded-l-3xl p-4 sm:p-6 flex flex-col justify-center items-center shadow-lg relative z-10 overflow-hidden`}>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white/90">
                    {cs.phase}
                  </span>
                  <span className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mt-1 drop-shadow-md">
                    {cs.step}
                  </span>
                </div>

                {/* Main Card Body + Top Folded Ribbon Banner */}
                <div className="flex-1 bg-white rounded-r-3xl border-2 border-slate-100/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5 sm:p-7 pt-7 relative flex flex-col justify-center gap-1.5 z-0 pr-20 sm:pr-28 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                  
                  {/* Top Folded Ribbon Banner */}
                  <div className="absolute -top-3.5 left-0 flex items-center justify-between w-full pr-8 z-20 pointer-events-none">
                    <div className="flex items-center">
                      <div className={`w-2.5 h-3.5 ${cs.themeDarkBg} rounded-tl-sm clip-fold-left pointer-events-none`} />
                      <div className={`${cs.themeBg} text-white px-6 py-1 rounded-t-xl shadow-md font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5`}>
                        <span>{cs.stage}</span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase shadow-xs pointer-events-auto">
                      ⚡ {cs.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display tracking-tight mt-2 group-hover:text-[#0284C7] transition-colors">
                    {cs.title}
                  </h3>

                  <div className="text-xs font-black uppercase tracking-wider text-[#0284C7]">
                    {cs.client}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {cs.impact}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-black">
                      <CheckCircle2 size={14} />
                      Deployed & Verified SLA
                    </span>
                    <Link
                      to="/contact"
                      className="flex items-center gap-1 text-[#0284C7] font-black hover:underline"
                    >
                      <span>Request Case Study Demo</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Right Protruding Double-Ring Circular Icon Badge */}
                <div className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shadow-2xl border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${cs.themeBg} flex items-center justify-center text-white shadow-inner`}>
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.2} />
                    </div>
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

export default ServicesCaseStudies;
