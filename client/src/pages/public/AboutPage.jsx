import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, Monitor, LayoutGrid, Globe, Eye, Target, Heart, Mail, CheckCircle2, Sparkles, ArrowRight
} from 'lucide-react';
import { HeroCanvas } from '../../components/common/HeroCanvas';

// Dedicated vector SVG image assets matching exact user design screenshots
import aboutHeroImg from '../../assets/about/hero.svg';
import aboutCompanyImg from '../../assets/about/company.svg';
import aboutExpertiseImg from '../../assets/about/expertise.svg';
import aboutTeamImg from '../../assets/about/team.svg';

// High resolution visual images for capability cards
import educationImg from '../../assets/services/education.png';
import customImg from '../../assets/services/custom.png';
import coachingImg from '../../assets/services/coaching.png';
import cloudImg from '../../assets/services/cloud.png';

// 12 New Enterprise Premium About Us Components
import { AboutAtGlance } from '../../components/about/AboutAtGlance';
import { HowWeThink } from '../../components/about/HowWeThink';
import { EngineeringApproach } from '../../components/about/EngineeringApproach';
import { SoftwareTalentSplit } from '../../components/about/SoftwareTalentSplit';
import { ImpactModel } from '../../components/about/ImpactModel';
import { WhyModelDifferent } from '../../components/about/WhyModelDifferent';
import { TechnologyPurpose } from '../../components/about/TechnologyPurpose';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

