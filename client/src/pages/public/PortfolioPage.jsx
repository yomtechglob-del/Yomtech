import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  Briefcase, FolderGit2, CheckCircle2, ArrowRight, Phone, Star, Layers,
  Sparkles, Award, Globe, Building2, Landmark, GraduationCap, Cpu, Zap,
  ShieldCheck, Eye, Server, Code, FileText, ExternalLink, Filter, Clock,
  BarChart3, Check, ChevronRight, Video, HardDrive
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// Service Images for Portfolio Cards & Screenshots
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

// Partner Logos for Client Proof
import ssgiLogo from '../../assets/partners/ssgi.webp';
import insaLogo from '../../assets/partners/insa.webp';
import mintLogo from '../../assets/partners/mint.webp';
import cityadminLogo from '../../assets/partners/cityadmin.png';
import aastuLogo from '../../assets/partners/AASTU.jpg';
import astuLogo from '../../assets/partners/ASTU.png';
import fanaLogo from '../../assets/partners/fana televisions.png';
import bunnaLogo from '../../assets/partners/bunabank.png';
import hospitalityLogo from '../../assets/partners/Hospitality Sector.png';

/* ─── 8 FEATURED DETAILED CASE STUDIES & PORTFOLIO PROJECTS ─── */
const PROJECTS_CATALOGUE = [
  {
    id: 'yomnex-erp-system',
    title: 'Custom Enterprise ERP System (Yomnex)',
    category: 'Enterprise ERP',
    client: 'Government Institutions & Commercial Enterprises',
    industry: 'Public Sector & Corporate',
    projectType: '100% Custom ERP Architecture',
    logo: yomnexLogo,
    img: erpImg,
    badge: 'FLAGSHIP ERP',
    accent: 'cyan',
    challenge: 'Organizations faced fragmented legacy software, manual paperwork across finance and procurement, lack of central reporting, and high operational delays.',
    solution: 'Designed and engineered Yomnex ERP completely from scratch. Integrated Finance, HRM, Procurement, Inventory, Gate Management, and Self-Service Portals into one secure system.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
    features: [
      'Centralized Financial Accounting & Ledger',
      'Automated Human Resource Management (HRM)',
      'Supply Chain & Procurement Self-Service',
      'Gate Access & Asset Tracking Controls',
      'Real-Time Executive Analytics Dashboards'
    ],
    results: [
      '80% reduction in approval processing time',
      '100% data auditability & security compliance',
      'Zero monthly per-user licensing fees'
    ]
  },
  {
    id: 'municipal-trade-bureau',
    title: 'Municipal Digital Transformation & Citizen Portal',
    category: 'E-Government',
    client: 'Addis Ababa City Administration Trade Bureau',
    industry: 'Public Sector / E-Government',
    projectType: 'E-Gov Platform & Archiving',
    logo: cityadminLogo,
    img: cloudImg,
    badge: 'PUBLIC SECTOR',
    accent: 'emerald',
    challenge: 'Overcrowded physical service centers, slow paper-based commercial licensing, document loss, and lack of real-time verification for business permits.',
    solution: 'Engineered an end-to-end digital transformation portal enabling online trade licensing, automated document archiving, digital verification, and citizen workflow tracking.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Microservices', 'Docker', 'Nginx'],
    features: [
      'Online Commercial License Application Portal',
      'Automated Institutional Document Archiving',
      'QR-Verified Digital License Issuance',
      'Citizen SMS/Email Workflow Notifications',
      'Secure Multi-Department Approval Queues'
    ],
    results: [
      'Processed 100K+ commercial licenses digitally',
      'Reduced citizen waiting time from weeks to hours',
      'Enhanced municipal tax compliance transparency'
    ]
  },
  {
    id: 'ai-surveillance-monitoring',
    title: 'AI-Integrated Surveillance & Monitoring Zones',
    category: 'AI & Security',
    client: 'Information Network Security Administration (INSA) / Security Zones',
    industry: 'Cybersecurity & Defense',
    projectType: 'AI Vision & Smart CCTV',
    logo: insaLogo,
    img: securityImg,
    badge: 'AI DEFENSE',
    accent: 'violet',
    challenge: 'Traditional CCTV monitoring relied on human observation across hundreds of camera feeds, leading to missed security threats and slow emergency responses.',
    solution: 'Implemented AI-powered computer vision models integrated with high-definition surveillance camera networks. Features automated object detection, perimeter alerts, and zone monitoring.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'AI Vision', 'RTSP Streaming', 'C++'],
    features: [
      'AI Object & Motion Anomaly Detection',
      'Perimeter Breach Automated Warning Zones',
      'Real-Time High-Definition Video Stream Processing',
      'Secure Data Center Storage & Encryption',
      'Centralized Incident Command Dashboard'
    ],
    results: [
      'Sub-second automated threat alert trigger',
      '24/7 autonomous perimeter coverage',
      'Zero security breach incidents reported'
    ]
  },
  {
    id: 'wabiskills-digital-academy',
    title: 'WabiSkills EdTech Bootcamp & Mentorship Platform',
    category: 'EdTech',
    client: 'WabiSkills Academy & Academic Partners (AASTU, ASTU)',
    industry: 'Education & Technology Training',
    projectType: 'Digital Learning Platform',
    logo: wabiSkillsLogo,
    img: educationImg,
    badge: 'LIVE PLATFORM',
    accent: 'amber',
    challenge: 'Traditional university CS curricula lacked practical, industry-ready software engineering projects, resulting in a gap between graduates and corporate hiring needs.',
    solution: 'Built WabiSkills platform, a comprehensive digital learning ecosystem providing hands-on software development bootcamps, automated coding assessments, and live mentor sessions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'WebSockets', 'Tailwind'],
    features: [
      'Interactive Video & Curriculum Modules',
      'Automated Code Submission & Assessment Engine',
      'Live Mentor Scheduling & Q&A Forums',
      'Digital Certificate Issuance & Verification',
      'Corporate Hiring Partner Talent Pool'
    ],
    results: [
      '2,000+ tech graduates trained & certified',
      '92% employment rate within 6 months',
      'Partnerships with top 5 African universities'
    ]
  },
  {
    id: 'wabijob-recruitment-ecosystem',
    title: 'WabiJob Developer Recruitment Platform',
    category: 'HR-Tech',
    client: 'Enterprise Clients & Regional Tech Startups',
    industry: 'Talent & HR Technology',
    projectType: 'Recruitment & Job Matching',
    logo: wabiJobsLogo,
    img: customImg,
    badge: 'TALENT NETWORK',
    accent: 'sky',
    challenge: 'Enterprise companies struggled to find verified, high-performing African software developers, while skilled graduates lacked direct access to international projects.',
    solution: 'Engineered WabiJob talent platform, matching vetted software engineers, UI/UX designers, and data analysts with enterprise opportunities through skill-matching algorithms.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'ElasticSearch', 'Tailwind'],
    features: [
      'Developer Skill Matrix & Verified Portfolio Pages',
      'Automated AI Job Match Recommendation Engine',
      'Direct Employer-Candidate Messaging & Interviews',
      'Skill Assessment Badging & Verification',
      'Contract & Staff Augmentation Management'
    ],
    results: [
      'Over 500+ direct developer placements',
      '48-hour average candidate shortlist time',
      'Vetted network of 5,000+ tech candidates'
    ]
  },
  {
    id: 'hospitality-hotel-erp',
    title: 'Integrated Hotel & Hospitality ERP Suite',
    category: 'Commercial ERP',
    client: '10+ Premier Hotels & Resort Chains',
    industry: 'Hospitality & Services',
    projectType: 'Hospitality Management ERP',
    logo: hospitalityLogo,
    img: erpImg,
    badge: '10+ HOTELS',
    accent: 'indigo',
    challenge: 'Hotel properties suffered from disconnected room booking, restaurant Point-of-Sale (POS), inventory leakage, and delayed financial reconciliation.',
    solution: 'Delivered an integrated hospitality ERP system unifying room reservation engines, front-desk check-in, restaurant POS billing, stock inventory, and accounting into one dashboard.',
    technologies: ['React', 'Express.js', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Front-Desk Reservation & Guest Check-In Engine',
      'Restaurant & Bar Point-of-Sale (POS) Integration',
      'Housekeeping & Room Status Tracker',
      'Food & Beverage Inventory Control',
      'Consolidated Hotel Financial Reporting'
    ],
    results: [
      'Deployed across 10+ premier hotels & resorts',
      'Eliminated stock leakage by 95%',
      'Accelerated guest check-in time to under 2 mins'
    ]
  },
  {
    id: 'tech-documentaries-media',
    title: 'Tech Documentaries & Innovation Media Production',
    category: 'Media Production',
    client: 'Fana Media Corporation S.C, Balageru TV & Addis AI',
    industry: 'Media & Innovation Storytelling',
    projectType: 'Documentary & Media Platform',
    logo: fanaLogo,
    img: documentaryImg,
    badge: 'MEDIA & TV',
    accent: 'rose',
    challenge: 'Limited public awareness of homegrown African technology achievements, scientific research, and digital transformation initiatives.',
    solution: 'Produced professional high-definition technology documentaries and digital media content showcasing Ethiopian AI, space science, software engineering, and startup innovators.',
    technologies: ['Full 4K Cinema Production', 'Digital Broadcast Engine', 'Streaming Media Portal'],
    features: [
      'In-Depth National AI & Space Science Documentaries',
      'Television & Digital Streaming Broadcast Distribution',
      'Innovation Leader Interviews & Storytelling',
      'Educational Tech Awareness Campaign Content',
      'Multi-Platform Video Archive'
    ],
    results: [
      'Broadcasted to millions of television viewers',
      'Featured space science (SSGI) & AI (EAII) breakthroughs',
      'Boosted youth STEM career enrollment'
    ]
  },
  {
    id: 'bunna-bank-system-integration',
    title: 'Enterprise Banking Core System Integration & Security',
    category: 'Financial IT',
    client: 'Bunna Bank S.C',
    industry: 'Banking & Financial Sector',
    projectType: 'Enterprise Banking Infrastructure',
    logo: bunnaLogo,
    img: cybersecurityImg,
    badge: 'BANKING GRADE',
    accent: 'teal',
    challenge: 'Requirements for zero-downtime, sub-50ms API performance, and high-security compliance for banking middleware and inter-system communications.',
    solution: 'Engineered high-concurrency enterprise system integration layer, middleware API endpoints, and cybersecurity hardening compliant with banking regulatory standards.',
    technologies: ['Java', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'TLS Encryption'],
    features: [
      'High-Concurrency Banking Middleware API Layer',
      'End-to-End Encrypted Data Transmission',
      'Vulnerability Audits & Security Hardening',
      'Sub-50ms Microservice Execution Time',
      '24/7 Redundant Failover Architecture'
    ],
    results: [
      'Sub-50ms API latency under peak transaction load',
      '100% compliance with banking security standards',
      'Zero system outage during implementation'
    ]
  }
];

