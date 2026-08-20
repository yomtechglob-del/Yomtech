import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, ShieldCheck, Cpu, Smartphone, Zap } from 'lucide-react';

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
    { step: '01', name: 'React.js & Next.js', category: 'FRONTEND', desc: 'Modern reactive web architectures with Server-Side Rendering (SSR) & ISR capabilities.', icon: Code, stage: 'FRONTEND', themeBg: 'bg-[#06B6D4]', themeText: 'text-[#06B6D4]', themeBorder: 'border-[#06B6D4]', themeLightBg: 'bg-cyan-50' },
    { step: '02', name: 'Node.js & Express', category: 'BACKEND', desc: 'High-throughput microservices, event-driven REST APIs, and GraphQL endpoints.', icon: Server, stage: 'BACKEND', themeBg: 'bg-[#F97316]', themeText: 'text-[#F97316]', themeBorder: 'border-[#F97316]', themeLightBg: 'bg-amber-50' },
    { step: '03', name: 'Python & FastAPI', category: 'BACKEND', desc: 'AI model serving, automated data processing pipelines, and analytical engines.', icon: Cpu, stage: 'AI & BACKEND', themeBg: 'bg-[#EF4444]', themeText: 'text-[#EF4444]', themeBorder: 'border-[#EF4444]', themeLightBg: 'bg-red-50' },
    { step: '04', name: 'PostgreSQL & MongoDB', category: 'DATABASE', desc: 'Enterprise relational data stores & high-performance document databases.', icon: Database, stage: 'DATABASE', themeBg: 'bg-[#805AD5]', themeText: 'text-[#805AD5]', themeBorder: 'border-[#805AD5]', themeLightBg: 'bg-purple-50' },
    { step: '05', name: 'Docker & Kubernetes', category: 'DATABASE', desc: 'Containerized deployment pipelines, Helm charts, and cloud orchestration.', icon: Cloud, stage: 'DEVOPS', themeBg: 'bg-[#3182CE]', themeText: 'text-[#3182CE]', themeBorder: 'border-[#3182CE]', themeLightBg: 'bg-blue-50' },
    { step: '06', name: 'AI & Computer Vision', category: 'SECURITY', desc: 'Object detection, spatial tracking, and automated video analytics for security.', icon: ShieldCheck, stage: 'SURVEILLANCE', themeBg: 'bg-[#10B981]', themeText: 'text-[#10B981]', themeBorder: 'border-[#10B981]', themeLightBg: 'bg-emerald-50' },
    { step: '07', name: 'React Native & Flutter', category: 'FRONTEND', desc: 'Cross-platform mobile applications for iOS & Android with native performance.', icon: Smartphone, stage: 'MOBILE', themeBg: 'bg-[#D69E2E]', themeText: 'text-[#D69E2E]', themeBorder: 'border-[#D69E2E]', themeLightBg: 'bg-yellow-50' },
    { step: '08', name: 'Redis & Sub-ms Caching', category: 'BACKEND', desc: 'In-memory data structures for sub-millisecond session caching and message pub/sub.', icon: Zap, stage: 'PERFORMANCE', themeBg: 'bg-[#E11D48]', themeText: 'text-[#E11D48]', themeBorder: 'border-[#E11D48]', themeLightBg: 'bg-rose-50' },
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

        {/* Section Header with Connected Horizontal Accent Line */}
        <div className="text-left w-full space-y-4 max-w-full">
          <div className="flex items-center gap-0 w-full">
            <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-[#0ED3DD] to-[#0284C7] rounded-l-full shadow-[0_0_12px_rgba(14,211,221,0.7)]" />
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-50/90 border-2 border-cyan-300 text-[#0284C7] text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md shrink-0">
              <span className="text-[#0284C7] font-bold text-xs">◆</span>
              <span>TECHNOLOGIES & TOOLS</span>
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
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0284C7] text-white shadow-xl shadow-sky-500/30 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Top Curved Notch Tab Cards Grid (Matching Image 2 Reference) */}
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
                {/* Top Protruding Curved Tab Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className={`${item.themeBg} text-white px-8 py-1.5 rounded-b-2xl shadow-md font-black text-lg font-mono tracking-tight flex items-center justify-center`}>
                    <span>{item.step}</span>
                  </div>
                </div>

                {/* Card Main Body: Centered Icon, Stage Tag, Title, Description */}
                <div className="space-y-4 text-center pt-3 flex flex-col items-center">
                  
                  {/* Centered Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${item.themeLightBg} ${item.themeText} border ${item.themeBorder} flex items-center justify-center shadow-inner group-hover:scale-115 transition-transform duration-300`}>
                    <IconComp size={26} strokeWidth={2.2} />
                  </div>

                  {/* Stage Tag */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest ${item.themeLightBg} ${item.themeText} border ${item.themeBorder}`}>
                    {item.stage}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Solid Colored Accent Strip */}
                <div className={`h-2.5 w-full ${item.themeBg} rounded-b-3xl -mx-7 -mb-7 mt-4`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesTechStack;
