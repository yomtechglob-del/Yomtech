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
  const [activeCourseTab, setActiveCourseTab] = useState('ALL');

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

      {/* NEW SECTION 01:      {/* 2. EXPLORE OUR EDUCATIONAL SERVICES SECTION — UPGRADED PREMIER DESIGNS & STYLES */}
      <section id="educational-courses" className="pt-20 pb-28 relative bg-gradient-to-b from-[#dff1ff] to-[#aeddfa] border-b border-sky-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white text-sky-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles size={14} className="text-[#0ea5e9] animate-pulse" />
              <span>Upgraded to Premier Designs &amp; Styles for Advanced Customers</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Educational <span className="text-[#38bdf8]">Courses &amp;</span><br />
              <span className="text-[#38bdf8]">Bootcamps</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Industry-driven bootcamps designed to transform ambitious learners into lead engineers, AI specialists, product designers, and data strategists.
            </p>

            {/* Premium Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-10 bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 inline-flex shadow-sm">
              {[
                { id: 'ALL', label: 'All Bootcamps (4)', icon: Layers },
                { id: 'FULLSTACK', label: 'Full Stack', icon: Monitor },
                { id: 'AI', label: 'AI & ML', icon: Cpu },
                { id: 'DESIGN', label: 'UI/UX Design', icon: Layout },
                { id: 'DATA', label: 'Data Analytics', icon: BarChart }
              ].map(tab => {
                const TabIcon = tab.icon;
                const isActive = activeCourseTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCourseTab(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#0ea5e9] text-white shadow-md hover:bg-[#0284c7]'
                        : 'bg-transparent text-slate-600 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <TabIcon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredCourses.map((course) => {
                const isLeftImage = course.layout === 'left-image';

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col lg:flex-row gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(14,165,233,0.15)] transition-all duration-500 border border-white group"
                  >
                    
                    {/* Mockup Side */}
                    <div className={`w-full lg:w-[45%] flex flex-col gap-4 ${isLeftImage ? 'order-1' : 'order-1 lg:order-2'}`}>
                      
                      {/* Interactive Visual Canvas / Mockup Box */}
                      {course.id === 'fullstack' && (
                        <div className="w-full aspect-[4/3.2] bg-[#0f172a] rounded-3xl overflow-hidden relative flex border-[8px] border-slate-50 shadow-[0_0_40px_rgba(14,165,233,0.15)] group-hover:shadow-[0_0_50px_rgba(14,165,233,0.25)] transition-shadow duration-500">
                          {/* Mobile Mockup */}
                          <div className="w-[34%] h-[88%] bg-[#1e293b] absolute bottom-0 left-5 rounded-t-2xl border-x border-t border-slate-700 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-20 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="h-6 w-full border-b border-slate-700 flex justify-center items-center">
                              <div className="w-1/3 h-1 bg-slate-600 rounded-full" />
                            </div>
                            <div className="flex-1 p-3 flex flex-col gap-2.5">
                              <div className="w-full h-8 bg-[#0ea5e9]/20 rounded border border-[#0ea5e9]/30 flex items-center px-2.5">
                                <span className="text-[10px] text-[#38bdf8] font-bold">App Dashboard</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5">
                                <div className="h-10 bg-slate-700 rounded-lg" />
                                <div className="h-10 bg-slate-700 rounded-lg" />
                              </div>
                              <div className="flex-1 bg-slate-700/60 rounded-lg" />
                            </div>
                          </div>

                          {/* Code Editor Mockup */}
                          <div className="w-[62%] h-[64%] bg-[#020617] absolute top-1/2 -translate-y-1/2 right-4 rounded-xl border border-slate-800 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 transition-transform duration-500 group-hover:translate-x-2">
                            <div className="h-7 bg-[#0f172a] border-b border-slate-800 flex items-center px-3 gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                            </div>
                            <div className="p-4 font-mono text-[10px] text-slate-300 leading-relaxed">
                              <span className="text-[#c084fc]">const</span> <span class="text-[#60a5fa]">app</span> = <span className="text-[#fcd34d]">express</span>();<br />
                              <span className="text-[#60a5fa]">app</span>.<span className="text-[#34d399]">use</span>(cors());<br />
                              <span className="text-[#60a5fa]">app</span>.<span className="text-[#34d399]">get</span>(<span className="text-[#fcd34d]">'/api'</span>, (req, res) =&gt; &#123;<br />
                              &nbsp;&nbsp;res.<span className="text-[#34d399]">json</span>(&#123; status: <span className="text-[#fcd34d]">'success'</span> &#125;);<br />
                              &#125;);<span className="animate-pulse font-bold text-[#38bdf8]">_</span>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            React &bull; Node &bull; React Native
                          </div>
                        </div>
                      )}

                      {course.id === 'ai' && (
                        <div className="w-full aspect-[4/3.2] bg-[#09090b] rounded-3xl overflow-hidden relative flex items-center justify-center border-[8px] border-slate-50 shadow-[0_0_40px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-shadow duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#312e81] via-[#09090b] to-[#09090b]" />
                          
                          <div className="w-full h-full relative flex items-center justify-center z-10">
                            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path d="M50 50 L150 50 L150 150 L50 150 Z" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 4" />
                              <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 4" />
                              <line x1="50" y1="50" x2="150" y2="150" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
                              <line x1="150" y1="50" x2="50" y2="150" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
                            </svg>

                            <div className="absolute top-[25%] left-[25%] w-3 h-3 rounded-full bg-[#22d3ee] shadow-[0_0_20px_#22d3ee] animate-pulse" />
                            <div className="absolute bottom-[25%] right-[25%] w-3 h-3 rounded-full bg-[#a855f7] shadow-[0_0_20px_#a855f7] animate-pulse" />
                            <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-[#f472b6] shadow-[0_0_15px_#f472b6]" />
                            <div className="absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_15px_#34d399]" />
                            
                            <div className="absolute w-[72%] bg-[#18181b]/90 border border-slate-700/50 rounded-xl backdrop-blur-md p-4 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 transition-transform duration-500 group-hover:scale-105">
                              <div className="flex gap-1.5 mb-2.5 border-b border-slate-700 pb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                              </div>
                              <div className="font-mono text-[10px] text-indigo-300 leading-relaxed">
                                &gt; import torch<br />
                                &gt; model = NeuralNet()<br />
                                &gt; model.train(epochs=100)<br />
                                <span className="text-[#34d399] mt-1.5 block">&gt; Epoch 100/100: Accuracy: 99.8%</span>
                                &gt; <span className="animate-pulse font-bold text-white">_</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            AI Neural Models &bull; PyTorch
                          </div>
                        </div>
                      )}

                      {course.id === 'uiux' && (
                        <div className="w-full aspect-[4/3.2] bg-[#1e1e1e] rounded-3xl overflow-hidden relative flex border-[8px] border-slate-50 shadow-[0_0_40px_rgba(236,72,153,0.15)] group-hover:shadow-[0_0_50px_rgba(236,72,153,0.25)] transition-shadow duration-500">
                          <div className="w-[22%] h-full bg-[#2c2c2c] border-r border-[#3a3a3a] p-3 flex flex-col gap-2.5 z-20">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="w-full h-2 bg-[#4a4a4a] rounded-sm" />
                            <div className="w-3/4 h-2 bg-[#4a4a4a] rounded-sm" />
                            <div className="w-full h-2 bg-[#4a4a4a] rounded-sm mt-2" />
                            <div className="w-1/2 h-2 bg-[#4a4a4a] rounded-sm" />
                          </div>
                          
                          <div className="flex-1 bg-[#1e1e1e] relative p-4 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                            <div className="flex gap-4 transition-transform duration-500 group-hover:scale-105 relative z-10 w-full h-full items-center justify-center">
                              <div className="w-[45%] h-[85%] bg-[#0b0c10] rounded-xl shadow-2xl border border-[#2f3542] p-3 flex flex-col gap-2.5 relative overflow-hidden">
                                <div className="w-full h-4 bg-[#2f3542] rounded-md" />
                                <div className="flex-1 bg-pink-500/20 rounded-md border border-pink-500/40" />
                                <div className="w-full h-8 bg-cyan-500/20 rounded-md border border-cyan-500/40" />
                              </div>
                              <div className="w-[45%] h-[85%] bg-[#0b0c10] rounded-xl shadow-2xl border border-[#2f3542] p-3 flex flex-col gap-2.5 relative">
                                <div className="absolute -inset-1 border-[1.5px] border-[#0ea5e9] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="absolute -top-3 -left-1 bg-[#0ea5e9] text-white text-[8px] font-bold px-1 rounded-sm">Component</div>
                                </div>
                                <div className="flex gap-2 h-8">
                                  <div className="w-8 bg-[#2f3542] rounded-full" />
                                  <div className="flex-1 bg-[#2f3542] rounded-md" />
                                </div>
                                <div className="flex-1 bg-[#2f3542] rounded-md" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            Figma &bull; Design Tokens &bull; Prototyping
                          </div>
                        </div>
                      )}

                      {course.id === 'data' && (
                        <div className="w-full aspect-[4/3.2] bg-[#020617] rounded-3xl overflow-hidden relative flex border-[8px] border-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.25)] transition-shadow duration-500 p-5 flex-col">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#020617] z-0" />
                          
                          <div className="flex-1 w-full bg-[#1e293b] rounded-2xl border border-slate-700/50 p-3.5 shadow-2xl flex flex-col gap-3 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="w-1/2 h-2.5 bg-slate-600 rounded-md" />
                            
                            <div className="flex gap-2.5 h-16">
                              <div className="flex-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-lg flex items-end p-2.5 gap-1.5 overflow-hidden">
                                <div className="w-full bg-[#0ea5e9] h-[30%] rounded-t-sm group-hover:h-[60%] transition-all duration-500" />
                                <div className="w-full bg-[#38bdf8] h-[50%] rounded-t-sm group-hover:h-[80%] transition-all duration-500 delay-75" />
                                <div className="w-full bg-[#7dd3fc] h-[90%] rounded-t-sm group-hover:h-[40%] transition-all duration-500 delay-100" />
                                <div className="w-full bg-[#0284c7] h-[60%] rounded-t-sm group-hover:h-[95%] transition-all duration-500 delay-150" />
                              </div>
                              <div className="w-16 bg-[#0f172a] rounded-lg border border-slate-700 flex flex-col justify-center items-center gap-1">
                                <div className="text-[#34d399] font-bold text-sm">+24%</div>
                                <div className="w-6 h-1 bg-slate-700 rounded-full" />
                              </div>
                            </div>
                            
                            <div className="flex-1 bg-[#0f172a] rounded-lg border border-slate-700/50 p-2.5 font-mono text-[9px] text-[#34d399] leading-relaxed overflow-hidden">
                              <span className="text-[#c084fc]">SELECT</span> user_id, count(*)<br />
                              <span className="text-[#c084fc]">FROM</span> activity_log<br />
                              <span className="text-[#c084fc]">GROUP BY</span> user_id;
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] text-slate-400 tracking-widest font-semibold z-30">
                            Data Engine &bull; Python &bull; SQL
                          </div>
                        </div>
                      )}

                      {/* Integrated Stats Grid */}
                      <div className="grid grid-cols-4 gap-1 bg-slate-50/80 rounded-2xl p-1.5 border border-slate-100">
                        <div className="text-center p-2">
                          <p className="text-[9px] text-slate-400 uppercase font-extrabold tracking-widest mb-0.5">Duration</p>
                          <p className="text-sm font-bold text-[#0ea5e9]">{course.duration}</p>
                        </div>
                        <div className="text-center p-2 border-l border-slate-200/60">
                          <p className="text-[9px] text-slate-400 uppercase font-extrabold tracking-widest mb-0.5">Format</p>
                          <p className="text-sm font-bold text-slate-700">{course.format.split('+')[0]}</p>
                        </div>
                        <div className="text-center p-2 border-l border-slate-200/60">
                          <p className="text-[9px] text-slate-400 uppercase font-extrabold tracking-widest mb-0.5">Projects</p>
                          <p className="text-sm font-bold text-slate-700">{course.projectsCount}</p>
                        </div>
                        <div className="text-center p-2 border-l border-slate-200/60">
                          <p className="text-[9px] text-slate-400 uppercase font-extrabold tracking-widest mb-0.5">Rating</p>
                          <p className="text-sm font-bold text-amber-500">{course.rating.split(' ')[0]}</p>
                        </div>
                      </div>

                    </div>

                    {/* Content Side */}
                    <div className={`w-full lg:w-[55%] flex flex-col justify-center py-2 ${isLeftImage ? 'lg:pl-6 order-2' : 'lg:pr-6 order-2 lg:order-1'}`}>
                      
                      {/* Badges Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="px-3.5 py-1 rounded-full bg-sky-50 text-[#0ea5e9] text-[10px] font-extrabold uppercase tracking-widest border border-sky-100">
                          Educational Bootcamp
                        </span>
                        <span className={`px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100 ml-auto hidden sm:block">
                          Open Enrollment
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium">
                        {course.desc}
                      </p>

                      {/* Technology Stack Pills */}
                      <div className="mb-8">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Key Skills &amp; Technology Stack:</p>
                        <div className="flex flex-wrap gap-2.5">
                          {course.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-2 bg-white shadow-sm hover:shadow-md transition-shadow">
                              <CheckCircle2 size={15} className="text-[#0ea5e9]" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleEnrollClick(course.title)}
                          className="px-8 py-3.5 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shadow-lg shadow-[#0ea5e9]/30 hover:bg-[#0284c7] transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Enroll / Apply Now</span>
                          <ArrowRight size={16} />
                        </motion.button>

                        <a
                          href="https://wabiskills.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold hover:border-[#0ea5e9] hover:text-[#0284c7] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                        >
                          <span>View Syllabus ↗</span>
                        </a>
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

      {/* NEW SECTION 14: ACADEMY CTA */}
      <AcademyCTA />
    </div>
  );
};