const CATEGORIES = ['All', 'Enterprise ERP', 'E-Government', 'AI & Security', 'EdTech', 'HR-Tech', 'Commercial ERP', 'Media Production', 'Financial IT'];

const accentMap = {
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    gradient: 'from-[#0284C7] to-[#0ED3DD]' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', gradient: 'from-emerald-600 to-teal-500' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  gradient: 'from-violet-600 to-purple-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   gradient: 'from-amber-600 to-orange-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     gradient: 'from-sky-600 to-blue-500' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  gradient: 'from-indigo-600 to-blue-500' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    gradient: 'from-rose-600 to-pink-500' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    gradient: 'from-teal-600 to-emerald-500' },
};

export const PortfolioPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_CATALOGUE
    : PROJECTS_CATALOGUE.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          HERO SECTION (Matching AboutPage, HomePage & SolutionsPage System)
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
              <FolderGit2 size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                KEY PROJECTS &amp; DETAILED CASE STUDIES
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Our Project Catalogue &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Engineering Impact
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Explore Yomtech Global’s track record of successfully delivered software solutions, custom ERP systems, AI security zones, municipal e-government platforms, EdTech academies, and corporate enterprise integrations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Start Your Project</span>
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
                    <h3 className="text-lg font-black text-white">25+ Deployed Systems</h3>
                    <p className="text-xs text-cyan-200">100% In-House Software Engineering</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Every project is built from scratch on real client needs, delivering zero-downtime performance, scalability, and long-term digital sovereignty.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          CATEGORY FILTER TABS BAR
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white sticky top-16 z-40 py-3.5 border-b border-cyan-400/30 shadow-lg backdrop-blur-md bg-slate-900/95">
        <div className="max-w-[90rem] mx-auto px-4 overflow-x-auto flex items-center gap-2.5 scrollbar-none">
          <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest whitespace-nowrap mr-2 flex items-center gap-1.5">
            <Filter size={13} />
            <span>FILTER CATALOGUE:</span>
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white border-transparent shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white/80 border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PROJECT CATALOGUE & DETAILED CASE STUDY CARDS
      ════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-full">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>PROJECT CATALOGUE</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Featured Case Studies &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                System Implementations
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Select any project below to inspect the client challenge, Yomtech engineering solution, technology stack, implementation details, and measured results.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const a = accentMap[project.accent];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  {/* Top Metadata Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md border border-slate-200 flex items-center justify-center shrink-0">
                          <img src={project.logo} alt={project.title} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                            {project.category}
                          </span>
                          <h3 className="text-xl font-extrabold text-slate-900 font-display tracking-tight leading-snug mt-1 group-hover:text-[#0284C7] transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shrink-0 hidden sm:block">
                        {project.badge}
                      </span>
                    </div>

                    {/* Client & Industry Row */}
                    <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-700 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold uppercase text-[10px]">Client / Partner:</span>
                        <span className="font-extrabold text-slate-900">{project.client}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                        <span className="text-slate-400 font-bold uppercase text-[10px]">Industry Sector:</span>
                        <span className={`font-mono ${a.text}`}>{project.industry}</span>
                      </div>
                    </div>

                    {/* Challenge & Solution Brief */}
                    <div className="space-y-3 pt-1">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">The Business Challenge:</span>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#0284C7] block">Yomtech Engineering Solution:</span>
                        <p className="text-xs text-slate-700 font-bold leading-relaxed mt-0.5">{project.solution}</p>
                      </div>
                    </div>

                    {/* Technologies Used Pills */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Technologies &amp; Architecture:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-mono font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results & Action Footer */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">Measured Results &amp; Impact:</span>
                      <ul className="space-y-1">
                        {project.results.map((res) => (
                          <li key={res} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className={`w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r ${a.gradient} text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02]`}
                    >
                      <span>Inspect Detailed Case Study</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PROJECT MODAL FOR DETAILED CASE STUDY VIEW
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 border-2 border-cyan-300 shadow-2xl my-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                  {activeProjectModal.category}
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">Case Study #{activeProjectModal.id}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {activeProjectModal.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#0284C7]">Client: {activeProjectModal.client}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <span className="font-extrabold text-slate-900 block uppercase tracking-wider text-[10px]">The Challenge:</span>
                  <p className="text-slate-600 font-medium leading-relaxed">{activeProjectModal.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2 text-xs">
                  <span className="font-extrabold text-[#0284C7] block uppercase tracking-wider text-[10px]">The Solution:</span>
                  <p className="text-slate-700 font-semibold leading-relaxed">{activeProjectModal.solution}</p>
                </div>
              </div>

              {/* Implementation Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Implementation Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProjectModal.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                      <CheckCircle2 size={15} className="text-[#0284C7] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveProjectModal(null);
                    navigate('/contact');
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Build Similar System</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ════════════════════════════════════════════════════
          FINAL CALL TO ACTION
      ════════════════════════════════════════════════════ */}
      <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center space-y-8">
          <div className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto">
            <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Have a System to <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Engineer?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Let’s collaborate to build your custom software system, enterprise ERP, or digital transformation platform from scratch.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Start Project Discussion</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/solutions')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:bg-cyan-50 transition-all duration-300 flex items-center gap-3"
                >
                  <Layers size={18} className="text-[#0ED3DD]" />
                  <span>Explore Solutions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
