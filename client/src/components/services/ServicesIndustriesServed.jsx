import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, Tv, Shield, Hotel, Sparkles } from 'lucide-react';

export const ServicesIndustriesServed = () => {
  const sectors = [
    {
      title: 'Government & Public Sector',
      subtitle: 'E-Government & Municipalities',
      desc: 'Digital transformation solutions for public institutions, municipal trade bureaus, document automation, and citizen service portals.',
      icon: Building2,
      examples: 'SSGI, INSA, MInT, City Admin Trade Bureau',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
      badge: 'GOVERNMENT',
    },
    {
      title: 'Higher Education & Academics',
      subtitle: 'Universities & Vocational Centers',
      desc: 'Learning management systems, campus IT networks, student portals, and repository mentorship programs.',
      icon: GraduationCap,
      examples: 'AASTU, ASTU, Arsi University, Kotebe University',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      badge: 'ACADEMIC',
    },
    {
      title: 'Banking & Financial Services',
      subtitle: 'Banks & Financial Institutions',
      desc: 'Secure enterprise ERP integration, transaction management systems, CRM portals, and financial compliance auditing.',
      icon: Landmark,
      examples: 'Bunna Bank, Commercial Partners & SMEs',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      badge: 'FINANCIAL',
    },
    {
      title: 'Media & Innovation Houses',
      subtitle: 'Broadcasting & Tech Media',
      desc: 'Tech documentary productions, innovation media platforms, storytelling, and digital content distribution networks.',
      icon: Tv,
      examples: 'Fana Media Corporation, Balageru TV, Addis AI',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      badge: 'MEDIA',
    },
    {
      title: 'Defense & National Security',
      subtitle: 'Surveillance & Cybersecurity',
      desc: 'AI-integrated CCTV surveillance zones, data center maintenance, threat defense, and smart monitoring systems.',
      icon: Shield,
      examples: 'National Security Agencies & Smart Zones',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-700',
      badge: 'SECURITY',
    },
    {
      title: 'Hospitality & Commercial SMEs',
      subtitle: 'Hotels, Logistics & Trade',
      desc: 'Customized ERP, Warehouse Management Systems (WMS), Sales Force Automation (SFA), and HR software.',
      icon: Hotel,
      examples: '10+ Major Hotel Chains & Private Enterprises',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      badge: 'ENTERPRISE',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-white relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            INDUSTRIES SERVED
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Empowering <span className="text-[#0284C7]">Key Sectors</span> Across Africa
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Our software engineering, ERP solutions, tech bootcamps, and cybersecurity architectures serve mission-critical public and private organizations.
          </p>
        </div>

        {/* Grid of 6 Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group bg-white p-8 rounded-[2rem] border ${sec.border} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${sec.bg} ${sec.text} border ${sec.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={26} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${sec.bg} ${sec.text} border ${sec.border}`}>
                      {sec.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-[#0284C7] transition-colors">
                      {sec.title}
                    </h3>
                    <div className={`text-xs font-black uppercase tracking-widest mb-3 ${sec.text}`}>
                      {sec.subtitle}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {sec.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">Key Clients:</span>
                  <span className="text-slate-900 font-extrabold text-right truncate max-w-[200px]" title={sec.examples}>
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
