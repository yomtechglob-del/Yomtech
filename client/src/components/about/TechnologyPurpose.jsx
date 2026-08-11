import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Users, Lightbulb, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export const TechnologyPurpose = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      num: '01',
      label: 'ENGINEERING',
      title: 'Code Craftsmanship',
      icon: Cpu,
      desc: 'Building high-performance software with zero technical debt, modular microservices, and enterprise security.',
      highlights: ['Clean Code Standards', 'Sub-50ms Response', 'Zero Hardcoded Secrets']
    },
    {
      num: '02',
      label: 'PEOPLE',
      title: 'Talent Empowerment',
      icon: Users,
      desc: 'Cultivating production-ready software engineers through 1-on-1 mentorship and real-world repository projects.',
      highlights: ['In-House Autonomy', '1-on-1 Mentorship', 'Production Repositories']
    },
    {
      num: '03',
      label: 'INNOVATION',
      title: 'Continuous Evolution',
      icon: Lightbulb,
      desc: 'Pioneering artificial intelligence automation, modern cloud DevOps, and emerging technology paradigms.',
      highlights: ['AI Models & Automation', 'Cloud Native DevOps', 'Continuous SLA Monitoring']
    },
    {
      num: '04',
      label: 'IMPACT',
      title: 'Measurable Value',
      icon: Award,
      desc: 'Delivering tangible business ROI, long-term system scalability, and enduring organizational independence.',
      highlights: ['3.5x Business ROI', '99.99% Uptime SLA', 'Zero Vendor Lock-In']
    }
  ];

  const currentNode = nodes[activeNode];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-[#0084C8] via-[#0072B8] to-[#0084C8] relative text-white overflow-hidden border-b border-sky-600/40">
      {/* Background Subtle Accent Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 text-center space-y-16 relative z-10">
        
        {/* Floating YomTech Logo Seal Badge */}
        <div className="flex justify-center">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-white/60 via-[#0ED3DD] to-white/60 shadow-xl group hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-xl rounded-full px-7 py-3 flex items-center gap-3.5 border border-white/40 shadow-md">
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shrink-0 shadow-xs">
                <img src={logoImg} alt="YomTech Emblem" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white font-display">
                BRAND PHILOSOPHY &amp; MISSION STATEMENT
              </span>
              <Sparkles size={15} className="text-amber-300 animate-spin shrink-0" />
            </div>
          </div>
        </div>

        {/* Editorial Quote Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white leading-[1.15] tracking-tight">
            "Technology becomes powerful when{' '}
            <span className="text-[#0ED3DD]">
              engineering, people, and purpose
            </span>{' '}
            move in the same direction."
          </h2>
        </motion.div>

        {/* Connected Visual System Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeNode === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveNode(idx)}
                onMouseEnter={() => setActiveNode(idx)}
                className={`p-[2px] rounded-[2.5rem] transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#D93695] via-[#FF5733] to-[#0ED3DD] shadow-[0_20px_50px_rgba(14,211,221,0.4)] scale-[1.03]'
                    : 'bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30'
                }`}
              >
                <div className={`rounded-[2.4rem] p-7 sm:p-8 space-y-6 h-full flex flex-col justify-between text-center items-center relative overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'bg-white/95 backdrop-blur-2xl text-slate-900 border border-white shadow-xl'
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
                }`}>
                  
                  <div className="space-y-4 w-full flex flex-col items-center">
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs ${
                        isActive
                          ? 'bg-gradient-to-r from-[#D93695] to-[#FF5733] text-white shadow-pink-500/20'
                          : 'bg-white/20 border border-white/30 text-white'
                      }`}>
                        NODE {node.num}
                      </span>
                      <Sparkles size={16} className={`transition-opacity ${isActive ? 'text-[#D93695] opacity-100 animate-pulse' : 'text-[#0ED3DD] opacity-80'}`} />
                    </div>

                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#D93695] via-[#FF5733] to-amber-400 text-white shadow-xl shadow-pink-500/30 scale-110'
                        : 'bg-white/15 text-[#0ED3DD] border border-white/20 group-hover:scale-105'
                    }`}>
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                    <div className="space-y-1">
                      <span className={`text-xs font-black uppercase tracking-wider font-display block ${isActive ? 'text-[#D93695]' : 'text-[#0ED3DD]'}`}>
                        {node.label}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-black font-display tracking-tight leading-tight ${isActive ? 'text-slate-900' : 'text-white'}`}>
                        {node.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`h-2 w-full rounded-full transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-[#D93695] via-[#FF5733] to-[#0ED3DD] animate-pulse shadow-sm' : 'bg-white/20'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Active Node Inspection Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#D93695] via-[#FF5733] to-[#0ED3DD] shadow-2xl text-left"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2.4rem] p-8 sm:p-11 text-slate-900 space-y-6 relative overflow-hidden border border-white shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D93695] to-[#FF5733] text-white shadow-md shadow-pink-500/25">
                  MISSION PILLAR {currentNode.num} • {currentNode.label}
                </span>
                <span className="text-xs sm:text-sm font-black text-[#0072B8] uppercase tracking-wider flex items-center gap-2 bg-sky-100/90 px-6 py-2.5 rounded-full border border-sky-300 shadow-xs">
                  <span>{currentNode.title}</span>
                  <ArrowRight size={16} />
                </span>
              </div>

              <div className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed bg-gradient-to-r from-sky-50 via-indigo-50/50 to-rose-50/40 p-6 rounded-2xl border border-sky-200/80 shadow-xs">
                {currentNode.desc}
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-4">
                {currentNode.highlights.map((hl, hlIdx) => (
                  <div key={hlIdx} className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-2.5 py-1.5 px-2 transition-transform hover:translate-x-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D93695] to-[#FF5733] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-extrabold">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
