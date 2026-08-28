import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle2, Phone, Star, Quote, Mail,
  Building2, Globe, Cpu, Monitor, Layers, Award, ShieldCheck,
  TrendingUp, Briefcase, Handshake, Sparkles, Zap, Target,
  GraduationCap, Code, Server, Video, Eye, Lock, Users,
  MessageCircle, ArrowUp, Calendar, FileText, ChevronRight, ChevronLeft,
  Factory, Landmark, Heart, BookOpen, Newspaper, Clock,
  ExternalLink, BarChart3, Rocket, Share2, Play, Lightbulb,
  Search, GitBranch, ClipboardList
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import techEarthGlobe from '../../assets/3d_tech_earth_globe.jpg';
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
import gallery01 from '../../assets/gallery/gallery 01.jpg';
import gallery02 from '../../assets/gallery/gallery 02.jpg';
import gallery04 from '../../assets/gallery/gallery 04.jpg';
import gallery06 from '../../assets/gallery/gallery 06.jpg';
import gallery07 from '../../assets/gallery/gallery 07.jpg';
import gallery09 from '../../assets/gallery/gallery 09.jpg';

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
    icon: GraduationCap, img: educationImg,
    title: 'Online Tech Education & Training',
    desc: 'Through WabiSkills, we provide high-quality IT courses, software bootcamps, and developer training designed to equip students and professionals with market-ready skills.',
    tag: 'ACADEMY', accent: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200'
  },
  {
    icon: Users, img: coachingImg,
    title: 'Tech Coaching & Mentorship',
    desc: 'We mentor developers, technology leaders, and startups, guiding them through modern software engineering practices, system design, and career growth.',
    tag: 'MENTORSHIP', accent: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    icon: Video, img: documentaryImg,
    title: 'Tech Documentary & Media',
    desc: 'Yomtech Media produces tech documentaries, interview series, and innovation stories that highlight technological advancements and digital creators across Africa.',
    tag: 'MEDIA', accent: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    icon: Server, img: cloudImg,
    title: 'Cloud DevOps & Migration',
    desc: 'Design, deploy, and scale zero-downtime cloud infrastructure, automated CI/CD deployment pipelines, and high-concurrency microservice clusters.',
    tag: 'DEVOPS', accent: 'indigo',
    gradient: 'from-indigo-500 to-blue-700',
    badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    icon: BarChart3, img: crmImg,
    title: 'Data Analytics & AI Intelligence',
    desc: 'Transform enterprise operational data into real-time business intelligence dashboards, predictive analytics pipelines, and data-driven insights.',
    tag: 'ANALYTICS', accent: 'teal',
    gradient: 'from-teal-500 to-emerald-600',
    badgeStyle: 'bg-teal-50 text-teal-700 border-teal-200'
  },
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
    role: 'Software Engineer',
    avatar: gallery01,
    badge: 'Verified Graduate'
  },
  {
    quote: "The skills I gained here directly helped me launch my startup. Their fullstack training was world-class.",
    author: 'Michael Lee',
    role: 'Startup Founder',
    avatar: gallery04,
    badge: 'Vetted Founder'
  },
  {
    quote: "Learning analytics with Yomtech was a game changer. I can now turn complex data into actionable insights for my company.",
    author: 'Amina Yusuf',
    role: 'Data Analyst',
    avatar: gallery07,
    badge: 'Enterprise Leader'
  },
  {
    quote: "Yomtech's custom ERP solutions streamlined our entire operations. The team's execution speed and attention to detail were unmatched.",
    author: 'David Chen',
    role: 'CTO & VP Engineering',
    avatar: gallery02,
    badge: 'Enterprise Partner'
  },
  {
    quote: "The cybersecurity bootcamp prepared me for real-world threat hunting. I secured a senior security role within two months.",
    author: 'Tigist Haile',
    role: 'Cybersecurity Specialist',
    avatar: gallery06,
    badge: 'Certified Scholar'
  },
  {
    quote: "From AI architecture to web app deployment, Yomtech delivered our enterprise platform on time and beyond expectations.",
    author: 'Marcus Vance',
    role: 'Product Director',
    avatar: gallery09,
    badge: 'Innovation Lead'
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
    title: 'Software & Systems',
    badge: 'Engineer',
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
    title: 'Infrastructure & Platforms',
    badge: 'Cloud',
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
    title: 'System Protection',
    badge: 'Secure',
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
    title: 'Talent & Mentorship',
    badge: 'Educate',
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
    title: 'Professional Network',
    badge: 'Connect',
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

  // Auto-rotating Testimonials Carousel State
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isTestimonialsPaused, setIsTestimonialsPaused] = useState(false);

  React.useEffect(() => {
    if (isTestimonialsPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isTestimonialsPaused]);

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
    <div className="bg-[#03045E] text-slate-900 min-h-screen relative overflow-x-hidden font-sans">

      {/* ════════════════════════════════════════════════════
          SECTION 01 — EXISTING HERO (Scaled Up & Grander)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-28 md:pb-40 lg:pb-48 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        <div className="max-w-[1850px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 lg:space-y-10 text-left items-start flex flex-col"
          >
            <div className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs sm:text-sm font-black shadow-xl">
              <Sparkles size={16} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[12px] sm:text-xs">
                TECHNOLOGY · ENTERPRISE · INNOVATION · TALENT
              </span>
            </div>

            <div className="space-y-4 font-roboto font-black tracking-tight leading-[1.05]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-white font-roboto font-extrabold">
                Yomtech Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Connected Technology Ecosystem
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg xl:text-xl leading-relaxed font-normal max-w-3xl font-sans">
              At Yomtech Global, we empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology, we build the future.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-3 w-full">
              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto px-5 py-3.5 sm:px-6 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 group border border-cyan-300/40 shrink-0"
              >
                <span>Explore Services</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={13} />
                </div>
              </button>

              <button
                onClick={() => window.open('https://wabiskills.com/', '_blank')}
                className="w-full sm:w-auto px-5 py-3.5 sm:px-6 rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-600/30 to-cyan-500/25 hover:from-cyan-400/40 hover:to-blue-500/40 border-2 border-cyan-300/70 text-white font-black text-xs uppercase tracking-wider backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-cyan-500/20 group shrink-0"
                title="Visit WabiSkills Academy"
              >
                <div className="w-6 h-6 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <img src={wabiSkillsLogo} alt="WabiSkills" className="w-full h-full object-contain" />
                </div>
                <span>WabiSkills Academy</span>
              </button>

              <a
                href="tel:+251977666699"
                className="w-full sm:w-auto px-4 py-3 sm:px-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-wider backdrop-blur-md hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md shrink-0"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-md shrink-0">
                  <Phone size={13} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[9px] text-cyan-200 font-bold uppercase">Direct Desk</div>
                  <div className="text-xs font-black text-white">+251 (977) 666-699</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Grand 3D Holographic Tech Earth Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative py-4 w-full min-h-[300px] sm:min-h-[450px] lg:min-h-[520px] xl:min-h-[600px]"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-xl xl:max-w-[640px] aspect-square p-2 z-10 flex items-center justify-center mx-auto">

              {/* Glowing Background Radial Halo */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-500/35 via-blue-600/25 to-sky-400/45 blur-3xl" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/35 animate-ping opacity-25" />

              {/* Outer Tilted 3D Orbital Glow Ring 1 */}
              <div className="absolute inset-[-60px] z-10 pointer-events-none [transform-style:preserve-3d] [transform:rotateX(68deg)_rotateY(-18deg)]">
                <motion.div
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full border-2 border-solid border-cyan-400/60 shadow-[0_0_40px_rgba(14,211,221,0.5)]"
                />
              </div>

              {/* Outer Tilted 3D Orbital Glow Ring 2 (Counter-rotate) */}
              <div className="absolute inset-[-35px] z-10 pointer-events-none [transform-style:preserve-3d] [transform:rotateX(62deg)_rotateY(15deg)]">
                <motion.div
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full border border-solid border-blue-400/50"
                />
              </div>

              {/* Main 3D Floating Earth Globe Sphere */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[90%] h-[90%] rounded-full shadow-[0_0_120px_rgba(14,211,221,0.75)] border-3 border-cyan-300/70 bg-slate-950 group flex items-center justify-center z-15"
              >
                <img
                  src={techEarthGlobe}
                  alt="YomTech Global Ecosystem Earth"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-700 mix-blend-screen opacity-90"
                />

                {/* Inner Glass Lens Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/20 pointer-events-none rounded-full" />

                {/* ═════════════════════════════════════════════════════════
                    CENTRAL 3D EXPERT YOMTECH CORE LOGO EMBLEM (PROMINENT & BOLD)
                ═════════════════════════════════════════════════════════ */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center z-30 pointer-events-auto group cursor-pointer [perspective:1000px]"
                  title="Yomtech Global | Central Technology Core"
                >
                  {/* Outer Pulsing Cyan Atmosphere */}
                  <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-cyan-400/40 blur-2xl animate-pulse" />
                  
                  {/* Rotating Tech Border Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute w-30 h-30 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-cyan-300/90 shadow-[0_0_35px_rgba(14,211,221,0.85)]"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-dashed border-blue-400/80"
                  />

                  {/* 3D Glass Lens YomTech Emblem Sphere (Always Facing Forward with 3D Holographic Tilt) */}
                  <motion.div
                    animate={{
                      rotateY: [-15, 15, -15],
                      rotateX: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 sm:border-3 border-white bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-4 shadow-[0_0_75px_rgba(14,211,221,0.95)] backdrop-blur-2xl flex items-center justify-center group-hover:scale-115 transition-transform duration-500 [transform-style:preserve-3d]"
                  >
                    <img
                      src={logoEmblem}
                      alt="YomTech Global Core"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(14,211,221,0.95)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-white/40 pointer-events-none rounded-full" />
                  </motion.div>
                </motion.div>

              </motion.div>

              {/* ═════════════════════════════════════════════════════════
                  360-DEGREE LARGE PLANETARY ORBIT REVOLUTION
              ═════════════════════════════════════════════════════════ */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-15px] sm:inset-[-25px] z-20 pointer-events-none rounded-full"
              >

                {/* Planet 1 — WabiSkills (0° — Right) */}
                <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    onClick={() => window.open('https://wabiskills.com/', '_blank')}
                    title="WabiSkills Academy"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-white p-2 shadow-[0_0_30px_rgba(14,211,221,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        <img src={wabiSkillsLogo} alt="WabiSkills" className="w-full h-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Planet 2 — WabiJob (60° — Bottom Right) */}
                <div className="absolute bottom-[5%] right-[6%]">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    onClick={() => window.open('https://wabijob.com/', '_blank')}
                    title="WabiJob Network"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-white p-2 shadow-[0_0_30px_rgba(59,130,246,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        <img src={wabiJobsLogo} alt="WabiJob" className="w-full h-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Planet 3 — YomNex ERP (120° — Bottom Left) */}
                <div className="absolute bottom-[5%] left-[6%]">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    title="YomNex ERP Suite"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-white p-2 shadow-[0_0_30px_rgba(14,165,233,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        <img src={yomnexLogo} alt="YomNex" className="w-full h-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Planet 4 — YomTech Media (180° — Left) */}
                <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    title="YomTech Media"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-300" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 13, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-[#0284C7] p-2.5 text-white shadow-[0_0_30px_rgba(2,132,199,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        <Video size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Planet 5 — WabX (240° — Top Left) */}
                <div className="absolute top-[5%] left-[6%]">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    title="WabX Platform"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 11, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white font-black text-2xl shadow-[0_0_30px_rgba(99,102,241,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        W
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Planet 6 — Meri (300° — Top Right) */}
                <div className="absolute top-[5%] right-[6%]">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-auto flex items-center justify-center [perspective:1000px] group cursor-pointer"
                    title="Meri Platform"
                  >
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-400" />
                      <motion.div animate={{ rotateY: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="relative flex h-14 w-14 sm:h-17 sm:w-17 items-center justify-center rounded-full border-2 border-white bg-fuchsia-500 text-white p-2.5 shadow-[0_0_30px_rgba(217,70,239,0.95)] group-hover:scale-125 transition-transform [transform-style:preserve-3d]">
                        <Heart size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>

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
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                <Building2 size={16} className="text-[#0284C7]" />
                <span>Architecting Digital Excellence</span>
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
        customDescription="Yomtech Global was founded with a clear vision: to empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology, we help you create the future."
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
              <div className="px-6 py-2 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -ml-[1px]">
                <span className="text-[10px] text-[#0284C7]">◆</span>
                <span>Yomtech Global Ecosystem</span>
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
                          <span className="text-[11px] font-mono text-slate-400 font-bold">Node #{pillar.number}</span>
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

                  {/* Background Watermark YomTech Logo */}
                  <div className="absolute -right-6 -bottom-6 w-64 h-64 opacity-[0.28] pointer-events-none z-0">
                    <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                  </div>

                  {/* Header Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-[#0284C7]">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                        <span className="font-bold">Node {ECOSYSTEM_PILLARS[activeEcosystemTab].number} // Online</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider bg-[#0284C7] text-white shadow-xs">
                        {ECOSYSTEM_PILLARS[activeEcosystemTab].badge}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-slate-500 font-bold flex items-center gap-2">
                      <Zap size={14} className="text-[#0284C7]" />
                      <span>Connected to Yomtech Backbone</span>
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
                      Integrated under Yomtech Global Parent Network
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
                <span>Engineering Capability Matrix</span>
                <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
            </div>

            <div className="text-left space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
                We Build. We Engineer. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-sky-300">
                  We Support. We Teach.
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

                  {/* Background Watermark YomTech Logo */}
                  <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-[0.28] pointer-events-none z-0">
                    <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                  </div>

                  <div className="space-y-4 pt-1 relative z-10">
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

                  <div className="pt-4 border-t border-slate-100 relative z-10">
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
                    {/* Background Watermark YomTech Logo */}
                    <div className="absolute -right-3 -bottom-3 w-28 h-28 opacity-[0.25] pointer-events-none z-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>

                    {/* Service Image Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 border border-cyan-200 p-2 shadow-2xs group-hover/card:scale-110 group-hover/card:bg-cyan-100 group-hover/card:border-cyan-300 transition-all duration-300 flex items-center justify-center shrink-0 relative z-10">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="space-y-1 w-full relative z-10">
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
                    {/* Background Watermark YomTech Logo */}
                    <div className="absolute -right-3 -bottom-3 w-28 h-28 opacity-[0.25] pointer-events-none z-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>

                    {/* Service Image Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-50/80 border border-cyan-200 p-2 shadow-2xs group-hover/card:scale-110 group-hover/card:bg-cyan-100 group-hover/card:border-cyan-300 transition-all duration-300 flex items-center justify-center shrink-0 relative z-10">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="space-y-1 w-full relative z-10">
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
                <span>Measured Ecosystem Impact</span>
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
                className="bg-white/95 backdrop-blur-xl border-2 border-slate-100/90 hover:border-cyan-300 rounded-3xl p-6 text-center space-y-2 hover:shadow-lg transition-all shadow-xs relative overflow-hidden"
              >
                {/* Logo Watermark Background */}
                <img
                  src={logoEmblem}
                  alt=""
                  className="absolute bottom-2 right-2 w-20 h-20 object-contain opacity-[0.28] pointer-events-none select-none"
                  aria-hidden="true"
                />
                <span className="text-3xl sm:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] block relative z-10">
                  {st.stat}
                </span>
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider relative z-10">{st.label}</p>
                <p className="text-[10px] font-bold text-slate-500 relative z-10">{st.subtitle}</p>
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
                <span>Two Sides of One Ecosystem</span>
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
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-indigo-200 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              {/* Background Watermark YomTech Logo */}
              <div className="absolute -right-6 -bottom-6 w-56 h-56 opacity-[0.28] pointer-events-none z-0">
                <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
              </div>

              <div className="space-y-4 relative z-10">
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

              <div className="pt-4 border-t border-slate-100 relative z-10">
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
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-200 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              {/* Background Watermark YomTech Logo */}
              <div className="absolute -right-6 -bottom-6 w-56 h-56 opacity-[0.28] pointer-events-none z-0">
                <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
              </div>

              <div className="space-y-4 relative z-10">
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

              <div className="pt-4 border-t border-slate-100 relative z-10">
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
          SECTION 12 — DEVELOPMENT LIFECYCLE & PROCESS (S-CURVE INFOGRAPHIC)
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
                From initial requirement discovery to zero-downtime production deployment, our 5-phase engineering roadmap built for reliability and scale.
              </p>
            </div>
          </div>

          {/* ─── S-CURVE SNAKE RIBBON INFOGRAPHIC ─── */}
          <div className="py-8 px-4 sm:px-12 relative overflow-hidden">

            {/* Top Left Header Banner */}
            <div className="absolute top-10 left-0 hidden lg:block z-20">
              <div className="px-8 py-6 rounded-r-3xl bg-cyan-50/95 border-y border-r border-cyan-300 border-l-[8px] border-l-[#0284C7] text-slate-900 shadow-xl max-w-md backdrop-blur-md relative overflow-hidden space-y-2">
                {/* Background Watermark YomTech Logo */}
                <div className="absolute -right-4 -bottom-4 w-44 h-44 opacity-[0.38] pointer-events-none z-0">
                  <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                </div>

                <div className="relative z-10 space-y-2">
                  <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#0284C7]">FIVE STEPS</p>
                  <h4 className="text-base sm:text-lg md:text-xl font-black font-display uppercase tracking-wider text-slate-950 leading-tight">
                    FROM CHALLENGE TO DIGITAL IMPACT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pt-2 border-t border-cyan-200/80">
                    A structured engineering process that transforms complex business challenges into reliable, scalable, and future-ready technology solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative max-w-7xl mx-auto py-8">

              {/* Single Continuous 1-Piece Snake Ribbon SVG Overlay (Fluid Responsive Water Stream) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[140px] sm:w-[320px] md:w-[480px] pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 460 900" fill="none" preserveAspectRatio="none">
                  {/* Arc 1 (Purple - Left Loop) */}
                  <path d="M 230 0 A 140 140 0 0 0 230 180" stroke="#7C3AED" strokeWidth="48" strokeLinecap="round" fill="none" />
                  <path d="M 230 0 A 140 140 0 0 0 230 180" stroke="rgba(255,255,255,0.75)" strokeWidth="14" strokeLinecap="round" className="animate-scurve-water" fill="none" />
                  <path d="M 230 0 A 140 140 0 0 0 230 180" stroke="#C4B5FD" strokeWidth="5" strokeLinecap="round" className="animate-scurve-water" fill="none" />

                  {/* Arc 2 (Blue - Right Loop) */}
                  <path d="M 230 180 A 140 140 0 0 1 230 360" stroke="#0284C7" strokeWidth="48" strokeLinecap="round" fill="none" />
                  <path d="M 230 180 A 140 140 0 0 1 230 360" stroke="rgba(255,255,255,0.75)" strokeWidth="14" strokeLinecap="round" className="animate-scurve-water-reverse" fill="none" />
                  <path d="M 230 180 A 140 140 0 0 1 230 360" stroke="#7DD3FC" strokeWidth="5" strokeLinecap="round" className="animate-scurve-water-reverse" fill="none" />

                  {/* Arc 3 (Green - Left Loop) */}
                  <path d="M 230 360 A 140 140 0 0 0 230 540" stroke="#059669" strokeWidth="48" strokeLinecap="round" fill="none" />
                  <path d="M 230 360 A 140 140 0 0 0 230 540" stroke="rgba(255,255,255,0.75)" strokeWidth="14" strokeLinecap="round" className="animate-scurve-water" fill="none" />
                  <path d="M 230 360 A 140 140 0 0 0 230 540" stroke="#6EE7B7" strokeWidth="5" strokeLinecap="round" className="animate-scurve-water" fill="none" />

                  {/* Arc 4 (Orange - Right Loop) */}
                  <path d="M 230 540 A 140 140 0 0 1 230 720" stroke="#D97706" strokeWidth="48" strokeLinecap="round" fill="none" />
                  <path d="M 230 540 A 140 140 0 0 1 230 720" stroke="rgba(255,255,255,0.75)" strokeWidth="14" strokeLinecap="round" className="animate-scurve-water-reverse" fill="none" />
                  <path d="M 230 540 A 140 140 0 0 1 230 720" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" className="animate-scurve-water-reverse" fill="none" />

                  {/* Arc 5 (Pink - Left Loop) */}
                  <path d="M 230 720 A 140 140 0 0 0 230 900" stroke="#DB2777" strokeWidth="48" strokeLinecap="round" fill="none" />
                  <path d="M 230 720 A 140 140 0 0 0 230 900" stroke="rgba(255,255,255,0.75)" strokeWidth="14" strokeLinecap="round" className="animate-scurve-water" fill="none" />
                  <path d="M 230 720 A 140 140 0 0 0 230 900" stroke="#FBCFE8" strokeWidth="5" strokeLinecap="round" className="animate-scurve-water" fill="none" />
                </svg>
              </div>

              {/* UNIFIED RESPONSIVE S-CURVE STEPS (PRESERVING EXACT DESIGN ON ALL DEVICES) */}
              <div className="flex flex-col justify-between min-h-[750px] sm:min-h-[900px] md:min-h-[1050px] space-y-6 sm:space-y-10 md:space-y-0 relative z-10 w-full">
                {[
                  {
                    step: '01',
                    title: 'DISCOVER & PLAN THE CHALLENGE',
                    subtitle: 'Understand Before We Engineer.',
                    side: 'right',
                    desc: 'We begin with in-depth requirement analysis, tech stack selection, scope definition, and structural architecture planning to understand your organization, users, workflows, and long-term objectives.',
                    focusAreas: [
                      'Business & workflow analysis',
                      'Tech stack & scope definition',
                      'User & stakeholder requirements',
                      'Structural architecture planning',
                    ],
                    icon: Search,
                    color: '#7C3AED',
                    lineColor: 'from-purple-600 via-purple-400 to-indigo-600',
                    badgeBg: 'bg-purple-600 text-white',
                    textColor: 'text-purple-900',
                  },
                  {
                    step: '02',
                    title: 'STRATEGIZE, DESIGN & ARCHITECT',
                    subtitle: 'Turn Insight Into a Clear Technology Blueprint.',
                    side: 'left',
                    desc: 'Our engineers transform requirements into high-performance microservices architecture designs, REST/GraphQL API specifications, intuitive UI/UX wireframes, and actionable implementation roadmaps.',
                    focusAreas: [
                      'Solution strategy & UX planning',
                      'Microservices & software architecture',
                      'REST & GraphQL API specifications',
                      'UI/UX wireframing & tech selection',
                    ],
                    icon: Eye,
                    color: '#0284C7',
                    lineColor: 'from-sky-600 via-cyan-400 to-blue-600',
                    badgeBg: 'bg-[#0284C7] text-white',
                    textColor: 'text-sky-900',
                  },
                  {
                    step: '03',
                    title: 'ENGINEER & BUILD THE SOLUTION',
                    subtitle: 'Build Technology That Works in the Real World.',
                    side: 'right',
                    desc: 'We design and develop scalable digital products using test-driven development, agile sprint execution, clean modular codebases, reliable APIs, secure systems, and robust database optimization.',
                    focusAreas: [
                      'Enterprise software, web & mobile',
                      'Test-driven & agile sprint execution',
                      'Clean modular code & API integration',
                      'Database optimization & cloud architecture',
                    ],
                    icon: ClipboardList,
                    color: '#059669',
                    lineColor: 'from-emerald-600 via-teal-400 to-green-600',
                    badgeBg: 'bg-emerald-600 text-white',
                    textColor: 'text-emerald-900',
                  },
                  {
                    step: '04',
                    title: 'VALIDATE, SECURE & TEST',
                    subtitle: 'Ensure Quality Before It Creates Impact.',
                    side: 'left',
                    desc: 'Every solution undergoes end-to-end security penetration testing, sub-50ms latency performance tuning, and comprehensive QA audits across functionality, usability, and reliability prior to deployment.',
                    focusAreas: [
                      'Quality assurance & QA audits',
                      'Sub-50ms latency performance tuning',
                      'Security validation & penetration testing',
                      'Deployment & cloud infrastructure',
                    ],
                    icon: Cpu,
                    color: '#D97706',
                    lineColor: 'from-amber-600 via-yellow-400 to-orange-600',
                    badgeBg: 'bg-amber-600 text-white',
                    textColor: 'text-amber-950',
                  },
                  {
                    step: '05',
                    title: 'DEPLOY, EVOLVE & SCALE',
                    subtitle: 'Technology Should Keep Moving Forward.',
                    side: 'right',
                    desc: 'Our work extends beyond launch with automated CI/CD pipeline deployment, zero-downtime releases, real-time APM monitoring, 24/7 SLA support, and continuous system scaling as business needs evolve.',
                    focusAreas: [
                      'Continuous improvement & SLA support',
                      'Automated CI/CD & zero-downtime launch',
                      'Real-time APM monitoring',
                      'System scaling & future innovation',
                    ],
                    icon: Star,
                    color: '#DB2777',
                    lineColor: 'from-pink-600 via-rose-400 to-fuchsia-600',
                    badgeBg: 'bg-pink-600 text-white',
                    textColor: 'text-pink-950',
                  },
                ].map((item, idx) => {
                  const StepIcon = item.icon;
                  const isRight = item.side === 'right';

                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-center w-full z-10 py-2 sm:py-4 md:py-6"
                    >
                      {/* LEFT PANEL */}
                      <div className="flex-1 flex justify-end pr-1.5 sm:pr-4 md:pr-12 min-w-0">
                        {!isRight && (
                          <div className="space-y-1 sm:space-y-2 md:space-y-3 w-full max-w-xl text-left group">
                            {/* Title + Far Left Icon Badge Row */}
                            <div className="flex items-center justify-between gap-1.5 sm:gap-4">
                              <motion.div 
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                transition={{ duration: 0.4 }}
                                className={`w-8 h-8 sm:w-16 sm:h-16 md:w-22 md:h-22 rounded-full ${item.badgeBg} flex items-center justify-center shadow-lg border-2 sm:border-4 border-white shrink-0 z-10 cursor-pointer`}
                              >
                                <StepIcon className="w-4 h-4 sm:w-7 sm:h-7 md:w-9 md:h-9" />
                              </motion.div>
                              <div className="text-right min-w-0 flex-1">
                                <h4 className={`text-[11px] sm:text-base md:text-2xl font-black font-display uppercase tracking-wider ${item.textColor} leading-tight truncate sm:whitespace-normal`}>
                                  {item.title}
                                </h4>
                                {item.subtitle && (
                                  <p className="text-[9px] sm:text-xs md:text-sm font-extrabold text-slate-800 italic mt-0.5 line-clamp-1">{item.subtitle}</p>
                                )}
                              </div>
                            </div>

                            {/* Horizontal Colored Connector Line with Water Flow */}
                            <div className={`h-[3px] sm:h-[5px] md:h-[6px] w-full bg-gradient-to-r ${item.lineColor} rounded-full relative overflow-hidden shadow-xs`}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-water-flow-left" />
                            </div>

                            {/* Description Paragraph Below Line */}
                            <p className="text-[9.5px] sm:text-xs md:text-base text-slate-700 font-medium leading-snug sm:leading-relaxed text-left max-w-md sm:max-w-lg line-clamp-3 sm:line-clamp-none">
                              {item.desc}
                            </p>

                            {/* Focus Areas List */}
                            {item.focusAreas && (
                              <div className="pt-1.5 sm:pt-3 border-t border-slate-300/70 mt-1.5 sm:mt-3 space-y-1">
                                <p className="text-[9px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-slate-900 hidden sm:block">Focus Areas:</p>
                                <ul className="grid grid-cols-1 gap-1 text-[8.5px] sm:text-xs md:text-sm font-semibold text-slate-700">
                                  {item.focusAreas.map((area, i) => (
                                    <li key={i} className="flex items-center gap-1.5 sm:gap-2.5">
                                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 shadow-2xs" style={{ background: item.color }} />
                                      <span className="truncate">{area}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* CENTER PURE WHITE STEP CIRCLE BADGE (FLUID RESPONSIVE SIZE) */}
                      <div className="relative shrink-0 z-20 mx-1 sm:mx-6 md:mx-12 flex items-center justify-center">
                        {/* Rotating Conic Gradient Glow */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                          className="absolute -inset-2 sm:-inset-4 rounded-full opacity-70 blur-xs sm:blur-lg pointer-events-none"
                          style={{ background: `conic-gradient(from 0deg, ${item.color}, transparent 60%, ${item.color})` }}
                        />

                        {/* Pure White Step Circle */}
                        <motion.div 
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.15)] sm:shadow-[0_25px_60px_rgba(0,0,0,0.2)] border-2 sm:border-4 border-white flex flex-col items-center justify-center relative z-10 cursor-pointer"
                        >
                          <span className="text-[7px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 leading-none">
                            STEP
                          </span>
                          <span className="text-xl sm:text-5xl md:text-8xl font-black font-display tracking-tight leading-none mt-0.5" style={{ color: item.color }}>
                            {item.step}
                          </span>
                        </motion.div>
                      </div>

                      {/* RIGHT PANEL */}
                      <div className="flex-1 flex justify-start pl-1.5 sm:pl-4 md:pl-12 min-w-0">
                        {isRight && (
                          <div className="space-y-1 sm:space-y-2 md:space-y-3 w-full max-w-xl group text-left">
                            {/* Title + Subtitle + Far End Icon Badge Row */}
                            <div className="flex items-center justify-between gap-1.5 sm:gap-4">
                              <div className="min-w-0 flex-1">
                                <h4 className={`text-[11px] sm:text-base md:text-2xl font-black font-display uppercase tracking-wider ${item.textColor} leading-tight truncate sm:whitespace-normal`}>
                                  {item.title}
                                </h4>
                                {item.subtitle && (
                                  <p className="text-[9px] sm:text-xs md:text-sm font-extrabold text-slate-800 italic mt-0.5 line-clamp-1">{item.subtitle}</p>
                                )}
                              </div>
                              <motion.div 
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                transition={{ duration: 0.4 }}
                                className={`w-8 h-8 sm:w-16 sm:h-16 md:w-22 md:h-22 rounded-full ${item.badgeBg} flex items-center justify-center shadow-lg border-2 sm:border-4 border-white shrink-0 z-10 cursor-pointer`}
                              >
                                <StepIcon className="w-4 h-4 sm:w-7 sm:h-7 md:w-9 md:h-9" />
                              </motion.div>
                            </div>

                            {/* Horizontal Colored Connector Line with Water Flow */}
                            <div className={`h-[3px] sm:h-[5px] md:h-[6px] w-full bg-gradient-to-r ${item.lineColor} rounded-full relative overflow-hidden shadow-xs`}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-water-flow-left" />
                            </div>

                            {/* Description Paragraph Below Line */}
                            <p className="text-[9.5px] sm:text-xs md:text-base text-slate-700 font-medium leading-snug sm:leading-relaxed text-left max-w-md sm:max-w-lg line-clamp-3 sm:line-clamp-none">
                              {item.desc}
                            </p>

                            {/* Focus Areas List */}
                            {item.focusAreas && (
                              <div className="pt-1.5 sm:pt-3 border-t border-slate-300/70 mt-1.5 sm:mt-3 space-y-1">
                                <p className="text-[9px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-slate-900 hidden sm:block">Focus Areas:</p>
                                <ul className="grid grid-cols-1 gap-1 text-[8.5px] sm:text-xs md:text-sm font-semibold text-slate-700">
                                  {item.focusAreas.map((area, i) => (
                                    <li key={i} className="flex items-center gap-1.5 sm:gap-2.5">
                                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 shadow-2xs" style={{ background: item.color }} />
                                      <span className="truncate">{area}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

            {/* ─── 4 HORIZONTAL PHASE CARDS ─── */}
            <div className="pt-16 max-w-[1650px] mx-auto space-y-10">
              
              {/* Phase Cards Section Header */}
              <div className="space-y-5 text-left">
                <div className="flex items-center justify-start w-full">
                  <div className="px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                    <span className="text-[10px] text-[#0284C7]">◆</span>
                    <span>FOUR-PHASE EXECUTION FRAMEWORK</span>
                    <span className="text-[10px] text-[#0284C7]">◆</span>
                  </div>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
                </div>

                <div className="space-y-3 max-w-3xl">
                  <h3 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight leading-tight">
                    Building Technology That Scales for Tomorrow.
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                    Our four-phase engineering framework ensures every line of code, microservices architecture, and cloud database is engineered for reliability, security, and long-term business impact.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {[
                {
                  badge: 'STRATEGY', phase: 'PHASE 01', phaseSub: 'ARCHITECTURE FIRST',
                  title: 'Discovery & Scope',
                  desc: 'Comprehensive domain requirement discovery, tech stack benchmarking, risk assessment, and structural blueprint planning.',
                  deliverables: ['Requirement Analysis', 'Tech Stack Choice', 'Risk & Security Audit', 'Architectural Roadmap'],
                  icon: Search, gradient: 'from-[#EFF6FF] via-[#F8FAFC] to-[#E0F2FE]',
                  badgeColor: 'text-[#0284C7] bg-cyan-100/80 border-cyan-300',
                  iconBg: 'bg-gradient-to-br from-[#0284C7] to-[#0ED3DD] text-white shadow-lg shadow-cyan-500/20',
                  phaseColor: 'text-[#0284C7]',
                  borderHover: 'hover:border-cyan-400',
                  topLine: 'from-[#0284C7] to-[#0ED3DD]',
                },
                {
                  badge: 'DESIGN', phase: 'PHASE 02', phaseSub: 'MODULAR INTEGRATION',
                  title: 'System Architecture',
                  desc: 'High-performance microservices specification, REST & GraphQL API contracts, database schema models, and UI/UX wireframes.',
                  deliverables: ['Microservices Spec', 'REST & GraphQL APIs', 'DB Schema & Caching', 'UI/UX Wireframing'],
                  icon: Layers, gradient: 'from-[#ECFDF5] via-[#F8FAFC] to-[#D1FAE5]',
                  badgeColor: 'text-emerald-700 bg-emerald-100/80 border-emerald-300',
                  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20',
                  phaseColor: 'text-emerald-700',
                  borderHover: 'hover:border-emerald-400',
                  topLine: 'from-emerald-500 to-teal-500',
                },
                {
                  badge: 'BUILD', phase: 'PHASE 03', phaseSub: 'ZERO DOWNTIME',
                  title: 'Agile Engineering',
                  desc: 'Test-driven sprint execution, clean modular codebase development, sub-50ms query tuning, and automated CI/CD pipelines.',
                  deliverables: ['TDD Sprint Execution', 'Clean Modular Code', 'Query & Latency Tuning', 'Automated CI/CD Build'],
                  icon: Code, gradient: 'from-[#F5F3FF] via-[#F8FAFC] to-[#EDE9FE]',
                  badgeColor: 'text-purple-700 bg-purple-100/80 border-purple-300',
                  iconBg: 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20',
                  phaseColor: 'text-purple-700',
                  borderHover: 'hover:border-purple-400',
                  topLine: 'from-purple-600 to-indigo-600',
                },
                {
                  badge: 'IMPACT', phase: 'PHASE 04', phaseSub: 'MEASURABLE IMPACT',
                  title: 'Deployment & Scale',
                  desc: 'Zero-downtime production deployment, real-time APM monitoring, 24/7 SLA technical support, and continuous capacity building.',
                  deliverables: ['Zero-Downtime Launch', 'Real-Time APM Logs', '24/7 SLA Technical Desk', 'System Scale Evolution'],
                  icon: TrendingUp, gradient: 'from-[#FFF7ED] via-[#F8FAFC] to-[#FFEDD5]',
                  badgeColor: 'text-orange-800 bg-amber-100/80 border-amber-300',
                  iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20',
                  phaseColor: 'text-orange-700',
                  borderHover: 'hover:border-orange-400',
                  topLine: 'from-amber-500 to-orange-600',
                },
              ].map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative rounded-[2rem] p-8 sm:p-9 bg-gradient-to-br ${card.gradient} border-2 border-slate-200/90 ${card.borderHover} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[360px] group overflow-hidden`}
                  >
                    {/* Top Color Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.topLine}`} />

                    {/* Background Watermark YomTech Logo */}
                    <div className="absolute -right-5 -bottom-5 w-44 h-44 opacity-[0.32] pointer-events-none z-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>

                    {/* Top Row: badge + icon */}
                    <div className="flex items-start justify-between mb-5 relative z-10">
                      <div>
                        <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${card.badgeColor} inline-block mb-1 shadow-xs`}>
                          {card.badge}
                        </span>
                        <p className={`text-xs font-black uppercase tracking-widest ${card.phaseColor}`}>{card.phase}</p>
                      </div>
                      <div className={`w-14 h-14 rounded-2xl border-2 border-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform ${card.iconBg}`}>
                        <CardIcon size={26} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3 relative z-10 my-2">
                      <h3 className="text-2xl font-black text-slate-900 font-display leading-tight">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{card.desc}</p>
                      
                      {/* Deliverables Bullet Points */}
                      <div className="pt-2 border-t border-slate-300/60 space-y-1.5">
                        {card.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-300/70 relative z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{card.phaseSub}</span>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-1.5 transition-all" />
                    </div>
                  </motion.div>
                );
              })}
              </div>
            </div>

          {/* ─── DUAL CTA CARDS ─── */}
          <div className="pt-16 max-w-[1650px] mx-auto space-y-10">

            {/* Dual CTA Section Header */}
            <div className="space-y-5 text-left">
              <div className="flex items-center justify-start w-full">
                <div className="px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xs shrink-0 z-10 -mr-[1px]">
                  <span className="text-[10px] text-[#0284C7]">◆</span>
                  <span>Engage with Yomtech Global</span>
                  <span className="text-[10px] text-[#0284C7]">◆</span>
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-transparent" />
              </div>

              <div className="space-y-3 max-w-3xl">
                <h3 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight leading-tight">
                  Tailored Engineering Solutions for Organizations &amp; Talent.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  Whether you are an enterprise seeking custom ERP systems and cloud transformation or an ambitious developer expanding your technology career, Yomtech Global delivers the platform for your growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* FOR ORGANIZATIONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-[#EBF3FC] via-white to-[#DBEAFE] border-2 border-cyan-300 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 md:p-11 text-left space-y-5 sm:space-y-6 shadow-2xl hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Watermark YomTech Logo */}
              <div className="absolute -right-8 -bottom-8 w-56 h-56 opacity-[0.38] pointer-events-none z-0">
                <img src={logoEmblem} alt="Yomtech Emblem" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-cyan-100/90 text-[#0284C7] border border-cyan-300 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] inline-block shadow-xs">
                    FOR ORGANIZATIONS &amp; ENTERPRISE
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-700 bg-white/90 px-2.5 sm:px-3.5 py-1 rounded-full border border-cyan-200 shadow-xs">24-HOUR PROPOSAL DESK</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 shadow-xl border-2 border-cyan-200/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img src={yomnexLogo} alt="YomNex Enterprise Platform" className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display leading-tight">Start a Technology Conversation</h3>
                    <p className="text-[10px] sm:text-xs text-[#0284C7] font-extrabold uppercase tracking-wider mt-1">YOMNEX ENTERPRISE &amp; CUSTOM SOFTWARE</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Consult with Yomtech Global's senior software architects to engineer custom ERPs, cloud platforms, AI workflows, or modern surveillance systems.
                </p>

                {/* Organization Value List */}
                <div className="space-y-2.5 py-3 border-y border-cyan-200/90">
                  {[
                    'Custom Enterprise ERP, CRM & WMS Engineering',
                    'Zero-Downtime Cloud Migration & Microservices',
                    'Dedicated Engineering Squad & 24/7 SLA Support',
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                      <div className="w-4.5 h-4.5 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{val}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0077B6] to-[#0ED3DD] text-white hover:opacity-95 font-black text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer group/btn"
                >
                  <span>Request Enterprise Proposal</span>
                  <ArrowRight size={22} strokeWidth={2.5} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* FOR INDIVIDUALS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#E6F7F3] via-white to-[#D1FAE5] border-2 border-emerald-300 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 md:p-11 text-left space-y-5 sm:space-y-6 shadow-2xl hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Watermark YomTech Logo */}
              <div className="absolute -right-8 -bottom-8 w-56 h-56 opacity-[0.38] pointer-events-none z-0">
                <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-300 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] inline-block shadow-xs">
                    FOR INDIVIDUALS &amp; DEVELOPERS
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-700 bg-white/90 px-2.5 sm:px-3.5 py-1 rounded-full border border-emerald-200 shadow-xs">2,000+ ALUMNI NETWORK</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 shadow-xl border-2 border-emerald-200/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img src={wabiSkillsLogo} alt="WabiSkills Academy" className="max-w-full max-h-full object-contain filter drop-shadow-xs" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display leading-tight">Start Building Your Future</h3>
                    <p className="text-[10px] sm:text-xs text-emerald-700 font-extrabold uppercase tracking-wider mt-1">WABISKILLS ACADEMY &amp; WABIJOBS NETWORK</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Enroll in WabiSkills bootcamps, master fullstack development, build real-world software portfolios, and get placed via the WabiJobs network.
                </p>

                {/* Individual Value List */}
                <div className="space-y-2.5 py-3 border-y border-emerald-200/90">
                  {[
                    'Practical Fullstack & Cloud Engineering Bootcamps',
                    'Direct Mentorship from Senior Tech Leads',
                    'Automated Vetted Developer Placement via WabiJobs',
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{val}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/academy')}
                  className="w-full py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white hover:opacity-95 font-black text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer group/btn"
                >
                  <span>Explore Academy Courses</span>
                  <ArrowRight size={22} strokeWidth={2.5} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>


      {/* ════════════════════════════════════════════════════
          UNIFIED SECTION — THE FUTURE OF TECHNOLOGY & YOMTECH IN THE WORLD
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-20 md:py-32 relative z-10 hero-cyan-gradient text-white overflow-hidden border-b border-cyan-400/30 font-sans">
        
        {/* Hero Section Animated Background Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover opacity-55 mix-blend-overlay animate-river-flow-1 border-0" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover opacity-60 mix-blend-soft-light animate-river-flow-2 border-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/85 via-[#0077B6]/70 to-[#00B4D8]/80 pointer-events-none z-0" />

        <div className="max-w-[1720px] mx-auto px-5 sm:px-12 md:px-16 space-y-16 sm:space-y-24 md:space-y-36 relative z-10">

          {/* ─── BLOCK 1: THE FUTURE OF TECHNOLOGY ─── */}
          <div className="space-y-10 sm:space-y-16 md:space-y-20">
            {/* Header Badge */}
            <div className="space-y-6">
              <div className="flex items-center justify-start w-full">
                <div className="px-6 py-2 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10 -mr-[1px]">
                  <Target size={16} className="text-cyan-300" />
                  <span>THE FUTURE OF TECHNOLOGY</span>
                  <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
              </div>

              <div className="text-left space-y-3 max-w-3xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
                  Building for What Comes Next.
                </h2>
                <p className="text-cyan-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                  Technology changes continuously. Yomtech Global is built around continuous learning, practical engineering, responsible innovation, and scalable digital thinking so that today's solutions can evolve with tomorrow's opportunities.
                </p>
              </div>
            </div>

            {/* Zigzag Staircase Pushpin Roadmap Container */}
            <div className="relative max-w-5xl mx-auto py-6 sm:py-8 flex flex-col gap-0">
              
              {[
                { 
                  num: '01', 
                  title: 'Continuous Learning', 
                  desc: 'Technology professionals and organizations continuously expand knowledge, experiment with new tools, and strengthen their foundations.', 
                  tilt: '-rotate-1 hover:rotate-0',
                  pinColor: 'from-blue-500 to-blue-700 shadow-blue-500/40',
                  numColor: 'text-blue-600',
                  badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
                  icon: GraduationCap,
                  floatDuration: 4.3,
                  align: 'left',
                  curveDir: 'right',
                  pinLeft: true,
                },
                { 
                  num: '02', 
                  title: 'Practical Innovation', 
                  desc: 'Ideas become valuable when they are transformed into useful products, working systems, and solutions to real-world challenges.', 
                  tilt: 'rotate-1 hover:rotate-0',
                  pinColor: 'from-emerald-500 to-emerald-700 shadow-emerald-500/40',
                  numColor: 'text-emerald-600',
                  badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  icon: Lightbulb,
                  floatDuration: 4.9,
                  align: 'right',
                  curveDir: 'left',
                  pinLeft: false,
                },
                { 
                  num: '03', 
                  title: 'Scalable Engineering', 
                  desc: 'Strong architecture, maintainable code, resilient systems, and thoughtful technology decisions create foundations that can grow.', 
                  tilt: '-rotate-1 hover:rotate-0',
                  pinColor: 'from-purple-500 to-purple-700 shadow-purple-500/40',
                  numColor: 'text-purple-600',
                  badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
                  icon: Layers,
                  floatDuration: 5.2,
                  align: 'left',
                  curveDir: 'right',
                  pinLeft: true,
                },
                { 
                  num: '04', 
                  title: 'Global Connection', 
                  desc: 'Technology creates opportunities to connect businesses, engineers, learners, and partners beyond geographic boundaries.', 
                  tilt: 'rotate-1 hover:rotate-0',
                  pinColor: 'from-amber-500 to-amber-700 shadow-amber-500/40',
                  numColor: 'text-amber-600',
                  badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
                  icon: Globe,
                  floatDuration: 4.6,
                  align: 'right',
                  curveDir: 'none',
                  pinLeft: false,
                }
              ].map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                const isLeft = pillar.align === 'left';

                return (
                  <div key={pillar.num} className="relative flex flex-col">
                    {/* Card Row */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="flex w-full"
                    >
                      <motion.div
                        animate={{ y: [0, -7, 0] }}
                        transition={{ repeat: Infinity, duration: pillar.floatDuration, ease: 'easeInOut' }}
                        className={`relative w-full md:w-[68%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                      >
                        {/* Pushpin */}
                        <motion.div 
                          animate={{ rotate: [-3, 3, -3] }}
                          transition={{ repeat: Infinity, duration: 3.2 + idx * 0.4, ease: 'easeInOut' }}
                          className={`absolute -top-5 ${pillar.pinLeft ? 'left-10' : 'right-10'} z-30 flex flex-col items-center pointer-events-none`}
                        >
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pillar.pinColor} border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] flex items-center justify-center relative`}>
                            <div className="w-3 h-3 rounded-full bg-white/60 blur-[0.5px] absolute top-1.5 left-1.5" />
                          </div>
                          <div className="w-1 h-3 bg-slate-400/90" />
                        </motion.div>

                        {/* Card */}
                        <div className={`rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:p-12 bg-white/95 border-2 border-slate-100/90 shadow-[0_20px_40px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] md:${pillar.tilt} transition-all duration-500 hover:-translate-y-3 relative z-20 space-y-3 sm:space-y-6 group cursor-pointer overflow-hidden`}>
                          
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Logo Watermark Background */}
                          <img
                            src={logoEmblem}
                            alt=""
                            className="absolute bottom-3 right-3 w-40 h-40 object-contain opacity-[0.28] pointer-events-none select-none"
                            aria-hidden="true"
                          />

                          <div className="flex items-center justify-between">
                            <span className={`text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight ${pillar.numColor} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 inline-block`}>
                              {pillar.num}
                            </span>
                            <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${pillar.badgeBg} border-2 flex items-center justify-center shadow-sm group-hover:scale-115 group-hover:rotate-12 transition-all duration-500`}>
                              <PillarIcon size={22} className="group-hover:scale-110 transition-transform duration-300 sm:hidden" />
                              <PillarIcon size={26} className="group-hover:scale-110 transition-transform duration-300 hidden sm:block" />
                            </div>
                          </div>

                          <div className="space-y-2 sm:space-y-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-all duration-300 tracking-tight">
                              {pillar.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Dashed Curved Connector SVG between steps */}
                    {pillar.curveDir !== 'none' && (
                      <div className="hidden md:flex w-full h-20 items-center justify-center relative -my-2 pointer-events-none">
                        <svg
                          viewBox="0 0 400 80"
                          fill="none"
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >
                          {pillar.curveDir === 'right' ? (
                            /* Curve sweeping from left-side card down to right-side card */
                            <path
                              d="M 100,5 C 100,50 300,30 300,75"
                              stroke="#0ED3DD"
                              strokeWidth="2"
                              strokeDasharray="8 6"
                              strokeLinecap="round"
                              opacity="0.85"
                            />
                          ) : (
                            /* Curve sweeping from right-side card down to left-side card */
                            <path
                              d="M 300,5 C 300,50 100,30 100,75"
                              stroke="#0ED3DD"
                              strokeWidth="2"
                              strokeDasharray="8 6"
                              strokeLinecap="round"
                              opacity="0.85"
                            />
                          )}
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>


          {/* ─── BLOCK 2: YOMTECH IN THE WORLD ─── */}
          <div className="space-y-10 sm:space-y-16 pt-6 sm:pt-8 border-t border-cyan-400/30">
            {/* Header Badge */}
            <div className="space-y-6">
              <div className="flex items-center justify-start w-full">
                <div className="px-6 py-2 rounded-full bg-cyan-950/90 border-2 border-cyan-400/70 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-md shrink-0 z-10 -mr-[1px]">
                  <Globe size={16} className="text-cyan-300" />
                  <span>YOMTECH IN THE WORLD</span>
                  <span className="text-[10px] text-cyan-300 ml-0.5">◆</span>
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 via-[#0ED3DD] to-transparent" />
              </div>

              <div className="text-left space-y-3 max-w-3xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
                  Technology Doesn't Stop <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-indigo-300">
                    At The Product.
                  </span>
                </h2>
                <p className="text-cyan-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                  Yomtech Global shares technology knowledge, practical insights, innovation stories, engineering perspectives, and opportunities through its growing digital community.
                </p>
              </div>
            </div>

            {/* 3 Media Community Pushpin Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
              
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

                <div className="bg-white/95 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border-2 border-slate-100/90 hover:border-red-500 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(239,68,68,0.18)] md:-rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-5 sm:space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                  {/* Logo Watermark Background */}
                  <img src={logoEmblem} alt="" className="absolute bottom-3 right-3 w-40 h-40 object-contain opacity-[0.28] pointer-events-none select-none" aria-hidden="true" />
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
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

                <div className="bg-white/95 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border-2 border-slate-100/90 hover:border-cyan-400 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(2,132,199,0.18)] md:rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-5 sm:space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                  {/* Logo Watermark Background */}
                  <img src={logoEmblem} alt="" className="absolute bottom-3 right-3 w-40 h-40 object-contain opacity-[0.28] pointer-events-none select-none" aria-hidden="true" />
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

                <div className="bg-white/95 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border-2 border-slate-100/90 hover:border-blue-500 shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.18)] md:-rotate-1 hover:rotate-0 transition-all duration-500 flex flex-col justify-between space-y-5 sm:space-y-8 group relative overflow-hidden hover:-translate-y-2 cursor-pointer">
                  {/* Logo Watermark Background */}
                  <img src={logoEmblem} alt="" className="absolute bottom-3 right-3 w-40 h-40 object-contain opacity-[0.28] pointer-events-none select-none" aria-hidden="true" />
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
                Yomtech Global works closely with government ministries, national security agencies, universities, media networks, and financial institutions.
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


      {/* ════════════════════════════════════════════════════
          SECTION 14 — COMMUNITY TESTIMONIALS & REVIEWS
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

        {/* Large Rotating YomTech Brand Logo Watermarks (Section Background) */}
        <div className="absolute -right-20 sm:-right-32 -bottom-20 sm:-bottom-32 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] opacity-[0.07] sm:opacity-[0.09] pointer-events-none z-0 animate-[spin_50s_linear_infinite]">
          <img src={logoEmblem} alt="YomTech Emblem Watermark" className="w-full h-full object-contain filter drop-shadow-2xl" />
        </div>

        <div className="absolute -left-24 -top-24 w-80 h-80 sm:w-[480px] sm:h-[480px] opacity-[0.05] pointer-events-none z-0 rotate-45">
          <img src={logoEmblem} alt="YomTech Watermark" className="w-full h-full object-contain filter drop-shadow-xl" />
        </div>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          {/* Header Badge & Auto-Rotate Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl text-left">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-50 border border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-[0.2em] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                <span>AUTOPLAYING COMMUNITY REVIEWS</span>
                <Quote size={15} className="text-[#0284C7] ml-0.5" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Trusted by Engineers &amp; Leaders
              </h2>
            </div>

            {/* Controls & Status Bar */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={() => setActiveTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full bg-white border-2 border-cyan-200 text-[#0284C7] hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7] shadow-md flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
                title="Previous Testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full bg-white border-2 border-cyan-200 text-[#0284C7] hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7] shadow-md flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
                title="Next Testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Auto-Rotating Cards Showcase Container */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-4"
            onMouseEnter={() => setIsTestimonialsPaused(true)}
            onMouseLeave={() => setIsTestimonialsPaused(false)}
          >
            {[0, 1, 2].map((offset) => {
              const itemIndex = (activeTestimonialIndex + offset) % TESTIMONIALS.length;
              const t = TESTIMONIALS[itemIndex];
              const isCenter = offset === 1;

              return (
                <motion.div
                  key={`${itemIndex}-${offset}`}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: isCenter ? 1.04 : 0.98, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full [perspective:1000px]"
                >
                  {/* 3D Floating Motion */}
                  <motion.div
                    animate={{ y: offset % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
                    transition={{ duration: 5 + offset * 0.8, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotateY: offset === 0 ? 4 : offset === 1 ? 0 : -4, rotateX: -3 }}
                    className="relative w-full [transform-style:preserve-3d]"
                  >
                    {/* 3D Holographic Cyber Pin */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                      <motion.div
                        animate={{ rotate: [0, 6, 0, -6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-[#0284C7] to-blue-700 border-2 border-white shadow-[0_0_25px_rgba(14,211,221,0.7)] flex items-center justify-center relative"
                      >
                        <div className="w-3 h-3 rounded-full bg-white/80 blur-[0.5px] absolute top-1.5 left-1.5" />
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                          <Sparkles size={16} className="text-white filter drop-shadow-sm" />
                        </motion.div>
                      </motion.div>
                      <div className="w-1 h-3.5 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-sm" />
                    </div>

                    <div className={`p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-sky-50/70 to-cyan-50/80 border-2 ${isCenter ? 'border-[#0284C7] shadow-[0_30px_80px_rgba(2,132,199,0.25)]' : 'border-cyan-200/80 shadow-[0_20px_50px_rgba(2,132,199,0.08)]'} backdrop-blur-xl transition-all duration-500 flex flex-col justify-between space-y-6 group relative overflow-hidden cursor-pointer min-h-[300px] sm:min-h-[340px]`}>
                      
                      {/* Top Gradient Sheen Accent Line */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-sky-400" />

                      {/* YomTech Brand Logo Emblem Watermark (Card Background) */}
                      <div className="absolute -right-6 -bottom-6 w-36 h-36 sm:w-44 sm:h-44 opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none z-0">
                        <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                      </div>

                      {/* Watermark Quote Icon */}
                      <motion.div
                        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-3 -right-3 pointer-events-none"
                      >
                        <Quote size={85} className="text-cyan-300/35 group-hover:text-cyan-400/50 transition-colors" />
                      </motion.div>

                      {/* Verified Badge Tag */}
                      <div className="flex items-center justify-between pt-1 relative z-10">
                        <span className="px-3.5 py-1 rounded-full bg-cyan-100/90 border border-cyan-300 text-[#0284C7] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-xs">
                          <ShieldCheck size={13} className="text-[#0284C7]" />
                          <span>{t.badge || 'Verified Member'}</span>
                        </span>
                        <div className="flex text-amber-400 gap-1 shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
                          {[...Array(5)].map((_, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.3, rotate: 15 }}>
                              <Star size={16} fill="currentColor" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Quote Body */}
                      <p className="text-sm sm:text-base text-slate-800 font-bold italic leading-relaxed relative z-10 font-sans">
                        "{t.quote}"
                      </p>

                      {/* Footer Profile Avatar & Credentials */}
                      <div className="pt-5 border-t border-cyan-200/60 flex items-center justify-between gap-4 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="relative shrink-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-[#0284C7] p-0.5 shadow-xl overflow-hidden bg-slate-900 group-hover:border-cyan-400 transition-colors">
                              <img src={t.avatar} alt={t.author} className="w-full h-full object-cover rounded-full group-hover:scale-115 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white shadow-[0_4px_15px_rgba(16,185,129,0.7)] flex items-center justify-center text-white shrink-0 z-20 group-hover:scale-120 transition-transform animate-pulse" title="Verified Community Member">
                              <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                            </div>
                          </div>
                          <div className="text-left">
                            <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0284C7] transition-colors leading-tight">{t.author}</h4>
                            <p className="text-xs font-bold text-[#0284C7] uppercase font-mono tracking-wider">{t.role}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Indicator Dots & Progress Bar */}
          <div className="flex items-center justify-center gap-3 pt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonialIndex(i)}
                className={`h-3 rounded-full transition-all duration-500 cursor-pointer ${
                  i === activeTestimonialIndex 
                    ? 'w-12 bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] shadow-[0_0_12px_rgba(2,132,199,0.6)]' 
                    : 'w-3 bg-cyan-200 hover:bg-cyan-300'
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* ════════════════════════════════════════════════════
              EXPERT COMMUNITY CTA BANNER (Directly Below Reviews)
          ════════════════════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-10"
          >
            <div className="relative rounded-[2rem] sm:rounded-[2.8rem] bg-gradient-to-r from-[#071328] via-[#0B2545] to-[#0284C7] p-6 sm:p-10 md:p-14 text-white border-2 border-cyan-400/40 shadow-[0_25px_70px_rgba(2,132,199,0.35)] overflow-hidden">
              
              {/* Counter-Rotating Holographic Background Rings */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-dashed border-cyan-400/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full border-2 border-cyan-300/20 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
              
              {/* YomTech Brand Logo Emblem Watermark */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
                <img src={logoEmblem} alt="YomTech Logo" className="w-full h-full object-contain filter drop-shadow-2xl" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                
                {/* Text Content */}
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-300/40 text-cyan-300 text-xs font-black uppercase tracking-widest">
                    <Sparkles size={14} className="text-cyan-300" />
                    <span>Join 5,000+ Engineers &amp; Global Enterprise Clients</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight leading-tight">
                    Ready to Transform Your Business or Tech Career?
                  </h3>

                  <p className="text-sm sm:text-base text-cyan-100/90 font-medium leading-relaxed max-w-2xl font-sans">
                    Partner with YomTech Global for enterprise software engineering, custom ERP &amp; AI solutions, or elevate your technical expertise with market-leading courses at WabiSkills Academy.
                  </p>
                </div>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
                  
                  {/* Primary Consultation CTA */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-[#0284C7] hover:from-cyan-300 hover:to-cyan-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(14,211,221,0.4)] hover:shadow-[0_15px_40px_rgba(14,211,221,0.6)] transition-all duration-300 active:scale-98 cursor-pointer group"
                  >
                    <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Schedule Executive Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary WabiSkills CTA */}
                  <button
                    onClick={() => window.open('https://wabiskills.com/', '_blank')}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-cyan-300/50 hover:border-cyan-300 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-md transition-all duration-300 active:scale-98 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                      <img src={wabiSkillsLogo} alt="WabiSkills" className="w-full h-full object-contain" />
                    </div>
                    <span>Explore WabiSkills Academy</span>
                  </button>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
