import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, Cpu, Layout, Monitor, BarChart, ArrowRight, Mail, CheckCircle2, Rocket,
  Clock, Award, Sparkles, Layers, Star, BookOpen, FileText, Check, Zap, ChevronRight, ShieldCheck, Play
} from 'lucide-react';

import { CourseTechIllustration } from '../../components/academy/CourseTechIllustration';
import { HeroCanvas } from '../../components/common/HeroCanvas';
import { LearningJourney } from '../../components/academy/LearningJourney';
import { LearningModel } from '../../components/academy/LearningModel';
import { ClassroomToRealWorld } from '../../components/academy/ClassroomToRealWorld';
import { MentorshipExperience } from '../../components/academy/MentorshipExperience';
import { CareerReadiness } from '../../components/academy/CareerReadiness';
import { AcademyEcosystem } from '../../components/academy/AcademyEcosystem';
import { PracticalLearning } from '../../components/academy/PracticalLearning';
import { GlobalLearningVision } from '../../components/academy/GlobalLearningVision';
import { AcademyCTA } from '../../components/academy/AcademyCTA';

// Dedicated unique SVG image assets for Academy page
import academyHeroImg from '../../assets/academy/wabiskills.jpg';
import academyCoursesImg from '../../assets/academy/wabiskills_courses.png';
import academyBootcampImg from '../../assets/academy/wabiskills_bootcamp.png';

