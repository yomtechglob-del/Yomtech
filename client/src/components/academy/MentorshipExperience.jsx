import React from 'react';
import { motion } from 'framer-motion';
import { User, Users2, Code2, Sparkles, MessageSquareCode, CheckCircle2 } from 'lucide-react';

export const MentorshipExperience = () => {
  const pillars = [
    { title: 'Knowledge Sharing', desc: 'Direct technical insights from senior engineers working in production.', icon: MessageSquareCode },
    { title: 'Code Reviews', desc: 'Detailed line-by-line PR feedback on architecture, cleanliness, and security.', icon: Code2 },
    { title: 'Problem Solving', desc: '1-on-1 guidance when overcoming difficult technical challenges.', icon: Sparkles }
  ];

  return (
    <section className="py-28 w-full bg-[#FFF7E6] relative text-[#334155] overflow-hidden border-b border-amber-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1DA1F3_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#071A2B] px-5 py-2 rounded-full bg-amber-100 border border-amber-300 inline-block shadow-sm">
            👥 1-ON-1 GUIDANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#071A2B]">
            Learn With <span className="text-[#1DA1F3]">Guidance</span>
          </h2>
          <p className="text-[#334155] text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Practical technical mentorship bridging ambition with production software craftsmanship.
          </p>
        </div>

        {/* Conceptual Relationship Visual: LEARNER <-> MENTOR <-> PROJECT */}
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            {/* LEARNER Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-[#1DA1F3] to-[#071A2B] shadow-xl"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.1rem] p-7 space-y-4 text-[#334155] flex flex-col items-center border border-white shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#1DA1F3] flex items-center justify-center border border-sky-300">
                  <User size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300">
                  NODE 01
                </span>
                <h3 className="text-xl font-black font-display text-[#071A2B]">
                  LEARNER
                </h3>
                <p className="text-xs text-[#334155] font-semibold">
                  Ambitious developer acquiring modern software skills &amp; concepts.
                </p>
              </div>
            </motion.div>

            {/* MENTOR Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-[#1DA1F3] via-[#071A2B] to-[#1DA1F3] shadow-2xl scale-[1.04]"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.1rem] p-7 space-y-4 text-[#334155] flex flex-col items-center relative overflow-hidden border border-white shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1DA1F3] to-sky-600 text-white flex items-center justify-center shadow-md">
                  <Users2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3] px-4 py-1 rounded-full bg-sky-100 border border-sky-300">
                  CENTRAL CONNECTOR
                </span>
                <h3 className="text-xl font-black font-display text-[#071A2B]">
                  MENTOR
                </h3>
                <p className="text-xs text-[#334155] font-semibold">
                  Senior engineer providing code reviews, feedback &amp; real-world perspective.
                </p>
              </div>
            </motion.div>

            {/* PROJECT Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-[#071A2B] to-[#1DA1F3] shadow-xl"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.1rem] p-7 space-y-4 text-[#334155] flex flex-col items-center border border-white shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#1DA1F3] flex items-center justify-center border border-sky-300">
                  <Code2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1DA1F3] px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300">
                  NODE 03
                </span>
                <h3 className="text-xl font-black font-display text-[#071A2B]">
                  PROJECT
                </h3>
                <p className="text-xs text-[#334155] font-semibold">
                  Production application built to demonstrate software craftsmanship.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1720px] mx-auto">
          {pillars.map((pil, pIdx) => {
            const Icon = pil.icon;
            return (
              <div key={pIdx} className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-amber-200/80 shadow-md space-y-3 hover:border-[#1DA1F3] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-100 text-[#1DA1F3] border border-sky-300">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-black font-display text-[#071A2B]">{pil.title}</h4>
                </div>
                <p className="text-xs text-[#334155] font-semibold leading-relaxed">{pil.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
