import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Cpu, MessageSquare, Globe, Video,
  Building2, ExternalLink, ArrowRight, Star
} from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';

const CATEGORIES = [
  { id: 'ALL', label: 'All Products' },
  { id: 'EDUCATION', label: 'Education & Talent' },
  { id: 'ENTERPRISE', label: 'Enterprise & ERP' },
  { id: 'COLLABORATION', label: 'Collaboration' },
  { id: 'MEDIA', label: 'Media & Community' },
];

export const PRODUCTS_DATA = [
  {
    id: 'wabiskills',
    name: 'WabiSkills',
    tagline: 'Technology Training & Digital Skills Platform',
    category: 'EDUCATION',
    badge: 'LIVE PLATFORM',
    badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
    link: 'https://wabiskills.com/',
    logo: wabiSkillsLogo,
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    accentHex: '#D97706',
    shortDesc: 'Hands-on bootcamps, mentorship, and industry-ready digital skills programs for the next generation of African tech professionals.',
    stat1: { value: '2K+', label: 'Graduates' },
    stat2: { value: '15+', label: 'Courses' },
    stat3: { value: '95%', label: 'Job Rate' },
  },
  {
    id: 'wabijob',
    name: 'WabiJob',
    tagline: 'Talent & Recruitment Network',
    category: 'EDUCATION',
    badge: 'LIVE PLATFORM',
    badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    link: 'https://wabijob.com/',
    logo: wabiJobsLogo,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accentHex: '#059669',
    shortDesc: 'Connecting skilled African technology professionals with global enterprise opportunities through an intelligent talent ecosystem.',
    stat1: { value: '500+', label: 'Jobs Listed' },
    stat2: { value: '50+', label: 'Employers' },
    stat3: { value: 'Pan-African', label: 'Reach' },
  },
  {
    id: 'yomnex',
    name: 'Yomnex ERP',
    tagline: 'Custom Enterprise Resource Planning',
    category: 'ENTERPRISE',
    badge: 'ENTERPRISE ERP',
    badgeColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    link: '/products#yomnex',
    logo: yomnexLogo,
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    accentHex: '#0284C7',
    shortDesc: 'Fully custom-built ERP system for government institutions, universities, and private enterprises. Built from scratch, not from templates.',
    stat1: { value: '25+', label: 'Deployments' },
    stat2: { value: '12+', label: 'Modules' },
    stat3: { value: '100%', label: 'Custom Built' },
  },
  {
    id: 'wabix',
    name: 'WabiX',
    tagline: 'Virtual Collaboration Platform',
    category: 'COLLABORATION',
    badge: 'COMING SOON',
    badgeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    link: '/products#wabix',
    logo: wabiJobsLogo,
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    accentHex: '#9333EA',
    shortDesc: 'Virtual meeting and collaboration platform engineered for seamless communication, online bootcamps, and enterprise team engagement.',
    stat1: { value: 'HD', label: 'Video Quality' },
    stat2: { value: '∞', label: 'Participants' },
    stat3: { value: 'End-to-End', label: 'Encrypted' },
  },
  {
    id: 'mari',
    name: 'Mari',
    tagline: 'Social Media & Community App',
    category: 'MEDIA',
    badge: 'IN DEVELOPMENT',
    badgeColor: 'text-sky-600 bg-sky-50 border-sky-200',
    link: '/products#mari',
    logo: wabiJobsLogo,
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    accentHex: '#0284C7',
    shortDesc: 'Social media application connecting digital communities, tech innovators, and entrepreneurs across Ethiopia and beyond.',
    stat1: { value: 'Local', label: 'First' },
    stat2: { value: 'AI', label: 'Powered' },
    stat3: { value: 'Multi-Platform', label: 'Access' },
  },
  {
    id: 'yomtech-media',
    name: 'Yomtech Media',
    tagline: 'Tech Documentaries & Innovation Storytelling',
    category: 'MEDIA',
    badge: 'ACTIVE',
    badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    link: '/products#yomtech-media',
    logo: logoEmblem,
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    accentHex: '#4F46E5',
    shortDesc: 'Technology storytelling and media production platform showcasing Pan-African innovation, tech documentaries, and digital transformation success stories.',
    stat1: { value: '10+', label: 'Productions' },
    stat2: { value: 'TV', label: 'Broadcast' },
    stat3: { value: 'Pan-African', label: 'Stories' },
  },
];

export const ProductsCatalogue = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="products-catalogue" className="relative py-20 lg:py-28 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Dot mesh */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0284C7] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-[#0284C7]" />
            <span>Product Catalogue / Full Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Our Digital Product <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl font-sans">
            YomTech Global builds and operates scalable digital platforms spanning education, talent, enterprise operations, collaboration, and technology media — all engineered from scratch.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-black transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-500/30 scale-105'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              style={{ background: 'linear-gradient(90deg, #E4E4F6 0%, #F7E6C8 50%, #E5E6FA 100%)' }}
              className="rounded-3xl p-7 border-2 border-indigo-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group cursor-pointer"
              onClick={() => onProductSelect && onProductSelect(product.id)}
            >
              <div className="space-y-4">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-white border ${product.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform p-2`}>
                    <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {product.name}
                  </h3>
                  <p className={`text-xs font-extrabold uppercase tracking-widest mt-0.5 ${product.accent}`}>
                    {product.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* 3 Stats */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[product.stat1, product.stat2, product.stat3].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg font-black ${product.accent}`}>{s.value}</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                <button
                  onClick={(e) => { e.stopPropagation(); onProductSelect && onProductSelect(product.id); }}
                  className={`flex items-center gap-1.5 ${product.accent} hover:opacity-80 transition-opacity`}
                >
                  <span>View Details</span>
                  <ArrowRight size={12} />
                </button>
                {product.link.startsWith('http') && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className={`flex items-center gap-1 ${product.accent} hover:opacity-80 transition-opacity`}
                  >
                    <ExternalLink size={12} />
                    <span>Visit</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
