import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX, Film, X, Sparkles, Radio, CheckCircle2 } from 'lucide-react';
import videoPoster from '../../assets/vision_pan_africa.png';
import heroTeamImg from '../../assets/about/hero_team.jpg';
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

export const CenterEcosystemVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const youtubeId = "PQ00Vons-ms";
  const videoTitle = "የወደፊቱ የ AI አለም | Yomtech on Fana TV";
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <>
      {/* Centerpiece High-Tech Master Video Announcement Marquee Card */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group relative rounded-[2.5rem] bg-[#03045E] border-2 border-cyan-400/80 shadow-[0_20px_60px_rgba(0,180,216,0.35)] hover:shadow-[0_25px_90px_rgba(30,144,255,0.5)] transition-all duration-500 overflow-hidden my-10 cursor-pointer text-left"
      >
        {/* About Hero Section Background Images & Cyan Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <img 
            src={heroTeamImg} 
            alt="About Hero Team Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 group-hover:scale-110 transition-transform duration-1000"
          />
          <img 
            src={ermiTwoImg} 
            alt="Flowing Stream Background Layer" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay animate-river-flow-1"
          />
          <img 
            src={erminOneImg} 
            alt="Flowing Stream Layer Right" 
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-soft-light animate-river-flow-2"
          />
          {/* Dark Hero Cyan Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#0077B6]/80 to-[#0B1528]/95 pointer-events-none" />
        </div>

        {/* Background Rotating Cyber Laser Orbit Rings */}
        <div className="absolute -top-28 -right-28 w-[28rem] h-[28rem] rounded-full border border-cyan-400/40 animate-[spin_25s_linear_infinite] pointer-events-none z-0" />
        <div className="absolute -bottom-28 -left-28 w-[28rem] h-[28rem] rounded-full border border-blue-500/30 animate-[spin_18s_linear_infinite_reverse] pointer-events-none z-0" />
        
        {/* Glowing Corner Laser Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#1E90FF]/40 via-[#1E90FF]/10 to-transparent pointer-events-none z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 relative z-10">
          
          {/* Left Column: Interactive Video Player Frame */}
          <div className="lg:col-span-7 relative group/player rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/50 bg-slate-950 aspect-video flex items-center justify-center">
            
            {/* Real YouTube Video Thumbnail Image */}
            <img
              src={thumbnail}
              alt={videoTitle}
              className="w-full h-full object-cover group-hover/player:scale-105 transition-transform duration-700 opacity-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />

            {/* Dark Cinematic Vignette & Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

            {/* Center Pulsing Radar Play Medallion */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 pointer-events-none z-20">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-28 h-28 rounded-full bg-cyan-400/30 animate-ping" />
                <div className="absolute w-24 h-24 rounded-full bg-[#1E90FF]/50 animate-pulse" />
                <button
                  type="button"
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1E90FF] via-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-[0_0_40px_rgba(30,144,255,0.9)] hover:scale-115 transition-transform duration-300 z-20 cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </button>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-950/90 text-cyan-300 text-xs font-black uppercase tracking-widest border border-cyan-400/50 backdrop-blur-md shadow-lg">
                Click To Watch Official Ecosystem Video
              </span>
            </div>

            {/* Bottom In-Video Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-red-600 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                  YouTube · @yomtech
                </span>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Screen HD</span>
              </button>
            </div>
          </div>

          {/* Right Column: Master Announcement Details */}
          <div className="lg:col-span-5 space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-black uppercase tracking-widest">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>YomTech Digital Ecosystem Overview</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white leading-tight">
              Experience Our Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#1E90FF] to-sky-300">
                Ecosystem in Action
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Watch our official video overview showcasing how YomTech Global powers <strong className="text-cyan-300 font-bold">talent development (WabiSkills)</strong>, <strong className="text-cyan-300 font-bold">recruitment (WabiJob)</strong>, <strong className="text-cyan-300 font-bold">enterprise ERP (Yomnex)</strong>, and digital innovation platforms across Africa — empowering organizations, professionals, and institutions with custom software automation, digital skills training, and next-generation ecosystem tools built for scalable growth.
            </p>

            {/* Two Key Highlight Feature Lines */}
            <div className="space-y-2 pt-2 border-t border-cyan-400/20 text-xs sm:text-sm text-cyan-100 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Unified single-sign-on integration across all YomTech digital platforms.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Empowering African enterprises and professionals with scalable digital solutions.</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#1E90FF] via-cyan-400 to-cyan-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-cyan-500/35 hover:scale-105 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Watch Ecosystem Showcase</span>
              </button>
              
              <span className="px-4 py-2 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Official Yomtech Video
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Video Lightbox Modal */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border-2 border-cyan-500/50 shadow-[0_0_80px_rgba(2,132,199,0.4)] overflow-hidden"
          >
            {/* Modal Top Header Bar */}
            <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-cyan-400" />
                <span className="text-sm sm:text-base font-extrabold text-white font-display">
                  YomTech Global - {videoTitle}
                </span>
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* YouTube Embed Box */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={videoTitle}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
