import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Code, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

export const HomeHowWeWork = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Requirements & Outcomes',
      desc: 'Understand the business, users, technical requirements, challenges, and desired outcomes.',
      icon: Search,
    },
    {
      num: '02',
      title: 'DESIGN',
      subtitle: 'UX & Architecture',
      desc: 'Translate requirements into clear product experiences, system structures, and technical strategies.',
      icon: Layout,
    },
    {
      num: '03',
      title: 'ENGINEER',
      subtitle: 'Clean Software Build',
      desc: 'Build reliable software using modern technologies, clean architecture, and scalable engineering practices.',
      icon: Code,
    },
    {
      num: '04',
      title: 'VALIDATE',
      subtitle: 'Quality & Security Testing',
      desc: 'Test functionality, usability, performance, security, and technical quality before delivery.',
      icon: CheckCircle2,
    },
    {
      num: '05',
      title: 'GROW',
      subtitle: 'Continuous Evolution',
      desc: 'Improve, maintain, optimize, and evolve the solution as business and technology needs change.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-white relative z-10 text-[#475569] overflow-hidden border-y border-slate-200">
      {/* Background Subtle Accent Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #071A2B 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0ED3DD] px-5 py-2 rounded-full bg-cyan-50 border border-[#0ED3DD]/30 inline-block shadow-sm">
            ENGINEERING PROCESS
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight">
            From Challenge to <span className="text-[#0ED3DD]">Working Solution.</span>
          </h2>
          
          <p className="text-[#475569] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Every successful technology project starts with understanding the problem. Our approach connects strategic thinking, engineering execution, testing, and continuous improvement to transform ideas into reliable digital solutions.
          </p>
        </div>

        {/* 5-Stage Process Pipeline */}
        <div className="relative">
          {/* Desktop Connecting Vector Beam */}
          <div className="hidden lg:block absolute top-[75px] left-[8%] right-[8%] h-1 bg-slate-200 z-0 rounded-full" />
          <div className="hidden lg:block absolute top-[75px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F3] to-[#0ED3DD] z-0 rounded-full shadow-[0_0_12px_rgba(14,211,221,0.4)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative"
                >
                  <div className="bg-[#F8FAFC] rounded-[2rem] p-7 space-y-5 h-full flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl hover:bg-white hover:border-[#0ED3DD] transition-all duration-300 relative overflow-hidden">
                    
                    {/* Top Ambient Border Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0ED3DD] to-[#1DA1F3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      {/* Node Circle & Step Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0ED3DD] font-black text-sm flex items-center justify-center shadow-sm group-hover:bg-[#0ED3DD] group-hover:text-white transition-all duration-300">
                          {stage.num}
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0ED3DD] flex items-center justify-center border border-cyan-200 group-hover:rotate-6 transition-transform">
                          <IconComp size={20} />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3]">
                          STAGE {stage.num}
                        </span>
                        <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#0ED3DD] transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500">
                          {stage.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Bottom Progress Step */}
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        {idx < 4 ? `Step ${idx + 1} of 5` : 'Production Ready'}
                      </span>
                      {idx < 4 && (
                        <ArrowRight size={14} className="text-[#0ED3DD] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      )}
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
