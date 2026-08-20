import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, Tv, Shield, Hotel } from 'lucide-react';

export const ServicesIndustriesServed = () => {
  const sectors = [
    {
      step: '01',
      phase: 'SECTOR 01',
      stage: 'GOVERNMENT',
      title: 'Government & Public Sector Digitalization',
      desc: 'Digital transformation solutions for public institutions, municipal trade bureaus, document automation, and citizen service portals.',
      examples: 'Key Clients: SSGI, INSA, MInT, City Admin Trade Bureau',
      icon: Building2,
      themeBg: 'bg-[#E53E3E]',
      themeDarkBg: 'bg-[#C53030]',
      themeText: 'text-[#E53E3E]',
      themeBorder: 'border-[#E53E3E]',
      offset: 'ml-0',
    },
    {
      step: '02',
      phase: 'SECTOR 02',
      stage: 'ACADEMIC',
      title: 'Higher Education & Vocational Academics',
      desc: 'Learning management systems, campus IT networks, student management portals, and repository mentorship programs.',
      examples: 'Key Clients: AASTU, ASTU, Arsi University, Kotebe University',
      icon: GraduationCap,
      themeBg: 'bg-[#ED8936]',
      themeDarkBg: 'bg-[#DD6B20]',
      themeText: 'text-[#ED8936]',
      themeBorder: 'border-[#ED8936]',
      offset: 'ml-0 sm:ml-6 lg:ml-12',
    },
    {
      step: '03',
      phase: 'SECTOR 03',
      stage: 'FINANCIAL',
      title: 'Banking & Financial Institutions',
      desc: 'Secure enterprise ERP integration, transaction management systems, CRM portals, and financial compliance auditing.',
      examples: 'Key Clients: Bunna Bank, Commercial Partners & SMEs',
      icon: Landmark,
      themeBg: 'bg-[#48BB78]',
      themeDarkBg: 'bg-[#38A169]',
      themeText: 'text-[#48BB78]',
      themeBorder: 'border-[#48BB78]',
      offset: 'ml-0 sm:ml-12 lg:ml-24',
    },
    {
      step: '04',
      phase: 'SECTOR 04',
      stage: 'MEDIA',
      title: 'Media & Innovation Houses',
      desc: 'Tech documentary productions, innovation media platforms, storytelling, and digital content distribution networks.',
      examples: 'Key Clients: Fana Media Corporation, Balageru TV, Addis AI',
      icon: Tv,
      themeBg: 'bg-[#00A3C4]',
      themeDarkBg: 'bg-[#0987A0]',
      themeText: 'text-[#00A3C4]',
      themeBorder: 'border-[#00A3C4]',
      offset: 'ml-0 sm:ml-18 lg:ml-36',
    },
    {
      step: '05',
      phase: 'SECTOR 05',
      stage: 'SECURITY',
      title: 'Defense & National Security Infrastructures',
      desc: 'AI-integrated CCTV surveillance zones, data center maintenance, threat defense, and smart monitoring systems.',
      examples: 'Key Clients: National Security Agencies & Smart Zones',
      icon: Shield,
      themeBg: 'bg-[#3182CE]',
      themeDarkBg: 'bg-[#2B6CB0]',
      themeText: 'text-[#3182CE]',
      themeBorder: 'border-[#3182CE]',
      offset: 'ml-0 sm:ml-12 lg:ml-24',
    },
    {
      step: '06',
      phase: 'SECTOR 06',
      stage: 'ENTERPRISE',
      title: 'Hospitality & Commercial Enterprises',
      desc: 'Customized ERP, Warehouse Management Systems (WMS), Sales Force Automation (SFA), and HR software.',
      examples: 'Key Clients: 10+ Major Hotel Chains & Private Enterprises',
      icon: Hotel,
      themeBg: 'bg-[#805AD5]',
      themeDarkBg: 'bg-[#6B46C1]',
      themeText: 'text-[#805AD5]',
      themeBorder: 'border-[#805AD5]',
      offset: 'ml-0 sm:ml-6 lg:ml-12',
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
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>INDUSTRIES SERVED</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Empowering Key Sectors <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Across Africa
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Our software engineering, ERP solutions, tech bootcamps, and cybersecurity architectures serve mission-critical public and private organizations.
          </p>
        </div>

        {/* Infographic Banner Flow Container (Matching Reference Template) */}
        <div className="space-y-8 max-w-5xl">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={sec.step}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative flex items-stretch w-full max-w-3xl ${sec.offset} group`}
              >
                {/* Left Solid Number Box */}
                <div className={`w-28 sm:w-36 shrink-0 ${sec.themeBg} text-white rounded-l-3xl p-4 sm:p-6 flex flex-col justify-center items-center shadow-lg relative z-10 overflow-hidden`}>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white/90">
                    {sec.phase}
                  </span>
                  <span className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mt-1 drop-shadow-md">
                    {sec.step}
                  </span>
                </div>

                {/* Main Card Body + Top Folded Ribbon Banner */}
                <div className="flex-1 bg-white rounded-r-3xl border-2 border-slate-100/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5 sm:p-7 pt-7 relative flex flex-col justify-center gap-1.5 z-0 pr-20 sm:pr-28 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                  
                  {/* Top Folded Ribbon Banner */}
                  <div className="absolute -top-3.5 left-0 flex items-center z-20">
                    <div className={`w-2.5 h-3.5 ${sec.themeDarkBg} rounded-tl-sm clip-fold-left pointer-events-none`} />
                    <div className={`${sec.themeBg} text-white px-6 py-1 rounded-t-xl shadow-md font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5`}>
                      <span>{sec.stage}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display tracking-tight mt-1 group-hover:text-[#0284C7] transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {sec.desc}
                  </p>

                  <div className="pt-2 text-[11px] font-extrabold uppercase text-[#0284C7] tracking-wider">
                    {sec.examples}
                  </div>
                </div>

                {/* Right Protruding Double-Ring Circular Icon Badge */}
                <div className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shadow-2xl border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${sec.themeBg} flex items-center justify-center text-white shadow-inner`}>
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

export default ServicesIndustriesServed;
