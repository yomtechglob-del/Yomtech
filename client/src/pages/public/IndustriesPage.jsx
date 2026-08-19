import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  Landmark, GraduationCap, Heart, Building2, Rocket, BookOpen, Globe,
  Briefcase, ShieldCheck, ArrowRight, CheckCircle2, Phone, Star, Layers,
  Sparkles, Award, Check, ChevronRight, Video, Cpu, Server, FileText,
  Users, HardDrive, Network, Building, Factory, BarChart3
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

// Partner Logos for Real-World Proof
import ssgiLogo from '../../assets/partners/ssgi.webp';
import insaLogo from '../../assets/partners/insa.webp';
import mintLogo from '../../assets/partners/mint.webp';
import eaiiLogo from '../../assets/partners/eaii.jpg';
import cityadminLogo from '../../assets/partners/cityadmin.png';
import aastuLogo from '../../assets/partners/AASTU.jpg';
import astuLogo from '../../assets/partners/ASTU.png';
import arsiLogo from '../../assets/partners/Arsi.png';
import kotebeLogo from '../../assets/partners/kotebe.png';
import selectLogo from '../../assets/partners/Select business.webp';
import fanaLogo from '../../assets/partners/fana televisions.png';
import bunnaLogo from '../../assets/partners/bunabank.png';
import stempowerLogo from '../../assets/partners/Global STEM Education Partner.png';
import ieNetworksLogo from '../../assets/partners/Enterprise Network Infrastructure.png';
import hospitalityLogo from '../../assets/partners/Hospitality Sector.png';
import novaLogo from '../../assets/partners/Nova Printing.webp';

