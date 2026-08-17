import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Briefcase, Cpu, MessageSquare, Globe, Video,
  Building2, ExternalLink, ArrowRight, CheckCircle2, Users,
  Code, Server, ShieldCheck, Layers, Zap, BookOpen, X,
  Star, ChevronLeft, ChevronRight, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

// ─── Shared product dataset (full detail) ──────────────────────────────
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
    heroGradient: 'from-amber-950/85 via-orange-900/80 to-amber-950/90',
    glowColor: 'bg-amber-500/20',
    fullDesc: 'WabiSkills is YomTech Global\'s premier technology training platform, delivering hands-on bootcamps, industry mentorship, and practical digital skills that prepare professionals for high-impact tech careers. With a curriculum designed around real-world engineering projects, WabiSkills bridges the gap between theoretical education and production-ready capabilities.',
    features: [
      { icon: GraduationCap, title: 'Hands-On Bootcamps', desc: 'Intensive, project-based learning programs in full-stack development, data science, cybersecurity, and cloud computing.' },
      { icon: Users, title: '1-on-1 Industry Mentorship', desc: 'Personalized guidance from senior YomTech engineers and industry veterans with real-world project experience.' },
      { icon: Code, title: 'Live Coding Labs', desc: 'Real development environments where students build deployable applications and contribute to open-source repositories.' },
      { icon: Briefcase, title: 'Career Placement Support', desc: 'Direct job placement assistance through the WabiJob talent network and partner enterprise network.' },
      { icon: BookOpen, title: 'Self-Paced Learning Paths', desc: 'Structured curriculum tracks for web development, mobile apps, DevOps, AI/ML, and enterprise systems.' },
      { icon: ShieldCheck, title: 'Industry Certifications', desc: 'Recognized completion certificates co-validated with partner universities and enterprise hiring organizations.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Python', 'Docker'],
    targetUsers: [
      'University graduates entering tech careers',
      'Mid-career professionals switching to tech',
      'Government IT staff for capacity building',
      'Enterprise teams for upskilling programs',
      'Ambitious individuals seeking practical skills',
    ],
    stats: [
      { value: '2K+', label: 'Graduates' },
      { value: '15+', label: 'Courses' },
      { value: '95%', label: 'Job Rate' },
      { value: '50+', label: 'Mentors' },
    ],
    externalLinks: [
      { label: 'Visit WabiSkills', url: 'https://wabiskills.com/', primary: true },
      { label: 'View Curriculum', url: 'https://wabiskills.com/', primary: false },
    ],
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
    heroGradient: 'from-emerald-950/85 via-teal-900/80 to-emerald-950/90',
    glowColor: 'bg-emerald-500/20',
    fullDesc: 'WabiJob is an intelligent talent and recruitment platform engineered to connect Africa\'s most skilled technology professionals with global enterprise opportunities. Powered by WabiSkills alumni networks and YomTech\'s enterprise partnerships, WabiJob creates a trusted bridge between proven tech talent and quality employer ecosystems.',
    features: [
      { icon: Briefcase, title: 'Smart Job Matching', desc: 'AI-driven candidate-to-opportunity matching based on verified skills, portfolio projects, and career trajectory.' },
      { icon: Users, title: 'Verified Tech Talent Pool', desc: 'Pre-vetted professionals with verified technical skills, WabiSkills certifications, and real project portfolios.' },
      { icon: Building2, title: 'Enterprise Employer Network', desc: 'Partnerships with leading Ethiopian enterprises, government institutions, and Pan-African technology companies.' },
      { icon: GraduationCap, title: 'WabiSkills Integration', desc: 'Direct pipeline from WabiSkills training to employer opportunities — closing the skills-to-employment gap.' },
      { icon: Globe, title: 'Remote Opportunities', desc: 'Access to international remote positions for African tech professionals ready for global employment.' },
      { icon: Star, title: 'Career Growth Tracking', desc: 'Professional growth dashboard tracking milestones, skills progression, and interview performance metrics.' },
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Python', 'AWS Lambda'],
    targetUsers: [
      'WabiSkills graduates seeking employment',
      'Experienced Ethiopian tech professionals',
      'Enterprise HR teams and talent acquisition managers',
      'Government institutions recruiting digital talent',
      'International companies hiring African tech talent',
    ],
    stats: [
      { value: '500+', label: 'Jobs Listed' },
      { value: '50+', label: 'Employers' },
      { value: 'Pan-African', label: 'Reach' },
      { value: '48hr', label: 'Match Time' },
    ],
    externalLinks: [
      { label: 'Visit WabiJob', url: 'https://wabijob.com/', primary: true },
      { label: 'Post a Job', url: 'https://wabijob.com/', primary: false },
    ],
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
    heroGradient: 'from-cyan-950/85 via-sky-900/80 to-cyan-950/90',
    glowColor: 'bg-cyan-500/20',
    fullDesc: 'Yomnex ERP is YomTech Global\'s flagship enterprise resource planning system — built entirely from scratch for maximum flexibility, scalability, and institutional alignment. Unlike off-the-shelf ERP platforms, Yomnex is designed around each client\'s exact operational workflows, serving government institutions, universities, industrial enterprises, and private sector organizations across Ethiopia and beyond.',
    features: [
      { icon: Layers, title: 'Finance & Accounting', desc: 'Full general ledger, accounts payable/receivable, budget management, and real-time financial reporting.' },
      { icon: Users, title: 'Human Resource Management', desc: 'Complete HR lifecycle management — recruitment, payroll, performance, leave management, and org charts.' },
      { icon: Server, title: 'Inventory & WMS', desc: 'Warehouse management, stock tracking, multi-location inventory, and automated procurement workflows.' },
      { icon: Cpu, title: 'Sales Force Automation (SFA)', desc: 'Sales pipeline management, CRM integration, customer orders, and territory-based performance tracking.' },
      { icon: ShieldCheck, title: 'Gate & Asset Management', desc: 'Physical access control, asset tracking, maintenance scheduling, and security monitoring integration.' },
      { icon: Building2, title: 'Custom Module Development', desc: 'Any workflow-specific module can be built from scratch — fully tailored to client operational requirements.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Python'],
    targetUsers: [
      'Government ministries and public institutions',
      'Universities and academic institutions',
      'Industrial enterprises and manufacturing companies',
      'Hotel chains and hospitality businesses',
      'Banks and financial service organizations',
      'Logistics and supply chain companies',
    ],
    stats: [
      { value: '25+', label: 'Deployments' },
      { value: '12+', label: 'Modules' },
      { value: '65%', label: 'Faster Ops' },
      { value: '100%', label: 'Custom Built' },
    ],
    externalLinks: [
      { label: 'Request a Demo', url: '/contact', primary: true },
      { label: 'Schedule Consultation', url: '/contact', primary: false },
    ],
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
    heroGradient: 'from-purple-950/85 via-violet-900/80 to-purple-950/90',
    glowColor: 'bg-purple-500/20',
    fullDesc: 'WabiX is YomTech Global\'s purpose-built virtual collaboration and online engagement platform. Designed for seamless communication, enterprise team coordination, online bootcamps, and educational webinars — WabiX combines HD video conferencing with real-time collaboration tools optimized for African network environments.',
    features: [
      { icon: Video, title: 'HD Video Conferencing', desc: 'Crystal-clear video and audio communication optimized for low-bandwidth environments across Africa.' },
      { icon: Layers, title: 'Collaborative Workspaces', desc: 'Shared digital workspaces with whiteboards, document co-editing, and real-time collaboration tools.' },
      { icon: GraduationCap, title: 'Online Bootcamp Rooms', desc: 'Dedicated virtual classrooms integrated with WabiSkills for live coding sessions and instructor-led training.' },
      { icon: ShieldCheck, title: 'End-to-End Encryption', desc: 'Bank-grade encryption for all communications, ensuring enterprise-grade privacy and data security.' },
      { icon: Building2, title: 'Enterprise Integration', desc: 'SSO integration, Yomnex ERP connectivity, and custom API hooks for enterprise workflow automation.' },
      { icon: Globe, title: 'Multi-Platform Access', desc: 'Browser-based, iOS, Android, and desktop applications for maximum accessibility across all devices.' },
    ],
    techStack: ['WebRTC', 'Node.js', 'React.js', 'React Native', 'Socket.io', 'AWS'],
    targetUsers: [
      'Remote enterprise teams and distributed organizations',
      'Online bootcamp instructors and students',
      'Government departments for virtual meetings',
      'Educational institutions for e-learning',
      'Corporate HR teams for remote onboarding',
    ],
    stats: [
      { value: 'HD', label: 'Video Quality' },
      { value: '∞', label: 'Participants' },
      { value: 'E2E', label: 'Encrypted' },
      { value: 'Multi-Platform', label: 'Access' },
    ],
    externalLinks: [
      { label: 'Join Waitlist', url: '/contact', primary: true },
      { label: 'Learn More', url: '/contact', primary: false },
    ],
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
    heroGradient: 'from-sky-950/85 via-blue-900/80 to-sky-950/90',
    glowColor: 'bg-sky-500/20',
    fullDesc: 'Mari is a locally-engineered social media application designed to connect digital communities, tech innovators, entrepreneurs, and creative professionals across Ethiopia and the Pan-African digital ecosystem. Built with a deep understanding of African social dynamics and digital culture, Mari creates authentic digital community spaces.',
    features: [
      { icon: Globe, title: 'Local Community Focus', desc: 'Hyper-local community spaces for tech innovators, entrepreneurs, and digital creators in Ethiopian cities.' },
      { icon: Cpu, title: 'AI-Powered Content Feed', desc: 'Intelligent content curation powered by machine learning algorithms optimized for Ethiopian user preferences.' },
      { icon: Video, title: 'Live Streaming', desc: 'Native live streaming for tech talks, product launches, community events, and educational broadcasts.' },
      { icon: ShieldCheck, title: 'Privacy-First Design', desc: 'Ethiopian data residency compliance and privacy-first architecture protecting user data and communities.' },
      { icon: MessageSquare, title: 'Group Collaboration', desc: 'Dedicated group spaces for professional communities, study groups, and innovation teams.' },
      { icon: Star, title: 'Verified Professional Profiles', desc: 'Verified professional identities linking to WabiSkills credentials and WabiJob career profiles.' },
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Redis', 'Python/AI'],
    targetUsers: [
      'Ethiopian tech professionals and students',
      'Startup founders and entrepreneurs',
      'Creative digital content creators',
      'University innovation clubs and communities',
      'Pan-African tech enthusiasts and innovators',
    ],
    stats: [
      { value: 'Local', label: 'First' },
      { value: 'AI', label: 'Powered' },
      { value: 'Cross-Platform', label: 'Access' },
      { value: 'Privacy', label: 'First' },
    ],
    externalLinks: [
      { label: 'Join Early Access', url: '/contact', primary: true },
      { label: 'Contact Team', url: '/contact', primary: false },
    ],
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
    heroGradient: 'from-indigo-950/85 via-violet-900/80 to-indigo-950/90',
    glowColor: 'bg-indigo-500/20',
    fullDesc: 'Yomtech Media is YomTech Global\'s technology storytelling and documentary production platform — amplifying Pan-African innovation stories, digital transformation case studies, and tech leadership narratives for broadcast television, online streaming, and enterprise communications. Our productions have been featured on major Ethiopian media outlets.',
    features: [
      { icon: Video, title: 'Technology Documentaries', desc: 'High-production documentary films showcasing Ethiopian and Pan-African technology innovation and digital transformation stories.' },
      { icon: Building2, title: 'Enterprise Content Production', desc: 'Professional corporate video content, product showcases, and institutional storytelling for enterprise clients.' },
      { icon: Cpu, title: 'Innovation Spotlights', desc: 'Short-form content series highlighting emerging Ethiopian startups, inventors, and technology pioneers.' },
      { icon: Globe, title: 'Broadcast Distribution', desc: 'Content distribution through Fana Media Corporation, Balageru TV, and major digital streaming platforms.' },
      { icon: GraduationCap, title: 'Educational Technology Series', desc: 'Tech education content series covering programming fundamentals, AI, cybersecurity, and digital literacy.' },
      { icon: Star, title: 'Awards & Recognition Media', desc: 'Coverage and production support for technology awards, innovation competitions, and industry conferences.' },
    ],
    techStack: ['4K Production', 'Adobe Creative Suite', 'DaVinci Resolve', 'Fana TV Network', 'Balageru TV', 'YouTube'],
    targetUsers: [
      'Ethiopian broadcast media organizations',
      'Government agencies for digital communications',
      'Enterprise companies for brand storytelling',
      'Educational institutions for tech awareness',
      'Pan-African innovation and startup ecosystems',
    ],
    stats: [
      { value: '10+', label: 'Productions' },
      { value: 'TV Broadcast', label: 'Distribution' },
      { value: 'Pan-African', label: 'Stories' },
      { value: '4K', label: 'Quality' },
    ],
    externalLinks: [
      { label: 'Collaborate With Us', url: '/contact', primary: true },
      { label: 'View Productions', url: '/contact', primary: false },
    ],
  },
];

export { PRODUCTS };

// ─── Individual Product Detail Card ────────────────────────────────────
const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  const isExternal = (url) => url.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-[2.5rem] max-w-5xl w-full overflow-hidden shadow-2xl"
        >
          {/* Header Banner */}
          <div className={`relative bg-gradient-to-r ${product.heroGradient} p-8 sm:p-10 text-white overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-96 h-96 ${product.glowColor} rounded-full blur-[120px] pointer-events-none`} />
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 flex items-center justify-center transition-all z-10"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-5 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/95 p-2 flex items-center justify-center shadow-xl flex-shrink-0">
                <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border ${product.bg} ${product.border} ${product.accent} mb-2 inline-block`}>
                  {product.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">{product.name}</h2>
                <p className="text-sm text-white/70 font-bold uppercase tracking-widest mt-1">{product.tagline}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3 mt-7 relative z-10">
              {product.stats.map((s, i) => (
                <div key={i} className="text-center bg-white/10 border border-white/20 rounded-2xl py-3 px-2 backdrop-blur-sm">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-8 sm:p-10 space-y-10 font-sans">

            {/* Description */}
            <div
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="rounded-2xl p-6 border-2 border-indigo-200/80"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest mb-3">
                <Building2 size={12} />
                <span>About {product.name}</span>
              </div>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">{product.fullDesc}</p>
            </div>

            {/* Features & Benefits */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest mb-5">
                <Zap size={12} />
                <span>Features & Benefits</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                      className="flex gap-3 p-4 rounded-2xl border-2 border-indigo-200/80 group hover:shadow-md transition-all"
                    >
                      <div className={`w-10 h-10 rounded-xl ${product.bg} ${product.accent} border ${product.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900">{f.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technology + Target Users side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tech Stack */}
              <div
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-2xl p-6 border-2 border-indigo-200/80 space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest">
                  <Code size={12} />
                  <span>Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${product.bg} border ${product.border} ${product.accent}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Users */}
              <div
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-2xl p-6 border-2 border-indigo-200/80 space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-[10px] font-black uppercase tracking-widest">
                  <Users size={12} />
                  <span>Target Users</span>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {product.targetUsers.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={13} className={`${product.accent} flex-shrink-0 mt-0.5`} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {product.externalLinks.map((link, i) => {
                const ext = isExternal(link.url);
                const Tag = ext ? 'a' : Link;
                const props = ext
                  ? { href: link.url, target: '_blank', rel: 'noopener noreferrer' }
                  : { to: link.url };

                return (
                  <Tag
                    key={i}
                    {...props}
                    className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                      link.primary
                        ? 'bg-gradient-to-r from-[#0284C7] via-[#0ED3DD] to-[#1DA1F2] text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white border-2 border-cyan-300 text-[#0284C7] hover:bg-cyan-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {ext ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                  </Tag>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Products Dedicated Pages Grid ─────────────────────────────────────
export const ProductsDedicatedPages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section id="products-detail" className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
        {/* Dot mesh */}
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-indigo-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

          {/* Header */}
          <div className="text-left w-full space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
              <Building2 className="w-4 h-4 text-[#0284C7]" />
              <span>Dedicated Product Pages / Full Details</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Explore Each Product <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
                In Depth
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
              Tap any product to explore its complete feature set, technology stack, target users, screenshots, and how to get started.
            </p>
          </div>

          {/* 6 Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
                className="rounded-3xl overflow-hidden border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Colored header stripe */}
                <div className={`relative bg-gradient-to-r ${product.heroGradient} p-6 text-white overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-48 h-48 ${product.glowColor} rounded-full blur-[80px] pointer-events-none`} />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/95 p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className={`text-[8px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${product.bg} ${product.border} ${product.accent} mb-1 inline-block`}>
                        {product.badge}
                      </span>
                      <h3 className="text-xl font-black text-white">{product.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className={`text-[10px] font-extrabold uppercase tracking-widest ${product.accent}`}>
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {product.fullDesc.slice(0, 160)}...
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2">
                    {product.stats.map((s, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-base font-black ${product.accent}`}>{s.value}</div>
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.slice(0, 3).map((f, i) => (
                      <span key={i} className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${product.bg} border ${product.border} ${product.accent}`}>
                        {f.title}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                    <button
                      className={`flex items-center gap-1.5 ${product.accent} hover:opacity-80 transition-opacity`}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <span>View Full Details</span>
                      <ArrowRight size={12} />
                    </button>
                    {product.link.startsWith('http') && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className={`flex items-center gap-1 ${product.accent} hover:opacity-80`}
                      >
                        <ExternalLink size={11} />
                        <span>Visit</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
