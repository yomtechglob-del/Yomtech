import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle2, Phone, Star, Quote, Mail,
  Building2, Globe, Cpu, Monitor, Layers, Award, ShieldCheck,
  TrendingUp, Briefcase, Handshake, Sparkles, Zap, Target,
  GraduationCap, Code, Server, Video, Eye, Lock, Users,
  MessageCircle, ArrowUp, Calendar, FileText, ChevronRight,
  Factory, Landmark, Heart, BookOpen, Newspaper, Clock,
  ExternalLink, BarChart3, Rocket, Share2, Play, Lightbulb
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import { AboutEcosystem } from '../../components/about/AboutEcosystem';
import { CenterEcosystemVideo } from '../../components/about/CenterEcosystemVideo';

// Service Images
import erpImg from '../../assets/services/erp.png';
import wmsImg from '../../assets/services/wms.png';
import sfaImg from '../../assets/services/sfa.png';
import customImg from '../../assets/services/custom.png';
import cybersecurityImg from '../../assets/services/cybersecurity.png';
import cloudImg from '../../assets/services/cloud.png';
import webImg from '../../assets/services/web.png';
import mobileImg from '../../assets/services/mobile.png';
import educationImg from '../../assets/services/education.png';
import crmImg from '../../assets/services/crm.png';
import documentaryImg from '../../assets/services/documentary.png';
import coachingImg from '../../assets/services/coaching.png';
import securityImg from '../../assets/services/security.png';

// Partner Logos
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
import balageruLogo from '../../assets/partners/Balageru TV.png';
import addisAiLogo from '../../assets/partners/addisai_logo.jpg';
import yonileLogo from '../../assets/partners/yonile.webp';
import bunnaLogo from '../../assets/partners/bunabank.png';
import stempowerLogo from '../../assets/partners/Global STEM Education Partner.png';
import ieNetworksLogo from '../../assets/partners/Enterprise Network Infrastructure.png';
import hospitalityLogo from '../../assets/partners/Hospitality Sector.png';
import novaLogo from '../../assets/partners/Nova Printing.webp';

/* ─── Animation Helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

/* ─── DATA PRESERVATION ─── */

const FEATURED_SERVICES = [
  {
    icon: Cpu, img: erpImg,
    title: 'ERP, CRM & WMS Solutions',
    desc: 'We design and implement enterprise-grade ERP, CRM, and WMS systems that streamline business operations, improve decision-making, and enhance customer engagement.',
    tag: 'ENTERPRISE', accent: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    badgeStyle: 'bg-cyan-50 text-[#0284C7] border-cyan-200'
  },
  {
    icon: Code, img: customImg,
    title: 'Custom Software & App Development',
    desc: 'From responsive web apps to high-performance mobile apps, we build tailored software solutions that meet your exact business needs and scale with your growth.',
    tag: 'FULLSTACK', accent: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    icon: ShieldCheck, img: cybersecurityImg,
    title: 'Cybersecurity & Surveillance',
    desc: 'Protect your digital assets with our IT security consulting, surveillance system integration, and cybersecurity training programs to keep your systems safe.',
    tag: 'SECURITY', accent: 'violet',
    gradient: 'from-purple-600 to-fuchsia-600',
    badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    icon: Globe, img: cloudImg,
    title: 'Cloud Services & Deployment',
    desc: 'We provide cloud migration, hosting, and deployment services that enable secure, scalable, and cost-effective business operations in the cloud.',
    tag: 'CLOUD', accent: 'sky',
    gradient: 'from-blue-600 to-indigo-600',
    badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    icon: Zap, img: erpImg,
    title: 'AI & Automation',
    desc: 'Leverage intelligent automation, AI-driven insights, and smart workflows to boost efficiency, productivity, and innovation in your organization.',
    tag: 'AI/ML', accent: 'indigo',
    gradient: 'from-indigo-500 to-purple-600',
    badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    icon: Monitor, img: customImg,
    title: 'UI/UX & Product Design',
    desc: 'We craft intuitive, user-friendly interfaces and digital experiences that empower businesses and delight customers across platforms.',
    tag: 'DESIGN', accent: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    icon: GraduationCap, img: educationImg,
    title: 'Tech Education & Coaching',
    desc: 'Through online courses, mentorship, and hands-on training, we equip learners and professionals with future-ready tech skills.',
    tag: 'ACADEMY', accent: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    icon: BarChart3, img: crmImg,
    title: 'Data Analytics & Insights',
    desc: 'Transform raw data into actionable business intelligence with advanced analytics, dashboards, and reporting tools.',
    tag: 'ANALYTICS', accent: 'cyan',
    gradient: 'from-teal-500 to-cyan-600',
    badgeStyle: 'bg-teal-50 text-teal-700 border-teal-200'
  }
];

