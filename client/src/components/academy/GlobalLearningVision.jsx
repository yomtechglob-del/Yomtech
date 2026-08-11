import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users2, BookOpen, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

export const GlobalLearningVision = () => {
  const connections = [
    { title: 'PEOPLE', desc: 'Connecting ambitious learners across global technology communities.', icon: Users2 },
    { title: 'KNOWLEDGE', desc: 'Democratizing production software engineering education & practices.', icon: BookOpen },
    { title: 'TECHNOLOGY', desc: 'Mastering modern fullstack, cloud, AI, and data architecture.', icon: Cpu },
    { title: 'OPPORTUNITY', desc: 'Empowering software craftsmanship without geographic limits.', icon: TrendingUp }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#BBBDE8] via-[#ADADDF] to-[#BBBDE8] relative text-slate-900 overflow-hidden border-b border-indigo-200/60">
      {/* Soft ambient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/30 via-indigo-200/20 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-white/20 via-purple-200/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(90deg, #5555AA 1px, transparent 1px), linear-gradient(180deg, #5555AA 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-900 px-4.5 py-1.5 rounded-full bg-indigo-100/90 border border-indigo-300 inline-block shadow-sm">
            🌏 GLOBAL VISION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Learning <span className="bg-gradient-to-r from-indigo-700 via-[#1DA1F2] to-[#0ED3DD] bg-clip-text text-transparent">Without Borders</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Connecting technical passion with global engineering standards.
          </p>
        </div>

        {/* 4 Connected Global Milestone Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full max-w-[1720px] mx-auto relative">
          {connections.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-[#1DA1F2] to-[#0ED3DD] shadow-xl group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[2.4rem] p-7 space-y-5 h-full flex flex-col justify-between text-slate-900 relative overflow-hidden border border-indigo-200/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-900 px-3 py-1 rounded-full bg-indigo-100/90 border border-indigo-300">
                        NODE 0{idx + 1}
                      </span>
                      <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="text-xl font-black font-display text-slate-900">
                      {c.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
