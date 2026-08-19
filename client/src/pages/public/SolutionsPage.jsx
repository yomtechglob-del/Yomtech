import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  Landmark, Cpu, GraduationCap, Building2, Zap, Users, BookOpen, Code,
  ArrowRight, CheckCircle2, ShieldCheck, Globe, Eye, Server, FileText,
  Lock, BarChart3, Rocket, Phone, Star, Layers, Sparkles, Award,
  Check, ChevronRight, Video, Database, HardDrive, Network
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// Service Images
import erpImg from '../../assets/services/erp.png';
import customImg from '../../assets/services/custom.png';
import cybersecurityImg from '../../assets/services/cybersecurity.png';
import cloudImg from '../../assets/services/cloud.png';
import webImg from '../../assets/services/web.png';
import mobileImg from '../../assets/services/mobile.png';
import educationImg from '../../assets/services/education.png';
import crmImg from '../../assets/services/crm.png';
import securityImg from '../../assets/services/security.png';
import documentaryImg from '../../assets/services/documentary.png';

/* ─── 8 SOLUTIONS DEFINITION (SECTION 6.5) ─── */
const SOLUTIONS_LIST = [
  {
    id: 'digital-transformation',
    number: '01',
    title: 'Digital Transformation',
    subtitle: 'Public Sector Modernization & Citizen Services',
    icon: Landmark,
    accent: 'cyan',
    img: cloudImg,
    tag: 'E-GOVERNMENT',
    description: 'Yomtech Global delivers end-to-end digital transformation solutions for public sector institutions, enabling efficient, transparent, and citizen-focused service delivery. We design secure and scalable systems that modernize government operations and streamline institutional workflows.',
    features: [
      'Citizen Engagement & Service Platforms',
      'Workflow & Document Automation',
      'Digital Records & Archiving Systems',
      'Integrated Government & Municipal Portals',
      'Public Service Transparency & Security'
    ],
    metric: '100% Secure E-Gov Architecture'
  },
  {
    id: 'business-automation',
    number: '02',
    title: 'Business Automation',
    subtitle: 'Streamlined Processes & Workflow Optimization',
    icon: Zap,
    accent: 'emerald',
    img: erpImg,
    tag: 'WORKFLOW AUTOMATION',
    description: 'We help organizations eliminate manual inefficiencies, automate core operational workflows, and implement data-driven decision-making platforms tailored completely to client operational requirements.',
    features: [
      'Business Process Automation (BPA)',
      'Supply Chain & Procurement Workflows',
      'Gate Management & Access System Controls',
      'Asset Management & Tracking Solutions',
      'Sales & Customer Relationship (CRM) Automation'
    ],
    metric: '75% Reduction in Operational Delay'
  },
  {
    id: 'education-technology',
    number: '03',
    title: 'Education Technology',
    subtitle: 'Digital Learning & Academic Infrastructure',
    icon: GraduationCap,
    accent: 'amber',
    img: educationImg,
    tag: 'EDTECH & LMS',
    description: 'Empowering universities, institutes, and corporate academies with cutting-edge Learning Management Systems (LMS), online coaching tools, and digital skills platforms designed for high scalability.',
    features: [
      'Custom Learning Management Systems (LMS)',
      'WabiSkills Digital Bootcamp Platform',
      'Online Course Portals & Assessment Tools',
      'Academic Digital Infrastructure & Records',
      'University & College Management Platforms'
    ],
    metric: '2,000+ Learners Empowered'
  },
  {
    id: 'enterprise-management',
    number: '04',
    title: 'Enterprise Management',
    subtitle: 'Custom Yomnex ERP & Integrated Modules',
    icon: Building2,
    accent: 'indigo',
    img: erpImg,
    tag: 'YOMNEX ERP',
    description: 'Yomtech Global develops fully customized ERP systems designed completely from scratch to meet the unique operational needs of organizations. Centralize finance, HRM, inventory, supply chain, and reporting into one unified platform.',
    features: [
      'Finance & Accounting Modules',
      'Human Resource Management (HRM)',
      'Warehouse (WMS) & Inventory Control',
      'Procurement & Self-Service Portals',
      'Custom Analytics & Real-Time Reporting'
    ],
    metric: '100% Scratch-Built Systems'
  },
  {
    id: 'ai-and-automation',
    number: '05',
    title: 'AI and Automation',
    subtitle: 'Intelligent Surveillance, Analytics & Monitoring',
    icon: Cpu,
    accent: 'violet',
    img: securityImg,
    tag: 'AI & SURVEILLANCE',
    description: 'Leverage artificial intelligence, automated threat detection, and smart monitoring zones. We integrate advanced AI surveillance camera networks and predictive analytics to safeguard critical infrastructure.',
    features: [
      'AI-Integrated Surveillance & Monitoring (Zones)',
      'Smart CCTV & Facial/Object Analytics',
      'Predictive Threat Detection Systems',
      'Data Center Maintenance & Hardening',
      'Automated Alerting & Incident Response'
    ],
    metric: 'Sub-second AI Detection Time'
  },
  {
    id: 'digital-workforce',
    number: '06',
    title: 'Digital Workforce',
    subtitle: 'Talent Engineering & Recruitment Ecosystem',
    icon: Users,
    accent: 'sky',
    img: customImg,
    tag: 'WABJOB PLATFORM',
    description: 'Bridging the tech skills gap across Africa. We combine hands-on technical bootcamps with WabiJob recruitment platform to connect trained software engineers, data analysts, and IT professionals with global enterprises.',
    features: [
      'WabiJob Recruitment & Talent Ecosystem',
      'Developer Capacity Building & Bootcamps',
      'Industry-Ready Tech Skills Certification',
      'Professional Coaching & Technical Mentorship',
      'Enterprise Staff Augmentation & Hiring'
    ],
    metric: 'Direct Job Match Ecosystem'
  },
  {
    id: 'research-technology',
    number: '07',
    title: 'Research Technology',
    subtitle: 'Tech Documentaries & Specialized Research Systems',
    icon: BookOpen,
    accent: 'rose',
    img: documentaryImg,
    tag: 'TECH MEDIA & R&D',
    description: 'Collaborating with national research bodies (Space Science & Geospatial Institute SSGI, Ethiopian Artificial Intelligence Institute EAII) and producing tech documentaries to promote innovation, digital literacy, and scientific research.',
    features: [
      'Technology Documentaries & Media Production',
      'Space Science & Geospatial Data Integration',
      'AI Research & Data Processing Platforms',
      'Data Center Infrastructure Maintenance',
      'Innovation Storytelling & Media Awareness'
    ],
    metric: 'National Research Alliances'
  },
  {
    id: 'custom-software-solutions',
    number: '08',
    title: 'Custom Software Solutions',
    subtitle: 'Tailored Web, Mobile & Cloud Engineering',
    icon: Code,
    accent: 'teal',
    img: webImg,
    tag: 'FULLSTACK CODE',
    description: 'From high-performance responsive web platforms to native Android & iOS mobile applications, we build secure, scalable, and resilient software solutions completely tailored to client specifications.',
    features: [
      'Custom Web Application Development',
      'Mobile Application Development (Android / iOS)',
      'API Development & Enterprise System Integration',
      'Cloud Migration & Server DevOps Hosting',
      'Database Architecture & Ongoing Maintenance'
    ],
    metric: '99.9% Uptime Guarantee'
  }
];

