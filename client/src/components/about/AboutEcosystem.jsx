import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Globe, Cpu, Award, ArrowRight, CheckCircle2, X, 
  BookOpen, Layers, ShieldCheck, Zap, Users, GraduationCap
} from 'lucide-react';
import yomtechLogo from '../../assets/logo.png';

// 6 Core Values matching exact User Image Content & Rotating Geometry
const ECOSYSTEM_HEXAGONS = [
  {
    id: '01',
    num: '01',
    title: 'Innovation',
    subtitle: 'Emerging Tech & Creative Solutions',
    desc: 'We embrace creativity, emerging technologies, and forward-thinking solutions.',
    metrics: 'CORE VALUE',
    color: '#0284c7', // Sky Blue
    lightBg: 'bg-sky-50/60',
    borderColor: 'stroke-[#0284c7]',
    numColor: 'text-[#0284c7]',
    badgeBg: 'bg-sky-100/80 text-sky-800 border-sky-200',
    slot: { x: 15, y: -385 }, // Top-Right (01)
    highlights: [
      'Embrace emerging software paradigms & AI',
      'Pioneer forward-thinking enterprise architectures',
      'Foster creative problem-solving across engineering teams'
    ]
  },
  {
    id: '02',
    num: '02',
    title: 'Intelligence',
    subtitle: 'Knowledge, Strategy & Deep Logic',
    desc: 'We solve complex challenges through knowledge, strategy, and innovation.',
    metrics: 'CORE VALUE',
    color: '#f97316', // Orange
    lightBg: 'bg-orange-50/60',
    borderColor: 'stroke-[#f97316]',
    numColor: 'text-[#f97316]',
    badgeBg: 'bg-orange-100/80 text-orange-800 border-orange-200',
    slot: { x: -255, y: -385 }, // Top-Left (02)
    highlights: [
      'Solve high-complexity technical bottlenecks',
      'Data-driven architectural decision making',
      'Strategic system design & repository logic'
    ]
  },
  {
    id: '03',
    num: '03',
    title: 'Creativity',
    subtitle: 'Fresh Ideas & Modern Thinking',
    desc: 'We approach problems with fresh ideas and innovative thinking.',
    metrics: 'CORE VALUE',
    color: '#a855f7', // Purple
    lightBg: 'bg-purple-50/60',
    borderColor: 'stroke-[#a855f7]',
    numColor: 'text-[#a855f7]',
    badgeBg: 'bg-purple-100/80 text-purple-800 border-purple-200',
    slot: { x: -390, y: -150 }, // Mid-Left (03)
    highlights: [
      'Fresh UI/UX design & modern user flows',
      'Out-of-the-box system optimization',
      'Inventive full-stack software craftsmanship'
    ]
  },
  {
    id: '04',
    num: '04',
    title: 'Continuous Learning',
    subtitle: 'Growth, Mentorship & Lifelong Study',
    desc: 'We invest in growth, knowledge, and lifelong learning.',
    metrics: 'CORE VALUE',
    color: '#4f46e5', // Indigo
    lightBg: 'bg-indigo-50/60',
    borderColor: 'stroke-[#4f46e5]',
    numColor: 'text-[#4f46e5]',
    badgeBg: 'bg-indigo-100/80 text-indigo-800 border-indigo-200',
    slot: { x: -255, y: 85 }, // Bottom-Left (04)
    highlights: [
      'Invest in ongoing team technical upskilling',
      'Practical WabiSkills repository mentorship',
      'Lifelong engineering growth & adaptation'
    ]
  },
  {
    id: '05',
    num: '05',
    title: 'Client Success',
    subtitle: 'Partner Impact & Shared Growth',
    desc: 'Our success is measured by the success of our clients and partners.',
    metrics: 'CORE VALUE',
    color: '#eab308', // Gold
    lightBg: 'bg-amber-50/60',
    borderColor: 'stroke-[#eab308]',
    numColor: 'text-[#ca8a04]',
    badgeBg: 'bg-amber-100/80 text-amber-900 border-amber-200',
    slot: { x: 15, y: 85 }, // Bottom-Right (05)
    highlights: [
      'Measurable business ROI & high performance',
      'Long-term client partnerships & SLA uptime',
      'Dedicated technical support & ongoing advisory'
    ]
  },
  {
    id: '06',
    num: '06',
    title: 'Integrity',
    subtitle: 'Honesty, Transparency & Trust',
    desc: 'We build trust through honesty, transparency, and accountability.',
    metrics: 'CORE VALUE',
    color: '#10b981', // Emerald Green
    lightBg: 'bg-emerald-50/60',
    borderColor: 'stroke-[#10b981]',
    numColor: 'text-[#10b981]',
    badgeBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
    slot: { x: 150, y: -150 }, // Mid-Right (06)
    highlights: [
      'Transparent code reviews & open communication',
      'Uncompromising security & data ethics',
      'Accountable delivery & enterprise trust'
    ]
  }
];

