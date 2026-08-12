import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Terminal,
  Code2,
  Users2,
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
  Star
} from 'lucide-react';

export const LearningJourney = () => {
  const [viewMode, setViewMode] = useState('SPOTLIGHT'); // 'SPOTLIGHT' | 'GRID'
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [expandedGridCard, setExpandedGridCard] = useState(null);

  const stages = [
    {
      num: '01',
      key: 'DISCOVER',
      title: 'Discover Potential',
      subtitle: 'Career Mapping & Core Engineering Fundamentals',
      desc: 'Explore software engineering specializations, technology radar trends, version control workflows, and algorithmic problem-solving mindsets.',
      icon: Compass,
      gradient: 'from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2]',
      brandColor: '#0284C7',
      badgeBg: 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white',
      pillBorder: 'border-[#0284C7]/40 bg-sky-50 text-[#0284C7]',
      milestoneCode: 'MILESTONE CODE 01',
      highlights: [
        'Career path exploration (Full-Stack, AI, Mobile)',
        'Git & GitHub collaboration & workflow standards',
        'Command line mastery & developer environment setup',
        'Algorithmic problem-solving mindsets & logic design'
      ],
      deliverable: 'Configured Dev Environment & Engineering Roadmap',
      techPills: ['Git & GitHub', 'VS Code', 'CLI Mastery', 'System Architecture'],
      duration: 'Weeks 1 - 2',
      terminalCmd: 'yomtech --init-stage 01 --track discover'
    },
    {
      num: '02',
      key: 'LEARN',
      title: 'Structured Learning',
      subtitle: 'Deep Concepts & Production Architecture Patterns',
      desc: 'Master production-grade frontend & backend concepts, data structures, state management architecture, and RESTful API design principles.',
      icon: BookOpen,
      gradient: 'from-[#0284C7] via-[#1DA1F2] to-indigo-600',
      brandColor: '#1DA1F2',
      badgeBg: 'bg-gradient-to-r from-[#0284C7] to-indigo-600 text-white',
      pillBorder: 'border-sky-300 bg-sky-50 text-sky-900',
      milestoneCode: 'MILESTONE CODE 02',
      highlights: [
        'Modern component architecture & state management',
        'RESTful API design & async data pipelines',
        'Relational & NoSQL database modeling',
        'Clean code principles & design patterns'
      ],
      deliverable: 'Full Stack Architecture Blueprint & Technical Spec',
      techPills: ['React / Next.js', 'Node.js', 'PostgreSQL', 'System Design'],
      duration: 'Weeks 3 - 6',
      terminalCmd: 'yomtech --compile-architecture --pattern clean'
    },
    {
      num: '03',
      key: 'PRACTICE',
      title: 'Hands-On Labs',
      subtitle: 'Interactive Drills & Live Code Workshops',
      desc: 'Apply knowledge through guided coding exercises, real-time code challenges, peer pairing, and interactive lab sessions.',
      icon: Terminal,
      gradient: 'from-[#0ED3DD] via-teal-500 to-emerald-500',
      brandColor: '#0ED3DD',
      badgeBg: 'bg-gradient-to-r from-[#0ED3DD] to-emerald-500 text-white',
      pillBorder: 'border-teal-300 bg-teal-50 text-teal-900',
      milestoneCode: 'MILESTONE CODE 03',
      highlights: [
        'Interactive coding lab challenges & algorithms',
        'Pair programming & live refactoring drills',
        'Unit & integration testing suites (TDD)',
        'Debugging performance bottlenecks & memory'
      ],
      deliverable: '10+ Verified Lab Submissions & Suite Tests',
      techPills: ['TypeScript', 'Jest / Vitest', 'Docker Labs', 'Live Pair Code'],
      duration: 'Weeks 7 - 9',
      terminalCmd: 'yomtech --run-labs --coverage 100%'
    },
    {
      num: '04',
      key: 'BUILD',
      title: 'Real-World Projects',
      subtitle: 'Production Applications & Cloud Microservices',
      desc: 'Engineer end-to-end web applications, secure backend microservices, responsive user interfaces, and automated cloud deployments.',
      icon: Code2,
      gradient: 'from-[#0284C7] via-cyan-500 to-[#1DA1F2]',
      brandColor: '#0284C7',
      badgeBg: 'bg-gradient-to-r from-[#0284C7] to-cyan-600 text-white',
      pillBorder: 'border-cyan-300 bg-cyan-50 text-cyan-900',
      milestoneCode: 'MILESTONE CODE 04',
      highlights: [
        'Full-stack web application development',
        'OAuth authentication & role-based access control',
        'CI/CD pipeline automation & cloud hosting',
        'Database indexing & API performance optimization'
      ],
      deliverable: 'Deployed Production Full-Stack Application',
      techPills: ['Next.js App', 'Express / Nest API', 'MongoDB / Postgres', 'Vercel / AWS'],
      duration: 'Weeks 10 - 14',
      terminalCmd: 'yomtech --deploy production --env cloud'
    },
    {
      num: '05',
      key: 'MENTOR',
      title: 'Expert Guidance',
      subtitle: '1-on-1 Senior Engineering Review & Code Polish',
      desc: 'Refine your software craftsmanship with direct 1-on-1 code reviews and technical feedback from experienced lead engineers.',
      icon: Users2,
      gradient: 'from-indigo-600 via-[#0284C7] to-[#0ED3DD]',
      brandColor: '#6366F1',
      badgeBg: 'bg-gradient-to-r from-indigo-600 to-[#0ED3DD] text-white',
      pillBorder: 'border-indigo-300 bg-indigo-50 text-indigo-900',
      milestoneCode: 'MILESTONE CODE 05',
      highlights: [
        'Line-by-line senior engineering code reviews',
        'Architectural refactoring recommendations',
        'Security & performance vulnerability audits',
        'Industry best-practice alignment'
      ],
      deliverable: 'Production Code Review Certification',
      techPills: ['Code Audit', 'Performance Tuning', 'Clean Architecture', 'Security'],
      duration: 'Weeks 15 - 16',
      terminalCmd: 'yomtech --code-review --senior-mentor'
    },
    {
      num: '06',
      key: 'GROW',
      title: 'Career Acceleration',
      subtitle: 'Production Portfolio Polish & Market Readiness',
      desc: 'Build a standout production portfolio, master technical interviews, showcase open-source contributions, and scale your trajectory.',
      icon: TrendingUp,
      gradient: 'from-[#0284C7] via-[#0ED3DD] to-emerald-500',
      brandColor: '#10B981',
      badgeBg: 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-emerald-500 text-white',
      pillBorder: 'border-emerald-300 bg-emerald-50 text-emerald-900',
      milestoneCode: 'MILESTONE CODE 06',
      highlights: [
        'High-impact engineering portfolio creation',
        'System design & live coding interview preparation',
        'Resume & LinkedIn technical profile optimization',
        'Direct hiring partner introductions'
      ],
      deliverable: 'Job-Ready Engineering Portfolio & Career Launch Pack',
      techPills: ['Portfolio Site', 'Interview Prep', 'Open Source', 'Career Launch'],
      duration: 'Ongoing Autonomy',
      terminalCmd: 'yomtech --accelerate-career --launch-portfolio'
    }
  ];

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
    <section className="py-28 sm:py-36 w-full bg-[#EAF6FF] relative text-slate-900 overflow-hidden border-b border-sky-200/80">
      {/* Ambient Soft Glow Halos */}
      <div className="absolute top-1/6 left-1/4 w-[750px] h-[750px] bg-gradient-to-br from-sky-200/50 via-cyan-100/40 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/4 w-[650px] h-[650px] bg-gradient-to-tl from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background Matrix Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-sky-100 border border-sky-300 text-[#0072B8] text-xs font-black tracking-widest uppercase shadow-sm">
            <div className="w-5.5 h-5.5 rounded-full bg-sky-200 border border-sky-400 flex items-center justify-center shrink-0">
              <Sparkles size={13} className="text-[#0072B8] animate-spin" />
            </div>
            <span className="whitespace-nowrap">PREMIER EDUCATIONAL PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
            Your Journey From <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Learning to Building</span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            A progressive engineering roadmap designed to turn technical ambition into enterprise-ready software craftsmanship.
          </p>

          {/* Premier Mode Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-sky-200/90 shadow-lg shadow-sky-500/10 inline-flex items-center gap-1">
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

        {/* Premier Horizontal Stage Stepper Rail (01 -> 06) */}
        <div className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-xl shadow-sky-500/10">
          <div className="w-full bg-white/95 backdrop-blur-2xl rounded-[2.1rem] p-3 sm:p-4 border border-sky-200/80">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 relative">
              {stages.map((stg, idx) => {
                const isSelected = activeStageIdx === idx && viewMode === 'SPOTLIGHT';
                const Icon = stg.icon;

                return (
                  <button
                    key={stg.key}
                    onClick={() => {
                      setActiveStageIdx(idx);
                      setViewMode('SPOTLIGHT');
                    }}
                    className={`relative flex flex-col items-center justify-center px-6 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer group ${
                      isSelected
                        ? `bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white shadow-xl shadow-cyan-500/30 scale-105 ring-2 ring-sky-300`
                        : 'bg-sky-50/80 hover:bg-white text-slate-800 border border-sky-200/80 hover:border-[#0284C7]/50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black opacity-90 ${isSelected ? 'text-white' : 'text-[#0284C7]'}`}>
                        {stg.num}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#0284C7]'}`} />
                    </div>
                    <span className={`text-xs font-black tracking-widest uppercase mt-1 whitespace-nowrap ${isSelected ? 'text-white' : 'text-slate-900'}`}>
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
          {viewMode === 'SPOTLIGHT' ? (
            /* ========================================================================= */
            /* MODE A: PREMIER INTERACTIVE SPOTLIGHT SHOWCASE (Cockpit Layout)           */
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
              <div className="lg:col-span-7 p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl shadow-sky-500/15">
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

                    {/* Code File Tabs */}
                    <div className="flex items-center gap-2 text-[11px] font-mono relative z-10 border-b border-sky-200/80 pb-2">
                      <span className="px-3.5 py-1 rounded-t-lg bg-sky-100 text-[#0072B8] border-t border-x border-sky-300 font-black flex items-center gap-1.5">
                        <span className="text-amber-500">⚡</span> terminal.sh
                      </span>
                      <span className="px-3.5 py-1 text-slate-500 hover:text-slate-900 font-bold transition-colors cursor-pointer">
                        stage_config.json
                      </span>
                      <span className="px-3.5 py-1 text-slate-500 hover:text-slate-900 font-bold transition-colors cursor-pointer">
                        env_status.log
                      </span>
                    </div>

                    {/* Console Code Content Body — Light Sky Glass */}
                    <div className="space-y-3 text-xs bg-gradient-to-br from-sky-50/90 via-cyan-50/50 to-blue-50/70 p-5 rounded-2xl border border-sky-200/90 font-mono text-slate-900 shadow-xs relative z-10">
                      
                      {/* Command prompt line */}
                      <div className="flex items-center gap-2 text-[#0072B8] font-black">
                        <span className="text-[#0284C7]">➜</span>
                        <span className="text-[#0072B8]">~/academy</span>
                        <span className="text-slate-900 font-bold">$ {activeStage.terminalCmd}</span>
                      </div>

                      {/* Output Stream with Line Numbers */}
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
            /* MODE B: PREMIER ROADMAP GRID (3x2 3D Gradient Stroke Cards)               */
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
        <div className="p-[2px] rounded-[3rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2.9rem] p-8 sm:p-12 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-slate-900 border border-white shadow-xl">
            <div className="space-y-3 z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 text-[#0072B8] text-xs font-black uppercase tracking-widest bg-sky-50 px-7 py-3 rounded-full border border-sky-300 shadow-sm">
                <Award className="w-4 h-4 text-[#0ED3DD]" />
                <span>Premier Engineering Standard</span>
              </div>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 leading-tight">
                Ready to Build <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Production-Grade Applications?</span>
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                Master the full software development lifecycle with hands-on projects, 1-on-1 mentorship, and a job-ready engineering portfolio.
              </p>
            </div>

            <a
              href="/contact"
              className="shrink-0 px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 z-10 flex items-center gap-3 whitespace-nowrap cursor-pointer"
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
