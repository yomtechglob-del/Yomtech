import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, ShieldCheck, Award, Users, CheckCircle2, Globe, Sparkles,
  Cpu, FileText, ChevronRight, Phone, Mail, MapPin, ExternalLink, Calendar,
  Layers, Lock, Server, Video, Briefcase, GraduationCap, ArrowRight, Zap, Target, Clock
} from 'lucide-react';

import { FounderCeoCard } from './FounderCeoCard';
import { CenterEcosystemVideo } from './CenterEcosystemVideo';

import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import companyImg from '../../assets/about/company.png';
import consultingTeamImg from '../../assets/about/consulting_team.jpg';
import heroTeamImg from '../../assets/about/hero_team.jpg';
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

// Government & Public Sector Partner Logos
import ssgiLogo from '../../assets/partners/ssgi.webp';
import insaLogo from '../../assets/partners/insa.webp';
import mintLogo from '../../assets/partners/mint.webp';
import eaiiLogo from '../../assets/partners/eaii.jpg';
import cityadminLogo from '../../assets/partners/cityadmin.png';

// Academic & University Partner Logos
import aastuLogo from '../../assets/partners/AASTU.jpg';
import astuLogo from '../../assets/partners/ASTU.png';
import arsiLogo from '../../assets/partners/Arsi.png';
import kotebeLogo from '../../assets/partners/kotebe.png';
import selectLogo from '../../assets/partners/Select business.webp';

// Media & Tech Storytelling Partner Logos
import fanaLogo from '../../assets/partners/fana televisions.png';
import balageruLogo from '../../assets/partners/Balageru TV.png';
import addisAiLogo from '../../assets/partners/addisai_logo.jpg';
import yonileLogo from '../../assets/partners/yonile.webp';

// Enterprise & Commercial Sector Client Logos
import bunnaLogo from '../../assets/partners/bunabank.png';
import stempowerLogo from '../../assets/partners/Global STEM Education Partner.png';
import ieNetworksLogo from '../../assets/partners/Enterprise Network Infrastructure.png';
import hospitalityLogo from '../../assets/partners/Hospitality Sector.png';
import novaLogo from '../../assets/partners/Nova Printing.webp';

