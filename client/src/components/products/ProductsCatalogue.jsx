import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Cpu, MessageSquare, Globe, Video,
  Building2, ExternalLink, ArrowRight, Sparkles, CheckCircle2
} from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

// Purpose-driven 3D Mascot Toy Characters for all 6 Products
import wabiSkillsToy from '../../assets/toys/wabiskills_toy.jpg';
import wabiJobsToy from '../../assets/toys/wabijob_toy.jpg';
import yomnexToy from '../../assets/toys/yomnex_toy.jpg';
import wabiXToy from '../../assets/toys/wabix_toy.jpg';
import mariToy from '../../assets/toys/mari_toy.jpg';
import yomtechMediaToy from '../../assets/toys/yomtech_media_toy.jpg';

const CATEGORIES = [
  { id: 'ALL', label: 'All Products' },
  { id: 'EDUCATION', label: 'Education & Talent' },
  { id: 'ENTERPRISE', label: 'Enterprise & ERP' },
  { id: 'COLLABORATION', label: 'Collaboration' },
  { id: 'MEDIA', label: 'Media & Community' },
];

export const PRODUCTS_PAIRS = [
  {
    left: {
      id: 'wabiskills',
      num: '01',
      name: 'WabiSkills',
      tagline: 'Technology Training & Digital Skills Platform',
      category: 'EDUCATION',
      badge: 'LIVE PLATFORM',
      link: 'https://wabiskills.com/',
      icon: GraduationCap,
      logo: wabiSkillsLogo,
      toy: wabiSkillsToy,
      shortDesc: 'Hands-on bootcamps, mentorship, and industry-ready digital skills programs for African tech professionals.',
      fullDesc: 'Comprehensive tech ecosystem offering practical software development, AI, cloud engineering, and cybersecurity programs designed to bridge the tech talent gap across Africa.',
      highlights: ['2,000+ Certified Graduates', '15+ Intensive Bootcamps', '95% Placement Rate'],
      stat: '2K+ Graduates',
    },
    right: {
      id: 'wabijob',
      num: '02',
      name: 'WabiJob',
      tagline: 'Talent & Recruitment Network',
      category: 'EDUCATION',
      badge: 'LIVE PLATFORM',
      link: 'https://wabijob.com/',
      icon: Briefcase,
      logo: wabiJobsLogo,
      toy: wabiJobsToy,
      shortDesc: 'Connecting skilled African technology professionals with global enterprise opportunities.',
      fullDesc: 'AI-driven talent marketplace bridging Ethiopian software engineers, data analysts, and IT specialists directly with vetted domestic and international companies.',
      highlights: ['500+ Active Tech Jobs', '50+ Global Employer Partners', 'Direct Skill Matching'],
      stat: '500+ Jobs Listed',
    },
  },
  {
    left: {
      id: 'yomnex',
      num: '03',
      name: 'Yomnex ERP',
      tagline: 'Custom Enterprise Resource Planning',
      category: 'ENTERPRISE',
      badge: 'ENTERPRISE ERP',
      link: '/products#yomnex',
      icon: Cpu,
      logo: yomnexLogo,
      toy: yomnexToy,
      shortDesc: 'Fully custom-built ERP system for government institutions, universities, and private enterprises.',
      fullDesc: 'Modular, scratch-engineered enterprise platform integrating Financial Management, HR & Payroll, Warehouse & Inventory, Procurement, and Executive Analytics.',
      highlights: ['25+ Enterprise Installs', '12 Modular Subsystems', '100% Custom Architecture'],
      stat: '25+ Deployments',
    },
    right: {
      id: 'wabix',
      num: '04',
      name: 'WabiX',
      tagline: 'Virtual Collaboration Platform',
      category: 'COLLABORATION',
      badge: 'COMING SOON',
      link: '/products#wabix',
      icon: MessageSquare,
      logo: logoEmblem,
      toy: wabiXToy,
      shortDesc: 'Virtual meeting and collaboration platform engineered for seamless online team engagement.',
      fullDesc: 'Low-latency digital workspace featuring HD video conferencing, interactive whiteboards, break-out rooms, and secure document collaboration for remote teams.',
      highlights: ['Ultra HD Video & Audio', 'Interactive Whiteboards', 'End-to-End Encryption'],
      stat: 'HD Video Quality',
    },
  },
  {
    left: {
      id: 'mari',
      num: '05',
      name: 'Mari',
      tagline: 'Social Media & Community App',
      category: 'MEDIA',
      badge: 'IN DEVELOPMENT',
      link: '/products#mari',
      icon: Globe,
      logo: logoEmblem,
      toy: mariToy,
      shortDesc: 'Social media application connecting digital communities and tech innovators across Ethiopia.',
      fullDesc: 'Next-generation community engagement platform fostering collaboration, knowledge sharing, networking, and creative content creation tailored for local tech ecosystems.',
      highlights: ['Local-First Data Privacy', 'AI Content Discovery', 'Cross-Platform Access'],
      stat: 'Local First AI',
    },
    right: {
      id: 'yomtech-media',
      num: '06',
      name: 'Yomtech Media',
      tagline: 'Tech Documentaries & Storytelling',
      category: 'MEDIA',
      badge: 'ACTIVE',
      link: '/products#yomtech-media',
      icon: Video,
      logo: logoEmblem,
      toy: yomtechMediaToy,
      shortDesc: 'Technology storytelling and media production platform showcasing Pan-African innovation.',
      fullDesc: 'Dedicated digital media network producing high-impact documentary films, founder spotlights, policy interviews, and tech documentaries highlighting Ethiopia’s digital renaissance.',
      highlights: ['10+ Tech Documentaries', 'Broadcast & Streaming Rights', 'Scientific Alliances'],
      stat: '10+ Productions',
    },
  },
];

