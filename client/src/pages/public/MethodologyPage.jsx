import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, GitBranch, CheckCircle2, ArrowRight, Phone, ShieldCheck, Layers,
  Sparkles, Award, Globe, Building2, Zap, Users, Code, FileText, Lock,
  Server, RefreshCw, Sliders, Activity, Target, Clock, Terminal, ChevronRight,
  Briefcase, GraduationCap
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import consultingTeamImg from '../../assets/about/consulting_team.jpg';

/* ─── 6-STEP AGILE DEVELOPMENT METHODOLOGY WITH PRIMARY BRAND COLORS & WATERMARK LOGOS ─── */
const METHODOLOGY_STEPS = [
  {
    step: '01',
    phase: 'Step 01',
    stage: 'Discovery',
    title: 'Requirement Analysis & Planning',
    subtitle: 'Scope Definition & Strategic Alignment',
    icon: FileText,
    hex: '#0EA5E9',
    gradient: 'from-[#0EA5E9] via-[#0284C7] to-[#0369A1]',
    ringBorder: 'border-[#0EA5E9]',
    ringBg: 'bg-[#0EA5E9]',
    ringText: 'text-[#0EA5E9]',
    badgeBg: 'bg-[#0EA5E9]',
    themeText: 'text-[#0EA5E9]',
    desc: 'Deep-dive discovery to understand client operational workflows, define precise system scope, establish technical parameters, and set clear project milestones.',
    deliverables: ['Detailed SRS Document', 'Project Roadmap', 'Risk Mitigation Strategy', 'SLA Framework'],
  },
  {
    step: '02',
    phase: 'Step 02',
    stage: 'Architecture',
    title: 'System Design & Architecture',
    subtitle: 'Scalable & Secure System Blueprints',
    icon: Sliders,
    hex: '#F59E0B',
    gradient: 'from-[#F59E0B] via-[#D97706] to-[#B45309]',
    ringBorder: 'border-[#F59E0B]',
    ringBg: 'bg-[#F59E0B]',
    ringText: 'text-[#F59E0B]',
    badgeBg: 'bg-[#F59E0B]',
    themeText: 'text-[#D97706]',
    desc: 'Engineering high-concurrency database schemas, microservice API contracts, security protocols, and responsive UI/UX prototypes tailored to client needs.',
    deliverables: ['Database Schema Specs', 'API Contract Blueprints', 'UX/UI Wireframe Prototypes', 'Security Architecture'],
  },
  {
    step: '03',
    phase: 'Step 03',
    stage: 'Development',
    title: 'Agile Development Process',
    subtitle: 'Iterative Sprints & Transparent Codebase',
    icon: Code,
    hex: '#A855F7',
    gradient: 'from-[#A855F7] via-[#9333EA] to-[#7E22CE]',
    ringBorder: 'border-[#A855F7]',
    ringBg: 'bg-[#A855F7]',
    ringText: 'text-[#A855F7]',
    badgeBg: 'bg-[#A855F7]',
    themeText: 'text-[#9333EA]',
    desc: 'Iterative 2-week development sprints with continuous integration, automated builds, weekly client reviews, and complete code transparency.',
    deliverables: ['Bi-Weekly Demo Builds', 'Clean Modular Code', 'Sprint Progress Dashboards', 'Version-Controlled Repo'],
  },
  {
    step: '04',
    phase: 'Step 04',
    stage: 'Quality Assurance',
    title: 'Testing & Quality Assurance',
    subtitle: 'Performance, Penetration & Load Validation',
    icon: ShieldCheck,
    hex: '#10B981',
    gradient: 'from-[#10B981] via-[#059669] to-[#047857]',
    ringBorder: 'border-[#10B981]',
    ringBg: 'bg-[#10B981]',
    ringText: 'text-[#10B981]',
    badgeBg: 'bg-[#10B981]',
    themeText: 'text-[#059669]',
    desc: 'Comprehensive QA including automated unit tests, sub-50ms latency load testing, vulnerability penetration audits, and user acceptance testing (UAT).',
    deliverables: ['Automated Test Suite', 'Security Audit Certificate', 'Load Performance Report', 'UAT Sign-Off'],
  },
  {
    step: '05',
    phase: 'Step 05',
    stage: 'Deployment',
    title: 'Deployment & Implementation',
    subtitle: 'Zero-Downtime Rollout & Operational Onboarding',
    icon: Server,
    hex: '#06B6D4',
    gradient: 'from-[#06B6D4] via-[#0891B2] to-[#0E7490]',
    ringBorder: 'border-[#06B6D4]',
    ringBg: 'bg-[#06B6D4]',
    ringText: 'text-[#06B6D4]',
    badgeBg: 'bg-[#06B6D4]',
    themeText: 'text-[#0891B2]',
    desc: 'Containerized deployment via Docker/Kubernetes on cloud or on-premise data centers, accompanied by staff training and seamless system migration.',
    deliverables: ['Containerized Production Build', 'Staff Onboarding Workshops', 'Zero-Downtime Migration', 'System Admin Manuals'],
  },
  {
    step: '06',
    phase: 'Step 06',
    stage: 'Maintenance',
    title: 'Maintenance & Continuous Support',
    subtitle: 'Ongoing Optimization & System Evolution',
    icon: RefreshCw,
    hex: '#1DA1F2',
    gradient: 'from-[#1DA1F2] via-[#0284C7] to-[#0369A1]',
    ringBorder: 'border-[#1DA1F2]',
    ringBg: 'bg-[#1DA1F2]',
    ringText: 'text-[#1DA1F2]',
    badgeBg: 'bg-[#1DA1F2]',
    themeText: 'text-[#0284C7]',
    desc: 'Dedicated 24/7 technical support, continuous system optimization, security patch updates, and ongoing feature expansion throughout the product lifecycle.',
    deliverables: ['24/7 Helpdesk Support', 'SLA Response Guarantee', 'Quarterly System Audits', 'Feature Upgrade Patches'],
  },
];

