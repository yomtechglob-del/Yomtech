import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, RefreshCw, ArrowRight } from 'lucide-react';

export const ServicesEngineeringApproach = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding Requirements',
      desc: 'Understand the business, users, challenges, workflows, and technical requirements.',
      icon: Search,
    },
    {
      num: '02',
      title: 'ARCHITECT',
      subtitle: 'System & Interface Design',
      desc: 'Design scalable systems, interfaces, integrations, and technology foundations.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'ENGINEER',
      subtitle: 'Software & Solution Build',
      desc: 'Build reliable software and technology solutions using modern engineering practices.',
      icon: Code,
    },
    {
      num: '04',
      title: 'EVOLVE',
      subtitle: 'Continuous Optimization',
      desc: 'Improve, optimize, secure, and scale solutions as business requirements grow.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#EAF6FF] relative text-[#334155] overflow-hidden border-b border-[#1DA1F3]/15">
      {/* Subtle Technical Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #1DA1F3 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} 
      />

      {/* Subtle Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#1DA1F3]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#0ED3DD]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            ENGINEERING APPROACH
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight">
            How We Engineer <span className="text-[#1DA1F3]">Technology</span>
          </h2>
          
          <p className="text-[#334155] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Every YomTech Global solution begins with understanding the problem, designing the right architecture, and engineering technology around measurable real-world needs.
          </p>
        </div>

        {/* Process Pipeline */}
        <div className="relative">
          {/* Animated Neon SVG ZigZag Track - Desktop Only */}
          <svg className="hidden lg:block absolute top-[55px] left-0 right-0 w-full h-[60px] pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="engApproachGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1DA1F3" />
                <stop offset="50%" stopColor="#0ED3DD" />
                <stop offset="100%" stopColor="#1DA1F3" />
              </linearGradient>
            </defs>

            {/* Glowing Base ZigZag Path */}
            <path
              d="M 195 30 L 445 10 L 695 50 L 945 30"
              fill="none"
              stroke="url(#engApproachGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-40"
            />
            {/* Flowing dashed stream */}
            <path
              d="M 195 30 L 445 10 L 695 50 L 945 30"
              fill="none"
              stroke="#0ED3DD"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-zigzag-dash"
            />
            {/* Fast traveling laser particles */}
            <path
              d="M 195 30 L 445 10 L 695 50 L 945 30"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="4 20"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-zigzag-laser"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border border-[#1DA1F3]/20 shadow-[0_8px_30px_rgba(7,26,43,0.04)] hover:shadow-[0_16px_40px_rgba(29,161,243,0.12)] hover:border-[#1DA1F3]/50 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Top Ambient Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1DA1F3] to-[#0ED3DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-5">
                      {/* Node Header Row */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#EAF6FF] border border-[#1DA1F3]/30 text-[#1DA1F3] font-black text-sm flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#1DA1F3] group-hover:text-white transition-all duration-300">
                          {stage.num}
                        </div>
                        <div className="relative w-11 h-11 rounded-2xl bg-[#0ED3DD]/10 border border-[#0ED3DD]/40 text-[#0ED3DD] flex items-center justify-center group-hover:bg-[#1DA1F3] group-hover:text-white transition-all duration-300 shadow-sm">
                          <div className="absolute -inset-1.5 rounded-2xl border border-solid border-[#1DA1F3]/40 animate-pulse-slow pointer-events-none" />
                          <IconComp size={20} className="relative z-10" />
                        </div>
                      </div>

                      {/* Title Block */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3]">
                          STAGE {stage.num}
                        </span>
                        <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#1DA1F3] transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0ED3DD]">
                          {stage.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed pt-1">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="pt-4 border-t border-[#1DA1F3]/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {idx < 3 ? `Step ${idx + 1} of 4` : 'Final Optimization'}
                      </span>
                      {idx < 3 && (
                        <ArrowRight size={14} className="text-[#1DA1F3] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
