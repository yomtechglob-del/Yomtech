import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import {
  Handshake, Building2, Globe, GraduationCap, Landmark, Cpu, Video,
  Briefcase, ArrowRight, CheckCircle2, Phone, Star, Layers, Sparkles,
  Award, ExternalLink, Filter, ShieldCheck, Heart, FileText, Search
} from 'lucide-react';

// Background & Brand Assets
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';
import logoEmblem from '../../assets/logos/logo.png';

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

/* ─── 19 PARTNER PROFILES DIRECTORY DATA ─── */
const PARTNERS_DIRECTORY = [
  // 1. Government Category
  {
    id: 'ssgi',
    name: 'Space Science & Geospatial Institute (SSGI)',
    category: 'Government',
    subcategory: 'Research & Space',
    logo: ssgiLogo,
    partnershipType: 'Strategic R&D & Spatial Data Partner',
    website: 'https://ssgi.gov.et/',
    accent: 'cyan',
    profile: 'National Ethiopian institute responsible for space exploration, satellite technology, earth observation, and geospatial data research.',
    relatedProjects: ['Geospatial Data Processing Tools', 'Space Science Tech Documentaries', 'Spatial Analytics Integration'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'insa',
    name: 'Information Network Security Administration (INSA)',
    category: 'Government',
    subcategory: 'Cybersecurity & Defense',
    logo: insaLogo,
    partnershipType: 'Public Cybersecurity & Infrastructure Alliance',
    website: 'https://www.insa.gov.et/',
    accent: 'violet',
    profile: 'Ethiopia’s primary national authority overseeing information network security, cyber defense, and critical national digital infrastructure.',
    relatedProjects: ['AI Surveillance Zones', 'Threat Monitoring & Security Hardening', 'Data Center Security Audits'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'mint',
    name: 'Ministry of Innovation and Technology (MInT)',
    category: 'Government',
    subcategory: 'Federal Ministry',
    logo: mintLogo,
    partnershipType: 'Strategic Public Sector Alliance',
    website: 'https://mint.gov.et/',
    accent: 'emerald',
    profile: 'Federal ministry driving Ethiopia’s national digital transformation agenda, ICT policy, technology incubation, and digital economy growth.',
    relatedProjects: ['National Digital Transformation', 'Citizen Service Platforms', 'Tech Startup Ecosystem Development'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'cityadmin',
    name: 'Addis Ababa City Administration Trade Bureau',
    category: 'Government',
    subcategory: 'Municipal Government',
    logo: cityadminLogo,
    partnershipType: 'E-Government Implementation Partner',
    website: 'https://addisababa.gov.et/',
    accent: 'sky',
    profile: 'Municipal government bureau regulating commercial trade, business registration, and citizen trade services across Addis Ababa.',
    relatedProjects: ['Digital Trade Licensing Portal', 'Automated Institutional Document Archiving', 'Citizen QR Verification'],
    location: 'Addis Ababa, Ethiopia'
  },

  // 2. Research Category
  {
    id: 'eaii',
    name: 'Ethiopian Artificial Intelligence Institute (EAII)',
    category: 'Research',
    subcategory: 'AI Research',
    logo: eaiiLogo,
    partnershipType: 'AI Research & Development Partner',
    website: 'https://eaii.gov.et/',
    accent: 'indigo',
    profile: 'Apex national research institute leading artificial intelligence R&D, computer vision models, machine learning, and NLP in Ethiopia.',
    relatedProjects: ['AI Vision Surveillance Systems', 'Predictive Analytics Models', 'National AI Documentaries'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'addisai',
    name: 'Addis AI Media & Research',
    category: 'Research',
    subcategory: 'AI Media',
    logo: addisAiLogo,
    partnershipType: 'AI Technology Alliance',
    website: 'https://eaii.gov.et/',
    accent: 'rose',
    profile: 'Specialized media and AI research group focused on advancing machine learning literacy, AI awareness, and digital research storytelling.',
    relatedProjects: ['AI Innovation Documentaries', 'AI Literacy Content', 'Research Publications'],
    location: 'Addis Ababa, Ethiopia'
  },

  // 3. University Category
  {
    id: 'aastu',
    name: 'Addis Ababa Science & Technology University (AASTU)',
    category: 'University',
    subcategory: 'STEM University',
    logo: aastuLogo,
    partnershipType: 'Academic & Talent Bootcamp Partner',
    website: 'https://www.aastu.edu.et/',
    accent: 'cyan',
    profile: 'Premier national STEM university producing elite software engineers, researchers, and technical leaders in East Africa.',
    relatedProjects: ['WabiSkills Digital Academy Bootcamps', 'Campus LMS Platform', 'Graduate Developer Recruitment'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'astu',
    name: 'Adama Science & Technology University (ASTU)',
    category: 'University',
    subcategory: 'STEM University',
    logo: astuLogo,
    partnershipType: 'University Talent Alliance',
    website: 'https://www.astu.edu.et/',
    accent: 'emerald',
    profile: 'Leading university center of excellence for applied science, engineering innovation, and software technology research.',
    relatedProjects: ['WabiSkills Certification Programs', 'Developer Mentorship', 'Academic System Integration'],
    location: 'Adama, Ethiopia'
  },
  {
    id: 'arsi',
    name: 'Arsi University',
    category: 'University',
    subcategory: 'Public University',
    logo: arsiLogo,
    partnershipType: 'Higher Education Digital Partner',
    website: 'https://www.arsiun.edu.et/',
    accent: 'amber',
    profile: 'Public regional university expanding higher education access, digital learning, and practical software engineering skills.',
    relatedProjects: ['Digital Learning Portals', 'Student Record Automation', 'WabiSkills Training'],
    location: 'Asella, Ethiopia'
  },
  {
    id: 'kotebe',
    name: 'Kotebe University of Education',
    category: 'University',
    subcategory: 'Education University',
    logo: kotebeLogo,
    partnershipType: 'Educational Technology Alliance',
    website: 'https://kue.edu.et/',
    accent: 'violet',
    profile: 'Historic university dedicated to teacher training, educational research, digital pedagogy, and learning science.',
    relatedProjects: ['LMS Deployment', 'Digital Classroom Infrastructure', 'Faculty IT Coaching'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'select',
    name: 'Select Business & Technology College',
    category: 'University',
    subcategory: 'Private College',
    logo: selectLogo,
    partnershipType: 'Private Academic Alliance',
    website: 'https://select.edu.et/',
    accent: 'teal',
    profile: 'Higher education college specializing in practical business administration, computer science, and IT diploma programs.',
    relatedProjects: ['WabiSkills Technical Training Bootcamps', 'Student Career Matching via WabiJob'],
    location: 'Addis Ababa, Ethiopia'
  },

  // 4. Business & Enterprise Category
  {
    id: 'bunna',
    name: 'Bunna Bank S.C',
    category: 'Business',
    subcategory: 'Banking & Financial',
    logo: bunnaLogo,
    partnershipType: 'Enterprise Financial Systems Client',
    website: 'https://bunnabanksc.com/',
    accent: 'indigo',
    profile: 'Prominent commercial bank delivering retail, digital, and corporate banking solutions to millions of customers.',
    relatedProjects: ['Banking Core Middleware Integration', 'Sub-50ms API Layer', 'Cybersecurity Hardening'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'stempower',
    name: 'STEMpower LLC',
    category: 'Business',
    subcategory: 'Global STEM Non-Profit',
    logo: stempowerLogo,
    partnershipType: 'Global Education & STEM Partner',
    website: 'https://www.stempower.org/',
    accent: 'amber',
    profile: 'Global non-profit organization promoting hands-on STEM education, electronics labs, and youth innovation centers across Africa.',
    relatedProjects: ['STEM Capacity Building Bootcamps', 'Youth Innovation Lab Infrastructure', 'Digital Skills Training'],
    location: 'Pan-African / Global'
  },
  {
    id: 'ienetworks',
    name: 'IE Networks',
    category: 'Technology',
    subcategory: 'Enterprise Networks',
    logo: ieNetworksLogo,
    partnershipType: 'Infrastructure & Network Partner',
    website: 'https://www.ienetworks.co/',
    accent: 'cyan',
    profile: 'Premier IT networking, data center infrastructure, and enterprise communications solutions provider.',
    relatedProjects: ['Data Center Infrastructure Maintenance', 'Enterprise Hardware Integration', 'Network Security'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'hospitality',
    name: '10+ Premier Hotels & Resort Chains',
    category: 'Business',
    subcategory: 'Hospitality Sector',
    logo: hospitalityLogo,
    partnershipType: 'Commercial Sector ERP Client',
    website: 'https://www.ethiopianhotelsassociation.org/',
    accent: 'emerald',
    profile: 'Consortium of leading luxury hotels and resorts across Ethiopia utilizing Yomtech’s hospitality ERP suite.',
    relatedProjects: ['Yomnex Hospitality ERP', 'Restaurant POS Integration', 'Room Reservation & Inventory Engine'],
    location: 'Ethiopia Wide'
  },
  {
    id: 'nova',
    name: 'Nova Printing & Advertising',
    category: 'Business',
    subcategory: 'Industrial Enterprise',
    logo: novaLogo,
    partnershipType: 'Enterprise Client Partner',
    website: 'https://novaprintingethiopia.com/',
    accent: 'violet',
    profile: 'Major commercial printing, industrial packaging, and large-format outdoor advertising company.',
    relatedProjects: ['Custom Production Order ERP Module', 'Sales Force Automation (SFA)', 'Inventory Control'],
    location: 'Addis Ababa, Ethiopia'
  },

  // 5. Media Category
  {
    id: 'fana',
    name: 'Fana Media Corporation S.C',
    category: 'Media',
    subcategory: 'Broadcasting Network',
    logo: fanaLogo,
    partnershipType: 'Media & Broadcast Partner',
    website: 'https://www.fanabc.com/',
    accent: 'rose',
    profile: 'Leading national multi-language television, radio, and digital news network reaching millions of viewers daily.',
    relatedProjects: ['Technology Documentary Series Broadcasts', 'Tech Innovation Awareness Coverage'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'balageru',
    name: 'Balageru Television Network',
    category: 'Media',
    subcategory: 'TV Network',
    logo: balageruLogo,
    partnershipType: 'Media & Storytelling Partner',
    website: 'https://balagerutv.com/',
    accent: 'sky',
    profile: 'Popular television network dedicated to culture, education, innovation, and digital technology storytelling.',
    relatedProjects: ['Digital Innovation Documentaries', 'Tech Leader Feature Broadcasts'],
    location: 'Addis Ababa, Ethiopia'
  },
  {
    id: 'yonile',
    name: 'Yonile Digital Productions',
    category: 'Media',
    subcategory: 'Digital Production',
    logo: yonileLogo,
    partnershipType: 'Media Production Partner',
    website: 'https://www.facebook.com/yoniledigital/',
    accent: 'teal',
    profile: 'Creative digital production agency specializing in high-definition video engineering, cinematography, and tech media.',
    relatedProjects: ['Tech Documentary Video Engineering', 'Digital Event Media Production'],
    location: 'Addis Ababa, Ethiopia'
  }
];

const CATEGORIES = ['All', 'Government', 'University', 'Technology', 'Research', 'Business', 'Media'];

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

export const PartnersPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePartnerModal, setActivePartnerModal] = useState(null);

  const filteredPartners = PARTNERS_DIRECTORY.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.profile.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <Handshake size={14} className="text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 font-bold uppercase tracking-widest text-[11px]">
                PARTNER DIRECTORY &amp; ALLIANCES
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 font-roboto font-black tracking-tight leading-[1.08]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-roboto font-extrabold">
                Our Clients &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90e0ef] via-[#48cae4] to-cyan-200 font-roboto">
                  Strategic Partners
                </span>
              </h1>
            </div>

            <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-normal max-w-2xl font-sans">
              Yomtech Global works with a diverse range of government ministries, academic universities, research institutes, enterprise corporations, and media networks to deliver impactful digital transformation and technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#023e8a] hover:from-[#90e0ef] hover:to-[#0077b6] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-cyan-300/40"
              >
                <span>Become a Strategic Partner</span>
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
                  <p className="text-[9px] text-cyan-200 font-bold uppercase tracking-wider">Partnership Desk</p>
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
                    <h3 className="text-lg font-black text-white">19+ Verified Alliances</h3>
                    <p className="text-xs text-cyan-200">Across 6 Major Sector Categories</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Government Institutions · Universities · Technology Providers · Scientific Research · Enterprise Businesses · National Media.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SEARCH & CATEGORY FILTER BAR
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white sticky top-16 z-40 py-3.5 border-b border-cyan-400/30 shadow-lg backdrop-blur-md bg-slate-900/95">
        <div className="max-w-[90rem] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="overflow-x-auto flex items-center gap-2 scrollbar-none w-full sm:w-auto">
            <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest whitespace-nowrap mr-2 flex items-center gap-1.5">
              <Filter size={13} />
              <span>CATEGORIES:</span>
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

          {/* Search Box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search size={14} className="absolute left-3.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search partner directory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300 transition-all"
            />
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PARTNERS DIRECTORY GRID
      ════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F4F9FF] relative overflow-hidden font-sans border-b border-slate-200/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-left space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>Institutional Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Partner Directory &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                Organization Profiles
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl">
              Inspect partner organization profiles, partnership types, related Yomtech projects, and official web portals across public and commercial sectors.
            </p>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => {
              const a = accentMap[partner.accent];
              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                  className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                        <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest ${a.bg} ${a.border} ${a.text}`}>
                          {partner.category}
                        </span>
                        <span className="text-[10px] text-slate-500 block font-bold mt-1">{partner.subcategory}</span>
                      </div>
                    </div>

                    {/* Name & Type */}
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors leading-snug tracking-tight">
                        {partner.name}
                      </h3>
                      <span className={`text-xs font-bold ${a.text} block mt-0.5`}>{partner.partnershipType}</span>
                    </div>

                    {/* Profile text */}
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {partner.profile}
                    </p>

                    {/* Related Projects */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Related Projects &amp; Initiatives:</span>
                      <div className="space-y-1">
                        {partner.relatedProjects.map((proj) => (
                          <div key={proj} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <CheckCircle2 size={13} className="text-[#0284C7] shrink-0" />
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outbound Link & Modal Action */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-cyan-600 transition-colors"
                    >
                      <span>Official Portal</span>
                      <ExternalLink size={13} />
                    </a>

                    <button
                      onClick={() => setActivePartnerModal(partner)}
                      className={`px-4 py-2 rounded-xl bg-gradient-to-r ${a.gradient} text-white font-black text-[11px] uppercase tracking-wider shadow-sm hover:scale-105 transition-all`}
                    >
                      View Profile
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PARTNER PROFILE MODAL VIEW
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePartnerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 border-2 border-cyan-300 shadow-2xl my-8 space-y-6 relative"
            >
              <button
                onClick={() => setActivePartnerModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={activePartnerModal.logo} alt={activePartnerModal.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest">
                    {activePartnerModal.category} Sector
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-1">
                    {activePartnerModal.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-extrabold text-slate-400 uppercase tracking-wider block">Partnership Model:</span>
                <span className="font-bold text-[#0284C7] text-sm block">{activePartnerModal.partnershipType}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-extrabold text-slate-900 uppercase tracking-wider block text-[10px]">Organization Profile:</span>
                <p className="text-slate-600 font-medium leading-relaxed">{activePartnerModal.profile}</p>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-extrabold text-slate-900 uppercase tracking-wider block text-[10px]">Deployed Systems &amp; Projects:</span>
                <div className="space-y-1.5">
                  {activePartnerModal.relatedProjects.map((proj) => (
                    <div key={proj} className="flex items-center gap-2 p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 font-bold text-slate-800">
                      <CheckCircle2 size={15} className="text-[#0284C7] shrink-0" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                <a
                  href={activePartnerModal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0ED3DD] text-white font-black text-xs uppercase tracking-widest shadow-md flex items-center gap-2"
                >
                  <span>Visit Partner Website</span>
                  <ExternalLink size={15} />
                </a>
                <button
                  onClick={() => setActivePartnerModal(null)}
                  className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Profile
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
                Interested in a <span className="bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] bg-clip-text text-transparent">Strategic Alliance?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Yomtech Global partners with government institutions, universities, development agencies, and enterprises to drive long-term digital impact across Africa.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Initiate Partnership</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-9 py-4 rounded-full bg-white border-2 border-[#0ED3DD] text-[#0284C7] font-black text-xs uppercase tracking-widest shadow-md hover:bg-cyan-50 transition-all duration-300 flex items-center gap-3"
                >
                  <Layers size={18} className="text-[#0ED3DD]" />
                  <span>View Project Catalogue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnersPage;