const accentMap = {
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    gradient: 'from-[#0284C7] to-[#0ED3DD]' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', gradient: 'from-emerald-600 to-teal-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   gradient: 'from-amber-600 to-orange-500' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  gradient: 'from-indigo-600 to-blue-500' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  gradient: 'from-violet-600 to-purple-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     gradient: 'from-sky-600 to-blue-500' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    gradient: 'from-rose-600 to-pink-500' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    gradient: 'from-teal-600 to-emerald-500' },
};

export const SolutionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO SECTION (Matching AboutPage & HomePage System)
      ════════════════════════════════════════════════════ */}
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
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <Sparkles size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                SOLUTIONS ARCHITECTURE &amp; DIGITAL ECOSYSTEMS
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Digital Transformation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Solutions Suite
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Yomtech Global delivers end-to-end digital solutions for public sector institutions, enterprises, academic organizations, and development partners — equipping clients with cutting-edge technology, intelligent automation, and sustainable digital impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Request Solution Demo</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-md">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-cyan-200 font-bold uppercase tracking-wider">Solution Desk</p>
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
                    <h3 className="text-lg font-black text-white">8 Full Solutions</h3>
                    <p className="text-xs text-cyan-200">Public &amp; Private Sector Engine</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  We combine software engineering, ERP platforms, artificial intelligence, capacity building, and tech media into one integrated impact network.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          QUICK NAVIGATION BAR FOR THE 8 SOLUTIONS
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white sticky top-16 z-40 py-3.5 border-b border-cyan-400/30 shadow-lg backdrop-blur-md bg-slate-900/95">
        <div className="max-w-[90rem] mx-auto px-4 overflow-x-auto flex items-center gap-3 scrollbar-none">
          <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest whitespace-nowrap mr-2 flex items-center gap-1.5">
            <Layers size={13} />
            <span>8 SOLUTIONS:</span>
          </span>
          {SOLUTIONS_LIST.map((sol) => (
            <a
              key={sol.id}
              href={`#${sol.id}`}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-white text-xs font-bold whitespace-nowrap transition-all border border-white/15"
            >
              {sol.title}
            </a>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          8 DETAILED SOLUTION SECTIONS
      ════════════════════════════════════════════════════ */}
      <div className="space-y-0">
        {SOLUTIONS_LIST.map((sol, index) => {
          const a = accentMap[sol.accent];
          const IconComp = sol.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={sol.id}
              id={sol.id}
              className={`py-20 lg:py-28 relative overflow-hidden font-sans border-b border-slate-200/80 ${
                isEven ? 'bg-white' : 'bg-[#F4F9FF]'
              }`}
            >
              <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>

                  {/* Left Column: Solution Detail Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black font-display text-slate-300">{sol.number}</span>
                      <span className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                        {sol.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                        {sol.title}
                      </h2>
                      <p className={`text-base font-extrabold ${a.text}`}>{sol.subtitle}</p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Key Capabilities &amp; Deliverables:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sol.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-slate-800">
                            <CheckCircle2 size={16} className={a.text} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => navigate('/contact')}
                        className={`px-7 py-3.5 rounded-full bg-gradient-to-r ${a.gradient} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2.5`}
                      >
                        <span>Deploy Solution</span>
                        <ArrowRight size={15} />
                      </button>
                      <span className="text-xs font-bold text-slate-500 font-mono">Metric: {sol.metric}</span>
                    </div>
                  </motion.div>

                  {/* Right Column: Solution Graphic Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}
                  >
                    <div
                      style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                      className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-xl space-y-6 text-center flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${a.gradient} p-2 flex items-center justify-center text-white shadow-xl mx-auto`}>
                          <IconComp size={36} />
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 font-display">{sol.title}</h3>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                          Custom engineered by Yomtech Global for government institutions, enterprises, and research organizations.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-inner space-y-2 text-left text-xs">
                        <div className="font-extrabold text-slate-900 flex items-center justify-between">
                          <span>Architectural Standard</span>
                          <span className={`font-mono ${a.text}`}>Enterprise</span>
                        </div>
                        <div className="text-slate-600 font-medium">100% Custom code · Zero-downtime deployment · Dedicated SLA support</div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>


      {/* ════════════════════════════════════════════════════
          FINAL CALL TO ACTION (Matching Site System)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center space-y-8">
          <div className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto">
            <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Ready to Deploy a <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Custom Solution?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Consult with our engineering team to design, build, and deploy custom digital transformation solutions tailored specifically for your organization.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:bg-cyan-50 transition-all duration-300 flex items-center gap-3"
                >
                  <Layers size={18} className="text-[#0ED3DD]" />
                  <span>Explore Capabilities</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SolutionsPage;
