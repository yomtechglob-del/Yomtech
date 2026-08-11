import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, BarChart3, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhatYouBuild = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      num: '01',
      title: 'WEB APPLICATIONS',
      subtitle: 'Enterprise Fullstack Systems',
      desc: 'Architect modern SaaS platforms, e-commerce backends, and responsive React applications powered by RESTful & GraphQL APIs.',
      icon: Globe,
      outputs: ['Modular React Architecture', 'REST & GraphQL Backend APIs', 'Authentication & Role Security']
    },
    {
      num: '02',
      title: 'MOBILE EXPERIENCES',
      subtitle: 'Cross-Platform Native Apps',
      desc: 'Build fluid cross-platform iOS & Android mobile applications using React Native with native performance and offline sync.',
      icon: Smartphone,
      outputs: ['React Native Mobile Apps', 'Offline Data Storage', 'Push Notifications & Sync']
    },
    {
      num: '03',
      title: 'AI APPLICATIONS',
      subtitle: 'Intelligent Machine Systems',
      desc: 'Train predictive models, build automated LLM chatbot agents, and integrate machine learning pipelines into business software.',
      icon: Cpu,
      outputs: ['LLM Chatbot Agents', 'Predictive Classification Models', 'Automated NLP Data Pipelines']
    },
    {
      num: '04',
      title: 'DATA PROJECTS',
      subtitle: 'Analytics & BI Dashboards',
      desc: 'Transform raw data tables into real-time business intelligence dashboards, automated SQL reports, and predictive charts.',
      icon: BarChart3,
      outputs: ['Interactive SQL Analytics', 'Real-Time PowerBI Dashboards', 'Statistical Data Aggregation']
    },
    {
      num: '05',
      title: 'DIGITAL PRODUCTS',
      subtitle: 'UI/UX Design Systems',
      desc: 'Design scalable UI component libraries, Figma wireframes, interactive user flows, and production design tokens.',
      icon: Layers,
      outputs: ['Figma Design Systems', 'Interactive Prototypes', 'Production Design Tokens']
    }
  ];

  const currentCat = categories[activeCategory];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4.5 py-1.5 rounded-full bg-cyan-100/90 border border-cyan-300 inline-block shadow-sm">
            🚀 PRACTICAL OUTPUTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            What You Build <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Along the Way</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Practical project categories engineered during our practical learning pathways.
          </p>
        </div>

        {/* 5 Project Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1720px] mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveCategory(idx)}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`p-[1.5px] rounded-[2.2rem] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl scale-[1.03]'
                    : 'bg-slate-200/80 hover:bg-slate-300 shadow-sm'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-[2.1rem] p-6 space-y-4 text-center items-center flex flex-col justify-between h-full relative overflow-hidden text-slate-900">
                  <div className="space-y-3 w-full flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F2] px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300">
                      PROJECT {cat.num}
                    </span>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white shadow-md' : 'bg-cyan-50 text-[#1DA1F2] border border-cyan-200'
                    }`}>
                      <Icon size={24} />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-black font-display text-slate-900">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#1DA1F2]">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD]' : 'bg-slate-200'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Category Deep-Dive Inspection Card */}
        <div className="w-full max-w-[1720px] mx-auto p-[1.5px] rounded-[2.8rem] bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl">
          <div className="bg-white rounded-[2.7rem] p-8 sm:p-10 text-slate-900 space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300 text-[#1DA1F2]">
                  OUTPUT CATEGORY {currentCat.num} • {currentCat.title}
                </span>
                <h3 className="text-2xl font-black font-display text-slate-900 mt-2">
                  {currentCat.subtitle}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {currentCat.desc}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {currentCat.outputs.map((out, oIdx) => (
                <span key={oIdx} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#1DA1F2] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#0ED3DD]" />
                  {out}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
