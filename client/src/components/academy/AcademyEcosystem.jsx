import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Users2, Network, TrendingUp, Sparkles } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const AcademyEcosystem = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { name: 'LEARN', desc: 'Acquire production-grade software engineering principles.', icon: BookOpen },
    { name: 'BUILD', desc: 'Engineer fullstack applications, microservices & AI models.', icon: Code2 },
    { name: 'MENTOR', desc: 'Receive direct 1-on-1 code reviews and architecture guidance.', icon: Users2 },
    { name: 'CONNECT', desc: 'Network with global technology teams and tech partners.', icon: Network },
    { name: 'GROW', desc: 'Accelerate career development with practical code craftsmanship.', icon: TrendingUp }
  ];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[700px] h-[700px] bg-gradient-to-tl from-sky-200/25 via-cyan-100/20 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0284C7] px-4.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300 inline-block shadow-sm">
            🌐 GLOBAL INTEGRATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900">
            Academy <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Connecting WabiSkills learners, mentors, projects, and YomTech Global engineering core.
          </p>
        </div>

        {/* Central Core Element */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl group hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-full px-8 py-3.5 flex items-center gap-3.5 border border-cyan-200 text-slate-900 shadow-md">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-300 shrink-0">
                <img src={logoImg} alt="WabiSkills Emblem" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0284C7] font-display">
                WABISKILLS CENTRAL NUCLEUS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-ping" />
            </div>
          </div>
        </div>

        {/* 5 Outer Nodes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-[1720px] mx-auto">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeNode === idx;
            return (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveNode(idx)}
                onMouseEnter={() => setActiveNode(idx)}
                className={`p-[2px] rounded-[2.2rem] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl scale-[1.03]'
                    : 'bg-slate-200/80 hover:bg-slate-300 shadow-sm'
                }`}
              >
                <div className={`rounded-[2.1rem] p-6 space-y-4 text-center items-center flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'bg-white rounded-[2.1rem] text-slate-900 border border-cyan-200 shadow-xl'
                    : 'bg-white/95 text-slate-900 border border-slate-100 shadow-md hover:shadow-lg'
                }`}>
                  <div className="space-y-3 w-full flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white shadow-md' : 'bg-cyan-50 text-[#0284C7] border border-cyan-200'
                    }`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="text-base font-black font-display text-slate-900">
                      {node.name}
                    </h3>

                    <p className="text-xs leading-relaxed font-semibold text-slate-600">
                      {node.desc}
                    </p>
                  </div>

                  <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]' : 'bg-slate-200'
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
