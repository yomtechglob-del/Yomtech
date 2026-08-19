import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle2, Phone, Star, Quote, Mail,
  Building2, Globe, Cpu, Monitor, Layers, Award, ShieldCheck,
  TrendingUp, Briefcase, Handshake, Sparkles, Zap, Target,
  GraduationCap, Code, Server, Video, Eye, Lock, Users,
  MessageCircle, ArrowUp, Calendar, FileText, ChevronRight,
  Factory, Landmark, Heart, BookOpen, Newspaper, Clock,
  ExternalLink, BarChart3, Rocket
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

// Gallery / Team images
import gallery01 from '../../assets/gallery/gallery 01.jpg';
import gallery02 from '../../assets/gallery/gallery 02.jpg';
import gallery03 from '../../assets/gallery/gallery 03.jpg';
import gallery04 from '../../assets/gallery/gallery 04.jpg';
import gallery05 from '../../assets/gallery/gallery 05.jpg';
import gallery06 from '../../assets/gallery/gallery 06.jpg';

/* ─── animation helpers (hero only, same as AboutPage) ─── */
const fadeLeft  = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 30 },  show: { opacity: 1, x: 0 } };
const fadeUp    = { hidden: { opacity: 0, y: 20 },  show: { opacity: 1, y: 0 } };
const stagger   = { show: { transition: { staggerChildren: 0.08 } } };

/* ─── DATA ─── */

const FEATURED_SERVICES = [
  {
    icon: Cpu, img: erpImg,
    title: 'ERP, CRM & WMS Solutions',
    desc: 'We design and implement enterprise-grade ERP, CRM, and WMS systems that streamline business operations, improve decision-making, and enhance customer engagement.',
    tag: 'ENTERPRISE', accent: 'cyan'
  },
  {
    icon: Code, img: customImg,
    title: 'Custom Software & App Development',
    desc: 'From responsive web apps to high-performance mobile apps, we build tailored software solutions that meet your exact business needs and scale with your growth.',
    tag: 'FULLSTACK', accent: 'emerald'
  },
  {
    icon: ShieldCheck, img: cybersecurityImg,
    title: 'Cybersecurity & Surveillance',
    desc: 'Protect your digital assets with our IT security consulting, surveillance system integration, and cybersecurity training programs to keep your systems safe.',
    tag: 'SECURITY', accent: 'violet'
  },
  {
    icon: Globe, img: cloudImg,
    title: 'Cloud Services & Deployment',
    desc: 'We provide cloud migration, hosting, and deployment services that enable secure, scalable, and cost-effective business operations in the cloud.',
    tag: 'CLOUD', accent: 'sky'
  },
  {
    icon: Zap, img: erpImg,
    title: 'AI & Automation',
    desc: 'Leverage intelligent automation, AI-driven insights, and smart workflows to boost efficiency, productivity, and innovation in your organization.',
    tag: 'AI/ML', accent: 'indigo'
  },
  {
    icon: Monitor, img: customImg,
    title: 'UI/UX & Product Design',
    desc: 'We craft intuitive, user-friendly interfaces and digital experiences that empower businesses and delight customers across platforms.',
    tag: 'DESIGN', accent: 'rose'
  },
  {
    icon: GraduationCap, img: educationImg,
    title: 'Tech Education & Coaching',
    desc: 'Through online courses, mentorship, and hands-on training, we equip learners and professionals with future-ready tech skills.',
    tag: 'ACADEMY', accent: 'amber'
  },
  {
    icon: BarChart3, img: crmImg,
    title: 'Data Analytics & Insights',
    desc: 'Transform raw data into actionable business intelligence with advanced analytics, dashboards, and reporting tools.',
    tag: 'ANALYTICS', accent: 'cyan'
  }
];

