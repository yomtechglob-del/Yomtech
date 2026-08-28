import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AboutHeroBackground } from './AboutHeroBackground';

export const PageHeader = ({ title, highlight, subtitle, badge, breadcrumbs, children }) => {
  return (
    <div className="relative pt-28 sm:pt-40 md:pt-48 pb-16 md:pb-32 overflow-hidden hero-cyan-gradient text-white border-b border-cyan-400/30">
      
      {/* Pristine Executive Hero Background */}
      <AboutHeroBackground />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-12 md:px-16 relative z-10 text-center">
        
        {/* Advanced Glassmorphic Breadcrumb Bar */}
        {breadcrumbs && (
          <div className="flex justify-center mb-5 sm:mb-6 max-w-full">
            <nav className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-2xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)] text-xs font-black text-white hover:border-cyan-300/60 transition-all max-w-full">
              <Link to="/" className="text-white/90 hover:text-cyan-200 transition-colors whitespace-nowrap">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.name}>
                  <ChevronRight size={13} className="text-cyan-300 shrink-0" />
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-white/25 text-white font-black border border-white/40 shadow-sm whitespace-nowrap">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link to={crumb.path} className="text-white/90 hover:text-cyan-200 transition-colors whitespace-nowrap">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}

        {/* Executive Glassmorphic Badge Pill */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-white/15 backdrop-blur-2xl border border-[#0ED3DD]/60 text-[#0ED3DD] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-5 sm:mb-6 shadow-[0_8px_30px_rgba(14,211,221,0.3)] hover:border-cyan-200 transition-all max-w-full"
          >
            <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#0ED3DD]/25 border border-[#0ED3DD]/60 flex items-center justify-center shrink-0">
              <Sparkles size={12} className="animate-pulse text-[#0ED3DD]" />
            </div>
            <span className="font-black tracking-wider text-white text-[10px] sm:text-xs">{badge}</span>
          </motion.div>
        )}

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white mb-4 sm:mb-6 leading-tight"
        >
          {title} {highlight && <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-[#0ED3DD] bg-clip-text text-transparent drop-shadow-md">{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Optional Custom Header Children */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};
