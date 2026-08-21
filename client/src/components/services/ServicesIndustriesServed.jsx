import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, Tv, Shield, Hotel } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── SERVICES INDUSTRIES SERVED (WITH LOGO WATERMARK BACKGROUNDS) ─── */
export const ServicesIndustriesServed = () => {
  const sectors = [
    {
      num: '1',
      stageTag: 'Government',
      title: 'Government & Public Sector Digitalization',
      desc: 'Digital transformation solutions for public institutions, municipal trade bureaus, document automation, and citizen service portals.',
      examples: 'Key Clients: SSGI, INSA, MInT, City Admin Trade Bureau',
      icon: Building2,
      themeBg: 'bg-[#0EA5E9]',
      themeDarkBg: 'bg-[#0284C7]',
      themeText: 'text-[#0EA5E9]',
      themeBorder: 'border-[#0EA5E9]',
      iconShadow: 'shadow-sky-500/25',
    },
    {
      num: '2',
      stageTag: 'Academic',
      title: 'Higher Education & Vocational Academics',
      desc: 'Learning management systems, campus IT networks, student management portals, and repository mentorship programs.',
      examples: 'Key Clients: AASTU, ASTU, Arsi University, Kotebe University',
      icon: GraduationCap,
      themeBg: 'bg-[#0284C7]',
      themeDarkBg: 'bg-[#0369A1]',
      themeText: 'text-[#0284C7]',
      themeBorder: 'border-[#0284C7]',
      iconShadow: 'shadow-blue-500/25',
    },
    {
      num: '3',
      stageTag: 'Financial',
      title: 'Banking & Financial Institutions',
      desc: 'Secure enterprise ERP integration, transaction management systems, CRM portals, and financial compliance auditing.',
      examples: 'Key Clients: Bunna Bank, Commercial Partners & SMEs',
      icon: Landmark,
      themeBg: 'bg-[#06B6D4]',
      themeDarkBg: 'bg-[#0891B2]',
      themeText: 'text-[#06B6D4]',
      themeBorder: 'border-[#06B6D4]',
      iconShadow: 'shadow-cyan-500/25',
    },
    {
      num: '4',
      stageTag: 'Media',
      title: 'Media & Innovation Houses',
      desc: 'Tech documentary productions, innovation media platforms, storytelling, and digital content distribution networks.',
      examples: 'Key Clients: Fana Media Corporation, Balageru TV, Addis AI',
      icon: Tv,
      themeBg: 'bg-[#F59E0B]',
      themeDarkBg: 'bg-[#D97706]',
      themeText: 'text-[#D97706]',
      themeBorder: 'border-[#F59E0B]',
      iconShadow: 'shadow-amber-500/25',
    },
    {
      num: '5',
      stageTag: 'Security',
      title: 'Defense & National Security Infrastructures',
      desc: 'AI-integrated CCTV surveillance zones, data center maintenance, threat defense, and smart monitoring systems.',
      examples: 'Key Clients: National Security Agencies & Smart Zones',
      icon: Shield,
      themeBg: 'bg-[#8B5CF6]',
      themeDarkBg: 'bg-[#7C3AED]',
      themeText: 'text-[#8B5CF6]',
      themeBorder: 'border-[#8B5CF6]',
      iconShadow: 'shadow-purple-500/25',
    },
    {
      num: '6',
      stageTag: 'Enterprise',
      title: 'Hospitality & Commercial Enterprises',
      desc: 'Customized ERP, Warehouse Management Systems (WMS), Sales Force Automation (SFA), and HR software.',
      examples: 'Key Clients: 10+ Major Hotel Chains & Private Enterprises',
      icon: Hotel,
      themeBg: 'bg-[#10B981]',
      themeDarkBg: 'bg-[#059669]',
      themeText: 'text-[#10B981]',
      themeBorder: 'border-[#10B981]',
      iconShadow: 'shadow-emerald-500/25',
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

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Industries Served</span>
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

        {/* 2-Column Grid Layout with Logo Watermark Backgrounds */}
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
                className="bg-white rounded-3xl border-2 border-slate-100/90 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative flex items-center justify-between overflow-hidden group min-h-[160px]"
              >
                {/* Translucent YomTech Brand Logo Watermark Background */}
                <div className="absolute right-20 -bottom-6 opacity-[0.10] pointer-events-none z-0">
                  <img src={logoEmblem} alt="" className="w-48 h-48 object-contain" />
                </div>

                {/* Left Ribbon Tab with Embossed Circle Number */}
                <div className={`w-24 sm:w-28 self-stretch shrink-0 ${sec.themeBg} text-white p-4 flex flex-col justify-center items-center relative overflow-hidden shadow-md z-10`}>
                  <span className="text-xs font-mono font-bold tracking-widest text-white/90">
                    Step
                  </span>
                  
                  {/* Circle Badge with White Number */}
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-2xl font-mono shadow-inner border border-white/30 mt-1">
                    {sec.num}
                  </div>
                </div>

                {/* Middle Card Body */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center space-y-2 text-left relative z-10">
                  <span className={`text-xs font-mono font-bold tracking-wider ${sec.themeText}`}>
                    {sec.stageTag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {sec.desc}
                  </p>

                  <div className="pt-2 text-[11px] font-bold text-slate-400 tracking-wider">
                    {sec.examples}
                  </div>
                </div>

                {/* Right Solid Vibrant Brand-Colored Icon Box */}
                <div className="pr-6 sm:pr-8 shrink-0 flex items-center justify-center relative z-10">
                  <div className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl ${sec.themeBg} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${sec.iconShadow} border border-white/30`}>
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.2} />
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
