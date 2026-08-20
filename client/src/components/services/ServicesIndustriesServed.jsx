import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, Tv, Shield, Hotel } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

export const ServicesIndustriesServed = () => {
  const sectors = [
    {
      title: 'Government & Public Sector',
      subtitle: 'E-Government & Municipalities',
      desc: 'Digital transformation solutions for public institutions, municipal trade bureaus, document automation, and citizen service portals.',
      icon: Building2,
      examples: 'SSGI, INSA, MInT, City Admin Trade Bureau',
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      badge: 'GOVERNMENT',
      footerRight: 'Public Sector',
    },
    {
      title: 'Higher Education & Academics',
      subtitle: 'Universities & Vocational Centers',
      desc: 'Learning management systems, campus IT networks, student portals, and repository mentorship programs.',
      icon: GraduationCap,
      examples: 'AASTU, ASTU, Arsi University, Kotebe University',
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      badge: 'ACADEMIC',
      footerRight: 'University Partners',
    },
    {
      title: 'Banking & Financial Services',
      subtitle: 'Banks & Financial Institutions',
      desc: 'Secure enterprise ERP integration, transaction management systems, CRM portals, and financial compliance auditing.',
      icon: Landmark,
      examples: 'Bunna Bank, Commercial Partners & SMEs',
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      badge: 'FINANCIAL',
      footerRight: 'Financial Sector',
    },
    {
      title: 'Media & Innovation Houses',
      subtitle: 'Broadcasting & Tech Media',
      desc: 'Tech documentary productions, innovation media platforms, storytelling, and digital content distribution networks.',
      icon: Tv,
      examples: 'Fana Media Corporation, Balageru TV, Addis AI',
      accent: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      badge: 'MEDIA',
      footerRight: 'Media Networks',
    },
    {
      title: 'Defense & National Security',
      subtitle: 'Surveillance & Cybersecurity',
      desc: 'AI-integrated CCTV surveillance zones, data center maintenance, threat defense, and smart monitoring systems.',
      icon: Shield,
      examples: 'National Security Agencies & Smart Zones',
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      badge: 'SECURITY',
      footerRight: 'National Defense',
    },
    {
      title: 'Hospitality & Commercial SMEs',
      subtitle: 'Hotels, Logistics & Trade',
      desc: 'Customized ERP, Warehouse Management Systems (WMS), Sales Force Automation (SFA), and HR software.',
      icon: Hotel,
      examples: '10+ Major Hotel Chains & Private Enterprises',
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      badge: 'ENTERPRISE',
      footerRight: 'Private Sector',
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

        {/* 6 Industry Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                {/* Logo Watermark Background */}
                <img
                  src={logoEmblem}
                  alt=""
                  className="absolute -bottom-2 -right-2 w-32 h-32 object-contain opacity-[0.28] pointer-events-none select-none z-[1]"
                  aria-hidden="true"
                />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${sec.bg} border ${sec.border} ${sec.accent}`}>
                      {sec.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${sec.bg} ${sec.accent} border ${sec.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {sec.title}
                  </h3>

                  <h4 className={`text-xs font-extrabold uppercase tracking-widest ${sec.accent}`}>
                    {sec.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>Key Clients:</span>
                  <span className={`${sec.accent} text-right truncate max-w-[180px]`} title={sec.examples}>
                    {sec.examples}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
