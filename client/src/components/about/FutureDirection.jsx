import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CloudRain, UserCheck, ArrowRight } from 'lucide-react';

export const FutureDirection = () => {
  const focusAreas = [
    {
      num: '01',
      title: 'AI-DRIVEN SYSTEMS',
      desc: 'Integrating autonomous machine learning models, intelligent document processing, and predictive analytics into core enterprise software.',
      icon: Bot
    },
    {
      num: '02',
      title: 'CLOUD-NATIVE INFRASTRUCTURE',
      desc: 'Architecting ultra-resilient multi-cloud deployments, automated DevOps CI/CD pipelines, and zero-trust security layers.',
      icon: CloudRain
    },
    {
      num: '03',
      title: 'NEXT-GEN TECHNOLOGY TALENT',
      desc: 'Expanding WabiSkills Academy bootcamps to empower developers with real-world production code experience.',
      icon: UserCheck
    }
  ];

  return (
    <section className="py-28 w-full bg-white relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <div className="text-center space-y-3 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 inline-block shadow-sm">
            🔮 LOOKING AHEAD
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
            Engineering <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">What Comes Next</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Strategic focus areas shaping the future of YomTech Global's technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-[#1DA1F2] hover:bg-white hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-display text-slate-300 group-hover:text-[#1DA1F2] transition-colors">
                      {area.num}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-[#1DA1F2] group-hover:bg-[#1DA1F2] group-hover:text-white transition-all shadow-sm">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black font-display text-slate-900 tracking-wide">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {area.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-black text-[#1DA1F2]">
                  <span>STRATEGIC FOCUS</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
