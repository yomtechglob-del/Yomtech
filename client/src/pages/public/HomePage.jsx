import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe3DCard } from '../../components/common/Globe3DCard';
import {
  ArrowRight, Cpu, Code, ShieldCheck, Cloud, Bot, Layout, GraduationCap, BarChart,
  MessageCircle, ArrowUp, ArrowDown, Quote, Mail, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

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

import { AboutHeroBackground } from '../../components/common/AboutHeroBackground';

// Hero entry animations run ONCE on load — not scroll-triggered, so framer-motion is fine here
const fadeLeft = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export const HomePage = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // CSS reveal refs — one IntersectionObserver each, zero scroll-thread JS
  const buildHeaderRef = useReveal(0.2);
  const buildGridRef = useReveal(0.1);
  const impactHeaderRef = useReveal(0.3);
  const impactGridRef = useReveal(0.15);
  const testimonialsRef = useReveal(0.2);
  const testimonialGrid = useReveal(0.1);
  const ctaRef = useReveal(0.2);
  const newsletterRef = useReveal(0.3);

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
    { title: 'ERP, CRM & WMS Solutions', icon: Cpu, img: erpImg, category: 'Enterprise' },
    { title: 'Custom Software & App Development', icon: Code, img: customImg, category: 'Engineering' },
    { title: 'Cybersecurity & IT Consulting', icon: ShieldCheck, img: cybersecurityImg, category: 'Security' },
    { title: 'Cloud Services & Deployment', icon: Cloud, img: cloudImg, category: 'Cloud' },
    { title: 'Web App Development', icon: Bot, img: webImg, category: 'Intelligence' },
    { title: 'Mobile App Development', icon: Layout, img: mobileImg, category: 'Design' },
    { title: 'Tech Education & Coaching', icon: GraduationCap, img: educationImg, category: 'Education' },
    { title: 'CRM & Enterprise Analytics', icon: BarChart, img: crmImg, category: 'Analytics' }
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
    <div className="bg-[#F8FAFC] text-[#071A2B]">

      {/* 1. HERO SECTION */}
      <section className="hero-scroll-fix home-section w-full relative pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-28 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30" style={{ touchAction: 'pan-y' }}>
        
        {/* About Us Page Exact Hero Background */}
        <AboutHeroBackground />

        <div className="max-w-[1720px] mx-auto w-full px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            style={{ touchAction: 'pan-y' }}
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65 }}
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 border border-[#0ED3DD]/50 text-[#0ED3DD] text-xs font-black tracking-widest uppercase shadow-[0_6px_25px_rgba(14,211,221,0.25)] hover:border-cyan-300 transition-all">
              <div className="w-5 h-5 rounded-full bg-[#0ED3DD]/20 border border-[#0ED3DD]/50 flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-pulse" />
              </div>
              <span className="whitespace-nowrap">PIONEERING IT SOLUTIONS &amp; TALENT ENGINEERING</span>
            </div>

            {/* Title */}
            <div className="space-y-4 font-display font-black tracking-tight leading-[1.08]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white">
                Welcome to <br />
                <span className="text-white">Yomtech </span>
                <span className="bg-gradient-to-r from-[#0ED3DD] via-[#1DA1F2] to-[#60A5FA] bg-clip-text text-transparent">
                  Global
                </span>
              </h1>

              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] mt-2" />

              {/* Bullet Statements */}
              <motion.div
                className="space-y-3.5 pt-4 font-sans"
                style={{ touchAction: 'pan-y' }}
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {heroSubtitles.map((tagline, i) => (
                  <motion.div
                    key={tagline}
                    className="flex items-center gap-3.5"
                    style={{ touchAction: 'pan-y' }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  >
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#0ED3DD] to-[#1DA1F2] shrink-0" />
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <p className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug">
                      {tagline}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="pt-3 flex flex-wrap items-center gap-4"
              style={{ touchAction: 'pan-y' }}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#1DA1F2] text-white font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0072B8] font-black text-base shadow-xl border-2 border-white hover:bg-sky-50 transition-all duration-300 hover:scale-105"
              >
                <span>Our Services</span>
                <ArrowRight size={18} className="text-[#0072B8]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 3D Globe Visual */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center"
            style={{ minHeight: '720px', touchAction: 'pan-y' }}
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <Globe3DCard />
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 01: OUR TECHNOLOGY ECOSYSTEM */}
      <HomeEcosystem />

      {/* 3. WHAT WE BUILD & TEACH SECTION */}
      <section className="home-section w-full relative py-28 bg-gradient-to-b from-[#CFE0B6] via-[#C0D6A7] to-[#B3CA98] text-slate-900 border-y border-emerald-700/20 section-track-border section-track-border-emerald">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          {/* Section Header */}
          <div ref={buildHeaderRef} className="reveal text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-black tracking-widest uppercase shadow-sm">
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">
              What We Build &amp; <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Teach</span>
            </h2>
            <p className="text-slate-800 text-base sm:text-lg max-w-2xl mx-auto font-semibold">
              Comprehensive digital capabilities engineered for enterprise clients and ambitious tech learners.
            </p>
          </div>

          {/* Capability Cards */}
          <div ref={buildGridRef} className="reveal-children grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {buildAndTeachServices.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="group cursor-pointer">
                  <div className="bg-white border border-emerald-200/90 hover:border-[#0284C7] p-8 sm:p-9 md:p-10 rounded-[2.2rem] shadow-xl hover:shadow-[0_15px_40px_rgba(2,132,199,0.25)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden text-center items-center space-y-7 text-slate-900 hover:-translate-y-1">
                    <div className="space-y-6 flex flex-col items-center text-center w-full">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#0284C7] via-[#0ED3DD] to-blue-600 p-2 border border-sky-400/80 shadow-[0_0_25px_rgba(2,132,199,0.3)] mx-auto flex items-center justify-center">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-2xl shadow-md" loading="lazy" />
                      </div>
                      <div className="space-y-2 text-center w-full px-2">
                        <span className="text-[10px] font-black tracking-widest text-[#0284C7] uppercase px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 inline-block shadow-sm">
                          {item.category || 'CAPABILITY'}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-full pt-2">
                      <Link to="/services" className="w-full py-3.5 px-5 rounded-2xl bg-[#0284C7] hover:bg-[#0072B8] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md border border-sky-300">
                        <span>Explore Capability</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION 02: HOW WE WORK */}
      <HomeHowWeWork />

      {/* 4. OUR IMPACT IN NUMBERS SECTION */}
      <section className="home-section w-full relative py-24 bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] text-white border-y border-purple-400/40 section-track-border section-track-border-purple">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16">
          <div ref={impactHeaderRef} className="reveal text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-black tracking-widest uppercase shadow-sm">
              <span>MEASURABLE PERFORMANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight drop-shadow-md">
              Our Impact in <span className="text-[#0ED3DD]">Numbers</span>
            </h2>
          </div>
          <div ref={impactGridRef} className="reveal-children grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactNumbers.map((num) => (
              <div key={num.label} className="bg-white text-slate-900 border-2 border-white p-8 rounded-3xl space-y-3 shadow-2xl relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D93695] via-[#FF5733] to-[#0ED3DD]" />
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-display bg-gradient-to-r from-[#4C1D95] via-[#0284C7] to-[#0ED3DD] bg-clip-text text-transparent tracking-tight">
                  {num.stat}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-700">{num.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VOICES OF OUR COMMUNITY SECTION */}
      <section className="home-section w-full relative py-28 bg-gradient-to-b from-[#F8FAFC] via-[#F0F9FF] to-[#E0F2FE] text-slate-900 border-y border-sky-200/80 section-track-border">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16">
          <div ref={testimonialsRef} className="reveal text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 border border-sky-300 text-[#0284C7] text-xs font-black tracking-widest uppercase shadow-sm">
              <span>TESTIMONIALS &amp; FEEDBACK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">
              Voices of <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Our Community</span>
            </h2>
          </div>
          <div ref={testimonialGrid} className="reveal-children grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden text-slate-900 shadow-xl hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">{"★".repeat(5)}</div>
                  <Quote size={36} className="text-[#0284C7] opacity-80" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-black text-base text-slate-900 font-display">{t.author}</div>
                    <div className="text-xs text-[#0284C7] font-extrabold">{t.role}</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 03: BUILT FOR BUSINESS & TALENT */}
      <HomeBusinessAndTalent />

      {/* 6. READY TO TRANSFORM WITH TECHNOLOGY? CTA SECTION */}
      <section className="home-section w-full relative py-24 bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] text-slate-900 border-y border-amber-300/60 section-track-border section-track-border-amber">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div ref={ctaRef} className="reveal bg-white border-2 border-amber-200 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl space-y-8 text-slate-900">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-200/40 blur-[100px] rounded-full pointer-events-none glow-layer" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-200/40 blur-[100px] rounded-full pointer-events-none glow-layer" />
            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Ready to Transform with <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Technology?</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                Whether you're a business looking for enterprise IT solutions or an ambitious learner eager to master tech skills, Yomtech Global is your partner for innovation and growth.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 relative z-10">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-black text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#0072B8] hover:bg-[#0284C7] text-white font-black text-base shadow-lg border-2 border-white transition-all duration-300 hover:scale-105">
                <span>Our Services</span>
                <ArrowRight size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 04: WHY YOMTECH IS BUILT FOR THE FUTURE */}
      <HomeBuiltForTheFuture />

      {/* 7. SUBSCRIBE TO OUR NEWSLETTER SECTION */}
      <section className="home-section w-full relative py-20 bg-[#E2E8F0] border-t border-slate-300 text-slate-900 section-track-border section-track-border-slate">
        <div className="max-w-2xl mx-auto px-6">
          <div ref={newsletterRef} className="reveal bg-white border border-slate-300 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl overflow-hidden text-slate-900">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900">Subscribe to Our Newsletter</h3>
              <p className="text-xs md:text-sm text-slate-600">Get the latest tech updates, tutorials, and engineering insights straight to your inbox.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <div className="relative w-full">
                <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email" required placeholder="Enter your email"
                  value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                />
              </div>
              <button type="submit" className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-bold text-xs md:text-sm shrink-0 shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </form>
            {newsletterSuccess && <div className="text-xs font-semibold text-[#0284C7]">✓ Thank you for subscribing!</div>}
          </div>
        </div>
      </section>

      {/* Floating Bottom-Right Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Link
          to="/contact"
          aria-label="Open Quick Contact"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110"
        >
          <MessageCircle size={22} />
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center hover:border-[#0284C7] hover:text-[#0284C7] shadow-md transition-colors duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};