export const CompanyProfileDetails = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  // Client & Partner Data directly from official document
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

  const platforms = [
    { id: 'wabiskills', name: 'WabiSkills', logo: wabiSkillsLogo, tag: 'Talent Academy', desc: 'Technology training and digital skills development platform' },
    { id: 'wabijob', name: 'WabiJob', logo: wabiJobsLogo, tag: 'Recruitment', desc: 'Talent and recruitment platform connecting professionals with opportunities' },
    { id: 'yomnex', name: 'Yomnex ERP', logo: yomnexLogo, tag: 'Enterprise ERP', desc: 'Fully custom-built enterprise resource planning system for organizations' },
    { id: 'wabix', name: 'WabiX', logo: logoEmblem, tag: 'Collaboration', desc: 'Virtual meeting and collaboration platform for online engagement' },
    { id: 'mari', name: 'Mari', logo: logoEmblem, tag: 'Social Media', desc: 'Next-generation social media application developed by YomTech Global' },
    { id: 'media', name: 'YomTech Media', logo: logoEmblem, tag: 'Tech Media', desc: 'Technology storytelling, documentaries, and innovation media platform' },
  ];

  const organizationalUnits = [
    {
      id: 'delivery',
      title: 'Project Delivery Team',
      tag: 'CORE ENGINE',
      badgeBg: 'bg-cyan-50 text-[#0284C7] border-cyan-200',
      icon: Briefcase,
      color: 'from-[#0284C7] via-cyan-500 to-sky-400',
      borderHover: 'hover:border-cyan-400 hover:shadow-cyan-500/15',
      accentBar: 'bg-gradient-to-r from-[#0284C7] to-cyan-400',
      desc: 'Custom software development, enterprise ERP systems, and public sector digital transformation.',
      metric: '99.4% On-Time Delivery'
    },
    {
      id: 'product',
      title: 'Product & Innovation Team',
      tag: 'R&D LABS',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: Cpu,
      color: 'from-indigo-600 via-purple-500 to-violet-400',
      borderHover: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
      accentBar: 'bg-gradient-to-r from-indigo-600 to-purple-400',
      desc: 'Engineering proprietary platforms including WabiSkills, WabiJob, WabiX, Mari, and Yomnex ERP.',
      metric: '5+ Flagship Platforms'
    },
    {
      id: 'training',
      title: 'Training & Capacity Building',
      tag: 'ACADEMY & LABS',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: GraduationCap,
      color: 'from-emerald-600 via-teal-500 to-green-400',
      borderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      accentBar: 'bg-gradient-to-r from-emerald-600 to-teal-400',
      desc: 'Professional bootcamp programs, practical repository labs, and university developer mentorship.',
      metric: '10,000+ Engineers Trained'
    },
    {
      id: 'support',
      title: 'Operations & Tech Support',
      tag: '24/7 SLA DEVOPS',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: ShieldCheck,
      color: 'from-amber-500 via-orange-500 to-yellow-400',
      borderHover: 'hover:border-amber-400 hover:shadow-amber-500/15',
      accentBar: 'bg-gradient-to-r from-amber-500 to-orange-400',
      desc: 'Cloud infrastructure, cybersecurity, 24/7 hotline support, and AI-integrated surveillance.',
      metric: '24/7 SLA Guarantee'
    },
    {
      id: 'partnerships',
      title: 'Marketing, Sales & Partnerships',
      tag: 'PAN-AFRICAN GROWTH',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Users,
      color: 'from-blue-600 via-dodgerblue to-sky-400',
      borderHover: 'hover:border-blue-400 hover:shadow-blue-500/15',
      accentBar: 'bg-gradient-to-r from-blue-600 to-cyan-400',
      desc: 'Strategic client relations, institutional agreements, and long-term public/private partnership development across Pan-African markets.',
      metric: '19+ Strategic Partners'
    },
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      tag: 'INITIATION & SCOPE',
      nextStep: 'Phase 02 Architecture',
      desc: 'Understanding client needs, defining functional scope, and setting clear project objectives & KPIs.',
      icon: Target,
      color: 'from-cyan-500 to-blue-600',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
      glow: 'hover:border-cyan-300 hover:shadow-[0_15px_45px_rgba(0,180,216,0.4)]'
    },
    {
      step: '02',
      title: 'System Architecture',
      tag: 'BLUEPRINT & SECURITY',
      nextStep: 'Phase 03 Sprints',
      desc: 'Creating scalable, secure cloud-native architecture blueprints, database schemas & API contracts.',
      icon: Layers,
      color: 'from-indigo-500 to-purple-600',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/50',
      glow: 'hover:border-indigo-300 hover:shadow-[0_15px_45px_rgba(99,102,241,0.4)]'
    },
    {
      step: '03',
      title: 'Agile Development',
      tag: 'ITERATIVE SPRINTS',
      nextStep: 'Phase 04 QA Audit',
      desc: 'Iterative full-stack engineering with continuous integration, automated code reviews & sprint demos.',
      icon: Cpu,
      color: 'from-sky-500 to-blue-600',
      badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/50',
      glow: 'hover:border-sky-300 hover:shadow-[0_15px_45px_rgba(56,189,248,0.4)]'
    },
    {
      step: '04',
      title: 'QA & Security Testing',
      tag: 'AUDIT & COMPLIANCE',
      nextStep: 'Phase 05 Deployment',
      desc: 'Rigorous performance load testing, penetration scans, vulnerability audits & ISO compliance checks.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
      glow: 'hover:border-emerald-300 hover:shadow-[0_15px_45px_rgba(16,185,129,0.4)]'
    },
    {
      step: '05',
      title: 'Deployment Rollout',
      tag: 'CI/CD LAUNCH',
      nextStep: 'Phase 06 24/7 SLA',
      desc: 'Zero-downtime automated CI/CD deployment rollout, environment provisioning & failover testing.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-400/50',
      glow: 'hover:border-purple-300 hover:shadow-[0_15px_45px_rgba(168,85,247,0.4)]'
    },
    {
      step: '06',
      title: 'Continuous Support',
      tag: '24/7 SLA & DEVOPS',
      nextStep: 'DevOps Maintenance',
      desc: 'Ongoing feature updates, proactive infrastructure monitoring, 24/7 SLA hotline & DevOps maintenance.',
      icon: Globe,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
      glow: 'hover:border-amber-300 hover:shadow-[0_15px_45px_rgba(245,158,11,0.4)]'
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 font-sans bg-[#F4F9FF] text-slate-900 overflow-hidden">

      {/* Background Dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ========================================================
            1. FOUNDER & CEO MESSAGE SECTION
        ======================================================== */}
        <div id="ceo-founder-message" className="scroll-mt-32 sm:scroll-mt-36">
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">CEO &amp; Founder Message</span>
              <span>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-4">
            {/* Left Column: Founder Photo & Emblem Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <FounderCeoCard />
              <div className="mt-4 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 italic text-xs font-semibold leading-relaxed text-center max-w-sm">
                "Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth."
              </div>
            </div>

            {/* Right Column: Official Message Statement */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                Empowering Pan-African Innovation &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                  Digital Transformation
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base font-sans">
                <p>
                  <strong className="text-slate-900">Dear Partners, Clients, and Stakeholders,</strong> Welcome to YomTech Global. Founded with a clear vision to empower organizations and individuals through technology, innovation, and digital transformation, we recognized the vital need to help enterprises overcome inefficient processes while creating high-impact career opportunities for talented African professionals.
                </p>
                <p>
                  Today, YomTech Global has grown into a dynamic multi-dimensional technology ecosystem delivering enterprise software solutions, custom ERP platforms, artificial intelligence, cybersecurity, tech talent development programs, and technology-focused media productions.
                </p>
                <p>
                  Through initiatives such as <strong className="text-[#0284C7]">WabiSkills, WabiJob, Yomnex ERP, WabiX, Mari</strong>, and our technology documentary platforms, we are driving digital sovereignty and inspiring the next generation of technology leaders.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Pan-African Vision
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Custom Systems
                </span>
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  Talent Academy
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            2. PRODUCTS & DIGITAL PLATFORMS
        ======================================================== */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8 py-20 lg:py-24 bg-[#03045E] text-white overflow-hidden my-16">

          {/* About Hero Section Background Images & Cyan Gradient Overlay (Full Section Body Background) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <img
              src={heroTeamImg}
              alt="About Hero Team Background"
              className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105"
            />
            <img
              src={ermiTwoImg}
              alt="Flowing Stream Background Layer"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay animate-river-flow-1"
            />
            <img
              src={erminOneImg}
              alt="Flowing Stream Layer Right"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light animate-river-flow-2"
            />
            {/* Dark Hero Cyan Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#0077B6]/85 to-[#0B1528]/95 pointer-events-none" />
          </div>

          {/* Dotted Grid Mesh Texture Matching Section 4 */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="max-w-[90rem] mx-auto relative z-10 space-y-10">
            {/* Section Divider */}
            <div className="relative flex items-center justify-start py-2 w-full max-w-full mx-auto">
              <div className="w-full h-[4px] bg-gradient-to-r from-[#00b4d8] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
              <div className="absolute left-0 px-6 py-2 bg-[#03045E]/90 border-[3px] border-cyan-400 rounded-full text-cyan-200 text-xs sm:text-sm font-black flex items-center gap-2 shadow-xl z-10 backdrop-blur-md">
                <span>◆</span>
                <span className="uppercase tracking-[0.25em]">Our Flagship Platforms</span>
                <span>◆</span>
              </div>
            </div>

            <div className="text-left space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                Integrated Digital Platforms &amp; Products
              </h2>
              <p className="text-base sm:text-lg text-cyan-100/85 font-medium leading-relaxed font-sans">
                YomTech Global builds and operates proprietary digital platforms that support education, recruitment, collaboration, and enterprise resource management.
              </p>
            </div>

            {/* Top 3 Platforms Row - Horizontal Flow Left Marquee */}
            <div className="relative w-full overflow-hidden water-flow-container py-4">
              {/* Glass Fade Edges matching dark cyan section */}
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#03045E] via-[#03045E]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0B1528] via-[#0B1528]/80 to-transparent z-10 pointer-events-none" />

              <div className="flex w-max gap-6 animate-water-flow-left hover:[animation-play-state:paused]">
                {[...platforms.slice(0, 3), ...platforms.slice(0, 3), ...platforms.slice(0, 3)].map((p, idx) => (
                  <div
                    key={`${p.id}-${idx}`}
                    style={{ background: 'linear-gradient(180deg, #FFFDF0 0%, #FFFFFF 30%, #FFFFFF 70%, #FFFDF0 100%)' }}
                    className="relative w-[22rem] sm:w-[24rem] rounded-[2rem] p-7 sm:p-8 border-2 border-amber-200/90 shadow-md shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-400 hover:-translate-y-2.5 transition-all duration-500 text-center flex flex-col items-center justify-between space-y-6 group overflow-hidden shrink-0 cursor-pointer"
                  >
                    {/* Sweeping Light Sheen Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-0 rounded-[2rem]" />

                    {/* Animated Liquid Water River Flow Movement Layer */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-[2rem] opacity-40 group-hover:opacity-75 transition-opacity duration-500">
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
                        className="absolute -top-1/2 left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-cyan-300/20 via-amber-200/25 to-transparent rotate-12"
                      />
                      <svg className="absolute bottom-0 left-0 w-[200%] h-24 opacity-35 text-cyan-400 fill-current animate-river-flow-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"></path>
                      </svg>
                      <svg className="absolute bottom-0 left-0 w-[200%] h-28 opacity-25 text-amber-300 fill-current animate-river-flow-2" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,30 C200,110 450,10 700,70 C950,130 1100,20 1200,80 L1200,120 L0,120 Z"></path>
                      </svg>
                    </div>

                    <div className="space-y-4 relative z-10 w-full flex flex-col items-center">
                      {/* Category Tag Top Center */}
                      <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/90 text-[#0284C7] text-[10px] font-black uppercase tracking-wider shadow-xs">
                        {p.tag}
                      </span>

                      {/* Floating White Logo Badge Center with Liquid Water Ripples */}
                      <div className="relative my-1">
                        <div className="absolute -inset-2 rounded-3xl bg-cyan-400/20 blur-sm animate-ping pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute -inset-4 rounded-3xl bg-amber-400/15 blur-md animate-pulse pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-3.5 shadow-md shadow-amber-500/10 border border-slate-100/90 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center overflow-hidden z-10">
                          <img src={p.logo} alt={p.name} className="w-full h-full object-contain filter drop-shadow-xs" />
                        </div>
                      </div>

                      {/* Platform Title & Description Centered */}
                      <div className="space-y-2 text-center">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Link Centered: Action Link / Enterprise CTA Button with Official URL */}
                    {p.id === 'yomnex' ? (
                      <div className="pt-4 border-t border-amber-100/80 w-full flex items-center justify-center relative z-10">
                        <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] via-cyan-500 to-sky-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 group-hover:shadow-xl group-hover:shadow-cyan-500/35 group-hover:scale-105 transition-all duration-300 flex items-center gap-2">
                          <span>Request System Demo</span>
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ) : p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-4 border-t border-amber-100/80 w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-[#0284C7] relative z-10 hover:text-cyan-700 transition-colors"
                      >
                        <span>{p.actionText || 'Explore Platform'}</span>
                        <div className="w-7 h-7 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#0284C7] flex items-center justify-center shadow-xs group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-500 opacity-80" />
                      </a>
                    ) : (
                      <div className="pt-4 border-t border-amber-100/80 w-full flex items-center justify-center gap-2.5 text-xs sm:text-sm font-extrabold text-[#0284C7] relative z-10">
                        <span className="group-hover:text-cyan-700 transition-colors">{p.actionText || 'Explore Platform'}</span>
                        <div className="w-7 h-7 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#0284C7] flex items-center justify-center shadow-xs group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER MASTER ECOSYSTEM ANNOUNCEMENT VIDEO SHOWCASE */}
            <CenterEcosystemVideo />

            {/* Bottom 3 Platforms Row - Horizontal Flow Right Marquee */}
            <div className="relative w-full overflow-hidden water-flow-container py-4">
              {/* Glass Fade Edges matching dark cyan section */}
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#03045E] via-[#03045E]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0B1528] via-[#0B1528]/80 to-transparent z-10 pointer-events-none" />

              <div className="flex w-max gap-6 animate-water-flow-right hover:[animation-play-state:paused]">
                {[...platforms.slice(3, 6), ...platforms.slice(3, 6), ...platforms.slice(3, 6)].map((p, idx) => (
                  <div
                    key={`${p.id}-${idx}`}
                    style={{ background: 'linear-gradient(180deg, #FFFDF0 0%, #FFFFFF 30%, #FFFFFF 70%, #FFFDF0 100%)' }}
                    className="relative w-[22rem] sm:w-[24rem] rounded-[2rem] p-7 sm:p-8 border-2 border-amber-200/90 shadow-md shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-400 hover:-translate-y-2.5 transition-all duration-500 text-center flex flex-col items-center justify-between space-y-6 group overflow-hidden shrink-0 cursor-pointer"
                  >
                    {/* Sweeping Light Sheen Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-0 rounded-[2rem]" />

                    {/* Animated Liquid Water River Flow Movement Layer */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-[2rem] opacity-40 group-hover:opacity-75 transition-opacity duration-500">
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
                        className="absolute -top-1/2 left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-cyan-300/20 via-amber-200/25 to-transparent rotate-12"
                      />
                      <svg className="absolute bottom-0 left-0 w-[200%] h-24 opacity-35 text-cyan-400 fill-current animate-river-flow-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"></path>
                      </svg>
                      <svg className="absolute bottom-0 left-0 w-[200%] h-28 opacity-25 text-amber-300 fill-current animate-river-flow-2" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,30 C200,110 450,10 700,70 C950,130 1100,20 1200,80 L1200,120 L0,120 Z"></path>
                      </svg>
                    </div>

                    <div className="space-y-4 relative z-10 w-full flex flex-col items-center">
                      {/* Category Tag & Coming Soon Badge Top Center */}
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/90 text-[#0284C7] text-[10px] font-black uppercase tracking-wider shadow-xs">
                          {p.tag}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/80 text-amber-700 text-[10px] font-black uppercase tracking-widest shadow-xs flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-amber-600 animate-pulse" />
                          COMING SOON
                        </span>
                      </div>

                      {/* Floating White Logo Badge Center with Liquid Water Ripples */}
                      <div className="relative my-1">
                        <div className="absolute -inset-2 rounded-3xl bg-cyan-400/20 blur-sm animate-ping pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute -inset-4 rounded-3xl bg-amber-400/15 blur-md animate-pulse pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-3.5 shadow-md shadow-amber-500/10 border border-slate-100/90 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center overflow-hidden z-10">
                          <img src={p.logo} alt={p.name} className="w-full h-full object-contain filter drop-shadow-xs" />
                        </div>
                      </div>

                      {/* Platform Title & Description Centered */}
                      <div className="space-y-2 text-center">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Link Centered: Coming Soon Status Node */}
                    <div className="pt-4 border-t border-amber-100/80 w-full flex items-center justify-center gap-2.5 text-xs sm:text-sm font-extrabold text-amber-700 relative z-10">
                      <span className="group-hover:text-amber-800 transition-colors">Coming Soon</span>
                      <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-300 text-amber-600 flex items-center justify-center shadow-xs group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            3. LEADERSHIP & TEAM STRUCTURE
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Organizational Structure</span>
              <span>◆</span>
            </div>
          </div>

          <div className="space-y-10 text-center py-4">
            <div className="space-y-3 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Structured, Results-Driven Organization
              </h2>
              <p className="text-slate-500 font-medium text-base">
                Our teams are organized into specialized functional units collaborating from initial architecture to long-term operational support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {organizationalUnits.map((unit) => {
                const IconComponent = unit.icon;
                const isPartnerships = unit.id === 'partnerships';
                return (
                  <div
                    key={unit.id}
                    style={{ background: 'linear-gradient(180deg, #F2FAFF 0%, #FDFEFF 50%, #F4FAFF 100%)' }}
                    className={`group relative rounded-[2.2rem] backdrop-blur-xl p-7 sm:p-8 border-2 border-cyan-100/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between items-center text-center space-y-5 ${unit.borderHover} ${isPartnerships ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  >
                    {/* Top Gradient Accent Bar */}
                    <div className={`absolute top-0 inset-x-0 h-1.5 ${unit.accentBar}`} />

                    {/* Sweeping Light Sheen Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

                    {/* Top Badge & 3D Icon Container */}
                    <div className="flex flex-col items-center space-y-3 relative z-10">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-xs ${unit.badgeBg}`}>
                        {unit.tag}
                      </span>

                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${unit.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <IconComponent className="w-7 h-7 filter drop-shadow-sm" />
                      </div>
                    </div>

                    {/* Main Title & Copy */}
                    <div className={`space-y-2 relative z-10 ${isPartnerships ? 'max-w-xl' : 'max-w-sm'}`}>
                      <h4 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors">
                        {unit.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {unit.desc}
                      </p>
                    </div>

                    {/* Bottom Metric Pill */}
                    <div className="pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-black text-slate-700 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-[11px] font-mono tracking-wide text-slate-500 uppercase">{unit.metric}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* ========================================================
            4. DEVELOPMENT METHODOLOGY (6 PHASES)
        ======================================================== */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8 py-20 lg:py-24 bg-[#F4F9FF] text-slate-900 overflow-hidden my-16">

          {/* Light Dotted Grid Mesh Texture Matching Image 2 */}
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="max-w-[90rem] mx-auto relative z-10 space-y-10">
            {/* Section Divider */}
            <div className="relative flex items-center justify-start py-2 w-full max-w-full mx-auto">
              <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
              <div className="absolute left-0 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
                <span>◆</span>
                <span className="uppercase tracking-[0.25em]">Development Methodology</span>
                <span>◆</span>
              </div>
            </div>

            <div className="text-left space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                Structured &amp; Agile Engineering Execution
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed font-sans">
                We follow a disciplined 6-phase agile methodology ensuring transparency, security, and precision alignment with client objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {methodologySteps.map((m, idx) => {
                const IconComp = m.icon;
                const hasNextInRow = (idx + 1) % 3 !== 0 && idx < methodologySteps.length - 1;
                return (
                  <div
                    key={m.step}
                    style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                    className="group relative rounded-[2.2rem] p-7 sm:p-8 border-2 border-indigo-200/80 shadow-md shadow-indigo-500/5 text-slate-900 hover:border-[#0284C7] hover:shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-2.5 transition-all duration-500 overflow-visible flex flex-col justify-between space-y-6"
                  >
                    {/* Top Floating Watermark Number */}
                    <span className="text-6xl font-black font-display absolute top-3 right-5 select-none text-cyan-200/50 group-hover:text-[#0284C7]/20 group-hover:scale-110 transition-all duration-500">
                      {m.step}
                    </span>

                    {/* Sweeping Cyber Light Sheen Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-0 rounded-[2.2rem]" />

                    {/* Header Row: Phase Tag */}
                    <div className="flex items-center justify-start relative z-10">
                      <span className="px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-50 text-[#0284C7] border border-cyan-200/80 shadow-xs group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300">
                        PHASE {m.step} • {m.tag}
                      </span>
                    </div>

                    {/* Main Content: Title & Copy */}
                    <div className="space-y-2.5 relative z-10 text-left">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display group-hover:text-[#0284C7] transition-colors duration-300">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    {/* Bottom Interactive Cyber Process Flow Indicator */}
                    <div className="pt-4 border-t border-cyan-100/80 flex items-center justify-between text-[11px] font-extrabold text-slate-600 relative z-10">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                        <span className="text-slate-500 font-mono">Process Phase {m.step}</span>
                      </span>

                      <div className="flex items-center gap-1.5 bg-[#0284C7] border border-cyan-300/80 px-3.5 py-1 rounded-full text-[10px] font-black text-white group-hover:bg-cyan-600 group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <span>{m.nextStep}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Desktop Floating Arrow Connector Bridge Node */}
                    {hasNextInRow && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] items-center justify-center z-30 shadow-md group-hover:scale-125 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 pointer-events-none">
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* ========================================================
            5. CLIENTS & STRATEGIC PARTNERSHIPS MATRIX
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Clients &amp; Strategic Partners</span>
              <span>◆</span>
            </div>
          </div>

          <div className="space-y-12 text-left py-4">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Trusted by Leading Public &amp; Private Institutions
              </h2>
              <p className="text-slate-500 font-medium text-base">
                YomTech Global works closely with government ministries, national security agencies, universities, media networks, and financial institutions.
              </p>
            </div>

            {/* Public Sector & Government (Water Flow Left) */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0284C7] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0284C7]" />
                <span>Government &amp; Public Sector Partners</span>
              </h4>

              <div className="relative w-full overflow-hidden water-flow-container py-2">
                {/* Glass Fade Edges for Water Sheen Effect */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-left">
                  {[...publicInstitutions, ...publicInstitutions, ...publicInstitutions].map((item, idx) => (
                    <a
                      key={idx}
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

              <div className="relative w-full overflow-hidden water-flow-container py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-right">
                  {[...academicPartners, ...academicPartners, ...academicPartners].map((item, idx) => (
                    <a
                      key={idx}
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

            {/* Media & Innovation Organizations (Water Flow Left Fast) */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-600" />
                <span>Media &amp; Tech Storytelling Organizations</span>
              </h4>

              <div className="relative w-full overflow-hidden water-flow-container py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-left-fast">
                  {[...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners].map((item, idx) => (
                    <a
                      key={idx}
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

            {/* Enterprise & Private Sector Clients (Water Flow Right) */}
            <div className="space-y-4 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Enterprise &amp; Commercial Sector Clients</span>
              </h4>

              <div className="relative w-full overflow-hidden water-flow-container py-2">
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F4F9FF] via-[#F4F9FF]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-4 sm:gap-5 animate-water-flow-right">
                  {[...enterpriseClients, ...enterpriseClients, ...enterpriseClients].map((item, idx) => (
                    <a
                      key={idx}
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


        {/* ========================================================
            6. LEGAL, CERTIFICATIONS & OFFICIAL COMPANY PROFILE
        ======================================================== */}
        <div>
          {/* Section Divider */}
          <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto mb-10">
            <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
            <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
              <span>◆</span>
              <span className="uppercase tracking-[0.25em]">Legal &amp; Official Company Credentials</span>
              <span>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Left: Official Business License Details */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border-2 border-slate-200/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-[#0284C7] text-xs font-black uppercase tracking-widest border border-cyan-200">
                  <FileText className="w-4 h-4" />
                  <span>Official Registration &amp; Trade License</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Certified Commercial Entity &amp; IP Holder
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Issued under Commercial Registration &amp; Business License Proclamation No. 980/2016 by the Addis Ababa City Administration Trade Bureau.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Company Name:</span>
                    <span className="text-sm font-extrabold text-slate-900 font-display block">YomTech Eng.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Trade License No:</span>
                    <span className="text-sm font-extrabold text-cyan-700 font-mono block">14/667/3936102/2014</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Registered Capital:</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-display block">10,000,000 ETB</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Core Field:</span>
                    <span className="text-sm font-extrabold text-slate-900 font-display block">Software Design &amp; Systems</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Intellectual Property Authority Certified
                </span>
                <span className="font-mono text-[10px] bg-emerald-200/60 px-2 py-0.5 rounded font-black">ACTIVE 2025</span>
              </div>
            </div>

            {/* Right: Direct Contact & Location Info (Using Hero Section Background) */}
            <div className="relative lg:col-span-5 bg-gradient-to-br from-[#03045E] via-[#0077B6] to-[#00B4D8] text-white rounded-3xl p-8 border-2 border-cyan-300/40 shadow-2xl shadow-cyan-900/40 space-y-6 flex flex-col justify-between overflow-hidden">
              {/* Background Glow Accents matching Hero section */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-black uppercase tracking-widest border border-cyan-300/40 shadow-sm">
                  <MapPin className="w-4 h-4 text-cyan-300" />
                  <span>Headquarters &amp; Direct Hotline</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight drop-shadow-sm">
                  Get in Touch with YomTech Global
                </h3>

                <p className="text-xs sm:text-sm text-cyan-50 font-medium leading-relaxed opacity-95">
                  Connect with our executive leadership, project delivery teams, or WabiSkills academy leads.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all shadow-lg group">
                    <Phone className="w-5 h-5 text-cyan-300 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] text-cyan-200/90 uppercase font-bold tracking-wider">Official Telephones:</p>
                      <p className="text-xs sm:text-sm font-extrabold text-white font-mono">+251 11 668 7546 / +251 97 766 6699</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all shadow-lg group">
                    <Mail className="w-5 h-5 text-cyan-300 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] text-cyan-200/90 uppercase font-bold tracking-wider">Official Web &amp; Email:</p>
                      <p className="text-xs sm:text-sm font-extrabold text-cyan-200 font-mono">www.yomtechglobal.org</p>
                      <p className="text-[11px] text-white/90 font-mono">ealemayehu3@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all shadow-lg group">
                    <MapPin className="w-5 h-5 text-cyan-300 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] text-cyan-200/90 uppercase font-bold tracking-wider">Headquarters Address:</p>
                      <p className="text-xs font-bold text-white">Megenagna / Kolfe Keraniyo, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] text-cyan-100 font-mono">
                <span>© 2025 YomTech Global</span>
                <span className="text-amber-300 font-extrabold tracking-wider drop-shadow-sm">Pan-African Powerhouse</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyProfileDetails;
