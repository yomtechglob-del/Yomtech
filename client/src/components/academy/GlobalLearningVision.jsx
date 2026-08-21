import React from 'react';
import { motion } from 'framer-motion';
import { Users2, BookOpen, Cpu, TrendingUp } from 'lucide-react';
import logoEmblem from '../../assets/logos/logo.png';

/* ─── 4-STEP 3D PENCIL INFOGRAPHIC LAYOUT (WATERMARK LOGO IN RIGHT BOTTOM CORNER) ─── */
const CONNECTIONS = [
  { 
    id: '01',
    step: '01',
    optionNum: 'Option 01',
    title: 'People', 
    subtitle: 'Global Community',
    desc: 'Connecting ambitious learners across global technology communities and developer networks.', 
    icon: Users2,
    topBorder: 'border-t-4 border-[#F97316]',
    numberColor: 'text-[#F97316]',
    badgeBg: 'bg-orange-50 text-[#EA580C] border-orange-200/60',
    iconBg: 'bg-orange-50 border-orange-200/80 text-[#F97316]',
    arrowBg: 'bg-[#F97316]',
  },
  { 
    id: '02',
    step: '02',
    optionNum: 'Option 02',
    title: 'Knowledge', 
    subtitle: 'Democratized Excellence',
    desc: 'Democratizing production software engineering education, system design & elite architecture practices.', 
    icon: BookOpen,
    topBorder: 'border-t-4 border-[#0EA5E9]',
    numberColor: 'text-[#0EA5E9]',
    badgeBg: 'bg-sky-50 text-[#0284C7] border-sky-200/60',
    iconBg: 'bg-sky-50 border-sky-200/80 text-[#0EA5E9]',
    arrowBg: 'bg-[#0EA5E9]',
  },
  { 
    id: '03',
    step: '03',
    optionNum: 'Option 03',
    title: 'Technology', 
    subtitle: 'Modern Architecture',
    desc: 'Mastering cutting-edge fullstack web, cloud microservices, LLM artificial intelligence & data architecture.', 
    icon: Cpu,
    topBorder: 'border-t-4 border-[#06B6D4]',
    numberColor: 'text-[#06B6D4]',
    badgeBg: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60',
    iconBg: 'bg-cyan-50 border-cyan-200/80 text-[#06B6D4]',
    arrowBg: 'bg-[#06B6D4]',
  },
  { 
    id: '04',
    step: '04',
    optionNum: 'Option 04',
    title: 'Opportunity', 
    subtitle: 'Career Autonomy',
    desc: 'Empowering software craftsmanship, high-impact career progression & remote engineering autonomy without limits.', 
    icon: TrendingUp,
    topBorder: 'border-t-4 border-[#F59E0B]',
    numberColor: 'text-[#D97706]',
    badgeBg: 'bg-amber-50 text-[#D97706] border-amber-200/60',
    iconBg: 'bg-amber-50 border-amber-200/80 text-[#D97706]',
    arrowBg: 'bg-[#F59E0B]',
  }
];

export const GlobalLearningVision = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-36 bg-[#F4F8FC] overflow-hidden font-sans selection:bg-indigo-500/20 selection:text-indigo-900 border-b border-slate-200/80">
      
      {/* Precision Blueprint Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F6FC] via-[#F4F8FC] to-[#F0F6FC]" />
        
        {/* Cyan Dot Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.45]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0EA5E9 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-300/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-300/15 blur-[140px]" />
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-20">
        
        {/* Section Header */}
        <div className="text-left space-y-5 max-w-full relative">
          <div className="flex items-center gap-0 w-full relative z-10">
            <div className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full bg-white/90 border-2 border-[#0EA5E9] text-[#0EA5E9] text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
              <span>WabiSkills Inclusive Vision</span>
              <span className="text-[#0EA5E9] font-bold text-xs">◆</span>
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8]/60 to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-tight relative z-10">
            WabiSkills Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-sky-500">Without Borders</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl relative z-10 font-sans">
            At WabiSkills, we make quality tech education accessible, practical, and interactive. We offer 50% scholarships for all college students and full scholarships because talent has no limits.
          </p>
        </div>

        {/* 4-STEP 3D PENCIL INFOGRAPHIC TIMELINE LAYOUT */}
        <div className="relative max-w-[90rem] mx-auto py-8">
          
          {/* Central 3D Wooden Pencil Vector Spine */}
          <div className="hidden lg:flex flex-col items-center absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            {/* Pencil Shaft with 3D Wood Gradients & Facets */}
            <div className="w-10 sm:w-11 flex-1 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] rounded-t-full shadow-2xl relative overflow-hidden border-x border-amber-600/40">
              <div className="absolute inset-0 flex justify-between px-2 opacity-30">
                <div className="w-1 h-full bg-amber-950/40" />
                <div className="w-1 h-full bg-amber-100/50" />
                <div className="w-1 h-full bg-amber-950/40" />
              </div>
            </div>

            {/* Sharpened Wooden Cone Tip */}
            <div 
              className="w-10 sm:w-11 h-14 bg-[#E5D3B3] shadow-md relative overflow-hidden shrink-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            >
              {/* Pencil Lead Graphite Point at Tip */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-5 bg-[#1E293B]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </div>
          </div>

          <div className="space-y-12 lg:space-y-16 relative z-10">
            {CONNECTIONS.map((c, idx) => {
              const IconComp = c.icon;
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Plate */}
                  <div className="w-full lg:w-[calc(50%-3rem)] group">
                    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.07)] hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between space-y-4 hover:-translate-y-1.5 border border-slate-100 ${c.topBorder} overflow-hidden`}>
                      
                      {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                      <div className="absolute right-2 bottom-2 opacity-[0.18] pointer-events-none z-0">
                        <img src={logoEmblem} alt="" className="w-28 sm:w-36 h-28 sm:h-36 object-contain" />
                      </div>

                      {/* Top Row: Large Step Number + Subtitle Pill Badge + Top Right Icon */}
                      <div className="flex items-start justify-between gap-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <span className={`text-3xl sm:text-4xl font-black font-mono ${c.numberColor} leading-none`}>
                            {c.step}
                          </span>
                          <span className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border ${c.badgeBg}`}>
                            {c.subtitle}
                          </span>
                        </div>

                        {/* Top-Right Icon Box */}
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${c.iconBg} group-hover:scale-110 transition-transform`}>
                          <IconComp size={20} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Middle Title & Description */}
                      <div className="space-y-2 text-left pt-2 relative z-10">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight group-hover:text-[#0284C7] transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                          {c.desc}
                        </p>
                      </div>

                      {/* Bottom Arrow Pointer Tab */}
                      <div className="pt-2 flex justify-start relative z-10">
                        <div 
                          className={`px-3.5 py-1.5 ${c.arrowBg} text-white font-mono font-bold text-xs shadow-xs rounded-sm flex items-center gap-1 -ml-6 -mb-6 rounded-r-md`}
                          style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                        >
                          <span>◆ {c.optionNum}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty Grid Space for 3D Pencil Balance */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalLearningVision;
