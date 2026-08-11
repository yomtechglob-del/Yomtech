import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, Cpu, Layout, Monitor, BarChart, ArrowRight, Mail, CheckCircle2, Rocket
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
      title: 'Full Stack Web & Mobile Development',
      desc: 'Master modern web and mobile app development. Learn front-end, back-end, databases, APIs, and cross-platform solutions to build scalable applications.',
      visualType: 'fullstack',
      layout: 'left-image',
      tags: ['React & Node.js', 'React Native', 'API Architecture', 'PostgreSQL / MongoDB']
    },
    {
      title: 'Artificial Intelligence (AI)',
      desc: 'Dive into AI and Machine Learning. Learn to build intelligent systems, train models, and apply AI in real-world applications such as chatbots, predictions, and automation.',
      visualType: 'ai',
      layout: 'right-image',
      tags: ['Python & PyTorch', 'LLM Chatbots', 'Predictive Models', 'Neural Networks']
    },
    {
      title: 'UI/UX Design',
      desc: 'Design user-friendly and engaging interfaces. Learn wireframing, prototyping, design principles, and tools like Figma to create intuitive digital experiences.',
      visualType: 'uiux',
      layout: 'left-image',
      tags: ['Figma Design Systems', 'User Research', 'Interactive Wireframes', 'Design Tokens']
    },
    {
      title: 'Data Analysis',
      desc: 'Turn data into actionable insights. Learn Python, Excel, SQL, and visualization tools to analyze datasets, build reports, and support business decision-making.',
      visualType: 'data',
      layout: 'right-image',
      tags: ['Python Data Stack', 'SQL Querying', 'PowerBI / Tableau', 'Statistical Modeling']
    }
  ];

  return (
    <div className="hero-cyan-gradient text-white min-h-screen relative overflow-hidden">
      {/* Top-Left to Top-Right Architectural Drawn Line Border Overlay (Matching User Drawing) */}
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
          <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-[#0ED3DD]/50 text-[#0ED3DD] text-xs font-black tracking-widest uppercase shadow-[0_6px_25px_rgba(14,211,221,0.25)] hover:border-cyan-300 transition-all">
            <div className="w-5.5 h-5.5 rounded-full bg-[#0ED3DD]/20 border border-[#0ED3DD]/50 flex items-center justify-center shrink-0">
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
          <div className="inline-flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-sky-400/50 text-amber-300 font-black text-xs sm:text-sm shadow-[0_6px_25px_rgba(0,0,0,0.25)] hover:border-sky-300 transition-all">
            <div className="w-6.5 h-6.5 rounded-full bg-amber-400/25 border border-amber-400/60 flex items-center justify-center text-amber-300 shrink-0">
              <Rocket size={14} />
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-amber-300 font-black">Learn. Build. Grow.</span>
              <span className="text-white/30">|</span>
              <span className="text-cyan-200 text-xs font-extrabold">Industry Ready Careers</span>
            </div>
          </div>

          {/* Pill Badges Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-red-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-red-400 hover:bg-red-500/25 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 transition-all duration-300">
              <div className="w-6.5 h-6.5 rounded-full bg-red-500/25 border border-red-400/60 flex items-center justify-center text-red-300 group-hover:scale-110 transition-transform shrink-0">
                <Cpu size={14} />
              </div>
              <span className="text-red-200 font-extrabold whitespace-nowrap">AI &amp; Machine Learning</span>
            </div>

            <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-emerald-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-emerald-400 hover:bg-emerald-500/25 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:scale-105 transition-all duration-300">
              <div className="w-6.5 h-6.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform shrink-0">
                <Layout size={14} />
              </div>
              <span className="text-emerald-200 font-extrabold whitespace-nowrap">UI/UX &amp; Product Design</span>
            </div>

            <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-blue-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-blue-400 hover:bg-blue-500/25 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
              <div className="w-6.5 h-6.5 rounded-full bg-blue-500/25 border border-blue-400/60 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform shrink-0">
                <Monitor size={14} />
              </div>
              <span className="text-blue-200 font-extrabold whitespace-nowrap">Fullstack Web &amp; Mobile</span>
            </div>

            <div className="group relative flex items-center gap-3.5 px-8 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border border-amber-500/50 text-white font-black text-xs xl:text-sm shadow-xl hover:border-amber-400 hover:bg-amber-500/25 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300">
              <div className="w-6.5 h-6.5 rounded-full bg-amber-500/25 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform shrink-0">
                <BarChart size={14} />
              </div>
              <span className="text-amber-200 font-extrabold whitespace-nowrap">Data &amp; Analytics</span>
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
          {/* Card 1 — WabiSkills Platform: back-left */}
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

          {/* Card 2 — Online Courses: center-top, front */}
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

          {/* Card 3 — Bootcamp: back-right */}
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

      {/* 2. EXPLORE OUR EDUCATIONAL SERVICES SECTION */}
      <section id="educational-courses" className="py-28 w-full bg-[#EAF6FF] relative text-slate-900 overflow-hidden border-b border-sky-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0072B8] px-6 py-2.5 rounded-full bg-sky-100 border border-sky-300 inline-block shadow-sm">
              🚀 EXPLORE ACADEMY BOOTCAMPS
            </span>
            <div>
              <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 inline-block">
                Educational <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Courses</span>
              </h2>
            </div>
          </div>

          {/* 4 Major Educational Course Cards */}
          <div className="space-y-16">
            {courseCards.map((course) => {
              const isLeftImage = course.layout === 'left-image';
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[2.8rem] p-4 sm:p-8 text-slate-900 relative overflow-hidden"
                >
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                      {/* Interactive Visual Tech Mockup */}
                      <div className={`lg:col-span-6 flex justify-center ${isLeftImage ? 'lg:order-1' : 'lg:order-2'}`}>
                        <CourseTechIllustration type={course.visualType} />
                      </div>

                      {/* Content & Action Side */}
                      <div className={`lg:col-span-6 space-y-6 ${isLeftImage ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#0072B8] px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 shadow-sm">
                            Educational Bootcamp
                          </span>
                          <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300">
                            ● Open Enrollment
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900 group-hover:text-[#0284C7] transition-colors leading-tight">
                          {course.title}
                        </h3>

                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                          {course.desc}
                        </p>

                        {/* Capability Micro Tags */}
                        {course.tags && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-sky-200/80">
                            {course.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-slate-900 flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-emerald-600" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handleEnrollClick(course.title)}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn"
                          >
                            <span>Enroll / Learn More</span>
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

      {/* 3. SUBSCRIBE TO OUR NEWSLETTER SECTION (EXISTING UNTOUCHED CONTENT) */}
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