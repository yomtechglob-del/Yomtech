import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, Monitor, LayoutGrid, Globe, Eye, Target, Heart, Mail, CheckCircle2, Sparkles, 
  ArrowRight, Phone, Star, TrendingUp, Briefcase, Handshake, ChevronRight, Layers, Award, ShieldCheck, Check, Building2
} from 'lucide-react';

// Dedicated visual assets matching exact user design references
import heroTeamImg from '../../assets/about/hero_team.jpg';
import consultingTeamImg from '../../assets/about/consulting_team.jpg';
import teamDiscussionImg from '../../assets/about/team_discussion.jpg';
import aboutHeroImg from '../../assets/about/hero.svg';

// Custom River Flowing Background Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

// Ecosystem Logo Assets
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// High resolution visual images for capability cards
import educationImg from '../../assets/services/education.png';
import customImg from '../../assets/services/custom.png';
import coachingImg from '../../assets/services/coaching.png';
import cloudImg from '../../assets/services/cloud.png';

// Enterprise Premium About Us Components
import { AboutAtGlance } from '../../components/about/AboutAtGlance';
import { CoreFoundations } from '../../components/about/CoreFoundations';
import { CompanyGallery } from '../../components/about/CompanyGallery';
import { CompanyProfileDetails } from '../../components/about/CompanyProfileDetails';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

