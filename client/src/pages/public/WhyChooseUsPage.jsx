import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award, ShieldCheck, Layers, Code, Building2, Globe, Cpu, Zap,
  CheckCircle2, ArrowRight, Phone, Sparkles, Heart, Users, Star, Lock
} from 'lucide-react';

import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';

const ADVANTAGE_PAIRS = [
  {
    left: {
      num: '01',
      title: 'End-to-End Expertise',
      desc: 'Full lifecycle delivery from initial architectural design to deployment, security hardening, and continuous 24/7 technical support.',
      icon: Layers,
    },
    right: {
      num: '02',
      title: '100% Custom-Built Systems',
      desc: 'Every system is engineered from scratch based on exact client workflows — zero reliance on rigid third-party templates.',
      icon: Code,
    },
  },
  {
    left: {
      num: '03',
      title: 'Government & Enterprise Experience',
      desc: 'Proven track record delivering mission-critical platforms for federal ministries, security administrations, and banks.',
      icon: Building2,
    },
    right: {
      num: '04',
      title: 'Integrated Digital Ecosystem',
      desc: 'Unique synergy combining software engineering, ERP platforms, WabiSkills academy, WabiJob recruitment, and tech media.',
      icon: Globe,
    },
  },
  {
    left: {
      num: '05',
      title: 'AI & Next-Gen Innovation',
      desc: 'Deep integration of artificial intelligence, automated surveillance vision, predictive analytics, and cloud microservices.',
      icon: Cpu,
    },
    right: {
      num: '06',
      title: 'Long-Term Partnership Mindset',
      desc: 'We focus on sustainable collaboration, system evolution, and dedicated SLA maintenance rather than one-time delivery.',
      icon: ShieldCheck,
    },
  },
];

const InterlockingAdvantageRow = ({ left, right, idx }) => {
  const LeftIcon = left.icon;
  const RightIcon = right.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className="relative w-full my-3 sm:my-4 group transition-all duration-300 hover:scale-[1.01]"
    >
      {/* DESKTOP SVG PUZZLE INTERLOCKING JOIN */}
      <div className="hidden md:block relative w-full aspect-[600/150] drop-shadow-xl">
        <svg viewBox="0 0 600 150" className="w-full h-full overflow-visible pointer-events-none block">
          <path
            d="M 24,0 L 285,0 C 310,0 326,12 326,32 L 326,42 C 326,62 308,72 285,75 C 262,78 244,88 244,108 L 244,118 C 244,138 260,150 285,150 L 24,150 C 10,150 0,140 0,126 L 0,24 C 0,10 10,0 24,0 Z"
            fill="#004b75"
          />
          <path
            d="M 285,0 L 576,0 C 590,0 600,10 600,24 L 600,126 C 600,140 590,150 576,150 L 285,150 C 260,150 244,138 244,118 L 244,108 C 244,88 262,78 285,75 C 308,72 326,62 326,42 L 326,32 C 326,12 310,0 285,0 Z"
            fill="#ea580c"
          />
        </svg>

        <div className="absolute inset-0 grid grid-cols-2 p-6 pointer-events-auto">
          {/* LEFT CARD CONTENT */}
          <div className="relative flex flex-col justify-between pr-10 text-left">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                <LeftIcon size={24} strokeWidth={1.8} />
              </div>
              <span className="text-white font-black text-4xl font-display tracking-tight absolute right-[-24px] top-1 z-20 select-none">
                {left.num}
              </span>
            </div>
            <div className="space-y-1 z-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                {left.title}
              </h3>
              <p className="text-xs lg:text-sm font-medium text-white/90 leading-tight font-sans line-clamp-2">
                {left.desc}
              </p>
            </div>
          </div>

          {/* RIGHT CARD CONTENT */}
          <div className="relative flex flex-col justify-between pl-10 text-left">
            <div className="flex items-center justify-between">
              <span className="text-white font-black text-4xl font-display tracking-tight absolute left-[-24px] bottom-1 z-20 select-none">
                {right.num}
              </span>
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform ml-auto">
                <RightIcon size={24} strokeWidth={1.8} />
              </div>
            </div>
            <div className="space-y-1 z-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                {right.title}
              </h3>
              <p className="text-xs lg:text-sm font-medium text-white/90 leading-tight font-sans line-clamp-2">
                {right.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STACKED LAYOUT */}
      <div className="md:hidden flex flex-col space-y-3 rounded-3xl overflow-hidden shadow-lg">
        <div className="bg-[#004b75] text-white p-6 rounded-3xl space-y-4 text-left relative">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <LeftIcon size={22} />
            </div>
            <span className="text-white font-black text-3xl font-display">{left.num}</span>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white font-display">{left.title}</h3>
            <p className="text-xs text-white/90 font-medium leading-relaxed mt-1">{left.desc}</p>
          </div>
        </div>

        <div className="bg-[#ea580c] text-white p-6 rounded-3xl space-y-4 text-left relative">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <RightIcon size={22} />
            </div>
            <span className="text-white font-black text-3xl font-display">{right.num}</span>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white font-display">{right.title}</h3>
            <p className="text-xs text-white/90 font-medium leading-relaxed mt-1">{right.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyChooseUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <Award size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                WHAT SETS US APART
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-roboto font-extrabold tracking-tight leading-tight">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">
                Yomtech Global
              </span>
            </h1>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl">
              We go beyond software development — we build complete digital ecosystems that combine technology, talent development, and media to drive real digital transformation.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full"
          >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center">
                  <img src={logoEmblem} alt="YomTech" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Proven Excellence</h3>
                  <p className="text-xs text-cyan-200">100% In-House Engineering</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Zero reliance on external templates, complete code ownership, zero monthly licensing fees, and sub-50ms performance guarantee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid of Interlocking Competitive Advantage Cards */}
      <section className="py-20 lg:py-28 bg-[#E3F2FD] relative overflow-hidden font-sans border-b border-slate-200/80">
        {/* Background Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#0284c7 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300 text-[#004b75] text-xs font-black uppercase tracking-widest shadow-xs">
              <Sparkles className="w-4 h-4 text-[#004b75]" />
              <span>ENTERPRISE ADVANTAGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight">
              Our 6 Core Competitive Advantages
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {ADVANTAGE_PAIRS.map((pair, idx) => (
              <InterlockingAdvantageRow
                key={pair.left.num}
                left={pair.left}
                right={pair.right}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;
