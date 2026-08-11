import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Cpu, Globe, ArrowRight } from 'lucide-react';

export const HomeBuiltForTheFuture = () => {
  const pillars = [
    {
      num: '01',
      title: 'CONTINUOUS LEARNING',
      subtitle: 'Skills & Foundation',
      desc: 'Technology professionals must continuously expand their knowledge, experiment with new tools, and strengthen their engineering foundations.',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'PRACTICAL INNOVATION',
      subtitle: 'Real-World Execution',
      desc: 'Ideas become valuable when they are transformed into useful products, working systems, and solutions to real-world challenges.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'SCALABLE ENGINEERING',
      subtitle: 'Architecture & Security',
      desc: 'Strong architecture, maintainable code, secure systems, and thoughtful technology choices create foundations that can grow.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'GLOBAL CONNECTION',
      subtitle: 'Partnerships & Ecosystem',
      desc: 'Technology creates opportunities to connect businesses, engineers, learners, and partners beyond geographic boundaries.',
      icon: Globe,
    },
  ];

  const timelineSteps = ['TODAY', 'LEARN', 'BUILD', 'IMPROVE', 'TOMORROW'];

  return (
    <section className="py-24 sm:py-32 w-full bg-[#EAF6FF] relative z-10 text-[#334155] overflow-hidden border-t border-sky-200/80">
      {/* Subtle Luminous Tech Dot Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #1DA1F3 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} 
      />

      {/* Luminous Glow Flares */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#1DA1F3]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#0ED3DD]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1DA1F3] px-5 py-2 rounded-full bg-white border border-[#1DA1F3]/25 inline-block shadow-sm">
            THE FUTURE OF TECHNOLOGY
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B] tracking-tight leading-tight">
            Building for <span className="text-[#1DA1F3]">What Comes Next.</span>
          </h2>
          
          <p className="text-[#334155] text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
            Technology changes continuously. YomTech Global is built around continuous learning, practical engineering, responsible innovation, and scalable digital thinking so that today's solutions can evolve with tomorrow's opportunities.
          </p>
        </div>

        {/* Future Timeline Progression Bar (Light Premium Glass) */}
        <div className="max-w-4xl mx-auto py-4">
          <div className="bg-white border-2 border-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${idx === 4 ? 'bg-[#0ED3DD] shadow-[0_0_12px_#0ED3DD]' : 'bg-[#1DA1F3]'}`} />
                  <span className={`text-xs font-black tracking-widest ${idx === 4 ? 'text-[#0ED3DD]' : 'text-[#071A2B]'}`}>
                    {step}
                  </span>
                </div>
                {idx < 4 && (
                  <ArrowRight size={14} className="hidden md:block text-[#1DA1F3] opacity-60" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Future Pillars Grid (High-Contrast Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border-2 border-white shadow-xl hover:border-[#1DA1F3] hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-slate-900">
                  
                  {/* Top Glowing Beam Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1DA1F3] to-[#0ED3DD] opacity-80" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-sky-50 text-[#1DA1F3] border border-sky-200">
                        PILLAR {p.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#1DA1F3] flex items-center justify-center group-hover:bg-[#1DA1F3] group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp size={20} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#0ED3DD]">
                        {p.subtitle}
                      </span>
                      <h3 className="text-xl font-black font-display text-[#071A2B] group-hover:text-[#1DA1F3] transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Future Strategy
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1DA1F3] shadow-[0_0_8px_#1DA1F3]" />
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
