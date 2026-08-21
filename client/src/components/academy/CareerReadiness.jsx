import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, BarChart2, ExternalLink, Award, Code2, ShieldCheck, Sparkles, Monitor, GraduationCap } from 'lucide-react';

/* ─── 3D PENCIL INFOGRAPHIC COURSES (TITLE CASE HEADERS & TEXT) ─── */
export const CareerReadiness = () => {
  const summaryColumns = [
    { num: '01', title: 'Fullstack Dev', desc: 'Fullstack Developer in 6 months with live MERN classes & projects.', color: 'text-[#D97706]', bg: 'bg-amber-50', border: 'border-amber-200/90' },
    { num: '02', title: 'AI & Python', desc: 'Master AI & Python with hands-on Machine Learning labs.', color: 'text-[#D97706]', bg: 'bg-amber-50', border: 'border-amber-200/90' },
    { num: '03', title: 'Cybersecurity', desc: 'Learn Cyber Security in 3 months & become job-ready.', color: 'text-[#0284C7]', bg: 'bg-sky-50', border: 'border-sky-200/90' },
    { num: '04', title: 'UI/UX Design', desc: 'Master Figma, Product Design & daily follow-up sessions.', color: 'text-[#0284C7]', bg: 'bg-sky-50', border: 'border-sky-200/90' },
    { num: '05', title: 'Kids Tech Camp', desc: 'Physical weekend classes for Grade 4–11 at Derartu Tower.', color: 'text-[#059669]', bg: 'bg-emerald-50', border: 'border-emerald-200/90' },
    { num: '06', title: 'Live Trainings', desc: 'Live group sessions, scholarships & paid internship placements.', color: 'text-[#059669]', bg: 'bg-emerald-50', border: 'border-emerald-200/90' },
  ];

  return (
    <section className="relative py-28 lg:py-44 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header */}
        <div className="text-left space-y-5 max-w-full relative">
          {/* Blueprint Dot Grid Overlay */}
          <div
            className="absolute -inset-4 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.25) 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Pill Capsule Badge + Cyan Horizontal Line Extension */}
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>Announcing WabiSkills Courses by</span>
              <a 
                href="https://wabiskills.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-[#0EA5E9] hover:text-cyan-600 underline font-bold underline-offset-4 transition-colors"
              >
                WabiSkills.com
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display leading-tight relative z-10 select-text cursor-text">
            Unlock Potential &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">Shape Tomorrow with WabiSkills</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl relative z-10 font-sans select-text cursor-text">
            Our mission is to help people find the best tech courses online &amp; physical camps to learn with experts anytime, anywhere — powered by WabiSkills (Yomtech Global's Educational Platform).
          </p>
        </div>

        {/* Scaled Vector Infographic: Central 3D Pencil + Ribbons */}
        <div className="relative max-w-[90rem] mx-auto flex flex-col items-center">
          
          <div className="w-full relative flex justify-center overflow-x-auto">
            <svg 
              className="w-full max-w-[1550px] h-auto min-w-[1100px] select-text cursor-text" 
              viewBox="0 0 1450 1095" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ userSelect: 'text' }}
            >
              <defs>
                {/* 3D Drop Shadow Filters */}
                <filter id="ribbonGlowShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#0f172a" floodOpacity="0.2" />
                </filter>

                <filter id="pencilBodyShadow" x="-30%" y="-10%" width="160%" height="120%">
                  <feDropShadow dx="10" dy="20" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.25" />
                </filter>

                {/* Pencil Gradients */}
                <linearGradient id="pencilYellowShaft" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="30%" stopColor="#FBBF24" />
                  <stop offset="70%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>

                <linearGradient id="metalCollarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#F1F5F9" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>

                <linearGradient id="redEraserGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="50%" stopColor="#F87171" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>

                {/* Vibrant High-Contrast Ribbon Gradients */}
                <linearGradient id="amberRibbonFront" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
                <linearGradient id="amberRibbonBack" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#9A3412" />
                </linearGradient>

                <linearGradient id="blueRibbonFront" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
                <linearGradient id="blueRibbonBack" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0369A1" />
                  <stop offset="100%" stopColor="#075985" />
                </linearGradient>

                <linearGradient id="greenRibbonFront" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="greenRibbonBack" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#064E3B" />
                </linearGradient>
              </defs>

              {/* Ground Shadow under Pencil Point */}
              <ellipse cx="725" cy="1080" rx="70" ry="14" fill="#0f172a" opacity="0.25" />

              {/* CENTRAL 3D PENCIL SHAFT */}
              <g id="CentralPencil3D" filter="url(#pencilBodyShadow)">
                {/* Red Eraser Cap */}
                <path d="M 675 60 C 675 20, 775 20, 775 60 L 775 110 L 675 110 Z" fill="url(#redEraserGrad)" />
                
                {/* Silver Metal Collar */}
                <rect x="675" y="110" width="100" height="40" fill="url(#metalCollarGrad)" />

                {/* Yellow Pencil Body Shaft */}
                <rect x="675" y="150" width="100" height="790" fill="url(#pencilYellowShaft)" />

                {/* 3D Vertical Specular Highlight Lines */}
                <line x1="695" y1="150" x2="695" y2="940" stroke="#FFFFFF" strokeWidth="3" opacity="0.45" />
                <line x1="735" y1="150" x2="735" y2="940" stroke="#92400E" strokeWidth="2.5" opacity="0.3" />

                {/* Wood Cone & Sharp Charcoal Pencil Tip */}
                <polygon points="675,940 775,940 725,1060" fill="#FEF08A" />
                <polygon points="712,1030 738,1030 725,1060" fill="#1E293B" />
              </g>

              {/* -------------------------------------------------------------
                  BAND 1: AMBER RIBBON (01 Fullstack Dev -> OVER PENCIL -> 02 AI & Python)
              ------------------------------------------------------------- */}
              <g id="AmberRibbonBand" filter="url(#ribbonGlowShadow)">
                {/* Ribbon 01 Left Banner */}
                <path d="M 80 180 L 675 180 L 675 270 L 80 270 L 130 225 Z" fill="url(#amberRibbonFront)" />

                {/* 3D Ribbon Loop Wrapping OVER Front of Pencil Shaft */}
                <path 
                  d="M 675 180 Q 840 180, 840 275 Q 840 365, 675 365 L 675 295 Q 745 295, 745 245 Q 745 195, 675 195 Z" 
                  fill="url(#amberRibbonBack)" 
                />
                
                <path 
                  d="M 675 210 Q 800 210, 800 275 Q 800 340, 675 340 L 675 280 Q 725 280, 725 240 Q 725 210, 675 210 Z" 
                  fill="url(#amberRibbonFront)" 
                />

                {/* Ribbon 02 Right Banner */}
                <path d="M 775 290 L 1370 290 L 1320 335 L 1370 380 L 775 380 Z" fill="url(#amberRibbonFront)" />

                {/* Banner 01 Text (Left) */}
                <text x="150" y="240" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>01</text>
                <line x1="220" y1="195" x2="220" y2="255" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="240" y="210" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Fullstack Development</text>
                <text x="240" y="235" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Become a Fullstack Developer in 6 months</text>
                <text x="240" y="255" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>with live MERN classes &amp; real projects</text>

                {/* Banner 02 Text (Right) */}
                <text x="815" y="320" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Artificial Intelligence</text>
                <text x="815" y="345" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Master AI &amp; Python with hands-on</text>
                <text x="815" y="365" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Machine Learning labs &amp; projects</text>
                <line x1="1235" y1="305" x2="1235" y2="365" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1255" y="350" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>02</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="260" r="44" fill="#FFFFFF" stroke="#EA580C" strokeWidth="6" />
                <g transform="translate(702, 237)">
                  <Code2 size={46} className="text-[#EA580C]" strokeWidth={2.8} />
                </g>
              </g>

              {/* -------------------------------------------------------------
                  BAND 2: BLUE RIBBON (03 Cybersecurity -> OVER PENCIL -> 04 UI/UX Design)
              ------------------------------------------------------------- */}
              <g id="BlueRibbonBand" filter="url(#ribbonGlowShadow)">
                {/* Ribbon 03 Left Banner */}
                <path d="M 80 460 L 675 460 L 675 550 L 80 550 L 130 505 Z" fill="url(#blueRibbonFront)" />

                {/* 3D Ribbon Loop Wrapping OVER Front of Pencil Shaft */}
                <path 
                  d="M 675 460 Q 840 460, 840 555 Q 840 645, 675 645 L 675 575 Q 745 575, 745 525 Q 745 475, 675 475 Z" 
                  fill="url(#blueRibbonBack)" 
                />
                
                <path 
                  d="M 675 490 Q 800 490, 800 555 Q 800 620, 675 620 L 675 560 Q 725 560, 725 520 Q 725 490, 675 490 Z" 
                  fill="url(#blueRibbonFront)" 
                />

                {/* Ribbon 04 Right Banner */}
                <path d="M 775 570 L 1370 570 L 1320 615 L 1370 660 L 775 660 Z" fill="url(#blueRibbonFront)" />

                {/* Banner 03 Text (Left) */}
                <text x="150" y="520" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>03</text>
                <line x1="220" y1="475" x2="220" y2="535" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="240" y="490" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Cybersecurity Training</text>
                <text x="240" y="515" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Learn Cyber Security in 3 months</text>
                <text x="240" y="535" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>&amp; become fully job-ready</text>

                {/* Banner 04 Text (Right) */}
                <text x="815" y="600" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>UI/UX Product Design</text>
                <text x="815" y="625" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Master Figma, Product Design</text>
                <text x="815" y="645" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>&amp; daily follow-up sessions</text>
                <line x1="1235" y1="585" x2="1235" y2="645" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1255" y="630" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>04</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="540" r="44" fill="#FFFFFF" stroke="#0284C7" strokeWidth="6" />
                <g transform="translate(702, 517)">
                  <ShieldCheck size={46} className="text-[#0284C7]" strokeWidth={2.8} />
                </g>
              </g>

              {/* -------------------------------------------------------------
                  BAND 3: GREEN RIBBON (05 Kids Tech Camp -> OVER PENCIL -> 06 Live Sessions)
              ------------------------------------------------------------- */}
              <g id="GreenRibbonBand" filter="url(#ribbonGlowShadow)">
                {/* Ribbon 05 Left Banner */}
                <path d="M 80 740 L 675 740 L 675 830 L 80 830 L 130 785 Z" fill="url(#greenRibbonFront)" />

                {/* 3D Ribbon Loop Wrapping OVER Front of Pencil Shaft */}
                <path 
                  d="M 675 740 Q 840 740, 840 835 Q 840 925, 675 925 L 675 855 Q 745 855, 745 805 Q 745 755, 675 755 Z" 
                  fill="url(#greenRibbonBack)" 
                />
                
                <path 
                  d="M 675 770 Q 800 770, 800 835 Q 800 900, 675 900 L 675 840 Q 725 840, 725 800 Q 725 770, 675 770 Z" 
                  fill="url(#greenRibbonFront)" 
                />

                {/* Ribbon 06 Right Banner */}
                <path d="M 775 850 L 1370 850 L 1320 895 L 1370 940 L 775 940 Z" fill="url(#greenRibbonFront)" />

                {/* Banner 05 Text (Left) */}
                <text x="150" y="800" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>05</text>
                <line x1="220" y1="755" x2="220" y2="815" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="240" y="770" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Kids Tech Physical Camp</text>
                <text x="240" y="795" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Weekend physical classes for</text>
                <text x="240" y="815" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Grade 4–11 at Derartu Tower</text>

                {/* Banner 06 Text (Right) */}
                <text x="815" y="880" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Live Sessions &amp; Internships</text>
                <text x="815" y="905" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>Live group sessions, scholarships</text>
                <text x="815" y="925" fill="#FFFFFF" fontSize="16" fontWeight="600" opacity="0.95" fontFamily="sans-serif" pointerEvents="auto" style={{ userSelect: 'text' }}>&amp; paid team placements</text>
                <line x1="1235" y1="865" x2="1235" y2="925" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1255" y="910" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="monospace" pointerEvents="auto" style={{ userSelect: 'text' }}>06</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="820" r="44" fill="#FFFFFF" stroke="#059669" strokeWidth="6" />
                <g transform="translate(702, 797)">
                  <GraduationCap size={46} className="text-[#059669]" strokeWidth={2.8} />
                </g>
              </g>

            </svg>
          </div>

          {/* Bottom 6 Course Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t-2 border-slate-200/80 mt-2 w-full select-text cursor-text">
            {summaryColumns.map((col) => (
              <div 
                key={col.num}
                className={`p-7 sm:p-9 rounded-[2.5rem] ${col.bg} border-4 ${col.border} space-y-3 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between select-text cursor-text`}
              >
                <div className={`text-5xl font-mono font-black ${col.color} select-text`}>
                  {col.num}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800 tracking-wide leading-tight select-text">
                  {col.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed select-text">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerReadiness;
