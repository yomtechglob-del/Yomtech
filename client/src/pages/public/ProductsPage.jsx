import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, GraduationCap, MessageSquare, Globe, ArrowRight,
  Phone, Star, Briefcase, Building2, Video, ExternalLink
} from 'lucide-react';

// Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// Products Components
import { ProductsCatalogue } from '../../components/products/ProductsCatalogue';
import { ProductsVideoShowcase } from '../../components/products/ProductsVideoShowcase';
import { ProductsDedicatedPages } from '../../components/products/ProductsDedicatedPages';
import { ProductsRequestDemo } from '../../components/products/ProductsRequestDemo';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

// Floating platforms for the hero
const HERO_PLATFORMS = [
  { id: 'wabiskills', name: 'WabiSkills', logo: wabiSkillsLogo, badge: 'Live', badgeColor: 'bg-amber-400', link: 'https://wabiskills.com/', offsetClass: 'top-[-4%] left-[82%]', delay: 4 },
  { id: 'wabijob',    name: 'WabiJob',    logo: wabiJobsLogo,   badge: 'Live', badgeColor: 'bg-emerald-400', link: 'https://wabijob.com/', offsetClass: 'top-[15%] left-[68%]', delay: 4.4 },
  { id: 'yomnex',    name: 'Yomnex ERP', logo: yomnexLogo,     badge: 'ERP',  badgeColor: 'bg-cyan-400', link: '#yomnex', offsetClass: 'top-[72%] left-[28%]', delay: 4.6 },
];

export const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">

        {/* Flowing Background Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        {/* Ambient Glows */}
        <div className="absolute -top-40 left-[-10%] w-[800px] h-[600px] bg-gradient-to-r from-[#48cae4]/35 via-[#0077b6]/25 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-[#90e0ef]/20 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* SVG Laser Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 600" fill="none">
          <defs>
            <linearGradient id="prodLaserGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#48cae4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#90e0ef" stopOpacity="0" />
            </linearGradient>
            <filter id="prodGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M 710 600 C 690 380, 790 160, 955 14" stroke="#00b4d8" strokeWidth="7" strokeLinecap="round" opacity="0.3" filter="url(#prodGlow)" />
          <path d="M 710 600 C 690 380, 790 160, 955 14" stroke="url(#prodLaserGrad1)" strokeWidth="4" strokeLinecap="round" filter="url(#prodGlow)" className="animate-pulse" />
          <path d="M 790 600 C 780 380, 890 200, 1000 110" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" opacity="0.35" filter="url(#prodGlow)" />
          <path d="M 790 600 C 780 380, 890 200, 1000 110" stroke="url(#prodLaserGrad1)" strokeWidth="4.5" strokeLinecap="round" filter="url(#prodGlow)" />
        </svg>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <div className="flex items-center gap-1 text-amber-300">
                <span className="font-extrabold text-sm mr-1 text-white">6</span>
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              </div>
              <span className="text-white/40">|</span>
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">Digital Products & Platforms Ecosystem</span>
            </div>

            {/* Headline */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Built for Impact. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Designed to Scale.
                </span>{' '}
                <br />
                Owned by YomTech.
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              YomTech Global doesn't just build technology for clients — we design, own, and operate our own scalable digital platforms. From education and talent ecosystems to enterprise ERP, collaboration, and innovation media, our product portfolio drives measurable real-world impact.
            </p>

            {/* Quick Product Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'WabiSkills', href: '#wabiskills', color: 'bg-amber-400/20 border-amber-300/40 text-amber-200' },
                { name: 'WabiJob', href: '#wabijob', color: 'bg-emerald-400/20 border-emerald-300/40 text-emerald-200' },
                { name: 'Yomnex ERP', href: '#yomnex', color: 'bg-cyan-400/20 border-cyan-300/40 text-cyan-200' },
                { name: 'WabiX', href: '#wabix', color: 'bg-purple-400/20 border-purple-300/40 text-purple-200' },
                { name: 'Mari', href: '#mari', color: 'bg-sky-400/20 border-sky-300/40 text-sky-200' },
                { name: 'Yomtech Media', href: '#yomtech-media', color: 'bg-indigo-400/20 border-indigo-300/40 text-indigo-200' },
              ].map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  className={`px-4 py-1.5 rounded-full border backdrop-blur-sm text-xs font-black uppercase tracking-widest transition-all hover:scale-105 ${p.color}`}
                >
                  {p.name}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Request a Demo</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-md">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-cyan-200 font-bold uppercase tracking-wider">Direct Line</p>
                  <p className="text-xs font-black text-white">+251 (977) 666-699</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Floating Logo Constellation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/35 via-sky-300/30 to-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/4.5] p-2 z-10">

              {/* Central YomTech ERP logo */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], y: [-2, 2, -2] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[35%] left-[38%] flex flex-col items-center group cursor-pointer z-30 -translate-x-1/2"
                onClick={() => window.open('https://yomtechglobal.org/', '_blank')}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-[2.6rem] bg-white/95 backdrop-blur-xl border-[4px] border-cyan-300 shadow-[0_25px_70px_rgba(0,180,216,0.9)] p-3 flex items-center justify-center overflow-hidden group-hover:scale-125 transition-all duration-300">
                  <img src={logoEmblem} alt="YomTech Global" className="w-full h-full object-contain" />
                  <span className="absolute top-2 right-2 z-20 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 animate-ping" />
                  <span className="absolute top-2 right-2 z-20 w-4 h-4 rounded-full bg-white border-2 border-cyan-400" />
                </div>
                <div className="mt-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0284C7] text-white text-xs sm:text-sm font-black tracking-wider shadow-xl border border-white whitespace-nowrap">
                  6 PLATFORMS
                </div>
              </motion.div>

              {/* WabiSkills */}
              <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-4%] left-[86%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => window.open('https://wabiskills.com/', '_blank')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 transition-all">
                  <img src={wabiSkillsLogo} alt="WabiSkills" className="max-w-full max-h-full object-contain" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900 animate-pulse" />
                </div>
              </motion.div>

              {/* WabiJob */}
              <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                className="absolute top-[14%] left-[68%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => window.open('https://wabijob.com/', '_blank')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 transition-all">
                  <img src={wabiJobsLogo} alt="WabiJob" className="max-w-full max-h-full object-contain" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                </div>
              </motion.div>

              {/* Yomnex */}
              <motion.div animate={{ y: [-4, 2, -4] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-[74%] left-[30%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 transition-all">
                  <img src={yomnexLogo} alt="Yomnex ERP" className="max-w-full max-h-full object-contain" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900 animate-pulse" />
                </div>
              </motion.div>

              {/* WabiX placeholder */}
              <motion.div animate={{ y: [2, -4, 2] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-[96%] left-[60%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] bg-white/95 shadow-[0_12px_32px_rgba(147,51,234,0.4)] p-2 flex items-center justify-center group-hover:scale-125 transition-all">
                  <MessageSquare size={28} className="text-purple-500" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 border-2 border-slate-900 animate-pulse" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTIONS ────────────────────────────────────────────────────── */}
      <ProductsCatalogue />
      <ProductsVideoShowcase />
      <ProductsDedicatedPages />
      <ProductsRequestDemo />
      <AboutFinalCTA />
    </div>
  );
};

export default ProductsPage;
