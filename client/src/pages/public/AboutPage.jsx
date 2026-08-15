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

// High resolution visual images for capability cards
import educationImg from '../../assets/services/education.png';
import customImg from '../../assets/services/custom.png';
import coachingImg from '../../assets/services/coaching.png';
import cloudImg from '../../assets/services/cloud.png';

// Enterprise Premium About Us Components
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
          1. HERO SECTION (Inspired by Reference Banner Layout)
      ======================================================== */}
      <section className="w-full pt-44 sm:pt-48 md:pt-52 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-sky-300/40">
        
        {/* Luminous Glow Flares */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-emerald-400/25 via-cyan-500/20 to-transparent blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-sky-300/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
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
            <div className="space-y-2 font-display font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white">
                WELCOME TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#0ED3DD] to-amber-200">
                  YOMTECH GLOBAL
                </span> <br />
                INNOVATIVE TECH SOLUTIONS
              </h1>
            </div>

            <p className="text-slate-100 text-base md:text-lg leading-relaxed font-normal max-w-2xl">
              At YomeTech Global, we empower businesses, innovators, and learners to thrive in the digital era. From enterprise software to cloud solutions and world-class training, we don’t just deliver technology—we help you create the future.
            </p>

            {/* Dual CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
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

          {/* Right Hero Image Showcase (Inspired by Reference Visual) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-[4/3.5] rounded-[2.5rem] overflow-hidden border-2 border-cyan-300/40 shadow-[0_25px_60px_rgba(14,211,221,0.3)] group hover:border-[#0ED3DD] transition-all duration-500 bg-white/5 backdrop-blur-md">
              <img
                src={heroTeamImg || aboutHeroImg}
                alt="YomTech Global Leadership"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Glass Badge Top Right */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 text-white text-xs font-black flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Enterprise &amp; Talent Core</span>
              </div>

              {/* Floating Glass Badge Bottom Left */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-400/30 border border-cyan-300 flex items-center justify-center text-cyan-200">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black">YomTech Global</p>
                    <p className="text-[10px] text-cyan-200 font-medium">Addis Ababa, Ethiopia · Global Delivery</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-400/30 border border-emerald-300 text-emerald-200">
                  Est. 2015
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ========================================================
          2. ESSENTIAL FEATURES SECTION (What We Build & Teach)
      ======================================================== */}
      <section className="py-24 lg:py-32 w-full bg-white relative text-slate-900 border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16">
          
          {/* Header Row: Left Title + Right Narrative (Matching Reference) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                <span>✻</span>
                <span>What We Build &amp; Teach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                Innovative solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]">
                  a better digital tomorrow
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed font-sans">
                From responsive web apps and high-performance mobile solutions to enterprise ERP systems and IT consulting, we equip companies and learners with future-ready technology.
              </p>
            </div>
          </div>

          {/* 3 Large Rounded Approach Cards (Matching Reference Card Styles) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[380px] ${card.bg}`}
                >
                  <div className="space-y-6">
                    {/* Icon Box */}
                    <div className="flex items-center justify-between">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${card.iconBox}`}>
                        <IconComp size={30} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border bg-white/60 backdrop-blur-sm shadow-xs">
                        {card.accentTag}
                      </span>
                    </div>

                    {/* Title + Desc */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed font-medium text-slate-500 font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Pill CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => navigate(card.link)}
                      className={`px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 shadow-md ${card.btnStyle}`}
                    >
                      <span>Explore More</span>
                      <ChevronRight size={15} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ========================================================
          3. WHO WE ARE & COMPREHENSIVE SOLUTIONS (Our Impact in Numbers)
      ======================================================== */}
      <section className="py-24 lg:py-32 w-full bg-gradient-to-b from-[#f8fafc] via-[#f0f9ff] to-white relative text-slate-900 border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          
          {/* Left Asymmetric Photo & Metric Grid (Matching Reference Image Grid) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Large Photo */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-slate-200 shadow-xl aspect-[16/10] group">
              <img
                src={consultingTeamImg || educationImg}
                alt="YomTech Global Software Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black border border-slate-200 shadow-sm flex items-center gap-2">
                <Sparkles size={13} className="text-cyan-500" />
                <span>Enterprise Consulting &amp; Training</span>
              </div>
            </div>

            {/* Bottom 2-Column Split: Metric Card + Secondary Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              
              {/* Metric Card (Official Impact Numbers: 2K+ Learners & 25+ Solutions) */}
              <div className="sm:col-span-5 rounded-[2.2rem] bg-gradient-to-br from-[#a7f3d0] via-[#6ee7b7] to-[#34d399] p-6 sm:p-7 flex flex-col justify-between border border-emerald-300 shadow-lg text-slate-950">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 text-white flex items-center justify-center shadow-md">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <span className="text-[9px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-950/15 border border-emerald-950/20 text-emerald-950">
                    Est. 2015
                  </span>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950 mb-1">
                    2K+
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
                    Learners Empowered &amp; 25+ Business Solutions Deployed
                  </p>
                </div>
              </div>

              {/* Secondary Photo */}
              <div className="sm:col-span-7 rounded-[2.2rem] overflow-hidden border-2 border-slate-200 shadow-lg aspect-[4/3] relative group">
                <img
                  src={teamDiscussionImg || coachingImg}
                  alt="Collaborative Tech Team"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black border border-slate-200 shadow-sm">
                  ⚡ 7+ Global Partnerships
                </div>
              </div>

            </div>
          </div>

          {/* Right Content Column (Matching Reference Layout) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                <span>✻</span>
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                Empowering innovation, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]">
                  technology &amp; talent
                </span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium font-sans">
                YomeTech Global is a forward-thinking technology company founded in 2015. We specialize in building innovative digital solutions and offering world-class training that bridges the gap between theory and real-world application.
              </p>
            </div>

            {/* CTA Button + Leadership Avatar Chip Row (Matching Reference) */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#86efac] via-[#4ade80] to-[#22c55e] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
              >
                <span>Get Started With Us</span>
                <ChevronRight size={16} strokeWidth={3} />
              </button>

              <div className="flex items-center gap-3.5 py-1 px-3 rounded-full bg-slate-50 border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center font-black text-sm shadow-md">
                  YG
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">YomTech Global</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Addis Ababa · contact@yometechglobal.org</p>
                </div>
              </div>
            </div>

            {/* Bottom 2-Card Stats Row (Real Impact: 25+ Solutions & Core Stack) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              
              {/* Rating & Impact Card */}
              <div className="p-6 rounded-[2rem] bg-white border border-slate-200 shadow-md flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    7+ Partnerships
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-3xl font-black font-display text-slate-900">
                    25+ <span className="text-base text-slate-400 font-semibold">Solutions</span>
                  </h4>
                  <p className="text-xs font-bold text-slate-600 leading-snug">
                    Deployed across ERP, WMS, Cloud &amp; AI Automations
                  </p>
                </div>
              </div>

              {/* Expertise Stack Cloud Card */}
              <div className="p-6 rounded-[2rem] bg-[#f8fafc] border border-slate-200 shadow-md space-y-3">
                <p className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Our Core Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {['REACT', 'NODE.JS', 'PYTHON', 'AI / ML', 'AWS & AZURE', 'DEVOPS'].map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          4. YOMTECH GLOBAL AT A GLANCE (Heritage, Stats, Footprint)
      ======================================================== */}
      <AboutAtGlance />

      {/* ========================================================
          5. CORE FOUNDATIONS (Mission, Vision, Values Matrix in Pure White)
      ======================================================== */}
      <CoreFoundations />

      {/* ========================================================
          6. SOFTWARE + TALENT DUAL ECOSYSTEM
      ======================================================== */}
      <SoftwareTalentSplit />

      {/* ========================================================
          8. PARADIGM COMPARISON: WHY OUR MODEL IS DIFFERENT
      ======================================================== */}
      <WhyModelDifferent />

      {/* ========================================================
          9. ENGINEERING APPROACH & ROADMAP
      ======================================================== */}
      <section className="py-24 w-full bg-gradient-to-b from-[#F8FAFC] via-[#F0F9FF] to-[#E0F2FE] relative text-slate-900 border-y border-sky-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20">
          <EngineeringApproach />
        </div>
      </section>

      {/* ========================================================
          10. HOW WE THINK (Philosophy & Mindset)
      ======================================================== */}
      <HowWeThink />

      {/* ========================================================
          11. OUR IMPACT MODEL
      ======================================================== */}
      <ImpactModel />

      {/* ========================================================
          12. TECHNOLOGY WITH PURPOSE
      ======================================================== */}
      <TechnologyPurpose />

      {/* ========================================================
          13. FINAL CALL TO ACTION
      ======================================================== */}
      <AboutFinalCTA />

    </div>
  );
};

export default AboutPage;