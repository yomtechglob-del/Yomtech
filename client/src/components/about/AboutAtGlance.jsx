import React, { useState } from 'react';
import { 
  Building2, Globe, Cpu, Users, ShieldCheck, 
  Zap, Award, Calendar, Layers, Activity, ArrowRight, Sparkles,
  Phone, Mail, MapPin, CheckCircle2, FileText, Lock
} from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

const COMPANY_STATS = [
  {
    id: 's1',
    category: 'ESTABLISHED HERITAGE',
    title: '2015',
    badge: 'FOUNDED',
    subtitle: '10+ Years of Innovation',
    description: 'Pioneering custom enterprise software engineering, government digital transformation, and practical tech education across Africa.',
    footerLeft: 'HQ: Addis Ababa',
    footerRight: 'Pan-African Scope',
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200'
  },
  {
    id: 's2',
    category: 'ENTERPRISE SOLUTIONS',
    title: '25+',
    badge: 'PROJECTS',
    subtitle: 'Deployments Deployed',
    description: 'Custom-built ERP systems, citizen service platforms, AI surveillance zones, and enterprise cloud solutions.',
    footerLeft: '100% From Scratch',
    footerRight: 'Government SLAs',
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200'
  },
  {
    id: 's3',
    category: 'TALENT ACADEMY',
    title: '2K+',
    badge: 'GRADUATES',
    subtitle: 'WabiSkills Alumni',
    description: 'Empowering thousands of university graduates and tech professionals with practical, production-ready software engineering skills.',
    footerLeft: 'WabiSkills Academy',
    footerRight: 'Industry Mentors',
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200'
  },
  {
    id: 's4',
    category: 'PARTNERSHIP ALLIANCES',
    title: '7+',
    badge: 'ALLIANCES',
    subtitle: 'Institutional Partners',
    description: 'Collaborating with national ministries (MInT, INSA, SSGI), top universities (AASTU, ASTU), media networks, and global enterprises.',
    footerLeft: 'Public & Private',
    footerRight: 'Strategic Impact',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200'
  }
];

export const AboutAtGlance = () => {
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

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>YomTech Global / Executive Overview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Company Overview &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Digital Transformation Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            YomTech Global is a multi-dimensional technology powerhouse bridging enterprise software engineering, public sector digital transformation, technical talent development, and technology media storytelling.
          </p>
        </div>

        {/* 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200/80 shadow-xl text-left flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 p-2 shadow-lg flex items-center justify-center flex-shrink-0">
                  <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    YomTech Global
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                    Empowering Digital Innovation · Est. 2015
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                We design and build complete digital ecosystems completely from scratch. We combine technology, talent development, and innovation to deliver lasting digital sovereignty for governments, enterprises, and ambitious individuals.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Headquarters Location:</span>
                    <span className="text-slate-600">Megenagna, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Direct Telephones:</span>
                    <span className="text-slate-600 font-mono">+251 11 668 7546 / +251 97 766 6699</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <Globe className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Official Web Portal:</span>
                    <span className="text-[#0284C7] font-mono font-bold">www.yomtechglobal.org</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 text-xs font-semibold space-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-[#0284C7] block">Core Business Areas:</span>
              <span className="block text-slate-700">Custom ERP · Digital Transformation · AI &amp; Surveillance · WabiSkills Academy · Tech Media</span>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {COMPANY_STATS.map((stat) => (
              <div 
                key={stat.id}
                className="bg-white rounded-3xl p-7 border-2 border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${stat.bg} ${stat.border} ${stat.accent}`}>
                      {stat.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
                      {stat.badge}
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {stat.title}
                  </h3>

                  <h4 className={`text-sm font-extrabold ${stat.accent}`}>
                    {stat.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                  <span>{stat.footerLeft}</span>
                  <span className={stat.accent}>{stat.footerRight}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutAtGlance;

