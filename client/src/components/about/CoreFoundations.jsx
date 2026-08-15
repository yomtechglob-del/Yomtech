import React, { useState, useRef, useEffect } from 'react';
import { Target, Eye, Heart, Sparkles, CheckCircle2, Globe, TrendingUp, Cpu, Users, ArrowUpRight, ShieldCheck, Zap, Award, Lightbulb, Brain, Layers, Star, Play, Pause, RotateCw, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import visionPanAfricaImg from '../../assets/vision_pan_africa.png';
import missionTechSolutionsImg from '../../assets/mission_tech_solutions.png';
import { AboutEcosystem } from './AboutEcosystem';

const FOUNDATION_TABS = [
  {
    id: 'mission',
    kicker: 'ORGANIZATION & TALENT PURPOSE',
    title: 'Our Mission',
    description: 'To equip organizations and individuals with cutting-edge technology solutions and practical, industry-relevant skills that create measurable impact.',
    icon: Target,
    watermark: 'MISSION',
    theme: {
      accent: 'text-cyan-600',
      activeBorder: 'border-cyan-400',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      glow: 'shadow-[0_20px_50px_rgba(6,182,212,0.25)]',
      bgGlow: 'bg-cyan-500/10',
      gradient: 'from-cyan-500 to-blue-600',
      textGradient: 'from-cyan-600 to-blue-600',
      iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-600'
    },
    pillars: [
      'Equip organizations with scalable, enterprise-grade technology solutions',
      'Provide practical, industry-relevant skills for high-impact tech careers',
      'Bridge theoretical knowledge with real-world engineering repositories and measurable impact'
    ]
  },
  {
    id: 'vision',
    kicker: 'PAN-AFRICAN & GLOBAL TRAJECTORY',
    title: 'Our Vision',
    description: 'To become a leading Pan-African technology powerhouse driving innovation, digital transformation, and economic empowerment.',
    icon: Eye,
    watermark: 'VISION',
    theme: {
      accent: 'text-fuchsia-600',
      activeBorder: 'border-fuchsia-400',
      badgeBg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
      glow: 'shadow-[0_20px_50px_rgba(217,70,239,0.25)]',
      bgGlow: 'bg-fuchsia-500/10',
      gradient: 'from-fuchsia-500 to-purple-600',
      textGradient: 'from-fuchsia-600 to-purple-600',
      iconBg: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-600'
    },
    pillars: [
      'Lead digital transformation across the Pan-African and global technology landscape',
      'Pioneer next-generation enterprise software, AI systems, and cloud architectures',
      'Drive sustainable economic empowerment through elite tech talent engineering'
    ]
  },
  {
    id: 'values',
    kicker: 'GUIDING PRINCIPLES',
    title: 'Our Values',
    description: 'Our culture is rooted in uncompromising craftsmanship, radical transparency, continuous innovation, and a commitment to creating measurable real-world impact.',
    icon: Heart,
    watermark: 'VALUES',
    theme: {
      accent: 'text-amber-600',
      activeBorder: 'border-amber-400',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      glow: 'shadow-[0_20px_50px_rgba(245,158,11,0.25)]',
      bgGlow: 'bg-amber-500/10',
      gradient: 'from-amber-500 to-orange-600',
      textGradient: 'from-amber-600 to-orange-600',
      iconBg: 'bg-amber-50 border-amber-200 text-amber-600'
    },
    pillars: [
      'Innovation & Intelligence: Solve complex challenges through knowledge and emerging tech',
      'Integrity & Excellence: Build trust through radical transparency and continuous improvement',
      'Continuous Learning & Client Success: Empower lifelong growth and celebrate partner impact'
    ]
  }
];

// Exact 6 Honeycomb Slots for the Core Values diagram matching user reference image
const FIXED_HEX_SLOTS = [
  { id: 0, name: 'Top', x: 0, y: -238 },           // Innovation (Top)
  { id: 1, name: 'Top-Right', x: 206, y: -118 },   // Integrity (Top-Right)
  { id: 2, name: 'Bottom-Right', x: 206, y: 118 },  // Client Success (Bottom-Right)
  { id: 3, name: 'Bottom', x: 0, y: 238 },        // Continuous Learning (Bottom)
  { id: 4, name: 'Bottom-Left', x: -206, y: 118 },  // Creativity (Bottom-Left)
  { id: 5, name: 'Top-Left', x: -206, y: -118 }    // Intelligence (Top-Left)
];

// Exact 6 Core Values matching the uploaded reference image's content, colors & positions
const YOMTECH_VALUES = [
  {
    id: 0,
    title: 'Innovation',
    desc: 'We embrace creativity. emerging technologies. and forward-thinking solutions.',
    isSolidBlue: false, // White fill with blue stroke
    color: '#0284c7',
    slotIndex: 0
  },
  {
    id: 1,
    title: 'Integrity',
    desc: 'We build trust through honesty. transparency. and accountability.',
    isSolidBlue: true, // Solid Blue fill with white text
    color: '#0284c7',
    slotIndex: 1
  },
  {
    id: 2,
    title: 'Client Success',
    desc: 'Our success is measured by the success of our clients and partners.',
    isSolidBlue: true, // Solid Blue fill with white text
    color: '#0284c7',
    slotIndex: 2
  },
  {
    id: 3,
    title: 'Continuous Learning',
    desc: 'We invest in growth. knowledge. and lifelong learning.',
    isSolidBlue: false, // White fill with blue stroke
    color: '#0284c7',
    slotIndex: 3
  },
  {
    id: 4,
    title: 'Creativity',
    desc: 'We approach problems with fresh ideas and innovative thinking.',
    isSolidBlue: true, // Solid Blue fill with white text
    color: '#0284c7',
    slotIndex: 4
  },
  {
    id: 5,
    title: 'Intelligence',
    desc: 'We solve complex challenges through knowledge. strategy. and innovation.',
    isSolidBlue: true, // Solid Blue fill with white text
    color: '#0284c7',
    slotIndex: 5
  }
];

// Hexagonal Shape Card Component matching reference code clipPath technique
const ValueHexagonCard = ({ val, hoveredNode, setHoveredNode }) => {
  const isHovered = hoveredNode === val.title;
  const isSolid = val.isSolidBlue;

  return (
    <div
      onMouseEnter={() => setHoveredNode && setHoveredNode(val.title)}
      onMouseLeave={() => setHoveredNode && setHoveredNode(null)}
      className="relative w-[235px] sm:w-[250px] aspect-[1/1.13] flex items-center justify-center cursor-pointer group select-none transition-all duration-300 hover:scale-105 z-10 drop-shadow-xl hover:drop-shadow-2xl"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    >
      <div 
        className="w-[96%] h-[96%] m-auto flex items-center justify-center relative transition-transform duration-500 group-hover:scale-[1.02]" 
        style={{ 
          backgroundColor: '#0284C7', 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' 
        }}
      >
        <div 
          className={`w-[97%] h-[97%] flex flex-col items-center justify-center relative p-4 sm:p-6 transition-colors duration-300 ${
            isSolid ? 'bg-[#0284C7]' : 'bg-white hover:bg-slate-50'
          }`}
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-1.5 px-3">
            <h4 className={`text-xl sm:text-2xl font-black font-display leading-tight transition-colors ${
              isSolid ? 'text-white' : 'text-[#0284C7]'
            }`}>
              {val.title}
            </h4>

            <p className={`text-xs sm:text-[13px] leading-relaxed font-semibold ${
              isSolid ? 'text-slate-100' : 'text-slate-700'
            }`}>
              {val.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Center Hexagon Anchor matching reference image (Excellence in Center)
const CenterHexagon = ({ hoveredNode }) => (
  <div
    className="relative w-[250px] sm:w-[270px] aspect-[1/1.13] flex items-center justify-center cursor-pointer group select-none transition-all duration-300 hover:scale-105 z-20 drop-shadow-2xl"
    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
  >
    <div 
      className="w-[96%] h-[96%] m-auto flex items-center justify-center relative transition-transform duration-500 group-hover:scale-[1.02]" 
      style={{ 
        backgroundColor: '#0284C7', 
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' 
      }}
    >
      <div 
        className="w-[97%] h-[97%] flex flex-col items-center justify-center relative p-5 bg-white hover:bg-slate-50 transition-colors duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-1.5 px-3">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0284C7] font-display tracking-tight leading-tight">
            Excellence
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-700 font-semibold leading-relaxed">
            We strive for quality and continuous improvement in everything we do.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FluidBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
    <div className="absolute inset-0 bg-[#ffffff]" />
    
    <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-[130px] pointer-events-none" />
    <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-sky-100/30 rounded-full blur-[140px] pointer-events-none" />

    <div 
      className="absolute inset-0 opacity-[0.2]" 
      style={{ 
        backgroundImage: 'radial-gradient(rgba(14,165,233,0.25) 1px, transparent 1px)', 
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)'
      }}
    />
  </div>
);

const MagneticGlassCard = ({ activeTab }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = activeTab.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-[2.5rem] perspective-1000 z-10 transition-transform duration-700 ease-out h-full min-h-[480px]"
      style={{
        transform: isHovered 
          ? `rotateX(${(mousePos.y - 300) / -60}deg) rotateY(${(mousePos.x - 300) / 60}deg) scale3d(1.02, 1.02, 1.02)`
          : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
    >
      <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${activeTab.theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10`} />
      
      <div className="relative w-full h-full bg-white/95 backdrop-blur-2xl border-2 border-slate-200/90 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-colors duration-500 hover:border-cyan-300">
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14,165,233,0.08), transparent 40%)`
          }}
        />

        <div key={activeTab.id} className="relative z-10 flex flex-col h-full animate-fade-in-slide">
          
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl ${activeTab.theme.iconBg} flex items-center justify-center shadow-md relative overflow-hidden group/icon`}>
                <Icon className={`w-7 h-7 ${activeTab.theme.accent} relative z-10`} strokeWidth={2} />
              </div>
              <div>
                <span className={`text-[11px] font-black uppercase tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r ${activeTab.theme.textGradient} block mb-1`}>
                  {activeTab.kicker}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                  {activeTab.title}
                </h3>
              </div>
            </div>
            
            <div className={`w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shadow-xs ${activeTab.theme.accent}`}>
               <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 mb-8 backdrop-blur-md shadow-inner relative overflow-hidden">
             <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${activeTab.theme.gradient}`} />
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-semibold">
              {activeTab.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center`}>
                 <div className={`w-1.5 h-1.5 rounded-full bg-current ${activeTab.theme.accent} animate-pulse`} />
              </div>
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] text-slate-500`}>
                Key Pillars &amp; Objectives
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 to-transparent ml-4" />
            </div>

            <ul className="space-y-3.5">
              {activeTab.pillars.map((pillar, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3.5 group/item p-3.5 rounded-xl bg-white hover:bg-slate-50 transition-colors duration-300 border border-slate-100 shadow-xs"
                  style={{ animation: `fade-in-up 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${activeTab.theme.accent} transition-transform duration-300 group-hover/item:scale-110`} />
                  <span className="text-sm md:text-base text-slate-700 font-semibold leading-relaxed group-hover/item:text-slate-900 transition-colors">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div 
          key={`wm-${activeTab.id}`}
          className="absolute -bottom-6 right-0 text-[100px] md:text-[140px] font-black text-slate-900/[0.04] pointer-events-none select-none tracking-tighter animate-fade-in-scale"
          style={{ transform: 'translateY(20px)' }}
        >
          {activeTab.watermark}
        </div>

      </div>
    </div>
  );
};

export const CoreFoundations = () => {
  const [activeTabId, setActiveTabId] = useState('mission');
  const [hoveredNode, setHoveredNode] = useState(null);
  const activeTab = FOUNDATION_TABS.find(t => t.id === activeTabId);

  return (
    <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 flex flex-col items-center bg-white border-b border-slate-200/80">
      
      <FluidBackground />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-24">
        
        {/* ========================================================
            EXECUTIVE VISION, MISSION & VALUES SHOWCASE (Reference Design)
        ======================================================== */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[3rem] bg-gradient-to-b from-white via-sky-50/40 to-white border-2 border-sky-200/70 shadow-2xl space-y-20 relative overflow-hidden">
          
          {/* Subtle Ambient Watermark */}
          <div className="absolute top-10 right-10 text-[180px] font-black text-slate-900/[0.02] select-none pointer-events-none font-display">
            YOMTECH
          </div>

          {/* 1. VISION BLOCK (Top: Left Text + Right Pan-African Map Graphic) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block relative">
                <div className="px-8 py-3 bg-[#0284C7] text-white text-2xl sm:text-3xl font-black font-display rounded-xl shadow-lg tracking-wide uppercase flex items-center gap-3">
                  <Eye className="w-6 h-6 text-cyan-200" />
                  <span>Vision</span>
                </div>
                <div className="absolute -bottom-2 left-4 w-4 h-2 bg-[#0369a1] rounded-b-sm transform skew-x-12" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-slate-900 leading-snug tracking-tight">
                To become a leading{' '}
                <span className="text-[#0284C7] font-black underline decoration-cyan-400 decoration-wavy decoration-2">
                  Pan-African technology powerhouse
                </span>{' '}
                driving innovation, digital transformation, and economic empowerment.
              </h3>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-sky-500" />
                  Pan-African Network
                </span>
                <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-500" />
                  Digital Transformation
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" />
                  Economic Empowerment
                </span>
              </div>
            </div>

            {/* Right Graphic: Pan-African Tech Network Image in Hexagon Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[1/1.13] flex items-center justify-center p-[4px] bg-[#0284C7] shadow-2xl transition-transform duration-500 hover:scale-105 group cursor-pointer"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div 
                  className="w-[97%] h-[97%] bg-white flex items-center justify-center overflow-hidden relative"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img
                    src={visionPanAfricaImg}
                    alt="YomTech Pan-African Tech Powerhouse Vision"
                    className="w-full h-full object-contain object-center p-2.5 transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-2">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#0284C7]/40 to-transparent" />
            <div className="absolute px-4 py-1.5 bg-white border border-[#0284C7]/40 rounded-full text-[#0284C7] text-xs font-black flex items-center gap-1.5 shadow-sm">
              <span>◆</span>
              <span className="text-[10px] tracking-widest uppercase">Fixed Margin Hexagonal Matrix</span>
              <span>◆</span>
            </div>
          </div>

          {/* 2. MISSION BLOCK (Middle: Left Graphic + Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Graphic: Enterprise Technology & Skills Platform Image in Hexagon Frame */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div 
                className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[1/1.13] flex items-center justify-center p-[4px] bg-[#0284C7] shadow-2xl transition-transform duration-500 hover:scale-105 group cursor-pointer"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div 
                  className="w-[97%] h-[97%] bg-white flex items-center justify-center overflow-hidden relative p-4"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img
                    src={missionTechSolutionsImg}
                    alt="YomTech Practical Skills & Enterprise Solutions Mission"
                    className="w-full h-full object-contain object-center p-2 transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-block relative">
                <div className="px-8 py-3 bg-[#0284C7] text-white text-2xl sm:text-3xl font-black font-display rounded-xl shadow-lg tracking-wide uppercase flex items-center gap-3">
                  <Target className="w-6 h-6 text-cyan-200" />
                  <span>Mission</span>
                </div>
                <div className="absolute -bottom-2 left-4 w-4 h-2 bg-[#0369a1] rounded-b-sm transform skew-x-12" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-slate-900 leading-snug tracking-tight">
                To equip organizations and individuals with{' '}
                <span className="text-[#0284C7] font-black underline decoration-cyan-400 decoration-wavy decoration-2">
                  cutting-edge technology solutions
                </span>{' '}
                and practical, industry-relevant skills that create{' '}
                <span className="text-[#059669] font-black">
                  measurable impact.
                </span>
              </h3>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                  Cutting-Edge Tech
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-500" />
                  Practical Skills
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            INTERACTIVE ECOSYSTEM & ACADEMY PILLARS (Full-Bleed Dotted Grid Cluster)
        ======================================================== */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <AboutEcosystem />
        </div>

        {/* ========================================================
            INTERACTIVE FOUNDATIONS MATRIX (Mission, Vision, Values)
        ======================================================== */}
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-cyan-200 shadow-sm mb-6 cursor-default group hover:bg-white hover:border-cyan-300 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-cyan-800 transition-colors">
                Deep Interactive Matrix
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] font-display">
              Core Pillars Governing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                Our Engineering Ecosystem
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
              Explore the detailed objectives governing YomTech Global's enterprise software engineering and WabiSkills talent academy.
            </p>
          </div>

          {/* Main Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT: 3D Fluid Venn Diagram Selector */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[450px]">
              <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                
                {FOUNDATION_TABS.map((tab, idx) => {
                  const isActive = activeTabId === tab.id;
                  
                  let positionClasses = '';
                  if (tab.id === 'mission') positionClasses = 'top-0 left-0 md:left-4';
                  if (tab.id === 'vision') positionClasses = 'top-0 right-0 md:right-4';
                  if (tab.id === 'values') positionClasses = 'bottom-0 left-1/2 -translate-x-1/2';

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`absolute w-44 h-44 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group cursor-pointer
                        ${positionClasses}
                        ${isActive ? `scale-110 z-30 ${tab.theme.glow} bg-white border-3 ${tab.theme.activeBorder} backdrop-blur-xl shadow-2xl` : 'scale-100 z-10 bg-white/80 border-2 border-slate-200/90 backdrop-blur-md hover:bg-white hover:border-cyan-300 hover:scale-105 shadow-lg'}
                      `}
                      style={{ animation: `float-fluid 6s ease-in-out infinite alternate ${idx * 2}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${tab.theme.gradient} opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-10' : 'group-hover:opacity-5'}`} />
                      
                      <div className={`absolute inset-0 rounded-full border border-slate-200/60 scale-[0.8] transition-transform duration-700 ${isActive ? 'scale-[0.9]' : ''}`} />
                      <div className={`absolute inset-0 rounded-full border border-slate-200/60 scale-[0.6] transition-transform duration-700 ${isActive ? 'scale-[0.7]' : ''}`} />

                      <div className="relative z-10 flex flex-col items-center">
                        <tab.icon className={`w-8 h-8 md:w-10 md:h-10 mb-3 transition-all duration-500 ${isActive ? `${tab.theme.accent}` : 'text-slate-400 group-hover:text-slate-700'}`} strokeWidth={isActive ? 2.2 : 1.8} />
                        <span className={`text-sm md:text-base font-black uppercase tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900'}`}>
                          {tab.id}
                        </span>
                        
                        <div className={`mt-3 flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-500 ${isActive ? `${tab.theme.badgeBg} shadow-xs font-black` : 'bg-slate-100 text-slate-400 border-slate-200 opacity-0 group-hover:opacity-100'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-current animate-pulse' : 'bg-slate-400'}`} />
                          <span className="text-[8px] font-black uppercase tracking-widest">
                            {isActive ? 'Active' : 'Select'}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Horizontal Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mt-16 z-20">
                {FOUNDATION_TABS.map((tab) => (
                  <button
                    key={`nav-${tab.id}`}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 border cursor-pointer
                      ${activeTabId === tab.id ? `${tab.theme.badgeBg} shadow-md` : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}
                    `}
                  >
                    <div className={`w-2 h-2 rounded-full ${activeTabId === tab.id ? 'bg-current animate-ping' : 'bg-slate-400'}`} />
                    {tab.id}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Magnetic Glassmorphism Content Panel */}
            <div className="lg:col-span-7 relative z-20">
              <MagneticGlassCard activeTab={activeTab} />
            </div>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-fluid {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-12px) translateX(4px) rotate(1.5deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }

        @keyframes fade-in-slide {
          0% { opacity: 0; transform: translateX(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-fade-in-slide {
          animation: fade-in-slide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(20px); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default CoreFoundations;
