import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Layers, Users2, Sparkles } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const LearningModel = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const pillars = [
    { num: '01', key: 'LEARN', title: 'Understand Concepts', desc: 'Grasp fundamental architecture, modern patterns, and production engineering principles.', icon: BookOpen },
    { num: '02', key: 'PRACTICE', title: 'Apply Knowledge', desc: 'Cement understanding through hands-on exercises, interactive labs, and coding challenges.', icon: Terminal },
    { num: '03', key: 'BUILD', title: 'Real-World Projects', desc: 'Architect production-ready web applications, microservices, and mobile interfaces.', icon: Layers },
    { num: '04', key: 'MENTOR', title: 'Guidance & Feedback', desc: 'Accelerate growth with senior technical review, direct code coaching, and advice.', icon: Users2 }
  ];

  return (
    <section className="py-28 w-full bg-[#F3EEFF] relative text-slate-900 overflow-hidden border-b border-purple-200/80">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/30 via-indigo-200/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-pink-300/20 via-purple-200/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#8855CC_1px,transparent_1px),linear-gradient(180deg,#8855CC_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-900 px-5 py-2 rounded-full bg-purple-100 border border-purple-300 inline-block shadow-sm">
            ⚡ FOUR-PILLAR ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            How We <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-[#0ED3DD] bg-clip-text text-transparent">Help You Learn</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Four connected pillars radiating around our central WabiSkills educational hub.
          </p>
        </div>

        {/* Central WABISKILLS Visual Node Composition */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-[#0ED3DD] shadow-xl group hover:scale-105 transition-transform duration-300">
            <div className="bg-white/95 rounded-full px-8 py-3.5 flex items-center gap-3.5 border border-purple-200 text-slate-900 shadow-md">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-300 shrink-0">
                <img src={logoImg} alt="WabiSkills Emblem" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-purple-900 font-display">
                WABISKILLS CENTRAL NUCLEUS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-ping" />
            </div>
          </div>
        </div>

        {/* 4 Connected Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = hoveredNode === idx;
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredNode(idx)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-[1.5px] rounded-[2.2rem] transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-gradient-to-br from-purple-600 via-indigo-500 to-[#0ED3DD] shadow-2xl scale-[1.03]'
                    : 'bg-white/60 hover:bg-white/90 shadow-md border border-white/80'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[2.1rem] p-7 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-slate-900 border border-purple-100 shadow-sm">
                  <span className="absolute bottom-2 right-4 text-[5.5rem] font-black text-purple-900/10 pointer-events-none select-none" style={{ lineHeight: 1 }}>
                    {p.num}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-900 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-300">
                        PILLAR {p.num}
                      </span>
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isHovered ? 'bg-gradient-to-r from-purple-600 via-indigo-500 to-[#0ED3DD] text-white shadow-md' : 'bg-purple-50 text-purple-700 border border-purple-200'
                      }`}>
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">
                        {p.key}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-900">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                      {p.desc}
                    </p>
                  </div>

                  <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-gradient-to-r from-[#1DA1F2] via-[#0ED3DD] to-sky-500' : 'bg-slate-200'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
