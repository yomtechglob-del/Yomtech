import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, RefreshCcw } from 'lucide-react';

export const PracticalLearning = () => {
  const principles = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Build Strong Foundations',
      desc: 'Master software engineering concepts, system design principles, and clean code practices from the ground up.',
      icon: BookOpen
    },
    {
      num: '02',
      title: 'APPLY',
      subtitle: 'Turn Concepts Into Working Solutions',
      desc: 'Architect production web, mobile, and AI software applications with hands-on coding and real repositories.',
      icon: Code2
    },
    {
      num: '03',
      title: 'IMPROVE',
      subtitle: 'Learn From Feedback & Iteration',
      desc: 'Refine software quality continuously through senior mentor code reviews, pull requests, and performance tuning.',
      icon: RefreshCcw
    }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#FBF4C0] via-[#F5EBA8] to-[#FBF4C0] relative text-slate-900 overflow-hidden border-b border-yellow-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#D4A800_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 text-center space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 px-4.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 inline-block shadow-sm">
            ✨ EDITORIAL PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Why Practical <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">Learning Matters</span>
          </h2>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-[1720px] mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 leading-[1.15] tracking-tight">
            "Knowledge becomes valuable when{' '}
            <span className="bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-600 bg-clip-text text-transparent">
              you can apply it.
            </span>"
          </h3>
        </motion.div>

        {/* 3 Visual Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-[1720px] mx-auto">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <motion.div
                key={pr.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-[#1DA1F2] via-[#0ED3DD] to-sky-500 shadow-xl group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[2.4rem] p-8 space-y-4 h-full flex flex-col justify-between text-slate-900 relative overflow-hidden border border-amber-200/60">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300">
                        PRINCIPLE {pr.num}
                      </span>
                      <div className="p-3 rounded-2xl bg-cyan-50 text-[#1DA1F2] border border-cyan-200 group-hover:bg-gradient-to-r group-hover:from-[#1DA1F2] group-hover:to-[#0ED3DD] group-hover:text-white transition-all">
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xl font-black font-display text-slate-900">
                        {pr.title}
                      </h4>
                      <p className="text-xs font-bold text-[#1DA1F2]">
                        {pr.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {pr.desc}
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
