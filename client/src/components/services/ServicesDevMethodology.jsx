import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Puzzle, Lightbulb, TrendingUp, Presentation, 
  Award, ShieldCheck, Rocket, Users, Target, Sparkles 
} from 'lucide-react';

const DECK_PAIRS = [
  {
    left: {
      num: '01',
      title: 'Introduction',
      desc: 'Who you are and what your company stands for.',
      icon: Handshake,
    },
    right: {
      num: '02',
      title: 'Problem',
      desc: 'The real-world issue you\'re solving.',
      icon: Puzzle,
    },
  },
  {
    left: {
      num: '03',
      title: 'Solution',
      desc: 'How your product uniquely fixes the problem.',
      icon: Lightbulb,
    },
    right: {
      num: '04',
      title: 'Market',
      desc: 'Size, growth, and your ideal customer.',
      icon: TrendingUp,
    },
  },
  {
    left: {
      num: '05',
      title: 'Business model',
      desc: 'How you make money and scale.',
      icon: Presentation,
    },
    right: {
      num: '06',
      title: 'Traction',
      desc: 'Key milestones, users, or revenue to date.',
      icon: Award,
    },
  },
  {
    left: {
      num: '07',
      title: 'Competition',
      desc: 'Who else is in the space, and your edge.',
      icon: ShieldCheck,
    },
    right: {
      num: '08',
      title: 'Financials',
      desc: 'High-level revenue, costs, and projections.',
      icon: Rocket,
    },
  },
  {
    left: {
      num: '09',
      title: 'Team',
      desc: 'The people building the vision.',
      icon: Users,
    },
    right: {
      num: '10',
      title: 'Ask',
      desc: 'How much funding you need and why.',
      icon: Target,
    },
  },
];

const InterlockingPairRow = ({ left, right, idx }) => {
  const LeftIcon = left.icon;
  const RightIcon = right.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className="relative w-full my-8 sm:my-10 group transition-all duration-300 hover:scale-[1.01]"
    >
      {/* ─── DESKTOP SVG PUZZLE INTERLOCKING JOIN (md and above) ─── */}
      <div className="hidden md:block relative w-full aspect-[600/300] min-h-[340px] drop-shadow-2xl">
        <svg
          viewBox="0 0 600 300"
          className="w-full h-full overflow-visible pointer-events-none block"
          preserveAspectRatio="none"
        >
          {/* Left Card - Deep Blue #004b75 */}
          <path
            d="M 36,0 L 285,0 C 315,0 332,20 332,54 L 332,74 C 332,114 308,132 285,140 C 262,148 238,166 238,206 L 238,226 C 238,260 255,300 285,300 L 36,300 C 16,300 0,280 0,252 L 0,48 C 0,20 16,0 36,0 Z"
            fill="#004b75"
          />

          {/* Right Card - Vibrant Orange #ea580c */}
          <path
            d="M 285,0 L 564,0 C 584,0 600,20 600,48 L 600,252 C 600,280 584,300 564,300 L 285,300 C 255,300 238,260 238,226 L 238,206 C 238,166 262,148 285,140 C 308,132 332,114 332,74 L 332,54 C 332,20 315,0 285,0 Z"
            fill="#ea580c"
          />
        </svg>

        {/* Desktop HTML Content Layer */}
        <div className="absolute inset-0 grid grid-cols-2 p-12 lg:p-14 pointer-events-auto">
          {/* LEFT CARD CONTENT */}
          <div className="relative flex flex-col justify-between pr-20 lg:pr-28 text-left space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                <LeftIcon size={38} strokeWidth={1.8} />
              </div>

              {/* White Number 01 / 03 / 05 / 07 / 09 on Blue Puzzle Tab */}
              <span className="text-white font-black text-6xl lg:text-7xl font-display tracking-tight absolute right-[-32px] lg:right-[-40px] top-2 z-20 select-none">
                {left.num}
              </span>
            </div>

            <div className="space-y-3 z-10">
              <h3 className="text-4xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                {left.title}
              </h3>
              <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed font-sans">
                {left.desc}
              </p>
            </div>
          </div>

          {/* RIGHT CARD CONTENT */}
          <div className="relative flex flex-col justify-between pl-20 lg:pl-28 text-left space-y-6">
            <div className="flex items-center justify-between">
              {/* White Number 02 / 04 / 06 / 08 / 10 on Orange Puzzle Tab */}
              <span className="text-white font-black text-6xl lg:text-7xl font-display tracking-tight absolute left-[-32px] lg:left-[-40px] bottom-2 z-20 select-none">
                {right.num}
              </span>

              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform ml-auto">
                <RightIcon size={38} strokeWidth={1.8} />
              </div>
            </div>

            <div className="space-y-3 z-10">
              <h3 className="text-4xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                {right.title}
              </h3>
              <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed font-sans">
                {right.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE RESPONSIVE STACKED LAYOUT (below md) ─── */}
      <div className="md:hidden flex flex-col space-y-6 rounded-3xl overflow-hidden shadow-2xl">
        {/* Mobile Left Card */}
        <div className="bg-[#004b75] text-white p-10 sm:p-12 rounded-3xl space-y-6 text-left relative min-h-[280px]">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <LeftIcon size={34} />
            </div>
            <span className="text-white font-black text-6xl font-display">{left.num}</span>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl font-black text-white font-display">{left.title}</h3>
            <p className="text-lg text-white/90 font-medium leading-relaxed mt-3">{left.desc}</p>
          </div>
        </div>

        {/* Mobile Right Card */}
        <div className="bg-[#ea580c] text-white p-10 sm:p-12 rounded-3xl space-y-6 text-left relative min-h-[280px]">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <RightIcon size={34} />
            </div>
            <span className="text-white font-black text-6xl font-display">{right.num}</span>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl font-black text-white font-display">{right.title}</h3>
            <p className="text-lg text-white/90 font-medium leading-relaxed mt-3">{right.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesDevMethodology = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#E3F2FD] overflow-hidden font-sans border-b border-slate-200/80">
      
      {/* Background Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0284c7 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* Deck Title Header with Connected Horizontal Accent Line */}
        <div className="text-left space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[3.5px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_10px_rgba(14,211,221,0.6)]" />
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>INVESTOR PITCH DECK & METHODOLOGY</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight font-display">
            Key slides
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-700 font-sans tracking-tight">
            every investor pitch deck needs
          </p>
        </div>

        {/* Interlocking 2-Column Deck Grid (Matching Screenshot 2) */}
        <div className="max-w-7xl mx-auto space-y-5">
          {DECK_PAIRS.map((pair, idx) => (
            <InterlockingPairRow
              key={pair.left.num}
              left={pair.left}
              right={pair.right}
              idx={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesDevMethodology;
