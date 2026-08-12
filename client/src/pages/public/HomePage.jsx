import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCanvas } from '../../components/common/HeroCanvas';
import { Globe3DCard } from '../../components/common/Globe3DCard';
import {
  ArrowRight, Cpu, Code, ShieldCheck, Cloud, Bot, Layout, GraduationCap, BarChart,
  MessageCircle, ArrowUp, Quote, Mail, Check, User, Building2, Handshake, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

import erpImg from '../../assets/services/erp.png';
import customImg from '../../assets/services/custom.png';
import cybersecurityImg from '../../assets/services/cybersecurity.png';
import cloudImg from '../../assets/services/cloud.png';
import webImg from '../../assets/services/web.png';
import mobileImg from '../../assets/services/mobile.png';
import educationImg from '../../assets/services/education.png';
import crmImg from '../../assets/services/crm.png';

export const HomePage = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const heroSubtitles = [
    "Innovative Tech Solutions for a Better Tomorrow",
    "Smart Strategies to Transform Your Workflow",
    "Cutting-Edge Tools to Boost Productivity",
    "Creative Ideas for a Sustainable Future"
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const buildAndTeachServices = [
    {
      title: 'ERP, CRM & WMS Solutions',
      icon: Cpu,
      img: erpImg,
      category: 'Enterprise'
    },
    {
      title: 'Custom Software & App Development',
      icon: Code,
      img: customImg,
      category: 'Engineering'
    },
    {
      title: 'Cybersecurity & IT Consulting',
      icon: ShieldCheck,
      img: cybersecurityImg,
      category: 'Security'
    },
    {
      title: 'Cloud Services & Deployment',
      icon: Cloud,
      img: cloudImg,
      category: 'Cloud'
    },
    {
      title: 'Web App Development',
      icon: Bot,
      img: webImg,
      category: 'Intelligence'
    },
    {
      title: 'Mobile App Development',
      icon: Layout,
      img: mobileImg,
      category: 'Design'
    },
    {
      title: 'Tech Education & Coaching',
      icon: GraduationCap,
      img: educationImg,
      category: 'Education'
    },
    {
      title: 'CRM & Enterprise Analytics',
      icon: BarChart,
      img: crmImg,
      category: 'Analytics'
    }
  ];
//this is a comment
  const impactNumbers = [
    { stat: '2K+', label: 'Learners Empowered' },
    { stat: '25+', label: 'Business Solutions Deployed' },
    { stat: '3+', label: 'Years of Innovation' },
    { stat: '7+', label: 'Global Partnerships' }
  ];

  const testimonials = [
    {
      quote: "Yomtech transformed the way I approach technology. The mentorship and projects gave me the confidence to build solutions at scale.",
      author: 'Sarah Johnson',
      role: 'Software Engineer'
    },
    {
      quote: "The skills I gained here directly helped me launch my startup. Their fullstack training was world-class.",
      author: 'Michael Lee',
      role: 'Startup Founder'
    },
    {
      quote: "Learning analytics with Yomtech was a game changer. I can now turn complex data into actionable insights for my company.",
      author: 'Amina Yusuf',
      role: 'Data Analyst'
    }
  ];

  return (
    <div className="bg-brand-bg text-brand-white overflow-hidden relative">
      {/* 1. HERO SECTION (Seamless Luminous Cyan Gradient Canvas) */}
      <section className="relative min-h-[100vh] xl:min-h-[105vh] flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-36 sm:pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden hero-cyan-gradient text-white">
        {/* Architectural Vector Lines & Tech Grid Background */}
        <HeroCanvas />

        {/* Top-Left to Top-Right Architectural Drawn Line Border Overlay */}
        <svg className="absolute top-0 left-0 w-full h-[550px] pointer-events-none z-20 overflow-visible" preserveAspectRatio="none">
          <path
            d="M 0 340 Q 300 160 900 0"
            fill="none"
            stroke="url(#home-top-left-arch-gradient)"
            strokeWidth="3.5"
            className="opacity-80 drop-shadow-[0_0_12px_rgba(255,80,0,0.7)]"
          />
          <defs>
            <linearGradient id="home-top-left-arch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5000" />
              <stop offset="50%" stopColor="#0ED3DD" />
              <stop offset="100%" stopColor="#1DA1F2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left-Mid Ambient Fiery Orange Flare */}
        <div className="absolute top-20 left-32 w-[650px] h-[650px] bg-gradient-to-br from-[#FF5000]/50 via-[#0ED3DD]/30 to-transparent blur-[150px] rounded-full pointer-events-none" />



        {/* Center Vivid Cyan Glow */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[450px] bg-[#0ED3DD]/40 blur-[120px] rounded-full pointer-events-none" />

        {/* Right Royal Electric Blue Atmospheric Spotlight */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-8 w-[720px] h-[720px] bg-gradient-to-tr from-[#1DA1F2]/60 via-[#1D4ED8]/45 to-[#3B82F6]/50 blur-[160px] rounded-full pointer-events-none animate-pulse" />




        <div className="max-w-[1720px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">
          {/* Left Hero Content - Crisp High-Contrast White & Cyan Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Top Pill Tag: NEXT-GEN INNOVATION. LIMITLESS IMPACT. */}
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-[#0ED3DD]/50 text-[#0ED3DD] text-xs font-black tracking-widest uppercase shadow-[0_6px_25px_rgba(14,211,221,0.25)] hover:border-cyan-300 transition-all">
              <div className="w-5.5 h-5.5 rounded-full bg-[#0ED3DD]/20 border border-[#0ED3DD]/50 flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-pulse" />
              </div>
              <span className="whitespace-nowrap">PIONEERING IT SOLUTIONS &amp; TALENT ENGINEERING</span>
            </div>

            {/* Title & Prominent Taglines List */}
            <div className="space-y-4 font-display font-black tracking-tight leading-[1.08]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white">
                Welcome to <br />
                <span className="text-white">Yomtech </span>
                <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">
                  Global
                </span>
              </h1>

              {/* Cyan/Blue Accent Underline Bar */}
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] mt-2 shadow-[0_0_12px_#0ED3DD]" />

              {/* Bullet Statements List (Crisp White Text for 100% Legibility) */}
              <div className="space-y-3.5 pt-4 font-sans">
                {heroSubtitles.map((tagline) => (
                  <div key={tagline} className="flex items-center gap-3.5 group">
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#0ED3DD] to-[#1DA1F2] shrink-0 shadow-[0_0_8px_#0ED3DD]" />
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <p className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug group-hover:text-[#0ED3DD] transition-colors">
                      {tagline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#1DA1F2] text-white font-black text-base shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#070C1A]/90 hover:bg-slate-900 text-white font-black text-base shadow-md border-2 border-[#1DA1F2] hover:border-[#0ED3DD] hover:scale-105 transition-all duration-300 group"
              >
                <span>Our Services</span>
                <ArrowRight size={18} className="text-[#0ED3DD] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Interactive 3D Globe Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <Globe3DCard />
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (Executive Frosted Glass Spotlight) */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#151515] via-[#0B1120] to-[#151515] text-white">
        {/* Ambient Cyan & Blue Radial Spotlight Flares */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0ED3DD]/15 via-[#1DA1F2]/20 to-transparent blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0B132A]/90 via-[#070C1A]/95 to-[#0B132A]/90 backdrop-blur-2xl border border-blue-500/35 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] text-center relative overflow-hidden group"
          >
            {/* Top Glowing Beam Streak */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0ED3DD] to-transparent opacity-75" />

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[#0ED3DD] text-xs font-black tracking-widest uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#0ED3DD] animate-pulse" />
                <span>ARCHITECTING DIGITAL EXCELLENCE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
                Who <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">We Are</span>
              </h2>

              <p className="text-slate-200 text-base sm:text-xl md:text-2xl leading-relaxed font-normal">
                At <span className="text-[#0ED3DD] font-extrabold">Yomtech Global</span>, we empower businesses, enterprise innovators, and tech talent to thrive in the digital era. From robust custom software architectures to cloud migration, cybersecurity, and world-class talent bootcamps—we don’t just build software, we help you shape the future.
              </p>

              {/* 3 Pillars Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-blue-900/50">
                <div className="p-5 rounded-2xl bg-[#040B1D]/90 border border-blue-500/30 text-left space-y-2 hover:border-[#0ED3DD] transition-colors">
                  <div className="text-[#0ED3DD] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0ED3DD]" /> Enterprise Software
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Custom ERP, WMS, SFA &amp; high-concurrency cloud systems built for scale.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#040B1D]/90 border border-blue-500/30 text-left space-y-2 hover:border-[#0ED3DD] transition-colors">
                  <div className="text-[#0ED3DD] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0ED3DD]" /> Tech Talent Academy
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    <a href="https://wabiskills.com/" target="_blank" rel="noopener noreferrer" className="text-[#0ED3DD] hover:underline font-semibold">WabiSkills</a> intensive bootcamps in AI, Fullstack, UI/UX, &amp; Data Engineering.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#040B1D]/90 border border-blue-500/30 text-left space-y-2 hover:border-[#0ED3DD] transition-colors">
                  <div className="text-[#0ED3DD] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0ED3DD]" /> Global Partnerships
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Connecting enterprise market leaders with verified tech engineering talent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD & TEACH SECTION (Dynamic 3D Capability Cards Grid) */}
      <section className="py-28 relative bg-[#0B1120] border-y border-blue-950/60 text-white overflow-hidden">
        {/* Ambient Dark Mesh Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#1DA1F2_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[#0ED3DD] text-xs font-black tracking-widest uppercase">
                <span>OUR CORE CAPABILITIES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight">
                What We Build &amp; <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">Teach</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
                Comprehensive digital capabilities engineered for enterprise clients and ambitious tech learners.
              </p>
            </motion.div>
          </div>

          {/* Capability 3D Glassmorphic Cards (3 Cards Horizontally per Row with Corner Bracket Frame Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {buildAndTeachServices.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group cursor-pointer relative"
                >
                  {/* White-Gray Executive Cyber Frame Card Container */}
                  <div className="relative bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] border border-slate-300 group-hover:border-[#0284C7] p-8 sm:p-9 md:p-10 rounded-[2.2rem] shadow-xl group-hover:shadow-[0_10px_40px_rgba(2,132,199,0.25)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden text-center items-center space-y-7 before:absolute before:top-0 before:right-0 before:w-12 before:h-12 before:border-t-[3px] before:border-r-[3px] before:border-[#0284C7] before:rounded-tr-[2.2rem] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-12 after:border-b-[3px] after:border-l-[3px] after:border-[#0284C7] after:rounded-bl-[2.2rem]">
                    
                    {/* Subtle Inner Soft Glow Spot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-200/40 blur-[50px] rounded-full pointer-events-none group-hover:bg-sky-300/40 transition-all duration-500" />

                    <div className="space-y-6 flex flex-col items-center text-center w-full relative z-10">
                      {/* 1. Luminous Image Badge at Top */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-gradient-to-tr from-[#0284C7] via-[#0ED3DD] to-blue-600 p-2 border border-sky-400/80 shadow-[0_0_25px_rgba(2,132,199,0.3)] mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-2xl shadow-md"
                        />
                      </div>

                      {/* 2. Dark Slate Title Below Image (Zero Overflow, High Legibility) */}
                      <div className="space-y-2 text-center w-full px-2">
                        <span className="text-[10px] font-extrabold tracking-widest text-[#0284C7] uppercase px-3.5 py-1 rounded-full bg-sky-100/90 border border-sky-300 inline-block shadow-sm">
                          {item.category || 'CAPABILITY'}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* 3. Action Button CTA */}
                    <div className="w-full pt-2 relative z-10">
                      <Link
                        to="/services"
                        className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 border border-slate-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 shadow-md"
                      >
                        <span>Explore Capability</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT IN NUMBERS SECTION (High-Tech Data Matrix Showcase) */}
      <section className="py-24 relative bg-gradient-to-b from-[#0B1120] via-[#070D1B] to-[#151515] text-white">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[#0ED3DD] text-xs font-black tracking-widest uppercase">
              <span>MEASURABLE PERFORMANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight">
              Our Impact in <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactNumbers.map((num, idx) => (
              <motion.div
                key={num.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#0D1730]/90 backdrop-blur-xl border border-blue-500/35 p-8 rounded-3xl space-y-3 hover:border-[#0ED3DD] hover:scale-[1.03] transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0ED3DD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-display bg-gradient-to-r from-white via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent tracking-tight">
                  {num.stat}
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  {num.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VOICES OF OUR COMMUNITY SECTION (Frosted Glass Quote Cards) */}
      <section className="py-28 relative bg-[#151515] border-t border-blue-950/60 text-white">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[#0ED3DD] text-xs font-black tracking-widest uppercase">
              <span>TESTIMONIALS &amp; FEEDBACK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight">
              Voices of <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">Our Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-[#121A30] to-[#080E1E] border border-blue-500/35 p-8 rounded-3xl space-y-6 hover:border-[#0ED3DD] hover:shadow-[0_0_35px_rgba(14,211,221,0.2)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {"★".repeat(5)}
                  </div>
                  <Quote size={36} className="text-[#0ED3DD] opacity-90" />
                  <p className="text-slate-200 text-sm leading-relaxed italic font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 border-t border-blue-900/60 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-base text-white font-display">{t.author}</div>
                    <div className="text-xs text-[#0ED3DD] font-semibold">{t.role}</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] shadow-[0_0_10px_#0ED3DD]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. READY TO TRANSFORM WITH TECHNOLOGY? CTA SECTION (High-Impact Neon Banner) */}
      <section className="py-24 relative bg-gradient-to-b from-[#151515] via-[#091122] to-[#151515] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0B132A] via-[#101D42] to-[#0B132A] border border-cyan-500/40 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-[0_0_70px_rgba(14,211,221,0.18)] space-y-8"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#0ED3DD]/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1DA1F2]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
                Ready to Transform with <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">Technology?</span>
              </h2>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed font-normal">
                Whether you're a business looking for enterprise IT solutions or an ambitious learner eager to master tech skills, Yomtech Global is your partner for innovation and growth.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#1DA1F2] text-white font-black text-base shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#040B1D]/90 hover:bg-[#09142E] text-white font-black text-base shadow-lg border-2 border-[#1DA1F2] hover:border-[#0ED3DD] hover:scale-105 transition-all duration-300 group"
              >
                <span>Our Services</span>
                <ArrowRight size={20} className="text-[#0ED3DD] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. SUBSCRIBE TO OUR NEWSLETTER SECTION (Modern High-Tech Input Card) */}
      <section className="py-20 relative bg-[#0B1120] border-t border-blue-950/60 text-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0E162B] to-[#070C1A] border border-blue-500/35 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Get the latest tech updates, tutorials, and engineering insights straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <div className="relative w-full">
                <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#040B1D] border border-blue-900/80 rounded-xl pl-11 pr-4 py-3 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0ED3DD] focus:ring-1 focus:ring-[#0ED3DD] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#1DA1F2] text-white font-bold text-xs md:text-sm shrink-0 shadow-lg shadow-cyan-500/20 transition-all"
              >
                Subscribe
              </button>
            </form>
            {newsletterSuccess && (
              <div className="text-xs font-semibold text-[#0ED3DD] animate-pulse">
                ✓ Thank you for subscribing!
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Floating Bottom-Right Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Link
          to="/contact"
          aria-label="Open Quick Contact"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={22} />
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-[#070C1A] border border-blue-500/40 text-white flex items-center justify-center hover:border-[#0ED3DD] hover:text-[#0ED3DD] shadow-md hover:scale-110 transition-transform duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};