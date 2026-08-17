import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu, Video, MessageSquare, Globe, ExternalLink, Sparkles } from 'lucide-react';

export const ServicesProductsEcosystem = () => {
  const products = [
    {
      name: 'WabiSkills',
      category: 'Talent & Education Platform',
      link: 'https://wabiskills.com/',
      desc: 'Technology training and digital skills development platform powering bootcamps, hands-on labs, and 1-on-1 mentorship.',
      icon: GraduationCap,
      badge: 'PROPRIETARY PLATFORM',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    {
      name: 'WabiJob',
      category: 'Talent & Recruitment Network',
      link: 'https://wabijob.com/',
      desc: 'Talent and recruitment platform connecting skilled African technology professionals with global enterprise opportunities.',
      icon: Briefcase,
      badge: 'RECRUITMENT ECOSYSTEM',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      name: 'Yomnex ERP',
      category: 'Custom Enterprise Resource Planning',
      link: '/services#it-solutions',
      desc: 'Fully custom-built enterprise resource planning system for government institutions, universities, and private enterprises.',
      icon: Cpu,
      badge: 'ENTERPRISE ERP',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      name: 'WabiX',
      category: 'Virtual Collaboration Platform',
      link: '/services',
      desc: 'Virtual meeting and collaboration platform engineered for seamless communication, online bootcamps, and enterprise engagement.',
      icon: MessageSquare,
      badge: 'COLLABORATION',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    {
      name: 'Mari',
      category: 'Social Media & Engagement App',
      link: '/services',
      desc: 'Social media application developed by YomTech Global to connect digital communities and tech innovators.',
      icon: Globe,
      badge: 'COMMUNITY APP',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-700',
    },
    {
      name: 'Yomtech Media',
      category: 'Tech Documentaries & Storytelling',
      link: '/services',
      desc: 'Technology storytelling, education, and innovation media platform producing documentaries that highlight Pan-African tech achievements.',
      icon: Video,
      badge: 'MEDIA PLATFORM',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#F8FAFC] relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[450px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            PROPRIETARY PRODUCTS &amp; PLATFORMS
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            The <span className="text-[#0284C7]">YomTech Ecosystem</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Beyond custom client builds, YomTech Global designs, owns, and operates scalable digital products that drive education, employment, collaboration, and enterprise growth.
          </p>
        </div>

        {/* 6 Products Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => {
            const IconComp = prod.icon;
            const isExternal = prod.link.startsWith('http');

            return (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group bg-white p-8 rounded-[2rem] border ${prod.border} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${prod.bg} ${prod.text} border ${prod.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={26} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${prod.bg} ${prod.text} border ${prod.border}`}>
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-[#0284C7] transition-colors flex items-center gap-2">
                      {prod.name}
                    </h3>
                    <div className={`text-xs font-black uppercase tracking-widest mb-3 ${prod.text}`}>
                      {prod.category}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {prod.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={prod.link}
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#0284C7] hover:text-[#0077B6] transition-colors group/link"
                  >
                    <span>Explore {prod.name}</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