/* ─── WHY CHOOSE US / COMPETITIVE ADVANTAGES ─── */
const WHY_CHOOSE_US = [
  {
    title: 'End-to-End Expertise',
    desc: 'Full lifecycle delivery from initial architectural design to deployment, security hardening, and continuous 24/7 technical support.',
    icon: Layers,
    accent: 'cyan'
  },
  {
    title: '100% Custom-Built Systems',
    desc: 'Every system is engineered from scratch based on exact client workflows — zero reliance on rigid third-party templates or monthly licensing fees.',
    icon: Code,
    accent: 'emerald'
  },
  {
    title: 'Government & Enterprise Experience',
    desc: 'Proven track record delivering mission-critical platforms for federal ministries, security administrations, banks, and public institutions.',
    icon: Building2,
    accent: 'violet'
  },
  {
    title: 'Integrated Digital Ecosystem',
    desc: 'Unique synergy combining software engineering, ERP platforms, WabiSkills talent academy, WabiJob recruitment, and tech media production.',
    icon: Globe,
    accent: 'amber'
  },
  {
    title: 'AI & Next-Gen Innovation',
    desc: 'Deep integration of artificial intelligence, automated surveillance vision, predictive analytics, and cloud microservices.',
    icon: Cpu,
    accent: 'sky'
  },
  {
    title: 'Long-Term Partnership Mindset',
    desc: 'We focus on sustainable collaboration, system evolution, and dedicated SLA maintenance rather than one-time delivery.',
    icon: ShieldCheck,
    accent: 'emerald'
  }
];

/* ─── CORE ORGANIZATIONAL TEAMS ─── */
const CORE_TEAMS = [
  { title: 'Project Delivery Team', desc: 'Custom software development, enterprise ERP systems, and government digital transformation.', icon: Briefcase },
  { title: 'Product & Innovation Team', desc: 'Engineering flagship platforms including WabiSkills, WabiJob, WabiX, Mari, and Yomnex ERP.', icon: Cpu },
  { title: 'Operations & Technical Support', desc: 'Infrastructure, cloud deployment, cybersecurity defense, and 24/7 system maintenance.', icon: Server },
  { title: 'Training & Capacity Building', desc: 'Professional bootcamp training programs, developer mentorship, and skills development.', icon: GraduationCap },
  { title: 'Marketing, Sales & Partnerships', desc: 'Business development, client relations, and strategic institutional partnership management.', icon: Users }
];

