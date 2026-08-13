import React, { useState, useRef } from 'react';
import { 
  AlertCircle, CheckCircle2, ShieldAlert, ShieldCheck,
  TrendingDown, TrendingUp, X, Check, Lock, Unlock,
  Cpu, Users, Lightbulb, RefreshCw, ArrowRight, Sparkles, Scale
} from 'lucide-react';

const FluidWaterBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F4F9FF]">
    {/* Base Ethereal Gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e0f2fe] via-[#F4F9FF] to-[#f8fafc]" />
    
    {/* Animated Fluid Waves (Caustics effect) */}
    <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ filter: 'url(#fluid-filter-comparison)' }}>
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-r from-cyan-200/50 to-blue-200/50 animate-fluid-wave-1 rounded-full blur-[80px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-gradient-to-l from-emerald-100/50 to-cyan-200/50 animate-fluid-wave-2 rounded-full blur-[100px]" style={{ animationDelay: '-5s' }} />
    </div>

    {/* SVG Filter for Fluid Water Effect */}
    <svg className="hidden">
      <defs>
        <filter id="fluid-filter-comparison">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>

    {/* Subtle Architectural Dot Grid for depth */}
    <div 
      className="absolute inset-0 opacity-[0.4]" 
      style={{ 
        backgroundImage: 'radial-gradient(rgba(148,163,184,0.3) 1px, transparent 1px)', 
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)'
      }}
    />
  </div>
);

const TABS = [
  { id: 'HOLISTIC_MODEL', label: 'Holistic Model' },
  { id: 'COMPARISON_MATRIX', label: 'Comparison Matrix' },
  { id: 'STRATEGIC_OUTCOMES', label: 'Strategic Outcomes' }
];

