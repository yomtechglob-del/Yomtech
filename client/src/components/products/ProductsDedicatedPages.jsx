import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, X, ChevronLeft, ChevronRight, Building2, ExternalLink,
  ArrowRight, CheckCircle2, Users, Code, Server, ShieldCheck,
  Layers, GraduationCap, Globe, Video, Cpu, Star, MessageSquare,
  Briefcase, Zap, Circle, Monitor, Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Logos
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// ─── All 6 Products Full Data ─────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'wabiskills',
    name: 'WabiSkills',
    tagline: 'Technology Training & Digital Skills Platform',
    category: 'EDUCATION',
    badge: 'LIVE',
    link: 'https://wabiskills.com/',
    logo: wabiSkillsLogo,
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    accentHex: '#D97706',
    heroGrad: 'from-amber-900 via-orange-800 to-amber-950',
    glowColor: 'rgba(217,119,6,0.6)',
    sectionBg: 'bg-white',
    fullDesc: 'WabiSkills is YomTech Global\'s premier technology training platform delivering hands-on bootcamps, industry mentorship, and practical digital skills that prepare professionals for high-impact tech careers across Africa.',
    features: [
      { icon: GraduationCap, title: 'Hands-On Bootcamps', desc: 'Intensive, project-based programs in full-stack development, cybersecurity, and cloud.' },
      { icon: Users, title: '1-on-1 Mentorship', desc: 'Personalized guidance from senior YomTech engineers and industry veterans.' },
      { icon: Code, title: 'Live Coding Labs', desc: 'Real development environments — students build deployable production applications.' },
      { icon: ShieldCheck, title: 'Industry Certifications', desc: 'Co-validated certifications with partner universities and hiring organizations.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Python', 'Docker'],
    targetUsers: ['University graduates entering tech', 'Mid-career professionals switching to tech', 'Government IT staff upskilling', 'Enterprise team training programs'],
    stats: [{ value: '2K+', label: 'Graduates' }, { value: '15+', label: 'Courses' }, { value: '95%', label: 'Job Rate' }, { value: '50+', label: 'Mentors' }],
    video: {
      youtubeId: 'uolNutZDGSs',
      title: 'WabiSkills — ደግሜ ብፈጠርም ይሄን ነው ምሆነው',
      type: 'STUDENT STORY',
      duration: '6:15',
      thumbnail: 'https://img.youtube.com/vi/uolNutZDGSs/maxresdefault.jpg',
    },
    externalLinks: [
      { label: 'Visit WabiSkills', url: 'https://wabiskills.com/', primary: true },
      { label: 'View Curriculum', url: 'https://wabiskills.com/', primary: false },
    ],
    deviceType: 'browser',
    urlBar: 'wabiskills.com',
  },
  {
    id: 'wabijob',
    name: 'WabiJob',
    tagline: 'Talent & Recruitment Network',
    category: 'EDUCATION',
    badge: 'LIVE',
    link: 'https://wabijob.com/',
    logo: wabiJobsLogo,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accentHex: '#059669',
    heroGrad: 'from-emerald-900 via-teal-800 to-emerald-950',
    glowColor: 'rgba(5,150,105,0.6)',
    sectionBg: 'bg-[#F4F9FF]',
    fullDesc: 'WabiJob is an intelligent talent and recruitment platform connecting Africa\'s most skilled technology professionals with global enterprise opportunities through an AI-driven matching ecosystem.',
    features: [
      { icon: Briefcase, title: 'Smart Job Matching', desc: 'AI-driven candidate-to-opportunity matching based on verified skills and portfolios.' },
      { icon: Users, title: 'Verified Talent Pool', desc: 'Pre-vetted professionals with WabiSkills certifications and real project portfolios.' },
      { icon: Building2, title: 'Enterprise Network', desc: 'Partnerships with leading Ethiopian enterprises and Pan-African technology companies.' },
      { icon: Globe, title: 'Remote Opportunities', desc: 'Access to international remote positions for African tech professionals globally.' },
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Python', 'AWS Lambda'],
    targetUsers: ['WabiSkills graduates seeking employment', 'Experienced Ethiopian tech professionals', 'Enterprise HR & talent acquisition teams', 'International companies hiring African talent'],
    stats: [{ value: '500+', label: 'Jobs Listed' }, { value: '50+', label: 'Employers' }, { value: 'Pan-African', label: 'Reach' }, { value: '48hr', label: 'Match Time' }],
    video: {
      youtubeId: 'C3Cev-IohUc',
      title: 'WabiJob — ትልቅ ለውጥ ይመጣል ብለን ተስፋ እናደርጋለን!',
      type: 'PLATFORM DEMO',
      duration: '5:20',
      thumbnail: 'https://img.youtube.com/vi/C3Cev-IohUc/maxresdefault.jpg',
    },
    externalLinks: [
      { label: 'Visit WabiJob', url: 'https://wabijob.com/', primary: true },
      { label: 'Post a Job', url: 'https://wabijob.com/', primary: false },
    ],
    deviceType: 'browser',
    urlBar: 'wabijob.com',
  },
  {
    id: 'yomnex',
    name: 'Yomnex ERP',
    tagline: 'Custom Enterprise Resource Planning System',
    category: 'ENTERPRISE',
    badge: 'ENTERPRISE',
    link: '/contact',
    logo: yomnexLogo,
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    accentHex: '#0284C7',
    heroGrad: 'from-cyan-900 via-sky-800 to-cyan-950',
    glowColor: 'rgba(2,132,199,0.6)',
    sectionBg: 'bg-white',
    fullDesc: 'Yomnex ERP is YomTech Global\'s flagship enterprise system — built entirely from scratch for maximum flexibility. Serving government institutions, universities, and private enterprises with a fully modular, scalable architecture.',
    features: [
      { icon: Layers, title: 'Finance & Accounting', desc: 'Full general ledger, payroll, budgeting, and real-time financial analytics.' },
      { icon: Users, title: 'HR Management', desc: 'Complete HR lifecycle — recruitment, performance, leave, and org structures.' },
      { icon: Server, title: 'Inventory & WMS', desc: 'Warehouse management, multi-location stock tracking, and procurement workflows.' },
      { icon: ShieldCheck, title: 'Gate & Asset Control', desc: 'Physical access control, asset tracking, maintenance scheduling, and monitoring.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Python'],
    targetUsers: ['Government ministries and public institutions', 'Universities and academic organizations', 'Industrial enterprises and hotel chains', 'Banks and financial service organizations'],
    stats: [{ value: '25+', label: 'Deployments' }, { value: '12+', label: 'Modules' }, { value: '65%', label: 'Faster Ops' }, { value: '100%', label: 'Custom Built' }],
    video: {
      youtubeId: 'PQ00Vons-ms',
      title: 'Yomnex ERP — የወደፊቱ የ AI አለም | Yomtech on Fana TV',
      type: 'ENTERPRISE DEMO',
      duration: '12:40',
      thumbnail: 'https://img.youtube.com/vi/PQ00Vons-ms/maxresdefault.jpg',
    },
    externalLinks: [
      { label: 'Request a Demo', url: '/contact', primary: true },
      { label: 'Consultation', url: '/contact', primary: false },
    ],
    deviceType: 'browser',
    urlBar: 'yomnex.yomtechglobal.org',
  },
  {
    id: 'wabix',
    name: 'WabiX',
    tagline: 'Virtual Meeting & Collaboration Platform',
    category: 'COLLABORATION',
    badge: 'COMING SOON',
    link: '/contact',
    logo: logoEmblem,
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    accentHex: '#9333EA',
    heroGrad: 'from-purple-900 via-violet-800 to-purple-950',
    glowColor: 'rgba(147,51,234,0.6)',
    sectionBg: 'bg-[#F4F9FF]',
    fullDesc: 'WabiX is a purpose-built virtual collaboration platform for enterprise team coordination, online bootcamps, and live educational webinars — combining HD video with real-time collaboration tools optimized for African networks.',
    features: [
      { icon: Video, title: 'HD Video Conferencing', desc: 'Crystal-clear communication optimized for low-bandwidth African environments.' },
      { icon: Layers, title: 'Collaborative Workspaces', desc: 'Shared whiteboards, document co-editing, and real-time collaboration tools.' },
      { icon: GraduationCap, title: 'Online Bootcamp Rooms', desc: 'Dedicated classrooms for live coding sessions and instructor-led training.' },
      { icon: ShieldCheck, title: 'End-to-End Encryption', desc: 'Bank-grade encryption ensuring enterprise privacy and data security.' },
    ],
    techStack: ['WebRTC', 'Node.js', 'React.js', 'React Native', 'Socket.io', 'AWS'],
    targetUsers: ['Remote enterprise teams and distributed organizations', 'Online bootcamp instructors and students', 'Government departments for virtual meetings', 'Corporate HR for remote onboarding'],
    stats: [{ value: 'HD', label: 'Video Quality' }, { value: '∞', label: 'Participants' }, { value: 'E2E', label: 'Encrypted' }, { value: 'Multi-Platform', label: 'Access' }],
    video: {
      youtubeId: 'CL5Otcr_ywI',
      title: 'WabiX — Drone Technology | የድሮን ቴክኖሎጂ',
      type: 'FUTURE TECH',
      duration: '8:15',
      thumbnail: 'https://img.youtube.com/vi/CL5Otcr_ywI/maxresdefault.jpg',
      comingSoon: false,
    },
    externalLinks: [
      { label: 'Join Waitlist', url: '/contact', primary: true },
      { label: 'Learn More', url: '/contact', primary: false },
    ],
    deviceType: 'browser',
    urlBar: 'wabix.yomtechglobal.org',
  },
  {
    id: 'mari',
    name: 'Mari',
    tagline: 'Social Media & Digital Community App',
    category: 'MEDIA',
    badge: 'IN DEVELOPMENT',
    link: '/contact',
    logo: logoEmblem,
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    accentHex: '#0284C7',
    heroGrad: 'from-sky-900 via-blue-800 to-sky-950',
    glowColor: 'rgba(2,132,199,0.5)',
    sectionBg: 'bg-white',
    fullDesc: 'Mari is a locally-engineered social media application connecting digital communities, tech innovators, and entrepreneurs across Ethiopia — built with a deep understanding of African social dynamics and digital culture.',
    features: [
      { icon: Globe, title: 'Local Community Focus', desc: 'Hyper-local spaces for tech innovators and digital creators in Ethiopian cities.' },
      { icon: Cpu, title: 'AI-Powered Feed', desc: 'Intelligent content curation powered by ML algorithms for Ethiopian users.' },
      { icon: Video, title: 'Live Streaming', desc: 'Native live streaming for tech talks, events, and educational broadcasts.' },
      { icon: Star, title: 'Verified Profiles', desc: 'Professional identities linked to WabiSkills credentials and WabiJob careers.' },
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Redis', 'Python/AI'],
    targetUsers: ['Ethiopian tech professionals and students', 'Startup founders and entrepreneurs', 'Creative digital content creators', 'University innovation clubs'],
    stats: [{ value: 'Local', label: 'First' }, { value: 'AI', label: 'Powered' }, { value: 'Cross-Platform', label: 'Access' }, { value: 'Privacy', label: 'First' }],
    video: {
      youtubeId: 'szeeGAP6SKg',
      title: 'Mari — የWabiskills ተማሪ ምስክርነት',
      type: 'COMMUNITY DEMO',
      duration: '4:45',
      thumbnail: 'https://img.youtube.com/vi/szeeGAP6SKg/maxresdefault.jpg',
      comingSoon: false,
    },
    externalLinks: [
      { label: 'Join Early Access', url: '/contact', primary: true },
      { label: 'Contact Team', url: '/contact', primary: false },
    ],
    deviceType: 'phone',
    urlBar: '',
  },
  {
    id: 'yomtech-media',
    name: 'Yomtech Media',
    tagline: 'Technology Documentaries & Innovation Storytelling',
    category: 'MEDIA',
    badge: 'ACTIVE',
    link: '/contact',
    logo: logoEmblem,
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    accentHex: '#4F46E5',
    heroGrad: 'from-indigo-900 via-violet-800 to-indigo-950',
    glowColor: 'rgba(79,70,229,0.6)',
    sectionBg: 'bg-[#F4F9FF]',
    fullDesc: 'Yomtech Media is YomTech Global\'s technology storytelling and documentary production platform — amplifying Pan-African innovation stories and digital transformation narratives for broadcast television and online streaming.',
    features: [
      { icon: Video, title: 'Technology Documentaries', desc: 'High-production documentary films showcasing Ethiopian and Pan-African tech innovation.' },
      { icon: Building2, title: 'Enterprise Content', desc: 'Professional corporate video, product showcases, and institutional storytelling.' },
      { icon: Globe, title: 'Broadcast Distribution', desc: 'Distribution through Fana Media Corporation, Balageru TV, and streaming platforms.' },
      { icon: GraduationCap, title: 'Educational Series', desc: 'Tech education content covering programming, AI, cybersecurity, and digital literacy.' },
    ],
    techStack: ['4K Production', 'Adobe Creative Suite', 'DaVinci Resolve', 'Fana TV Network', 'Balageru TV', 'YouTube'],
    targetUsers: ['Ethiopian broadcast media organizations', 'Government agencies for digital communications', 'Enterprise companies for brand storytelling', 'Pan-African innovation ecosystems'],
    stats: [{ value: '10+', label: 'Productions' }, { value: 'TV Broadcast', label: 'Distribution' }, { value: 'Pan-African', label: 'Stories' }, { value: '4K', label: 'Quality' }],
    video: {
      youtubeId: '0FapnBKx-e4',
      title: 'Yomtech Media — ዮምቴክ በፋና ክፍል 1 | Yomtech With Ermias on Fana TV Ep1',
      type: 'DOCUMENTARY',
      duration: '18:40',
      thumbnail: 'https://img.youtube.com/vi/0FapnBKx-e4/maxresdefault.jpg',
    },
    externalLinks: [
      { label: 'Collaborate With Us', url: '/contact', primary: true },
      { label: 'View Productions', url: '/contact', primary: false },
    ],
    deviceType: 'cinema',
    urlBar: '',
  },
];

// ─── Video Modal ──────────────────────────────────────────────────────────────
const VideoModal = ({ video, product, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(24px)' }}
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
        {/* Ambient glow behind player */}
        <div
          className="absolute -inset-10 rounded-full blur-[80px] opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${product.glowColor} 0%, transparent 70%)` }}
        />

        {/* Top bar */}
        <div className="flex items-center justify-between mb-4 px-1 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl ${product.bg} border ${product.border} p-1.5 flex items-center justify-center`}>
              <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <p className={`text-[9px] font-black uppercase tracking-widest ${product.accent}`}>{product.name}</p>
              <p className="text-white font-black text-sm">{video.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <X size={16} />
          </button>
        </div>

        {/* Player */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
          style={{ aspectRatio: '16/9', boxShadow: `0 0 80px ${product.glowColor}` }}
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
            <div className={`absolute inset-0 bg-gradient-to-br ${product.heroGrad} flex flex-col items-center justify-center gap-5 p-8`}>
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${product.glowColor} 0%, transparent 65%)` }} />
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto">
                  <Video size={32} className="text-white/70" />
                </div>
                <p className="text-white font-black text-2xl">{video.title}</p>
                <p className="text-white/50 text-sm">Video coming soon — request a private live demo</p>
                <Link to="/contact" onClick={onClose} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest hover:bg-white/25 transition-all">
                  <span>Request Demo</span><ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </div>

        <p className="text-white/40 text-xs text-center mt-3 font-mono">Press ESC to close</p>
      </motion.div>
    </motion.div>
  );
};

// ─── Browser Device Frame ─────────────────────────────────────────────────────
const BrowserFrame = ({ product, onPlayClick, hovered }) => (
  <div className="relative w-full">
    {/* Outer glow */}
    <div
      className="absolute -inset-4 rounded-3xl blur-[40px] opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
      style={{ background: `radial-gradient(ellipse, ${product.glowColor}, transparent 70%)` }}
    />

    {/* Browser chrome */}
    <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/20">
      {/* Top bar */}
      <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-slate-700/80 rounded-md px-3 py-1.5">
          <Wifi size={10} className="text-slate-400 flex-shrink-0" />
          <span className="text-slate-300 text-[10px] font-mono truncate">{product.urlBar || 'yomtechglobal.org'}</span>
        </div>
      </div>

      {/* Screen area */}
      <div
        className="relative bg-slate-900 cursor-pointer overflow-hidden"
        style={{ aspectRatio: '16/10' }}
        onClick={onPlayClick}
      >
        {/* Thumbnail or gradient */}
        {product.video.thumbnail && !product.video.comingSoon ? (
          <>
            <img
              src={product.video.thumbnail}
              alt={product.video.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${product.heroGrad}`}>
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 40% 50%, ${product.glowColor} 0%, transparent 60%)` }} />
          </div>
        )}

        {/* Dot mesh overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: 1.12 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {hovered && (
              <>
                <motion.div initial={{ scale: 0.7, opacity: 0.7 }} animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-white/25"
                />
                <motion.div initial={{ scale: 0.7, opacity: 0.5 }} animate={{ scale: 3.2, opacity: 0 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut', delay: 0.28 }}
                  className="absolute inset-0 rounded-full bg-white/15"
                />
              </>
            )}
            <div className="relative w-16 h-16 rounded-full bg-white/20 border-2 border-white/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-white/35 transition-all duration-300">
              <Play size={24} fill="white" className="text-white ml-1" />
            </div>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-end justify-between">
          <div>
            <span
              className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border text-white mb-1 inline-block"
              style={{ background: `${product.accentHex}60`, borderColor: `${product.accentHex}80` }}
            >
              {product.video.type}
            </span>
            <p className="text-white font-black text-xs leading-tight line-clamp-1">{product.video.title}</p>
          </div>
          {!product.video.comingSoon && (
            <span className="text-white/60 text-[9px] font-mono bg-black/40 px-2 py-0.5 rounded">{product.video.duration}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ─── Phone Frame ─────────────────────────────────────────────────────────────
const PhoneFrame = ({ product, onPlayClick, hovered }) => (
  <div className="relative flex justify-center">
    <div
      className="absolute inset-0 rounded-3xl blur-[50px] opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
      style={{ background: `radial-gradient(ellipse, ${product.glowColor}, transparent 70%)` }}
    />
    {/* Phone shell */}
    <div className="relative w-48 sm:w-56 rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.35)] ring-4 ring-slate-800">
      {/* Notch bar */}
      <div className="bg-slate-900 py-3 flex justify-center">
        <div className="w-20 h-4 rounded-full bg-slate-800" />
      </div>
      {/* Screen */}
      <div
        className={`relative bg-gradient-to-br ${product.heroGrad} cursor-pointer overflow-hidden`}
        style={{ aspectRatio: '9/16' }}
        onClick={onPlayClick}
      >
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 40% 40%, ${product.glowColor} 0%, transparent 60%)` }} />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        />
        {/* Product logo */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2">
            <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <p className="text-white text-center text-xs font-black mt-2">{product.name}</p>
        </div>
        {/* Play button center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div animate={hovered ? { scale: 1.12 } : { scale: 1 }} transition={{ duration: 0.3 }} className="relative">
            {hovered && (
              <motion.div initial={{ scale: 0.7, opacity: 0.7 }} animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-white/30"
              />
            )}
            <div className="relative w-14 h-14 rounded-full bg-white/20 border-2 border-white/70 backdrop-blur-md flex items-center justify-center">
              <Play size={20} fill="white" className="text-white ml-0.5" />
            </div>
          </motion.div>
        </div>
        {/* Coming soon label */}
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">{product.video.comingSoon ? 'Preview Coming Soon' : product.video.type}</span>
        </div>
      </div>
      {/* Home bar */}
      <div className="bg-slate-900 py-3 flex justify-center">
        <div className="w-12 h-1.5 rounded-full bg-slate-700" />
      </div>
    </div>
  </div>
);

// ─── Cinema Frame ─────────────────────────────────────────────────────────────
const CinemaFrame = ({ product, onPlayClick, hovered }) => (
  <div className="relative w-full">
    <div
      className="absolute -inset-4 rounded-3xl blur-[40px] opacity-25 pointer-events-none transition-opacity duration-500 group-hover:opacity-55"
      style={{ background: `radial-gradient(ellipse, ${product.glowColor}, transparent 70%)` }}
    />
    {/* Cinema frame */}
    <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.32)] border-4 border-slate-900">
      {/* Speaker grille top */}
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(8)].map((_, i) => <div key={i} className="w-1 h-3 rounded-full bg-slate-700" />)}
        </div>
        <Monitor size={14} className="text-slate-500" />
        <div className="flex gap-0.5">
          {[...Array(8)].map((_, i) => <div key={i} className="w-1 h-3 rounded-full bg-slate-700" />)}
        </div>
      </div>
      {/* Screen */}
      <div
        className="relative bg-black cursor-pointer overflow-hidden"
        style={{ aspectRatio: '21/9' }}
        onClick={onPlayClick}
      >
        {product.video.thumbnail && !product.video.comingSoon ? (
          <>
            <img src={product.video.thumbnail} alt={product.video.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${product.heroGrad}`}>
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 50%, ${product.glowColor} 0%, transparent 65%)` }} />
          </div>
        )}
        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-black" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-black" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '256px 256px' }}
        />
        {/* Play btn */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div animate={hovered ? { scale: 1.12 } : { scale: 1 }} transition={{ duration: 0.3 }} className="relative">
            {hovered && (
              <>
                <motion.div initial={{ scale: 0.6, opacity: 0.7 }} animate={{ scale: 2.8, opacity: 0 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-full bg-white/20" />
                <motion.div initial={{ scale: 0.6, opacity: 0.5 }} animate={{ scale: 3.5, opacity: 0 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut', delay: 0.3 }} className="absolute inset-0 rounded-full bg-white/15" />
              </>
            )}
            <div className="relative w-16 h-16 rounded-full bg-white/15 border-2 border-white/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.25)]">
              <Play size={24} fill="white" className="text-white ml-1" />
            </div>
          </motion.div>
        </div>
        {/* Bottom strip */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border text-white inline-block mb-1"
              style={{ background: `${product.accentHex}55`, borderColor: `${product.accentHex}80` }}>
              {product.video.type}
            </span>
            <p className="text-white font-black text-sm">{product.video.title}</p>
          </div>
          {!product.video.comingSoon && (
            <span className="text-white/60 text-[9px] font-mono bg-black/50 px-2 py-0.5 rounded">{product.video.duration}</span>
          )}
        </div>
      </div>
      {/* Speaker grille bottom */}
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-center gap-1">
        {[...Array(12)].map((_, i) => <div key={i} className="w-1 h-3 rounded-full bg-slate-700" />)}
      </div>
    </div>
  </div>
);

// ─── Single Product Showcase Row ──────────────────────────────────────────────
const ProductShowcaseRow = ({ product, idx }) => {
  const [hovered, setHovered] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const isReversed = idx % 2 !== 0;
  const isExternal = (url) => url.startsWith('http');

  const DeviceFrame = product.deviceType === 'phone'
    ? PhoneFrame
    : product.deviceType === 'cinema'
    ? CinemaFrame
    : BrowserFrame;

  return (
    <>
      <section
        id={product.id}
        className={`relative py-20 lg:py-28 ${product.sectionBg} overflow-hidden font-sans border-b border-slate-200/80`}
      >
        {/* Dot mesh */}
        <div className="absolute inset-0 opacity-[0.45] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        {/* Ambient blob */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: `${product.glowColor}`, opacity: 0.06 }}
        />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center ${isReversed ? 'direction-reverse' : ''}`}>

            {/* ── Content Column ── */}
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 space-y-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
            >
              {/* Product identity row */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${product.bg} border ${product.border} p-2.5 flex items-center justify-center shadow-sm`}>
                  <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[9px] font-black uppercase tracking-widest mb-1">
                    <Building2 size={11} />
                    <span>{product.category}</span>
                  </div>
                  <p className={`text-[9px] font-mono font-black uppercase tracking-widest px-3 py-0.5 rounded-full border inline-flex items-center gap-1.5 ${product.bg} ${product.border} ${product.accent}`}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: product.accentHex }} />
                    {product.badge}
                  </p>
                </div>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                  {product.name}
                </h2>
                <p className={`text-sm font-extrabold uppercase tracking-widest mt-1 ${product.accent}`}>
                  {product.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base font-medium leading-relaxed">{product.fullDesc}</p>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3">
                {product.stats.map((s, i) => (
                  <div
                    key={i}
                    style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                    className="rounded-2xl border-2 border-indigo-200/80 p-3 text-center"
                  >
                    <div className={`text-lg font-black ${product.accent}`}>{s.value}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* 4 Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                      className="flex gap-3 p-4 rounded-2xl border-2 border-indigo-200/80 group hover:shadow-md transition-all"
                    >
                      <div className={`w-9 h-9 rounded-xl ${product.bg} ${product.accent} border ${product.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">{f.title}</h4>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((t, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${product.bg} border ${product.border} ${product.accent}`}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                {product.externalLinks.map((link, i) => {
                  const ext = isExternal(link.url);
                  const Tag = ext ? 'a' : Link;
                  const props = ext ? { href: link.url, target: '_blank', rel: 'noopener noreferrer' } : { to: link.url };
                  return (
                    <Tag key={i} {...props}
                      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                        link.primary
                          ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-white border-2 border-cyan-300 text-[#0284C7] hover:bg-cyan-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {ext ? <ExternalLink size={13} /> : <ArrowRight size={13} />}
                    </Tag>
                  );
                })}
              </div>
            </motion.div>

            {/* ── Video / Device Frame Column ── */}
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} group`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Device type label */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest mb-4 ${product.bg} ${product.border} ${product.accent}`}>
                <Video size={11} />
                <span>{product.video.type} · {product.video.duration}</span>
              </div>

              <DeviceFrame
                product={product}
                onPlayClick={() => setVideoOpen(true)}
                hovered={hovered}
              />

              {/* Target users below device */}
              <div className="mt-5 space-y-1.5">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Target Users</p>
                <div className="flex flex-wrap gap-2">
                  {product.targetUsers.map((u, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-600 font-medium">
                      <CheckCircle2 size={11} className={product.accent} />
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <VideoModal video={product.video} product={product} onClose={() => setVideoOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const ProductsDedicatedPages = () => (
  <div id="products-detail">
    {/* Section intro header */}
    <div className="bg-white border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />
      <div className="max-w-[90rem] mx-auto relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
          <Building2 className="w-4 h-4" />
          <span>Dedicated Product Pages / Deep Dives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
          Every Product. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">One Story.</span>
        </h2>
        <p className="text-slate-500 text-base font-medium max-w-3xl">
          Each YomTech platform has its own feature set, target users, technology stack, and video demonstration — explored in full detail below.
        </p>
      </div>
    </div>

    {PRODUCTS.map((product, idx) => (
      <ProductShowcaseRow key={product.id} product={product} idx={idx} />
    ))}
  </div>
);