const accentMap = {
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    gradient: 'from-[#0284C7] to-[#0ED3DD]' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', gradient: 'from-emerald-600 to-teal-500' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  gradient: 'from-violet-600 to-purple-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   gradient: 'from-amber-600 to-orange-500' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  gradient: 'from-indigo-600 to-blue-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     gradient: 'from-sky-600 to-blue-500' },
};

export const MethodologyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* HERO SECTION */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        
        {/* Flowing Background Image Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        {/* Ambient Glow Flares */}
        <div className="absolute -top-40 left-[-10%] w-[800px] h-[600px] bg-gradient-to-r from-[#48cae4]/35 via-[#0077b6]/25 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-[#90e0ef]/20 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-bold shadow-lg">
              <GitBranch size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-wider text-[11px]">
                Agile Methodology &amp; Competitive Advantages
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                How We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Digital Excellence
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              At Yomtech Global, we follow a structured, agile-driven development methodology designed to deliver high-quality, scalable, and secure digital solutions. We combine industry best practices with practical execution to transform ideas into fully functional systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Partner With Us</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
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

          {/* Right Visual Orbit Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[380px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/35 via-sky-300/30 to-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-md aspect-square p-4 z-10 flex flex-col justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center">
                    <img src={logoEmblem} alt="YomTech" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">6-Step Agile Lifecycle</h3>
                    <p className="text-xs text-cyan-200">100% In-House Capability</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Requirement Analysis → System Design → Agile Development → QA Testing → Deployment → 24/7 Continuous Support.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 6-STEP AGILE DEVELOPMENT METHODOLOGY */}
      <section className="py-20 lg:py-28 bg-[#F4F8FC] relative overflow-hidden font-sans border-b border-slate-200/80">
        
        {/* Precision Blueprint Dot Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F6FC] via-[#F4F8FC] to-[#F0F6FC]" />
          
          {/* Cyan Dot Matrix Grid */}
          <div 
            className="absolute inset-0 opacity-[0.45]" 
            style={{ 
              backgroundImage: 'radial-gradient(#0EA5E9 1.5px, transparent 1.5px)', 
              backgroundSize: '24px 24px',
            }}
          />
          
          <div className="absolute top-[10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-cyan-400/10 blur-[140px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-400/10 blur-[150px]" />
        </div>

        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          {/* Left-Aligned Header */}
          <div className="text-left space-y-4 max-w-full relative">
            <div className="flex items-center gap-0 w-full relative z-10">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-xs font-bold shrink-0 backdrop-blur-md">
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
                <span>Development Lifecycle</span>
                <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              </div>
              <div className="h-[2.5px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              6-Step Agile <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600 font-display">Development Process</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              From requirement analysis to continuous maintenance, our 6-step framework guarantees quality, transparency, and timely delivery.
            </p>
          </div>

          {/* 6-STEP ALTERNATING BUSINESS INFOGRAPHIC LAYOUT */}
          <div className="relative max-w-[90rem] mx-auto py-8">
            
            {/* Central Connected Zig-Zag Line (Desktop Only) */}
            <div className="hidden lg:block absolute inset-y-12 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-400 via-emerald-400 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.4)] pointer-events-none z-0" />

            <div className="space-y-12 relative z-10">
              {METHODOLOGY_STEPS.map((step, idx) => {
                const IconComp = step.icon;
                const isEven = idx % 2 === 1;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Pure Crisp White Step Pill Card Plate */}
                    <div className="w-full lg:w-[calc(50%-2.5rem)] group">
                      <div className="bg-white rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between space-y-4 hover:-translate-y-1.5 border border-slate-100 overflow-hidden">
                        
                        {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                        <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                          <img src={logoEmblem} alt="" className="w-28 sm:w-36 h-28 sm:h-36 object-contain" />
                        </div>

                        {/* Header Row: Double Ring Step Badge + Arrow Pointer Tab */}
                        <div className={`flex items-center justify-between gap-4 relative z-10 ${isEven ? 'flex-row-reverse' : ''}`}>
                          
                          {/* Circular Double-Ring Badge + Arrow Pointer Tab */}
                          <div className={`flex items-center gap-2 ${isEven ? 'flex-row-reverse' : ''}`}>
                            <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-4 ${step.ringBorder} shadow-lg flex items-center justify-center shrink-0`}>
                              <div className={`w-full h-full rounded-full ${step.badgeBg} flex flex-col items-center justify-center text-white font-mono font-black text-xs shadow-inner`}>
                                <span className="text-[8px] tracking-tighter opacity-90">Step</span>
                                <span className="text-sm font-extrabold leading-none">{step.step}</span>
                              </div>
                            </div>

                            {/* Arrow Pointer Tab */}
                            <div
                              className={`px-4 py-1.5 bg-gradient-to-r ${step.gradient} text-white font-mono font-bold text-xs shadow-md ${
                                isEven ? 'rounded-l-2xl rounded-r-sm' : 'rounded-r-2xl rounded-l-sm'
                              }`}
                            >
                              <span>{step.stage}</span>
                            </div>
                          </div>

                          {/* Icon Badge */}
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                            <IconComp size={22} strokeWidth={2.2} />
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="space-y-2 text-left relative z-10">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                            {step.title}
                          </h3>
                          <h4 className={`text-xs font-semibold ${step.themeText}`}>
                            {step.subtitle}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        {/* Deliverables Badges */}
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 relative z-10">
                          {step.deliverables.map((del) => (
                            <span key={del} className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 text-[11px] font-semibold border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                              <CheckCircle2 size={12} className={step.themeText} />
                              <span>{del}</span>
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Central Connected Node Dot */}
                    <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-slate-200 shadow-md items-center justify-center z-10 shrink-0">
                      <div className={`w-5 h-5 rounded-full ${step.badgeBg} animate-ping`} />
                    </div>

                    {/* Empty Space for Grid Balance */}
                    <div className="hidden lg:block w-[calc(50%-2.5rem)]" />

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-bold shrink-0 backdrop-blur-md">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>Competitive Advantages</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Yomtech Global</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              We go beyond software development — we build complete digital ecosystems that combine technology engineering, talent development, and media storytelling to drive real transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90rem] mx-auto">
            {WHY_CHOOSE_US.map((item) => {
              const a = accentMap[item.accent];
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all space-y-4 group relative overflow-hidden"
                >
                  {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                  <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                    <img src={logoEmblem} alt="" className="w-24 sm:w-28 h-24 sm:h-28 object-contain" />
                  </div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${a.gradient} p-3 text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
                    <IconComp size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display tracking-tight relative z-10">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* CORE TEAMS & ORGANIZATIONAL STRUCTURE */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-bold shrink-0 backdrop-blur-md">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>Our Teams &amp; Structure</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Structured for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Operational Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Our teams are organized into core functional units working collaboratively from project design to deployment and long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90rem] mx-auto">
            {CORE_TEAMS.map((team) => {
              const IconComp = team.icon;
              return (
                <div
                  key={team.title}
                  className="bg-white rounded-3xl p-7 border-2 border-slate-200 shadow-md hover:shadow-lg hover:border-cyan-300 transition-all space-y-4 group relative overflow-hidden"
                >
                  {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                  <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                    <img src={logoEmblem} alt="" className="w-24 sm:w-28 h-24 sm:h-28 object-contain" />
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform relative z-10">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display tracking-tight relative z-10">{team.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed relative z-10">{team.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* FINAL CALL TO ACTION */}
      <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center space-y-8">
          <div className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto">
            <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
              
              {/* Translucent YomTech Brand Logo Watermark Background */}
              <div className="absolute -right-6 -bottom-6 opacity-[0.20] pointer-events-none z-0">
                <img src={logoEmblem} alt="" className="w-80 sm:w-96 h-80 sm:h-96 object-contain" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight relative z-10">
                Ready to Start Your <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Digital Journey?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto relative z-10">
                Work with Yomtech Global to engineer high-quality, scalable, and secure digital solutions built specifically for your goals.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-4 relative z-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-cyan-50 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                  <Layers size={18} className="text-[#0ED3DD]" />
                  <span>View Case Studies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MethodologyPage;
