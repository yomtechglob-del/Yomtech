import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness, GraduationCap, HeartHandshake, Layers, Cpu, ChevronRight,
  Search, Settings, Coins, Users, Sparkles, HandCoins
} from 'lucide-react';
import { AboutHeroBackground } from '../common/AboutHeroBackground';

import wabiskillsLogo from '../../assets/academy/product/wabiskills.jpg';
import wabijobsLogo from '../../assets/academy/product/wabijobs.jpg';
import yomnexLogo from '../../assets/academy/product/yomnex hoiziontal-04.png';
import logoImg from '../../assets/logos/logo.png';

// 5 Orbital Product Pins
const PINS_DATA = [
  {
    id: 'wabiskills',
    name: 'WabiSkills',
    badgeLabel: 'WABI SKILLS',
    logo: wabiskillsLogo,
    fallbackIcon: Search,
    color: '#FFA500', // Vibrant Orange
    colorGlow: 'rgba(255, 165, 0, 0.65)',
    angle: -120, // 12 o'clock area
    link: 'https://wabiskills.com/'
  },
  {
    id: 'wabijob',
    name: 'WabiJob',
    badgeLabel: 'WABI JOB',
    logo: wabijobsLogo,
    fallbackIcon: Settings,
    color: '#10B981', // Neon Green
    colorGlow: 'rgba(16, 185, 129, 0.65)',
    angle: -40,
    link: '/services'
  },
  {
    id: 'mari',
    name: 'Mari',
    badgeLabel: 'MARI',
    monogram: 'M',
    fallbackIcon: Coins,
    color: '#EF4444', // Red
    colorGlow: 'rgba(239, 68, 68, 0.65)',
    angle: 40,
    link: '/services'
  },
  {
    id: 'yomnex',
    name: 'Yomnex',
    badgeLabel: 'YOMI',
    logo: yomnexLogo,
    fallbackIcon: Users,
    color: '#00E5FF', // Electric Blue
    colorGlow: 'rgba(0, 229, 255, 0.65)',
    angle: 100,
    link: '/services'
  },
  {
    id: 'wabix',
    name: 'Wabix',
    badgeLabel: 'WABIX',
    monogram: 'W',
    fallbackIcon: Sparkles,
    color: '#A855F7', // Purple
    colorGlow: 'rgba(168, 85, 247, 0.65)',
    angle: 160,
    link: '/services'
  }
];