export const AcademyPage = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState('ALL');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 4000);
  };

  const handleEnrollClick = (courseTitle) => {
    navigate('/contact', { state: { inquiryType: 'ACADEMY_ENROLLMENT', prefillService: courseTitle } });
  };

  const courseCards = [
    {
      id: 'fullstack',
      category: 'FULLSTACK',
      title: 'Full Stack Web & Mobile Development',
      badge: '🔥 Most Popular Bootcamp',
      badgeColor: 'bg-amber-100/90 text-amber-950 border-amber-300',
      desc: 'Master modern web and mobile app engineering. Learn front-end, back-end, databases, APIs, and cross-platform mobile solutions to architect scalable enterprise applications.',
      visualType: 'fullstack',
      layout: 'left-image',
      duration: '16 Weeks',
      format: 'Live Cohort + Hands-On Labs',
      certificate: 'Industry Accredited Full-Stack Cert',
      projectsCount: '6 Production Apps',
      rating: '4.9 ⭐ (140+ Graduates)',
      tags: ['React & Next.js', 'Node.js & Express', 'React Native Mobile', 'PostgreSQL & MongoDB', 'REST & GraphQL APIs', 'CI/CD & Cloud Deploy']
    },
    {
      id: 'ai',
      category: 'AI',
      title: 'Artificial Intelligence & Machine Learning',
      badge: '🤖 Future Tech & LLMs',
      badgeColor: 'bg-emerald-100/90 text-emerald-950 border-emerald-300',
      desc: 'Dive into AI and Machine Learning engineering. Train predictive ML models, build intelligent RAG LLM agents, deploy neural networks, and automate workflows with Python and PyTorch.',
      visualType: 'ai',
      layout: 'right-image',
      duration: '14 Weeks',
      format: 'Live AI Studio + Research Labs',
      certificate: 'AI Specialist Certification',
      projectsCount: '4 AI Neural Systems',
      rating: '4.9 ⭐ (115+ Graduates)',
      tags: ['Python & PyTorch', 'LLMs & Chatbots', 'Predictive Modeling', 'Neural Networks', 'Model Deployment', 'Prompt Engineering']
    },
    {
      id: 'uiux',
      category: 'DESIGN',
      title: 'UI/UX Design & Product Systems',
      badge: '🎨 Enterprise Figma Design',
      badgeColor: 'bg-purple-100/90 text-purple-950 border-purple-300',
      desc: 'Design user-friendly, high-converting digital interfaces. Master wireframing, interactive prototyping, user research methodologies, Figma design tokens, and seamless developer handoff.',
      visualType: 'uiux',
      layout: 'left-image',
      duration: '12 Weeks',
      format: 'Studio Workshops + Design Sprints',
      certificate: 'Product Design Certification',
      projectsCount: '5 Complete Portfolios',
      rating: '4.8 ⭐ (125+ Graduates)',
      tags: ['Figma Design Tokens', 'User Research & Testing', 'Interactive Wireframes', 'Design Systems', 'Web & Mobile UI', 'Developer Handoff']
    },
    {
      id: 'data',
      category: 'DATA',
      title: 'Data Science & Enterprise Analytics',
      badge: '📊 Strategic Analytics',
      badgeColor: 'bg-sky-100/90 text-sky-950 border-sky-300',
      desc: 'Turn complex data into actionable business intelligence. Learn Python data analysis stack, advanced SQL querying, automated ETL pipelines, statistics, and PowerBI dashboards.',
      visualType: 'data',
      layout: 'right-image',
      duration: '12 Weeks',
      format: 'Data Lab + Real Case Studies',
      certificate: 'Data Analytics Certification',
      projectsCount: '5 Enterprise Dashboards',
      rating: '4.9 ⭐ (90+ Graduates)',
      tags: ['Python Data Stack', 'Advanced SQL Querying', 'PowerBI & Tableau', 'Statistical Modeling', 'ETL Data Pipelines', 'Predictive Analytics']
    }
  ];

  const filteredCourses = activeCourseTab === 'ALL'
    ? courseCards
    : courseCards.filter(c => c.category === activeCourseTab);

  return (
    <div className="hero-cyan-gradient text-white min-h-screen relative overflow-hidden">
      {/* Architectural SVG Border Overlay */}
      <svg className="absolute top-0 left-0 w-full h-[550px] pointer-events-none z-20 overflow-visible" preserveAspectRatio="none">
        <path
          d="M 0 340 Q 300 160 900 0"
          fill="none"
          stroke="url(#top-left-arch-gradient)"
          strokeWidth="3.5"
          className="opacity-80 drop-shadow-[0_0_12px_rgba(255,80,0,0.7)]"
        />
        <path
          d="M 0 360 Q 320 180 950 0"
          fill="none"
          stroke="url(#top-left-arch-glow)"
          strokeWidth="1.5"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="top-left-arch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5000" />
            <stop offset="50%" stopColor="#0ED3DD" />
            <stop offset="100%" stopColor="#1DA1F2" />
          </linearGradient>
          <linearGradient id="top-left-arch-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0ED3DD" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

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
            <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white text-xs font-black tracking-widest uppercase shadow-lg hover:border-white transition-all">
              <div className="w-5.5 h-5.5 rounded-full bg-white/30 border border-white/60 flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-pulse" />
              </div>
              <span className="whitespace-nowrap">GLOBAL TECH ACADEMY — POWERED BY YOMTECH</span>
            </div>

            <div className="space-y-3 font-display font-black tracking-tight leading-[1.1]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
                We have an Educational Platform called <br />
                <a
                  href="https://wabiskills.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-300 via-emerald-300 to-[#0ED3DD] bg-clip-text text-transparent drop-shadow-md hover:underline decoration-amber-300 decoration-2 underline-offset-4 transition-all"
                >
                  WabiSkills.com ↗
                </a>
              </h1>
            </div>

            <p className="text-slate-100 text-base md:text-lg leading-relaxed font-normal max-w-2xl">
              Unlock your potential with <span className="text-white font-bold">cutting-edge online bootcamps</span> in AI, UI/UX, Fullstack Development, and Data Engineering. Gain hands-on experience through interactive workshops, live mentorship, and real-world enterprise projects.
            </p>

            {/* Learn. Build. Grow. Tag Pill */}
            <div className="inline-flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-amber-300 font-black text-xs sm:text-sm shadow-lg hover:border-white transition-all">
              <div className="w-6.5 h-6.5 rounded-full bg-amber-400/30 border border-amber-400/60 flex items-center justify-center text-amber-300 shrink-0">
                <Rocket size={14} />
              </div>
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="text-amber-300 font-black">Learn. Build. Grow.</span>
                <span className="text-white/40">|</span>
                <span className="text-cyan-200 text-xs font-extrabold">Industry Ready Careers</span>
              </div>
            </div>

            {/* Pill Badges Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-black text-xs xl:text-sm shadow-xl hover:border-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
                <div className="w-6.5 h-6.5 rounded-full bg-red-400/30 border border-red-300 flex items-center justify-center text-red-200 group-hover:scale-110 transition-transform shrink-0">
                  <Cpu size={14} />
                </div>
                <span className="text-white font-extrabold whitespace-nowrap">AI &amp; Machine Learning</span>
              </div>

              <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-black text-xs xl:text-sm shadow-xl hover:border-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
                <div className="w-6.5 h-6.5 rounded-full bg-emerald-400/30 border border-emerald-300 flex items-center justify-center text-emerald-200 group-hover:scale-110 transition-transform shrink-0">
                  <Layout size={14} />
                </div>
                <span className="text-white font-extrabold whitespace-nowrap">UI/UX &amp; Product Design</span>
              </div>

              <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-black text-xs xl:text-sm shadow-xl hover:border-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
                <div className="w-6.5 h-6.5 rounded-full bg-blue-400/30 border border-blue-300 flex items-center justify-center text-blue-200 group-hover:scale-110 transition-transform shrink-0">
                  <Monitor size={14} />
                </div>
                <span className="text-white font-extrabold whitespace-nowrap">Fullstack Web &amp; Mobile</span>
              </div>

              <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-black text-xs xl:text-sm shadow-xl hover:border-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
                <div className="w-6.5 h-6.5 rounded-full bg-amber-400/30 border border-amber-300 flex items-center justify-center text-amber-200 group-hover:scale-110 transition-transform shrink-0">
                  <BarChart size={14} />
                </div>
                <span className="text-white font-extrabold whitespace-nowrap">Data &amp; Analytics</span>
              </div>
            </div>

            {/* Explore Courses & External Visit Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#educational-courses"
                className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 group/btn"
              >
                <GraduationCap size={18} />
                <span>Explore Academy Bootcamps</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://wabiskills.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border-2 border-[#0ED3DD]/80 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Visit WabiSkills.com ↗</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Hero — Staggered WabiSkills card stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center h-[380px] lg:h-[440px]"
          >
            {/* Card 1 — WabiSkills Platform */}
            <motion.a
              href="https://wabiskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ rotate: -3, scale: 1.05, zIndex: 30 }}
              className="absolute cursor-pointer"
              style={{ left: '0%', top: '5%', width: '65%', zIndex: 10 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(14,211,221,0.35)] border-2 border-[#0ED3DD]/60 group">
                <img src={academyHeroImg} alt="WabiSkills Platform" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-[#0284C7]/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-cyan-300/40 shadow-lg">
                  <span className="text-base">🌐</span>
                  <div>
                    <p className="text-white text-xs font-black leading-none">WabiSkills.com</p>
                    <p className="text-cyan-200 text-[9px] font-medium leading-none mt-0.5">Visit Platform ↗</p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Card 2 — Online Courses */}
            <motion.a
              href="https://wabiskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -6, scale: 1.05, zIndex: 30 }}
              className="absolute cursor-pointer"
              style={{ left: '20%', top: '0%', width: '65%', zIndex: 20 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(29,161,242,0.45)] border-2 border-[#1DA1F2]/70 group">
                <img src={academyCoursesImg} alt="WabiSkills Courses" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-blue-300/40 shadow-lg">
                  <span className="text-base">🎓</span>
                  <div>
                    <p className="text-white text-xs font-black leading-none">Online Courses</p>
                    <p className="text-blue-200 text-[9px] font-medium leading-none mt-0.5">AI · UI/UX · Fullstack · Data</p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Card 3 — Bootcamp */}
            <motion.a
              href="https://wabiskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ rotate: 3, scale: 1.05, zIndex: 30 }}
              className="absolute cursor-pointer"
              style={{ right: '0%', bottom: '0%', width: '65%', zIndex: 10 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(96,165,250,0.35)] border-2 border-violet-400/60 group">
                <img src={academyBootcampImg} alt="WabiSkills Bootcamp" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-violet-600/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-violet-300/40 shadow-lg">
                  <span className="text-base">💻</span>
                  <div>
                    <p className="text-white text-xs font-black leading-none">Live Bootcamp</p>
                    <p className="text-violet-200 text-[9px] font-medium leading-none mt-0.5">Mentorship · Projects</p>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 01: LEARNING JOURNEY */}
      <LearningJourney />

      {/* 2. EXPLORE OUR EDUCATIONAL SERVICES SECTION — REDESIGNED MASTERPIECE SHOWCASE */}
      <section id="educational-courses" className="py-32 w-full bg-gradient-to-b from-[#E0F2FE] via-[#BAE6FD]/60 to-[#E0F2FE] relative text-slate-900 overflow-hidden border-b border-sky-200/80">
        {/* Layered Floating Glow Orbs */}
        <div className="absolute top-1/4 left-1/5 w-[650px] h-[650px] bg-gradient-to-br from-cyan-200/40 via-sky-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-[550px] h-[550px] bg-gradient-to-tl from-indigo-100/40 via-sky-200/30 to-transparent rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full bg-sky-100/90 backdrop-blur-xl border border-sky-300 text-[#0072B8] text-xs font-black tracking-widest uppercase shadow-sm">
              <Sparkles size={14} className="text-[#0284C7] animate-pulse" />
              <span>🚀 EXPLORE ACADEMY BOOTCAMPS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Educational <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Courses &amp; Bootcamps</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Industry-driven bootcamps designed to transform ambitious learners into lead engineers, AI specialists, product designers, and data strategists.
            </p>

            {/* Interactive Category Filter Tabs */}
            <div className="pt-4 flex items-center justify-center flex-wrap gap-2.5">
              <div className="p-1.5 rounded-full bg-white/90 backdrop-blur-2xl border border-sky-200/90 shadow-md inline-flex flex-wrap items-center justify-center gap-1.5">
                {[
                  { id: 'ALL', label: 'All Bootcamps (4)', icon: Layers },
                  { id: 'FULLSTACK', label: '💻 Full Stack', icon: Monitor },
                  { id: 'AI', label: '🧠 AI & ML', icon: Cpu },
                  { id: 'DESIGN', label: '🎨 UI/UX Design', icon: Layout },
                  { id: 'DATA', label: '📊 Data Analytics', icon: BarChart }
                ].map(tab => {
                  const TabIcon = tab.icon;
                  const isActive = activeCourseTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCourseTab(tab.id)}
                      className={`px-6 py-3 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#0284C7] text-white shadow-lg scale-105'
                          : 'text-slate-700 hover:bg-sky-100/70'
                      }`}
                    >
                      <TabIcon size={14} className={isActive ? 'text-white' : 'text-[#0284C7]'} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Masterpiece Course Cards Stack */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {filteredCourses.map((course) => {
                const isLeftImage = course.layout === 'left-image';

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-[2.5px] rounded-[3rem] bg-gradient-to-br from-white/70 via-cyan-300/40 to-sky-400/30 hover:from-amber-300 hover:via-[#0ED3DD] hover:to-[#1DA1F2] transition-all duration-500 shadow-2xl hover:shadow-[0_35px_80px_rgba(14,211,221,0.35)] hover:-translate-y-2 group"
                  >
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2.9rem] p-7 sm:p-10 lg:p-12 text-slate-900 border border-white shadow-xl relative overflow-hidden">
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        
                        {/* Interactive Visual Illustration Side */}
                        <div className={`lg:col-span-6 flex flex-col items-center justify-center relative ${isLeftImage ? 'lg:order-1' : 'lg:order-2'}`}>
                          
                          {/* Visual Component */}
                          <div className="w-full relative z-10">
                            <CourseTechIllustration type={course.visualType} />
                          </div>

                          {/* Quick Stats Micro Bar Under Visual */}
                          <div className="mt-4 w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10">
                            <div className="bg-sky-50/90 border border-sky-200/80 rounded-2xl p-2.5 text-center shadow-xs">
                              <span className="text-[10px] font-black uppercase text-slate-500 block">Duration</span>
                              <span className="text-xs font-black text-[#0284C7]">{course.duration}</span>
                            </div>
                            <div className="bg-sky-50/90 border border-sky-200/80 rounded-2xl p-2.5 text-center shadow-xs">
                              <span className="text-[10px] font-black uppercase text-slate-500 block">Format</span>
                              <span className="text-xs font-black text-slate-900">{course.format.split('+')[0]}</span>
                            </div>
                            <div className="bg-sky-50/90 border border-sky-200/80 rounded-2xl p-2.5 text-center shadow-xs">
                              <span className="text-[10px] font-black uppercase text-slate-500 block">Projects</span>
                              <span className="text-xs font-black text-emerald-700">{course.projectsCount}</span>
                            </div>
                            <div className="bg-sky-50/90 border border-sky-200/80 rounded-2xl p-2.5 text-center shadow-xs">
                              <span className="text-[10px] font-black uppercase text-slate-500 block">Rating</span>
                              <span className="text-xs font-black text-amber-700">{course.rating.split(' ')[0]}</span>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Content & Action Side */}
                        <div className={`lg:col-span-6 space-y-6 ${isLeftImage ? 'lg:order-2' : 'lg:order-1'}`}>
                          
                          {/* Top Badges Row */}
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8] px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 shadow-xs">
                                Educational Bootcamp
                              </span>
                              <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-xs ${course.badgeColor}`}>
                                {course.badge}
                              </span>
                            </div>

                            <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider px-3.5 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                              Open Enrollment
                            </span>
                          </div>

                          {/* Course Title */}
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors leading-tight tracking-tight">
                            {course.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                            {course.desc}
                          </p>

                          {/* Capability Micro Tags */}
                          {course.tags && (
                            <div className="space-y-2 pt-2 border-t border-sky-200/80">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                                Key Skills &amp; Technology Stack:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {course.tags.map((tag, tIdx) => (
                                  <span key={tIdx} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-slate-900 flex items-center gap-1.5 shadow-xs hover:bg-sky-100 transition-all">
                                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                                    <span>{tag}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Action Buttons Row */}
                          <div className="pt-4 flex flex-wrap items-center gap-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => handleEnrollClick(course.title)}
                              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn"
                            >
                              <span>Enroll / Apply Now</span>
                              <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                            </motion.button>

                            <a
                              href="https://wabiskills.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-7 py-4 rounded-full bg-slate-100 hover:bg-sky-50 border border-sky-200 text-slate-800 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                            >
                              <span>View Syllabus ↗</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* NEW SECTION 02: LEARNING MODEL */}
      <LearningModel />

      {/* NEW SECTION 03: FROM CLASSROOM TO REAL WORLD */}
      <ClassroomToRealWorld />

      {/* NEW SECTION 07: MENTORSHIP EXPERIENCE */}
      <MentorshipExperience />

      {/* NEW SECTION 08: CAREER READINESS */}
      <CareerReadiness />

      {/* NEW SECTION 11: ACADEMY ECOSYSTEM */}
      <AcademyEcosystem />

      {/* NEW SECTION 12: WHY PRACTICAL LEARNING MATTERS */}
      <PracticalLearning />

      {/* NEW SECTION 13: GLOBAL LEARNING VISION */}
      <GlobalLearningVision />

      {/* 3. SUBSCRIBE TO OUR NEWSLETTER SECTION */}
      <section className="py-28 w-full bg-gradient-to-b from-[#FBF4C0] via-[#F5EBA8] to-[#FBF4C0] relative text-slate-900 overflow-hidden border-t border-yellow-300/60">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-[1.5px] rounded-[2.8rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl"
          >
            <div className="bg-white/95 rounded-[2.7rem] p-8 sm:p-12 text-center space-y-6 shadow-inner relative overflow-hidden border border-amber-200/60">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 inline-block shadow-sm">
                  📫 STAY UPDATED
                </span>
                <h3 className="text-2xl md:text-4xl font-black font-display text-slate-900">
                  Subscribe to Our <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Newsletter</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
                  Get the latest tech updates, course releases, and engineering insights straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto pt-2">
                <div className="relative w-full">
                  <Mail size={18} className="absolute left-4 top-4 text-[#0284C7]" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-cyan-200 rounded-full pl-11 pr-5 py-3.5 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all font-medium"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shrink-0 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </form>

              {newsletterSuccess && (
                <div className="text-xs font-black text-[#0284C7] animate-pulse">
                  ✓ Thank you for subscribing! We'll keep you posted.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 14: ACADEMY CTA */}
      <AcademyCTA />
    </div>
  );
};