const InterlockingProductRow = ({ left, right, idx, onProductSelect }) => {
  // Unique color gradient themes per row so no adjacent horizontal/vertical cards share colors
  const ROW_STYLES = [
    {
      // Row 0: 01 WabiSkills (Deep Executive Navy) | 02 WabiJob (Electric Sky Cyan)
      leftGrad: ['#03045E', '#0077B6', '#003F64'],
      rightGrad: ['#0077B6', '#00B4D8', '#48CAE4'],
      leftMobileBg: 'bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#003F64]',
      rightMobileBg: 'bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#48CAE4]',
      leftTaglineColor: 'text-cyan-300',
      rightTaglineColor: 'text-amber-300',
      leftCheckColor: 'text-cyan-300',
      rightCheckColor: 'text-amber-300',
      leftBadgeStyle: 'bg-white/20 text-white border-white/30 backdrop-blur-md',
      rightBadgeStyle: 'bg-[#03045E]/35 text-white border-white/40 shadow-sm',
    },
    {
      // Row 1: 03 Yomnex ERP (Royal Indigo) | 04 WabiX (Deep Emerald Teal)
      leftGrad: ['#1E1B4B', '#312E81', '#4338CA'],
      rightGrad: ['#064E3B', '#047857', '#059669'],
      leftMobileBg: 'bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
      rightMobileBg: 'bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669]',
      leftTaglineColor: 'text-indigo-200',
      rightTaglineColor: 'text-emerald-200',
      leftCheckColor: 'text-indigo-200',
      rightCheckColor: 'text-emerald-200',
      leftBadgeStyle: 'bg-white/20 text-white border-white/30 backdrop-blur-md',
      rightBadgeStyle: 'bg-white/20 text-white border-white/30 backdrop-blur-md',
    },
    {
      // Row 2: 05 Mari (Deep Sapphire Midnight) | 06 Yomtech Media (Luminous Ocean Blue)
      leftGrad: ['#0B192C', '#1E3E62', '#003F64'],
      rightGrad: ['#0284C7', '#0369A1', '#00B4D8'],
      leftMobileBg: 'bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#003F64]',
      rightMobileBg: 'bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#00B4D8]',
      leftTaglineColor: 'text-sky-300',
      rightTaglineColor: 'text-amber-300',
      leftCheckColor: 'text-sky-300',
      rightCheckColor: 'text-amber-300',
      leftBadgeStyle: 'bg-white/20 text-white border-white/30 backdrop-blur-md',
      rightBadgeStyle: 'bg-[#03045E]/35 text-white border-white/40 shadow-sm',
    },
  ];

  const style = ROW_STYLES[idx % ROW_STYLES.length];

  const leftFill = `url(#leftGrad-${idx})`;
  const rightFill = `url(#rightGrad-${idx})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className="relative w-full my-8 sm:my-10 group transition-all duration-300 hover:scale-[1.015]"
    >
      {/* DESKTOP SVG PUZZLE INTERLOCKING JOIN */}
      <div className="hidden md:block relative w-full aspect-[600/330] min-h-[560px] lg:min-h-[620px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.5)] rounded-2xl border-2 border-white/30 overflow-hidden transition-all duration-500 hover:border-cyan-300/60 hover:shadow-[0_30px_70px_rgba(0,180,216,0.35)]">
        
        {/* Flowing Ermin Image Texture Background Layers (Hero Section Style) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 mix-blend-overlay">
          <img src={ermiTwoImg} alt="" className="w-full h-full object-cover object-left-top" />
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25 mix-blend-soft-light">
          <img src={erminOneImg} alt="" className="w-full h-full object-cover object-right-top" />
        </div>

        <svg viewBox="0 0 600 350" className="w-full h-full overflow-visible pointer-events-none block relative z-0" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`leftGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={style.leftGrad[0]} />
              <stop offset="50%" stopColor={style.leftGrad[1]} />
              <stop offset="100%" stopColor={style.leftGrad[2]} />
            </linearGradient>
            <linearGradient id={`rightGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={style.rightGrad[0]} />
              <stop offset="50%" stopColor={style.rightGrad[1]} />
              <stop offset="100%" stopColor={style.rightGrad[2]} />
            </linearGradient>

            {/* Water Flow Liquid Gradient & Glow Defs */}
            <linearGradient id={`waterGrad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ED3DD" stopOpacity="1" />
              <stop offset="50%" stopColor="#1DA1F2" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ED3DD" stopOpacity="1" />
            </linearGradient>
            <filter id={`waterGlow-${idx}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 0,0 L 285,0 C 315,0 332,25 332,65 L 332,90 C 332,135 308,155 285,165 C 262,175 238,195 238,240 L 238,265 C 238,305 255,350 285,350 L 0,350 Z"
            fill={leftFill}
          />
          <path
            d="M 285,0 L 600,0 L 600,350 L 285,350 C 255,350 238,305 238,265 L 238,240 C 238,195 262,175 285,165 C 308,155 332,135 332,65 C 332,25 315,0 285,0 Z"
            fill={rightFill}
          />

          {/* Base Translucent S-Curve Divider */}
          <path
            d="M 285,0 C 315,0 332,25 332,65 L 332,90 C 332,135 308,155 285,165 C 262,175 238,195 238,240 L 238,265 C 238,305 255,350 285,350"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Animated Water Flow Liquid Stream Layer 1 */}
          <motion.path
            d="M 285,0 C 315,0 332,25 332,65 L 332,90 C 332,135 308,155 285,165 C 262,175 238,195 238,240 L 238,265 C 238,305 255,350 285,350"
            fill="none"
            stroke={`url(#waterGrad-${idx})`}
            strokeWidth="5"
            strokeDasharray="45 30"
            strokeLinecap="round"
            filter={`url(#waterGlow-${idx})`}
            animate={{ strokeDashoffset: [0, -300] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
          />

          {/* Animated Water Sparkle Flow Layer 2 */}
          <motion.path
            d="M 285,0 C 315,0 332,25 332,65 L 332,90 C 332,135 308,155 285,165 C 262,175 238,195 238,240 L 238,265 C 238,305 255,350 285,350"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeDasharray="14 45"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ repeat: Infinity, duration: 2.1, ease: "linear" }}
          />
        </svg>

        <div className="absolute inset-0 grid grid-cols-2 p-10 sm:p-12 lg:p-14 pointer-events-auto">
          {/* LEFT CARD CONTENT */}
          <div
            onClick={() => onProductSelect && onProductSelect(left.id)}
            className="relative flex flex-col justify-between pr-14 sm:pr-20 lg:pr-28 max-w-[90%] text-left cursor-pointer space-y-4 z-10"
          >
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[20px] bg-white border-2 border-white/90 flex items-center justify-center text-slate-900 shadow-[0_14px_32px_rgba(0,0,0,0.25)] ring-4 ring-white/30 group-hover:scale-110 group-hover:rotate-2 group-hover:border-cyan-300 transition-all duration-300">
                <img src={left.logo} alt={left.name} className="w-full h-full object-contain p-2.5 drop-shadow-xs" />
              </div>
              <span className="text-white font-black text-6xl lg:text-7xl font-display tracking-tight absolute right-[-24px] lg:right-[-32px] top-1 z-20 select-none opacity-90">
                {left.num}
              </span>
            </div>

            {/* Hero Section Background for Text + Mascot with Ermin Hero Background Textures (No Border Lines) */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl p-4 sm:p-5 lg:p-6 z-10 w-full">
              {/* Ermin Hero Texture Image Overlays */}
              <img src={ermiTwoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none" />
              <img src={erminOneImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-soft-light pointer-events-none" />

              {/* Content inside Hero Glass Container */}
              <div className="relative z-10 flex flex-col sm:flex-row items-end gap-5 lg:gap-6">
                {/* Floating Glass Pedestal Avatar Mascot Toy (Anchored at Bottom-Left Corner) */}
                <div className="relative w-26 h-26 sm:w-30 sm:h-30 lg:w-36 lg:h-36 rounded-full border-4 border-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.4)] ring-4 ring-white/30 bg-gradient-to-tr from-white/30 to-white/10 backdrop-blur-xl shrink-0 self-end group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 mb-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={left.toy} alt={left.name} className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bulleted Paragraph Text Parts */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight drop-shadow-sm">
                      {left.name}
                    </h3>
                    <span className={`text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full border-2 ${style.leftBadgeStyle}`}>
                      {left.badge}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm font-black ${style.leftTaglineColor} uppercase tracking-widest font-sans drop-shadow-xs`}>
                    {left.tagline}
                  </p>

                  <ul className="space-y-1.5 text-left text-white/95 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-300 font-bold text-base leading-none mt-0.5">•</span>
                      <p className="text-xs sm:text-sm font-black text-white leading-snug drop-shadow-xs">
                        <strong className="text-amber-200 uppercase font-black tracking-wider text-[11px] mr-1">Platform Focus:</strong>
                        {left.shortDesc}
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-300 font-bold text-base leading-none mt-0.5">•</span>
                      <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed line-clamp-2 lg:line-clamp-none">
                        <strong className="text-cyan-200 uppercase font-bold tracking-wider text-[11px] mr-1">Architecture:</strong>
                        {left.fullDesc}
                      </p>
                    </li>
                  </ul>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {left.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-2xl bg-white/20 border-2 border-white/35 text-xs font-extrabold text-white shadow-md backdrop-blur-xl hover:bg-white/30 hover:border-white/60 transition-all duration-300"
                      >
                        <CheckCircle2 size={13} className={`${style.leftCheckColor} shrink-0`} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD CONTENT */}
          <div
            onClick={() => onProductSelect && onProductSelect(right.id)}
            className="relative flex flex-col justify-between pl-14 sm:pl-20 lg:pl-28 max-w-[90%] ml-auto text-left cursor-pointer space-y-4 z-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-black text-6xl lg:text-7xl font-display tracking-tight absolute left-[-24px] lg:left-[-32px] bottom-1 z-20 select-none opacity-90">
                {right.num}
              </span>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[20px] bg-white border-2 border-white/90 flex items-center justify-center text-slate-900 shadow-[0_14px_32px_rgba(0,0,0,0.25)] ring-4 ring-white/30 group-hover:scale-110 group-hover:rotate-2 group-hover:border-cyan-300 transition-all duration-300 ml-auto">
                <img src={right.logo} alt={right.name} className="w-full h-full object-contain p-2.5 drop-shadow-xs" />
              </div>
            </div>

            {/* Hero Section Background for Text + Mascot with Ermin Hero Background Textures (No Border Lines) */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl p-4 sm:p-5 lg:p-6 z-10 w-full">
              {/* Ermin Hero Texture Image Overlays */}
              <img src={ermiTwoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none" />
              <img src={erminOneImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-soft-light pointer-events-none" />

              {/* Content inside Hero Glass Container */}
              <div className="relative z-10 flex flex-col sm:flex-row items-end gap-5 lg:gap-6">
                {/* Floating Glass Pedestal Avatar Mascot Toy (Anchored at Bottom-Left Corner) */}
                <div className="relative w-26 h-26 sm:w-30 sm:h-30 lg:w-36 lg:h-36 rounded-full border-4 border-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.4)] ring-4 ring-white/30 bg-gradient-to-tr from-white/30 to-white/10 backdrop-blur-xl shrink-0 self-end group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 mb-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={right.toy} alt={right.name} className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bulleted Paragraph Text Parts */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight drop-shadow-sm">
                      {right.name}
                    </h3>
                    <span className={`text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full border-2 ${style.rightBadgeStyle}`}>
                      {right.badge}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm font-black ${style.rightTaglineColor} uppercase tracking-widest font-sans drop-shadow-xs`}>
                    {right.tagline}
                  </p>

                  <ul className="space-y-1.5 text-left text-white/95 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-300 font-bold text-base leading-none mt-0.5">•</span>
                      <p className="text-xs sm:text-sm font-black text-white leading-snug drop-shadow-xs">
                        <strong className="text-amber-200 uppercase font-black tracking-wider text-[11px] mr-1">Platform Focus:</strong>
                        {right.shortDesc}
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-300 font-bold text-base leading-none mt-0.5">•</span>
                      <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed line-clamp-2 lg:line-clamp-none">
                        <strong className="text-cyan-200 uppercase font-bold tracking-wider text-[11px] mr-1">Architecture:</strong>
                        {right.fullDesc}
                      </p>
                    </li>
                  </ul>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {right.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-2xl bg-white/20 border-2 border-white/35 text-xs font-extrabold text-white shadow-md backdrop-blur-xl hover:bg-white/30 hover:border-white/60 transition-all duration-300"
                      >
                        <CheckCircle2 size={13} className={`${style.rightCheckColor} shrink-0`} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STACKED LAYOUT (Matches Desktop Design Exactly) */}
      <div className="md:hidden flex flex-col space-y-6 rounded-2xl overflow-hidden shadow-2xl">
        {/* LEFT CARD */}
        <div
          onClick={() => onProductSelect && onProductSelect(left.id)}
          className={`${style.leftMobileBg} text-white p-5 sm:p-7 rounded-2xl border-2 border-white/35 space-y-4 text-left relative cursor-pointer min-h-[260px] shadow-2xl backdrop-blur-xl overflow-hidden`}
        >
          {/* Ermin Hero Texture Image Overlays */}
          <img src={ermiTwoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay pointer-events-none" />
          <img src={erminOneImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light pointer-events-none" />

          {/* Top Row: Logo & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-14 h-14 rounded-[18px] bg-white border-2 border-white/90 flex items-center justify-center text-slate-900 shadow-xl ring-2 ring-white/30">
              <img src={left.logo} alt={left.name} className="w-full h-full object-contain p-2.5 drop-shadow-xs" />
            </div>
            <span className="text-white font-black text-5xl font-display opacity-90">{left.num}</span>
          </div>

          {/* Inner Content Card */}
          <div className="relative z-10 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl p-4 sm:p-5 border border-white/20 space-y-3">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Mascot Pedestal Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/90 shadow-xl ring-2 ring-white/30 bg-gradient-to-tr from-white/30 to-white/10 shrink-0 overflow-hidden">
                <img src={left.toy} alt={left.name} className="w-full h-full object-cover object-top scale-110" />
              </div>

              {/* Text & Bullets */}
              <div className="space-y-2 flex-1 min-w-0 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black text-white font-display tracking-tight break-words">{left.name}</h3>
                  <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-3 py-0.5 rounded-full border-2 ${style.leftBadgeStyle} shrink-0`}>
                    {left.badge}
                  </span>
                </div>

                <p className={`text-xs font-black ${style.leftTaglineColor} uppercase tracking-widest font-sans break-words`}>
                  {left.tagline}
                </p>

                <ul className="space-y-2 text-left text-white/95 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold text-base leading-none mt-0.5">•</span>
                    <p className="text-xs font-bold text-white leading-snug break-words">
                      <strong className="text-amber-200 uppercase font-black tracking-wider text-[10px] mr-1">Platform Focus:</strong>
                      {left.shortDesc}
                    </p>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-300 font-bold text-base leading-none mt-0.5">•</span>
                    <p className="text-xs font-medium text-white/95 leading-relaxed break-words">
                      <strong className="text-cyan-200 uppercase font-bold tracking-wider text-[10px] mr-1">Architecture:</strong>
                      {left.fullDesc}
                    </p>
                  </li>
                </ul>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {left.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl bg-white/20 border-2 border-white/35 text-[11px] font-extrabold text-white shadow-md backdrop-blur-xl break-words"
                    >
                      <CheckCircle2 size={12} className={`${style.leftCheckColor} shrink-0`} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          onClick={() => onProductSelect && onProductSelect(right.id)}
          className={`${style.rightMobileBg} text-white p-5 sm:p-7 rounded-2xl border-2 border-white/35 space-y-4 text-left relative cursor-pointer min-h-[260px] shadow-2xl backdrop-blur-xl overflow-hidden`}
        >
          {/* Ermin Hero Texture Image Overlays */}
          <img src={ermiTwoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay pointer-events-none" />
          <img src={erminOneImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light pointer-events-none" />

          {/* Top Row: Logo & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-14 h-14 rounded-[18px] bg-white border-2 border-white/90 flex items-center justify-center text-slate-900 shadow-xl ring-2 ring-white/30">
              <img src={right.logo} alt={right.name} className="w-full h-full object-contain p-2.5 drop-shadow-xs" />
            </div>
            <span className="text-white font-black text-5xl font-display opacity-90">{right.num}</span>
          </div>

          {/* Inner Content Card */}
          <div className="relative z-10 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl p-4 sm:p-5 border border-white/20 space-y-3">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Mascot Pedestal Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/90 shadow-xl ring-2 ring-white/30 bg-gradient-to-tr from-white/30 to-white/10 shrink-0 overflow-hidden">
                <img src={right.toy} alt={right.name} className="w-full h-full object-cover object-top scale-110" />
              </div>

              {/* Text & Bullets */}
              <div className="space-y-2 flex-1 min-w-0 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black text-white font-display tracking-tight break-words">{right.name}</h3>
                  <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-3 py-0.5 rounded-full border-2 ${style.rightBadgeStyle} shrink-0`}>
                    {right.badge}
                  </span>
                </div>

                <p className={`text-xs font-black ${style.rightTaglineColor} uppercase tracking-widest font-sans break-words`}>
                  {right.tagline}
                </p>

                <ul className="space-y-2 text-left text-white/95 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold text-base leading-none mt-0.5">•</span>
                    <p className="text-xs font-bold text-white leading-snug break-words">
                      <strong className="text-amber-200 uppercase font-black tracking-wider text-[10px] mr-1">Platform Focus:</strong>
                      {right.shortDesc}
                    </p>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-300 font-bold text-base leading-none mt-0.5">•</span>
                    <p className="text-xs font-medium text-white/95 leading-relaxed break-words">
                      <strong className="text-cyan-200 uppercase font-bold tracking-wider text-[10px] mr-1">Architecture:</strong>
                      {right.fullDesc}
                    </p>
                  </li>
                </ul>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {right.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl bg-white/20 border-2 border-white/35 text-[11px] font-extrabold text-white shadow-md backdrop-blur-xl break-words"
                    >
                      <CheckCircle2 size={12} className={`${style.rightCheckColor} shrink-0`} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import { fetchPublicCmsCategoryApi } from '../../services/api';

export const ProductsCatalogue = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [pairsPool, setPairsPool] = useState(PRODUCTS_PAIRS);

  React.useEffect(() => {
    const fetchServicesAndProducts = async () => {
      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data)) {
          const dbProducts = res.data.data.filter((a) => ['Services & Products Matrix', 'ENTERPRISE', 'EDUCATION', 'MEDIA'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
          if (dbProducts.length > 0) {
            // Group custom items into product pairs
            const customItems = dbProducts.map((p, idx) => ({
              id: p.id,
              num: `0${idx + 7}`,
              name: p.title,
              tagline: p.role || p.client || 'Enterprise Digital Platform',
              category: p.category === 'Services & Products Matrix' ? 'ENTERPRISE' : p.category,
              badge: p.status === 'PUBLISHED' ? 'LIVE PLATFORM' : 'ACTIVE',
              link: `/products#${p.id}`,
              icon: Cpu,
              logo: logoEmblem,
              toy: p.coverImage || yomnexToy,
              shortDesc: p.summary || p.excerpt || 'Enterprise platform engineered by YomTech Global.',
              fullDesc: p.fullContent || p.content || 'Scalable technology module built for enterprise cloud operations.',
              highlights: (p.readTime || 'Enterprise Security, Real-Time Analytics, API Integration').split(', '),
              stat: 'Enterprise Grade'
            }));

            // Chunk custom items into pairs
            const customPairs = [];
            for (let i = 0; i < customItems.length; i += 2) {
              customPairs.push({
                left: customItems[i],
                right: customItems[i + 1] || customItems[i]
              });
            }
            setPairsPool([...customPairs, ...PRODUCTS_PAIRS]);
          }
        }
      } catch (err) {
        console.error('Failed to fetch product matrix:', err);
      }
    };
    fetchServicesAndProducts();

    const sync = () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const dbProducts = parsed.filter((a) => ['Services & Products Matrix', 'ENTERPRISE', 'EDUCATION', 'MEDIA'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
          if (dbProducts.length > 0) {
            const customItems = dbProducts.map((p, idx) => ({
              id: p.id,
              num: `0${idx + 7}`,
              name: p.title,
              tagline: p.role || p.client || 'Enterprise Digital Platform',
              category: p.category === 'Services & Products Matrix' ? 'ENTERPRISE' : p.category,
              badge: p.status === 'PUBLISHED' ? 'LIVE PLATFORM' : 'ACTIVE',
              link: `/products#${p.id}`,
              icon: Cpu,
              logo: logoEmblem,
              toy: p.coverImage || yomnexToy,
              shortDesc: p.summary || p.excerpt || 'Enterprise platform engineered by YomTech Global.',
              fullDesc: p.fullContent || p.content || 'Scalable technology module built for enterprise cloud operations.',
              highlights: (p.readTime || 'Enterprise Security, Real-Time Analytics, API Integration').split(', '),
              stat: 'Enterprise Grade'
            }));
            const customPairs = [];
            for (let i = 0; i < customItems.length; i += 2) {
              customPairs.push({
                left: customItems[i],
                right: customItems[i + 1] || customItems[i]
              });
            }
            setPairsPool([...customPairs, ...PRODUCTS_PAIRS]);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener('cmsArticlesUpdated', sync);
    return () => window.removeEventListener('cmsArticlesUpdated', sync);
  }, []);

  const filteredPairs = pairsPool.filter((pair) => {
    if (activeCategory === 'ALL') return true;
    return pair.left.category === activeCategory || pair.right.category === activeCategory;
  });

  return (
    <section id="products-catalogue" className="relative py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-[#02132B] via-[#003F64] to-[#005580] text-white overflow-hidden font-sans border-b border-cyan-900/40">
      {/* Background Dot Grid & Texture Overlays */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(14, 211, 221, 0.3) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <img src={ermiTwoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none" />
      <img src={erminOneImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-soft-light pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* Section Header matching Reference Screenshot Style */}
        <div className="space-y-4 max-w-7xl text-left">
          {/* Badge with Bold Horizontal Cyan Accent Line Extension */}
          <div className="flex flex-wrap items-center gap-2 w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#03045E] border-2 border-[#0ED3DD] text-[#0ED3DD] text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(14,211,221,0.35)] backdrop-blur-md">
              <span className="text-[#0ED3DD] font-bold text-xs hidden sm:inline">◆</span>
              <span>FULL DIGITAL PRODUCT ECOSYSTEM</span>
              <span className="text-[#0ED3DD] font-bold text-xs hidden sm:inline">◆</span>
            </div>
            <div className="hidden sm:block h-[4px] flex-1 bg-gradient-to-r from-[#0ED3DD] via-[#00B4D8] via-50% to-transparent rounded-full shadow-[0_0_14px_rgba(14,211,221,0.85)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight font-display drop-shadow-md">
            Our Digital Products
          </h2>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-cyan-100/90 font-medium leading-relaxed font-sans max-w-3xl">
            YomTech Global builds and operates scalable digital platforms spanning education, talent, enterprise operations, collaboration, and tech media.
          </p>
        </div>

        {/* Category Filter Pills with Animated Dashed Neon Orbit Ring (Reference Image Style) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 relative z-20">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <div key={cat.id} className="relative p-1 sm:p-1.5 rounded-full group cursor-pointer">
                {/* Outer Glowing SVG Animated Dashed Capsule Orbit Ring */}
                <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none overflow-visible z-20">
                  <motion.rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="9999"
                    fill="none"
                    stroke={isActive ? '#0ED3DD' : '#0077B6'}
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    strokeDasharray="12 6 3 6"
                    className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'} transition-opacity duration-300`}
                    style={{
                      filter: isActive ? 'drop-shadow(0 0 10px #0ED3DD) drop-shadow(0 0 4px #1DA1F2)' : 'none',
                    }}
                    animate={{ strokeDashoffset: [0, -120] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                  />
                </svg>

                {/* Inner Pill Button with 3D Motion */}
                <motion.button
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{
                    scale: 1.06,
                    rotateY: 8,
                    rotateX: -4,
                    boxShadow: '0px 15px 30px rgba(14, 211, 221, 0.4)',
                  }}
                  whileTap={{ scale: 0.94, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  className={`relative px-4 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer overflow-hidden border-2 select-none z-10 ${
                    isActive
                      ? 'border-cyan-300 text-white shadow-2xl bg-[#004b75]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-cyan-400 hover:text-[#004b75] shadow-md'
                  }`}
                >
                  {/* Active Category Glowing Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#00B4D8] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon & Label for Active Category */}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="inline-block"
                      >
                        <Sparkles size={15} className="text-cyan-300" />
                      </motion.span>
                    )}
                    {cat.label}
                  </span>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Interlocking 2-Column Product Deck Rows with Smooth Layout Movement Flow */}
        <motion.div layout className="max-w-[1550px] mx-auto space-y-8 sm:space-y-12">
          {filteredPairs.map((pair, idx) => (
            <InterlockingProductRow
              key={pair.left.num}
              left={pair.left}
              right={pair.right}
              idx={idx}
              onProductSelect={onProductSelect}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsCatalogue;
