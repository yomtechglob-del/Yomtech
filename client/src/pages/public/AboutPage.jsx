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
import { CoreFoundations } from '../../components/about/CoreFoundations';
import { AboutEcosystem } from '../../components/about/AboutEcosystem';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

export const AboutPage = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

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

      {/* 1. CORE FOUNDATIONS: MISSION, VISION & VALUES */}
      <CoreFoundations />

      {/* 2. CORPORATE OVERVIEW & ECOSYSTEM ZIG-ZAG BLOCKS */}
      <AboutEcosystem />

      {/* WHAT MAKES US DIFFERENT — 4 Feature Cards */}
      <section className="py-20 w-full bg-white relative text-slate-900 border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-700 px-4.5 py-2 rounded-full bg-cyan-50 border border-cyan-200 inline-block shadow-sm">
              ⚡ WHY CHOOSE YOMTECH GLOBAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900">
              What Makes Us <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto font-semibold">
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
                  <div className="bg-white rounded-[2.1rem] p-7 space-y-5 h-full flex flex-col justify-between relative overflow-hidden text-slate-900 border border-slate-100">
                    
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
                        <span className="text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 shadow-sm">
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
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
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
        </div>
      </section>

      {/* PARADIGM COMPARISON: WHY OUR MODEL IS DIFFERENT */}
      <WhyModelDifferent />

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