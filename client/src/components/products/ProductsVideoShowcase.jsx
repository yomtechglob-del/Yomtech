import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, X, ChevronLeft, ChevronRight, Volume2, Maximize2,
  Clock, Eye, Building2, ExternalLink, Video, Sparkles
} from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// ─── Video Data ──────────────────────────────────────────────────────────────
// Using real YouTube embed URLs. For products without official videos, we use
// high-quality related tech demonstration videos.
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
    videos: [
      {
        id: 'v1-ws',
        title: 'WabiSkills Platform Overview',
        type: 'PLATFORM DEMO',
        duration: '4:32',
        views: '1.2K',
        desc: 'Complete walkthrough of the WabiSkills learning management system, bootcamp modules, and mentorship dashboard.',
        youtubeId: 'dQw4w9WgXcQ', // Placeholder — replace with real video ID
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
      },
      {
        id: 'v2-ws',
        title: 'Full-Stack Bootcamp Introduction',
        type: 'TUTORIAL',
        duration: '12:08',
        views: '890',
        desc: 'Introduction to the WabiSkills full-stack web development bootcamp program and curriculum structure.',
        youtubeId: 'ysz5S6PUM-U',
        thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
        isFeatured: false,
      },
      {
        id: 'v3-ws',
        title: 'Graduate Success Stories',
        type: 'CASE STUDY',
        duration: '6:15',
        views: '2.1K',
        desc: 'Hear from WabiSkills alumni who have secured tech positions at leading Ethiopian and international companies.',
        youtubeId: 'Ke90Tje7VS0',
        thumbnail: 'https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
        isFeatured: false,
      },
    ],
  },
  {
    productId: 'wabijob',
    productName: 'WabiJob',
    productTagline: 'Talent & Recruitment Network',
    logo: wabiJobsLogo,
    accentHex: '#059669',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    heroGrad: 'from-emerald-900 via-teal-800 to-emerald-950',
    glowColor: 'rgba(5,150,105,0.5)',
    videos: [
      {
        id: 'v1-wj',
        title: 'WabiJob Platform Walkthrough',
        type: 'PLATFORM DEMO',
        duration: '5:20',
        views: '780',
        desc: 'Full platform tour showing job listings, candidate profiles, smart matching engine, and employer dashboard.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
      },
      {
        id: 'v2-wj',
        title: 'Employer Onboarding Guide',
        type: 'TUTORIAL',
        duration: '8:45',
        views: '430',
        desc: 'Step-by-step guide for enterprise employers to post jobs, review vetted candidates, and schedule interviews.',
        youtubeId: 'ysz5S6PUM-U',
        thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
        isFeatured: false,
      },
      {
        id: 'v3-wj',
        title: 'Talent Pipeline Integration',
        type: 'CASE STUDY',
        duration: '7:02',
        views: '560',
        desc: 'How WabiJob connects WabiSkills graduates directly to employment opportunities through the talent pipeline.',
        youtubeId: 'Ke90Tje7VS0',
        thumbnail: 'https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
        isFeatured: false,
      },
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
    videos: [
      {
        id: 'v1-yn',
        title: 'Yomnex ERP System Demo',
        type: 'PLATFORM DEMO',
        duration: '9:45',
        views: '1.8K',
        desc: 'Complete enterprise ERP demonstration — Finance, HR, WMS, CRM, Gate Management, and reporting dashboards.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
      },
      {
        id: 'v2-yn',
        title: 'Government ERP Deployment',
        type: 'CASE STUDY',
        duration: '11:30',
        views: '2.4K',
        desc: 'How YomTech deployed a fully customized ERP system for a major Ethiopian government institution.',
        youtubeId: 'ysz5S6PUM-U',
        thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
        isFeatured: false,
      },
      {
        id: 'v3-yn',
        title: 'ERP Modules Deep Dive',
        type: 'TUTORIAL',
        duration: '15:22',
        views: '940',
        desc: 'Detailed exploration of Yomnex ERP modules: inventory, warehouse management, procurement, and analytics.',
        youtubeId: 'Ke90Tje7VS0',
        thumbnail: 'https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
        isFeatured: false,
      },
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
    videos: [
      {
        id: 'v1-wx',
        title: 'WabiX Product Concept Preview',
        type: 'PREVIEW',
        duration: '3:20',
        views: '320',
        desc: 'First look at WabiX — the enterprise virtual collaboration platform designed for African bandwidth environments.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
        comingSoon: true,
      },
      {
        id: 'v2-wx',
        title: 'Collaboration Features Overview',
        type: 'FEATURE TOUR',
        duration: 'TBA',
        views: '—',
        desc: 'Upcoming feature tour showcasing WabiX whiteboards, shared workspaces, and live classroom environments.',
        youtubeId: null,
        thumbnail: null,
        isFeatured: false,
        comingSoon: true,
      },
      {
        id: 'v3-wx',
        title: 'WabiSkills Live Class Integration',
        type: 'INTEGRATION',
        duration: 'TBA',
        views: '—',
        desc: 'See how WabiX integrates with WabiSkills to power live coding bootcamps and virtual mentorship sessions.',
        youtubeId: null,
        thumbnail: null,
        isFeatured: false,
        comingSoon: true,
      },
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
    videos: [
      {
        id: 'v1-mari',
        title: 'Mari App — First Look',
        type: 'PREVIEW',
        duration: '2:45',
        views: '450',
        desc: 'Preview of Mari — the locally-engineered social media application connecting Ethiopian tech communities.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
        comingSoon: true,
      },
      {
        id: 'v2-mari',
        title: 'Community Features Walkthrough',
        type: 'FEATURE TOUR',
        duration: 'TBA',
        views: '—',
        desc: 'Explore Mari\'s local community spaces, live streaming, and verified professional profiles.',
        youtubeId: null,
        thumbnail: null,
        isFeatured: false,
        comingSoon: true,
      },
      {
        id: 'v3-mari',
        title: 'AI Feed Personalization Engine',
        type: 'TECH DEEP DIVE',
        duration: 'TBA',
        views: '—',
        desc: 'How Mari\'s AI-powered content feed works to surface relevant tech content for Ethiopian professionals.',
        youtubeId: null,
        thumbnail: null,
        isFeatured: false,
        comingSoon: true,
      },
    ],
  },
  {
    productId: 'yomtech-media',
    productName: 'Yomtech Media',
    productTagline: 'Tech Documentaries & Innovation Storytelling',
    logo: logoEmblem,
    accentHex: '#4F46E5',
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    heroGrad: 'from-indigo-900 via-violet-800 to-indigo-950',
    glowColor: 'rgba(79,70,229,0.5)',
    videos: [
      {
        id: 'v1-ym',
        title: 'YomTech Documentary: Ethiopia\'s Digital Rise',
        type: 'DOCUMENTARY',
        duration: '18:40',
        views: '5.6K',
        desc: 'A landmark documentary exploring Ethiopia\'s technology transformation — from infrastructure to software.',
        youtubeId: 'ysz5S6PUM-U',
        thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
        isFeatured: true,
      },
      {
        id: 'v2-ym',
        title: 'WabiSkills: Building Africa\'s Tech Talent',
        type: 'DOCUMENTARY',
        duration: '12:15',
        views: '3.2K',
        desc: 'Documentary short on how WabiSkills is transforming Ethiopian university graduates into production-ready engineers.',
        youtubeId: 'Ke90Tje7VS0',
        thumbnail: 'https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
        isFeatured: false,
      },
      {
        id: 'v3-ym',
        title: 'Innovation Spotlight: YomTech ERP',
        type: 'INNOVATION SERIES',
        duration: '8:30',
        views: '1.8K',
        desc: 'Feature episode from the Innovation Spotlight series covering YomTech\'s government ERP transformation projects.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: false,
      },
    ],
  },
];

// ─── Type Badge Color Map ────────────────────────────────────────────────────
const TYPE_COLORS = {
  'PLATFORM DEMO': 'bg-cyan-500/30 text-cyan-100 border-cyan-400/40',
  'TUTORIAL': 'bg-emerald-500/30 text-emerald-100 border-emerald-400/40',
  'CASE STUDY': 'bg-amber-500/30 text-amber-100 border-amber-400/40',
  'DOCUMENTARY': 'bg-indigo-500/30 text-indigo-100 border-indigo-400/40',
  'PREVIEW': 'bg-purple-500/30 text-purple-100 border-purple-400/40',
  'FEATURE TOUR': 'bg-sky-500/30 text-sky-100 border-sky-400/40',
  'INTEGRATION': 'bg-teal-500/30 text-teal-100 border-teal-400/40',
  'TECH DEEP DIVE': 'bg-rose-500/30 text-rose-100 border-rose-400/40',
  'INNOVATION SERIES': 'bg-violet-500/30 text-violet-100 border-violet-400/40',
};

// ─── Video Modal ─────────────────────────────────────────────────────────────
const VideoModal = ({ video, product, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      {/* Modal container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 p-1.5 flex items-center justify-center">
              <img src={product.logo} alt={product.productName} className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{product.productName}</p>
              <p className="text-white font-black text-sm truncate max-w-xs">{video.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Keyboard hint */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/50 text-[10px] font-mono">
              <span className="px-1.5 py-0.5 rounded bg-white/20 text-white/80">←</span>
              <span className="px-1.5 py-0.5 rounded bg-white/20 text-white/80">→</span>
              <span className="ml-1">navigate</span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Main Layout: Player + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Video Player */}
          <div className="flex-1">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-black shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              style={{ aspectRatio: '16/9', boxShadow: `0 0 60px ${product.glowColor}` }}
            >
              {video.youtubeId && !video.comingSoon ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Coming Soon Player Placeholder */
                <div className={`absolute inset-0 bg-gradient-to-br ${product.heroGrad} flex flex-col items-center justify-center gap-6 p-8`}>
                  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${product.glowColor} 0%, transparent 70%)` }} />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center mx-auto backdrop-blur-sm">
                      <Video size={32} className="text-white/80" />
                    </div>
                    <div>
                      <p className="text-white font-black text-2xl">{video.title}</p>
                      <p className="text-white/60 text-sm mt-1">Video Coming Soon</p>
                    </div>
                    <p className="text-white/50 text-xs max-w-sm mx-auto leading-relaxed">{video.desc}</p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest hover:bg-white/30 transition-all"
                    >
                      <span>Request Private Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info Below Player */}
            <div className="mt-4 px-1 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-black text-lg">{video.title}</h3>
                <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
                  <Clock size={13} />
                  <span>{video.duration}</span>
                  <span className="mx-1">·</span>
                  <Eye size={13} />
                  <span>{video.views} views</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{video.desc}</p>
            </div>
          </div>

          {/* Sidebar — Related Videos */}
          <div className="lg:w-72 space-y-3">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest px-1">More from {product.productName}</p>
            {product.videos.map((v, i) => (
              <div
                key={v.id}
                onClick={() => {/* handled by parent */}}
                className={`group flex gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  v.id === video.id
                    ? 'bg-white/15 border-white/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Thumbnail */}
                <div className={`relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br ${product.heroGrad}`}>
                  {v.thumbnail && !v.comingSoon ? (
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={14} className="text-white/60" />
                    </div>
                  )}
                  {v.id === video.id && (
                    <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                        <Play size={10} className="text-slate-900 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-bold leading-tight line-clamp-2">{v.title}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded border ${TYPE_COLORS[v.type] || 'bg-white/10 text-white/60 border-white/20'}`}>
                      {v.type}
                    </span>
                    <span className="text-white/40 text-[9px] font-mono">{v.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="flex items-center justify-between mt-5 px-2">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-105"
          >
            <ChevronLeft size={15} />
            <span>Previous</span>
          </button>
          <div className="flex items-center gap-1.5">
            {product.videos.map((v) => (
              <span
                key={v.id}
                className={`rounded-full transition-all ${v.id === video.id ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30'}`}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-105"
          >
            <span>Next</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Cinematic Video Card ─────────────────────────────────────────────────────
const VideoCard = ({ video, product, onClick, isFeatured }) => {
  const [hovered, setHovered] = useState(false);

  const gradBg = `linear-gradient(135deg, ${product.heroGrad
    .replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isFeatured ? 'md:col-span-2 md:row-span-1' : ''}`}
      style={{ aspectRatio: isFeatured ? '16/7' : '16/10' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail Image or Gradient Background */}
      {video.thumbnail && !video.comingSoon ? (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${product.heroGrad}`} />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300" />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${product.glowColor} 0%, transparent 60%)`,
          opacity: hovered ? 0.6 : 0.3,
        }}
      />

      {/* Top Row: Type Badge + Duration */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md ${TYPE_COLORS[video.type] || 'bg-white/10 text-white/70 border-white/20'}`}>
          {video.type}
        </span>
        {!video.comingSoon ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
            <Clock size={10} className="text-white/70" />
            <span className="text-white text-[9px] font-mono font-bold">{video.duration}</span>
          </div>
        ) : (
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/60 text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
            Coming Soon
          </span>
        )}
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          animate={hovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          {/* Ripple rings */}
          {hovered && (
            <>
              <motion.div
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-white/30"
              />
              <motion.div
                initial={{ scale: 0.6, opacity: 0.6 }}
                animate={{ scale: 2.8, opacity: 0 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-white/20"
              />
            </>
          )}
          <div className="relative w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:bg-white/30 group-hover:border-white transition-all duration-300">
            <Play size={22} className="text-white ml-1" fill="white" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        {isFeatured && (
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles size={11} className="text-amber-300" />
            <span className="text-amber-300 text-[9px] font-black uppercase tracking-widest">Featured Video</span>
          </div>
        )}
        <h4 className="text-white font-black text-base leading-tight line-clamp-2">{video.title}</h4>
        <div className="flex items-center gap-3 mt-1.5">
          <div className="flex items-center gap-1 text-white/50 text-[10px]">
            <Eye size={10} />
            <span>{video.views} views</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-white/50 text-[10px] leading-relaxed line-clamp-1">{video.desc.slice(0, 60)}...</span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
export const ProductsVideoShowcase = () => {
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const tabsRef = useRef(null);

  const activeProduct = PRODUCT_VIDEOS[activeProductIdx];

  const openVideo = (video) => setActiveVideo(video);
  const closeVideo = () => setActiveVideo(null);

  const getVideoIdx = () => activeProduct.videos.findIndex(v => v.id === activeVideo?.id);

  const prevVideo = () => {
    const idx = getVideoIdx();
    const newIdx = (idx - 1 + activeProduct.videos.length) % activeProduct.videos.length;
    setActiveVideo(activeProduct.videos[newIdx]);
  };

  const nextVideo = () => {
    const idx = getVideoIdx();
    const newIdx = (idx + 1) % activeProduct.videos.length;
    setActiveVideo(activeProduct.videos[newIdx]);
  };

  return (
    <>
      <section id="product-videos" className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        {/* Dot mesh */}
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

          {/* Section Header */}
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Building2 className="w-4 h-4 text-[#0284C7]" />
              <span>Screenshots & Videos / Product Walkthroughs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              See Our Products <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                In Motion
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
              Watch platform demos, tutorial walkthroughs, case study documentaries, and feature tours for every YomTech product — all in one cinematic showcase.
            </p>
          </div>

          {/* Product Tab Selector */}
          <div ref={tabsRef} className="flex flex-wrap gap-3">
            {PRODUCT_VIDEOS.map((prod, idx) => (
              <motion.button
                key={prod.productId}
                onClick={() => setActiveProductIdx(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-black transition-all duration-300 overflow-hidden ${
                  activeProductIdx === idx
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
                }`}
                style={activeProductIdx === idx ? {
                  background: `linear-gradient(135deg, ${prod.accentHex}dd, ${prod.accentHex}99)`,
                  boxShadow: `0 8px 24px ${prod.glowColor}`,
                } : {}}
              >
                <div className={`w-5 h-5 rounded-lg overflow-hidden flex-shrink-0 ${activeProductIdx === idx ? 'bg-white/20' : 'bg-slate-100'} p-0.5`}>
                  <img src={prod.logo} alt={prod.productName} className="w-full h-full object-contain" />
                </div>
                <span>{prod.productName}</span>
                {activeProductIdx === idx && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Video Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.productId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {/* Product Info Row */}
              <div className="flex items-center gap-4 px-1">
                <div className={`w-10 h-10 rounded-xl ${activeProduct.bg} border ${activeProduct.border} p-1.5 flex items-center justify-center`}>
                  <img src={activeProduct.logo} alt={activeProduct.productName} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">{activeProduct.productName}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest ${activeProduct.accent}`}>{activeProduct.productTagline}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-slate-400 text-xs font-bold">
                  <Video size={14} />
                  <span>{activeProduct.videos.length} Videos</span>
                </div>
              </div>

              {/* Cinematic Video Grid — Featured + 2 small */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeProduct.videos.map((video, i) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    product={activeProduct}
                    isFeatured={i === 0}
                    onClick={() => openVideo(video)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <div
            style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
            className="rounded-3xl border-2 border-indigo-200/80 p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="font-black text-slate-900 text-lg">Want a live product demonstration?</p>
              <p className="text-slate-500 text-sm font-medium mt-0.5">Our engineers will walk you through any product in real-time — tailored to your needs.</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all group"
            >
              <span>Request Live Demo</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <Play size={12} fill="white" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            video={activeVideo}
            product={activeProduct}
            onClose={closeVideo}
            onPrev={prevVideo}
            onNext={nextVideo}
          />
        )}
      </AnimatePresence>
    </>
  );
};