export const WhyModelDifferent = () => {
  const [activeTab, setActiveTab] = useState('HOLISTIC_MODEL');
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Refs for 3D tracking
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  
  const [leftMousePos, setLeftMousePos] = useState({ x: 0, y: 0 });
  const [rightMousePos, setRightMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, ref, setPos) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-900 flex flex-col justify-center border-b border-slate-200/80">
      
      <FluidWaterBackground />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
          
          {/* Animated Pill Badge */}
          <div className="group relative inline-flex items-center justify-center mb-8 cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md transition-transform group-hover:scale-105 duration-300">
              <Scale className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300">
                Paradigm Comparison
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">
            Why Our Model <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 font-black relative inline-block">
              Is Different
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-cyan-200/60" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none"><path d="M2 7.00002C45 -1.99998 120 -1.99998 198 7.00002" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            An executive comparison highlighting the shift from transactional vendor dependency to our holistic, enduring digital capability model.
          </p>

          {/* Interactive Nav Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-full shadow-lg">
             {TABS.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden cursor-pointer
                   ${activeTab === tab.id 
                     ? 'text-white shadow-[0_4px_15px_rgba(6,182,212,0.3)] border-transparent' 
                     : 'text-slate-500 hover:text-slate-700 hover:bg-white/60 border-transparent'
                   }
                 `}
               >
                 {activeTab === tab.id && (
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100 z-0" />
                 )}
                 <span className="relative z-10">{tab.label}</span>
               </button>
             ))}
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[85rem] mx-auto items-stretch relative mt-8">
          
          {/* High-Visibility Vertical Divider Spine between Left and Right comparison cards */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 z-0 pointer-events-none rounded-full overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-rose-400/40 via-cyan-400/80 to-blue-500/40 blur-[2px]" />
             <div className="absolute inset-x-[1px] inset-y-0 bg-gradient-to-b from-rose-500 via-cyan-400 to-blue-600 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
          </div>

          {/* Floating "VS" Orb (Desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] items-center justify-center z-30 flex-col group cursor-default">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-cyan-400 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500" />
            <span className="text-[11px] font-black text-cyan-600 tracking-[0.2em] relative z-10">VS</span>
            
            {/* Connecting laser lines */}
            <div className="absolute top-1/2 left-full w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent -translate-y-1/2 shadow-[0_0_8px_#38bdf8]" />
            <div className="absolute top-1/2 right-full w-8 h-[2px] bg-gradient-to-l from-rose-400 to-transparent -translate-y-1/2 shadow-[0_0_8px_#f43f5e]" />
          </div>

          {/* ========================================= */}
          {/* LEFT CARD: TRADITIONAL APPROACH */}
          {/* ========================================= */}
          <div 
            ref={leftCardRef}
            onMouseMove={(e) => handleMouseMove(e, leftCardRef, setLeftMousePos)}
            onMouseEnter={() => setHoveredCard('traditional')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group/card relative rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border flex flex-col h-full transition-all duration-700 ease-out z-10 cursor-pointer
              ${hoveredCard === 'traditional' ? 'border-transparent shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)] z-20' : 'border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]'}
              ${hoveredCard === 'yomtech' ? 'scale-[0.98] opacity-70 blur-[1px]' : 'scale-100 opacity-100 blur-0'}
            `}
            style={{
              transform: hoveredCard === 'traditional' 
                ? `perspective(1000px) rotateX(${(leftMousePos.y - 300) / -40}deg) rotateY(${(leftMousePos.x - 300) / 40}deg)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            }}
          >
            {/* Dynamic Spotlight */}
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2.5rem] overflow-hidden"
              style={{ opacity: hoveredCard === 'traditional' ? 1 : 0 }}
            >
              <div 
                className="absolute w-[500px] h-[500px] rounded-full blur-[60px] transition-transform duration-75 ease-out"
                style={{
                  background: 'radial-gradient(circle, rgba(225,29,72,0.06) 0%, transparent 70%)',
                  transform: `translate(${leftMousePos.x - 250}px, ${leftMousePos.y - 250}px)`,
                }}
              />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-sm group-hover/card:scale-110 group-hover/card:-rotate-6 transition-all duration-500">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-1">Conventional Paradigm</span>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">Traditional Approach</h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                    <TrendingDown className="w-3.5 h-3.5" /> High Risk
                  </span>
                </div>

                {/* Rigid Step-by-Step Flow */}
                <div className="bg-white/90 rounded-2xl border border-slate-100 p-6 mb-8 relative shadow-sm group-hover/card:border-rose-100/50 transition-colors">
                  
                  {/* Connecting Track Line */}
                  <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-slate-100" />

                  <div className="space-y-6 relative">
                    <div className="flex items-center gap-5 group/step">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 text-[10px] font-black relative z-10 group-hover/step:border-slate-300 transition-colors">01</div>
                      <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3.5 group-hover/step:bg-white group-hover/step:shadow-sm transition-all">
                        <span className="text-sm font-bold text-slate-700">Technology Acquisition</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 group/step">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 text-[10px] font-black relative z-10 group-hover/step:border-slate-300 transition-colors">02</div>
                      <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3.5 group-hover/step:bg-white group-hover/step:shadow-sm transition-all">
                        <span className="text-sm font-bold text-slate-700">One-Off Implementation</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 group/step">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 shadow-sm flex items-center justify-center text-rose-500 text-[10px] font-black relative z-10 group-hover/step:bg-rose-500 group-hover/step:text-white transition-colors">03</div>
                      <div className="flex-1 bg-rose-50/50 border border-rose-100 rounded-xl px-5 py-3.5 group-hover/step:bg-rose-50 group-hover/step:border-rose-200 transition-all">
                        <span className="text-sm font-bold text-rose-700">Transactional Handover</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                  Focuses purely on one-off project deliverables without building internal organizational knowledge, team capability, or code longevity.
                </p>

                {/* Weaknesses List */}
                <ul className="space-y-4 mb-10 mt-auto">
                  {[
                    'Permanent Vendor Lock-In & Licensing Costs',
                    'Internal Knowledge Depletion Post-Launch',
                    'High Long-Term Maintenance Overhead'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium group-hover/card:text-slate-800 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                         <X className="w-3 h-3 text-rose-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom Result Bar */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3 text-rose-600">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em]">Result: Short-Term Output, High Dependency</span>
                </div>
            </div>
          </div>


          {/* ========================================= */}
          {/* RIGHT CARD: YOMTECH APPROACH */}
          {/* ========================================= */}
          <div 
            ref={rightCardRef}
            onMouseMove={(e) => handleMouseMove(e, rightCardRef, setRightMousePos)}
            onMouseEnter={() => setHoveredCard('yomtech')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group/card relative rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border flex flex-col h-full transition-all duration-700 ease-out z-10 cursor-pointer
              ${hoveredCard === 'yomtech' ? 'border-transparent shadow-[0_30px_80px_-15px_rgba(6,182,212,0.25)] z-20' : 'border-white shadow-[0_15px_40px_rgba(0,0,0,0.05)]'}
              ${hoveredCard === 'traditional' ? 'scale-[0.98] opacity-70 blur-[1px]' : 'scale-100 opacity-100 blur-0'}
            `}
            style={{
              transform: hoveredCard === 'yomtech' 
                ? `perspective(1000px) rotateX(${(rightMousePos.y - 300) / -40}deg) rotateY(${(rightMousePos.x - 300) / 40}deg)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            }}
          >
            {/* Dynamic Spotlight */}
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2.5rem] overflow-hidden"
              style={{ opacity: hoveredCard === 'yomtech' ? 1 : 0 }}
            >
              <div 
                className="absolute w-[600px] h-[600px] rounded-full blur-[70px] transition-transform duration-75 ease-out"
                style={{
                  background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
                  transform: `translate(${rightMousePos.x - 300}px, ${rightMousePos.y - 300}px)`,
                }}
              />
            </div>
            
            {/* Glowing Border Reveal on Hover */}
            <div 
              className={`absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] bg-gradient-to-br from-cyan-400 to-emerald-400 p-[2px]`}
              style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}
            >
              <div className="w-full h-full bg-transparent rounded-[calc(2.5rem-2px)]" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-500 shadow-sm group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 block mb-1">Sustainable Paradigm</span>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">YomTech Global Approach</h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-md shadow-cyan-500/20">
                    <TrendingUp className="w-3.5 h-3.5" /> Recommended
                  </span>
                </div>

                {/* Dynamic Content based on Active Tab */}
                {activeTab === 'HOLISTIC_MODEL' && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 p-6 md:p-8 mb-8 relative shadow-sm group-hover/card:border-cyan-300 transition-colors duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/50 to-transparent -translate-x-full group-hover/card:animate-data-stream-right z-0" />

                    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 relative z-10">
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold hover:bg-cyan-100 transition-colors cursor-default shadow-sm">
                        <Cpu className="w-4 h-4 text-cyan-500" /> Technology
                      </div>
                      <span className="text-slate-300 font-bold text-sm">+</span>
                      
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-50 border border-violet-100 text-violet-700 text-xs font-bold hover:bg-violet-100 transition-colors cursor-default shadow-sm">
                        <Users className="w-4 h-4 text-violet-500" /> Talent
                      </div>
                      <span className="text-slate-300 font-bold text-sm">+</span>
                      
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors cursor-default shadow-sm">
                        <Lightbulb className="w-4 h-4 text-blue-500" /> Strategy
                      </div>
                      <span className="text-slate-300 font-bold text-sm">+</span>
                      
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-default shadow-sm">
                        <RefreshCw className="w-4 h-4 text-emerald-500" /> Continuous Learning
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-4 flex items-center justify-center gap-3 relative z-10 shadow-lg shadow-cyan-500/20 group-hover/card:scale-[1.02] transition-transform duration-500">
                      <ArrowRight className="w-5 h-5 text-white animate-pulse" />
                      <span className="text-sm font-black tracking-[0.15em] text-white uppercase">
                        Long-Term Digital Capability
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'COMPARISON_MATRIX' && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 p-6 md:p-8 mb-8 relative shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 space-y-1">
                      <span className="text-[10px] font-black text-cyan-600 uppercase block tracking-wider">In-House Mastery</span>
                      <p className="text-xs font-semibold text-slate-700">Internal teams learn as code is architected, eliminating vendor reliance.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                      <span className="text-[10px] font-black text-emerald-600 uppercase block tracking-wider">Enduring Architecture</span>
                      <p className="text-xs font-semibold text-slate-700">Clean, documented codebases built with open standard architectures.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'STRATEGIC_OUTCOMES' && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 p-6 md:p-8 mb-8 relative shadow-sm space-y-3">
                    <div className="flex items-center gap-3 text-xs font-black text-cyan-700 p-3 rounded-xl bg-cyan-50 border border-cyan-100">
                      <Sparkles className="w-4 h-4 text-cyan-500" />
                      <span>100% Technical Sovereignty & In-House IP Control</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-black text-emerald-700 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Sustainable High-Performance Engineering Culture</span>
                    </div>
                  </div>
                )}

                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                  We combine enterprise software engineering with hands-on talent cultivation, ensuring organizations gain enduring digital independence and modern technical excellence.
                </p>

                {/* Strengths List */}
                <ul className="space-y-4 mb-10 mt-auto">
                  {[
                    'Builds In-House Engineering Competency',
                    'Seamless Knowledge Transfer & Ownership',
                    'Scalable, Sustainable Innovation Architecture'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-bold group-hover/card:text-slate-900 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom Result Bar */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                  <Unlock className="w-4 h-4 text-cyan-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Result: Sustainable Innovation & In-House Capability
                  </span>
                </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fluid-wave-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(3%, 3%) scale(1.05) rotate(3deg); }
          66% { transform: translate(-2%, 2%) scale(0.95) rotate(-2deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .animate-fluid-wave-1 {
          animation: fluid-wave-1 25s ease-in-out infinite;
        }

        @keyframes fluid-wave-2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-3%, -2%) scale(0.92) rotate(-3deg); }
          66% { transform: translate(2%, -1%) scale(1.08) rotate(2deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .animate-fluid-wave-2 {
          animation: fluid-wave-2 30s ease-in-out infinite;
        }

        @keyframes data-stream-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-data-stream-right {
          animation: data-stream-right 2s linear infinite;
        }
      `}} />
    </section>
  );
};

export default WhyModelDifferent;