const COMPANY_STATS = [
  { stat: '2015', label: 'Year Founded', badge: 'HERITAGE', subtitle: '10+ Years of Innovation', accent: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
  { stat: '25+', label: 'Solutions Deployed', badge: 'PROJECTS', subtitle: 'Enterprise Deployments', accent: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
  { stat: '2K+', label: 'Learners Empowered', badge: 'ACADEMY', subtitle: 'WabiSkills Alumni', accent: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { stat: '7+', label: 'Global Partnerships', badge: 'ALLIANCES', subtitle: 'Institutional Partners', accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { stat: '5+', label: 'Digital Platforms', badge: 'PRODUCTS', subtitle: 'Flagship Products', accent: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  { stat: '10+', label: 'Hotels & Enterprises', badge: 'CLIENTS', subtitle: 'Commercial Sector', accent: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
];

const ALL_PARTNERS = [
  { name: 'SSGI', fullName: 'Space Science & Geospatial Institute', logo: ssgiLogo, category: 'Government' },
  { name: 'INSA', fullName: 'Information Network Security Administration', logo: insaLogo, category: 'Government' },
  { name: 'MInT', fullName: 'Ministry of Innovation & Technology', logo: mintLogo, category: 'Government' },
  { name: 'EAII', fullName: 'Ethiopian AI Institute', logo: eaiiLogo, category: 'Government' },
  { name: 'City Admin', fullName: 'Addis Ababa City Trade Bureau', logo: cityadminLogo, category: 'Government' },
  { name: 'AASTU', fullName: 'Addis Ababa Science & Technology University', logo: aastuLogo, category: 'Academic' },
  { name: 'ASTU', fullName: 'Adama Science & Technology University', logo: astuLogo, category: 'Academic' },
  { name: 'Arsi Uni', fullName: 'Arsi University', logo: arsiLogo, category: 'Academic' },
  { name: 'Kotebe', fullName: 'Kotebe University of Education', logo: kotebeLogo, category: 'Academic' },
  { name: 'Select College', fullName: 'Select Business & Technology College', logo: selectLogo, category: 'Academic' },
  { name: 'Fana Media', fullName: 'Fana Media Corporation S.C', logo: fanaLogo, category: 'Media' },
  { name: 'Balageru TV', fullName: 'Balageru Television Network', logo: balageruLogo, category: 'Media' },
  { name: 'Addis AI', fullName: 'Addis AI Media & Research', logo: addisAiLogo, category: 'Media' },
  { name: 'Yonile', fullName: 'Yonile Digital Productions', logo: yonileLogo, category: 'Media' },
  { name: 'Bunna Bank', fullName: 'Bunna Bank S.C', logo: bunnaLogo, category: 'Enterprise' },
  { name: 'STEMpower', fullName: 'STEMpower LLC', logo: stempowerLogo, category: 'Enterprise' },
  { name: 'IE Networks', fullName: 'Enterprise Network Infrastructure', logo: ieNetworksLogo, category: 'Enterprise' },
  { name: 'Hospitality', fullName: '10+ Premier Hotels & Resorts', logo: hospitalityLogo, category: 'Enterprise' },
  { name: 'Nova Printing', fullName: 'Nova Printing & Advertising', logo: novaLogo, category: 'Enterprise' },
];

const TESTIMONIALS = [
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
  },
];

const CORE_VALUES = [
  { title: 'Intelligence', desc: 'We solve complex challenges through knowledge, strategy, and innovation.', accent: 'cyan' },
  { title: 'Creativity', desc: 'We approach problems with fresh ideas and innovative thinking.', accent: 'emerald' },
  { title: 'Innovation', desc: 'We embrace creativity, emerging technologies, and forward-thinking solutions.', accent: 'violet' },
  { title: 'Excellence', desc: 'We strive for quality and continuous improvement in everything we do.', accent: 'sky' },
  { title: 'Integrity', desc: 'We build trust through honesty, transparency, and accountability.', accent: 'amber' },
  { title: 'Client Success', desc: 'Our success is measured by the success of our clients and partners.', accent: 'rose' },
  { title: 'Continuous Learning', desc: 'We invest in growth, knowledge, and lifelong learning.', accent: 'indigo' },
];

const OFFICIAL_SERVICES_LIST = [
  { name: 'ERP Software Solution', desc: 'Enterprise resource planning for operational excellence', img: erpImg },
  { name: 'WMS Software Solution', desc: 'Warehouse management systems & inventory optimization', img: wmsImg },
  { name: 'SFA Software Solution', desc: 'Sales force automation & CRM tracking tools', img: sfaImg },
  { name: 'Online Tech Education', desc: 'WabiSkills digital academy & professional bootcamps', img: educationImg },
  { name: 'Tech Documentary', desc: 'Media production & technology innovation storytelling', img: documentaryImg },
  { name: 'Cybersecurity & IT Consulting', desc: 'Security audits, data center defense & IT advisory', img: cybersecurityImg },
  { name: 'Mobile App Development', desc: 'Native & cross-platform iOS & Android mobile applications', img: mobileImg },
  { name: 'Web App Development', desc: 'High-performance web applications & enterprise portals', img: webImg },
  { name: 'Build Custom Software', desc: '100% custom-tailored software engineered from scratch', img: customImg },
  { name: 'Tech Coaching & Mentorship', desc: 'Career coaching, technical mentorship & skill acceleration', img: coachingImg },
  { name: 'Cloud Service & Deployment', desc: 'Cloud migration, DevOps automation & infrastructure hosting', img: cloudImg },
  { name: 'Surveillance & Security', desc: 'AI-integrated CCTV, smart monitoring & security systems', img: securityImg },
];

const ECOSYSTEM_PILLARS = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'SOFTWARE & SYSTEMS',
    badge: 'ENGINEER',
    icon: Code,
    desc: 'Build scalable software systems, enterprise web applications, high-throughput microservices, and robust APIs.',
    details: ['Custom Enterprise Web Apps', 'High-Concurrency Microservices', 'RESTful API Contracts', 'Multi-Tenant Architecture'],
    metrics: [{ label: 'Performance', val: 'Sub-50ms' }, { label: 'Tech Stack', val: 'Node / React / Python' }],
    gradient: 'from-cyan-500 to-blue-600',
    badgeBg: 'bg-cyan-500 text-white'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'INFRASTRUCTURE & PLATFORMS',
    badge: 'CLOUD',
    icon: Server,
    desc: 'Design, deploy, and optimize modern digital infrastructure, cloud data centers, and enterprise storage platforms.',
    details: ['Docker & Kubernetes Rollout', 'Cloud Data Center Hosting', 'Sub-50ms Latency Caching', 'Database Sharding & Storage'],
    metrics: [{ label: 'Availability', val: '99.99% SLA' }, { label: 'Cluster Scale', val: 'Auto-Elastic' }],
    gradient: 'from-blue-600 to-indigo-600',
    badgeBg: 'bg-blue-600 text-white'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'SYSTEM PROTECTION',
    badge: 'SECURE',
    icon: ShieldCheck,
    desc: 'Build and defend resilient digital systems with end-to-end encryption, automated penetration audits, and AI security.',
    details: ['Penetration Testing Audits', 'TLS 1.3 & AES-256 Encryption', 'AI Surveillance Zones', 'Vulnerability Hardening'],
    metrics: [{ label: 'Standard', val: 'Zero-Trust' }, { label: 'Encryption', val: 'AES-256 Bit' }],
    gradient: 'from-purple-600 to-fuchsia-600',
    badgeBg: 'bg-purple-600 text-white'
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'TALENT & MENTORSHIP',
    badge: 'EDUCATE',
    icon: GraduationCap,
    desc: 'Develop practical technology skills through structured bootcamps, repository mentorship, and verified certifications.',
    details: ['2,000+ Certified Alumni', 'Practical Code Bootcamps', 'Industry Leader Mentorship', 'Verified Skill Badging'],
    metrics: [{ label: 'Graduates', val: '2,000+ Alumni' }, { label: 'Placement', val: '94% Hired' }],
    gradient: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-600 text-white'
  },
  {
    id: 'pillar-5',
    number: '05',
    title: 'PROFESSIONAL NETWORK',
    badge: 'CONNECT',
    icon: Users,
    desc: 'Connect top-tier engineers, enterprise clients, and vetted software portfolios through the automated WabiJobs platform.',
    details: ['48h Candidate Shortlisting', 'Direct Remote & Hybrid Placement', 'Vetted Code Portfolios', 'Contract & Staff Augmentation'],
    metrics: [{ label: 'Matching Speed', val: '< 48 Hours' }, { label: 'Network', val: 'Pan-African' }],
    gradient: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-500 text-white'
  }
];

const accentMap = {
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700' },
  sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' },
};


/* ════════════════════════════════════════════════════════════
   HOME PAGE COMPONENT
   ════════════════════════════════════════════════════════════ */
export const HomePage = () => {
  const navigate = useNavigate();
  const [activeEcosystemTab, setActiveEcosystemTab] = useState(0);
  const [partnerFilter, setPartnerFilter] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Partner Data matching About Us page
  const publicInstitutions = [
    { name: 'SSGI', fullName: 'Space Science & Geospatial Institute', logo: ssgiLogo, website: 'https://ssgi.gov.et/' },
    { name: 'INSA', fullName: 'Information Network Security Administration', logo: insaLogo, website: 'https://www.insa.gov.et/' },
    { name: 'MInT', fullName: 'Ministry of Innovation and Technology', logo: mintLogo, website: 'https://mint.gov.et/' },
    { name: 'EAII', fullName: 'Ethiopian Artificial Intelligence Institute', logo: eaiiLogo, website: 'https://eaii.gov.et/' },
    { name: 'City Admin', fullName: 'Addis Ababa City Trade Bureau', logo: cityadminLogo, website: 'https://addisababa.gov.et/' },
  ];

  const academicPartners = [
    { name: 'AASTU', fullName: 'Addis Ababa Science & Technology University', logo: aastuLogo, website: 'https://www.aastu.edu.et/' },
    { name: 'ASTU', fullName: 'Adama Science & Technology University', logo: astuLogo, website: 'https://www.astu.edu.et/' },
    { name: 'Arsi Uni', fullName: 'Arsi University', logo: arsiLogo, website: 'https://www.arsiun.edu.et/' },
    { name: 'Kotebe', fullName: 'Kotebe University of Education', logo: kotebeLogo, website: 'https://kue.edu.et/' },
    { name: 'Select College', fullName: 'Select Business & Technology College', logo: selectLogo, website: 'https://select.edu.et/' },
  ];

  const mediaPartners = [
    { name: 'Fana Media', fullName: 'Fana Media Corporation S.C', logo: fanaLogo, website: 'https://www.fanabc.com/' },
    { name: 'Balageru TV', fullName: 'Balageru Television Network', logo: balageruLogo, website: 'https://balagerutv.com/' },
    { name: 'Addis AI', fullName: 'Addis AI Media & Research', logo: addisAiLogo, website: 'https://eaii.gov.et/' },
    { name: 'Yonile Digitals', fullName: 'Yonile Digital Productions', logo: yonileLogo, website: 'https://www.facebook.com/yoniledigital/' },
  ];

  const enterpriseClients = [
    { name: 'Bunna Bank', category: 'Banking & Financial Sector', logo: bunnaLogo, website: 'https://bunnabanksc.com/' },
    { name: 'STEMpower LLC', category: 'Global STEM Education Partner', logo: stempowerLogo, website: 'https://www.stempower.org/' },
    { name: 'IE Networks', category: 'Enterprise Network Infrastructure', logo: ieNetworksLogo, website: 'https://www.ienetworks.co/' },
    { name: 'Hospitality Sector', category: '10+ Premier Hotels & Resorts', logo: hospitalityLogo, website: 'https://www.ethiopianhotelsassociation.org/' },
    { name: 'Nova Printing', category: 'Publishing & Industrial Advertising', logo: novaLogo, website: 'https://novaprintingethiopia.com/' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-x-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          SECTION 01 — EXISTING HERO (Preserved & Optimized)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <Sparkles size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                TECHNOLOGY · ENTERPRISE · INNOVATION · TALENT
              </span>
            </div>

            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                YOMTECH GLOBAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Connected Technology Ecosystem
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              At YomTech Global, we empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology — we build the future.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Explore Ecosystem Services</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-md"
              >
                <Calendar size={16} className="text-cyan-200" />
                <span>Book a Consultation</span>
              </button>

              <a
                href="tel:+251977666699"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-3.5 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-md">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-cyan-200 font-bold uppercase">Direct Desk</div>
                  <div className="text-xs font-black text-white">+251 (977) 666-699</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[380px]"
          >
            <div className="relative w-full max-w-md aspect-square p-4 z-10 flex flex-col justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center">
                    <img src={logoEmblem} alt="YomTech" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">YomTech Ecosystem</h3>
                    <p className="text-xs text-cyan-200">Parent Technology House</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-bold text-cyan-100">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20">⚡ Enterprise Software</div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20">🎓 WabiSkills Academy</div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20">💼 WabiJobs Network</div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/20">📊 Yomnex ERP Suite</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 02 — WHO WE ARE & CORE VALUES (Hexagonal Honeycomb Cluster)
      ════════════════════════════════════════════════════ */}
      <AboutEcosystem
        hideBadge={true}
        customHeading={
          <div className="space-y-6 mb-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <Building2 size={16} className="text-[#0284C7]" />
                <span>ARCHITECTING DIGITAL EXCELLENCE</span>
                <span className="text-[10px] text-[#0284C7] ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Who We Are &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  Our Ecosystem Philosophy
                </span>
              </h2>
            </div>
          </div>
        }
        customDescription="Yomtech Global was founded with a clear vision: to empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology — we help you create the future."
        showCeoQuote={true}
      />


      {/* ════════════════════════════════════════════════════
          SECTION 03 — NEW: THE YOMTECH GLOBAL ECOSYSTEM
          (Interactive Connected Node Nucleus Experience)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture Matching User Screenshot */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
          
          {/* Top Badge (Right Aligned Badge with Accent Line Spanning Full Length to the Left) */}
          <div className="space-y-6">
            <div className="flex items-center justify-end w-full">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7]" />
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>YOMTECH GLOBAL ECOSYSTEM</span>
                <Sparkles size={16} className="text-[#0284C7] ml-0.5" />
              </div>
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight text-slate-900">
                One Connected Ecosystem. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  Engineered for High Impact.
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                Yomtech Global unifies enterprise software engineering, cloud infrastructure, security, digital talent academy, and recruitment network into one seamless digital matrix.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Node Selectors (Pillars) */}
            <div className="lg:col-span-5 space-y-3.5">
              {ECOSYSTEM_PILLARS.map((pillar, idx) => {
                const isActive = activeEcosystemTab === idx;
                const IconComponent = pillar.icon;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveEcosystemTab(idx)}
                    className={`w-full p-5 sm:p-6 rounded-3xl text-left transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer relative overflow-hidden group border ${
                      isActive
                        ? 'bg-white border-[#0284C7] shadow-[0_15px_35px_rgba(2,132,199,0.18)] ring-4 ring-[#0284C7]/15 translate-x-2'
                        : 'bg-white/70 hover:bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Left Active Edge Indicator */}
                    {isActive && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${pillar.gradient}`} />
                    )}

                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 shrink-0 ${
                        isActive 
                          ? `bg-gradient-to-br ${pillar.gradient} text-white shadow-md shadow-cyan-500/20 scale-105` 
                          : 'bg-slate-100 text-slate-500 group-hover:text-[#0284C7] group-hover:bg-cyan-50'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                            isActive ? 'bg-cyan-100 text-[#0284C7] border border-cyan-200' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {pillar.badge}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 font-bold">NODE #{pillar.number}</span>
                        </div>
                        <h3 className={`text-base sm:text-lg font-extrabold font-display leading-tight transition-colors ${
                          isActive ? 'text-[#0284C7]' : 'text-slate-900 group-hover:text-[#0284C7]'
                        }`}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#0284C7] text-white scale-110 shadow-md' : 'bg-slate-100 text-slate-400 group-hover:bg-cyan-50 group-hover:text-[#0284C7]'
                    }`}>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Active Node Display Glass Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEcosystemTab}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative rounded-3xl p-8 sm:p-12 border-2 border-cyan-200/90 bg-white/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(2,132,199,0.12)] overflow-hidden space-y-8"
                >
                  {/* Top Ambient Glow Background */}
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${ECOSYSTEM_PILLARS[activeEcosystemTab].gradient} opacity-10 blur-3xl pointer-events-none`} />

                  {/* Header Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-[#0284C7]">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                        <span className="font-bold">NODE {ECOSYSTEM_PILLARS[activeEcosystemTab].number} // ONLINE</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0284C7] text-white shadow-xs">
                        {ECOSYSTEM_PILLARS[activeEcosystemTab].badge}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-slate-500 font-bold flex items-center gap-2">
                      <Zap size={14} className="text-[#0284C7]" />
                      <span>CONNECTED TO YOMTECH BACKBONE</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-900 tracking-tight leading-tight">
                      {ECOSYSTEM_PILLARS[activeEcosystemTab].title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                      {ECOSYSTEM_PILLARS[activeEcosystemTab].desc}
                    </p>
                  </div>

                  {/* Technical Capabilities Grid */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Core Technical Capabilities:
                      </h4>
                      <div className="flex gap-2">
                        {ECOSYSTEM_PILLARS[activeEcosystemTab].metrics.map((m, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-[10px] font-mono text-[#0284C7] font-bold">
                            {m.label}: <strong className="text-slate-900">{m.val}</strong>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ECOSYSTEM_PILLARS[activeEcosystemTab].details.map((cap) => (
                        <div 
                          key={cap} 
                          className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-800 hover:border-cyan-400 hover:bg-cyan-50/50 transition-all duration-300 group/cap shadow-xs"
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${ECOSYSTEM_PILLARS[activeEcosystemTab].gradient} flex items-center justify-center text-white shrink-0 shadow-xs`}>
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <span className="group-hover/cap:text-[#0284C7] transition-colors">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Line */}
                  <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <Building2 size={14} className="text-[#0284C7]" />
                      Integrated under YomTech Global Parent Network
                    </span>

                    <Link 
                      to="/services" 
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${ECOSYSTEM_PILLARS[activeEcosystemTab].gradient} text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <span>Explore Node Specs</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 04 — EXISTING CORE CAPABILITIES (MATCHING FLAGSHIP PLATFORMS STYLING)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#0B1528] text-white relative overflow-hidden font-sans border-b border-cyan-400/30">
        
        {/* Cyber Dotted Grid Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Top Badge (Left Aligned with Accent Line Spanning Full Length to the Right) */}
          <div className="space-y-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10 -mr-[1px]">
                <span className="text-[10px] text-cyan-300">◆</span>
                <span>ENGINEERING CAPABILITY MATRIX</span>
                <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
                WE BUILD. WE ENGINEER. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-sky-300">
                  WE SUPPORT. WE TEACH.
                </span>
              </h2>
              <p className="text-cyan-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                Our core services combine technology, innovation, and practical engineering expertise to deliver scalable software solutions.
              </p>
            </div>
          </div>

          {/* 8 Featured Engineering Capability Cards (4x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_SERVICES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.title}
                  style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}
                  className="rounded-[2rem] p-7 border-2 border-cyan-200/90 shadow-xl hover:border-cyan-400 hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between space-y-6 group relative overflow-hidden text-slate-900"
                >
                  {/* Top Color Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${srv.gradient || 'from-cyan-500 to-blue-600'}`} />

                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-wider shadow-xs">
                        {srv.tag}
                      </span>
                      <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${srv.gradient || 'from-cyan-500 to-blue-600'} text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => navigate('/services')}
                      className="w-full py-2.5 px-4 rounded-full border-2 border-cyan-300 hover:border-cyan-500 text-[#0284C7] hover:bg-cyan-50 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shadow-xs cursor-pointer"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 12 Official Services List Matrix (Horizontal Water Flow Marquee Stream) */}
          <div className="pt-12 border-t border-cyan-400/20 space-y-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-end mb-2 w-full">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-cyan-300" />
              <div className="px-6 py-2 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-cyan-300">◆</span>
                <span>OFFICIAL YOMTECH ENTERPRISE SERVICE ROSTER</span>
                <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
              </div>
            </div>

            {/* Left & Right Gradient Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-16 bottom-0 w-28 bg-gradient-to-r from-[#03045E] via-[#03045E]/80 to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-16 bottom-0 w-28 bg-gradient-to-l from-[#0B1528] via-[#0B1528]/80 to-transparent z-20" />

            {/* Row 1: Water Flow Stream Left */}
            <div className="flex overflow-hidden group select-none py-1">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 28
                }}
                className="flex gap-4 shrink-0"
              >
                {[...OFFICIAL_SERVICES_LIST, ...OFFICIAL_SERVICES_LIST].map((item, idx) => (
                  <div 
                    key={`stream1-${item.name}-${idx}`} 
                    onClick={() => navigate('/services')}
                    style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}
                    className="w-56 p-4 rounded-2xl border-2 border-cyan-200/90 hover:border-cyan-400 text-center flex flex-col items-center justify-between space-y-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group/card hover:-translate-y-1 relative overflow-hidden shrink-0 text-slate-900"
                  >
                    {/* Service Image Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 border border-cyan-200 p-2 shadow-2xs group-hover/card:scale-110 group-hover/card:bg-cyan-100 group-hover/card:border-cyan-300 transition-all duration-300 flex items-center justify-center shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="text-xs font-black text-slate-900 group-hover/card:text-[#0284C7] transition-colors line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-600 font-semibold line-clamp-2 leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Water Flow Stream Right */}
            <div className="flex overflow-hidden group select-none py-1">
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 32
                }}
                className="flex gap-4 shrink-0"
              >
                {[...OFFICIAL_SERVICES_LIST.slice().reverse(), ...OFFICIAL_SERVICES_LIST.slice().reverse()].map((item, idx) => (
                  <div 
                    key={`stream2-${item.name}-${idx}`} 
                    onClick={() => navigate('/services')}
                    style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}
                    className="w-56 p-4 rounded-2xl border-2 border-cyan-200/90 hover:border-cyan-400 text-center flex flex-col items-center justify-between space-y-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group/card hover:-translate-y-1 relative overflow-hidden shrink-0 text-slate-900"
                  >
                    {/* Service Image Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 border border-cyan-200 p-2 shadow-2xs group-hover/card:scale-110 group-hover/card:bg-cyan-100 group-hover/card:border-cyan-300 transition-all duration-300 flex items-center justify-center shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="text-xs font-black text-slate-900 group-hover/card:text-[#0284C7] transition-colors line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-600 font-semibold line-clamp-2 leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 06 — MEASURED IMPACT & STATISTICS
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture Matching User Screenshot */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Header Badge (Right Aligned Badge with Accent Line Spanning Full Length to the Left) */}
          <div className="space-y-6">
            <div className="flex items-center justify-end w-full">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7]" />
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>MEASURED ECOSYSTEM IMPACT</span>
                <TrendingUp size={16} className="text-[#0284C7] ml-0.5" />
              </div>
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Real Scale. Measured Achievements.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {COMPANY_STATS.map((st) => (
              <div
                key={st.label}
                className="bg-white/95 backdrop-blur-xl border-2 border-slate-100/90 hover:border-cyan-300 rounded-3xl p-6 text-center space-y-2 hover:shadow-lg transition-all shadow-xs"
              >
                <span className="text-3xl sm:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] block">
                  {st.stat}
                </span>
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">{st.label}</p>
                <p className="text-[10px] font-bold text-slate-500">{st.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 07 — NEW: TECHNOLOGY + TALENT (Split-Screen)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F3EEFF] text-slate-900 relative overflow-hidden border-b border-slate-200/80 font-sans">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Header Badge (Left Aligned with Accent Line Spanning Full Length to the Right) */}
          <div className="space-y-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-purple-100/90 border-2 border-purple-300 text-purple-950 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <Users size={16} className="text-purple-900" />
                <span>TWO SIDES OF ONE ECOSYSTEM</span>
                <span className="text-[10px] text-purple-900 ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Technology Creates Greater Impact When <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-[#0284C7]">
                  People and Businesses Grow Together.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT SIDE: FOR BUSINESSES */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-indigo-200 shadow-xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-black uppercase tracking-widest">
                  FOR BUSINESSES &amp; ENTERPRISES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Build, Modernize &amp; Scale</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Access technology capabilities designed to help organizations solve digital challenges, improve operations, and build scalable solutions.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> Enterprise Software</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> Custom Applications</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> Cloud Solutions</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> Cybersecurity</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> IT Consulting</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-indigo-600" /> E-Government</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => navigate('/services')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-[#0284C7] text-white font-black text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: FOR TECHNOLOGY TALENT */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-200 shadow-xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-widest">
                  FOR TECHNOLOGY TALENT &amp; LEARNERS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Learn, Build &amp; Grow</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Develop practical technology skills through structured learning, mentorship, hands-on projects, and real engineering practices.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> AI &amp; Machine Learning</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> Fullstack Engineering</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> UI/UX Product Design</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> Data Analytics</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> Practical Projects</div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800"><CheckCircle2 size={15} className="text-emerald-600" /> Senior Mentorship</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => navigate('/academy')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Explore Academy</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 08 — ENGINEERING PROCESS (S-CURVE ZIG-ZAG PUSHPIN ROADMAP)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20 relative z-10">

          {/* Header Badge */}
          <div className="space-y-6">
            <div className="flex items-center justify-end w-full">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7]" />
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>DEVELOPMENT LIFECYCLE &amp; PROCESS</span>
                <Zap size={16} className="text-[#0284C7] ml-0.5" />
              </div>
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Structured Engineering Journey
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                From initial requirement discovery to zero-downtime production deployment — our 5-phase engineering roadmap built for reliability and scale.
              </p>
            </div>
          </div>

          {/* Staggered 2-Column S-Curve Pushpin Roadmap Container */}
          <div className="relative max-w-6xl mx-auto py-8">
            
            {/* Background S-Curve Connecting Dashed Path SVG */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 100 100" 
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
                d="M 25,6 C 65,6 75,10 75,23 C 75,36 25,35 25,48 C 25,60 75,53 75,65 C 75,77 50,76 50,88" 
                stroke="#0284C7" 
                strokeWidth="0.5" 
                strokeDasharray="1.5 1.5" 
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>

            {/* Staggered 2-Column Grid matching VektaOS Pushpin Screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 md:gap-y-20 relative z-10">
              {[
                { 
                  num: '01', 
                  title: 'Plan & Discover', 
                  desc: 'In-depth requirement analysis, tech stack selection, scope definition, and structural architecture plan.', 
                  tilt: '-rotate-2 hover:rotate-0',
                  offset: 'md:translate-y-0',
                  pinColor: 'from-blue-500 to-blue-700 shadow-blue-500/40',
                  numColor: 'text-blue-600',
                  badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
                  icon: Target,
                  floatDuration: 4.2
                },
                { 
                  num: '02', 
                  title: 'Manage & Design', 
                  desc: 'High-performance microservices architecture design, REST/GraphQL API specifications, and intuitive UI/UX wireframing.', 
                  tilt: 'rotate-2 hover:rotate-0',
                  offset: 'md:translate-y-20',
                  pinColor: 'from-emerald-500 to-emerald-700 shadow-emerald-500/40',
                  numColor: 'text-emerald-600',
                  badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  icon: Code,
                  floatDuration: 4.8
                },
                { 
                  num: '03', 
                  title: 'Engineer & Build', 
                  desc: 'Test-driven development, agile sprint execution, clean modular codebase, and robust database optimization.', 
                  tilt: '-rotate-1 hover:rotate-0',
                  offset: 'md:translate-y-0',
                  pinColor: 'from-purple-500 to-purple-700 shadow-purple-500/40',
                  numColor: 'text-purple-600',
                  badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
                  icon: Cpu,
                  floatDuration: 5.1
                },
                { 
                  num: '04', 
                  title: 'Validate & Test', 
                  desc: 'End-to-end security penetration testing, sub-50ms latency performance tuning, and comprehensive QA audits.', 
                  tilt: 'rotate-3 hover:rotate-0',
                  offset: 'md:translate-y-20',
                  pinColor: 'from-amber-500 to-amber-700 shadow-amber-500/40',
                  numColor: 'text-amber-600',
                  badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
                  icon: ShieldCheck,
                  floatDuration: 4.5
                },
                { 
                  num: '05', 
                  title: 'Deploy & Scale', 
                  desc: 'CI/CD automated pipeline deployment, zero-downtime launch, real-time APM monitoring, and round-the-clock SLA support.', 
                  tilt: '-rotate-1 hover:rotate-0',
                  offset: 'md:col-span-2 md:max-w-xl md:mx-auto md:translate-y-10',
                  pinColor: 'from-cyan-400 to-[#0284C7] shadow-cyan-500/40',
                  numColor: 'text-[#0284C7]',
                  badgeBg: 'bg-cyan-50 text-[#0284C7] border-cyan-200',
                  icon: TrendingUp,
                  floatDuration: 5.4
                }
              ].map((step, idx) => {
                const StepIcon = step.icon;

                return (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, y: 50, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative w-full ${step.offset}`}
                  >
                    {/* Continuous Ambient Floating Bobbing Container */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: step.floatDuration,
                        ease: 'easeInOut',
                      }}
                      className="relative w-full"
                    >
                      {/* 3D Realistic Pushpin Top Medallion with Swaying Animation */}
                      <motion.div 
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ repeat: Infinity, duration: 3.2 + idx * 0.4, ease: 'easeInOut' }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
                      >
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.pinColor} border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] flex items-center justify-center relative`}>
                          <div className="w-3 h-3 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                        </div>
                        <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
                      </motion.div>

                      {/* Animated Pushpin Tilted Card Div */}
                      <div className={`rounded-[2.5rem] p-8 sm:p-10 md:p-12 bg-white/95 border-2 border-slate-100/90 shadow-[0_25px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] ${step.tilt} transition-all duration-500 hover:-translate-y-3 relative z-20 space-y-6 group cursor-pointer overflow-hidden`}>
                        
                        {/* Top Gradient Shimmer Highlight Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center justify-between">
                          <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${step.numColor} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 inline-block`}>
                            {step.num}
                          </span>

                          <div className={`w-14 h-14 rounded-2xl ${step.badgeBg} border-2 flex items-center justify-center shadow-sm group-hover:scale-115 group-hover:rotate-12 transition-all duration-500`}>
                            <StepIcon size={26} className="group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all duration-300 tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                            {step.desc}
                          </p>
                        </div>

                      </div>
                    </motion.div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 09 — INSIGHTS, MEDIA & COMMUNITY (PUSHPIN CARDS)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Header Badge */}
          <div className="space-y-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <Globe size={16} className="text-[#0284C7]" />
                <span>YOMTECH IN THE WORLD</span>
                <span className="text-[10px] text-[#0284C7] ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Technology Doesn't Stop <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  At The Product.
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                YomTech Global shares technology knowledge, practical insights, innovation stories, engineering perspectives, and opportunities through its growing digital community.
              </p>
            </div>
          </div>

          {/* 3 Media Community Pushpin Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-4">
            
            {/* YOUTUBE */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full"
            >
              {/* 3D Pushpin */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.25)] flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                </div>
                <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
              </div>

              <div className="bg-white/95 rounded-[2.5rem] p-8 sm:p-10 border-2 border-slate-100/90 hover:border-red-400 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(239,68,68,0.18)] -rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
                      YOUTUBE CHANNEL
                    </span>
                    <div className="w-13 h-13 rounded-2xl bg-red-50 border-2 border-red-200 text-red-600 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <Video size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-display group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300">
                    Long-Form Engineering Insights
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Technology discussions, full-length tutorials, engineering deep dives, product stories, and national technology documentary films.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-3.5 px-5 rounded-full bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white border-2 border-red-200 group-hover:border-red-600 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>Watch On YouTube</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* TIKTOK */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              {/* 3D Pushpin */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-[#0284C7] border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.25)] flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                </div>
                <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
              </div>

              <div className="bg-white/95 rounded-[2.5rem] p-8 sm:p-10 border-2 border-slate-100/90 hover:border-cyan-400 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
                      TIKTOK MEDIA
                    </span>
                    <div className="w-13 h-13 rounded-2xl bg-cyan-50 border-2 border-cyan-200 text-[#0284C7] shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <Sparkles size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all duration-300">
                    Short-Form Tech Education
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Quick developer tips, coding highlights, tech awareness clips, career inspiration, and behind-the-scenes engineering moments.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a 
                    href="https://tiktok.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-3.5 px-5 rounded-full bg-cyan-50 group-hover:bg-[#0284C7] text-[#0284C7] group-hover:text-white border-2 border-cyan-200 group-hover:border-[#0284C7] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>Follow On TikTok</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* LINKEDIN */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full"
            >
              {/* 3D Pushpin */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.25)] flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                </div>
                <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
              </div>

              <div className="bg-white/95 rounded-[2.5rem] p-8 sm:p-10 border-2 border-slate-100/90 hover:border-blue-500 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.18)] -rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
                      LINKEDIN NETWORK
                    </span>
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-600 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <Globe size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-display group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
                    Professional Network Updates
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Enterprise updates, technology whitepapers, strategic partnerships, project milestones, and career opportunities across Africa.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-3.5 px-5 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white border-2 border-blue-200 group-hover:border-blue-600 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>Connect On LinkedIn</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS & CLIENT PROOF (PUSHPIN CARDS)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Header Badge */}
          <div className="space-y-6">
            <div className="flex items-center justify-end w-full">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7]" />
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>WHAT OUR COMMUNITY SAYS</span>
                <Quote size={16} className="text-[#0284C7] ml-0.5" />
              </div>
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Trusted by Engineers &amp; Leaders
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-4">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative w-full"
              >
                {/* 3D Pushpin */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.25)] flex items-center justify-center relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                  </div>
                  <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
                </div>

                <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/95 border-2 border-slate-100/90 hover:border-cyan-400 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] transition-all duration-500 flex flex-col justify-between space-y-6 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                  <p className="text-sm sm:text-base text-slate-700 font-bold italic leading-relaxed pt-2">
                    "{t.quote}"
                  </p>
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors">{t.author}</h4>
                      <p className="text-xs font-bold text-[#0284C7] uppercase font-mono">{t.role}</p>
                    </div>
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 11 — THE FUTURE OF YOMTECH (PUSHPIN ROADMAP JOURNEY)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-20 relative z-10">

          {/* Header Badge */}
          <div className="space-y-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <Target size={16} className="text-[#0284C7]" />
                <span>THE FUTURE OF TECHNOLOGY</span>
                <span className="text-[10px] text-[#0284C7] ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Building for What Comes Next.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                Technology changes continuously. YomTech Global is built around continuous learning, practical engineering, responsible innovation, and scalable digital thinking so that today's solutions can evolve with tomorrow's opportunities.
              </p>
            </div>
          </div>

          {/* Staggered 2-Column S-Curve Pushpin Roadmap Container */}
          <div className="relative max-w-6xl mx-auto py-8">
            
            {/* Background S-Curve Connecting Dashed Path SVG */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 100 100" 
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
                d="M 25,12 C 65,12 75,20 75,38 C 75,56 25,52 25,70 C 25,88 75,82 75,95" 
                stroke="#0284C7" 
                strokeWidth="0.5" 
                strokeDasharray="1.5 1.5" 
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>

            {/* Staggered 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 md:gap-y-20 relative z-10">
              {[
                { 
                  num: '01', 
                  title: 'Continuous Learning', 
                  desc: 'Technology professionals and organizations continuously expand knowledge, experiment with new tools, and strengthen their foundations.', 
                  tilt: '-rotate-2 hover:rotate-0',
                  offset: 'md:translate-y-0',
                  pinColor: 'from-blue-500 to-blue-700 shadow-blue-500/40',
                  numColor: 'text-blue-600',
                  badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
                  icon: GraduationCap,
                  floatDuration: 4.3
                },
                { 
                  num: '02', 
                  title: 'Practical Innovation', 
                  desc: 'Ideas become valuable when they are transformed into useful products, working systems, and solutions to real-world challenges.', 
                  tilt: 'rotate-2 hover:rotate-0',
                  offset: 'md:translate-y-20',
                  pinColor: 'from-emerald-500 to-emerald-700 shadow-emerald-500/40',
                  numColor: 'text-emerald-600',
                  badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  icon: Lightbulb,
                  floatDuration: 4.9
                },
                { 
                  num: '03', 
                  title: 'Scalable Engineering', 
                  desc: 'Strong architecture, maintainable code, resilient systems, and thoughtful technology decisions create foundations that can grow.', 
                  tilt: '-rotate-1 hover:rotate-0',
                  offset: 'md:translate-y-0',
                  pinColor: 'from-purple-500 to-purple-700 shadow-purple-500/40',
                  numColor: 'text-purple-600',
                  badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
                  icon: Layers,
                  floatDuration: 5.2
                },
                { 
                  num: '04', 
                  title: 'Global Connection', 
                  desc: 'Technology creates opportunities to connect businesses, engineers, learners, and partners beyond geographic boundaries.', 
                  tilt: 'rotate-3 hover:rotate-0',
                  offset: 'md:translate-y-20',
                  pinColor: 'from-amber-500 to-amber-700 shadow-amber-500/40',
                  numColor: 'text-amber-600',
                  badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
                  icon: Globe,
                  floatDuration: 4.6
                }
              ].map((pillar, idx) => {
                const PillarIcon = pillar.icon;

                return (
                  <motion.div 
                    key={pillar.num}
                    initial={{ opacity: 0, y: 50, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative w-full ${pillar.offset}`}
                  >
                    {/* Continuous Ambient Floating Bobbing Container */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: pillar.floatDuration,
                        ease: 'easeInOut',
                      }}
                      className="relative w-full"
                    >
                      {/* 3D Realistic Pushpin Top Medallion with Swaying Animation */}
                      <motion.div 
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ repeat: Infinity, duration: 3.2 + idx * 0.4, ease: 'easeInOut' }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
                      >
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pillar.pinColor} border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] flex items-center justify-center relative`}>
                          <div className="w-3 h-3 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                        </div>
                        <div className="w-1 h-3 bg-slate-400/90 shadow-xs" />
                      </motion.div>

                      {/* Animated Pushpin Tilted Card Div */}
                      <div className={`rounded-[2.5rem] p-8 sm:p-10 md:p-12 bg-white/95 border-2 border-slate-100/90 shadow-[0_25px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] ${pillar.tilt} transition-all duration-500 hover:-translate-y-3 relative z-20 space-y-6 group cursor-pointer overflow-hidden`}>
                        
                        {/* Top Gradient Shimmer Highlight Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center justify-between">
                          <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${pillar.numColor} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 inline-block`}>
                            {pillar.num}
                          </span>

                          <div className={`w-14 h-14 rounded-2xl ${pillar.badgeBg} border-2 flex items-center justify-center shadow-sm group-hover:scale-115 group-hover:rotate-12 transition-all duration-500`}>
                            <PillarIcon size={26} className="group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all duration-300 tracking-tight">
                            {pillar.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                            {pillar.desc}
                          </p>
                        </div>

                      </div>
                    </motion.div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 12 — FINAL DUAL-PATH CTA
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-b border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture Matching User Screenshot */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-12 relative z-10">

          {/* Header Badge (Right Aligned Badge with Accent Line Spanning Full Length to the Left) */}
          <div className="space-y-6">
            <div className="flex items-center justify-end w-full gap-0">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10">
                <span className="text-[10px] text-[#0284C7] font-bold">◆</span>
                <span>TAKE THE NEXT STEP</span>
                <Sparkles size={16} className="text-[#0284C7] ml-0.5" />
              </div>
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Ready to Build Your Technology Future?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FOR ORGANIZATIONS */}
            <div className="bg-white/95 backdrop-blur-2xl border-2 border-cyan-200 rounded-3xl p-8 text-center space-y-6 shadow-xl hover:border-cyan-400 transition-all">
              <span className="px-3.5 py-1 rounded-full bg-cyan-100 text-[#0284C7] border border-cyan-200 text-xs font-black uppercase tracking-widest inline-block">FOR ORGANIZATIONS</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Start a Technology Conversation</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Consult with our engineering leads to build custom ERPs, cloud architectures, or digital transformation workflows.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white hover:opacity-95 font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* FOR INDIVIDUALS */}
            <div className="bg-white/95 backdrop-blur-2xl border-2 border-emerald-200 rounded-3xl p-8 text-center space-y-6 shadow-xl hover:border-emerald-400 transition-all">
              <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-widest inline-block">FOR INDIVIDUALS</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Start Building Your Future</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Enroll in WabiSkills bootcamps, master fullstack development, or join our vetted developer network.
              </p>
              <button
                onClick={() => navigate('/academy')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-95 font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Academy Courses</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 13 — CLIENTS & STRATEGIC PARTNERS (MATCHING ABOUT US PAGE)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden border-t border-slate-200/90 font-sans">
        
        {/* Dotted Grid Mesh Texture */}
        <div 
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Top Header Badge */}
          <div className="space-y-6">
            <div className="flex items-center justify-start w-full">
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>CLIENTS &amp; STRATEGIC PARTNERS</span>
                <span className="text-[10px] text-[#0284C7] ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                Trusted by Leading Public &amp; Private Institutions
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                YomTech Global works closely with government ministries, national security agencies, universities, media networks, and financial institutions.
              </p>
            </div>
          </div>

          <div className="space-y-12 text-left py-2">
            
            {/* Public Sector & Government (Water Flow Left) */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0284C7] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0284C7]" />
                <span>Government &amp; Public Sector Partners</span>
              </h4>
              
              <div className="relative w-full overflow-hidden py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-left">
                  {[...publicInstitutions, ...publicInstitutions, ...publicInstitutions].map((item, idx) => (
                    <a 
                      key={`pub-${idx}`}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit official website: ${item.fullName}`}
                      className="group relative w-44 sm:w-48 p-4 rounded-2xl bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 border border-sky-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-2.5 shrink-0 cursor-pointer"
                    >
                      <div className="absolute top-2 right-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={11} />
                      </div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2.5 shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <img src={item.logo} alt={item.fullName} className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                      </div>
                      <div className="space-y-0.5 w-full">
                        <span className="text-sm font-black text-slate-900 font-display block group-hover:text-[#0284C7] transition-colors truncate">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-semibold block leading-tight line-clamp-2">{item.fullName}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic & University Partners (Water Flow Right) */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Academic &amp; University Partners</span>
              </h4>

              <div className="relative w-full overflow-hidden py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-right">
                  {[...academicPartners, ...academicPartners, ...academicPartners].map((item, idx) => (
                    <a 
                      key={`acad-${idx}`}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit official website: ${item.fullName}`}
                      className="group relative w-44 sm:w-48 p-4 rounded-2xl bg-gradient-to-b from-indigo-50/80 via-white to-indigo-50/40 border border-indigo-200/90 shadow-sm hover:shadow-xl hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-2.5 shrink-0 cursor-pointer"
                    >
                      <div className="absolute top-2 right-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={11} />
                      </div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2.5 shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <img src={item.logo} alt={item.fullName} className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                      </div>
                      <div className="space-y-0.5 w-full">
                        <span className="text-sm font-black text-slate-900 font-display block group-hover:text-indigo-600 transition-colors truncate">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-semibold block leading-tight line-clamp-2">{item.fullName}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Media & Tech Storytelling (Water Flow Left Fast) */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-600" />
                <span>Media &amp; Tech Storytelling Organizations</span>
              </h4>

              <div className="relative w-full overflow-hidden py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-left-fast">
                  {[...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners].map((item, idx) => (
                    <a 
                      key={`med-${idx}`}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit official website: ${item.fullName}`}
                      className="group relative w-44 sm:w-48 p-4 rounded-2xl bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/40 border border-emerald-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-2.5 shrink-0 cursor-pointer"
                    >
                      <div className="absolute top-2 right-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={11} />
                      </div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2.5 shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <img src={item.logo} alt={item.fullName} className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                      </div>
                      <div className="space-y-0.5 w-full">
                        <span className="text-sm font-black text-slate-900 font-display block group-hover:text-emerald-600 transition-colors truncate">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-semibold block leading-tight line-clamp-2">{item.fullName}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise & Commercial Sector Clients (Water Flow Right) */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Enterprise &amp; Commercial Sector Clients</span>
              </h4>

              <div className="relative w-full overflow-hidden py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-right">
                  {[...enterpriseClients, ...enterpriseClients, ...enterpriseClients].map((item, idx) => (
                    <a 
                      key={`ent-${idx}`}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit official website: ${item.name}`}
                      className="group relative w-44 sm:w-48 p-4 rounded-2xl bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 border border-amber-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-2.5 shrink-0 cursor-pointer"
                    >
                      <div className="absolute top-2 right-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={11} />
                      </div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2.5 shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <img src={item.logo} alt={item.category} className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                      </div>
                      <div className="space-y-0.5 w-full">
                        <span className="text-sm font-black text-slate-900 font-display block group-hover:text-amber-600 transition-colors truncate">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-semibold block leading-tight line-clamp-2">{item.category}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
