import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Share2, TrendingUp, RefreshCw } from 'lucide-react';

export const BuildShareGrow = () => {
  const loopStages = [
    { num: '01', title: 'BUILD', subtitle: 'Create Practical Work', desc: 'Engineer production web, mobile, and AI solutions from ground up.', icon: Code2 },
    { num: '02', title: 'SHARE', subtitle: 'Present Knowledge & Code', desc: 'Share open-source repositories, showcase live demos, and review PRs.', icon: Share2 },
    { num: '03', title: 'GROW', subtitle: 'Improve Through Feedback', desc: 'Refine technical skills continuously through iteration & senior review.', icon: TrendingUp }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#FBF4C0] via-[#F5EBA8] to-[#FBF4C0] relative text-slate-900 overflow-hidden border-b border-yellow-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4A800_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 px-4.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 inline-block shadow-sm">
            🔄 CONTINUOUS FLYWHEEL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Build • <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Share</span> • Grow
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            A self-reinforcing practical growth cycle that accelerates developer autonomy.
          </p>
        </div>

        {/* Circular Loop Composition */}
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 relative">
          
          {loopStages.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[2.4rem] p-8 space-y-5 text-center items-center flex flex-col justify-between h-full text-slate-900 relative overflow-hidden border border-amber-200/60">
                  <div className="space-y-4 w-full flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300">
                      STAGE {st.num}
                    </span>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-black font-display text-slate-900">
                        {st.title}
                      </h3>
                      <p className="text-xs font-bold text-[#1DA1F2]">
                        {st.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continuous Loop Return Banner */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-100/90 border border-cyan-300 text-[#1DA1F2] font-black text-xs uppercase tracking-widest shadow-sm">
            <RefreshCw size={15} className="animate-spin text-[#0ED3DD]" />
            <span>Loop connects back to BUILD for continuous improvement</span>
          </div>
        </div>

      </div>
    </section>
  );
};
