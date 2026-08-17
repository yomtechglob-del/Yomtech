import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX, Film, X, Sparkles, Radio } from 'lucide-react';
import videoPoster from '../../assets/vision_pan_africa.png';
import heroTeamImg from '../../assets/about/hero_team.jpg';
import ermiTwoImg from '../../assets/ermi-two.jpg';
import erminOneImg from '../../assets/ermin-one.jpg';

export const CenterEcosystemVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // High quality sample tech video for interactive announcement preview
  const sampleVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41551-large.mp4";

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            
            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src={sampleVideoUrl}
              poster={videoPoster}
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover group-hover/player:scale-105 transition-transform duration-700 opacity-90"
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
                  onClick={togglePlay}
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1E90FF] via-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-[0_0_40px_rgba(30,144,255,0.9)] hover:scale-115 transition-transform duration-300 z-20 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white translate-x-0.5" />}
                </button>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-950/90 text-cyan-300 text-xs font-black uppercase tracking-widest border border-cyan-400/50 backdrop-blur-md shadow-lg">
                {isPlaying ? 'Playing Announcement Preview' : 'Click To Watch Master Announcement Video'}
              </span>
            </div>

            {/* Bottom In-Video Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-auto">
              <div className="flex items-center gap-2">
                <button 
                  onClick={togglePlay} 
                  className="w-9 h-9 rounded-xl bg-black/70 hover:bg-[#1E90FF] text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={toggleMute} 
                  className="w-9 h-9 rounded-xl bg-black/70 hover:bg-[#1E90FF] text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
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
              <span>Center Master Video Announcement</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white leading-tight">
              One Unified Video <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#1E90FF] to-sky-300">
                Announcing All Platforms
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Watch our official master release video introducing <strong className="text-cyan-300 font-bold">WabiSkills, WabiJob, Yomnex ERP, WabiX, Mari</strong>, and <strong className="text-cyan-300 font-bold">YomTech Media</strong> in one seamless, high-impact presentation.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#1E90FF] via-cyan-400 to-cyan-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-cyan-500/35 hover:scale-105 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Watch Official Video</span>
              </button>
              
              <span className="px-4 py-2 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                4K Master Cut
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Video Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border-2 border-cyan-500/50 shadow-[0_0_80px_rgba(2,132,199,0.4)] overflow-hidden">
            
            {/* Modal Top Header Bar */}
            <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-cyan-400" />
                <span className="text-sm sm:text-base font-extrabold text-white font-display">
                  YomTech Global - Ecosystem Announcement Master Video
                </span>
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={modalVideoRef}
                src={sampleVideoUrl}
                poster={videoPoster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
