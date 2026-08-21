import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, BarChart2, ExternalLink, Award, Code2, ShieldCheck, Sparkles, Monitor, GraduationCap } from 'lucide-react';

export const CareerReadiness = () => {
  const summaryColumns = [
    { num: '01', title: 'FULLSTACK DEV', desc: 'Fullstack Developer in 6 months with live MERN classes & projects.', color: 'text-[#D97706]', bg: 'bg-amber-50', border: 'border-amber-200' },
    { num: '02', title: 'AI & PYTHON', desc: 'Master AI & Python with hands-on Machine Learning labs.', color: 'text-[#D97706]', bg: 'bg-amber-50', border: 'border-amber-200' },
    { num: '03', title: 'CYBERSECURITY', desc: 'Learn Cyber Security in 3 months & become job-ready.', color: 'text-[#0284C7]', bg: 'bg-sky-50', border: 'border-sky-200' },
    { num: '04', title: 'UI/UX DESIGN', desc: 'Master Figma, Product Design & daily follow-up sessions.', color: 'text-[#0284C7]', bg: 'bg-sky-50', border: 'border-sky-200' },
    { num: '05', title: 'KIDS TECH CAMP', desc: 'Physical weekend classes for Grade 4–11 at Derartu Tower.', color: 'text-[#059669]', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { num: '06', title: 'LIVE TRAININGS', desc: 'Live group sessions, scholarships & paid internship placements.', color: 'text-[#059669]', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  ];

  return (
    <section className="relative py-28 lg:py-44 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header with Official WabiSkills Content */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-md backdrop-blur-md">
            <Award className="w-4 h-4 text-[#0284C7]" />
            <span>ANNOUNCING WABISKILLS COURSES BY</span>
            <a 
              href="https://wabiskills.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-[#0284C7] hover:text-cyan-600 underline font-black underline-offset-4 transition-colors"
            >
              WABISKILLS.COM
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 font-display">
            Unlock Potential &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Shape Tomorrow with WabiSkills
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-semibold max-w-3xl mx-auto leading-relaxed font-sans">
            Our mission is to help people find the best tech courses online &amp; physical camps to learn with experts anytime, anywhere — powered by WabiSkills (Yomtech Global's Educational Platform).
          </p>
        </div>

        {/* Gigantic Scaled Vector Infographic: Central 3D Pencil + Exact WabiSkills Official Course Ribbons */}
        <div className="relative max-w-[95rem] mx-auto flex flex-col items-center">
          
          <div className="w-full relative flex justify-center overflow-x-auto">
            <svg 
              className="w-full max-w-[1450px] h-auto min-w-[1050px] select-none" 
              viewBox="0 0 1450 1200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
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

              {/* GIGANTIC CENTRAL 3D PENCIL SHAFT */}
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
                  BAND 1: AMBER RIBBON (01 FULLSTACK DEV -> OVER PENCIL -> 02 AI & PYTHON)
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
                <text x="150" y="240" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">01</text>
                <line x1="225" y1="195" x2="225" y2="255" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="250" y="215" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">FULLSTACK DEVELOPMENT</text>
                <text x="250" y="248" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Become a Fullstack Developer in 6 months with live MERN classes</text>

                {/* Banner 02 Text (Right) */}
                <text x="815" y="325" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">ARTIFICIAL INTELLIGENCE</text>
                <text x="815" y="358" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Master AI &amp; Python with hands-on Machine Learning labs</text>
                <line x1="1225" y1="305" x2="1225" y2="365" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1245" y="350" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">02</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="260" r="42" fill="#FFFFFF" stroke="#EA580C" strokeWidth="6" />
                <g transform="translate(704, 239)">
                  <Code2 size={42} className="text-[#EA580C]" strokeWidth={2.8} />
                </g>
              </g>

              {/* -------------------------------------------------------------
                  BAND 2: BLUE RIBBON (03 CYBERSECURITY -> OVER PENCIL -> 04 UI/UX DESIGN)
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
                <text x="150" y="520" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">03</text>
                <line x1="225" y1="475" x2="225" y2="535" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="250" y="495" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">CYBERSECURITY TRAINING</text>
                <text x="250" y="528" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Learn Cyber Security in 3 months &amp; become job-ready</text>

                {/* Banner 04 Text (Right) */}
                <text x="815" y="605" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">UI/UX PRODUCT DESIGN</text>
                <text x="815" y="638" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Master Figma, Product Design &amp; daily follow-up sessions</text>
                <line x1="1225" y1="585" x2="1225" y2="645" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1245" y="630" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">04</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="540" r="42" fill="#FFFFFF" stroke="#0284C7" strokeWidth="6" />
                <g transform="translate(704, 519)">
                  <ShieldCheck size={42} className="text-[#0284C7]" strokeWidth={2.8} />
                </g>
              </g>

              {/* -------------------------------------------------------------
                  BAND 3: GREEN RIBBON (05 KIDS TECH CAMP -> OVER PENCIL -> 06 LIVE SESSIONS)
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
                <text x="150" y="800" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">05</text>
                <line x1="225" y1="755" x2="225" y2="815" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="250" y="775" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">KIDS TECH PHYSICAL CAMP</text>
                <text x="250" y="808" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Weekend physical classes for Grade 4–11 at Derartu Tower</text>

                {/* Banner 06 Text (Right) */}
                <text x="815" y="885" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">LIVE SESSIONS &amp; INTERNSHIPS</text>
                <text x="815" y="918" fill="#FFFFFF" fontSize="17" fontWeight="700" opacity="0.95" fontFamily="sans-serif">Live group sessions, scholarships &amp; paid team placements</text>
                <line x1="1225" y1="865" x2="1225" y2="925" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                <text x="1245" y="910" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="monospace">06</text>

                {/* White Circle Icon Badge over Loop */}
                <circle cx="725" cy="820" r="42" fill="#FFFFFF" stroke="#059669" strokeWidth="6" />
                <g transform="translate(704, 799)">
                  <GraduationCap size={42} className="text-[#059669]" strokeWidth={2.8} />
                </g>
              </g>

            </svg>
          </div>

          {/* Bottom 6 Official WabiSkills Course Overview Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-16 border-t-4 border-slate-200 mt-20 w-full">
            {summaryColumns.map((col) => (
              <div 
                key={col.num}
                className={`p-6 rounded-3xl ${col.bg} border-4 ${col.border} space-y-2 text-center shadow-md hover:shadow-2xl transition-all hover:-translate-y-1.5`}
              >
                <div className={`text-4xl font-mono font-black ${col.color}`}>
                  {col.num}
                </div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  {col.title}
                </h4>
                <p className="text-xs text-slate-600 font-bold leading-relaxed">
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
