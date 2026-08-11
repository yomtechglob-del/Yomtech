import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, ShieldCheck, FolderCheck, TrendingUp, ArrowRight } from 'lucide-react';

export const CareerReadiness = () => {
  const steps = [
    { num: '01', title: 'SKILLS', desc: 'Master production languages, frameworks & software architecture patterns.', icon: Award },
    { num: '02', title: 'PROJECTS', desc: 'Build scalable fullstack web apps, mobile solutions & AI models.', icon: Code2 },
    { num: '03', title: 'CONFIDENCE', desc: 'Solve complex engineering challenges with independent autonomy.', icon: ShieldCheck },
    { num: '04', title: 'PORTFOLIO', desc: 'Showcase live production repositories & interactive web applications.', icon: FolderCheck },
    { num: '05', title: 'OPPORTUNITY', desc: 'Unlock global technology paths with practical code craftsmanship.', icon: TrendingUp }
  ];

  return (
    <section className="py-28 w-full bg-white relative text-[#475569] overflow-hidden border-b border-slate-200/80">
      <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-gradient-to-br from-sky-100/40 via-indigo-50/30 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-100/30 via-sky-50/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#071A2B_1px,transparent_1px),linear-gradient(180deg,#071A2B_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-5 py-2 rounded-full bg-sky-100/80 border border-sky-300 inline-block shadow-sm">
            📈 TECHNICAL PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Build Skills That <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Move With You</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            A structured path from core technology acquisition to practical technical autonomy.
          </p>
        </div>

        {/* 5 Progression Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-[1720px] mx-auto">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-[2px] rounded-[2.2rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-sky-400 shadow-xl group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white rounded-[2.1rem] p-6 space-y-4 h-full flex flex-col justify-between text-slate-700 relative overflow-hidden border border-slate-200/80 shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300">
                        MILESTONE {st.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-200 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-lg font-black font-display text-slate-900">
                      {st.title}
                    </h3>

                    <p className="text-xs text-[#475569] font-semibold leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#1DA1F3] to-[#071A2B]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