/* ─── 9 INDUSTRIES DEFINITION (SECTION 6.6) ─── */
const INDUSTRIES_LIST = [
  {
    id: 'government',
    number: '01',
    title: 'Government & Public Sector',
    subtitle: 'Federal Ministries, Security Administrations & Municipal Trade Bureaus',
    icon: Landmark,
    accent: 'cyan',
    img: cloudImg,
    tag: 'PUBLIC SECTOR',
    description: 'Yomtech Global delivers end-to-end e-government platforms, public service digitalization, citizen engagement solutions, and secure infrastructure. Proven experience working with Ministry of Innovation & Technology (MInT), Information Network Security Administration (INSA), and Addis Ababa Trade Bureau.',
    features: [
      'Citizen Service Platforms & Digital Portals',
      'Labor & Employment Management Systems',
      'Municipal Workflow & Document Automation',
      'Data Center Maintenance & IT Security Defense',
      'AI-Integrated Surveillance Monitoring (Zones)'
    ],
    partners: ['MInT', 'INSA', 'City Admin', 'SSGI'],
    metric: 'National Government SLAs'
  },
  {
    id: 'education-and-universities',
    number: '02',
    title: 'Education & Universities',
    subtitle: 'Higher Education Institutes & Academic Digital Portals',
    icon: GraduationCap,
    accent: 'emerald',
    img: educationImg,
    tag: 'ACADEMIC INSTITUTIONS',
    description: 'Partnering with leading African universities including Addis Ababa Science & Technology University (AASTU), Adama Science & Technology University (ASTU), Arsi University, and Kotebe University of Education to deploy custom Learning Management Systems (LMS), campus platforms, and WabiSkills bootcamp training.',
    features: [
      'Custom Learning Management Systems (LMS)',
      'WabiSkills Digital Academy Bootcamps',
      'University Student Portals & Assessment Systems',
      'Academic Record Archiving & Verification',
      'Faculty Mentorship & Tech Capacity Building'
    ],
    partners: ['AASTU', 'ASTU', 'Arsi University', 'Kotebe University', 'Select College'],
    metric: '2,000+ University Alumni'
  },
  {
    id: 'ngos',
    number: '03',
    title: 'NGOs & Development Organizations',
    subtitle: 'Impact-Driven Digital Systems & Capacity Programs',
    icon: Heart,
    accent: 'amber',
    img: crmImg,
    tag: 'DEVELOPMENT & NON-PROFIT',
    description: 'Empowering international development agencies, non-governmental organizations, and STEM education foundations (such as STEMpower LLC) with custom program management software, digital skills training initiatives, and community impact measurement tools.',
    features: [
      'STEM Education & Youth Capacity Bootcamps',
      'Grant & Project Management Workflows',
      'Community Skills Training Platforms',
      'Impact Data Analytics & Reporting Dashboards',
      'Secure Multi-Regional Field Data Collection'
    ],
    partners: ['STEMpower LLC', 'WabiSkills Initiative'],
    metric: 'Pan-African Social Impact'
  },
  {
    id: 'private-sector',
    number: '04',
    title: 'Private Sector & Commercial Sector',
    subtitle: 'Hospitality, Publishing, Media & Service Enterprises',
    icon: Building2,
    accent: 'indigo',
    img: erpImg,
    tag: 'COMMERCIAL ENTERPRISES',
    description: 'Delivering tailored operational software for commercial businesses across Africa — including 10+ premier hotels & resort chains, Nova Printing & Advertising, and digital media houses like Fana Media Corporation SC and Balageru TV Network.',
    features: [
      'Hotel & Hospitality Management Systems',
      'Publishing, Printing & Media Workflows',
      'Technology Documentary & Media Production',
      'Sales Force Automation (SFA) & CRM',
      'Supply Chain & Procurement Management'
    ],
    partners: ['10+ Hotels', 'Nova Printing', 'Fana Media', 'Balageru TV'],
    metric: '10+ Premier Hotel Clients'
  },
  {
    id: 'startups',
    number: '05',
    title: 'Startups & Tech Innovators',
    subtitle: 'Fullstack Engineering, MVP Build & Cloud Scaling',
    icon: Rocket,
    accent: 'violet',
    img: customImg,
    tag: 'TECH INNOVATORS',
    description: 'Accelerating ambitious technology startups from concept to market launch. We build high-performance mobile apps (Android/iOS), responsive web platforms, and scalable cloud architectures while connecting startups to vetted developer talent via WabiJob.',
    features: [
      'Rapid MVP Design & Fullstack Development',
      'Native & Cross-Platform Mobile Applications',
      'WabiJob Developer Recruitment Pipeline',
      'Cloud Architecture & Microservice APIs',
      'UX/UI Product Prototyping & Iteration'
    ],
    metric: 'World-Class MVP Delivery'
  },
  {
    id: 'research-institutions',
    number: '06',
    title: 'Research Institutions',
    subtitle: 'Space Science, AI Research & Scientific Data Systems',
    icon: BookOpen,
    accent: 'rose',
    img: documentaryImg,
    tag: 'R&D & SCIENTIFIC DATA',
    description: 'Collaborating directly with specialized research powerhouses including Space Science & Geospatial Institute (SSGI) and Ethiopian Artificial Intelligence Institute (EAII) to support scientific data processing, AI research modeling, and high-performance server maintenance.',
    features: [
      'Geospatial & Satellite Data Processing Tools',
      'AI Research & Machine Learning Platforms',
      'High-Performance Server & Data Center Defense',
      'Scientific Documentaries & Research Media',
      'Institutional Knowledge Repositories'
    ],
    partners: ['SSGI', 'EAII', 'Addis AI'],
    metric: 'Advanced AI & Spatial Tech'
  },
  {
    id: 'international-organizations',
    number: '07',
    title: 'International Organizations',
    subtitle: 'Cross-Border Platforms & Regional Tech Ecosystems',
    icon: Globe,
    accent: 'sky',
    img: cloudImg,
    tag: 'PAN-AFRICAN & GLOBAL',
    description: 'Building multi-country digital platforms that connect talent, enterprise systems, and educational networks across Africa and beyond. Our vision is to drive digital sovereignty and economic empowerment on a Pan-African scale.',
    features: [
      'Pan-African Talent Engineering Networks',
      'Multi-Language E-Government Platforms',
      'Cross-Border Digital Records & Credentials',
      'Cloud DevOps & Distributed Hosting',
      'International Security & Regulatory Compliance'
    ],
    partners: ['Global Alliances', 'Regional Partners'],
    metric: 'Pan-African Vision 2030'
  },
  {
    id: 'smes',
    number: '08',
    title: 'Small & Medium Enterprises (SMEs)',
    subtitle: 'Accessible ERP Modules, WMS & Digital Growth',
    icon: Factory,
    accent: 'teal',
    img: erpImg,
    tag: 'SME DIGITALIZATION',
    description: 'Empowering growing small and medium-sized businesses with modular Yomnex ERP systems, Warehouse Management (WMS), custom e-commerce web applications, and affordable cloud hosting designed to boost productivity without high overhead.',
    features: [
      'Modular Yomnex ERP Systems for Growing SMEs',
      'Warehouse (WMS) & Inventory Control',
      'Custom Web & Mobile Storefronts',
      'Financial Tracking & Billing Systems',
      'Ongoing Technical Support & Maintenance'
    ],
    partners: ['Regional SMEs', 'Local Retailers'],
    metric: 'Modular & Cost-Effective'
  },
  {
    id: 'enterprises',
    number: '09',
    title: 'Large Corporations & Financial Enterprises',
    subtitle: 'Banks, Financial Sector & Large Infrastructure',
    icon: Briefcase,
    accent: 'indigo',
    img: cybersecurityImg,
    tag: 'FINANCIAL & CORPORATE',
    description: 'Engineering mission-critical enterprise systems for banking and financial sector clients like Bunna Bank and enterprise network providers like IE Networks. Built for sub-50ms performance, high concurrency, and zero-downtime fault tolerance.',
    features: [
      'Banking & Financial System Security Audits',
      'Full Custom Yomnex ERP System Implementation',
      'Enterprise Network Infrastructure Integration',
      'High-Concurrency Sub-50ms API Architectures',
      '24/7 Priority SLA Technical Support'
    ],
    partners: ['Bunna Bank', 'IE Networks', 'Corporate Clients'],
    metric: 'Sub-50ms API Latency'
  }
];