export const AcademyRadialHero = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#02050E] text-white py-12 lg:py-16 min-h-[850px] flex flex-col justify-center font-sans border-b border-cyan-400/20">

      {/* Services Background Theme */}
      <AboutHeroBackground />

      {/* Dynamic Ambient Radial Flares */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[#00E5FF]/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#FFA500]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* =========================================================
              LEFT COLUMN: DYNAMIC & HIGHLY ANIMATED ORBIT HUB
          ========================================================= */}
          <div className="lg:col-span-7 flex justify-center relative py-6">

            <div
              className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] flex items-center justify-center group/hub"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              {/* 1. Outer Fine Dash Orbit Ring (Rotating Slow Clockwise) */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-400/30 border-dashed pointer-events-none animate-[spin_55s_linear_infinite]"
              />

              {/* 2. Inner Neon Cyan Accent Ring (Rotating Counter-Clockwise) */}
              <div
                className="absolute inset-14 sm:inset-16 rounded-full border-2 border-transparent border-t-[#00E5FF] border-b-[#00E5FF]/60 pointer-events-none animate-[spin_20s_linear_infinite_reverse]"
                style={{ filter: 'drop-shadow(0 0 10px #00E5FF)' }}
              />

              {/* =========================================================
                  CONTINUOUSLY ROTATING ORBIT CONTAINER (Spin 35s)
              ========================================================= */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                style={{
                  animation: 'spin 35s linear infinite',
                  animationPlayState: (isPaused || hoveredId) ? 'paused' : 'running'
                }}
              >
                {/* Multi-Color Gradient Orbit Line Path */}
                <div
                  className="absolute inset-6 sm:inset-8 rounded-full border-2 border-transparent pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #FFA500 0%, #10B981 25%, #EF4444 50%, #00E5FF 70%, #A855F7 85%, #0ED3DD 100%) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                    filter: 'drop-shadow(0 0 16px rgba(0, 229, 255, 0.6))'
                  }}
                />

                {/* 5 ROTATING TEARDROP LOCATION PIN ELEMENTS */}
                {PINS_DATA.map((pin) => {
                  const isActive = hoveredId === pin.id;
                  const IconComp = pin.fallbackIcon;

                  // Radius ~ 205px
                  const rad = (pin.angle * Math.PI) / 180;
                  const r = 205;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;

                  // Pointer tail angle pointing towards center (0,0)
                  const tailRotation = pin.angle + 90;

                  return (
                    <div
                      key={`rotating-pin-${pin.id}`}
                      onMouseEnter={() => setHoveredId(pin.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="absolute z-30 cursor-pointer group/pin"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                    >
                      {/* Counter-rotating Wrapper to keep logo upright during 360° orbit rotation */}
                      <div
                        style={{
                          animation: 'spin 35s linear infinite reverse',
                          animationPlayState: (isPaused || hoveredId) ? 'paused' : 'running'
                        }}
                        className="relative flex items-center justify-center"
                      >
                        {/* Teardrop Pointer Tail */}
                        <div
                          className="absolute w-4 h-4 rotate-45 transition-all duration-300 pointer-events-none opacity-90"
                          style={{
                            backgroundColor: pin.color,
                            boxShadow: `0 0 15px ${pin.color}`,
                            transform: `rotate(${tailRotation}deg) translateY(16px)`
                          }}
                        />

                        {/* Location Pin Head Circle — SHOW ONLY LOGO WITH ANIMATED PULSE */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${isActive ? 'scale-135 z-40 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]' : 'hover:scale-115 drop-shadow-lg'
                            }`}
                        >
                          {/* SHOW ONLY THE CLEAN LOGO / ICON */}
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-0.5 shadow-xl bg-[#02050E]/90 backdrop-blur-md border border-white/30">
                            {pin.logo ? (
                              <img
                                src={pin.logo}
                                alt={pin.name}
                                className={`rounded-full transition-all ${pin.id === 'yomnex'
                                    ? 'w-[75%] h-[75%] object-contain p-0.5 bg-white/95 scale-80'
                                    : 'w-full h-full object-cover'
                                  }`}
                              />
                            ) : pin.monogram ? (
                              <span className="text-2xl font-black font-display text-white">{pin.monogram}</span>
                            ) : (
                              <IconComp className="w-7 h-7 text-white group-hover/pin:scale-110 transition-transform" strokeWidth={2} />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}

                {/* Intermediate Small Glowing Orbit Dots */}
                {[-60, 0, 60, 120, 180, 240].map((midAngle, i) => {
                  const rad = (midAngle * Math.PI) / 180;
                  const x = Math.cos(rad) * 205;
                  const y = Math.sin(rad) * 205;
                  return (
                    <div
                      key={`orbit-dot-${i}`}
                      className="absolute w-3 h-3 rounded-full bg-white border-2 border-cyan-400 shadow-[0_0_12px_#00E5FF] pointer-events-none animate-ping"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animationDuration: `${2 + i * 0.5}s`
                      }}
                    />
                  );
                })}

              </div>

              {/* ===================================================
                  STILL CENTRAL CORE CIRCLE (With Pulsing Ripple Aura)
              =================================================== */}
              {/* Pulsing Ripple Aura Ring 1 */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-16 rounded-full border-2 border-[#00E5FF]/60 pointer-events-none"
              />

              {/* Double Inner Cyan Rings around Core */}
              <div className="absolute inset-20 sm:inset-24 rounded-full border-2 border-[#00E5FF]/50 pointer-events-none shadow-[0_0_25px_rgba(0,229,255,0.3)]" />
              <div className="absolute inset-24 sm:inset-28 rounded-full border border-[#00E5FF]/35 pointer-events-none" />

              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-b from-[#091426] via-[#040A14] to-[#02050B] border-3 border-[#00E5FF]/80 flex flex-col items-center justify-center p-6 text-center shadow-[0_0_60px_rgba(0,229,255,0.5)] relative z-20 overflow-hidden"
              >
                {/* Core Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/30 via-transparent to-transparent pointer-events-none" />

                {/* Yomtech Emblem */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 mb-2 rounded-xl p-1.5 bg-[#030914] border border-[#00E5FF]/50 flex items-center justify-center shadow-md">
                  <img src={logoImg} alt="Yomtech Emblem" className="w-full h-full object-contain" />
                </div>

                <h2 className="text-xl sm:text-2.5xl font-black uppercase tracking-tight text-white font-display leading-tight mt-0.5">
                  OUR
                </h2>
                <h2 className="text-xl sm:text-2.5xl font-black uppercase tracking-tight text-white font-display leading-tight">
                  PRODUCT
                </h2>

                {/* 5 Bottom Indicator Dots */}
                <div className="flex items-center gap-1.5 mt-3">
                  {PINS_DATA.map((prod) => {
                    const isActive = hoveredId === prod.id;
                    return (
                      <div
                        key={`core-dot-${prod.id}`}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? prod.color : '#00E5FF',
                          opacity: isActive ? 1 : 0.35,
                          scale: isActive ? 1.5 : 1,
                          boxShadow: isActive ? `0 0 12px ${prod.color}` : 'none'
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>

            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Glass Background Product Cards
          ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
            {PINS_DATA.map((prod, index) => {
              const isActive = hoveredId === prod.id;

              return (
                <motion.a
                  key={`card-${prod.id}`}
                  href={prod.link}
                  target={prod.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredId(prod.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 cursor-pointer relative overflow-hidden group/card bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-[#0ED3DD] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(14,211,221,0.3)]"
                  style={{
                    background: isActive ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                    borderColor: isActive ? prod.color : 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Left: Product Name Text */}
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-xl sm:text-2.5xl font-black font-display tracking-tight transition-colors"
                      style={{ color: prod.color }}
                    >
                      {prod.name}
                    </h3>
                  </div>

                  {/* Right: Glass Circular Chevron Arrow Button > */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 shrink-0 group-hover/card:scale-110 bg-white/10 backdrop-blur-md"
                    style={{
                      borderColor: isActive ? prod.color : 'rgba(255, 255, 255, 0.3)',
                      color: prod.color,
                      background: isActive ? prod.color : 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <ChevronRight
                      size={22}
                      style={{ color: isActive ? '#000000' : prod.color }}
                      className="group-hover/card:translate-x-0.5 transition-transform"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};

export default AcademyRadialHero;
