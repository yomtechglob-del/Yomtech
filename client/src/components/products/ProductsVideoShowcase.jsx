import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, X, ChevronLeft, ChevronRight, Building2, ExternalLink,
  Video, Sparkles, Clock, Eye, Youtube, ArrowRight, Users, Tv
} from 'lucide-react';

// Logos
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// ─── REAL Videos from @WabiSkills & @yomtech ─────────────────────────────────
// Source: youtube.com/@WabiSkills  |  youtube.com/@yomtech
const WABISKILLS_VIDEOS = [
  { id: 'uolNutZDGSs', title: 'ደግሜ ብፈጠርም ይሄን ነው ምሆነው', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
  { id: 'szeeGAP6SKg', title: 'የWabiskills ተማሪ ምስክርነት', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
  { id: '85GKAw7UdKQ', title: 'Testimony From Students', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
  { id: 'C3Cev-IohUc', title: 'ትልቅ ለውጥ ይመጣል ብለን ተስፋ እናደርጋለን!', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
  { id: 'KOZDUIz7swY', title: 'በቅርቡ በ @yomtech ይጠብቁን', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
  { id: 'VIMQqQPUMEw', title: 'ነጻ እድሉን ላላመለከታችሁ!', channel: 'WabiSkills', channelHandle: '@WabiSkills' },
];

const YOMTECH_VIDEOS = [
  { id: '4xtWSlr_q14', title: 'Google IO — Episode 7', channel: 'Yomtech', channelHandle: '@yomtech' },
  { id: 'PQ00Vons-ms', title: 'የወደፊቱ የ AI አለም | Yomtech on Fana TV | Episode 4', channel: 'Yomtech', channelHandle: '@yomtech' },
  { id: 'CL5Otcr_ywI', title: 'Drone Technology | የድሮን ቴክኖሎጂ', channel: 'Yomtech', channelHandle: '@yomtech' },
  { id: 'NgaFdNw8NV0', title: 'የወደፊቱ አስፈሪው ቴክኖሎጂ | Yomtech on Fana TV | Episode 3', channel: 'Yomtech', channelHandle: '@yomtech' },
  { id: 'M-m-6KCTiZ0', title: 'Did America Really Land on the Moon? | Yomtech Ep 2', channel: 'Yomtech', channelHandle: '@yomtech' },
  { id: '0FapnBKx-e4', title: 'ዮምቴክ በፋና ክፍል 1 | Yomtech With Ermias on Fana TV Ep1', channel: 'Yomtech', channelHandle: '@yomtech' },
];

// Per-product video assignments using real channel videos
const PRODUCT_VIDEOS = [
  {
    productId: 'wabiskills',
    productName: 'WabiSkills',
    productTagline: 'Technology Training Platform',
    logo: wabiSkillsLogo,
    accentHex: '#D97706',
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    heroGrad: 'from-amber-900 via-orange-800 to-amber-950',
    glowColor: 'rgba(217,119,6,0.5)',
    channelUrl: 'https://www.youtube.com/@WabiSkills',
    channelHandle: '@WabiSkills',
    channelSubs: '2.39K',
    videos: [
      { ...WABISKILLS_VIDEOS[0], type: 'STUDENT STORY', featured: true },
      { ...WABISKILLS_VIDEOS[1], type: 'TESTIMONIAL' },
      { ...WABISKILLS_VIDEOS[2], type: 'TESTIMONIAL' },
      { ...WABISKILLS_VIDEOS[3], type: 'INTERVIEW' },
      { ...WABISKILLS_VIDEOS[5], type: 'SCHOLARSHIP' },
    ],
  },
  {
    productId: 'wabijob',
    productName: 'WabiJob',
    productTagline: 'Talent & Recruitment Network',
    logo: wabiSkillsLogo,
    accentHex: '#059669',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    heroGrad: 'from-emerald-900 via-teal-800 to-emerald-950',
    glowColor: 'rgba(5,150,105,0.5)',
    channelUrl: 'https://www.youtube.com/@WabiSkills',
    channelHandle: '@WabiSkills',
    channelSubs: '2.39K',
    videos: [
      { ...WABISKILLS_VIDEOS[3], type: 'OPPORTUNITY', featured: true },
      { ...WABISKILLS_VIDEOS[4], type: 'ANNOUNCEMENT' },
      { ...WABISKILLS_VIDEOS[5], type: 'SCHOLARSHIP' },
      { ...WABISKILLS_VIDEOS[1], type: 'TESTIMONIAL' },
      { ...WABISKILLS_VIDEOS[2], type: 'STUDENT STORY' },
    ],
  },
  {
    productId: 'yomnex',
    productName: 'Yomnex ERP',
    productTagline: 'Custom Enterprise ERP System',
    logo: yomnexLogo,
    accentHex: '#0284C7',
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    heroGrad: 'from-cyan-900 via-sky-800 to-cyan-950',
    glowColor: 'rgba(2,132,199,0.5)',
    channelUrl: 'https://www.youtube.com/@yomtech',
    channelHandle: '@yomtech',
    channelSubs: '1.03K',
    videos: [
      { ...YOMTECH_VIDEOS[0], type: 'TECH SHOW', featured: true },
      { ...YOMTECH_VIDEOS[1], type: 'AI & FUTURE TECH' },
      { ...YOMTECH_VIDEOS[2], type: 'TECHNOLOGY' },
      { ...YOMTECH_VIDEOS[3], type: 'TECH SERIES' },
      { ...YOMTECH_VIDEOS[4], type: 'SCIENCE' },
    ],
  },
  {
    productId: 'wabix',
    productName: 'WabiX',
    productTagline: 'Virtual Collaboration Platform',
    logo: logoEmblem,
    accentHex: '#9333EA',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    heroGrad: 'from-purple-900 via-violet-800 to-purple-950',
    glowColor: 'rgba(147,51,234,0.5)',
    channelUrl: 'https://www.youtube.com/@yomtech',
    channelHandle: '@yomtech',
    channelSubs: '1.03K',
    videos: [
      { ...YOMTECH_VIDEOS[3], type: 'FUTURE TECH', featured: true },
      { ...YOMTECH_VIDEOS[4], type: 'SCIENCE' },
      { ...WABISKILLS_VIDEOS[4], type: 'ANNOUNCEMENT' },
      { ...YOMTECH_VIDEOS[0], type: 'TECH SHOW' },
      { ...YOMTECH_VIDEOS[2], type: 'DRONE TECH' },
    ],
  },
  {
    productId: 'mari',
    productName: 'Mari',
    productTagline: 'Social Media & Community App',
    logo: logoEmblem,
    accentHex: '#0284C7',
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    heroGrad: 'from-sky-900 via-blue-800 to-sky-950',
    glowColor: 'rgba(2,132,199,0.4)',
    channelUrl: 'https://www.youtube.com/@WabiSkills',
    channelHandle: '@WabiSkills',
    channelSubs: '2.39K',
    videos: [
      { ...WABISKILLS_VIDEOS[1], type: 'COMMUNITY', featured: true },
      { ...WABISKILLS_VIDEOS[2], type: 'STORIES' },
      { ...WABISKILLS_VIDEOS[0], type: 'INSIGHT' },
      { ...WABISKILLS_VIDEOS[3], type: 'SPOTLIGHT' },
      { ...WABISKILLS_VIDEOS[5], type: 'ANNOUNCEMENT' },
    ],
  },
  {
    productId: 'yomtech-media',
    productName: 'Yomtech Media',
    productTagline: 'Tech Documentaries & Storytelling',
    logo: logoEmblem,
    accentHex: '#4F46E5',
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    heroGrad: 'from-indigo-900 via-violet-800 to-indigo-950',
    glowColor: 'rgba(79,70,229,0.5)',
    channelUrl: 'https://www.youtube.com/@yomtech',
    channelHandle: '@yomtech',
    channelSubs: '1.03K',
    videos: [
      { ...YOMTECH_VIDEOS[5], type: 'DOCUMENTARY', featured: true },
      { ...YOMTECH_VIDEOS[1], type: 'TV SHOW' },
      { ...YOMTECH_VIDEOS[3], type: 'TECH SERIES' },
      { ...YOMTECH_VIDEOS[2], type: 'DRONE TECH' },
      { ...YOMTECH_VIDEOS[4], type: 'SCIENCE' },
    ],
  },
];

// ─── FEATURED VIDEO (one BEFORE the grid) ─────────────────────────────────────
// Uses the top Yomtech Fana TV video as the hero featured video
const HERO_FEATURED_VIDEO = {
  ...YOMTECH_VIDEOS[5],
  type: 'FEATURED EPISODE',
  channel: 'Yomtech',
  channelHandle: '@yomtech',
  channelUrl: 'https://www.youtube.com/@yomtech',
  logo: logoEmblem,
  glowColor: 'rgba(79,70,229,0.7)',
  heroGrad: 'from-indigo-950 via-violet-900 to-indigo-950',
};

// BOTTOM FEATURED VIDEO — WabiSkills top story
const BOTTOM_FEATURED_VIDEO = {
  ...WABISKILLS_VIDEOS[0],
  type: 'STUDENT SPOTLIGHT',
  channel: 'WabiSkills',
  channelHandle: '@WabiSkills',
  channelUrl: 'https://www.youtube.com/@WabiSkills',
  logo: wabiSkillsLogo,
  glowColor: 'rgba(217,119,6,0.7)',
  heroGrad: 'from-amber-950 via-orange-900 to-amber-950',
};

// ─── Video Modal ──────────────────────────────────────────────────────────────
const VideoModal = ({ videoId, title, product, onClose }) => {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(28px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute -inset-16 rounded-full blur-[100px] opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${product?.glowColor || 'rgba(2,132,199,0.5)'} 0%, transparent 70%)` }}
        />
        <div className="flex items-center justify-between mb-4 px-1 relative z-10">
          <div className="flex items-center gap-3">
            {product?.logo && (
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 p-1 flex items-center justify-center">
                <img src={product.logo} alt="" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-white font-black text-sm line-clamp-1 max-w-xs">{title}</p>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
            <X size={16} />
          </button>
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
          style={{ aspectRatio: '16/9', boxShadow: `0 0 80px ${product?.glowColor || 'rgba(2,132,199,0.4)'}` }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-white/30 text-xs text-center mt-3 font-mono">ESC to close · powered by YouTube</p>
      </motion.div>
    </motion.div>
  );
};

// ─── HERO FEATURED VIDEO BLOCK (BEFORE grid) ─────────────────────────────────
const HeroFeaturedVideo = ({ onPlay }) => {
  const [hovered, setHovered] = useState(false);
  const thumb = `https://img.youtube.com/vi/${HERO_FEATURED_VIDEO.id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-[0_40px_100px_rgba(0,0,0,0.22)] border-2 border-white/20"
      style={{ aspectRatio: '21/8' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(HERO_FEATURED_VIDEO)}
    >
      {/* BG Thumbnail */}
      <img
        src={thumb}
        alt={HERO_FEATURED_VIDEO.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Center: Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          animate={hovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          {hovered && (
            <>
              <motion.div initial={{ scale: 0.6, opacity: 0.7 }} animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-red-500/40" />
              <motion.div initial={{ scale: 0.6, opacity: 0.5 }} animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 0.35 }}
                className="absolute inset-0 rounded-full bg-red-500/20" />
            </>
          )}
          <div className="relative w-24 h-24 rounded-full bg-red-600 border-4 border-white text-white flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.8)] hover:bg-red-700 transition-all">
            <Play size={40} fill="white" className="text-white ml-2" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── BOTTOM FEATURED VIDEO BLOCK (AFTER grid) ────────────────────────────────
const BottomFeaturedVideo = ({ onPlay }) => {
  const [hovered, setHovered] = useState(false);
  const thumb = `https://img.youtube.com/vi/${BOTTOM_FEATURED_VIDEO.id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-[0_40px_100px_rgba(0,0,0,0.22)] border-2 border-white/20"
      style={{ aspectRatio: '21/8' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(BOTTOM_FEATURED_VIDEO)}
    >
      <img src={thumb} alt={BOTTOM_FEATURED_VIDEO.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Center: Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div animate={hovered ? { scale: 1.15 } : { scale: 1 }} transition={{ duration: 0.35 }} className="relative">
          {hovered && (
            <>
              <motion.div initial={{ scale: 0.6, opacity: 0.7 }} animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-full bg-red-500/40" />
              <motion.div initial={{ scale: 0.6, opacity: 0.5 }} animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 0.35 }} className="absolute inset-0 rounded-full bg-red-500/20" />
            </>
          )}
          <div className="relative w-24 h-24 rounded-full bg-red-600 border-4 border-white text-white flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.8)] hover:bg-red-700 transition-all">
            <Play size={40} fill="white" className="text-white ml-2" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Small Video Card for Grid ────────────────────────────────────────────────
const VideoCard = ({ video, product, onPlay, featured, isTopRight }) => {
  const [hovered, setHovered] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${featured ? 'col-span-2' : ''} ${isTopRight ? 'h-full min-h-full' : ''}`}
      style={{ aspectRatio: featured ? '16/7' : isTopRight ? '16/14' : '16/10' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(video, product)}
    >
      {/* 100% Clean YouTube Thumbnail Image */}
      <img src={thumb} alt={video.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div animate={hovered ? { scale: 1.15 } : { scale: 1 }} transition={{ duration: 0.3 }} className="relative">
          {hovered && (
            <>
              <motion.div initial={{ scale: 0.6, opacity: 0.7 }} animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-full bg-red-500/40" />
              <motion.div initial={{ scale: 0.6, opacity: 0.5 }} animate={{ scale: 3.2, opacity: 0 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut', delay: 0.28 }} className="absolute inset-0 rounded-full bg-red-500/20" />
            </>
          )}
          <div className="relative w-14 h-14 rounded-full bg-red-600 border-2 border-white text-white flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.8)] hover:bg-red-700 transition-all">
            <Play size={22} fill="white" className="text-white ml-0.5" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Product Tab Video Grid ───────────────────────────────────────────────────
const ProductVideoGrid = ({ product, onPlay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35 }}
    className="space-y-5"
  >
    {/* Product info bar */}
    <div className="flex items-center justify-between flex-wrap gap-3 px-1">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${product.bg} border ${product.border} p-1.5`}>
          <img src={product.logo} alt={product.productName} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg">{product.productName}</h3>
          <p className={`text-[9px] font-bold uppercase tracking-widest ${product.accent}`}>{product.productTagline}</p>
        </div>
      </div>
      <a href={product.channelUrl} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-100 transition-all">
        <Youtube size={13} />
        <span>{product.channelHandle}</span>
        <span className="text-red-400">· {product.channelSubs}</span>
      </a>
    </div>

    {/* video cards grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {product.videos.map((video, i) => (
        <VideoCard
          key={video.id + '-' + i}
          video={video}
          product={product}
          featured={i === 0}
          isTopRight={i === 1}
          onPlay={onPlay}
        />
      ))}
    </div>
  </motion.div>
);

// ─── Main Export ──────────────────────────────────────────────────────────────
export const ProductsVideoShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modal, setModal] = useState(null); // { videoId, title, product }

  const openPlay = (video, product) => setModal({ videoId: video.id, title: video.title, product });
  const closeModal = () => setModal(null);

  return (
    <>
      <section id="product-videos" className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        {/* Dot mesh background */}
        <div className="absolute inset-0 opacity-[0.45] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* Section Header with Connected Horizontal Accent Line (Matching User Reference) */}
          <div className="space-y-4 max-w-full text-left">
            <div className="flex items-center gap-0 w-full">
              <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
                <span>VIDEO SHOWCASE / @WABISKILLS · @YOMTECH</span>
                <span className="text-[#0284C7] font-bold text-xs">◆</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Watch Real Videos From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                Our Official Channels
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
              Every video below is sourced directly from the official <strong className="text-red-600">@WabiSkills</strong> and <strong className="text-red-600">@yomtech</strong> YouTube channels — real content, real stories, real technology.
            </p>
            {/* Channel pills */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.youtube.com/@WabiSkills" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black hover:bg-red-100 hover:scale-105 transition-all">
                <Youtube size={15} className="text-red-500" />
                <span>@WabiSkills</span>
                <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 text-[9px] font-mono">2.39K subs</span>
                <ExternalLink size={11} className="text-red-400" />
              </a>
              <a href="https://www.youtube.com/@yomtech" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black hover:bg-red-100 hover:scale-105 transition-all">
                <Youtube size={15} className="text-red-500" />
                <span>@yomtech</span>
                <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 text-[9px] font-mono">1.03K subs</span>
                <ExternalLink size={11} className="text-red-400" />
              </a>
            </div>
          </div>

          {/* ─── HERO FEATURED VIDEO (BEFORE GRID) ─── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-indigo-500" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Featured Video — @yomtech</span>
            </div>
            <HeroFeaturedVideo onPlay={(v) => openPlay(v, { glowColor: v.glowColor, logo: v.logo })} />
          </div>

          {/* ─── PRODUCT TAB SELECTOR ─── */}
          <div className="flex flex-wrap gap-3 pt-2">
            {PRODUCT_VIDEOS.map((p, idx) => (
              <motion.button key={p.productId} onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black transition-all duration-300 overflow-hidden ${
                  activeIdx === idx ? 'text-white shadow-lg scale-105' : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
                }`}
                style={activeIdx === idx ? { background: `linear-gradient(135deg, ${p.accentHex}dd, ${p.accentHex}99)`, boxShadow: `0 8px 24px ${p.glowColor}` } : {}}
              >
                <div className={`w-5 h-5 rounded-lg overflow-hidden flex-shrink-0 ${activeIdx === idx ? 'bg-white/20' : 'bg-slate-100'} p-0.5`}>
                  <img src={p.logo} alt={p.productName} className="w-full h-full object-contain" />
                </div>
                <span>{p.productName}</span>
              </motion.button>
            ))}
          </div>

          {/* ─── PRODUCT VIDEO GRID ─── */}
          <AnimatePresence mode="wait">
            <ProductVideoGrid
              key={PRODUCT_VIDEOS[activeIdx].productId}
              product={PRODUCT_VIDEOS[activeIdx]}
              onPlay={openPlay}
            />
          </AnimatePresence>

          {/* ─── BOTTOM FEATURED VIDEO (AFTER GRID) ─── */}
          <div className="space-y-3 pt-6">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Featured Video — @WabiSkills</span>
            </div>
            <BottomFeaturedVideo onPlay={(v) => openPlay(v, { glowColor: v.glowColor, logo: v.logo })} />
          </div>

          {/* Subscribe CTA */}
          <div
            style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
            className="rounded-3xl border-2 border-indigo-200/80 p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="font-black text-slate-900 text-lg flex items-center gap-2">
                <Youtube size={20} className="text-red-500" />
                Subscribe to stay updated
              </p>
              <p className="text-slate-500 text-sm font-medium mt-0.5">Follow @WabiSkills and @yomtech for the latest tech education, innovation stories, and product updates.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="https://www.youtube.com/@WabiSkills" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all shadow-lg shadow-red-500/30">
                <Youtube size={15} />
                <span>@WabiSkills</span>
              </a>
              <a href="https://www.youtube.com/@yomtech" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border-2 border-red-200 text-red-600 font-black text-xs uppercase tracking-widest hover:bg-red-50 hover:scale-105 transition-all">
                <Youtube size={15} />
                <span>@yomtech</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {modal && (
          <VideoModal
            videoId={modal.videoId}
            title={modal.title}
            product={modal.product}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};
