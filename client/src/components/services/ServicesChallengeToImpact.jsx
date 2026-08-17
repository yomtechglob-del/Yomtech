import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Compass, Cpu, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export const ServicesChallengeToImpact = () => {
  const transformation = [
    {
      step: '01',
      stage: 'CHALLENGE',
      title: 'Problem Identification',
      desc: 'Identify operational bottlenecks, fragmented systems, and technical challenges across client workflows.',
      icon: AlertCircle,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    {
      step: '02',
      stage: 'STRATEGY',
      title: 'Strategic Architecture',
      desc: 'Translate organizational requirements into a clear software architecture and digital roadmap.',
      icon: Compass,
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-[#0284C7]',
    },
    {
      step: '03',
      stage: 'SOLUTION',
      title: 'Engineering Build',
      desc: 'Build customized software, Yomnex ERP modules, and AI surveillance systems from scratch.',
      icon: Cpu,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    {
      step: '04',
      stage: 'IMPACT',
      title: 'Sustainable Growth',
      desc: 'Enable automated workflows, operational clarity, capacity building, and long-term digital growth.',
      icon: TrendingUp,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
    },
  ];

  return (
    <section className="py-24 sm:py-32 w-full bg-white relative text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-flex items-center gap-2 shadow-sm">
            <Sparkles size={13} className="text-[#0284C7] animate-pulse" />
            BUSINESS IMPACT
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            From Complex Challenges to <span className="text-[#0284C7]">Practical Solutions</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Technology creates value when it solves real problems. YomTech Global connects business challenges with software engineering, digital platforms, and practical tech talent.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformation.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`bg-white rounded-[2rem] p-8 space-y-6 h-full flex flex-col justify-between border ${item.border} shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 relative overflow-hidden`}>
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 rounded-2xl ${item.bg} ${item.text} border ${item.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <IconComp size={24} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${item.bg} ${item.text} border ${item.border}`}>
                        {item.stage}
                      </span>
                    </div>

                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${item.text}`}>
                        PHASE {item.step}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      {idx < 3 ? `Phase ${idx + 1} of 4` : 'Measurable Impact'}
                    </span>
                    {idx < 3 && (
                      <ArrowRight size={14} className="text-[#0284C7] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
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
