import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ZoomIn, Globe, Users, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

import gallery01 from '../../assets/gallery/gallery 01.jpg';
import gallery02 from '../../assets/gallery/gallery 02.jpg';
import gallery03 from '../../assets/gallery/gallery 03.jpg';
import gallery04 from '../../assets/gallery/gallery 04.jpg';
import gallery05 from '../../assets/gallery/gallery 05.jpg';
import gallery06 from '../../assets/gallery/gallery 06.jpg';
import gallery07 from '../../assets/gallery/gallery 07.jpg';
import gallery08 from '../../assets/gallery/gallery 08.jpg';
import gallery09 from '../../assets/gallery/gallery 09.jpg';
import logoEmblem from '../../assets/logos/logo.png';

const GALLERY_ITEMS = [
  // Row 1: Top 2 Hero Cards (7 cols + 5 cols)
  {
    id: 1,
    title: 'Building Pan-African Tech Partnerships with Local & Global Institutions',
    category: 'Enterprise Engineering',
    author: 'Institutional Leadership',
    location: 'Pan-African Hubs',
    date: 'Est. 2015',
    image: gallery01,
    span: 'md:col-span-7 aspect-[16/10] sm:aspect-[16/9] min-h-[380px]',
    description: 'Our core engineering leads collaborating with higher education institutions and regional enterprise hubs on scalable software systems.',
    accent: 'bg-cyan-500'
  },
  {
    id: 2,
    title: 'Strategic Advisory Alliances with Global Enterprise Leaders',
    category: 'Global Delivery',
    author: 'Strategic Advisory',
    location: 'Global Partners',
    date: 'Active Campaigns',
    image: gallery02,
    span: 'md:col-span-5 aspect-[16/9] sm:aspect-[4/3] min-h-[380px]',
    description: 'Delivering end-to-end cloud transformation, ERP roadmaps, and digital advisory in partnership with global enterprise leaders.',
    accent: 'bg-sky-500'
  },
  // Row 2: 3 Tall Side-by-Side Vertical Columns (4 cols each - Matching User Screenshot)
  {
    id: 3,
    title: 'WabiSkills Talent Development Partnerships with Regional Universities',
    category: 'WabiSkills Academy',
    author: 'Institutional Mentors',
    location: 'University Partners',
    date: 'Joint Bootcamps',
    image: gallery03,
    span: 'md:col-span-4 aspect-[3/4] sm:aspect-[3/4.2] min-h-[480px] lg:min-h-[540px]',
    description: 'Collaborative tech bootcamps and hands-on repository mentorship empowering graduates from local and pan-African universities.',
    badgeTag: 'LOCAL & GLOBAL ALLIANCES',
    badgeColor: 'bg-amber-400 text-slate-950',
    accent: 'bg-amber-500'
  },
  {
    id: 4,
    title: 'Co-Innovation Campaigns with Local & International Corporate Partners',
    category: 'Client Success',
    author: 'Partnership Directorate',
    location: 'Global Campaigns',
    date: '2026 Growth',
    image: gallery04,
    span: 'md:col-span-4 aspect-[3/4] sm:aspect-[3/4.2] min-h-[480px] lg:min-h-[540px]',
    description: 'Building long-term strategic alliances with corporate leaders, government bodies, and international technology institutions.',
    badgeTag: 'CORPORATE PARTNERSHIPS',
    badgeColor: 'bg-cyan-400 text-slate-950',
    accent: 'bg-emerald-500'
  },
  {
    id: 5,
    title: 'Institutional Tech Talent Campaigns & Production Engineering Labs',
    category: 'Talent Growth',
    author: 'Academy Leads',
    location: 'Innovation Labs',
    date: '2K+ Graduates',
    image: gallery05,
    span: 'md:col-span-4 aspect-[3/4] sm:aspect-[3/4.2] min-h-[480px] lg:min-h-[540px]',
    description: 'Transforming university graduates into industry-ready software engineers through joint institutional talent initiatives.',
    badgeTag: 'ACADEMY CAMPAIGNS',
    badgeColor: 'bg-indigo-400 text-slate-950',
    accent: 'bg-indigo-500'
  },
  // Row 3: 4 Tall Side-by-Side Vertical Columns Below Row 2 (3 cols each)
  {
    id: 6,
    title: '24/7 Enterprise SLAs & Institutional Client Hotline Operations',
    category: 'Enterprise Support',
    author: 'Operations Team',
    location: '24/7 SLA Hotline',
    date: 'Global Support',
    image: gallery06,
    span: 'md:col-span-3 aspect-[3/4] sm:aspect-[3/4.2] min-h-[460px] lg:min-h-[500px]',
    description: 'Providing round-the-clock technical operations, rapid incident SLAs, and dedicated hotline support for enterprise partners.',
    badgeTag: '24/7 ENTERPRISE SLAs',
    badgeColor: 'bg-emerald-400 text-slate-950',
    accent: 'bg-emerald-500'
  },
  {
    id: 7,
    title: 'Joint Enterprise Systems Architecture with Regional Corporate Leaders',
    category: 'Systems Engineering',
    author: 'Core Architects',
    location: 'Corporate Partners',
    date: 'ERP & WMS',
    image: gallery07,
    span: 'md:col-span-3 aspect-[3/4] sm:aspect-[3/4.2] min-h-[460px] lg:min-h-[500px]',
    description: 'Architecting custom ERP, CRM, and supply chain software platforms in partnership with regional enterprise organizations.',
    badgeTag: 'INSTITUTIONAL ERP',
    badgeColor: 'bg-sky-400 text-slate-950',
    accent: 'bg-sky-500'
  },
  {
    id: 8,
    title: 'Pan-African Developer Campaigns & WabiSkills Institutional Cohorts',
    category: 'Talent Academy',
    author: 'Campaign Directors',
    location: 'Regional Campuses',
    date: 'Cohort 2026',
    image: gallery08,
    span: 'md:col-span-3 aspect-[3/4] sm:aspect-[3/4.2] min-h-[460px] lg:min-h-[500px]',
    description: 'Immersive cohort training campaigns partnering with local technology centers to deliver practical full-stack skills.',
    badgeTag: 'DEV CAMPAIGNS',
    badgeColor: 'bg-amber-400 text-slate-950',
    accent: 'bg-amber-500'
  },
  {
    id: 9,
    title: 'Global Cloud Security & DevOps Alliances across Pan-African Markets',
    category: 'Cloud & DevOps',
    author: 'Cloud Architects',
    location: 'AWS & Azure Partners',
    date: 'Cloud Alliances',
    image: gallery09,
    span: 'md:col-span-3 aspect-[3/4] sm:aspect-[3/4.2] min-h-[460px] lg:min-h-[500px]',
    description: 'Building secure cloud migration, automated CI/CD pipelines, and high-availability infrastructure with global cloud providers.',
    badgeTag: 'CLOUD ALLIANCES',
    badgeColor: 'bg-purple-400 text-slate-950',
    accent: 'bg-purple-500'
  }
];

