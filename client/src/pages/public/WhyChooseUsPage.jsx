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

const COMPETITIVE_ADVANTAGES = [
  {
    title: 'End-to-End Expertise',
    desc: 'Full lifecycle delivery from initial architectural design to deployment, security hardening, and continuous 24/7 technical support.',
    icon: Layers,
    accent: 'cyan'
  },
  {
    title: '100% Custom-Built Systems',
    desc: 'Every system is engineered from scratch based on exact client workflows — zero reliance on rigid third-party templates or monthly licensing fees.',
    icon: Code,
    accent: 'emerald'
  },
  {
    title: 'Government & Enterprise Experience',
    desc: 'Proven track record delivering mission-critical platforms for federal ministries, security administrations, banks, and public institutions.',
    icon: Building2,
    accent: 'violet'
  },
  {
    title: 'Integrated Digital Ecosystem',
    desc: 'Unique synergy combining software engineering, ERP platforms, WabiSkills talent academy, WabiJob recruitment, and tech media production.',
    icon: Globe,
    accent: 'amber'
  },
  {
    title: 'AI & Next-Gen Innovation',
    desc: 'Deep integration of artificial intelligence, automated surveillance vision, predictive analytics, and cloud microservices.',
    icon: Cpu,
    accent: 'sky'
  },
  {
    title: 'Long-Term Partnership Mindset',
    desc: 'We focus on sustainable collaboration, system evolution, and dedicated SLA maintenance rather than one-time delivery.',
    icon: ShieldCheck,
    accent: 'rose'
  }
];

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

      {/* Grid */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-left space-y-3 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display">
              Our 6 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Competitive Advantages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPETITIVE_ADVANTAGES.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#0ED3DD] text-white p-3 shadow-md flex items-center justify-center">
                    <IconComp size={26} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;
