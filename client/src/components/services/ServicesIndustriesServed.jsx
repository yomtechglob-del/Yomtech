import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, Tv, Shield, Hotel } from 'lucide-react';

export const ServicesIndustriesServed = () => {
  const sectors = [
    {
      num: '1',
      stageTag: 'GOVERNMENT',
      title: 'Government & Public Sector Digitalization',
      desc: 'Digital transformation solutions for public institutions, municipal trade bureaus, document automation, and citizen service portals.',
      examples: 'Key Clients: SSGI, INSA, MInT, City Admin Trade Bureau',
      icon: Building2,
      themeBg: 'bg-[#F59E0B]',
      themeDarkBg: 'bg-[#D97706]',
      themeText: 'text-[#D97706]',
      themeBorder: 'border-[#F59E0B]',
    },
    {
      num: '2',
      stageTag: 'ACADEMIC',
      title: 'Higher Education & Vocational Academics',
      desc: 'Learning management systems, campus IT networks, student management portals, and repository mentorship programs.',
      examples: 'Key Clients: AASTU, ASTU, Arsi University, Kotebe University',
      icon: GraduationCap,
      themeBg: 'bg-[#F97316]',
      themeDarkBg: 'bg-[#C2410C]',
      themeText: 'text-[#C2410C]',
      themeBorder: 'border-[#F97316]',
    },
    {
      num: '3',
      stageTag: 'FINANCIAL',
      title: 'Banking & Financial Institutions',
      desc: 'Secure enterprise ERP integration, transaction management systems, CRM portals, and financial compliance auditing.',
      examples: 'Key Clients: Bunna Bank, Commercial Partners & SMEs',
      icon: Landmark,
      themeBg: 'bg-[#E11D48]',
      themeDarkBg: 'bg-[#BE123C]',
      themeText: 'text-[#BE123C]',
      themeBorder: 'border-[#E11D48]',
    },
    {
      num: '4',
      stageTag: 'MEDIA',
      title: 'Media & Innovation Houses',
      desc: 'Tech documentary productions, innovation media platforms, storytelling, and digital content distribution networks.',
      examples: 'Key Clients: Fana Media Corporation, Balageru TV, Addis AI',
      icon: Tv,
      themeBg: 'bg-[#9333EA]',
      themeDarkBg: 'bg-[#7E22CE]',
      themeText: 'text-[#7E22CE]',
      themeBorder: 'border-[#9333EA]',
    },
    {
      num: '5',
      stageTag: 'SECURITY',
      title: 'Defense & National Security Infrastructures',
      desc: 'AI-integrated CCTV surveillance zones, data center maintenance, threat defense, and smart monitoring systems.',
      examples: 'Key Clients: National Security Agencies & Smart Zones',
      icon: Shield,
      themeBg: 'bg-[#6366F1]',
      themeDarkBg: 'bg-[#4F46E5]',
      themeText: 'text-[#4F46E5]',
      themeBorder: 'border-[#6366F1]',
    },
    {
      num: '6',
      stageTag: 'ENTERPRISE',
      title: 'Hospitality & Commercial Enterprises',
      desc: 'Customized ERP, Warehouse Management Systems (WMS), Sales Force Automation (SFA), and HR software.',
      examples: 'Key Clients: 10+ Major Hotel Chains & Private Enterprises',
      icon: Hotel,
      themeBg: 'bg-[#2563EB]',
      themeDarkBg: 'bg-[#1D4ED8]',
      themeText: 'text-[#1D4ED8]',
      themeBorder: 'border-[#2563EB]',
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
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>INDUSTRIES SERVED</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            Empowering Key Sectors <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Across Africa
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl font-sans">
            Our software engineering, ERP solutions, tech bootcamps, and cybersecurity architectures serve mission-critical public and private organizations.
          </p>
        </div>

        {/* 2-Column Grid Layout with Left Ribbon Tab + Circle Number & Right Vector Line Icon (Matching Image 2 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-[90rem] mx-auto">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={sec.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="bg-white rounded-3xl border-2 border-slate-100/90 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative flex items-stretch overflow-hidden group min-h-[160px]"
              >
                {/* Left Ribbon Tab with Embossed Circle Number */}
                <div className={`w-24 sm:w-28 shrink-0 ${sec.themeBg} text-white p-4 flex flex-col justify-center items-center relative overflow-hidden shadow-md`}>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-white/90">
                    STEP
                  </span>
                  
                  {/* Circle Badge with White Number */}
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-2xl font-mono shadow-inner border border-white/30 mt-1">
                    {sec.num}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center space-y-2 relative pr-18">
                  <span className={`text-[11px] font-mono font-black uppercase tracking-widest ${sec.themeText}`}>
                    {sec.stageTag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {sec.desc}
                  </p>

                  <div className="pt-2 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                    {sec.examples}
                  </div>
                </div>

                {/* Right Vector Line Icon */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className={`w-12 h-12 rounded-2xl ${sec.themeBg}/10 flex items-center justify-center ${sec.themeText} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-7 h-7" strokeWidth={1.8} />
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

export default ServicesIndustriesServed;
