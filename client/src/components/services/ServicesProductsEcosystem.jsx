import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu, Video, MessageSquare, Globe, ExternalLink, Building2 } from 'lucide-react';

export const ServicesProductsEcosystem = () => {
  const products = [
    {
      name: 'WabiSkills',
      category: 'Talent & Education Platform',
      link: 'https://wabiskills.com/',
      desc: 'Technology training and digital skills development platform powering bootcamps, hands-on labs, and 1-on-1 mentorship.',
      icon: GraduationCap,
      badge: 'PROPRIETARY PLATFORM',
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      footerRight: 'Tech Academy',
    },
    {
      name: 'WabiJob',
      category: 'Talent & Recruitment Network',
      link: 'https://wabijob.com/',
      desc: 'Talent and recruitment platform connecting skilled African technology professionals with global enterprise opportunities.',
      icon: Briefcase,
      badge: 'RECRUITMENT ECOSYSTEM',
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      footerRight: 'Talent Network',
    },
    {
      name: 'Yomnex ERP',
      category: 'Custom Enterprise Resource Planning',
      link: '/services#it-solutions',
      desc: 'Fully custom-built enterprise resource planning system for government institutions, universities, and private enterprises.',
      icon: Cpu,
      badge: 'ENTERPRISE ERP',
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      footerRight: 'ERP Platform',
    },
    {
      name: 'WabiX',
      category: 'Virtual Collaboration Platform',
      link: '/services',
      desc: 'Virtual meeting and collaboration platform engineered for seamless communication, online bootcamps, and enterprise engagement.',
      icon: MessageSquare,
      badge: 'COLLABORATION',
      accent: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      footerRight: 'Coming Soon',
    },
    {
      name: 'Mari',
      category: 'Social Media & Engagement App',
      link: '/services',
      desc: 'Social media application developed by YomTech Global to connect digital communities and tech innovators.',
      icon: Globe,
      badge: 'COMMUNITY APP',
      accent: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      footerRight: 'Coming Soon',
    },
    {
      name: 'Yomtech Media',
      category: 'Tech Documentaries & Storytelling',
      link: '/services',
      desc: 'Technology storytelling, education, and innovation media platform producing documentaries that highlight Pan-African tech achievements.',
      icon: Video,
      badge: 'MEDIA PLATFORM',
      accent: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      footerRight: 'Coming Soon',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[450px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Proprietary Products & Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            The YomTech <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            Beyond custom client builds, YomTech Global designs, owns, and operates scalable digital products that drive education, employment, collaboration, and enterprise growth.
          </p>
        </div>

        {/* 6 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${prod.bg} border ${prod.border} ${prod.accent}`}>
                      {prod.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${prod.bg} ${prod.accent} border ${prod.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {prod.name}
                  </h3>

                  <h4 className={`text-xs font-extrabold uppercase tracking-widest ${prod.accent}`}>
                    {prod.category}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <a
                    href={prod.link}
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : ''}
                    className={`flex items-center gap-1.5 ${prod.accent} hover:opacity-80 transition-opacity`}
                  >
                    <span>Explore {prod.name}</span>
                    <ExternalLink size={12} />
                  </a>
                  <span className={prod.accent}>{prod.footerRight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