export const AboutPage = () => {
  const navigate = useNavigate();
  const [activePillar, setActivePillar] = useState('mission');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const pillarContent = {
    mission: {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'ENGINEERING PURPOSE',
      icon: Target,
      color: '#0284C7',
      bgLight: 'bg-sky-50',
      borderColor: 'border-[#0284C7]',
      ringActive: 'ring-4 ring-sky-400/40 shadow-xl shadow-sky-500/30 scale-105 z-30 bg-sky-100',
      textColor: 'text-[#0284C7]',
      desc: 'We aim to empower companies and ambitious learners with cutting-edge software, resilient cloud architectures, and AI-driven insights—engineering technology that solves complex real-world challenges and accelerates digital growth.',
      bullets: [
        'Build enterprise-grade ERP, CRM, and cloud systems',
        'Bridge the gap between theoretical knowledge & industry tech careers',
        'Deliver scalable, high-performance software with zero compromise on quality'
      ]
    },
    vision: {
      id: 'vision',
      title: 'Our Vision',
      subtitle: 'SHAPING THE FUTURE',
      icon: Eye,
      color: '#D97706',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-500',
      ringActive: 'ring-4 ring-amber-400/40 shadow-xl shadow-amber-500/30 scale-105 z-30 bg-amber-100',
      textColor: 'text-amber-600',
      desc: "Our vision is to become Africa's premier technology innovation hub and software talent powerhouse—enhancing everyday business operations through transformative engineering, fostering international collaboration, and shaping the digital future.",
      bullets: [
        'Lead digital transformation across enterprise and emerging markets',
        'Establish world-class software engineering bootcamps via WabiSkills',
        'Pioneer AI, cloud, and automated systems for global clients'
      ]
    },
    values: {
      id: 'values',
      title: 'Our Core Values',
      subtitle: 'GUIDING PRINCIPLES',
      icon: Heart,
      color: '#059669',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      ringActive: 'ring-4 ring-emerald-400/40 shadow-xl shadow-emerald-500/30 scale-105 z-30 bg-emerald-100',
      textColor: 'text-emerald-600',
      desc: 'We are anchored by Precision Engineering, Continuous Innovation, Uncompromising Integrity, and Impact-Driven Mentorship—putting quality, transparency, and client success at the core of everything we build and teach.',
      bullets: [
        'Precision Engineering & Code Craftsmanship',
        'Uncompromising Transparency & Ethical Partnership',
        'Empowering Mentorship & Sustainable Growth'
      ]
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const bulletPoints = [
    {
      icon: Cpu,
      title: 'Tech Academy & Training',
      badge: 'MENTORSHIP',
      image: educationImg,
      topBar: 'from-[#0EA5E9] to-[#0ED3DD]',
      iconBg: 'from-[#0EA5E9] to-[#0ED3DD]',
      num: '01',
      shadowColor: 'hover:shadow-[0_16px_35px_rgba(14,165,233,0.15)] hover:border-sky-300',
      titleColor: 'group-hover:text-[#0284C7]',
      badgeColor: 'bg-sky-50 text-[#0284C7] border-sky-200',
      text: 'We provide online training and mentorship in AI, UI/UX, Fullstack Development, and Data Analytics — helping learners gain industry-ready skills.'
    },
    {
      icon: Monitor,
      title: 'Enterprise Software Build',
      badge: 'SOLUTIONS',
      image: customImg,
      topBar: 'from-[#7C3AED] to-[#A855F7]',
      iconBg: 'from-[#7C3AED] to-[#A855F7]',
      num: '02',
      shadowColor: 'hover:shadow-[0_16px_35px_rgba(124,58,237,0.15)] hover:border-violet-300',
      titleColor: 'group-hover:text-[#7C3AED]',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      text: 'We deliver custom software solutions, cloud integration, and IT consulting to businesses, enabling them to innovate and scale faster.'
    },
    {
      icon: LayoutGrid,
      title: 'Hands-on Project Labs',
      badge: 'PRACTICAL',
      image: coachingImg,
      topBar: 'from-[#059669] to-[#34D399]',
      iconBg: 'from-[#059669] to-[#34D399]',
      num: '03',
      shadowColor: 'hover:shadow-[0_16px_35px_rgba(5,150,105,0.15)] hover:border-emerald-300',
      titleColor: 'group-hover:text-[#059669]',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      text: 'Hands-on workshops, real-world repository projects, and 1-on-1 coaching ensure practical experience for both individuals and teams.'
    },
    {
      icon: Globe,
      title: 'Global Tech Network',
      badge: 'COLLABORATION',
      image: cloudImg,
      topBar: 'from-[#D97706] to-[#F59E0B]',
      iconBg: 'from-[#D97706] to-[#F59E0B]',
      num: '04',
      shadowColor: 'hover:shadow-[0_16px_35px_rgba(217,119,6,0.15)] hover:border-amber-300',
      titleColor: 'group-hover:text-amber-600',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      text: 'We collaborate globally, building long-lasting partnerships with enterprise organizations and ambitious learners to shape the digital future.'
    }
  ];

  const currentPillar = pillarContent[activePillar];
  const CurrentIcon = currentPillar.icon;

  return (
    <div className="hero-cyan-gradient text-white min-h-screen relative overflow-hidden">
      {/* Luminous Arc Spotlight Flare */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-emerald-500/30 via-amber-600/20 to-transparent blur-[130px] rounded-[50%] pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[260px] bg-emerald-300/20 blur-[75px] rounded-[50%] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="w-full pt-52 sm:pt-60 md:pt-64 pb-28 md:pb-36 relative z-10 hero-cyan-gradient">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-[#0ED3DD]/50 text-[#0ED3DD] text-xs font-black tracking-widest uppercase shadow-[0_6px_25px_rgba(14,211,221,0.25)] hover:border-cyan-300 transition-all">
            <div className="w-5.5 h-5.5 rounded-full bg-[#0ED3DD]/20 border border-[#0ED3DD]/50 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-pulse" />
            </div>
            <span className="whitespace-nowrap">WHO WE ARE — ESTABLISHED 2015</span>
          </div>

          <div className="space-y-3 font-display font-black tracking-tight leading-[1.1]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
              Pioneering Enterprise Software <br />
              <span className="bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                &amp; Tech Talent Engineering
              </span>
            </h1>
          </div>

          <p className="text-slate-100 text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            YomTech Global is a premiere software development and talent engineering platform. We architect scalable digital enterprise systems while cultivating top-tier tech professionals.
          </p>

          {/* Action Buttons & Metric Chips */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-sm shadow-xl shadow-sky-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black text-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              Contact Our Engineers
            </button>
          </div>
        </motion.div>

        {/* Right Hero Image Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-sky-400/40 shadow-[0_0_60px_rgba(14,211,221,0.25)] group hover:border-[#0ED3DD] transition-all duration-500">
            <img
              src={aboutHeroImg}
              alt="About YomTech Global"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            {/* Floating Glass Badge Top Right */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40 text-white text-xs font-black flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Full-Stack Platform</span>
            </div>

            {/* Floating Glass Badge Bottom Left */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/40 text-white text-xs font-bold shadow-lg">
              🏢 Addis Ababa, Ethiopia
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* NEW SECTION 1: YOMTECH GLOBAL AT A GLANCE */}
      <AboutAtGlance />

      {/* NEW SECTION 2: HOW WE THINK */}
      <HowWeThink />

      {/* 1. MAIN CONTENT SECTION 1: VIBRANT AZURE BLUE THEME (Matching User Swatch #0084C8) */}
      <section className="py-24 w-full bg-gradient-to-b from-[#0084C8] via-[#0072B8] to-[#0084C8] relative text-white border-b border-sky-600/40">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20">
        
        {/* 1. CORE FOUNDATIONS: MISSION, VISION & VALUES VENN DIAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 text-white relative overflow-hidden"
        >
          {/* Subtle background dot matrix */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />

          <div className="text-center mb-12 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white text-xs font-black tracking-widest uppercase shadow-[0_6px_25px_rgba(255,255,255,0.2)] hover:border-white transition-all">
              <div className="w-5.5 h-5.5 rounded-full bg-white/30 border border-white/60 flex items-center justify-center shrink-0">
                <Target size={13} className="text-amber-300" />
              </div>
              <span className="whitespace-nowrap">CORE FOUNDATIONS — CLICK ANY CIRCLE TO EXPLORE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Mission, Vision &amp; <span className="text-[#0ED3DD]">Values</span>
            </h2>
            <p className="text-sky-100 text-sm max-w-xl mx-auto font-semibold">
              Explore the three guiding pillars behind YomTech Global’s software &amp; educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Interlocking Circles Venn Diagram (Fully Interactive) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-[360px] h-[360px] flex items-center justify-center">

                {/* Mission Circle (Top Left) */}
                <motion.button
                  type="button"
                  onClick={() => setActivePillar('mission')}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-0 left-0 w-52 h-52 rounded-full border-2 flex flex-col items-center justify-center text-center p-4 transition-all duration-500 cursor-pointer group ${
                    activePillar === 'mission'
                      ? 'border-white bg-white/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.5)] scale-105 z-30 text-white'
                      : 'border-white/40 bg-white/10 backdrop-blur-md shadow-lg hover:border-white hover:bg-white/20 z-10 text-white'
                  }`}
                >
                  <div className={`rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    activePillar === 'mission'
                      ? 'w-12 h-12 bg-white text-slate-900 shadow-lg scale-110'
                      : 'w-11 h-11 bg-white/20 border border-white/40 text-white group-hover:scale-110'
                  }`}>
                    <Target size={22} className={activePillar === 'mission' ? 'text-slate-900 font-bold' : 'text-white'} />
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase text-white tracking-widest drop-shadow-md">MISSION</span>
                  {activePillar === 'mission' ? (
                    <span className="px-3 py-1 rounded-full bg-white text-slate-900 font-black text-[10px] uppercase tracking-wider shadow-md mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" /> ACTIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-extrabold text-sky-100 uppercase tracking-wider mt-1 group-hover:text-white transition-colors">
                      Click to View
                    </span>
                  )}
                </motion.button>

                {/* Vision Circle (Top Right) */}
                <motion.button
                  type="button"
                  onClick={() => setActivePillar('vision')}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-0 right-0 w-52 h-52 rounded-full border-2 flex flex-col items-center justify-center text-center p-4 transition-all duration-500 cursor-pointer group ${
                    activePillar === 'vision'
                      ? 'border-white bg-white/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.5)] scale-105 z-30 text-white'
                      : 'border-white/40 bg-white/10 backdrop-blur-md shadow-lg hover:border-white hover:bg-white/20 z-10 text-white'
                  }`}
                >
                  <div className={`rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    activePillar === 'vision'
                      ? 'w-12 h-12 bg-white text-slate-900 shadow-lg scale-110'
                      : 'w-11 h-11 bg-white/20 border border-white/40 text-white group-hover:scale-110'
                  }`}>
                    <Eye size={22} className={activePillar === 'vision' ? 'text-slate-900 font-bold' : 'text-white'} />
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase text-white tracking-widest drop-shadow-md">VISION</span>
                  {activePillar === 'vision' ? (
                    <span className="px-3 py-1 rounded-full bg-white text-slate-900 font-black text-[10px] uppercase tracking-wider shadow-md mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" /> ACTIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-extrabold text-sky-100 uppercase tracking-wider mt-1 group-hover:text-white transition-colors">
                      Click to View
                    </span>
                  )}
                </motion.button>

                {/* Values Circle (Bottom Center) */}
                <motion.button
                  type="button"
                  onClick={() => setActivePillar('values')}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute bottom-0 w-52 h-52 rounded-full border-2 flex flex-col items-center justify-center text-center p-4 transition-all duration-500 cursor-pointer group ${
                    activePillar === 'values'
                      ? 'border-white bg-white/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.5)] scale-105 z-30 text-white'
                      : 'border-white/40 bg-white/10 backdrop-blur-md shadow-lg hover:border-white hover:bg-white/20 z-10 text-white'
                  }`}
                >
                  <div className={`rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    activePillar === 'values'
                      ? 'w-12 h-12 bg-white text-slate-900 shadow-lg scale-110'
                      : 'w-11 h-11 bg-white/20 border border-white/40 text-white group-hover:scale-110'
                  }`}>
                    <Heart size={22} className={activePillar === 'values' ? 'text-slate-900 font-bold' : 'text-white'} />
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase text-white tracking-widest drop-shadow-md">VALUES</span>
                  {activePillar === 'values' ? (
                    <span className="px-3 py-1 rounded-full bg-white text-slate-900 font-black text-[10px] uppercase tracking-wider shadow-md mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" /> ACTIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-extrabold text-sky-100 uppercase tracking-wider mt-1 group-hover:text-white transition-colors">
                      Click to View
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Quick Tab Switcher Pills below diagram */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
                {[
                  { key: 'mission', label: 'Mission' },
                  { key: 'vision', label: 'Vision' },
                  { key: 'values', label: 'Values' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActivePillar(tab.key)}
                    className={`px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 border cursor-pointer whitespace-nowrap ${
                      activePillar === tab.key
                        ? 'bg-white text-slate-900 font-black border-transparent shadow-lg shadow-white/30 scale-105'
                        : 'bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:bg-white/30'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${activePillar === tab.key ? 'bg-slate-900 animate-pulse' : 'bg-white'}`} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dynamic Text Showcase */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-white shadow-2xl p-8 sm:p-11 space-y-7 relative overflow-hidden text-slate-900 group"
                >
                  {/* Ambient top-right light flare orb */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  {/* High-Visibility Watermark text (MISSION / VISION / VALUES) */}
                  <span className="absolute -bottom-4 -right-4 text-[7rem] md:text-[8.5rem] font-black text-slate-900/10 uppercase pointer-events-none select-none tracking-widest font-display leading-none">
                    {currentPillar.id}
                  </span>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-sky-100 border-2 border-sky-300 flex items-center justify-center text-[#0072B8] shadow-md shrink-0">
                        <CurrentIcon size={28} className="text-[#0072B8]" />
                      </div>
                      <div>
                        <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-[#0072B8] text-[10px] font-black uppercase tracking-widest inline-block mb-1">
                          {currentPillar.subtitle}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-black font-display text-slate-900 leading-tight">
                          {currentPillar.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center shrink-0">
                      <Sparkles size={20} className="text-[#0072B8] animate-pulse" />
                    </div>
                  </div>

                  <div className="relative z-10 bg-sky-50/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-sky-100 text-slate-800 text-base sm:text-lg leading-relaxed font-semibold">
                    {currentPillar.desc}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-sky-200 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0072B8] text-xs font-black uppercase tracking-widest mb-1 shadow-xs">
                      <Target size={14} />
                      <span>Key Pillars &amp; Objectives</span>
                    </div>

                    <div className="space-y-3 pt-1">
                      {currentPillar.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3.5 py-3 px-2 text-sm sm:text-base text-slate-900 font-extrabold group/bullet transition-transform hover:translate-x-1.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#D93695] to-[#FF5733] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="leading-relaxed text-slate-900 font-black">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* 2. TOP ABOUT BANNER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6 text-white relative overflow-hidden my-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                About <span className="text-[#0ED3DD]">YomeTech Global</span>
              </h2>

              <p className="text-base sm:text-xl font-black text-[#0ED3DD] leading-snug">
                Empowering Innovation and Technology.
              </p>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-normal">
                YomeTech Global is a forward-thinking tech company dedicated to providing{' '}
                <strong className="text-[#0ED3DD] font-black">online training</strong>,{' '}
                <strong className="text-[#0ED3DD] font-black">business coaching</strong>, and{' '}
                <strong className="text-[#0ED3DD] font-black">hands-on mentorship</strong> to help professionals and companies thrive in the digital era. We also develop{' '}
                <strong className="text-[#0ED3DD] font-black">custom software solutions</strong> including ERP, WMS, SFA, mobile/web apps, cloud deployment, and cybersecurity integrations to accelerate growth and efficiency.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={aboutHeroImg}
                  alt="About YomeTech Global Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. 3 STACKED FEATURE CARDS (EXACT SCREENSHOT IMAGE 1 DESIGN) */}
        <div className="space-y-16 pt-4">
          
          {/* CARD 1: ABOUT YOMETECH GLOBAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-6 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                  About <span className="text-[#0ED3DD]">YomeTech Global</span>
                </h3>
                <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
                  YomeTech Global is a forward-thinking technology company founded in 2015. We specialize in building innovative digital solutions and offering world-class training that bridges the gap between theory and real-world application.
                </p>
              </div>

              {/* Right Isometric Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full aspect-[16/10] max-w-md flex items-center justify-center">
                  <img
                    src={aboutCompanyImg}
                    alt="About YomeTech Global Isometric Graphic"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: OUR EXPERTISE (Circular Spotlight Backdrop per Image 1) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-6 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Person Image with Circular Backdrop */}
              <div className="lg:col-span-5 flex justify-center lg:order-1">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#EAFDF9]/30 border border-[#0ED3DD]/40 flex items-center justify-center p-6 shadow-inner">
                  <img
                    src={aboutExpertiseImg}
                    alt="Our Expertise Cutout Illustration"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-4 lg:order-2">
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                  Our <span className="text-[#0ED3DD]">Expertise</span>
                </h3>
                <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
                  We are experts in React, Node.js, Python, AI/ML, cloud platforms like AWS &amp; Azure, and modern DevOps practices. Whether it’s enterprise-grade apps, scalable APIs, or AI-powered automation, we deliver impactful solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: MEET THE TEAM (White Card Container Backdrop per Image 1) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-6 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                  Meet the <span className="text-[#0ED3DD]">Team</span>
                </h3>
                <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
                  Our diverse team of engineers, designers, and strategists brings creativity, expertise, and dedication to every project. Together, we innovate and solve problems for clients and learners across the globe.
                </p>
              </div>

              {/* Right Team Photo inside clean rounded White Container per Image 1 */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-sky-100 flex items-center justify-center">
                  <img
                    src={aboutTeamImg}
                    alt="Meet the YomeTech Global Team"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        </div>
      </section>

      {/* 2. SOFT SAGE / PISTACHIO GREEN SECTION (What Makes Us Different & Paradigm Comparison) */}
      <section className="py-24 w-full bg-gradient-to-b from-[#CFE0B6] via-[#C0D6A7] to-[#B3CA98] relative text-slate-900 border-y border-emerald-700/20">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20">
          
          {/* WHAT MAKES US DIFFERENT — 4 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-4 space-y-10 relative overflow-hidden text-slate-900"
          >
            <div className="text-center space-y-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-900 px-4.5 py-2 rounded-full bg-emerald-100/90 border border-emerald-300 inline-block shadow-sm">
                ⚡ WHY CHOOSE YOMTECH GLOBAL
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
                What Makes Us <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Different</span>
              </h2>
              <p className="text-slate-800 text-base max-w-2xl mx-auto font-semibold">
                We combine enterprise software engineering with hands-on talent development for real-world impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {bulletPoints.map((bp, idx) => {
                const IconComp = bp.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    className="p-[1.5px] rounded-[2.2rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2.1rem] p-7 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-slate-900 border border-emerald-200/80">
                      
                      {/* Watermark number */}
                      <span className="absolute bottom-2 right-4 text-[5.5rem] font-black text-[#0284C7]/10 pointer-events-none select-none group-hover:text-[#0284C7]/20 transition-colors" style={{ lineHeight: 1 }}>
                        {bp.num}
                      </span>

                      <div className="relative z-10 space-y-5">
                        {/* Top Row: Icon + Badge */}
                        <div className="flex items-center justify-between">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bp.iconBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <IconComp size={26} strokeWidth={2} />
                          </div>
                          <span className="text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm">
                            {bp.badge}
                          </span>
                        </div>

                        {/* Image Showcase Banner */}
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-md group-hover:shadow-lg transition-all duration-300">
                          <img
                            src={bp.image}
                            alt={bp.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                        </div>

                        {/* Title + Desc */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-black text-slate-900 font-display transition-colors group-hover:text-[#0284C7]">
                            {bp.title}
                          </h3>
                          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                            {bp.text}
                          </p>
                        </div>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* PARADIGM COMPARISON: WHY OUR MODEL IS DIFFERENT */}
          <WhyModelDifferent />
        </div>
      </section>

      {/* 3. ENGINEERING ROADMAP SECTION (Distinct Premier Light Luxury Theme - No Hero, No Dark Black) */}
      <section className="py-24 w-full bg-gradient-to-b from-[#F8FAFC] via-[#F0F9FF] to-[#E0F2FE] relative text-slate-900 border-y border-sky-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20">
          <EngineeringApproach />
        </div>
      </section>

      {/* NEW SECTION 5: SOFTWARE + TALENT */}
      <SoftwareTalentSplit />

      {/* NEW SECTION 7: OUR IMPACT MODEL */}
      <ImpactModel />

      {/* NEW SECTION 11: TECHNOLOGY WITH PURPOSE */}
      <TechnologyPurpose />

      {/* NEW SECTION 12: FINAL CALL TO ACTION */}
      <AboutFinalCTA />
    </div>
  );
};