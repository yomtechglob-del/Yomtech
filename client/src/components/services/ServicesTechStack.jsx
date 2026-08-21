import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoEmblem from '../../assets/logos/logo.png';

// --- Official Tech Brand SVG Icons ---
const ReactNextIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current text-[#61DAFB]">
    <circle cx="50" cy="50" r="10" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 50 50)" />
  </svg>
);

const NodeExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#339933]">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8 13.5l-8 4.4-8-4.4v-7l8-4.4 8 4.4v7z" />
    <path d="M12 6.5L6 9.8v4.4l6 3.3 6-3.3V9.8l-6-3.3z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <path fill="#3776AB" d="M11.87 2c-4.46 0-4.19 1.93-4.19 1.93l.01 2h4.25v.6H6.03S2 6.06 2 10.55c0 4.48 3.5 4.32 3.5 4.32h2.09v-2.94s-.11-3.5 3.5-3.5h3.42s3.32.06 3.32-3.23c0-3.3-2.9-3.2-2.9-3.2h-2.99zm-2.02 1.35c.42 0 .76.34.76.76 0 .42-.34.76-.76.76-.42 0-.76-.34-.76-.76 0-.42.34-.76.76-.76z" />
    <path fill="#FFD43B" d="M12.13 22c4.46 0 4.19-1.93 4.19-1.93l-.01-2h-4.25v-.6h5.91S22 17.94 22 13.45c0-4.48-3.5-4.32-3.5-4.32h-2.09v2.94s.11 3.5-3.5 3.5h-3.42s-3.32-.06-3.32 3.23c0 3.3 2.9 3.2 2.9 3.2h2.99zm2.02-1.35c-.42 0-.76-.34-.76-.76 0-.42-.34-.76.76-.76.42 0 .76.34.76.76 0 .42-.34-.76-.76-.76z" />
  </svg>
);

const PostgresMongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#47A248]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const DockerK8sIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#2496ED]">
    <path d="M13.98 11.08h-2.12v-2.1h2.12v2.1zm-3.18 0H8.68v-2.1h2.12v2.1zm-3.18 0H5.5v-2.1h2.12v2.1zm6.36-3.18h-2.12V5.8h2.12v2.1zm-3.18 0H8.68V5.8h2.12v2.1zm-3.18 0H5.5V5.8h2.12v2.1zm9.54 3.18h-2.12v-2.1h2.12v2.1zm3.18 0h-2.12v-2.1h2.12v2.1zM2.5 13.2c0 4.8 3.9 8.7 8.7 8.7s8.7-3.9 8.7-8.7c0-.5-.04-1-.12-1.48H2.62c-.08.48-.12.98-.12 1.48z" />
  </svg>
);

const AiVisionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#805AD5]">
    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    <circle cx="12" cy="12" r="4" fill="#805AD5" />
  </svg>
);

const FlutterMobileIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#02569B]">
    <path d="M14.314 0L2.3 12 6 15.7 21.714 0h-7.4zm.014 11.071l-6.157 6.157 6.157 6.157h7.4l-6.157-6.157 6.157-6.157h-7.4z" />
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#DC382D]">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7v6l8 4 8-4V7l-8 4zm0 6l-8-4v4l8 5 8-5v-4l-8 4z" />
  </svg>
);

