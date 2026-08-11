import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCanvas } from '../../components/common/HeroCanvas';
import { Globe3DCard } from '../../components/common/Globe3DCard';
import {
  ArrowRight, Cpu, Code, ShieldCheck, Cloud, Bot, Layout, GraduationCap, BarChart,
  MessageCircle, ArrowUp, Quote, Mail, Check, User, Building2, Handshake, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 4 New Essential Home Ecosystem Sections
import { HomeEcosystem } from '../../components/home/HomeEcosystem';
import { HomeHowWeWork } from '../../components/home/HomeHowWeWork';
import { HomeBusinessAndTalent } from '../../components/home/HomeBusinessAndTalent';
import { HomeBuiltForTheFuture } from '../../components/home/HomeBuiltForTheFuture';

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
    <div className="bg-[#F8FAFC] text-[#071A2B] min-h-screen relative overflow-hidden">
      {/* 1. HERO SECTION (Luminous Azure Sapphire Blue Gradient Canvas) */}
      <section className="w-full relative z-10 overflow-hidden pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-28 bg-gradient-to-br from-[#0284C7] via-[#0072B8] to-[#1DA1F2] text-white">
        <div className="max-w-[1720px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Hero Content - Crisp High-Contrast White & Cyan Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Top Pill Tag: NEXT-GEN INNOVATION. LIMITLESS IMPACT. */}
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-white/25 backdrop-blur-xl border-2 border-white text-white text-xs font-black tracking-widest uppercase shadow-lg hover:bg-white/35 transition-all">
              <div className="w-5.5 h-5.5 rounded-full bg-white/30 border border-white flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0072B8] font-black text-base shadow-xl border-2 border-white hover:bg-sky-50 hover:scale-105 transition-all duration-300 group"
              >
                <span>Our Services</span>
                <ArrowRight size={18} className="text-[#0072B8] group-hover:translate-x-1 transition-transform" />
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

      {/* 2. WHO WE ARE SECTION (Vibrant Azure Blue Theme) */}
      <section className="w-full relative z-10 overflow-hidden py-28 bg-gradient-to-b from-[#0084C8] via-[#0072B8] to-[#0084C8] text-white border-y border-sky-600/40">
        {/* Ambient Cyan Spotlight Flares */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-300/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-2xl border-2 border-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.25)] text-center relative overflow-hidden text-slate-900 group"
          >
            {/* Top Glowing Beam Streak */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-80" />

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 border border-sky-300 text-[#0072B8] text-xs font-black tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0072B8] animate-pulse" />
                <span>ARCHITECTING DIGITAL EXCELLENCE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-slate-900 leading-tight">
                Who <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">We Are</span>
              </h2>

              <p className="text-slate-800 text-base sm:text-xl md:text-2xl leading-relaxed font-semibold">
                At <span className="text-[#0072B8] font-black">Yomtech Global</span>, we empower businesses, enterprise innovators, and tech talent to thrive in the digital era. From robust custom software architectures to cloud migration, cybersecurity, and world-class talent bootcamps—we don’t just build software, we help you shape the future.
              </p>

              {/* 3 Pillars Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-sky-200">
                <div className="p-5 rounded-2xl bg-sky-50/90 border border-sky-200 text-left space-y-2 hover:border-[#0072B8] transition-colors shadow-sm">
                  <div className="text-[#0072B8] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0072B8]" /> Enterprise Software
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    Custom ERP, WMS, SFA &amp; high-concurrency cloud systems built for scale.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50/90 border border-sky-200 text-left space-y-2 hover:border-[#0072B8] transition-colors shadow-sm">
                  <div className="text-[#0072B8] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0072B8]" /> Tech Talent Academy
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    <a href="https://wabiskills.com/" target="_blank" rel="noopener noreferrer" className="text-[#0072B8] hover:underline font-extrabold">WabiSkills</a> intensive bootcamps in AI, Fullstack, UI/UX, &amp; Data Engineering.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50/90 border border-sky-200 text-left space-y-2 hover:border-[#0072B8] transition-colors shadow-sm">
                  <div className="text-[#0072B8] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0072B8]" /> Global Partnerships
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    Connecting enterprise market leaders with verified tech engineering talent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 01: OUR TECHNOLOGY ECOSYSTEM */}
      <HomeEcosystem />

      {/* 3. WHAT WE BUILD & TEACH SECTION (Soft Sage Pistachio Theme) */}
      <section className="w-full relative z-10 overflow-hidden py-28 bg-gradient-to-b from-[#CFE0B6] via-[#C0D6A7] to-[#B3CA98] text-slate-900 border-y border-emerald-700/20">
        {/* Accent Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-black tracking-widest uppercase shadow-sm">
                <span>OUR CORE CAPABILITIES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">
                What We Build &amp; <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Teach</span>
              </h2>
              <p className="text-slate-800 text-base sm:text-lg max-w-2xl mx-auto font-semibold">
                Comprehensive digital capabilities engineered for enterprise clients and ambitious tech learners.
              </p>
            </motion.div>
          </div>

          {/* Capability 3D Glassmorphic Cards (White-Gray Executive Frame Style) */}
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
                  <div className="relative bg-white border border-emerald-200/90 group-hover:border-[#0284C7] p-8 sm:p-9 md:p-10 rounded-[2.2rem] shadow-xl group-hover:shadow-[0_15px_40px_rgba(2,132,199,0.25)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden text-center items-center space-y-7 text-slate-900">
                    
                    {/* Inner Soft Glow Spot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-200/30 blur-[50px] rounded-full pointer-events-none group-hover:bg-sky-300/40 transition-all duration-500" />

                    <div className="space-y-6 flex flex-col items-center text-center w-full relative z-10">
                      {/* Luminous Image Badge at Top */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-gradient-to-tr from-[#0284C7] via-[#0ED3DD] to-blue-600 p-2 border border-sky-400/80 shadow-[0_0_25px_rgba(2,132,199,0.3)] mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-2xl shadow-md"
                        />
                      </div>

                      {/* Title Below Image */}
                      <div className="space-y-2 text-center w-full px-2">
                        <span className="text-[10px] font-black tracking-widest text-[#0284C7] uppercase px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 inline-block shadow-sm">
                          {item.category || 'CAPABILITY'}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Action Button CTA */}
                    <div className="w-full pt-2 relative z-10">
                      <Link
                        to="/services"
                        className="w-full py-3.5 px-5 rounded-2xl bg-[#0284C7] hover:bg-[#0072B8] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md border border-sky-300"
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

      {/* NEW SECTION 02: HOW WE WORK */}
      <HomeHowWeWork />

      {/* 4. OUR IMPACT IN NUMBERS SECTION (Rich Amethyst Deep Indigo Theme) */}
      <section className="w-full relative z-10 overflow-hidden py-24 bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] text-white border-y border-purple-400/40">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-black tracking-widest uppercase shadow-sm">
              <span>MEASURABLE PERFORMANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight drop-shadow-md">
              Our Impact in <span className="text-[#0ED3DD]">Numbers</span>
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
                className="bg-white text-slate-900 border-2 border-white p-8 rounded-3xl space-y-3 hover:scale-[1.04] transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D93695] via-[#FF5733] to-[#0ED3DD]" />
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-display bg-gradient-to-r from-[#4C1D95] via-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent tracking-tight">
                  {num.stat}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-700">
                  {num.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VOICES OF OUR COMMUNITY SECTION (Light Luxury Sky Ice Theme) */}
      <section className="w-full relative z-10 overflow-hidden py-28 bg-gradient-to-b from-[#F8FAFC] via-[#F0F9FF] to-[#E0F2FE] text-slate-900 border-y border-sky-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] text-xs font-black tracking-widest uppercase shadow-sm">
              <span>TESTIMONIALS &amp; FEEDBACK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">
              Voices of <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Our Community</span>
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
                className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-6 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden text-slate-900 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {"★".repeat(5)}
                  </div>
                  <Quote size={36} className="text-[#0284C7] opacity-80" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-black text-base text-slate-900 font-display">{t.author}</div>
                    <div className="text-xs text-[#0284C7] font-extrabold">{t.role}</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shadow-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 03: BUILT FOR BUSINESS & TALENT */}
      <HomeBusinessAndTalent />

      {/* 6. READY TO TRANSFORM WITH TECHNOLOGY? CTA SECTION (Warm Sunset Amber Gold Theme) */}
      <section className="w-full relative z-10 overflow-hidden py-24 bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] text-slate-900 border-y border-amber-300/60">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-amber-200 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl space-y-8 text-slate-900"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-200/40 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-200/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Ready to Transform with <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Technology?</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                Whether you're a business looking for enterprise IT solutions or an ambitious learner eager to master tech skills, Yomtech Global is your partner for innovation and growth.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-base shadow-xl shadow-sky-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#0072B8] hover:bg-[#0284C7] text-white font-black text-base shadow-lg border-2 border-white hover:scale-105 transition-all duration-300 group"
              >
                <span>Our Services</span>
                <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 04: WHY YOMTECH IS BUILT FOR THE FUTURE */}
      <HomeBuiltForTheFuture />

      {/* 7. SUBSCRIBE TO OUR NEWSLETTER SECTION */}
      <section className="w-full relative z-10 overflow-hidden py-20 bg-[#E2E8F0] border-t border-slate-300 text-slate-900">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-300 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden text-slate-900"
          >
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-bold text-xs md:text-sm shrink-0 shadow-lg shadow-sky-500/20 transition-all"
              >
                Subscribe
              </button>
            </form>
            {newsletterSuccess && (
              <div className="text-xs font-semibold text-[#0284C7] animate-pulse">
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
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={22} />
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center hover:border-[#0284C7] hover:text-[#0284C7] shadow-md hover:scale-110 transition-transform duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};