const FEATURED_PRODUCTS = [
  {
    id: 'wabiskills', name: 'WabiSkills Academy', logo: wabiSkillsLogo,
    tag: 'LIVE', tagColor: 'bg-emerald-400',
    desc: 'Technology training and digital skills development platform — hands-on bootcamps and industry mentorship.',
    url: 'https://wabiskills.com/',
    gradient: 'from-emerald-950/80 via-slate-900/90 to-teal-950/80',
    border: 'border-emerald-400/50 hover:border-emerald-300'
  },
  {
    id: 'wabijob', name: 'WabiJob Platform', logo: wabiJobsLogo,
    tag: 'LIVE', tagColor: 'bg-amber-400',
    desc: 'Talent and recruitment ecosystem connecting skilled professionals with enterprise opportunities across Africa.',
    url: 'https://wabijob.com/',
    gradient: 'from-amber-950/80 via-slate-900/90 to-orange-950/80',
    border: 'border-amber-400/50 hover:border-amber-300'
  },
  {
    id: 'yomnex', name: 'Yomnex ERP', logo: yomnexLogo,
    tag: 'ENTERPRISE', tagColor: 'bg-cyan-400',
    desc: 'Fully custom-built enterprise resource planning system for government institutions and large organizations.',
    url: null,
    gradient: 'from-cyan-950/80 via-slate-900/90 to-sky-950/80',
    border: 'border-cyan-400/50 hover:border-cyan-300'
  },
  {
    id: 'wabix', name: 'WabiX', logo: logoEmblem,
    tag: 'COMING SOON', tagColor: 'bg-indigo-400',
    desc: 'Virtual meeting and collaboration platform for enterprise communication and online engagement.',
    url: null,
    gradient: 'from-indigo-950/80 via-slate-900/90 to-violet-950/80',
    border: 'border-indigo-400/50 hover:border-indigo-300'
  },
  {
    id: 'mari', name: 'Mari', logo: logoEmblem,
    tag: 'COMING SOON', tagColor: 'bg-pink-400',
    desc: 'Next-generation social media application developed by YomTech Global for the African digital community.',
    url: null,
    gradient: 'from-pink-950/80 via-slate-900/90 to-rose-950/80',
    border: 'border-pink-400/50 hover:border-pink-300'
  },
  {
    id: 'media', name: 'YomTech Media', logo: logoEmblem,
    tag: 'COMING SOON', tagColor: 'bg-sky-400',
    desc: 'Technology storytelling, education, and innovation media platform — documentaries and tech awareness.',
    url: null,
    gradient: 'from-sky-950/80 via-slate-900/90 to-blue-950/80',
    border: 'border-sky-400/50 hover:border-sky-300'
  }
];

const SOLUTIONS = [
  { icon: Landmark, title: 'E-Government Transformation', desc: 'Citizen-focused platforms, workflow automation, and integrated government portals.' },
  { icon: Server, title: 'Learning Management Systems', desc: 'Custom LMS for universities, enterprises, and institutional training programs.' },
  { icon: BarChart3, title: 'Business Trading Platforms', desc: 'Digital trading, labor & employment service systems for public and private sectors.' },
  { icon: Eye, title: 'Surveillance & Monitoring', desc: 'AI-integrated CCTV, monitoring analytics, and smart surveillance infrastructure.' },
  { icon: FileText, title: 'Workflow & Document Automation', desc: 'Digital records, archiving, and automated institutional document management.' },
  { icon: Lock, title: 'IT & Cybersecurity Consultancy', desc: 'Enterprise security audits, data center maintenance, and system hardening.' },
];

const INDUSTRIES = [
  { icon: Landmark, title: 'Government & Public Sector', desc: 'Digital transformation for federal and municipal institutions' },
  { icon: GraduationCap, title: 'Education & Universities', desc: 'LMS, training platforms, and academic digital infrastructure' },
  { icon: Building2, title: 'Banking & Financial Services', desc: 'Secure enterprise systems for banks and financial institutions' },
  { icon: Heart, title: 'Healthcare & Hospitality', desc: 'Technology solutions for hotels, hospitals, and service industries' },
  { icon: Factory, title: 'Manufacturing & Supply Chain', desc: 'ERP, WMS, and procurement automation for industrial operations' },
  { icon: Globe, title: 'Media & Communications', desc: 'Technology documentaries, digital media, and broadcasting platforms' },
];

