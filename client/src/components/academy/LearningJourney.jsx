import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Terminal,
  Code2,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Award,
  Zap,
  ArrowRight,
  ArrowLeft,
  LayoutGrid,
  SlidersHorizontal,
  Check,
  ChevronRight,
  ShieldCheck,
  Star,
  GraduationCap,
  Briefcase,
  Rocket,
  GitPullRequest,
  Cpu
} from 'lucide-react';

import imgWabiSkills from '../../assets/academy/wabiskills.jpg';
import imgBootcamp from '../../assets/academy/wabiskills_bootcamp.png';
import imgCourses from '../../assets/academy/wabiskills_courses.png';
import imgFullstack from '../../assets/academy/fullstack_card.png';
import imgAi from '../../assets/academy/ai_card.png';
import imgUiUx from '../../assets/academy/uiux_card.png';

export const LearningJourney = () => {
  const [viewMode, setViewMode] = useState('TIMELINE'); // 'TIMELINE' | 'SPOTLIGHT' | 'GRID'
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [expandedGridCard, setExpandedGridCard] = useState(null);

  // Refs for dynamic millimeter-precise SVG line path calculation
  const timelineContainerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [linePathD, setLinePathD] = useState('');

  const stages = [
    {
      num: '01',
      key: 'DISCOVER',
      title: 'TVET-Aligned Curriculum',
      subtitle: 'Official Standards & Software Engineering Core',
      desc: 'Our modules are built on official technical and vocational standards to ensure professional validation, engineering mastery, and long-term career success.',
      icon: GraduationCap,
      image: imgWabiSkills,
      gradient: 'from-sky-400 via-cyan-500 to-blue-600',
      brandColor: '#06B6D4',
      badgeBg: 'bg-cyan-100/90 text-cyan-950 border-cyan-300',
      nodeBorder: 'border-cyan-400/90 shadow-cyan-500/20',
      pillBorder: 'border-cyan-300 bg-cyan-50 text-cyan-900',
      accentBar: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      milestoneCode: 'MILESTONE CODE 01',
      highlights: [
        'TVET-aligned official vocational engineering standards',
        'Career path exploration (Full-Stack, AI, Mobile)',
        'Git & GitHub collaboration & workflow standards',
        'Command line mastery & developer environment setup'
      ],
      deliverable: 'Configured Dev Environment & Engineering Roadmap',
      techPills: ['Git & GitHub', 'VS Code', 'CLI Mastery', 'System Architecture'],
      duration: 'Weeks 1 to 2',
      terminalCmd: 'yomtech --init-stage 01 --track tvet-curriculum'
    },
    {
      num: '02',
      key: 'PRACTICE',
      title: 'State-of-the-Art Practical Labs',
      subtitle: 'Realistic Simulation & Deep Muscle Memory',
      desc: 'Train using realistic simulation labs, nursery sandboxes, and live repository environments to build instant muscle memory and direct software experience.',
      icon: Cpu,
      image: imgBootcamp,
      gradient: 'from-emerald-400 via-teal-500 to-emerald-600',
      brandColor: '#10B981',
      badgeBg: 'bg-emerald-100/90 text-emerald-950 border-emerald-300',
      nodeBorder: 'border-emerald-400/90 shadow-emerald-500/20',
      pillBorder: 'border-emerald-300 bg-emerald-50 text-emerald-900',
      accentBar: 'bg-gradient-to-r from-emerald-400 to-teal-500',
      milestoneCode: 'MILESTONE CODE 02',
      highlights: [
        'Interactive coding lab challenges & algorithms',
        'Pair programming & live refactoring drills',
        'Unit & integration testing suites (TDD)',
        'Debugging performance bottlenecks & memory'
      ],
      deliverable: '10+ Verified Lab Submissions & Suite Tests',
      techPills: ['TypeScript', 'Jest / Vitest', 'Docker Labs', 'Live Pair Code'],
      duration: 'Weeks 3 to 6',
      terminalCmd: 'yomtech --run-labs --coverage 100%'
    },
    {
      num: '03',
      key: 'MENTOR',
      title: 'Experienced Professional Mentors',
      subtitle: 'Direct Lead Engineering Guidance & Clinical Expertise',
      desc: 'Learn directly under professional lead software engineers, pediatric technical trainers, and senior architects with clinical enterprise expertise.',
      icon: Users,
      image: imgCourses,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      brandColor: '#0284C7',
      badgeBg: 'bg-sky-100/90 text-sky-950 border-sky-300',
      nodeBorder: 'border-sky-400/90 shadow-sky-500/20',
      pillBorder: 'border-sky-300 bg-sky-50 text-sky-900',
      accentBar: 'bg-gradient-to-r from-sky-400 to-indigo-500',
      milestoneCode: 'MILESTONE CODE 03',
      highlights: [
        'Line-by-line senior engineering code reviews',
        'Architectural refactoring recommendations',
        'Security & performance vulnerability audits',
        'Industry best-practice alignment & 1-on-1 coaching'
      ],
      deliverable: 'Production Code Review Certification',
      techPills: ['Code Audit', 'Performance Tuning', 'Clean Architecture', 'Security'],
      duration: 'Weeks 7 to 9',
      terminalCmd: 'yomtech --code-review --senior-mentor'
    },
    {
      num: '04',
      key: 'RESOURCE',
      title: 'Comprehensive Resource Center',
      subtitle: 'Architecture Charts & Enterprise Blueprint Templates',
      desc: 'Access clear study guides, system developmental charts, pediatric menus, tech specifications, and first-aid code templates during training.',
      icon: BookOpen,
      image: imgFullstack,
      gradient: 'from-pink-500 via-rose-500 to-pink-700',
      brandColor: '#EC4899',
      badgeBg: 'bg-pink-100/90 text-pink-950 border-pink-300',
      nodeBorder: 'border-pink-400/90 shadow-pink-500/20',
      pillBorder: 'border-pink-300 bg-pink-50 text-pink-900',
      accentBar: 'bg-gradient-to-r from-pink-500 to-rose-500',
      milestoneCode: 'MILESTONE CODE 04',
      highlights: [
        'Full-stack architecture blueprints & system specs',
        'OAuth authentication & role-based access control',
        'CI/CD pipeline automation & cloud hosting',
        'Database indexing & API performance optimization'
      ],
      deliverable: 'Full Stack Blueprint & Comprehensive Spec',
      techPills: ['Next.js App', 'Express / Nest API', 'MongoDB / Postgres', 'AWS Cloud'],
      duration: 'Weeks 10 to 13',
      terminalCmd: 'yomtech --deploy production --env cloud'
    },
    {
      num: '05',
      key: 'NETWORK',
      title: 'Job Connection Network',
      subtitle: 'Verified Enterprise Placements & Global Remote Teams',
      desc: 'We actively assist certified graduates in finding secure, verified placements with top-tier technology companies and caring enterprise partners.',
      icon: Briefcase,
      image: imgAi,
      gradient: 'from-orange-400 via-amber-500 to-orange-600',
      brandColor: '#F97316',
      badgeBg: 'bg-orange-100/90 text-orange-950 border-orange-300',
      nodeBorder: 'border-orange-400/90 shadow-orange-500/20',
      pillBorder: 'border-orange-300 bg-orange-50 text-orange-900',
      accentBar: 'bg-gradient-to-r from-orange-400 to-amber-500',
      milestoneCode: 'MILESTONE CODE 05',
      highlights: [
        'High-impact engineering portfolio creation',
        'System design & live coding interview preparation',
        'Direct hiring partner introductions & verified placements',
        'Global remote team integration support'
      ],
      deliverable: 'Verified Placement & Enterprise Handoff',
      techPills: ['Portfolio Site', 'Interview Prep', 'Direct Hiring', 'Career Match'],
      duration: 'Weeks 14 to 16',
      terminalCmd: 'yomtech --accelerate-career --connect-network'
    },
    {
      num: '06',
      key: 'GROW',
      title: 'Continuous Autonomy & Growth',
      subtitle: 'Production Portfolio Polish & Market Leadership',
      desc: 'Build a standout production portfolio, master high-scale architecture, contribute to enterprise software repos, and scale your career trajectory.',
      icon: Rocket,
      image: imgUiUx,
      gradient: 'from-[#0284C7] via-[#0ED3DD] to-indigo-600',
      brandColor: '#0284C7',
      badgeBg: 'bg-sky-100/90 text-sky-950 border-sky-300',
      nodeBorder: 'border-sky-400/90 shadow-sky-500/20',
      pillBorder: 'border-sky-300 bg-sky-50 text-sky-900',
      accentBar: 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD]',
      milestoneCode: 'MILESTONE CODE 06',
      highlights: [
        'Enterprise open-source contribution mastery',
        'Senior developer mentoring leadership',
        'Production system scaling & SLA monitoring',
        'Long-term engineering autonomy'
      ],
      deliverable: 'Job-Ready Engineering Portfolio & Autonomy Pack',
      techPills: ['Open Source', 'Tech Leadership', 'SLA Scaling', 'Autonomy'],
      duration: 'Ongoing Autonomy',
      terminalCmd: 'yomtech --launch-portfolio --scale-growth'
    }
  ];

  // Dynamic layout calculation: Measure exact (x, y) center of node elements relative to container
  useLayoutEffect(() => {
    if (viewMode !== 'TIMELINE') return;

    const recalculateLinePath = () => {
      if (!timelineContainerRef.current) return;
      const containerRect = timelineContainerRef.current.getBoundingClientRect();
      if (containerRect.width === 0 || containerRect.height === 0) return;

      const points = nodeRefs.current
        .map((el) => {
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top
          };
        })
        .filter(Boolean);

      if (points.length < 2) return;

      // Construct SVG path L coords passing EXACTLY through center point of every node
      const pathD = points.reduce((acc, pt, i) => {
        return i === 0 ? `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}` : `${acc} L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
      }, '');

      setLinePathD(pathD);
    };

    recalculateLinePath();

    // ResizeObserver for dynamic layout shifts & screen resizes
    const observer = new ResizeObserver(recalculateLinePath);
    if (timelineContainerRef.current) {
      observer.observe(timelineContainerRef.current);
    }
    window.addEventListener('resize', recalculateLinePath);

    // Timeout fallback for post-image load shifts
    const t1 = setTimeout(recalculateLinePath, 150);
    const t2 = setTimeout(recalculateLinePath, 500);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', recalculateLinePath);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [viewMode]);

  const activeStage = stages[activeStageIdx];
  const ActiveIcon = activeStage.icon;

  const nextStage = () => {
    setActiveStageIdx((prev) => (prev + 1) % stages.length);
  };

  const prevStage = () => {
    setActiveStageIdx((prev) => (prev - 1 + stages.length) % stages.length);
  };

  const toggleGridCardExpand = (idx) => {
    setExpandedGridCard(expandedGridCard === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-36 w-full bg-[#FAFCFF] relative text-slate-900 overflow-hidden border-b border-sky-200/80 font-sans">
      {/* Ambient Soft Glow Halos */}
      <div className="absolute top-1/6 left-1/4 w-[750px] h-[750px] bg-gradient-to-br from-cyan-100/40 via-sky-100/40 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/4 w-[650px] h-[650px] bg-gradient-to-tl from-emerald-100/40 via-indigo-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background Matrix Dot Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-sky-100/80 border border-sky-300 text-[#0072B8] text-xs font-black tracking-widest uppercase shadow-sm">
            <div className="w-5.5 h-5.5 rounded-full bg-sky-200 border border-sky-400 flex items-center justify-center shrink-0">
              <Sparkles size={13} className="text-[#0072B8] animate-spin" />
            </div>
            <span className="whitespace-nowrap">PREMIER EDUCATIONAL PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
            Your Journey From <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 bg-clip-text text-transparent">Learning to Building</span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            We deliver premium, TVET-aligned software training for future engineers through structured practical labs, senior mentorship, and verified career connections.
          </p>

          {/* Mode Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-sky-200/90 shadow-lg shadow-sky-500/10 inline-flex items-center gap-1">
              <button
                onClick={() => setViewMode('TIMELINE')}
                className={`px-7 py-3 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'TIMELINE'
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#1DA1F2] text-white font-black shadow-lg shadow-sky-500/30 scale-105'
                    : 'text-slate-700 hover:bg-sky-100/70'
                }`}
              >
                <GitPullRequest className="w-4 h-4" />
                <span>Winding Pathway</span>
              </button>

              <button
                onClick={() => setViewMode('SPOTLIGHT')}
                className={`px-7 py-3 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'SPOTLIGHT'
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#1DA1F2] text-white font-black shadow-lg shadow-sky-500/30 scale-105'
                    : 'text-slate-700 hover:bg-sky-100/70'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Interactive Spotlight</span>
              </button>

              <button
                onClick={() => setViewMode('GRID')}
                className={`px-7 py-3 rounded-full text-xs font-black transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'GRID'
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#1DA1F2] text-white font-black shadow-lg shadow-sky-500/30 scale-105'
                    : 'text-slate-700 hover:bg-sky-100/70'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Roadmap Grid ({stages.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stepper Rail */}
        <div className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 shadow-xl shadow-sky-500/10">
          <div className="w-full bg-white/95 backdrop-blur-2xl rounded-[2.1rem] p-3 sm:p-4 border border-sky-200/80">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 relative">
              {stages.map((stg, idx) => {
                const isSelected = activeStageIdx === idx;
                const Icon = stg.icon;

                return (
                  <button
                    key={stg.key}
                    onClick={() => {
                      setActiveStageIdx(idx);
                    }}
                    className={`relative flex flex-col items-center justify-center px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer group ${
                      isSelected
                        ? `bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 text-white shadow-xl shadow-cyan-500/30 scale-105 ring-2 ring-sky-300`
                        : 'bg-sky-50/80 hover:bg-white text-slate-800 border border-sky-200/80 hover:border-[#0284C7]/50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black opacity-90 ${isSelected ? 'text-white' : 'text-[#0284C7]'}`}>
                        {stg.num}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#0284C7]'}`} />
                    </div>
                    <span className={`text-[11px] font-black tracking-wider uppercase mt-1 truncate max-w-full ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {stg.key}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN VIEW CONTENT AREA */}
        <AnimatePresence mode="wait">
          {viewMode === 'TIMELINE' ? (
            /* ========================================================================= */
            /* MODE A: PREMIER WINDING TIMELINE PATHWAY (DYNAMIC PASS THROUGH ICONS)     */
            /* ========================================================================= */
            <motion.div
              key="timeline-zigzag-view"
              ref={timelineContainerRef}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-6xl mx-auto py-10"
            >
              {/* DYNAMIC SVG CONNECTING DUAL-TRACK LINE THAT PASSES EXACTLY THROUGH NODE CENTERS */}
              <div className="absolute inset-0 pointer-events-none hidden md:block z-10">
                <svg className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="timelinePassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="20%" stopColor="#10B981" />
                      <stop offset="40%" stopColor="#0284C7" />
                      <stop offset="60%" stopColor="#EC4899" />
                      <stop offset="80%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>

                    <filter id="nodeGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. Outer Ambient Glow Tube */}
                  {linePathD && (
                    <path
                      d={linePathD}
                      stroke="url(#timelinePassGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.35"
                      filter="url(#nodeGlowFilter)"
                    />
                  )}

                  {/* 2. Base Colored Track (Cyan/Blue track matching reference image) */}
                  {linePathD && (
                    <path
                      d={linePathD}
                      stroke="url(#timelinePassGrad)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.95"
                    />
                  )}

                  {/* 3. Inner White Solid Core Track */}
                  {linePathD && (
                    <path
                      d={linePathD}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.95"
                    />
                  )}
                </svg>
              </div>

              {/* MOBILE VERTICAL CENTER DUAL LINE */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-sky-500 rounded-full md:hidden z-10 opacity-80" />

              {/* STAGES LIST CONTAINER */}
              <div className="space-y-20 md:space-y-32 relative z-20">
                {stages.map((stg, idx) => {
                  const Icon = stg.icon;
                  const isEven = idx % 2 === 0; // Even index: Card Left, Content Right. Odd: Content Left, Card Right.

                  return (
                    <motion.div
                      key={stg.key}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                    >
                      {/* ========================================================= */}
                      {/* CENTRAL ICON NODE BADGE (ANCHORED & MEASURED DYNAMICALLY)  */}
                      {/* ========================================================= */}
                      <div 
                        ref={(el) => (nodeRefs.current[idx] = el)}
                        className={`absolute z-30 hidden md:flex items-center justify-center transition-transform duration-500 hover:scale-125 cursor-pointer
                          ${isEven ? 'left-[58%]' : 'left-[42%]'} top-1/2 -translate-x-1/2 -translate-y-1/2`}
                        onClick={() => {
                          setActiveStageIdx(idx);
                          setViewMode('SPOTLIGHT');
                        }}
                      >
                        {/* Outer Solid Circle Ring */}
                        <div className={`relative w-20 h-20 rounded-full border-2 border-solid ${stg.nodeBorder} bg-white/70 backdrop-blur-xs flex items-center justify-center shadow-xl transition-all duration-500 group`}>
                          
                          {/* Inner Gradient Solid Circle Disk */}
                          <div className={`w-13 h-13 rounded-full bg-gradient-to-br ${stg.gradient} text-white flex items-center justify-center shadow-md border-2 border-white relative`}>
                            <Icon className="w-6 h-6 stroke-[2.2]" />
                            
                            {/* Top-Right Step Number Badge (e.g. 1, 2, 3, 4, 5, 6 - Exact reference!) */}
                            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-white text-white font-black text-[10px] flex items-center justify-center shadow-md">
                              {idx + 1}
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* MOBILE NODE BADGE (CENTERED ON MOBILE LINE) */}
                      <div className="flex md:hidden justify-center z-30 my-2">
                        <div className={`relative w-16 h-16 rounded-full border-2 border-solid ${stg.nodeBorder} bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-lg`}>
                          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${stg.gradient} text-white flex items-center justify-center shadow-md border-2 border-white relative`}>
                            <Icon className="w-5 h-5 stroke-[2.2]" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-white text-white font-black text-[9px] flex items-center justify-center shadow-sm">
                              {idx + 1}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ========================================================= */}
                      {/* COLUMN 1: LEFT SIDE (Either Image Card or Content Details) */}
                      {/* ========================================================= */}
                      <div className={`md:col-span-5 ${isEven ? 'order-1 md:pr-4' : 'order-2 md:order-1 md:pl-4'}`}>
                        {isEven ? (
                          /* EVEN INDEX: ORGANIC CURVED DOUBLE-SHELL IMAGE CARD ON LEFT */
                          <div className="relative group cursor-pointer" onClick={() => setActiveStageIdx(idx)}>
                            {/* Ambient Soft Color Glow behind frame */}
                            <div className={`absolute -inset-3 rounded-[3.5rem] bg-gradient-to-br ${stg.gradient} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500`} />
                            
                            {/* White Outer Card Shell (Like Image 1) */}
                            <div className="relative p-4 sm:p-5 rounded-[2.8rem] bg-white border border-slate-100/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                              
                              {/* Inner Image Container (Organic Wavy Frame like Image 2) */}
                              <div 
                                className={`relative overflow-hidden border-4 ${stg.nodeBorder} bg-slate-50 flex items-center justify-center shadow-inner`}
                                style={{ borderRadius: '45px 30px 55px 35px / 35px 50px 40px 60px' }}
                              >
                                <img 
                                  src={stg.image} 
                                  alt={stg.title}
                                  className="w-full h-[270px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-108"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-75" />
                                
                                {/* Bottom Floating Badge on Image */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                  <span className={`px-4 py-1.5 rounded-full ${stg.badgeBg} text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-md`}>
                                    STAGE {stg.num}
                                  </span>
                                  <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-black shadow-xs">
                                    {stg.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* ODD INDEX: TEXT CONTENT DETAILS ON LEFT */
                          <div className="space-y-4 text-left p-6 sm:p-8 rounded-[2.8rem] bg-white/90 backdrop-blur-xl border border-sky-200/80 shadow-xl hover:border-sky-300 transition-all">
                            <div className="flex items-center gap-3">
                              <span className={`px-4 py-1.5 rounded-full ${stg.badgeBg} text-[10px] font-black uppercase tracking-widest shadow-xs`}>
                                STAGE {stg.num} • {stg.key}
                              </span>
                              <span className="text-xs font-black text-[#0072B8] font-mono">
                                {stg.milestoneCode}
                              </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight leading-tight">
                              {stg.title}
                            </h3>

                            <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                              {stg.desc}
                            </p>

                            {/* Underline Accent Line */}
                            <div className={`w-14 h-1.5 rounded-full ${stg.accentBar}`} />

                            <div className="pt-2 flex flex-wrap gap-2">
                              {stg.techPills.map((tech, tIdx) => (
                                <span key={tIdx} className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* SPACER COLUMN IN CENTER (COL 6) TO GIVE NODE BREATHING ROOM */}
                      <div className="hidden md:block md:col-span-2" />

                      {/* ========================================================= */}
                      {/* COLUMN 2: RIGHT SIDE (Either Content Details or Image Card) */}
                      {/* ========================================================= */}
                      <div className={`md:col-span-5 ${isEven ? 'order-2 md:pl-4' : 'order-1 md:order-2 md:pr-4'}`}>
                        {isEven ? (
                          /* EVEN INDEX: TEXT CONTENT DETAILS ON RIGHT */
                          <div className="space-y-4 text-left p-6 sm:p-8 rounded-[2.8rem] bg-white/90 backdrop-blur-xl border border-sky-200/80 shadow-xl hover:border-sky-300 transition-all">
                            <div className="flex items-center gap-3">
                              <span className={`px-4 py-1.5 rounded-full ${stg.badgeBg} text-[10px] font-black uppercase tracking-widest shadow-xs`}>
                                STAGE {stg.num} • {stg.key}
                              </span>
                              <span className="text-xs font-black text-[#0072B8] font-mono">
                                {stg.milestoneCode}
                              </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight leading-tight">
                              {stg.title}
                            </h3>

                            <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                              {stg.desc}
                            </p>

                            {/* Underline Accent Line */}
                            <div className={`w-14 h-1.5 rounded-full ${stg.accentBar}`} />

                            <div className="pt-2 flex flex-wrap gap-2">
                              {stg.techPills.map((tech, tIdx) => (
                                <span key={tIdx} className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* ODD INDEX: ORGANIC CURVED DOUBLE-SHELL IMAGE CARD ON RIGHT */
                          <div className="relative group cursor-pointer" onClick={() => setActiveStageIdx(idx)}>
                            {/* Ambient Soft Color Glow behind frame */}
                            <div className={`absolute -inset-3 rounded-[3.5rem] bg-gradient-to-br ${stg.gradient} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500`} />
                            
                            {/* White Outer Card Shell (Like Image 1) */}
                            <div className="relative p-4 sm:p-5 rounded-[2.8rem] bg-white border border-slate-100/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                              
                              {/* Inner Image Container (Organic Wavy Frame like Image 2) */}
                              <div 
                                className={`relative overflow-hidden border-4 ${stg.nodeBorder} bg-slate-50 flex items-center justify-center shadow-inner`}
                                style={{ borderRadius: '35px 50px 40px 60px / 45px 30px 55px 35px' }}
                              >
                                <img 
                                  src={stg.image} 
                                  alt={stg.title}
                                  className="w-full h-[270px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-108"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-75" />
                                
                                {/* Bottom Floating Badge on Image */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                  <span className={`px-4 py-1.5 rounded-full ${stg.badgeBg} text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-md`}>
                                    STAGE {stg.num}
                                  </span>
                                  <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-black shadow-xs">
                                    {stg.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>


                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : viewMode === 'SPOTLIGHT' ? (
            /* ========================================================================= */

            /* MODE B: PREMIER INTERACTIVE SPOTLIGHT SHOWCASE (Cockpit Layout)           */
            /* ========================================================================= */
            <motion.div
              key={`spotlight-${activeStageIdx}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* LEFT COLUMN: Stage Overview & Objectives (Col 1-7) - Luminous Cockpit */}
              <div className="lg:col-span-7 p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-indigo-600 shadow-2xl shadow-sky-500/15">
                <div className="bg-white/95 backdrop-blur-2xl rounded-[2.4rem] p-7 sm:p-10 lg:p-11 h-full flex flex-col justify-between space-y-7 relative overflow-hidden text-left text-slate-900 border border-white shadow-xl">
                  
                  <div className="space-y-6">
                    {/* Top Capsule Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white text-xs font-black tracking-widest uppercase shadow-lg shadow-cyan-500/25">
                        <ActiveIcon className="w-4 h-4" />
                        <span className="whitespace-nowrap">STAGE {activeStage.num} • {activeStage.key}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-black text-[#0072B8] bg-sky-100/90 px-6 py-2.5 rounded-full border border-sky-300 font-mono whitespace-nowrap shadow-xs">
                          {activeStage.duration}
                        </span>
                        <span className="text-xs font-black text-[#0072B8] bg-sky-100/90 px-6 py-2.5 rounded-full border border-sky-300 font-mono whitespace-nowrap shadow-xs">
                          {activeStage.milestoneCode}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                        {activeStage.title}
                      </h3>
                      <p className="text-[#0284C7] text-sm sm:text-base font-extrabold mt-1.5 font-display">
                        {activeStage.subtitle}
                      </p>
                      <div className="mt-4 text-slate-800 text-sm sm:text-base font-semibold leading-relaxed bg-gradient-to-r from-sky-50 via-indigo-50/40 to-cyan-50/50 p-6 sm:p-7 rounded-2xl border border-sky-200/80 shadow-xs">
                        {activeStage.desc}
                      </div>
                    </div>

                    {/* Key Objectives */}
                    <div className="space-y-3.5 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#0284C7] fill-[#0284C7]" />
                        Key Stage Objectives &amp; Engineering Skills
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeStage.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-3.5 py-3 px-2 text-xs sm:text-sm font-black text-slate-900 group/obj transition-transform hover:translate-x-1">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-md group-hover/obj:scale-110 transition-transform shrink-0">
                              <CheckCircle2 size={17} />
                            </div>
                            <span className="leading-snug text-slate-900 font-extrabold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                        Core Technologies &amp; Frameworks:
                      </span>
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {activeStage.techPills.map((tech, i) => (
                          <span key={i} className="text-xs font-black px-6 py-2.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200/90 shadow-xs hover:bg-sky-100 hover:scale-105 transition-all whitespace-nowrap">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Prev / Next */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={prevStage}
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-black text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-700" />
                      <span>Previous Stage</span>
                    </button>

                    <div className="text-xs font-mono font-black text-slate-600">
                      {activeStageIdx + 1} / {stages.length}
                    </div>

                    <button
                      onClick={nextStage}
                      className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:scale-105 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/30 cursor-pointer whitespace-nowrap"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>

              {/* RIGHT COLUMN: Studio Workspace & Core Deliverable Hub (Col 8-12) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Live Developer Terminal Monitor Box — Luminous Light Glass IDE Console */}
                <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl hover:shadow-[0_25px_60px_rgba(2,132,199,0.25)] transition-all duration-500 group">
                  <div className="bg-white/95 backdrop-blur-2xl text-slate-900 rounded-[2.4rem] p-6 sm:p-7 font-mono space-y-4 text-left border border-white shadow-xl relative overflow-hidden">
                    
                    {/* Top Ambient Light Glow Flare */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#0ED3DD]/20 via-sky-300/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                    {/* Monitor Header Bar */}
                    <div className="flex items-center justify-between border-b border-sky-200/80 pb-3.5 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-sm flex items-center justify-center text-[8px] font-black text-white">✕</div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-sm flex items-center justify-center text-[8px] font-black text-white">‒</div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-sm flex items-center justify-center text-[8px] font-black text-white">✦</div>
                        <span className="text-[11px] font-extrabold text-slate-500 pl-2">yomtech-terminal v2.4</span>
                      </div>

                      <div className="flex items-center gap-2 bg-sky-100/90 px-4 py-1.5 rounded-full border border-sky-300 text-xs text-[#0072B8] font-black shadow-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0ED3DD] animate-ping" />
                        <span>yomtech-academy ~/stage-{activeStage.num}</span>
                      </div>
                    </div>

                    {/* Console Code Content Body */}
                    <div className="space-y-3 text-xs bg-gradient-to-br from-sky-50/90 via-cyan-50/50 to-blue-50/70 p-5 rounded-2xl border border-sky-200/90 font-mono text-slate-900 shadow-xs relative z-10">
                      
                      {/* Command prompt line */}
                      <div className="flex items-center gap-2 text-[#0072B8] font-black">
                        <span className="text-[#0284C7]">➜</span>
                        <span className="text-[#0072B8]">~/academy</span>
                        <span className="text-slate-900 font-bold">$ {activeStage.terminalCmd}</span>
                      </div>

                      {/* Output Stream */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-start gap-3">
                          <span className="text-slate-400 font-bold select-none w-4 text-right">01</span>
                          <span className="text-emerald-700 font-black flex items-center gap-2">
                            <span>✔</span> Initializing Stage {activeStage.num} environment...
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-slate-400 font-bold select-none w-4 text-right">02</span>
                          <span className="text-[#0072B8] font-bold">
                            ➜ Target Stage: <span className="text-slate-900 font-black">{activeStage.title}</span>
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-slate-400 font-bold select-none w-4 text-right">03</span>
                          <span className="text-amber-800 font-bold">
                            ➜ Milestone Code: <span className="text-amber-900 font-black px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300">{activeStage.milestoneCode}</span>
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-slate-400 font-bold select-none w-4 text-right">04</span>
                          <span className="text-cyan-800 font-bold flex items-center gap-2">
                            <span>➜</span> Pipeline Status: <span className="text-[#0284C7] font-black tracking-wider uppercase">ACTIVE LEARNING PIPELINE</span>
                          </span>
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                          <span className="text-slate-400 font-bold select-none w-4 text-right">05</span>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between text-[11px] text-[#0072B8] font-black">
                              <span>Compilation &amp; Lab Coverage</span>
                              <span>100%</span>
                            </div>
                            <div className="w-full h-2.5 rounded-full bg-sky-200/80 overflow-hidden p-0.5 border border-sky-300">
                              <div className="h-full rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] animate-pulse" style={{ width: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone Core Deliverable Card */}
                <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl flex-1 flex flex-col">
                  <div className="bg-white/95 backdrop-blur-2xl rounded-[2.4rem] p-7 sm:p-9 h-full flex flex-col justify-between space-y-6 text-left text-slate-900 border border-white shadow-xl">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-amber-100 via-sky-100 to-indigo-100 border border-amber-300 text-amber-950 text-xs font-black tracking-wider uppercase shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-amber-400 border border-amber-500 flex items-center justify-center text-slate-900 shrink-0">
                          <Zap size={14} />
                        </div>
                        <span className="whitespace-nowrap">STAGE {activeStage.num} CORE DELIVERABLE</span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight leading-tight">
                        {activeStage.deliverable}
                      </h4>

                      <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                        Every engineer at Yomtech Academy validates this milestone through real code commits, peer reviews, and automated CI tests.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs font-black text-[#0072B8]">
                        <ShieldCheck className="w-5 h-5 text-[#0ED3DD]" />
                        <span>Verified Certification</span>
                      </div>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:scale-105 text-white font-black text-xs tracking-wider uppercase shadow-xl shadow-cyan-500/30 transition-all whitespace-nowrap cursor-pointer"
                      >
                        <span>ENROLL STAGE</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ========================================================================= */
            /* MODE C: PREMIER ROADMAP GRID (3x2 3D Gradient Stroke Cards)               */
            /* ========================================================================= */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {stages.map((stg, idx) => {
                const Icon = stg.icon;
                const isExpanded = expandedGridCard === idx;

                return (
                  <div
                    key={stg.key}
                    className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-white via-sky-200 to-[#0ED3DD]/40 hover:from-[#0284C7] hover:via-[#0ED3DD] hover:to-[#1DA1F2] shadow-xl hover:shadow-[0_25px_50px_rgba(2,132,199,0.25)] hover:-translate-y-2 transition-all duration-500 group text-left"
                  >
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2.4rem] p-7 sm:p-8 h-full flex flex-col justify-between space-y-6 text-slate-900 border border-white shadow-sm">
                      <div className="space-y-4">
                        {/* Top Capsule Row */}
                        <div className="flex items-center justify-between">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stg.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                            <Icon className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white text-[11px] font-black tracking-widest uppercase shadow-md shadow-cyan-500/20 whitespace-nowrap">
                            STAGE {stg.num}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-black text-[#0284C7] tracking-wider uppercase block font-display mb-1">
                            {stg.subtitle}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight leading-tight">
                            {stg.title}
                          </h3>
                          <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed mt-2">
                            {stg.desc}
                          </p>
                        </div>

                        {/* Core Deliverable Box */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-sky-50/70 to-indigo-50/50 border border-amber-200/80 space-y-2 shadow-xs">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-[10px] font-black uppercase tracking-wider">
                            <Zap size={13} className="text-amber-600 shrink-0" />
                            <span>KEY DELIVERABLE</span>
                          </div>
                          <p className="text-slate-900 text-xs sm:text-sm font-black leading-snug">
                            {stg.deliverable}
                          </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2.5 pt-1">
                          {stg.techPills.map((tech, i) => (
                            <span key={i} className="text-xs font-black px-5 py-2 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 shadow-xs hover:bg-sky-100 transition-all whitespace-nowrap">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Accordion */}
                        <div className="pt-2 border-t border-slate-100">
                          <button
                            onClick={() => toggleGridCardExpand(idx)}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-50 border border-sky-200 text-xs font-black text-[#0072B8] hover:bg-sky-100 transition-all cursor-pointer whitespace-nowrap"
                          >
                            <span>{isExpanded ? 'Hide Objectives' : 'Explore Objectives'}</span>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden space-y-2.5 pt-3.5"
                              >
                                {stg.highlights.map((item, i) => (
                                  <div key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-800 bg-sky-50/60 p-3 rounded-xl border border-sky-100">
                                    <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Card Footer Button */}
                      <button
                        onClick={() => {
                          setActiveStageIdx(idx);
                          setViewMode('SPOTLIGHT');
                        }}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] hover:scale-102 text-white font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-cyan-500/25 cursor-pointer"
                      >
                        <span>Focus Stage {stg.num}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premier Bottom Achievement Banner */}
        <div className="p-[2px] rounded-[3rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 shadow-2xl">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2.9rem] p-8 sm:p-12 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-slate-900 border border-white shadow-xl">
            <div className="space-y-3 z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 text-[#0072B8] text-xs font-black uppercase tracking-widest bg-sky-50 px-7 py-3 rounded-full border border-sky-300 shadow-sm">
                <Award className="w-4 h-4 text-[#0ED3DD]" />
                <span>Premier Engineering Standard</span>
              </div>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 leading-tight">
                Ready to Build <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 bg-clip-text text-transparent">Production-Grade Applications?</span>
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                Master the full software development lifecycle with hands-on projects, 1 on 1 mentorship, and a job ready engineering portfolio.
              </p>
            </div>

            <a
              href="/contact"
              className="shrink-0 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 z-10 flex items-center gap-3 whitespace-nowrap cursor-pointer"
            >
              <span>Start Learning Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
