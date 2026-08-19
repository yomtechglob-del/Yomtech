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
  ExternalLink, BarChart3, Rocket, Share2, Play
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import { AboutEcosystem } from '../../components/about/AboutEcosystem';

// Service Images
import erpImg from '../../assets/services/erp.png';
import customImg from '../../assets/services/custom.png';
import cybersecurityImg from '../../assets/services/cybersecurity.png';
import cloudImg from '../../assets/services/cloud.png';
import webImg from '../../assets/services/web.png';
import mobileImg from '../../assets/services/mobile.png';
import educationImg from '../../assets/services/education.png';
import crmImg from '../../assets/services/crm.png';

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

const ECOSYSTEM_PILLARS = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'SOFTWARE & SYSTEMS',
    badge: 'ENGINEER',
    desc: 'Build scalable software systems, enterprise applications, APIs, and digital products.',
    details: ['Custom Enterprise Web Apps', 'High-Concurrency Microservices', 'RESTful API Contracts', 'Multi-Tenant Architecture'],
    color: 'from-[#0284C7] to-[#0ED3DD]'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'INFRASTRUCTURE & PLATFORMS',
    badge: 'CLOUD',
    desc: 'Design, deploy, and optimize modern digital infrastructure and technology platforms.',
    details: ['Docker & Kubernetes Rollout', 'Cloud Data Center Hosting', 'Sub-50ms Latency Caching', 'Database Sharding & Storage'],
    color: 'from-[#0077B6] to-[#00B4D8]'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'SYSTEM PROTECTION',
    badge: 'SECURE',
    desc: 'Build and support responsible, resilient, and security-focused digital systems.',
    details: ['Penetration Testing Audits', 'TLS 1.3 & AES-256 Encryption', 'AI Surveillance Zones', 'Vulnerability Hardening'],
    color: 'from-[#7C3AED] to-[#A855F7]'
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'TALENT & MENTORSHIP',
    badge: 'EDUCATE',
    desc: 'Develop practical technology skills through structured learning, mentorship, and real-world projects.',
    details: ['2,000+ Certified Alumni', 'Practical Code Bootcamps', 'Industry Leader Mentorship', 'Verified Skill Badging'],
    color: 'from-[#059669] to-[#10B981]'
  },
  {
    id: 'pillar-5',
    number: '05',
    title: 'PROFESSIONAL NETWORK',
    badge: 'CONNECT',
    desc: 'Connect businesses, engineers, learners, technology opportunities, and innovation communities.',
    details: ['48h Candidate Shortlisting', 'Direct Remote & Hybrid Placement', 'Vetted Code Portfolios', 'Contract & Staff Augmentation'],
    color: 'from-[#D97706] to-[#F59E0B]'
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
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>ARCHITECTING DIGITAL EXCELLENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Who We Are &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  Our Ecosystem Philosophy
                </span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                Yomtech Global was founded with a clear vision: to empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology — we help you create the future.
              </p>

              <div className="p-6 rounded-2xl bg-cyan-50/70 border-l-4 border-[#0284C7] space-y-3">
                <Quote size={24} className="text-[#0284C7]" />
                <p className="text-sm font-bold text-slate-800 italic leading-relaxed">
                  "Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth."
                </p>
                <div className="pt-1">
                  <p className="text-xs font-black text-slate-900">Ermias Alemayehu</p>
                  <p className="text-[10px] font-bold text-[#0284C7] uppercase">Founder &amp; Chief Executive Officer</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-sm flex flex-col justify-center items-center">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0284C7] mb-4">OUR GUIDING PRINCIPLES MATRIX</h3>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {CORE_VALUES.map((val) => (
                    <div
                      key={val.title}
                      style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                      className="p-4 rounded-2xl border-2 border-indigo-200/80 hover:border-cyan-400 transition-all space-y-1 group shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#0284C7]" />
                        <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors">{val.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium line-clamp-2">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hexagonal Honeycomb Core Values Cluster Section with custom Homepage badge, heading, and description */}
      <AboutEcosystem
        customBadgeText="WHO WE ARE"
        customHeading={
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            Who We Are &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Our Ecosystem Philosophy
            </span>
          </h2>
        }
        customDescription="Yomtech Global was founded with a clear vision: to empower businesses, innovators, and learners to thrive in the digital era. From enterprise software and cloud solutions to WabiSkills training and WabiJob recruitment, we don't just deliver technology — we help you create the future."
        showCeoQuote={true}
      />


      {/* ════════════════════════════════════════════════════
          SECTION 03 — NEW: THE YOMTECH GLOBAL ECOSYSTEM
          (Interactive Connected Node Nucleus Experience)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F4FAFF] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Layers size={14} />
              <span>YOMTECH GLOBAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              One Technology Ecosystem. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600">
                Built to Create Real Impact.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              YomTech Global brings together enterprise engineering, digital platforms, technology talent, practical learning, and innovation initiatives into one connected ecosystem designed to solve real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Node Selectors */}
            <div className="lg:col-span-5 space-y-3">
              {ECOSYSTEM_PILLARS.map((pillar, idx) => {
                const isActive = activeEcosystemTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveEcosystemTab(idx)}
                    className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${isActive
                        ? 'bg-white border-[#0284C7] shadow-xl shadow-cyan-500/10 ring-2 ring-[#0284C7]/20 scale-[1.02]'
                        : 'bg-white/60 hover:bg-white border-slate-200/90 text-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-colors shrink-0 ${isActive ? 'bg-gradient-to-tr ' + pillar.color + ' text-white shadow-md' : 'bg-slate-100 text-slate-500'
                        }`}>
                        {pillar.number}
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] block">{pillar.badge}</span>
                        <h3 className="text-base font-extrabold text-slate-900 leading-snug">{pillar.title}</h3>
                      </div>
                    </div>
                    <ChevronRight size={18} className={`transition-transform ${isActive ? 'rotate-90 text-[#0284C7]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Active Node Display Box */}
            <div className="lg:col-span-7">
              <div style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }} className="p-8 sm:p-12 rounded-3xl border-2 border-cyan-300 shadow-2xl relative overflow-hidden space-y-6">
                <div className="absolute top-4 right-6 font-mono text-4xl font-black text-cyan-200/50 pointer-events-none">
                  &lt;ECOSYSTEM /&gt;
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-mono font-black uppercase">
                  NODE {ECOSYSTEM_PILLARS[activeEcosystemTab].number} · {ECOSYSTEM_PILLARS[activeEcosystemTab].badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  {ECOSYSTEM_PILLARS[activeEcosystemTab].title}
                </h3>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {ECOSYSTEM_PILLARS[activeEcosystemTab].desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Core Technical Capabilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ECOSYSTEM_PILLARS[activeEcosystemTab].details.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 p-3 rounded-xl bg-white/80 border border-slate-200 text-xs font-extrabold text-slate-800">
                        <CheckCircle2 size={15} className="text-[#0284C7] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Integrated under YomTech Global Parent Network</span>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0284C7] hover:text-cyan-600">
                    <span>View Node Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 04 — EXISTING CORE CAPABILITIES
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Cpu size={14} />
              <span>ENGINEERING CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              WE BUILD. WE ENGINEER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600">
                WE SUPPORT. WE TEACH.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Our core services combine technology, innovation, and practical engineering expertise to deliver scalable software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_SERVICES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.title}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0284C7] text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                        {srv.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white p-2 text-[#0284C7] shadow-sm flex items-center justify-center">
                        <IconComp size={20} />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <button
                      onClick={() => navigate('/services')}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-cyan-400 text-slate-800 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 12 Official Services List Matrix */}
          <div className="pt-10 border-t border-slate-200">
            <h3 className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Official YomTech Enterprise Service Roster:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {OFFICIAL_SERVICES_LIST.map((item) => (
                <div key={item.name} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-1 hover:border-cyan-400 transition-colors">
                  <div className="text-xs font-extrabold text-slate-900 truncate">{item.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium line-clamp-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 05 — NEW: PRODUCTS & PLATFORMS
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#EAF6FF] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Rocket size={14} />
              <span>YOMTECH PRODUCTS &amp; PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Technology Built Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-indigo-600">
                The Single Project.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Alongside enterprise technology services, YomTech Global develops and supports platforms and initiatives designed to create practical digital value, expand access to technology, and connect people with new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Hero Product Card: Yomnex ERP */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-cyan-400 shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-black uppercase tracking-widest">
                    FLAGSHIP ERP SUITE
                  </span>
                  <span className="text-xs font-mono text-cyan-200 font-bold">YOMNEX ERP</span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <img src={yomnexLogo} alt="Yomnex ERP" className="h-12 object-contain" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Yomnex ERP</h3>
                </div>

                <p className="text-cyan-100/90 text-sm font-medium leading-relaxed">
                  Enterprise-focused digital systems and business technology platforms designed completely from scratch for government institutions, banks, and large commercial operations.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-bold text-white">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20"><CheckCircle2 size={14} className="text-cyan-300" /> Finance &amp; Ledger</div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20"><CheckCircle2 size={14} className="text-cyan-300" /> Human Resources</div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20"><CheckCircle2 size={14} className="text-cyan-300" /> Procurement &amp; Stock</div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20"><CheckCircle2 size={14} className="text-cyan-300" /> Gate Access Controls</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-200">Zero per-user monthly licensing fees</span>
                <Link to="/products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-md">
                  <span>Explore Yomnex Specs</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Supporting Platform Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WabiSkills Card */}
              <div className="bg-white rounded-3xl p-7 border-2 border-emerald-300 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">LIVE ACADEMY</span>
                    <img src={wabiSkillsLogo} alt="WabiSkills" className="h-6 object-contain" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">WabiSkills Platform</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    A practical technology learning platform focused on hands-on coding bootcamps, mentorship, and real-world engineering experience.
                  </p>
                </div>
                <a href="https://wabiskills.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-900">
                  <span>Visit WabiSkills Portal ↗</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* WabiJobs Card */}
              <div className="bg-white rounded-3xl p-7 border-2 border-amber-300 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase">TALENT NETWORK</span>
                    <img src={wabiJobsLogo} alt="WabiJobs" className="h-6 object-contain" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">WabiJobs Ecosystem</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    A technology and professional opportunity ecosystem connecting vetted software skills, developers, and career pathways.
                  </p>
                </div>
                <a href="https://wabijob.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-700 hover:text-amber-900">
                  <span>Visit WabiJobs Portal ↗</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Future Digital Platforms Card */}
              <div className="sm:col-span-2 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-7 border border-indigo-400/40 shadow-xl flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/40 text-[10px] font-black uppercase">FUTURE PLATFORMS</span>
                  <span className="text-[10px] font-mono text-cyan-300">R&amp;D ROADMAP</span>
                </div>
                <h3 className="text-lg font-extrabold text-white font-display">WabiX &amp; Mari Digital Ecosystem Initiatives</h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Additional digital meeting tools, social communication apps, and technology media channels actively being engineered within the YomTech Global innovation labs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 06 — MEASURED IMPACT & STATISTICS
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#071A2B] text-white relative overflow-hidden border-b border-cyan-400/30">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-cyan-300 text-xs font-black uppercase tracking-widest">
              <TrendingUp size={14} />
              <span>MEASURED ECOSYSTEM IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Real Scale. Measured Achievements.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {COMPANY_STATS.map((st) => (
              <div
                key={st.label}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center space-y-2 hover:bg-white/20 transition-all"
              >
                <span className="text-3xl sm:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-[#0ED3DD] block">
                  {st.stat}
                </span>
                <p className="text-xs font-extrabold text-white uppercase tracking-wider">{st.label}</p>
                <p className="text-[10px] font-bold text-cyan-200">{st.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 07 — NEW: TECHNOLOGY + TALENT (Split-Screen)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F3EEFF] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-black uppercase tracking-widest">
              <Users size={14} />
              <span>TWO SIDES OF ONE ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Technology Creates Greater Impact When <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-[#0284C7]">
                People and Businesses Grow Together.
              </span>
            </h2>
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
          SECTION 08 — ENGINEERING PROCESS (01 Discover → 05 Grow)
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Zap size={14} />
              <span>DEVELOPMENT LIFECYCLE &amp; PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Structured Engineering Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'DISCOVER', desc: 'Requirement analysis, scope definition & architecture plan.' },
              { num: '02', title: 'DESIGN', desc: 'System architecture, API design & UI/UX wireframing.' },
              { num: '03', title: 'ENGINEER', desc: 'Agile sprint execution, clean code & microservices.' },
              { num: '04', title: 'VALIDATE', desc: 'Penetration testing, sub-50ms latency & QA audits.' },
              { num: '05', title: 'GROW', desc: 'Zero-downtime deployment & 24/7 SLA maintenance.' }
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
                <span className="text-2xl font-black font-mono text-[#0284C7] block">{step.num}</span>
                <h3 className="text-base font-extrabold text-slate-900 font-display">{step.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 09 — NEW: INSIGHTS, MEDIA & COMMUNITY
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#EAFBF4] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black uppercase tracking-widest">
              <Globe size={14} />
              <span>YOMTECH IN THE WORLD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Technology Doesn't Stop <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-[#0284C7]">
                At The Product.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              YomTech Global shares technology knowledge, practical insights, innovation stories, engineering perspectives, and opportunities through its growing digital community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YOUTUBE */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-200 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-widest">YOUTUBE</span>
                  <Video size={20} className="text-red-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">Long-Form Engineering Insights</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Technology discussions, full-length tutorials, engineering deep dives, product stories, and national technology documentary films.
                </p>
              </div>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-red-600 hover:text-red-800">
                <span>Watch On YouTube ↗</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* TIKTOK */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-300 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-widest">TIKTOK</span>
                  <Sparkles size={20} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">Short-Form Tech Education</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Quick developer tips, coding highlights, tech awareness clips, career inspiration, and behind-the-scenes engineering moments.
                </p>
              </div>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-900 hover:text-slate-700">
                <span>Follow On TikTok ↗</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest">LINKEDIN</span>
                  <Globe size={20} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">Professional Network Updates</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Enterprise updates, technology whitepapers, strategic partnerships, project milestones, and career opportunities across Africa.
                </p>
              </div>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-800">
                <span>Connect On LinkedIn ↗</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS & CLIENT PROOF
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Quote size={14} />
              <span>WHAT OUR COMMUNITY SAYS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Trusted by Engineers &amp; Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="p-8 rounded-3xl border-2 border-indigo-200/80 shadow-lg flex flex-col justify-between space-y-6"
              >
                <p className="text-xs sm:text-sm text-slate-700 font-bold italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{t.author}</h4>
                    <p className="text-[10px] font-bold text-[#0284C7] uppercase">{t.role}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 11 — NEW: THE FUTURE OF YOMTECH
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FFF7E6] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-16 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-widest">
              <Target size={14} />
              <span>THE FUTURE OF TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Building for What Comes Next.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Technology changes continuously. YomTech Global is built around continuous learning, practical engineering, responsible innovation, and scalable digital thinking so that today's solutions can evolve with tomorrow's opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'CONTINUOUS LEARNING', desc: 'Technology professionals and organizations continuously expand knowledge, experiment with new tools, and strengthen their foundations.' },
              { num: '02', title: 'PRACTICAL INNOVATION', desc: 'Ideas become valuable when they are transformed into useful products, working systems, and solutions to real-world challenges.' },
              { num: '03', title: 'SCALABLE ENGINEERING', desc: 'Strong architecture, maintainable code, resilient systems, and thoughtful technology decisions create foundations that can grow.' },
              { num: '04', title: 'GLOBAL CONNECTION', desc: 'Technology creates opportunities to connect businesses, engineers, learners, and partners beyond geographic boundaries.' }
            ].map((p) => (
              <div key={p.num} className="bg-white rounded-3xl p-7 border-2 border-amber-200 shadow-xl space-y-4">
                <span className="text-xs font-mono font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">PILLAR {p.num}</span>
                <h3 className="text-base font-extrabold text-slate-900 font-display">{p.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 12 — FINAL DUAL-PATH CTA
      ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#00B4D8] text-white relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-12 relative z-10">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-cyan-200 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              <span>TAKE THE NEXT STEP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Ready to Build Your Technology Future?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FOR ORGANIZATIONS */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-black uppercase tracking-widest inline-block">FOR ORGANIZATIONS</span>
              <h3 className="text-2xl font-extrabold text-white">Start a Technology Conversation</h3>
              <p className="text-xs text-cyan-100 font-medium leading-relaxed">
                Consult with our engineering leads to build custom ERPs, cloud architectures, or digital transformation workflows.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-4 rounded-2xl bg-white text-slate-950 hover:bg-cyan-300 font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* FOR INDIVIDUALS */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-widest inline-block">FOR INDIVIDUALS</span>
              <h3 className="text-2xl font-extrabold text-white">Start Building Your Future</h3>
              <p className="text-xs text-cyan-100 font-medium leading-relaxed">
                Enroll in WabiSkills bootcamps, master fullstack development, or join our vetted developer network.
              </p>
              <button
                onClick={() => navigate('/academy')}
                className="w-full py-4 rounded-2xl bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Academy Courses</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SECTION 13 — PARTNERS TICKER & NEWSLETTER
      ════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 space-y-12 relative z-10">

          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Trusted by Public Sector Institutions, Universities &amp; Enterprises</h3>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {partnerCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPartnerFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${partnerFilter === cat
                      ? 'bg-[#0284C7] text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Partner Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 pt-4">
              {filteredPartners.map((pt) => (
                <div key={pt.name} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-all">
                  <img src={pt.logo} alt={pt.name} className="w-10 h-10 object-contain" />
                  <span className="text-[10px] font-extrabold text-slate-700 text-center leading-tight truncate w-full">{pt.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