export const AboutPage = () => {
  const navigate = useNavigate();

  const ECOSYSTEM_LOGOS = [
    {
      id: 'yomtech',
      name: 'YomTech Global',
      tagline: 'Enterprise Software & Tech Talent Core',
      logo: logoEmblem,
      badge: 'Parent Core',
      badgeBg: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      boxStyle: 'from-cyan-950/80 via-slate-900/90 to-sky-950/80 border-cyan-400/50 hover:border-cyan-300'
    },
    {
      id: 'wabiskills',
      name: 'WabiSkills Academy',
      tagline: 'Practical Hands-on Bootcamps & Mentorship',
      logo: wabiSkillsLogo,
      badge: 'Tech Academy',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      boxStyle: 'from-emerald-950/80 via-slate-900/90 to-teal-950/80 border-emerald-400/50 hover:border-emerald-300'
    },
    {
      id: 'wabijobs',
      name: 'WabiJobs Platform',
      tagline: 'Talent Engineering & Career Ecosystem',
      logo: wabiJobsLogo,
      badge: 'Talent Network',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      boxStyle: 'from-slate-900/90 via-sky-950/80 to-slate-950/90 border-sky-400/50 hover:border-sky-300'
    },
    {
      id: 'yomnex',
      name: 'Yomnex ERP System',
      tagline: 'Enterprise ERP & WMS Solutions',
      logo: yomnexLogo,
      badge: 'ERP Platform',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      boxStyle: 'from-indigo-950/80 via-slate-900/90 to-slate-950/90 border-indigo-400/50 hover:border-indigo-300'
    }
  ];

  const approachCards = [
    {
      icon: Briefcase,
      title: 'ERP, CRM & WMS Solutions',
      desc: 'We design and implement enterprise-grade ERP, CRM, and WMS systems that streamline business operations, improve decision-making, and enhance customer engagement.',
      bg: 'bg-white text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-cyan-300',
      iconBox: 'bg-slate-50 border border-slate-200 text-[#0284C7]',
      btnStyle: 'bg-slate-100 text-slate-800 hover:bg-cyan-500 hover:text-white',
      link: '/services',
      accentTag: 'Enterprise Systems'
    },
    {
      icon: TrendingUp,
      title: 'Custom Software & Apps',
      desc: 'From responsive web apps to high-performance mobile apps, we build tailored software solutions that meet your exact business needs and scale with your growth.',
      bg: 'bg-gradient-to-br from-[#a7f3d0] via-[#6ee7b7] to-[#34d399] text-slate-950 border border-emerald-300 shadow-xl hover:shadow-2xl',
      iconBox: 'bg-white/90 border border-emerald-400 text-emerald-800',
      btnStyle: 'bg-emerald-950 text-white hover:bg-white hover:text-emerald-950',
      link: '/services',
      accentTag: 'Web & Mobile'
    },
    {
      icon: Handshake,
      title: 'Cloud Services & DevOps',
      desc: 'We provide cloud migration, hosting, and deployment services that enable secure, scalable, and cost-effective business operations in the cloud.',
      bg: 'bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0284c7] text-white border border-sky-400 shadow-xl hover:shadow-2xl',
      iconBox: 'bg-white/10 border border-white/20 text-cyan-200',
      btnStyle: 'bg-white text-slate-950 hover:bg-cyan-300 hover:text-slate-950',
      link: '/services',
      accentTag: 'Cloud & Security'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">
      
      {/* ========================================================
          1. HERO SECTION (Left Text + Right 4-Logo Ecosystem Showcase Grid)
      ======================================================== */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        
        {/* Borderless Flowing Background Image Layer 1 (ermi-two.jpg - Left/Center) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img 
            src={ermiTwoImg} 
            alt="Flowing Background Layer 1" 
            className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0"
          />
        </div>

        {/* Borderless Flowing Background Image Layer 2 (ermin-one.jpg - Positioned to the Right) */}
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img 
            src={erminOneImg} 
            alt="Flowing Background Layer 2 Right" 
            className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0"
          />
        </div>

        {/* Dark Cyan Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        {/* Glowing Luminous Cyan Flares */}
        <div className="absolute -top-40 left-[-10%] w-[800px] h-[600px] bg-gradient-to-r from-[#48cae4]/35 via-[#0077b6]/25 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-[#90e0ef]/20 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] bg-[#00b4d8]/25 blur-[120px] rounded-full pointer-events-none" />

        {/* Full-Hero Height Glowing Curved SVG Path Lines (Starts at Bottom Hero Border, Terminates on Top Hero Borders/Corners) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroLaserGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#48cae4" stopOpacity="0.85" />
              <stop offset="88%" stopColor="#90e0ef" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#90e0ef" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLaserGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077b6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00b4d8" stopOpacity="0.9" />
              <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <filter id="heroGlowFlares" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left Track (Behind Column 1: YomTech -> WabiJobs): Starts at Bottom Border (710, 600) with Decreased Margin, Terminates at Top Right (955, 14) */}
          <path 
            d="M 710 600 C 690 380, 790 160, 955 14" 
            stroke="#00b4d8" 
            strokeWidth="7" 
            strokeLinecap="round"
            opacity="0.3"
            filter="url(#heroGlowFlares)"
          />
          <path 
            d="M 710 600 C 690 380, 790 160, 955 14" 
            stroke="url(#heroLaserGrad1)" 
            strokeWidth="4" 
            strokeLinecap="round"
            filter="url(#heroGlowFlares)"
            className="animate-pulse"
          />

          {/* Right Track (Behind Column 2: WabiSkills -> Yomnex): Starts at Bottom Border (790, 600) with Decreased Margin, Terminates at Right Border (1000, 110) */}
          <path 
            d="M 790 600 C 780 380, 890 200, 1000 110" 
            stroke="#38bdf8" 
            strokeWidth="8" 
            strokeLinecap="round"
            opacity="0.35"
            filter="url(#heroGlowFlares)"
          />
          <path 
            d="M 790 600 C 780 380, 890 200, 1000 110" 
            stroke="url(#heroLaserGrad2)" 
            strokeWidth="4.5" 
            strokeLinecap="round"
            filter="url(#heroGlowFlares)"
          />

          {/* Top-Right Corner Border Energy Beacon Node for Track 1 */}
          <circle cx="955" cy="14" r="8" fill="#90e0ef" filter="url(#heroGlowFlares)" className="animate-ping" />
          <circle cx="955" cy="14" r="5" fill="#ffffff" />

          {/* Right Side Border Energy Beacon Node for Track 2 (Positioned Directly ON Right Edge Border) */}
          <circle cx="996" cy="110" r="9" fill="#38bdf8" filter="url(#heroGlowFlares)" className="animate-ping" />
          <circle cx="996" cy="110" r="5.5" fill="#90e0ef" filter="url(#heroGlowFlares)" />
          <circle cx="996" cy="110" r="3" fill="#ffffff" />
        </svg>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Hero Content (Start/Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <div className="flex items-center gap-1 text-amber-300">
                <span className="font-extrabold text-sm mr-1 text-white">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="text-white/40">|</span>
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">2K+ Learners &amp; 25+ Solutions</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  YomTech Global
                </span> <br />
                Innovative Tech Solutions
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              At YomTech Global, we empower businesses, innovators, and learners to thrive in the digital era. From enterprise software to cloud solutions and world-class training, we don’t just deliver technology, helping you create the future.
            </p>

            {/* Dual CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Explore Our Services</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3.5 shadow-md"
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

          {/* Right Hero: 2 Vertical Floating Logo Columns (Matching Exact User Red Line Drawn Channels) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[400px]"
          >
            {/* Luminous Glowing Light Halo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/35 via-sky-300/30 to-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

            {/* Compact Bezier Curved Stream Container: All 5 emblems listed with tight, crisp spacing strictly IN BETWEEN the curves of the two glowing laser track lines */}
            <div className="relative w-full max-w-md sm:max-w-lg h-[420px] sm:h-[450px] p-2 z-10">
              
              {/* 1. YomTech Global (Top Emblem - Clean logo icon without text badge) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[0%] left-[72%] sm:left-[76%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => navigate('/services')}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[1.2rem] bg-white/95 backdrop-blur-xl border-2 border-white shadow-[0_10px_28px_rgba(0,180,216,0.45)] p-1.5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(0,180,216,0.65)] group-hover:border-cyan-300 transition-all duration-300">
                  <img 
                    src={logoEmblem} 
                    alt="YomTech Global" 
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* 2. WabiSkills Academy (Upper Middle Emblem - Clean logo icon without text badge) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                className="absolute top-[21%] left-[56%] sm:left-[60%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => navigate('/academy')}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[1.2rem] bg-white/95 backdrop-blur-xl border-2 border-white shadow-[0_10px_28px_rgba(0,180,216,0.45)] p-1.5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(0,180,216,0.65)] group-hover:border-emerald-300 transition-all duration-300">
                  <img 
                    src={wabiSkillsLogo} 
                    alt="WabiSkills Academy" 
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* 3. Ermi Studio Showcase Emblem (Centerpiece CEO Emblem - Prominently sized strictly inside the two laser lines) */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], y: [-2, 2, -2] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-[40%] left-[39%] sm:left-[43%] flex flex-col items-center group cursor-pointer z-30 -translate-x-1/2"
                onClick={() => navigate('/about')}
              >
                <div className="relative w-18 h-18 sm:w-21 sm:h-21 rounded-[1.8rem] bg-white/95 backdrop-blur-xl border-3 border-cyan-300 shadow-[0_20px_55px_rgba(0,180,216,0.8)] p-0.5 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:border-white transition-all duration-300">
                  <img 
                    src={ermiTwoImg} 
                    alt="Ermi CEO Central Showcase" 
                    className="w-full h-full object-cover object-top rounded-[1.5rem] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-1 right-1 z-20 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-md animate-ping" />
                  <span className="absolute top-1 right-1 z-20 w-3 h-3 rounded-full bg-white border-2 border-cyan-400" />
                </div>
                <div className="mt-0.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0284C7] text-white text-[9px] sm:text-[10px] font-black font-display tracking-wider shadow-xl border border-white group-hover:bg-white group-hover:text-[#0284C7] transition-colors whitespace-nowrap">
                  FOUNDER &amp; CEO
                </div>
              </motion.div>

              {/* 4. WabiJobs Platform (Lower Middle Emblem - Increased margin from Ermi CEO) */}
              <motion.div
                animate={{ y: [-4, 2, -4] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-[65%] left-[32%] sm:left-[36%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => navigate('/services')}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[1.2rem] bg-white/95 backdrop-blur-xl border-2 border-white shadow-[0_10px_28px_rgba(0,180,216,0.45)] p-1.5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(0,180,216,0.65)] group-hover:border-amber-300 transition-all duration-300">
                  <img 
                    src={wabiJobsLogo} 
                    alt="WabiJobs" 
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* 5. Yomnex ERP System (Bottom Emblem - Increased margin from WabiJobs) */}
              <motion.div
                animate={{ y: [2, -4, 2] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-[86%] left-[26%] sm:left-[30%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => navigate('/services')}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[1.2rem] bg-white/95 backdrop-blur-xl border-2 border-white shadow-[0_10px_28px_rgba(0,180,216,0.45)] p-1.5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(0,180,216,0.65)] group-hover:border-indigo-300 transition-all duration-300">
                  <img 
                    src={yomnexLogo} 
                    alt="Yomnex ERP" 
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-indigo-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>



      {/* ========================================================
          4. YOMTECH GLOBAL AT A GLANCE (Heritage, Stats, Footprint)
      ======================================================== */}
      <AboutAtGlance />

      {/* ========================================================
          5. CORE FOUNDATIONS (Mission, Vision, Values Matrix)
      ======================================================== */}
      <CoreFoundations />

      {/* ========================================================
          5.1. PAN-AFRICAN INNOVATION & TEAM GALLERY (Asymmetric Masonry Grid)
      ======================================================== */}
      <CompanyGallery />

      {/* ========================================================
          6. OFFICIAL COMPANY PROFILE & INSTITUTIONAL CREDENTIALS
          (CEO Message, Org Structure, Platforms, Methodology, Partners, Legal & Certifications)
      ======================================================== */}
      <CompanyProfileDetails />

      {/* ========================================================
          7. FINAL CALL TO ACTION
      ======================================================== */}
      <AboutFinalCTA />

    </div>
  );
};

export default AboutPage;