const accentMap = {
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    gradient: 'from-[#0284C7] to-[#0ED3DD]' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', gradient: 'from-emerald-600 to-teal-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   gradient: 'from-amber-600 to-orange-500' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  gradient: 'from-indigo-600 to-blue-500' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  gradient: 'from-violet-600 to-purple-500' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    gradient: 'from-rose-600 to-pink-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     gradient: 'from-sky-600 to-blue-500' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    gradient: 'from-teal-600 to-emerald-500' },
};

export const IndustriesPage = () => {
  const navigate = useNavigate();

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
              <Building2 size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                INDUSTRIES &amp; SECTORIAL IMPACT
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Critical Sectors
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Yomtech Global delivers specialized digital solutions across 9 key industry domains — from public sector ministries and top research institutions to universities, banking corporations, hotels, non-profits, and startups.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Discuss Your Industry Need</span>
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
                    <h3 className="text-lg font-black text-white">9 Target Sectors</h3>
                    <p className="text-xs text-cyan-200">Public, Enterprise &amp; Academia</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Proven experience transforming public institutions (MInT, INSA, SSGI), universities (AASTU, ASTU), media networks, banks, and hospitality leaders.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          QUICK NAVIGATION BAR FOR THE 9 INDUSTRIES
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white sticky top-16 z-40 py-3.5 border-b border-cyan-400/30 shadow-lg backdrop-blur-md bg-slate-900/95">
        <div className="max-w-[90rem] mx-auto px-4 overflow-x-auto flex items-center gap-3 scrollbar-none">
          <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest whitespace-nowrap mr-2 flex items-center gap-1.5">
            <Building2 size={13} />
            <span>9 INDUSTRIES:</span>
          </span>
          {INDUSTRIES_LIST.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-white text-xs font-bold whitespace-nowrap transition-all border border-white/15"
            >
              {ind.title}
            </a>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          9 DETAILED INDUSTRY SECTIONS
      ════════════════════════════════════════════════════ */}
      <div className="space-y-0">
        {INDUSTRIES_LIST.map((ind, index) => {
          const a = accentMap[ind.accent];
          const IconComp = ind.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={ind.id}
              id={ind.id}
              className={`py-20 lg:py-28 relative overflow-hidden font-sans border-b border-slate-200/80 ${
                isEven ? 'bg-white' : 'bg-[#F4F9FF]'
              }`}
            >
              <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>

                  {/* Left Column: Industry Detail Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black font-display text-slate-300">{ind.number}</span>
                      <span className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                        {ind.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                        {ind.title}
                      </h2>
                      <p className={`text-base font-extrabold ${a.text}`}>{ind.subtitle}</p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Specialized Industry Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ind.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-slate-800">
                            <CheckCircle2 size={16} className={a.text} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Partners / Clients Pill Row */}
                    {ind.partners && ind.partners.length > 0 && (
                      <div className="pt-2 flex items-center gap-2 flex-wrap text-xs">
                        <span className="font-extrabold uppercase text-slate-400 text-[10px] tracking-wider">Notable Sector Clients:</span>
                        {ind.partners.map((p) => (
                          <span key={p} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold text-[11px]">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => navigate('/contact')}
                        className={`px-7 py-3.5 rounded-full bg-gradient-to-r ${a.gradient} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2.5`}
                      >
                        <span>Engage Sector Experts</span>
                        <ArrowRight size={15} />
                      </button>
                      <span className="text-xs font-bold text-slate-500 font-mono">Standard: {ind.metric}</span>
                    </div>
                  </motion.div>

                  {/* Right Column: Industry Graphic Card */}
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
                        <h3 className="text-2xl font-extrabold text-slate-900 font-display">{ind.title}</h3>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                          Tailored software architectures and talent ecosystems engineered specifically for {ind.title}.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-inner space-y-2 text-left text-xs">
                        <div className="font-extrabold text-slate-900 flex items-center justify-between">
                          <span>Sector Alignment</span>
                          <span className={`font-mono ${a.text}`}>Certified</span>
                        </div>
                        <div className="text-slate-600 font-medium">100% In-house delivery · Scalable infrastructure · Long-term support</div>
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
          FINAL CALL TO ACTION
      ════════════════════════════════════════════════════ */}
      <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center space-y-8">
          <div className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto">
            <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Transform Your <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Sector Today</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Connect with Yomtech Global to implement enterprise software, digital transformation platforms, or specialized technical talent solutions for your industry.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Contact Our Sector Team</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/solutions')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:bg-cyan-50 transition-all duration-300 flex items-center gap-3"
                >
                  <Layers size={18} className="text-[#0ED3DD]" />
                  <span>View Solutions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
