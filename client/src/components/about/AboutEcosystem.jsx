import React, { useState, useRef } from 'react';
import { Globe, Rocket, Cpu, Users, ArrowRight, Sparkles } from 'lucide-react';

import aboutHeroImg from '../../assets/about/hero.svg';
import aboutCompanyImg from '../../assets/about/company.svg';
import aboutExpertiseImg from '../../assets/about/expertise.svg';
import aboutTeamImg from '../../assets/about/team.svg';

const ABOUT_SECTIONS = [
  {
    id: 's1',
    title: 'About YomeTech Global',
    subtitle: 'Empowering Innovation and Technology.',
    description: 'YomeTech Global is a forward-thinking tech company dedicated to providing online training, business coaching, and hands-on mentorship to help professionals and companies thrive in the digital era. We also develop custom software solutions including ERP, WMS, SFA, mobile/web apps, cloud deployment, and cybersecurity integrations to accelerate growth and efficiency.',
    icon: Globe,
    image: aboutHeroImg,
    imageAlt: 'YomeTech Online Training & Software Solutions',
    theme: {
      accent: 'text-blue-500',
      gradient: 'from-blue-500 to-cyan-400',
      glow: 'rgba(59, 130, 246, 0.15)'
    }
  },
  {
    id: 's2',
    title: 'Our Foundation',
    subtitle: 'Bridging Theory and Reality.',
    description: 'YomeTech Global is a forward-thinking technology company founded in 2015. We specialize in building innovative digital solutions and offering world-class training that bridges the gap between theoretical knowledge and real-world application.',
    icon: Rocket,
    image: aboutCompanyImg,
    imageAlt: 'YomeTech Foundation & Company Innovation',
    theme: {
      accent: 'text-violet-500',
      gradient: 'from-violet-500 to-fuchsia-400',
      glow: 'rgba(139, 92, 246, 0.15)'
    }
  },
  {
    id: 's3',
    title: 'Our Expertise',
    subtitle: 'Enterprise-Grade Engineering.',
    description: 'We are experts in React, Node.js, Python, AI/ML, cloud platforms like AWS & Azure, and modern DevOps practices. Whether it is enterprise-grade apps, scalable APIs, or AI-powered automation, we deliver impactful solutions.',
    icon: Cpu,
    image: aboutExpertiseImg,
    imageAlt: 'YomeTech Engineering & Cloud Expertise',
    theme: {
      accent: 'text-cyan-500',
      gradient: 'from-cyan-400 to-blue-500',
      glow: 'rgba(6, 182, 212, 0.15)'
    }
  },
  {
    id: 's4',
    title: 'Meet the Team',
    subtitle: 'Global Innovators.',
    description: 'Our diverse team of engineers, designers, and strategists brings creativity, expertise, and dedication to every project. Together, we innovate and solve problems for clients and learners across the globe.',
    icon: Users,
    image: aboutTeamImg,
    imageAlt: 'YomeTech Global Team & Engineers',
    theme: {
      accent: 'text-emerald-500',
      gradient: 'from-emerald-400 to-teal-400',
      glow: 'rgba(16, 185, 129, 0.15)'
    }
  }
];