export const ServicesTechStack = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = [
    { id: 'ALL', name: 'All Technologies' },
    { id: 'FRONTEND', name: 'Frontend & UI' },
    { id: 'BACKEND', name: 'Backend & APIs' },
    { id: 'DATABASE', name: 'Data & Cloud' },
    { id: 'SECURITY', name: 'AI & Security' },
  ];

  const techItems = [
    { 
      step: '01', 
      name: 'React.js & Next.js', 
      category: 'FRONTEND', 
      desc: 'Modern reactive web architectures with Server-Side Rendering (SSR) & ISR capabilities.', 
      icon: ReactNextIcon, 
      stage: 'Frontend', 
      themeBg: 'bg-[#06B6D4]', 
      themeText: 'text-[#06B6D4]', 
      themeBorder: 'border-[#06B6D4]', 
      themeLightBg: 'bg-cyan-50' 
    },
    { 
      step: '02', 
      name: 'Node.js & Express', 
      category: 'BACKEND', 
      desc: 'High-throughput microservices, event-driven REST APIs, and GraphQL endpoints.', 
      icon: NodeExpressIcon, 
      stage: 'Backend', 
      themeBg: 'bg-[#339933]', 
      themeText: 'text-[#339933]', 
      themeBorder: 'border-[#339933]', 
      themeLightBg: 'bg-emerald-50' 
    },
    { 
      step: '03', 
      name: 'Python & FastAPI', 
      category: 'BACKEND', 
      desc: 'AI model serving, automated data processing pipelines, and analytical engines.', 
      icon: PythonIcon, 
      stage: 'AI & Backend', 
      themeBg: 'bg-[#3776AB]', 
      themeText: 'text-[#3776AB]', 
      themeBorder: 'border-[#3776AB]', 
      themeLightBg: 'bg-blue-50' 
    },
    { 
      step: '04', 
      name: 'PostgreSQL & MongoDB', 
      category: 'DATABASE', 
      desc: 'Enterprise relational data stores & high-performance document databases.', 
      icon: PostgresMongoIcon, 
      stage: 'Database', 
      themeBg: 'bg-[#47A248]', 
      themeText: 'text-[#47A248]', 
      themeBorder: 'border-[#47A248]', 
      themeLightBg: 'bg-green-50' 
    },
    { 
      step: '05', 
      name: 'Docker & Kubernetes', 
      category: 'DATABASE', 
      desc: 'Containerized deployment pipelines, Helm charts, and cloud orchestration.', 
      icon: DockerK8sIcon, 
      stage: 'DevOps', 
      themeBg: 'bg-[#2496ED]', 
      themeText: 'text-[#2496ED]', 
      themeBorder: 'border-[#2496ED]', 
      themeLightBg: 'bg-sky-50' 
    },
    { 
      step: '06', 
      name: 'AI & Computer Vision', 
      category: 'SECURITY', 
      desc: 'Object detection, spatial tracking, and automated video analytics for security.', 
      icon: AiVisionIcon, 
      stage: 'Surveillance', 
      themeBg: 'bg-[#805AD5]', 
      themeText: 'text-[#805AD5]', 
      themeBorder: 'border-[#805AD5]', 
      themeLightBg: 'bg-purple-50' 
    },
    { 
      step: '07', 
      name: 'React Native & Flutter', 
      category: 'FRONTEND', 
      desc: 'Cross-platform mobile applications for iOS & Android with native performance.', 
      icon: FlutterMobileIcon, 
      stage: 'Mobile', 
      themeBg: 'bg-[#02569B]', 
      themeText: 'text-[#02569B]', 
      themeBorder: 'border-[#02569B]', 
      themeLightBg: 'bg-indigo-50' 
    },
    { 
      step: '08', 
      name: 'Redis & Sub-ms Caching', 
      category: 'BACKEND', 
      desc: 'In-memory data structures for sub-millisecond session caching and message pub/sub.', 
      icon: RedisIcon, 
      stage: 'Performance', 
      themeBg: 'bg-[#DC382D]', 
      themeText: 'text-[#DC382D]', 
      themeBorder: 'border-[#DC382D]', 
      themeLightBg: 'bg-rose-50' 
    },
  ];

  const filteredItems = activeTab === 'ALL' ? techItems : techItems.filter(item => item.category === activeTab);

  return (
    <section className="relative py-24 lg:py-36 bg-[#F4F9FF] overflow-hidden font-sans border-b border-slate-200/80">
      {/* Background Dot Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-bold shrink-0 backdrop-blur-md">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>Technologies &amp; Tools</span>
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            Engineered with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-cyan-600 to-indigo-600">
              Cutting-Edge Tech
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-4xl font-sans">
            We leverage battle-tested open-source frameworks, high-performance cloud tools, and robust security protocols to build scalable enterprise solutions.
          </p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0284C7] text-white shadow-xl shadow-sky-500/30 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Top Curved Notch Tab Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4">
          {filteredItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 relative flex flex-col justify-between overflow-hidden group border border-slate-100/90 pt-8 p-7 space-y-6"
              >
                {/* Translucent YomTech Brand Logo Watermark Background at Bottom-Right Corner */}
                <div className="absolute right-2 bottom-4 opacity-[0.18] pointer-events-none z-0">
                  <img src={logoEmblem} alt="" className="w-24 sm:w-28 h-24 sm:h-28 object-contain" />
                </div>

                {/* Top Protruding Curved Tab Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className={`${item.themeBg} text-white px-8 py-1.5 rounded-b-2xl shadow-md font-black text-lg font-mono tracking-tight flex items-center justify-center`}>
                    <span>{item.step}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="space-y-4 text-center pt-3 flex flex-col items-center relative z-10">
                  
                  {/* Centered Official Tech Brand Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${item.themeLightBg} border-2 ${item.themeBorder} flex items-center justify-center shadow-inner group-hover:scale-115 transition-transform duration-300`}>
                    <IconComp />
                  </div>

                  {/* Stage Tag */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider ${item.themeLightBg} ${item.themeText} border ${item.themeBorder}`}>
                    {item.stage}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Solid Colored Accent Strip */}
                <div className={`h-2.5 w-full ${item.themeBg} rounded-b-3xl -mx-7 -mb-7 mt-4 relative z-10`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesTechStack;