const COMPANY_STATS = [
  { stat: '2015', label: 'Year Founded', badge: 'HERITAGE', subtitle: '10+ Years of Innovation', accent: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
  { stat: '25+', label: 'Solutions Deployed', badge: 'PROJECTS', subtitle: 'Enterprise Deployments', accent: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
  { stat: '2K+', label: 'Learners Empowered', badge: 'ACADEMY', subtitle: 'WabiSkills Alumni', accent: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { stat: '7+', label: 'Global Partnerships', badge: 'ALLIANCES', subtitle: 'Institutional Partners', accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { stat: '5+', label: 'Digital Platforms', badge: 'PRODUCTS', subtitle: 'Flagship Products', accent: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  { stat: '10+', label: 'Hotels & Enterprises', badge: 'CLIENTS', subtitle: 'Commercial Sector', accent: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
];

const FEATURED_PROJECTS = [
  { title: 'Enterprise ERP Systems', desc: 'Custom-built resource planning for government institutions and large organizations.', tag: 'ERP', accent: 'cyan' },
  { title: 'Government Digital Transformation', desc: 'Municipal and public services modernization including citizen service platforms.', tag: 'GOV-TECH', accent: 'sky' },
  { title: 'Labor & Employment Systems', desc: 'Digital labor management and employment service platforms for public sector.', tag: 'E-GOV', accent: 'indigo' },
  { title: 'WabiSkills Training Platform', desc: 'Pan-African digital learning platform empowering 2K+ tech professionals.', tag: 'EDTECH', accent: 'emerald' },
  { title: 'AI Surveillance & Analytics', desc: 'AI-integrated CCTV monitoring and analytics solutions for secure zones.', tag: 'AI/ML', accent: 'violet' },
  { title: 'WabiJob Recruitment Ecosystem', desc: 'Talent matching platform connecting skilled professionals with enterprise opportunities.', tag: 'HR-TECH', accent: 'amber' },
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

const LATEST_NEWS = [
  {
    title: 'WabiSkills Academy Graduates 2,000+ Tech Professionals',
    excerpt: 'Our flagship training platform reaches a major milestone, empowering the next generation of African technology leaders with industry-ready skills.',
    date: '2025',
    category: 'EDUCATION',
    accent: 'emerald'
  },
  {
    title: 'Yomnex ERP System Deployed for Enterprise Clients',
    excerpt: 'Our fully custom-built enterprise resource planning system is now operational, streamlining operations for government and private sector organizations.',
    date: '2025',
    category: 'ENTERPRISE',
    accent: 'cyan'
  },
  {
    title: 'Expanding AI & Cybersecurity Solutions Across Africa',
    excerpt: 'Yomtech Global is scaling AI-powered surveillance, monitoring analytics, and cybersecurity infrastructure for public sector institutions.',
    date: '2025',
    category: 'INNOVATION',
    accent: 'violet'
  }
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
  { name: 'ERP Software Solution', desc: 'Enterprise resource planning for operational excellence' },
  { name: 'WMS Software Solution', desc: 'Warehouse management systems & inventory optimization' },
  { name: 'SFA Software Solution', desc: 'Sales force automation & CRM tracking tools' },
  { name: 'Online Tech Education', desc: 'WabiSkills digital academy & professional bootcamps' },
  { name: 'Tech Documentary', desc: 'Media production & technology innovation storytelling' },
  { name: 'Cybersecurity & IT Consulting', desc: 'Security audits, data center defense & IT advisory' },
  { name: 'Mobile App Development', desc: 'Native & cross-platform iOS & Android mobile applications' },
  { name: 'Web App Development', desc: 'High-performance web applications & enterprise portals' },
  { name: 'Build Custom Software', desc: '100% custom-tailored software engineered from scratch' },
  { name: 'Tech Coaching & Mentorship', desc: 'Career coaching, technical mentorship & skill acceleration' },
  { name: 'Cloud Service & Deployment', desc: 'Cloud migration, DevOps automation & infrastructure hosting' },
  { name: 'Surveillance & Security', desc: 'AI-integrated CCTV, smart monitoring & security systems' },
];


/* ─── accent color mapping ─── */
const accentMap = {
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    gradient: 'from-[#0284C7] to-[#0ED3DD]' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', gradient: 'from-emerald-600 to-teal-500' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  gradient: 'from-violet-600 to-purple-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     gradient: 'from-sky-600 to-blue-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   gradient: 'from-amber-600 to-orange-500' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    gradient: 'from-rose-600 to-pink-500' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  gradient: 'from-indigo-600 to-blue-500' },
};


/* ════════════════════════════════════════════════════════════
   HOME PAGE COMPONENT
   ════════════════════════════════════════════════════════════ */
export const HomePage = () => {
  const navigate = useNavigate();
  const [partnerFilter, setPartnerFilter] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const partnerCategories = ['All', 'Government', 'Academic', 'Media', 'Enterprise'];
  const filteredPartners = partnerFilter === 'All'
    ? ALL_PARTNERS
    : ALL_PARTNERS.filter(p => p.category === partnerFilter);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          SECTION 1: HERO — Corporate Introduction
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        {/* Flowing Background Layers (same as AboutPage) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top origin-top-left opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top origin-top-right opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        {/* Ambient Glows */}
        <div className="absolute -top-40 left-[-10%] w-[800px] h-[600px] bg-gradient-to-r from-[#48cae4]/35 via-[#0077b6]/25 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-[#90e0ef]/20 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] bg-[#00b4d8]/25 blur-[120px] rounded-full pointer-events-none" />

        {/* SVG Laser Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 600" fill="none">
          <defs>
            <linearGradient id="heroLaserG1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#48cae4" stopOpacity="0.85" />
              <stop offset="88%" stopColor="#90e0ef" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#90e0ef" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLaserG2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077b6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00b4d8" stopOpacity="0.9" />
              <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M 710 600 C 690 380, 790 160, 955 14" stroke="#00b4d8" strokeWidth="7" strokeLinecap="round" opacity="0.3" filter="url(#heroGlow)" />
          <path d="M 710 600 C 690 380, 790 160, 955 14" stroke="url(#heroLaserG1)" strokeWidth="4" strokeLinecap="round" filter="url(#heroGlow)" className="animate-pulse" />
          <path d="M 790 600 C 780 380, 890 200, 1000 110" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" opacity="0.35" filter="url(#heroGlow)" />
          <path d="M 790 600 C 780 380, 890 200, 1000 110" stroke="url(#heroLaserG2)" strokeWidth="4.5" strokeLinecap="round" filter="url(#heroGlow)" />
        </svg>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left items-start flex flex-col"
          >
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-black shadow-lg">
              <div className="flex items-center gap-1 text-amber-300">
                <span className="font-extrabold text-sm mr-1 text-white">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="text-white/40">|</span>
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">PIONEERING IT SOLUTIONS &amp; TALENT ENGINEERING</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Digital Innovation
                </span> <br />
                Across Africa
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Yomtech Global is a dynamic technology ecosystem delivering enterprise software solutions, ERP systems, artificial intelligence, cybersecurity services, technology talent development, and media production — driving digital transformation and inspiring the next generation of African technology leaders.
            </p>

            {/* Hero Bullet Points */}
            <motion.div className="space-y-2.5 font-sans" variants={stagger} initial="hidden" animate="show">
              {[
                'Enterprise Software & Custom ERP Solutions',
                'AI, Cybersecurity & Cloud Infrastructure',
                'WabiSkills Academy — 2K+ Graduates Trained',
                'Pan-African Technology Media & Documentaries'
              ].map((tagline, i) => (
                <motion.div key={tagline} className="flex items-center gap-3" variants={fadeUp} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}>
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white/90 tracking-tight">{tagline}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Request a Quote</span>
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
                  <p className="text-[9px] text-cyan-200 font-bold uppercase tracking-wider">Direct Line</p>
                  <p className="text-xs font-black text-white">+251 (977) 666-699</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Hero: Floating Platform Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-2 w-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/35 via-sky-300/30 to-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/4.5] p-2 z-10">
              {/* YomTech Global */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-4%] left-[86%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => window.open('https://yomtechglobal.org/', '_blank')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 backdrop-blur-xl border-3 border-white shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 sm:group-hover:scale-130 group-hover:shadow-[0_22px_50px_rgba(0,180,216,0.85)] group-hover:border-cyan-300 transition-all duration-300">
                  <img src={logoEmblem} alt="YomTech Global" className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-120 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* WabiSkills */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                className="absolute top-[14%] left-[68%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => window.open('https://wabiskills.com/', '_blank')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 backdrop-blur-xl border-3 border-white shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 sm:group-hover:scale-130 group-hover:shadow-[0_22px_50px_rgba(16,185,129,0.85)] group-hover:border-emerald-300 transition-all duration-300">
                  <img src={wabiSkillsLogo} alt="WabiSkills Academy" className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-120 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* Founder & CEO Showcase */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], y: [-2, 2, -2] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-[37%] left-[38%] flex flex-col items-center group cursor-pointer z-30 -translate-x-1/2"
                onClick={() => navigate('/about')}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-[2.6rem] bg-white/95 backdrop-blur-xl border-[4px] border-cyan-300 shadow-[0_25px_70px_rgba(0,180,216,0.9)] p-1.5 flex items-center justify-center overflow-hidden group-hover:scale-125 sm:group-hover:scale-135 group-hover:border-white transition-all duration-300">
                  <img src={ermiTwoImg} alt="Founder & CEO" className="w-full h-full object-cover object-top rounded-[2.2rem] group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-2 right-2 z-20 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-md animate-ping" />
                  <span className="absolute top-2 right-2 z-20 w-4 h-4 rounded-full bg-white border-2 border-cyan-400" />
                </div>
                <div className="mt-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0284C7] text-white text-xs sm:text-sm font-black tracking-wider shadow-xl border border-white group-hover:bg-white group-hover:text-[#0284C7] transition-colors whitespace-nowrap">
                  FOUNDER &amp; CEO
                </div>
              </motion.div>

              {/* WabiJobs */}
              <motion.div
                animate={{ y: [-4, 2, -4] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-[74%] left-[30%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => window.open('https://wabijob.com/', '_blank')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 backdrop-blur-xl border-3 border-white shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 sm:group-hover:scale-130 group-hover:shadow-[0_22px_50px_rgba(245,158,11,0.85)] group-hover:border-amber-300 transition-all duration-300">
                  <img src={wabiJobsLogo} alt="WabiJobs" className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-120 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>

              {/* Yomnex ERP */}
              <motion.div
                animate={{ y: [2, -4, 2] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-[98%] left-[25%] flex flex-col items-center group cursor-pointer z-20 -translate-x-1/2"
                onClick={() => navigate('/products')}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] bg-white/95 backdrop-blur-xl border-3 border-white shadow-[0_12px_32px_rgba(0,180,216,0.5)] p-2 flex items-center justify-center group-hover:scale-125 sm:group-hover:scale-130 group-hover:shadow-[0_22px_50px_rgba(99,102,241,0.85)] group-hover:border-indigo-300 transition-all duration-300">
                  <img src={yomnexLogo} alt="Yomnex ERP" className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-120 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-400 border-2 border-slate-900 shadow-md animate-pulse" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 1.5: WHO WE ARE & CORE VALUES
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          {/* Who We Are & CEO Quote Dual Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Who We Are Card */}
            <div
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="lg:col-span-7 rounded-3xl p-8 sm:p-12 border-2 border-indigo-200/80 shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                  <Building2 className="w-4 h-4 text-[#0284C7]" />
                  <span>WHO WE ARE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                  Pioneering Digital Solutions &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                    Tech Talent Development
                  </span>
                </h2>
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                  At Yomtech Global, we empower businesses, innovators, and learners to thrive in the digital era. From enterprise software to cloud solutions and world-class training, we don’t just deliver technology—we help you create the future.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Founded with a clear vision to overcome inefficient organizational workflows while creating opportunities for talented individuals to build successful tech careers across Africa.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0284C7]" />
                  <span>100% In-House Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0284C7]" />
                  <span>Pan-African Footprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0284C7]" />
                  <span>Public &amp; Enterprise SLAs</span>
                </div>
              </div>
            </div>

            {/* CEO Founder Quote Card */}
            <div className="lg:col-span-5 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] text-white border-2 border-cyan-400/40 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <Quote size={40} className="text-cyan-300 opacity-80" />
                <blockquote className="text-base sm:text-lg font-bold leading-relaxed italic text-cyan-50 font-sans">
                  &ldquo;Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth.&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/20 flex items-center justify-between relative z-10">
                <div>
                  <div className="font-extrabold text-base text-white font-display">Ermias Alemayehu</div>
                  <div className="text-xs text-cyan-200 font-bold uppercase tracking-wider">Founder &amp; Chief Executive Officer</div>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-300 shrink-0 shadow-md">
                  <img src={ermiTwoImg} alt="Ermias Alemayehu CEO" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Matrix */}
          <div className="space-y-8">
            <div className="text-left space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                <Heart className="w-4 h-4 text-[#0284C7]" />
                <span>OUR GUIDING PRINCIPLES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Values</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CORE_VALUES.map((val) => {
                const a = accentMap[val.accent];
                return (
                  <div
                    key={val.title}
                    style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                    className="rounded-2xl p-6 border-2 border-indigo-200/80 shadow-md hover:shadow-lg transition-all space-y-3"
                  >
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                      VALUE
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900 font-display tracking-tight">{val.title}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 2: FEATURED SERVICES
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          {/* Section Header */}
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>Our Core Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Technology Solutions That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                Drive Real Impact
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              From enterprise software to AI-powered infrastructure and world-class training, we deliver end-to-end technology capabilities for government, business, and education.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map((svc) => {
              const a = accentMap[svc.accent];
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group cursor-pointer"
                  onClick={() => navigate('/services')}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                        {svc.tag}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${a.gradient} p-1.5 flex items-center justify-center shadow-md`}>
                        <img src={svc.img} alt={svc.title} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{svc.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Learn More</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${a.gradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 12-Service Full Capabilities Matrix */}
          <div className="pt-10 space-y-6">
            <div className="text-left space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>OFFICIAL SERVICE MATRIX</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
                All 12 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Service Offerings</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {OFFICIAL_SERVICES_LIST.map((item) => (
                <div
                  key={item.name}
                  onClick={() => navigate('/services')}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="text-xs font-black text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">{item.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 3: FEATURED PRODUCTS & PLATFORMS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#03045E] via-[#023E8A] to-[#0077B6] text-white overflow-hidden border-b border-cyan-400/30">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #48cae4 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-[#48cae4]/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-black uppercase tracking-widest">
              <Rocket className="w-4 h-4" />
              <span>Products &amp; Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200">Ecosystem</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-100/80 font-medium leading-relaxed max-w-3xl">
              Scalable digital products across education, employment, enterprise operations, and technology-driven growth — built entirely in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-3xl p-7 bg-gradient-to-br ${prod.gradient} border ${prod.border} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between space-y-5 group cursor-pointer`}
                onClick={() => prod.url ? window.open(prod.url, '_blank') : navigate('/products')}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/95 p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <img src={prod.logo} alt={prod.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <span className={`px-3 py-1 rounded-full ${prod.tagColor} text-slate-950 text-[9px] font-black uppercase tracking-widest`}>
                      {prod.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white font-display tracking-tight">{prod.name}</h3>
                  <p className="text-xs text-white/70 font-medium leading-relaxed">{prod.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-white/40 tracking-wider">
                    {prod.url ? 'Visit Platform' : 'Coming Soon'}
                  </span>
                  {prod.url && (
                    <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <ExternalLink size={14} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore Products CTA */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => navigate('/products')}
              className="px-9 py-4 rounded-full bg-white text-[#03045E] font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore All Products</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 4: SOLUTIONS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Target className="w-4 h-4" />
              <span>Digital Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              End-to-End Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Transformation Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              We deliver comprehensive digital transformation for public sector institutions and enterprises — enabling efficient, transparent, and citizen-focused operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol) => {
              const IconComp = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-7 border-2 border-slate-200/80 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all space-y-4 group cursor-pointer"
                  onClick={() => navigate('/services')}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#0ED3DD] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors tracking-tight">{sol.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{sol.desc}</p>
                  <div className="flex items-center gap-2 text-[#0284C7] text-xs font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 5: INDUSTRIES SERVED
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50 overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-center w-full space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-black uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Trusted Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Critical Sectors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all space-y-4 group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#0ED3DD] flex items-center justify-center text-white shadow-md mx-auto group-hover:scale-110 transition-transform">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-display tracking-tight">{ind.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{ind.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 6: COMPANY STATISTICS & ACHIEVEMENTS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Impact &amp; Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${stat.bg} ${stat.border} ${stat.accent}`}>
                    {stat.badge}
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                  {stat.stat}
                </h3>
                <h4 className={`text-sm font-extrabold ${stat.accent}`}>{stat.subtitle}</h4>
                <p className="text-xs text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 7: FEATURED PROJECTS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects &amp; Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Real-World Impact</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Our portfolio reflects our expertise in building scalable systems, enterprise platforms, and innovative digital products across government, enterprise, and private sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj) => {
              const a = accentMap[proj.accent];
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-7 border-2 border-slate-200/80 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all space-y-4 group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                      {proj.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors tracking-tight">{proj.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{proj.desc}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[10px] font-extrabold uppercase text-[#0284C7] tracking-wider">
                    <CheckCircle2 size={14} />
                    <span>Successfully Delivered</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 8: PARTNERS & CLIENTS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50 overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="text-center w-full space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Handshake className="w-4 h-4" />
              <span>Clients &amp; Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Industry Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
              We collaborate with government institutions, universities, media networks, banks, and enterprises to deliver impactful digital transformation.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {partnerCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPartnerFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  partnerFilter === cat
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white border-transparent shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-[#0284C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredPartners.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                  <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 tracking-tight">{p.name}</h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">{p.fullName}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-[8px] font-black uppercase tracking-wider text-[#0284C7]">
                  {p.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 9: TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-center w-full space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Quote className="w-4 h-4" />
              <span>Testimonials &amp; Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Our Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl p-8 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={32} className="text-[#0284C7] opacity-60" />
                  <p className="text-sm text-slate-700 leading-relaxed italic font-medium">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-sm text-slate-900 font-display">{t.author}</div>
                    <div className="text-xs text-[#0284C7] font-bold">{t.role}</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shadow-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 10: LATEST NEWS & ARTICLES
      ════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Newspaper className="w-4 h-4" />
              <span>Latest News &amp; Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">In Action</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LATEST_NEWS.map((news) => {
              const a = accentMap[news.accent];
              return (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl border-2 border-slate-200/80 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all overflow-hidden group cursor-pointer"
                >
                  {/* Gradient header bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${a.gradient}`} />
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                        {news.category}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                        <Calendar size={11} />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors tracking-tight leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{news.excerpt}</p>
                    <div className="flex items-center gap-2 text-[#0284C7] text-xs font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 11: PRIMARY CALLS TO ACTION
          (Request a Quote · Book a Consultation · Explore Products)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 relative text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-16">

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-[1.5px] rounded-[3.2rem] bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-2xl max-w-5xl mx-auto group"
          >
            <div className="bg-white rounded-[3.1rem] p-10 sm:p-16 text-slate-900 text-center space-y-8 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0ED3DD]/20 via-cyan-100/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              {/* Logo Badge */}
              <div className="flex justify-center relative z-10">
                <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-xl px-5 py-2 flex items-center gap-3 border border-cyan-200">
                    <div className="w-6 h-6 rounded-lg overflow-hidden border border-cyan-300 shrink-0">
                      <img src={logoEmblem} alt="YomTech Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] font-display">
                      ⚡ LET'S BUILD TOGETHER
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
                  Ready to Transform with <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Technology?</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                  Whether you're a government institution, enterprise, or ambitious learner — Yomtech Global is your partner for innovation, digital transformation, and sustainable growth.
                </p>
              </div>

              {/* 3 Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-5 relative z-10 pt-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn"
                >
                  <FileText size={16} />
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:bg-cyan-50/80 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn2"
                >
                  <Calendar size={16} className="text-[#0ED3DD]" />
                  <span>BOOK A CONSULTATION</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate('/products')}
                  className="px-9 py-4 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 flex items-center gap-3 cursor-pointer group/btn3"
                >
                  <Layers size={16} className="text-cyan-300" />
                  <span>EXPLORE PRODUCTS</span>
                </motion.button>
              </div>

              {/* Trust Pills */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-slate-700 text-xs font-bold relative z-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0ED3DD]" />
                  <span>100% Custom-Built Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0ED3DD]" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-[#0ED3DD]" />
                  <span>10+ Years of Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="rounded-3xl p-8 sm:p-10 border-2 border-indigo-200/80 shadow-xl text-center space-y-5"
            >
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900">Subscribe to Our Newsletter</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium">Get the latest tech updates, tutorials, and engineering insights straight to your inbox.</p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <div className="relative w-full">
                  <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                  />
                </div>
                <button type="submit" className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] hover:from-[#0ED3DD] hover:to-[#0284C7] text-white font-bold text-xs md:text-sm shrink-0 shadow-lg transition-all hover:scale-105">
                  Subscribe
                </button>
              </form>
              {newsletterSuccess && <div className="text-xs font-semibold text-[#0284C7]">✓ Thank you for subscribing!</div>}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Floating Bottom-Right Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Link
          to="/contact"
          aria-label="Open Quick Contact"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110"
        >
          <MessageCircle size={22} />
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center hover:border-[#0284C7] hover:text-[#0284C7] shadow-md transition-colors duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
