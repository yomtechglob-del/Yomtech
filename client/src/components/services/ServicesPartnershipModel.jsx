import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wrench, GraduationCap, TrendingUp, RefreshCw } from 'lucide-react';

export const ServicesPartnershipModel = () => {
  const pillars = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Active Listening & Alignment',
      desc: 'We listen to the organization, its people, goals, and challenges.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'BUILD',
      subtitle: 'Practical Solution Delivery',
      desc: 'We transform requirements into practical technology solutions.',
      icon: Wrench,
    },
    {
      num: '03',
      title: 'ENABLE',
      subtitle: 'Knowledge & Capability Transfer',
      desc: 'We help teams and individuals develop the knowledge and capabilities needed to work with technology effectively.',
      icon: GraduationCap,
    },
    {
      num: '04',
      title: 'GROW',
      subtitle: 'Continuous Evolution',
      desc: 'We continue evolving technology and capabilities as opportunities emerge.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#FFF7E6] relative text-[#475569] overflow-hidden border-b border-amber-900/10">
      {/* Subtle Warm Accent Background Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #D97706 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            LONG-TERM PARTNERSHIP
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight">
            More Than a <span className="text-[#1DA1F3]">Technology Provider</span>
          </h2>
          
          <p className="text-[#475569] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            YomTech Global aims to build meaningful technology relationships—working alongside organizations, teams, and ambitious individuals to understand challenges, create solutions, develop capabilities, and support continuous growth.
          </p>
        </div>

        {/* Circular Partnership Relationship Process */}
        <div className="relative">
          {/* Animated SVG Zigzag Beam */}
          <svg className="hidden lg:block absolute top-[50px] left-0 right-0 w-full h-[50px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 50" preserveAspectRatio="none">
            {/* Base glow track */}
            <path
              d="M 195 25 L 445 45 L 695 5 L 945 25"
              fill="none"
              stroke="#D97706"
              strokeWidth="3"
              strokeDasharray="6 6"
              opacity="0.35"
            />
            {/* Flowing dashed stream */}
            <path
              d="M 195 25 L 445 45 L 695 5 L 945 25"
              fill="none"
              stroke="#0ED3DD"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-zigzag-dash"
            />
            {/* Fast traveling laser particles */}
            <path
              d="M 195 25 L 445 45 L 695 5 L 945 25"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="4 20"
              className="animate-zigzag-laser"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border border-amber-200/70 shadow-[0_8px_30px_rgba(217,119,6,0.04)] hover:shadow-[0_16px_40px_rgba(217,119,6,0.12)] hover:border-[#1DA1F3]/50 transition-all duration-300 relative overflow-hidden">
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#FFF7E6] text-amber-800 border border-amber-300">
                          PILLAR {pillar.num}
                        </span>
                        <div className="relative w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-[#1DA1F3] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                          <div className="absolute -inset-1 rounded-xl border border-solid border-amber-400/40 animate-pulse-slow pointer-events-none" />
                          <IconComp size={20} className="relative z-10" />
                        </div>
                      </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#1DA1F3] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0ED3DD]">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                      {idx < 3 ? `Step ${idx + 1} → Step ${idx + 2}` : 'Continuous Loop ↺'}
                    </span>
                    <RefreshCw size={14} className="text-[#1DA1F3] opacity-60 group-hover:rotate-180 transition-transform duration-700" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  </section>
);
};