// Single Hexagon Vector Card (Point-Top Geometry)
const EcosystemHexagonCard = ({ hex, isHovered, onHover, onClick }) => {
  return (
    <div
      onMouseEnter={() => onHover(hex.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(hex)}
      className="relative w-[240px] sm:w-[260px] aspect-[1/1.13] flex items-center justify-center cursor-pointer group select-text transition-all duration-300 hover:scale-105 z-20 drop-shadow-lg hover:drop-shadow-2xl"
    >
      {/* SVG Vector Frame */}
      <svg viewBox="0 0 280 316" className="absolute inset-0 w-full h-full filter drop-shadow-sm pointer-events-none">
        {/* White Solid Background & Outer Colored Border */}
        <polygon
          points="140,8 268,80 268,236 140,308 12,236 12,80"
          fill="#FFFFFF"
          stroke={hex.color}
          strokeWidth={isHovered ? '7.5' : '5.5'}
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
        {/* Inner Dotted Accent Line */}
        <polygon
          points="140,18 258,84 258,232 140,298 22,232 22,84"
          fill="none"
          stroke={hex.color}
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity={isHovered ? '0.7' : '0.25'}
          className="transition-opacity duration-300"
        />
      </svg>

      {/* Hexagon Content */}
      <div className="relative z-10 p-5 text-center flex flex-col items-center justify-center h-full max-w-[195px] space-y-1.5 select-text">
        {/* Bold Colored Number */}
        <span
          className="text-3xl sm:text-4xl font-black font-display tracking-tight transition-transform duration-300 group-hover:scale-110 select-text"
          style={{ color: hex.color }}
        >
          {hex.num}
        </span>

        {/* Title */}
        <h4 className="text-sm sm:text-base font-black text-slate-900 font-display leading-tight group-hover:text-cyan-700 transition-colors select-text">
          {hex.title}
        </h4>

        {/* Short Description */}
        <p className="text-[11px] sm:text-xs leading-snug font-semibold text-slate-600 line-clamp-3 select-text">
          {hex.desc}
        </p>

        {/* Metric Pill Badge */}
        <div className="pt-1">
          <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-50 transition-colors select-text">
            {hex.metrics}
          </span>
        </div>
      </div>
    </div>
  );
};

// Center Hexagon Anchor (Excellence - Center Core Value from User Image)
const EcosystemCenterHexagon = ({ logoSrc }) => (
  <div className="relative w-[220px] sm:w-[240px] aspect-[1/1.13] flex items-center justify-center cursor-pointer group select-text drop-shadow-xl z-10">
    {/* Subtle Cyan Radiant Pulsing Halo */}
    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping opacity-20 pointer-events-none" />
    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-300/15 to-blue-500/20 blur-xl pointer-events-none" />

    {/* Center SVG Vector Hexagon */}
    <svg viewBox="0 0 280 316" className="absolute inset-0 w-full h-full pointer-events-none">
      <polygon
        points="140,8 268,80 268,236 140,308 12,236 12,80"
        fill="#FFFFFF"
        stroke="#06b6d4"
        strokeWidth="6.5"
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-[#0284C7]"
      />
      <polygon
        points="140,18 258,84 258,232 140,298 22,232 22,84"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.4"
      />
    </svg>

    <div className="relative z-10 p-4 text-center flex flex-col items-center justify-center h-full max-w-[180px] space-y-1 select-text">
      {/* Top Header Text */}
      <h3 className="text-sm font-black font-display tracking-widest text-cyan-700 uppercase select-text">
        YOMTECH
      </h3>

      {/* Main Core Value Title */}
      <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-none select-text">
        Excellence
      </h2>

      {/* Core Value Description */}
      <p className="text-[10px] sm:text-[11px] leading-tight font-semibold text-slate-600 line-clamp-3 select-text px-1">
        We strive for quality and continuous improvement in everything we do.
      </p>

      {/* Circular Emblem Seal */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-0.5 shadow-inner overflow-hidden">
          <img
            src={logoSrc || yomtechLogo}
            alt="YomTech Emblem"
            className="w-full h-full object-contain p-0.5"
          />
        </div>
      </div>
    </div>
  </div>
);

export const AboutEcosystem = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedHex, setSelectedHex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-[#F4F9FF] text-slate-900 relative overflow-hidden font-sans">
      
      {/* Dotted Grid Mesh Texture Matching User Screenshot */}
      <div 
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Section Header */}
          <div className="lg:col-span-5 space-y-6 text-left flex flex-col items-start">
            <div className="inline-block relative">
              <div className="px-7 py-2.5 bg-[#0284C7] text-white text-xl sm:text-2xl font-black font-sans rounded-2xl shadow-md tracking-[0.2em] uppercase flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-200" />
                <span>VALUES</span>
              </div>
              <div className="absolute -bottom-2 left-4 w-4 h-2 bg-[#0369a1] rounded-b-sm transform skew-x-12" />
            </div>

            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 leading-relaxed font-sans tracking-normal">
              Our core values shape how we innovate, engineer enterprise software, and empower tech talent worldwide.
            </p>

            {/* 7 Core Values Pill Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Innovation
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-orange-500" />
                Intelligence
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-purple-500" />
                Creativity
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                Continuous Learning
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                Client Success
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Integrity
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <Award className="w-3.5 h-3.5 text-cyan-500" />
                Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Desktop Honeycomb Cluster Shifted to Right */}
          <div className="lg:col-span-7 hidden lg:flex relative w-full h-[660px] items-center justify-center lg:justify-end overflow-visible">

            {/* Center Hexagon Anchor */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto flex items-center justify-center">
              <EcosystemCenterHexagon logoSrc={yomtechLogo} />
            </div>

            {/* 6 Surrounding Honeycomb Hexagons (Strict Counter-Clockwise Slot Rotation) */}
            <div className="absolute inset-0 pointer-events-none">
              {ECOSYSTEM_HEXAGONS.map((hex, idx) => {
                const isHovered = hoveredId === hex.id;

                // 6 Established Slot Positions in Counter-Clockwise Order
                const slotsCCW = [
                  { x: 15, y: -385 },   // Slot 0: Top-Right (01 base)
                  { x: -255, y: -385 }, // Slot 1: Top-Left (02 base)
                  { x: -390, y: -150 }, // Slot 2: Mid-Left (03 base)
                  { x: -255, y: 85 },   // Slot 3: Bottom-Left (04 base)
                  { x: 15, y: 85 },     // Slot 4: Bottom-Right (05 base)
                  { x: 150, y: -150 }   // Slot 5: Mid-Right (06 base)
                ];

                // Generate exact counter-clockwise path starting from each card's base slot
                const xPath = [0, 1, 2, 3, 4, 5, 6].map((step) => slotsCCW[(idx + step) % 6].x);
                const yPath = [0, 1, 2, 3, 4, 5, 6].map((step) => slotsCCW[(idx + step) % 6].y);

                return (
                  <motion.div
                    key={hex.id}
                    animate={{
                      x: xPath,
                      y: yPath
                    }}
                    transition={{
                      duration: 24, // Smooth 24-second full revolution (4s per slot transition)
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  >
                    <EcosystemHexagonCard
                      hex={hex}
                      isHovered={isHovered}
                      onHover={setHoveredId}
                      onClick={setSelectedHex}
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ========================================================
            MOBILE & TABLET HONEYCOMB GRID VIEW
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden max-w-4xl mx-auto items-center">
          <div className="sm:col-span-2 md:col-span-3 flex justify-center mb-4">
            <EcosystemCenterHexagon logoSrc={yomtechLogo} />
          </div>
          {ECOSYSTEM_HEXAGONS.map((hex) => (
            <div key={hex.id} className="flex justify-center">
              <EcosystemHexagonCard
                hex={hex}
                isHovered={hoveredId === hex.id}
                onHover={setHoveredId}
                onClick={setSelectedHex}
              />
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================
          INTERACTIVE CATEGORY MODAL POPUP
      ======================================================== */}
      <AnimatePresence>
        {selectedHex && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md"
            onClick={() => setSelectedHex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border-2 border-slate-200 relative p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedHex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <span
                  className="text-4xl font-black font-display"
                  style={{ color: selectedHex.color }}
                >
                  {selectedHex.num}
                </span>
                <div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${selectedHex.badgeBg}`}>
                    {selectedHex.metrics}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-display mt-1">
                    {selectedHex.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">{selectedHex.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                {selectedHex.desc}
              </p>

              {/* Key Modules / Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-600" />
                  <span>Key Curriculum &amp; Solutions Included</span>
                </h4>
                <div className="space-y-2">
                  {selectedHex.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">YomTech Global Platform</span>
                <button
                  onClick={() => setSelectedHex(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AboutEcosystem;



