import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowWeThink = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const principles = [
    {
      num: '01',
      title: 'THINK IN SYSTEMS',
      subtitle: 'Holistic Ecosystem Design',
      desc: 'Design technology as connected ecosystems rather than isolated features, ensuring seamless interoperability across enterprise tools.',
      icon: Layers,
      color: 'from-[#0284C7] to-[#0ED3DD]',
      tagColor: 'bg-cyan-100 text-[#0284C7] border-cyan-300',
      highlights: ['Microservice Decoupling', 'Unified Data Pipelines', 'API Interoperability'],
      impact: 'Eliminates departmental silos & data bottlenecks'
    },
    {
      num: '02',
      title: 'BUILD FOR SCALE',
      subtitle: 'Future-Proof Architecture',
      desc: 'Create resilient, elastic cloud architectures capable of evolving seamlessly with rapidly growing user bases and data loads.',
      icon: Cpu,
      color: 'from-[#0ED3DD] to-sky-500',
      tagColor: 'bg-sky-100 text-[#0284C7] border-sky-300',
      highlights: ['Auto-Scaling Clusters', '99.999% SLA Uptime', 'Zero-Downtime Migration'],
      impact: 'Prepares systems for 10x-100x traffic expansion'
    },
    {
      num: '03',
      title: 'ENGINEER WITH PURPOSE',
      subtitle: 'Pragmatic Code Craftsmanship',
      desc: 'Solve real business problems through practical, reliable code that prioritizes security, readability, and immediate ROI.',
      icon: Award,
      color: 'from-[#1DA1F2] to-indigo-600',
      tagColor: 'bg-blue-100 text-[#1DA1F2] border-blue-300',
      highlights: ['Zero Technical Debt', 'Measurable Business KPIs', 'Clean Code Standards'],
      impact: 'Drives maximum tangible value per sprint'
    },
    {
      num: '04',
      title: 'LEARN CONTINUOUSLY',
      subtitle: 'Talent & Knowledge Growth',
      desc: 'Combine rigorous software engineering practice with continuous hands-on mentorship, empowering internal teams to achieve long-term autonomy.',
      icon: Sparkles,
      color: 'from-cyan-500 to-[#0284C7]',
      tagColor: 'bg-teal-100 text-[#0284C7] border-teal-300',
      highlights: ['In-House Tech Academy', 'Peer Code Reviews', '1-on-1 Senior Coaching'],
      impact: 'Fosters enduring in-house technical independence'
    }
  ];

  const currentPrinciple = principles[activeIdx];

  return (
    <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/30 to-slate-50 relative text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Background Subtle Accent Matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky Executive Narrative & Dynamic Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 sticky top-28"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284C7]/10 border border-[#0284C7]/30 text-[#0284C7] text-[11px] font-black tracking-[0.25em] uppercase shadow-sm">
                <Sparkles size={14} className="text-[#0ED3DD]" />
                <span>OUR ENGINEERING MINDSET</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 leading-tight">
                How We <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Think</span>
              </h2>

              <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-[#0284C7] pl-5 py-1">
                "Technology should not simply work. It should create measurable value, remain adaptable, and empower lasting organizational capability."
              </p>
            </div>

            {/* Dynamic Active Principle Showcase Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPrinciple.num}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="p-8 rounded-3xl bg-white border-2 border-cyan-400/50 shadow-xl space-y-4 text-slate-900 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200">
                    PRINCIPLE {currentPrinciple.num} INSIGHT
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${currentPrinciple.color} text-white flex items-center justify-center font-bold text-xs shadow-md`}>
                    {currentPrinciple.num}
                  </div>
                </div>

                <h4 className="text-xl font-black font-display text-slate-900">
                  {currentPrinciple.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  <strong className="text-[#0284C7] font-bold">Key Impact:</strong> {currentPrinciple.impact}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-100">
                  {currentPrinciple.highlights.map((hl, hlIdx) => (
                    <span key={hlIdx} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-[#0ED3DD]" />
                      {hl}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: 4 Interactive Editorial Principles Cards */}
          <div className="lg:col-span-7 space-y-6">
            {principles.map((p, idx) => {
              const isActive = activeIdx === idx;
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-[1.5px] rounded-[2.2rem] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl scale-[1.01]'
                      : 'bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#0284C7]/40 hover:to-[#0ED3DD]/40'
                  }`}
                >
                  <div className={`p-8 rounded-[2.1rem] transition-all duration-300 space-y-5 ${
                    isActive ? 'bg-white text-slate-900 shadow-inner' : 'bg-white/80 text-slate-800 hover:bg-white'
                  }`}>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl font-black font-display ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`}>
                          {p.num}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${p.tagColor}`}>
                          {p.subtitle}
                        </span>
                      </div>

                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isActive ? 'bg-cyan-50 border border-cyan-200 text-[#0284C7] shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                        {p.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    {/* Micro Highlights Pill Row */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {p.highlights.map((h, hIdx) => (
                          <span key={hIdx} className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                            isActive ? 'bg-slate-100 text-slate-800' : 'bg-slate-50 text-slate-600'
                          }`}>
                            • {h}
                          </span>
                        ))}
                      </div>

                      <span className={`text-xs font-black flex items-center gap-1 ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`}>
                        <span>Explore</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
