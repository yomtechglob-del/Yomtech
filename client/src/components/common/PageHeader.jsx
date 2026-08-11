import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';

export const PageHeader = ({ title, highlight, subtitle, badge, breadcrumbs, children }) => {
  return (
    <div className="relative pt-52 sm:pt-60 md:pt-64 pb-28 md:pb-36 overflow-hidden bg-gradient-to-br from-[#0284C7] via-[#0072B8] to-[#1DA1F2] text-white">


      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 relative z-10 text-center">
        {/* Advanced Glassmorphic Breadcrumb Bar */}
        {breadcrumbs && (
          <div className="flex justify-center mb-6">
            <nav className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 shadow-lg text-xs font-extrabold text-white">
              <Link to="/" className="text-white/80 hover:text-cyan-200 transition-colors whitespace-nowrap">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.name}>
                  <ChevronRight size={14} className="text-cyan-300 shrink-0" />
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-black border border-white/30 shadow-xs whitespace-nowrap">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link to={crumb.path} className="text-white/80 hover:text-cyan-200 transition-colors whitespace-nowrap">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}

        {/* Advanced Glassmorphic Badge Pill */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3.5 px-8 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-[#0ED3DD]/50 text-[#0ED3DD] text-xs font-black tracking-widest uppercase mb-6 shadow-[0_6px_25px_rgba(14,211,221,0.25)] hover:border-cyan-300 transition-all"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-[#0ED3DD]/20 border border-[#0ED3DD]/50 flex items-center justify-center shrink-0">
              <Sparkles size={13} className="animate-pulse text-[#0ED3DD]" />
            </div>
            <span className="whitespace-nowrap">{badge}</span>
          </motion.div>
        )}

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-6"
        >
          {title} {highlight && <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-[#0ED3DD] bg-clip-text text-transparent drop-shadow-md">{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};
