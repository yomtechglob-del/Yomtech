import React from 'react';
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

export const AboutHeroBackground = () => {
  return (
    <>
      {/* Subtle Flowing Texture Image Layer 1 (Low opacity for high text contrast) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <img 
          src={ermiTwoImg} 
          alt="Flowing Background Layer 1" 
          className="w-full h-full object-cover object-left-top origin-top-left opacity-20 mix-blend-overlay animate-river-flow-1 filter blur-[1px] border-0"
        />
      </div>

      {/* Subtle Flowing Texture Image Layer 2 */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden z-0">
        <img 
          src={erminOneImg} 
          alt="Flowing Background Layer 2 Right" 
          className="w-full h-full object-cover object-right-top origin-top-right opacity-25 mix-blend-soft-light animate-river-flow-2 filter blur-[1px] border-0"
        />
      </div>

      {/* Deep Executive Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#0077B6]/75 to-[#00B4D8]/85 pointer-events-none z-0" />

      {/* Glowing Luminous Ambient Flares */}
      <div className="absolute -top-40 left-[-10%] w-[850px] h-[650px] bg-gradient-to-r from-[#48cae4]/30 via-[#0077b6]/20 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 right-[-5%] w-[750px] h-[750px] bg-[#90e0ef]/20 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-[550px] h-[350px] bg-[#00b4d8]/25 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Full-Hero Height Glowing Curved SVG Path Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
        preserveAspectRatio="none"
        viewBox="0 0 1000 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroSharedLaserGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#48cae4" stopOpacity="0.85" />
            <stop offset="88%" stopColor="#90e0ef" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#90e0ef" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroSharedLaserGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0077b6" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#00b4d8" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#48cae4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#48cae4" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 985 600 C 985 450, 970 300, 940 180 C 920 100, 880 40, 840 0"
          stroke="url(#heroSharedLaserGrad1)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_12px_rgba(72,202,228,0.9)]"
        />

        <path
          d="M 1000 600 C 1000 480, 985 340, 955 220 C 935 140, 900 60, 860 0"
          stroke="url(#heroSharedLaserGrad2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_10px_rgba(0,180,216,0.8)]"
        />
      </svg>
    </>
  );
};