export const CompanyGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden font-sans bg-[#F4F9FF]">
      
      {/* Dotted Grid Mesh Texture Matching Page Design */}
      <div 
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Divider Line (Matching Upper Section Dividers) */}
        <div className="relative flex items-center justify-start py-4 w-full max-w-full px-2 sm:px-6 mx-auto">
          <div className="w-full h-[4px] bg-gradient-to-r from-[#0284C7] via-cyan-400 to-cyan-100/20 shadow-sm rounded-full" />
          <div className="absolute left-2 sm:left-6 px-6 py-2 bg-[#F4F9FF] border-[3px] border-[#0284C7] rounded-full text-[#0284C7] text-xs sm:text-sm font-black flex items-center gap-2 shadow-md z-10">
            <span>◆</span>
            <span className="uppercase tracking-[0.25em]">Our Innovation Gallery</span>
            <span>◆</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Pan-African Innovation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Institutional Partnerships in Action
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl font-sans">
            Explore active campaigns, local and global partnerships, and institutional collaborations across YomTech Global and WabiSkills Academy.
          </p>
        </div>

        {/* Gallery Grid Rows Container */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* Row 1: Top 2 Hero Cards (7 cols + 5 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {GALLERY_ITEMS.slice(0, 2).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                className={`relative rounded-3xl overflow-hidden shadow-lg border-2 border-white/80 group cursor-pointer bg-slate-900 ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                {/* Dark Gradient Overlay - Visible ONLY on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {item.badgeTag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest shadow-md ${item.badgeColor}`}>
                      {item.badgeTag}
                    </span>
                  </div>
                )}
                
                {/* Hover Zoom Icon Pill */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg">
                    <ZoomIn className="w-4.5 h-4.5 text-[#0284C7]" />
                  </div>
                </div>

                {/* Text Content Overlay - Visible ONLY on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 space-y-2.5 text-left opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white p-0.5 shadow-md overflow-hidden flex-shrink-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-cyan-300 drop-shadow-xs">
                      WRITTEN BY: {item.author.toUpperCase()} · {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug font-display drop-shadow-md group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 Physically Overlapping Tall Cards (True Negative Margin Overlap Layout) */}
          <div className="flex flex-col md:flex-row items-stretch justify-center w-full relative z-10">
            {GALLERY_ITEMS.slice(2, 5).map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                style={{ zIndex: (idx + 1) * 10 }}
                className={`relative flex-1 w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer bg-slate-900 aspect-[3/4.2] min-h-[480px] lg:min-h-[540px] hover:z-50 transition-all duration-300 ${
                  idx > 0 ? '-mt-4 md:mt-0 md:-ml-5 lg:-ml-8' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                {/* Dark Gradient Overlay - Visible ONLY on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {item.badgeTag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest shadow-md ${item.badgeColor}`}>
                      {item.badgeTag}
                    </span>
                  </div>
                )}
                
                {/* Hover Zoom Icon Pill */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg">
                    <ZoomIn className="w-4.5 h-4.5 text-[#0284C7]" />
                  </div>
                </div>

                {/* Text Content Overlay - Visible ONLY on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 space-y-2.5 text-left opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white p-0.5 shadow-md overflow-hidden flex-shrink-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-cyan-300 drop-shadow-xs">
                      WRITTEN BY: {item.author.toUpperCase()} · {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug font-display drop-shadow-md group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: 4 Physically Overlapping Tall Cards (True Negative Margin Overlap Layout) */}
          <div className="flex flex-col md:flex-row items-stretch justify-center w-full relative z-10">
            {GALLERY_ITEMS.slice(5, 9).map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                style={{ zIndex: (idx + 1) * 10 }}
                className={`relative flex-1 w-full md:w-1/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer bg-slate-900 aspect-[3/4.2] min-h-[460px] lg:min-h-[500px] hover:z-50 transition-all duration-300 ${
                  idx > 0 ? '-mt-4 md:mt-0 md:-ml-4 lg:-ml-6' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                {/* Dark Gradient Overlay - Visible ONLY on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {item.badgeTag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-widest shadow-md ${item.badgeColor}`}>
                      {item.badgeTag}
                    </span>
                  </div>
                )}
                
                {/* Hover Zoom Icon Pill */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg">
                    <ZoomIn className="w-4.5 h-4.5 text-[#0284C7]" />
                  </div>
                </div>

                {/* Text Content Overlay - Visible ONLY on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 space-y-2.5 text-left opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white p-0.5 shadow-md overflow-hidden flex-shrink-0">
                      <img src={logoEmblem} alt="YomTech Emblem" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-cyan-300 drop-shadow-xs">
                      WRITTEN BY: {item.author.toUpperCase()} · {item.date}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug font-display drop-shadow-md group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-slate-200 relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="md:w-3/5 bg-slate-950 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-black uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{selectedPhoto.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium font-sans">
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Hub Location:</span>
                    <span className="font-bold text-slate-900">{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Organized By:</span>
                    <span className="font-bold text-cyan-700">{selectedPhoto.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CompanyGallery;