const FeatureBlock = ({ section, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = section.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-between items-center relative z-10 w-full mb-48 md:mb-56 lg:mb-64 last:mb-0`}>
      
      {/* TEXT CONTENT (Glassmorphism Card) */}
      <div className="w-full lg:w-[40%] perspective-1000">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border transition-all duration-700 ease-out p-8 md:p-12 lg:p-14 cursor-pointer
            ${isHovered ? 'border-transparent shadow-[0_30px_60px_rgba(0,0,0,0.08)] scale-[1.01]' : 'border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'}
          `}
          style={{
            transform: isHovered 
              ? `rotateX(${(mousePos.y - 200) / -30}deg) rotateY(${(mousePos.x - 200) / 30}deg) scale3d(1.02, 1.02, 1.02)`
              : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          }}
        >
          {/* Dynamic Inner Glow */}
          <div 
            className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[2.5rem] overflow-hidden"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div 
              className="absolute w-[500px] h-[500px] rounded-full blur-[60px] transition-transform duration-75 ease-out mix-blend-multiply"
              style={{
                background: section.theme.glow,
                transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
              }}
            />
          </div>

          {/* Animated Border Reveal */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] bg-gradient-to-br ${section.theme.gradient} p-[1.5px]`}
            style={{ 
              opacity: isHovered ? 1 : 0,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
              WebkitMaskComposite: 'xor' 
            }}
          >
            <div className="w-full h-full bg-transparent rounded-[calc(2.5rem-1.5px)]" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Top Badge & Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative overflow-hidden transition-transform duration-500 ${isHovered ? 'scale-110 -rotate-6' : ''}`}>
                 <div className={`absolute inset-0 bg-gradient-to-br ${section.theme.gradient} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`} />
                 <Icon className={`w-6 h-6 ${section.theme.accent} relative z-10`} strokeWidth={2} />
              </div>
              <span className={`px-4 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${section.theme.accent}`}>
                Section 0{index + 1}
              </span>
            </div>

            {/* Typography */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${section.theme.gradient} inline-block transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`}>
                {section.title.split(' ')[0]}
              </span>
              {' '}{section.title.split(' ').slice(1).join(' ')}
            </h2>
            
            <h3 className={`text-sm md:text-base font-extrabold mb-6 ${section.theme.accent} tracking-wide`}>
              {section.subtitle}
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8">
              {section.description}
            </p>

            {/* Interactive Button */}
            <button className="flex items-center gap-2 text-sm font-bold text-slate-800 group/btn outline-none cursor-pointer">
              <span className="group-hover/btn:text-blue-600 transition-colors">Explore further</span>
              <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-blue-50 transition-colors`}>
                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:text-blue-600 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE SHOWCASE (Levitating Container - Balanced Compact Size) */}
      <div className={`w-full lg:w-[40%] h-full flex items-center ${isEven ? 'justify-start' : 'justify-end'} relative`}>
        {/* Animated Glow Behind Image */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-br ${section.theme.gradient} blur-[80px] opacity-25 animate-pulse-slow`} />
        
        {/* Image Wrapper (Balanced Compact Size) */}
        <div 
          className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] bg-white/80 backdrop-blur-md border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 md:p-6 animate-float"
          style={{ animationDelay: `${index * 1.5}s` }}
        >
          {/* Inner Image Container */}
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-50 relative group flex items-center justify-center p-4 md:p-6">
             <img 
               src={section.image} 
               alt={section.imageAlt}
               className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Central Node Badge anchored directly to inner border of Image Wrapper */}
          <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center transition-all duration-500 ${isEven ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}>
            <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${section.theme.gradient} border-[2.5px] border-white shadow-[0_4px_25px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-125 shadow-[0_4px_30px_rgba(0,0,0,0.25)]' : ''}`}>
              
              {/* Rotating Angle Ring over Icon */}
              <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-sky-400/80 animate-spin-slow pointer-events-none" />
              
              <Icon className="w-6 h-6 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.2} />
              
              {/* Mini Step Number Badge (Matching Reference Screenshot) */}
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-white shadow-md text-[11px] font-black flex items-center justify-center">
                <span className={`w-full h-full rounded-full bg-gradient-to-br ${section.theme.gradient} text-white flex items-center justify-center`}>
                  {index + 1}
                </span>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export const AboutEcosystem = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-white overflow-hidden font-sans selection:bg-blue-500/20 selection:text-blue-900 border-b border-slate-200/80">
      
      {/* Ethereal Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)', 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 10%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 10%, transparent 90%)'
          }}
        />
        
        <div className="absolute top-[-5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[130px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-100/40 blur-[140px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-100/40 blur-[150px] mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Ultra-Visible High-Contrast Neon Zigzag Double Line Track (SVG covering entire section including Header) */}
        <svg 
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="neonZigzagGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="33%" stopColor="#8b5cf6" />
              <stop offset="66%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faint Ambient Background Glow Track */}
          <path
            d="M 50 4.0 L 61.0 4.0 Q 64.5 4.0 64.5 6.9 Q 64.5 9.8 61.0 9.8 L 39.0 9.8 Q 35.5 9.8 35.5 6.9 Q 35.5 4.0 39.0 4.0 L 50 4.0 M 64.5 9.8 L 60 23 L 40 45 L 60 67 L 40 89 L 50 100"
            fill="none"
            stroke="url(#neonZigzagGlow)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.15"
            filter="url(#neonBlur)"
            vectorEffect="non-scaling-stroke"
          />

          {/* Double Line Track - Outer Rail Base */}
          <path
            d="M 50 4.0 L 61.0 4.0 Q 64.5 4.0 64.5 6.9 Q 64.5 9.8 61.0 9.8 L 39.0 9.8 Q 35.5 9.8 35.5 6.9 Q 35.5 4.0 39.0 4.0 L 50 4.0 M 64.5 9.8 L 60 23 L 40 45 L 60 67 L 40 89 L 50 100"
            fill="none"
            stroke="url(#neonZigzagGlow)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Double Line Track - Inner Core Gap (Creating 2 Parallel Lines) */}
          <path
            d="M 50 4.0 L 61.0 4.0 Q 64.5 4.0 64.5 6.9 Q 64.5 9.8 61.0 9.8 L 39.0 9.8 Q 35.5 9.8 35.5 6.9 Q 35.5 4.0 39.0 4.0 L 50 4.0 M 64.5 9.8 L 60 23 L 40 45 L 60 67 L 40 89 L 50 100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Double Line Track - Dashed Outer Stream */}
          <path
            d="M 50 4.0 L 61.0 4.0 Q 64.5 4.0 64.5 6.9 Q 64.5 9.8 61.0 9.8 L 39.0 9.8 Q 35.5 9.8 35.5 6.9 Q 35.5 4.0 39.0 4.0 L 50 4.0 M 64.5 9.8 L 60 23 L 40 45 L 60 67 L 40 89 L 50 100"
            fill="none"
            stroke="url(#neonZigzagGlow)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Double Line Track - Dynamic Traveling White Laser Dashes */}
          <path
            d="M 50 4.0 L 61.0 4.0 Q 64.5 4.0 64.5 6.9 Q 64.5 9.8 61.0 9.8 L 39.0 9.8 Q 35.5 9.8 35.5 6.9 Q 35.5 4.0 39.0 4.0 L 50 4.0 M 64.5 9.8 L 60 23 L 40 45 L 60 67 L 40 89 L 50 100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeDasharray="4 10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-zigzag-dash"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center relative z-10">
          <div className="relative inline-block group cursor-default">
            {/* Rotating dashed angle ring over Category Title Header */}
            <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed border-blue-400/80 animate-spin-slow pointer-events-none" />
            
            {/* Ethereal Glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

            <div className="relative px-10 py-6 rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-blue-100 shadow-[0_15px_40px_rgba(37,99,235,0.12)] flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700">
                  Corporate Overview & Ecosystem
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Innovating the Future of <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
                  Technology & Learning
                </span>
              </h1>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed mt-6">
            Discover the heritage, expertise, and global team driving YomeTech Global's mission to bridge the gap between theory and real-world application.
          </p>
        </div>

        {/* ZIG-ZAG CONTENT BLOCKS */}
        <div className="relative w-full">
            {ABOUT_SECTIONS.map((section, index) => (
                <FeatureBlock key={section.id} section={section} index={index} />
            ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite alternate ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.5; transform: scale(1.1) translate(-50%, -50%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes vertical-laser {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-vertical-laser {
          animation: vertical-laser 3.5s linear infinite;
        }

        @keyframes zigzag-dash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -36; }
        }
        .animate-zigzag-dash {
          animation: zigzag-dash 2s linear infinite;
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </section>
  );
};

export default AboutEcosystem;
