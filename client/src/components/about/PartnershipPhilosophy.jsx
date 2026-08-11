import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Target, Hammer, TrendingUp } from 'lucide-react';

export const PartnershipPhilosophy = () => {
  const steps = [
    { num: '01', title: 'LISTEN', sub: 'Understand the Real Challenge', desc: 'We conduct deep domain research to pinpoint true architectural and business bottlenecks.', icon: Ear },
    { num: '02', title: 'ALIGN', sub: 'Connect Tech with Business Goals', desc: 'We define transparent technical roadmaps that directly support enterprise milestones.', icon: Target },
    { num: '03', title: 'BUILD', sub: 'Engineer Practical Solutions', desc: 'We write clean, modular, production-ready software with automated testing.', icon: Hammer },
    { num: '04', title: 'GROW', sub: 'Create Long-Term Value', desc: 'We provide active maintenance, capacity building, and talent training for sustained growth.', icon: TrendingUp }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <div className="text-center space-y-3 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1DA1F2] px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 inline-block shadow-sm">
            🤝 CONSULTING JOURNEY
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
            Partnership <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Strategic four-stage consulting experience guiding every client and institutional engagement.
          </p>
        </div>

        {/* Varied Visual Position Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            // Varied vertical translation for strategic consulting feel
            const translateY = idx % 2 === 1 ? 'lg:translate-y-6' : 'lg:-translate-y-2';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#1DA1F2] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between ${translateY}`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-display text-slate-300 group-hover:text-[#1DA1F2] transition-colors">
                      {item.num}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-sky-50 text-[#1DA1F2] group-hover:bg-[#1DA1F2] group-hover:text-white transition-all shadow-sm">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-black font-display text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#1DA1F2]">
                      {item.sub}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="h-1.5 w-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] rounded-full mt-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
